import React from 'react'
import styles from './header.module.scss'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div id="home">
      <div className={styles.header__container}>
        <h3>Hello, I'm</h3>
        <h1>Bhagyashree Walanj</h1>
        <h4 className={styles.text_light}>Frontend Developer</h4>
        <CTA />
        <HeaderSocials />

        {/* <div className={styles.portfolioPhoto}>
          <img src={portphoto} alt="hello" />
        </div> */}
        <a href="#contact" className={styles.scroll_down}>
          &#10507;
        </a>
      </div>
    </div>
  )
}

export default Header
