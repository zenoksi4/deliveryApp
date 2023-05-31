import { useSelector } from 'react-redux';
import Button from '../../Button';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import styles from './styles.module.css'


function Shops({selectedShop, setSelectedShop}) {
  const { shops } = useSelector((state) => state.shops);
  const { cart } = useSelector((state) => state.cart);

  const handleShopButton = (_id) => {
    if(cart.length === 0){

      setSelectedShop(_id);
    }

  }

  return (
    <div className={styles.ShopsWrapper}>
      <h2>Shops</h2>
      {shops && shops
        .map(shop =>
          <>
          <Button 
            className={`${styles.shopsButton} ${shop._id !== selectedShop && styles.inactive}`}
            onClick={() => handleShopButton(shop._id)}
            data_tooltip_id={`tooltip-${shop._id}`}
          >{shop.name}</Button>
          {
            cart.length !== 0 && shop._id !== selectedShop &&
              <ReactTooltip 
                id={`tooltip-${shop._id}`} 
                effect="solid" 
              >You can add items to cart from only one shop!</ReactTooltip>
          }
          </>
        )
      }
    
    </div>
  );
  }
  
export default Shops;
  