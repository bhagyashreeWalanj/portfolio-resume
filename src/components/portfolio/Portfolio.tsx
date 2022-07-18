import React from 'react'
import styles from './portfolio.module.scss'
import { Portfolios } from '../../__mocks/portfolio_mocks'

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio__section}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={styles.portfolio__container}>
        {Portfolios.map((item: any) =>
          item.isPublished ? (
            <article className={styles.portfolio_item} key={item.id}>
              <div className={styles.portfolio_item_image}>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3>{item.title}</h3>
              <div className={styles.portfolio__item_cta}>
                <a href={item.githubLink} className={styles.btn}>
                  View Github
                </a>
                <a href={item.demoLink} className={styles.portfolio__btn}>
                  Live Demo
                </a>
              </div>
            </article>
          ) : (
            ''
          ),
        )}
      </div>
    </section>
  )
}

export default Portfolio
