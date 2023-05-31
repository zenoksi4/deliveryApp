import Input from '../../Input';
import styles from './styles.module.css'
import React from 'react';



function ContactForm({stateForm, handleChangeForm}) {
  return (
    <div className={styles.formContent}>
      <h2>Contact information</h2>
      <Input name='address' value={stateForm.address} onChange={handleChangeForm} placeholder='Address'/>
      <Input 
        name='email' 
        type="email" 
        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
        value={stateForm.email} 
        onChange={handleChangeForm} 
        placeholder='Email'
      />
      <Input 
        name='phone' 
        type="tel" 
        pattern="[0-9]{10}" 
        value={stateForm.phone} 
        onChange={handleChangeForm} 
        placeholder='Phone like a: 0500867426'
      />
      <Input name='name' value={stateForm.name} onChange={handleChangeForm} placeholder='Name'/>

    </div>
  );
  }
  
export default ContactForm;
  