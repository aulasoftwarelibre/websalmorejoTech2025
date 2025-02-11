
import styles from './Info.module.css'
import ticket from '../../sprites/featherIcons/ticket.svg';
import mic from '../../sprites/featherIcons/mic.svg';
import networking from '../../sprites/featherIcons/networking.svg';

export default function Info() {

  
  return (
    <div className={styles.fondo1} id="footer">
  <div className={`${styles.footerStr} row`}>
    <p className={styles.mainText}>¿AÚN NO SABES QUÉ ES EL SALMOREJOTECH?</p>
  </div>
  <div className={`${styles.container} mt-4`}>
    <div className={`${styles.iconBackground} row`}>
      <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
        <h1>
          <img src={ticket} className={`${styles.ticket}`} alt="Ticket" style={{ width: "4em" }} />
          <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>+400 asistentes</h2>
              </div>
        </h1>
      </div>
      <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
        <h1>
          <img src={mic} className={`${styles.ticket}`} alt="Mic" style={{ width: "4em" }} />
          <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>+10 ponencias</h2>
              </div>
        </h1>
      </div>
      <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
        <h1>
          <img src={networking} className={`${styles.ticket}`} alt="Networking" style={{ width: "4em" }} />
          <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>networking</h2>
              </div>
        </h1>
      </div>
    </div>
  </div>
</div>
  )
}
