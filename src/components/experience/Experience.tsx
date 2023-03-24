import React from 'react'
import styles from './experience.module.scss'
import { BiCheck } from 'react-icons/bi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Have</h5>
      <h2>EXPERIENCE</h2>

      <div className={styles.experience__container}>
        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h4>MYTOYS GROUP</h4>
            <h3>Frontend Developer</h3>
            <span>Sept 2022-Present, Germany</span>
          </div>

          <ul className={styles.experienceList}>
            <li>
              <BiCheck size="56" className={styles.experienceListIcon} />
              <p>
                Developed and maintained customer-facing web applications using
                ReactJS and other front-end technologies
              </p>
            </li>
            <li>
              <BiCheck size="56" className={styles.experienceListIcon} />
              <p>
                Collaborated with UX/UI designers to ensure optimal user
                experience and visual appeal
              </p>
            </li>
            <li>
              <BiCheck size="56" className={styles.experienceListIcon} />
              <p>
                Implemented new features and functionality while adhering to
                coding standards and best practices{' '}
              </p>
            </li>
          </ul>
        </article>

        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h4>Autoplant Systems Pvt Ltd</h4>
            <h3>Senior Software Developer</h3>
            <span>August 2019-Feb 2021, India</span>
          </div>

          <ul className={styles.experienceList}>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Implemented various screens for the front end using React.js and
                used various predefined components from NPM and redux library.
              </p>
            </li>
            <li>
              <BiCheck size="42" />
              <p>
                Experience in RESTful web experiences integrated by React-Redux.
              </p>
            </li>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Experience with handling manual Forms implementation using
                ReactJS By React-Redux form array Library.{' '}
              </p>
            </li>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Implemented MapMyIndia maps features on ReactJS components with
                Real time vehicle tracking.{' '}
              </p>
            </li>
          </ul>
        </article>

        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h4>Novire Technologies Pvt Ltd</h4>
            <h3>Senior Software Developer</h3>
            <span>Sept 2014-August 2019, India</span>
          </div>

          <ul className={styles.experienceList}>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                {' '}
                Implementation and delivery of Integrated Vehicle Tracking
                System ( Experience I.V.T.S ) Project requirements.
              </p>
            </li>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Handling inbound and outbound integration , both Restful and
                SOAP experiences.
              </p>
            </li>

            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Integrated Business Logic Jobs for automated report generation
                and send data to clients.
              </p>
            </li>
            <li>
              <BiCheck size="70" className={styles.experienceListIcon} />
              <p>
                Helps to track orders in transit, provide route optimization
                reports, and monitor vehicles inside yards and plants
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
