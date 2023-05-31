import { useSelector } from 'react-redux';
import Button from '../../Button';
import styles from './styles.module.css'


function Shops({selectedShop, setSelectedShop}) {
  const { shops } = useSelector((state) => state.shops);

  const handleShopButton = (_id) => {
    setSelectedShop(_id)
  }

  return (
    <div className={styles.ShopsWrapper}>
      <h2>Shops</h2>
      {shops && shops
        .map(shop =>
          <Button 
            className={`${styles.shopsButton} ${shop._id == selectedShop && styles.active}`}
            onClick={() => handleShopButton(shop._id)}
          >{shop.name}</Button>
        )
      }
    
    </div>
  );
  }
  
export default Shops;
  