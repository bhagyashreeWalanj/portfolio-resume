import React from 'react'
import styles from './about.module.scss'
import mePhoto from '../../assets/aboutMe.jpeg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about" className={styles.about__section}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={styles.about__container}>
        <div className={styles.about__me}>
          <div className={styles.about__me_img}>
            <img src={mePhoto} alt="mePhoto" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h4>Experience</h4>
              <small>7+ Years Working</small>
            </article>
            {/* <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h4>Projects</h4>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
            A Frontend Software Engineer with over 7+ years of experience.
            <br />
            <b>
              I have maintained, developed and launched multiple projects from
              scratch
            </b>
            , carrying the development of its' front-end codebases. Recently I
            became also a huge fan of one-way data flow and Redux-like
            architecture and also typed languages, e.g. TypeScript.
            {/* <br /> <br />
            My current experience and skills in front-end includes:
            <br /> <br />
            <ul>
              <li>JavaScript &amp; TypeScript,(includes ES6 too) </li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Redux-Saga</li>
              <li>React Hooks</li>
              <li>Next.js Framework</li>
              <li>Tailwind CSS</li>
              <li>Enzyme Testing Tool</li>
            </ul>*/}
            <br /> <br />
            Currently looking for a Job of Frontend developer in Berlin.
          </p>
          <a href="#contact" className={styles.contactBtn}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
