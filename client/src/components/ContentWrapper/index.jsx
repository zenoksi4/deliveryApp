import styles from './styles.module.css'


function ContentWrapper({children}) {
    return (
      <div className={styles.wrapper}>
        {children}
      </div>
    );
  }
  
export default ContentWrapper;
  