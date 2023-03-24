import classNames from 'classnames'
import styles from './header.module.scss'

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="./Bhagyashree-Walanj.pdf" download className={styles.btn}>
        Download CV
      </a>
      <a
        href="#contact"
        className={classNames([[styles.btn], [styles.btn_primary]])}
      >
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
