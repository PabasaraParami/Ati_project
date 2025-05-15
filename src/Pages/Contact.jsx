import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_7adrs8a',      //  Replace with  service ID
        'template_3bbog7g',     //  Replace with  template ID
        form.current,
        '3oc7EHE9_86XJPWcr'     //  Replace with  public key
      )
      .then(
        (result) => {
          setMessageSent(true);
          setErrorMessage(null);
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          setMessageSent(false);
          setErrorMessage(' Failed to send message. Please try again.');
          setIsSending(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>
      <motion.p  initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, delay: 0.2 }} >
        If you have any questions or need help, feel free to contact us. We're here to assist you!

      </motion.p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          data-aos="fade-up"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          data-aos="fade-up"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          data-aos="fade-up"
        />
        <button type="submit" disabled={isSending} data-aos="fade-up">
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {messageSent && (
        <div className="success-message" data-aos="fade-in">
          
           Message sent successfully! We will get back to you soon.
        </div>
      )}

      {errorMessage && (
        <div className="error-message" data-aos="fade-in">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
