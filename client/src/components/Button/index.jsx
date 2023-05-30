import styles from './styles.module.css'



function Button({ className, href, children}) {
    return (
        <>
      <button className={`${styles.button} ${className}`} href='shopping-cart'>
        {children}
      </button>
      </>
    );
  }
  
export default Button;
  