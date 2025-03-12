import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaborations or just to say hi!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;