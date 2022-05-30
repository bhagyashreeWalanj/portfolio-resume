import React from 'react'
import styles from './services.module.scss'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Have</h5>
      <h2>EXPERIENCE</h2>

      <div className={styles.services__container}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h4>Autoplant Systems Pvt Ltd</h4>
            <h3>Senior Software Developer</h3>
            <span>August 2020 - Feb 2021, Navi Mumbai</span>
          </div>

          <ul className={styles.servicesList}>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Implemented various screens for the front end using React.js and
                used various predefined components from NPM (Node Package
                Manager) and redux library.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Experience in RESTful web services integrated by React-Redux.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Experience with handling manual Forms implementation using
                ReactJS By React-Redux form array Library.{' '}
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Implemented MapMyIndia maps features on ReactJS components with
                Real time vehicle tracking.{' '}
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Implemented React container and presentational components (as
                Stateless and Functional components when applicable).
              </p>
            </li>
          </ul>
        </article>

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h4>Novire Technologies Pvt Ltd</h4>
            <h3>Senior Software Developer</h3>
            <span>Sept 2014 - August 2021, Navi Mumbai</span>
          </div>

          <ul className={styles.servicesList}>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                {' '}
                Implementation and delivery of Integrated Vehicle Tracking
                System ( Experience I.V.T.S ) Project requirements.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Handling inbound and outbound integration , both Restful and
                SOAP services.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>Worked on the MapMyIndia plugin and rest APIs.</p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Worked on Implementation of tableau services on UI with
                JavaScript{' '}
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Integrated Business Logic Jobs for automated report generation
                and send data to clients.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Helps to track orders in transit, provide route optimization
                reports, and monitor vehicles inside yards and plants,so that
                customers can meet delivery compliance and improve logistics.
              </p>
            </li>
            <li>
              <BiCheck className={styles.serviceListIcon} />
              <p>
                Code review and Code Testing on QC environment before the
                Production.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
