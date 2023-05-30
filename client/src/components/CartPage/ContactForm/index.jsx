import Input from '../../Input';
import styles from './styles.module.css'


function ContactForm() {
    return (
      <div className={styles.formContent}>
        <h2>Contact information</h2>
        <Input name='address' placeholder='Address'/>
        <Input name='email' placeholder='Email'/>
        <Input name='phone' placeholder='Phone'/>
        <Input name='name' placeholder='Name'/>

      </div>
    );
  }
  
export default ContactForm;
  