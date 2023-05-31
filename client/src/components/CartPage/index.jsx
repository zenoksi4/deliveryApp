import { useEffect, useReducer, useState } from 'react';
import Button from '../Button';
import ContactForm from './ContactForm';
import ProductsCart from './ProductsCart';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';

const initialStateForm = {
    email: '',
    phone: '',
    name: '',
    address: ''
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'change':
        return { ...state, [action.field]: action.value };
      default:
        throw new Error('Unknown action type');
    }
  }

function CartPage() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [stateForm, dispatchForm] = useReducer(reducer, initialStateForm);
    
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    

    const handleChangeForm = (event) => {
      const { name, value } = event.target;
      dispatchForm({ type: 'change', field: name, value });
    };

    useEffect(() => {
        if (cart.length !== 0){
            const total = cart.reduce((acc, cartProd) => acc + cartProd.price * cartProd.count, 0);

            setTotalPrice(total);
        }
    
    }, [dispatch, cart]);
    
    return (
        <div className={styles.cartPageWrapper}>
            <div className={styles.cartInform}>
                <ContactForm stateForm={stateForm} handleChangeForm={handleChangeForm}/>
                <ProductsCart/>
            </div>
            <div className={styles.submitInform}>
                <p className={styles.totalPrice}>total price: {totalPrice}$</p>
                <Button className={styles.submit}>Submit</Button>
            </div>
        </div>
    );
  }
  
export default CartPage;
  