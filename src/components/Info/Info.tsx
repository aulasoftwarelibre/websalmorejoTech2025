import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from './Info.module.css';
import ticket from '../../sprites/featherIcons/ticket.svg';
import mic from '../../sprites/featherIcons/mic.svg';
import networking from '../../sprites/featherIcons/networking.svg';

const images = [
  "https://i.ibb.co/TxWhb9cS/12-min.jpg",
  "https://i.ibb.co/kgs5BXcJ/0-min.jpg",
  "https://i.ibb.co/bghL3HW8/8-min.jpg",
];

export default function Info() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.fondo1} id="footer">
      <div className={`${styles.footerStr} row`}>
        <p className={styles.mainText}>
          ¿AÚN NO SABES QUÉ ES EL SALMOREJOTECH?
        </p>
      </div>
      <div className={`${styles.container} mt-4`}>
        <div className={`${styles.iconBackground} row`}>
          <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
            <h1>
              <img
                src={ticket}
                className={`${styles.ticket}`}
                alt="Ticket"
                style={{ width: '4em' }}
              />
              <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>+400 asistentes</h2>
              </div>
            </h1>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
            <h1>
              <img
                src={mic}
                className={`${styles.ticket}`}
                alt="Mic"
                style={{ width: '4em' }}
              />
              <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>+10 ponencias</h2>
              </div>
            </h1>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center">
            <h1>
              <img
                src={networking}
                className={`${styles.ticket}`}
                alt="Networking"
                style={{ width: '4em' }}
              />
              <div className="row">
                <h2 className={`${styles.textIcons} mt-4`}>networking</h2>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="row container">
        <div className="col">
          <div className={`${styles.backgroundTextoCarrousel} row mt-4`}>
            <div className={`${styles.textoCarrousel} `}>
              <p>
                Llega otro año el evento más cordobés y tech de la provincia,
                con grandes ponentes, networking y productos típicos de Córdoba.
                Coincide con Las Cruces de Mayo y es una gran oportunidad para
                visitar los Patios sin tanta afluencia. Gracias a patrocinadores
                y al Aula de Software Libre por hacerlo posible.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="carousel-container position-relative">
            <div className="d-flex overflow-hidden" style={{ width: '100%', position: 'relative' }}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index}`}
                  className={`w-100 ${index === current ? 'd-block' : 'd-none'}`}
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="btn btn-light position-absolute start-0 top-50 translate-middle-y"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
