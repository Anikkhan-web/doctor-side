import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <section className="get-in-touch">
   <h1 className="title">Contact Us</h1>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" for="name">Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" for="email">E-mail</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required/>
         <label className="label" for="company">Set Your Problem</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required/>
         <label className="label" for="phone">Contact Number</label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" for="message">Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
</section>
            
        </div>
    );
};

export default Contact;