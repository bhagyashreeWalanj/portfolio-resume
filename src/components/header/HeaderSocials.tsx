import React from 'react'
import styles from './header.module.scss'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/bhagyashreewalanj6490">
        <BsLinkedin className={styles.header__social_icon} />
      </a>
      <a href="https://github.com/bhagyashreeWalanj">
        <FaGithub className={styles.header__social_icon} />
      </a>
    </div>
  )
}

export default HeaderSocials
