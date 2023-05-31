import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsShop from './ProductsShop';
import Shops from './Shops';
import styles from './styles.module.css'


function ShopPage() {
  const { shops } = useSelector((state) => state.shops);
  const [selectedShop, setSelectedShop] = useState(null);
  
  useEffect(() => {
    shops && setSelectedShop(shops[0]._id)

  }, [shops]);
  return (
    <div className={styles.shopPageWrapper}>
      <Shops selectedShop={selectedShop} setSelectedShop={setSelectedShop}/>
      <ProductsShop selectedShop={selectedShop}/>
    </div>
  );
  }
  
export default ShopPage;
  