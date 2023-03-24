import React from 'react'
import styles from './footer.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer__container}>
      <a href="#home" className={styles.footer__logo}>
        BHAGYASHREE WALANJ
      </a>
      {/* <small>Frontend Developer</small> */}
      <ul className={styles.permalinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#techstack">Technical Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <a href="https://facebook.com">
          {' '}
          <FaFacebookF className={styles.footer_social_icon} />
        </a>
        <a href="https://instagram.com">
          <FiInstagram className={styles.footer_social_icon} />
        </a>
        {/* <a href="https://github.com"></a> */}
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy; BHAGYASHREEWALANJ. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
