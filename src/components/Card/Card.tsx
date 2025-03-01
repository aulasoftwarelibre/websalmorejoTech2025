import styles from './Card.module.css'
import twLogo from '../../sprites/logosRedSocial/twLogo.svg'
import ghLogo from '../../sprites/logosRedSocial/ghLogo.svg'
import lkLogo from '../../sprites/logosRedSocial/lkLogo.svg'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  description: string
  photo: string
  backphoto: string
  twlink?: string
  lklink?: string
  ghlink?: string
}

export default function Card({
  children,
  description,
  photo,
  backphoto,
  twlink = 'unknown',
  lklink = 'unknown',
  ghlink = 'unknown',
}: CardProps) {
  const MostrarBoton = (boton: string) => boton !== 'unknown'

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <div className={styles.photoContainer}>
            <img src={photo} alt="Foto de perfil" />
          </div>
          <div className={styles.textcontainer}>
            <div><h5 className={styles.NameText}>{children}</h5></div>
            <div ><p className={styles.DescriptionText}>{description}</p></div>
          </div>
        </div>
        <div
          className={styles.back}
          style={{ backgroundImage: `url(${backphoto})` }}
        >
          <div className={styles.iconContainer}>
            {MostrarBoton(twlink) && (
              <a href={twlink} target="_blank" rel="noopener noreferrer">
                <img src={twLogo} alt="Twitter" className={styles.icon} />
              </a>
            )}

            {MostrarBoton(lklink) && (
              <a href={lklink} target="_blank" rel="noopener noreferrer">
                <img src={lkLogo} alt="LinkedIn" className={styles.icon} />
              </a>
            )}
            {MostrarBoton(ghlink) && (
              <a href={ghlink} target="_blank" rel="noopener noreferrer">
                <img src={ghLogo} alt="GitHub" className={styles.icon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
