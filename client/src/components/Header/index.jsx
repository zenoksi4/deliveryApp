import Button from '../Button';
import styles from './styles.module.css'


function Header() {
    return (
      <div className={styles.headerWrapper}>
        <Button>Shop</Button>
        <Button>Shopping cart</Button>
      </div>
    );
  }
  
export default Header;
  