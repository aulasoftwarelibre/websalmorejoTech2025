import styles from './Map.module.css'
import mapa from '../../sprites/map.jpg'

export default function Map() {
  return (
    <>
      <div className={styles.text}>
        <a>Encuéntranos</a>
      </div>
      <div className={styles.map}>
        <a href="https://www.google.com/maps/dir//google+maps+rectorado+cordoba/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd6cdf60e271dc79:0xde994cae3981bc29?sa=X&ictx=111">
          <img src={mapa} alt="mapa" className={styles.mapImg} />
        </a>
      </div>
    </>
  )
}
