/* eslint-disable @next/next/no-img-element */
import styles from './moleculas.module.css'
import tomatito from '../../sprites/moleculas/tomatito1.svg'

export const Moleculas = () => {
  return (
    <div className={styles.parallaxContainer}>
      {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg2}`}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg2}`}></div> */}
      <div>
        <img
          className={`${styles.moleculas} ${styles.parallax} ${styles.bg3}`}
          src={tomatito}
          alt="Parallax Element"
        />
        <img
          className={`${styles.moleculas} ${styles.parallax} ${styles.bg4}`}
          src={tomatito}
          alt="Parallax Element"
        />
      </div>
      {/* <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg6}`}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg7}`}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg04}`}></div>
    <div className={`${styles.moleculas} ${styles.parallax} ${styles.bg07}`}></div> */}
    </div>
  )
}
