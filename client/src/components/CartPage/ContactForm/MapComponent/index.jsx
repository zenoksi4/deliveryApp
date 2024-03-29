import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./styles.module.css";
import { Polyline } from "@react-google-maps/api";
import { useSelector } from "react-redux";

function MapComponent({ stateForm, handleChangeForm }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_KEY}`,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map stateForm={stateForm} handleChangeForm={handleChangeForm} />;
}

function Map({ stateForm, handleChangeForm }) {
  const { shops } = useSelector((state) => state.shops);
  const { shopId } = useSelector((state) => state.cart);
  const [shopLocation, setShopLocation] = useState({
    lat: 49.840107078158766,
    lng: 24.023565201245322,
  });

  const [selected, setSelected] = useState(null);
  const [pathCoordinates, setPathCoordinates] = useState([]);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (selected) {
      calculatePathCoordinates(selected, shopLocation);
    }
    if (shopId) {
      setShopLocation(shops.find((shop) => shop._id === shopId).location);
    }
  }, [selected, shopLocation, shopId, shops]);

  const calculatePathCoordinates = async (origin, destination) => {
    const service = new window.google.maps.DirectionsService();

    service.route(
      {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(
          destination.lat,
          destination.lng
        ),
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const path = response.routes[0].overview_path.map((point) => ({
            lat: point.lat(),
            lng: point.lng(),
          }));
          setPathCoordinates(path);
          setDuration(response.routes[0].legs[0].duration.text);
        }
      }
    );
  };

  async function getAddressFromCoordinates(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      const address = data.results[0].formatted_address;

      const setAddress = {
        target: {
          name: "address",
          value: address,
        },
      };

      handleChangeForm(setAddress);
    }
  }

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    getAddressFromCoordinates(lat, lng);

    setSelected({ lat, lng });
  };

  return (
    <>
      <GoogleMap
        zoom={10}
        center={selected || shopLocation}
        mapContainerClassName={styles.map_container}
        onClick={handleMapClick}
      >
        {selected && <Marker position={selected} />}
        {shopLocation && <Marker position={shopLocation} />}
        {pathCoordinates.length > 0 && selected && (
          <Polyline
            path={pathCoordinates}
            options={{ strokeColor: "#0000FF" }}
          />
        )}
        {duration && selected && (
          <div
            style={{
              position: "absolute",
              top: 180,
              left: 10,
              backgroundColor: "white",
              padding: 10,
              color: "black",
            }}
          >
            Duration: {duration}
          </div>
        )}
      </GoogleMap>

      <div>
        <PlacesAutocomplete
          handleChangeForm={handleChangeForm}
          setSelected={setSelected}
          stateForm={stateForm}
        />
      </div>
    </>
  );
}

const PlacesAutocomplete = ({ stateForm, handleChangeForm, setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    clearSuggestions();
  }, [value, setValue, stateForm]);

  const handleChangeInput = (e) => {
    clearSuggestions();
    setValue(stateForm.address || e.target.value);
    setSelected(null);
    const setAddress = {
      target: {
        name: "address",
        value: e.target.value,
      },
    };
    handleChangeForm(setAddress);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const setAddress = {
      target: {
        name: "address",
        value: address,
      },
    };
    handleChangeForm(setAddress);
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={stateForm.address || value}
        onChange={handleChangeInput}
        disabled={!ready}
        className={styles.input}
        placeholder="Address"
        type="address"
      />
      <ComboboxPopover className={styles.list}>
        <ComboboxList className={styles.option}>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default MapComponent;
