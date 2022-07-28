import React from 'react';
import '../styles/About.css';



import { useRef } from 'react';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  };

  return (
    <div className='parentForm'>
      <h2 className='contact'>Contact Me</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label className='contact'>Client Name</label>
        <input type="text" name="user_name" required />
        <label className='contact'>Client Email</label>
        <input type="email" name="user_email" required />
        <label className='contact'>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};


export default Contact