import styles from './styles.module.css'


function Button({ className, children}) {
    return (
      <button className={`${styles.button} ${className}`}>
        {children}
      </button>
    );
  }
  
export default Button;
  