import React from 'react'
import styles from './techstack.module.scss'
import { BsPatchCheckFill } from 'react-icons/bs'

const Techstack = () => {
  return (
    <section id="techstack" className={styles.techstack__section}>
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className={styles.techstack__container}>
        <div className={styles.techstack__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.techstack__content}>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                <h4>HTML5</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>

            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Javascript</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Typescript</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>

            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Next.js</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>

            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>ReactJS</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>GraphQL</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Redux Redux-Saga</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>ES6</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.techstack__backend}>
          <h3>Design Skills</h3>
          <div className={styles.techstack__content}>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Styled Components</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Tailwind CSS</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>SASS</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                {' '}
                <h4>Bootstrap 5</h4>
                <small className={styles.text_light}>Experienced</small>
              </div>
            </article>
          </div>
          <h3 className={styles.techstack__h3}>Testing Development</h3>
          <div className={styles.techstack__content}>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                <h4>Jest</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
            <article className={styles.techstack__details}>
              <BsPatchCheckFill className={styles.techstack__details_icon} />
              <div>
                <h4>Enzyme</h4>
                <small className={styles.text_light}>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techstack
