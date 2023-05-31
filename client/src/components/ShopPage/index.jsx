import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsShop from './ProductsShop';
import Shops from './Shops';
import styles from './styles.module.css'


function ShopPage() {
  const { shops } = useSelector((state) => state.shops);
  const { shopId } = useSelector((state) => state.cart);
  const [selectedShop, setSelectedShop] = useState(null);
  
  useEffect(() => {
    if(shopId !== ''){
      setSelectedShop(shopId)
    } else {
      shops && setSelectedShop(shops[0]._id)
    }

  }, [shops, shopId]);
  return (
    <div className={styles.shopPageWrapper}>
      <Shops selectedShop={selectedShop} setSelectedShop={setSelectedShop}/>
      <ProductsShop selectedShop={selectedShop}/>
    </div>
  );
  }
  
export default ShopPage;
  