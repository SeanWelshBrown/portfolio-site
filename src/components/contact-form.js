import React from 'react';

// style
import styles from "./contact-form.module.css"

export default function ContactForm() {
  return (

    <form className={styles.contactForm} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">

      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Your Name: <br />
        <input className={styles.contactInput} type="text" name="name" id="name" />
      </label>

      <br />

      <label>
        Your Email: <br />
        <input className={styles.contactInput} type="email" name="email" id="email" />
      </label>

      <br />

      <label>
        Subject: <br />
        <input className={styles.contactInput} type="text" name="subject" id="subject" />
      </label>

      <br />

      <label>
        Message: <br />
        <textarea className={styles.contactField} name="message" id="message" rows="5" />
      </label>

      <br />

      <button type="submit">Send</button>
      <input className={styles.contactClear} type="reset" value="Clear" />

    </form>

  )
}