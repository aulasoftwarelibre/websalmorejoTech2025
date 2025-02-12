import styles from './Card.module.css'

export default function Card({ children, description, photo, mirrorphoto }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${mirrorphoto})` }}
    >
      <div className={styles.front}>
        <div className={styles.photoContainer}>
          <img src={photo} alt="Foto de prueba" />
        </div>
        <div className={styles.text}>
          <h5 className={styles.NameText}>{children}</h5>
          <p className={styles.DescriptionText}>{description}</p>
        </div>
      </div>
      <div className={styles.back}></div>
    </div>
  )
}
