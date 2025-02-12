import styles from './Card.module.css';
import twLogo from '../../sprites/logosRedSocial/twLogo.svg';
import ghLogo from '../../sprites/logosRedSocial/ghLogo.svg';
import lkLogo from '../../sprites/logosRedSocial/lkLogo.svg';

export default function Card({ children, description, photo, mirrorphoto, twlink = "unknown", lklink = "unknown", ghlink = "unknown" }) {

    const MostrarBoton = (boton: string) => boton !== "unknown";

    return (
        <div className={styles.card} style={{ backgroundImage: `url(${mirrorphoto})`}} >
            <div className={styles.front}>
                <div className={styles.photoContainer}>
                    <img src={photo} alt="Foto de perfil" />
                </div>
                <div className={styles.text}>
                    <h5 className={styles.NameText}>{children}</h5>
                    <p className={styles.DescriptionText}>{description}</p>
                </div>
            </div>
            <div className={styles.back}>
                <div className='row'>

                {MostrarBoton(ghlink) && (
                    <a href={ghlink} target="_blank" rel="noopener noreferrer">
                        <img src={ghLogo} alt="GitHub" className={styles.icon} />
                    </a>
                )}
                {MostrarBoton(lklink) && (
                    <a href={lklink} target="_blank" rel="noopener noreferrer">
                        <img src={lkLogo} alt="LinkedIn" className={styles.icon} />
                    </a>
                )}
                {MostrarBoton(twlink) && (
                    <a href={twlink} target="_blank" rel="noopener noreferrer">
                        <img src={twLogo} alt="Twitter" className={styles.icon} />
                    </a>
                )}
                </div>
            </div>
        </div>
    );
}
