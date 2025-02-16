import styles from './Past.module.css'
import imagen1 from  '../../sprites/Past/2024.png'
import imagen2 from  '../../sprites/Past/2023.png'
import imagen3 from  '../../sprites/Past/2022.png'
import imagen4 from  '../../sprites/Past/2021.png'

export default function Past() {
  return (
    <>
      <div className={styles.fondo}>
      <div className={styles.grid} >
        <div className={styles.map}>
          <a href="https://salmorejo.tech/2024" ><img src={imagen1} alt="Imagen 1" /></a>
        </div>
        <div className= {styles.map}>
          <a href="https://salmorejo.tech/2023"> <img src= {imagen2} alt="Imagen 2" /></a>
        </div>
        <div className={styles.map}>
          <a href="https://salmorejo.tech/2022"><img src={imagen3} alt="Imagen 3" /></a>
        </div>
        <div className={styles.map}>
          <a href="https://salmorejo.tech/2021"><img src= {imagen4} alt="Imagen 4" /></a>
        </div>
      </div>
      </div>
    </>
  )
}

