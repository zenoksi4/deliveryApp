import Input from '../../Input';
import styles from './styles.module.css'


function ProductsCart() {
    return (
      <div className={styles.productsCartBox}>
        <div className={styles.productCard}>
            <img className={styles.cardImg} alt='product' src='https://www.resizepixel.com/Image/dkkarenjq/Preview/black_and_blue_burger_95881_16x9.jpg?v=0e4ab2da-4408-48e1-9446-a5fd923893bb'/>
            <div className={styles.cardDesc}>
                <h4>Big Big Burger</h4>
                <p>price: 4$</p>
                <Input type='number' className={styles.countCard}/>
            </div>
        </div>

        
      </div>
    );
  }
  
export default ProductsCart;
  