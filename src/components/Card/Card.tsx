import styles from './Card.module.css'

export default function Card({children, description}) {



return(
    <div className={`${styles.card}`}>
        <div className={`${styles.photoContainer}`}>
            <h1>Foto</h1>
        </div>
        <div className={`${styles.text}`}>
            <h5>{children}</h5>
            <p>{description}</p>
        </div>
    </div>
);
}



