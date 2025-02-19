
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Info.module.css";
import ticket from "../../sprites/featherIcons/ticket.svg";
import mic from "../../sprites/featherIcons/mic.svg";
import networking from "../../sprites/featherIcons/networking.svg";
import { Pagination, EffectCoverflow } from 'swiper/modules';
import img0 from '../../sprites/pics/0-min.jpg';
import img1 from '../../sprites/pics/1-min.jpg';
import img2 from '../../sprites/pics/8-min.jpg';
import Map from "../Map/Map";
import FondoBlanco from "../FondoBlanco/FondoBlanco";
import Schedule from "../Timetable/Timetable";
import { Moleculas } from "../moleculas";



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
      <div className={`${styles.carouselPart} row gx-lg-5 gx-3 align-items-center container-fluid`}>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className={`${styles.backgroundTextoCarrousel}`}>
            <div className={`${styles.textoCarrousel}`}>
              <p>
                Llega otro año el evento más cordobés y tech de la provincia, con grandes ponentes, networking y productos típicos de Córdoba. Coincide con Las Cruces de Mayo y es una gran oportunidad para visitar los Patios sin tanta afluencia. Gracias a patrocinadores y al Aula de Software Libre por hacerlo posible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-block justify-content-center align-items-center">
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            pagination={{ clickable: true }}
            effect="coverflow"  
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={0}
            initialSlide={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
          >
            <SwiperSlide>
              <img className={`${styles.imageCarousel}`} src={img0} />
            </SwiperSlide>
            <SwiperSlide>
              <img className={`${styles.imageCarousel}`} src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className={`${styles.imageCarousel}`} src={img2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="row">
      <Map />
      {/* <Schedule/> */}
    </div>
    
    {/* <FondoBlanco/> */}
    </div>
    
  );
}