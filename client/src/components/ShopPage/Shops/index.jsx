import Button from '../../Button';
import styles from './styles.module.css'


function Shops() {
    return (
      <div className={styles.ShopsWrapper}>
        <h2>Shops</h2>
        <Button className={styles.shopsButton}>McBurger</Button>
        <Button className={styles.shopsButton}>McBurger</Button>
        <Button className={styles.shopsButton}>McBurger</Button>
        <Button className={styles.shopsButton}>McBurger</Button>
        <Button className={styles.shopsButton}>McBurger</Button>
      </div>
    );
  }
  
export default Shops;
  