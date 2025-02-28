import styles from './Past.module.css'
import imagen1 from '../../sprites/Past/2024.png'
import imagen2 from '../../sprites/Past/2023.png'
import imagen3 from '../../sprites/Past/2022.png'
import imagen4 from '../../sprites/Past/2021.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../FooterPast/Footer'

export default function Past() {
  return (
    <div className={styles.gradient}>
      <Navbar />
      <div className={styles.fondo1}>
        <div className={styles.text}>
          <a>¿Estuviste con nosotr@s en ediciones pasadas?</a>
        </div>
        <div className={styles.text1}>
          <a>Échale un vistazo a todos nuestros eventos anteriores</a>
        </div>
        <div className={styles.fondo}>
          <div className={styles.grid}>
            <div className={styles.map}>
              <a href="https://salmorejo.tech/2024">
                <img src={imagen1} alt="Imagen 1" />
              </a>
            </div>
            <div className={styles.map}>
              <a href="https://salmorejo.tech/2023">
                {' '}
                <img src={imagen2} alt="Imagen 2" />
              </a>
            </div>
            <div className={styles.map}>
              <a href="https://salmorejo.tech/2022">
                <img src={imagen3} alt="Imagen 3" />
              </a>
            </div>
            <div className={styles.map}>
              <a href="https://salmorejo.tech/2021">
                <img src={imagen4} alt="Imagen 4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
