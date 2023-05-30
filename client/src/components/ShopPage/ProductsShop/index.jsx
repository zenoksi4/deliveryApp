import Button from '../../Button';
import styles from './styles.module.css'


function ProductsShop() {
    return (
      <div className={styles.productShopWrapper}>
        <div className={styles.productCardContent}>

            <img className={styles.cardImg} src='https://www.resizepixel.com/Image/dkkarenjq/Preview/black_and_blue_burger_95881_16x9.jpg?v=0e4ab2da-4408-48e1-9446-a5fd923893bb'/>
            <div className={styles.cardDesc} >
            <h3 className={styles.cardTitle} >Big Big Burger</h3>
                <p className={styles.cardPrice}>22$</p>
            </div>
            <Button>Add to Cart</Button>
        </div>

        <div className={styles.productCardContent}>

            <img className={styles.cardImg} src='https://www.resizepixel.com/Image/dkkarenjq/Preview/black_and_blue_burger_95881_16x9.jpg?v=0e4ab2da-4408-48e1-9446-a5fd923893bb'/>
            <div className={styles.cardDesc} >
            <h3 className={styles.cardTitle} >Big Big Burger</h3>
                <p className={styles.cardPrice}>22$</p>
            </div>
            <Button>Add to Cart</Button>
        </div>

        <div className={styles.productCardContent}>

            <img className={styles.cardImg} src='https://www.resizepixel.com/Image/dkkarenjq/Preview/black_and_blue_burger_95881_16x9.jpg?v=0e4ab2da-4408-48e1-9446-a5fd923893bb'/>
            <div className={styles.cardDesc} >
            <h3 className={styles.cardTitle} >Big Big Burger</h3>
                <p className={styles.cardPrice}>22$</p>
            </div>
            <Button>Add to Cart</Button>
        </div>
        <div className={styles.productCardContent}>

            <img className={styles.cardImg} src='https://www.resizepixel.com/Image/dkkarenjq/Preview/black_and_blue_burger_95881_16x9.jpg?v=0e4ab2da-4408-48e1-9446-a5fd923893bb'/>
            <div className={styles.cardDesc} >
            <h3 className={styles.cardTitle} >Big Big Burger</h3>
                <p className={styles.cardPrice}>22$</p>
            </div>
            <Button>Add to Cart</Button>
        </div>



      </div>
    );
  }
  
export default ProductsShop;
  