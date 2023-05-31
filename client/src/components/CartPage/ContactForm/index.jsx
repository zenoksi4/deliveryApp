import Input from '../../Input';
import MapComponent from './MapComponent';
import styles from './styles.module.css'
import React from 'react';



function ContactForm({stateForm, handleChangeForm}) {
  return (
    <div className={styles.formContent}>
      <div className={styles.map}><MapComponent handleChangeForm={handleChangeForm}/></div>

      <Input 
        name='email' 
        type="email" 
        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
        value={stateForm.email} 
        onChange={(e) => handleChangeForm(e)} 
        placeholder='Email'
        classNameWrapper={styles.formInput}
      />
      <Input 
        name='phone' 
        type="tel" 
        pattern="[0-9]{10}" 
        value={stateForm.phone} 
        onChange={handleChangeForm} 
        classNameWrapper={styles.formInput}
        placeholder='Phone like a: 0500867426'
      />
      <Input 
        classNameWrapper={styles.formInput} 
        name='name' value={stateForm.name} 
        onChange={handleChangeForm} 
        placeholder='Name'
      />

    </div>
  );
  }
  
export default ContactForm;
  