import styles from './styles.module.css'



function Button({ 
    className,
    children,
    onClick = () => {},
    data_tooltip_id,
  }) {
    return (
        <>
      <button 
        data-tooltip-id={data_tooltip_id} 
        className={`${styles.button} ${className}`} 
        onClick={onClick} 
      >
        {children}
      </button>
      </>
    );
  }
  
export default Button;
  