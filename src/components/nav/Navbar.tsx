import React, { useState } from 'react'
import styles from './navbar.module.scss'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import classNames from 'classnames'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className={styles.navContainer}>
      <a href="#home" className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={classNames([activeNav === '#about' ? 'active' : ''])}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#techstack"
        onClick={() => setActiveNav('#techstack')}
        className={classNames([activeNav === '#techstack' ? 'active' : ''])}
      >
        <BiBook />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={classNames([activeNav === '#experience' ? 'active' : ''])}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={classNames([activeNav === '#portfolio' ? 'active' : ''])}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Navbar
