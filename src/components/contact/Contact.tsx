import React from 'react'
import emailjs from '@emailjs/browser'
import styles from './contact.module.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault()
    e.target.reset()
    // emailjs
    //   .sendForm(
    //     'service_p757uia',
    //     'template_y97s915',
    //     e.target,
    //     '7B5noG2_Za6s_ui3S',
    //   )
    //   .then(
    //     (result) => {
    //       e.target.reset()
    //       console.log(result.text)
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     },
    //   )
  }

  return (
    <section id="contact" className={styles.contact__section}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={styles.contact__container}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4>EMAIL</h4>
            <h5>wbhagyashree06@gmail.com</h5>
            <a href="mailto:wbhagyashree06@gmail.com" target="__blank">
              Send a Message
            </a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option_icon} />
            <h4>Call</h4>
            <h5>+49 162 4199690</h5>
            {/* <a
              href="https://api.whatsapp.com/send?phone=+491624199690"
              target="__blank"
            >
              Make a Call
            </a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="your email id"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder={`your message`}
            required
          ></textarea>
          <button type="submit" className={styles.contact_btn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
