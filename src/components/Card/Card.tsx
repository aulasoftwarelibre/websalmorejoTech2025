import styles from './Card.module.css'

export default function Card({children, description, photo}) {



return(
    <div className={`${styles.card}`}>
        <div className={`${styles.photoContainer}`}>
            <img src={photo} alt="Foto de prueba"></img>
        </div>
        <div className={`${styles.text}`}>
            <h5 className={styles.NameText}>{children}</h5>
            <p className={styles.DescriptionText}>{description}</p>
        </div>
    </div>
);
}



