import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../../store/cart/cartSlice';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Button from '../../Button';
import styles from './styles.module.css'




function ProductsShopCard({product}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const AddToCartHandler = (product) => {
    if (cart.indexOf(product) !== -1) {
      setShowTooltip(true);
    } else {
      dispatch(addToCart(product));
      setShowTooltip(false);
    }}
  

  return (
    <div className={styles.productCardContent}>
    
        <img className={styles.cardImg} alt='product' src={product.img}/>
        <div className={styles.cardDesc} >
            <h3 className={styles.cardTitle} >{product.title}</h3>
            <p  className={styles.cardPrice}>{product.price}$</p>
        </div>
        <Button data_tooltip_id={`tooltip-${product._id}`} onClick={() => AddToCartHandler(product)}>Add to Cart</Button>
        {
            showTooltip ?
                <ReactTooltip 
                    id={`tooltip-${product._id}`} 
                    effect="solid" 
                    events={['click']}
                >The item is already in the cart</ReactTooltip>
            :
                <ReactTooltip 
                    id={`tooltip-${product._id}`} 
                    effect="solid" 
                    events={['click']}
                >The item has been added</ReactTooltip>
        }

    </div>
  );
  }
  
export default ProductsShopCard;
  