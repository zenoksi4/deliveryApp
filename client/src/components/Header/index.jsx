import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './styles.module.css'
import { paths } from '../../paths';


function Header() {
    return (
        <div className={styles.headerWrapper}>
            <Link to={`${paths.shop}`}>
                <Button>Shop</Button>
            </Link> 
            <Link to={`${paths.shoppingCart}`}>
                <Button>Shopping Cart</Button>
            </Link> 
        </div>
    );
  }
  
export default Header;
  