import { useEffect, useReducer, useState } from 'react';
import Button from '../Button';
import ContactForm from './ContactForm';
import ProductsCart from './ProductsCart';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, createOrder } from '../../store/cart/cartSlice';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ReCAPTCHA from "react-google-recaptcha"

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
    const [submitted, setSubmitted] = useState(false);
    const [stateForm, dispatchForm] = useReducer(reducer, initialStateForm);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    
    const SubmitHandler = () => {
        const emailPattern = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/;
        const phonePattern = /[0-9]{10}/;
        const validate = emailPattern.test(stateForm.email) 
            & phonePattern.test(stateForm.phone)
            & stateForm.name.trim().length > 0
            & stateForm.address.trim().length > 0
            & cart.length > 0
            & isCaptchaVerified;
        console.log(validate, '123');
        if(validate) {
            const Order = {
                "address": stateForm.address,
                "email": stateForm.email,
                "phone": stateForm.phone,
                "name": stateForm.name,
                "totalPrice": totalPrice,
                "productsCart": cart
            }
            dispatch(createOrder(Order));
            dispatch(clearCart());
            setSubmitted(true)
        
        }
    }

    const handleChangeForm = (event) => {
      const { name, value } = event.target;
      dispatchForm({ type: 'change', field: name, value });
    };

    const handleCaptchaChange = (value) => {
        if (value) {
          setIsCaptchaVerified(true);
        } else {
          setIsCaptchaVerified(false);
        }
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
                <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_KEY} onChange={handleCaptchaChange}/>
                <p className={styles.totalPrice}>total price: {totalPrice}$</p>
                <Button data_tooltip_id={`tooltip-submitted`} onClick={SubmitHandler} className={styles.submit}>Submit</Button>
                {
                    submitted ?
                        <ReactTooltip 
                            id={`tooltip-submitted`} 
                            effect="solid" 
                            events={['click']}
                        >Submitted</ReactTooltip>
                    :
                        <ReactTooltip 
                            id={`tooltip-submitted`} 
                            effect="solid" 
                            events={['click']}
                        >The order is poorly made</ReactTooltip>
                }
            </div>
        </div>
    );
  }
  
export default CartPage;
  