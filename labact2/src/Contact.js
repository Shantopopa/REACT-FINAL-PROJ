import "./App.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dd8jj7m', 'template_ga8axjf', form.current, {
        publicKey: 'PMYkgIcSeedn4vwBn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section class="contact">
      <div>
        <h1>Contact Us</h1>
        <p>Feel free to send a message!</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required/>
          <label>Email</label>
          <input type="email" name="email" required/>
          <label>Message</label>
          <textarea name="message" required/>
          <input type="submit" class="submit-btn" value="Send" />
        </form>
      </div>
    </section>
  );
};