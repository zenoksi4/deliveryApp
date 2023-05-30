import Button from '../Button';
import ContactForm from './ContactForm';
import ProductsCart from './ProductsCart';
import styles from './styles.module.css'


function CartPage() {
    return (
        <div className={styles.cartPageWrapper}>
            <div className={styles.cartInform}>
                <ContactForm/>
                <ProductsCart/>
            </div>
            <div className={styles.submitInform}>
                <p className={styles.totalPrice}>total price: 250$</p>
                <Button className={styles.submit}>Submit</Button>
            </div>
        </div>
    );
  }
  
export default CartPage;
  