import React, { useState } from 'react'
import IreneMorgado from '../../sprites/ponentes/IreneM.Morgado.png'
import RafaAlbaJesus from '../../sprites/ponentes/rafaalbajesus.jpg'
import Marc from '../../sprites/ponentes/marc.jpg'
import Karsagudo from '../../sprites/ponentes/CarlosCloudFare.jpg'
import Marisa from '../../sprites/ponentes/fotoperfilmarisa.jpg'
import Lourdes from '../../sprites/ponentes/fotoLourdesMartinez.jpeg'
import Edu from '../../sprites/ponentes/edu.jpg'
import Sofia from '../../sprites/ponentes/sofia.jpg'
import Mariana from '../../sprites/ponentes/mariana.jpg'
import Rolando from '../../sprites/ponentes/rolando.jpg'
import JuanAriza from '../../sprites/ponentes/juan.png'
import Gabi from '../../sprites/ponentes/gabi.jpg'
import Ainoa from '../../sprites/ponentes/ainoa.jpg'
import Gloria from '../../sprites/ponentes/gloria.jpg'
import Ruben from '../../sprites/ponentes/ruben.jpg'
import openSUSE from '../../sprites/ponentes/openSUSE.jpg'

import styles from './Timetable.module.css'

// const TBA: React.FC<{}> = () => {
//   return (
//     <>
//       <div
//         className={`col-5 container-fluid d-flex justify-content-center ${styles.card}`}

//       >
//         <div className="row ">
//           <div className="col-12 d-flex align-items-center">
//             <div className="row ">
//               <h3 className={`align-items-center ${styles.scheduleTitle}`}>TBA</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const FirstCard: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div
        className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyFirst}`}
      >
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>
              {props.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

const Card: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div
        className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyComida}`}
      >
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>
              {props.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

// const DoubleCard: React.FC<{
//   title: string
//   author: string
//   image: string
//   image2: string
//   descripcion1: string
//   descripcion2: string
//   descripcionCharla: string
// }> = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <>
//       <div
//         className={`col-5 container-fluid d-flex ${styles.card}`}
//         onClick={toggleModal}
//       >
//         <div className="row align-items-center">
//           <div className="col-lg-7 col-md-12 py-4">
//             <div className="row">
//               <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
//                 {props.title}
//               </h3>
//             </div>
//             <div>
//               <h5
//                 className={styles.scheduleAuthor}
//                 style={{ color: '#A8041A' }}
//               >
//                 {props.author}
//               </h5>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 py-4">
//             <img
//               src={props.image}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//             <img
//               src={props.image2}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={toggleModal}>
//           <div className={styles.modalContent}>
//             <span className={styles.close} onClick={toggleModal}>
//               &times;
//             </span>
//             <h2>{props.title}</h2>
//             <p>Author: {props.author}</p>
//             <div className="row">
//               <div className="col-lg-7 col-md-12 py-4">
//                 <p className="m-0">{props.descripcion1} </p>
//                 <p className="m-0">{props.descripcion2}</p>
//                 <p className="mt-4">{props.descripcionCharla}</p>
//               </div>
//               <div className="col-lg-5 col-md-12 py-lg-4">
//                 <img
//                   src={props.image}
//                   className={`img-fluid ${styles.singleImg}`}
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '50%' }}
//                 />
//                 <img
//                   src={props.image2}
//                   className={`img-fluid ${styles.singleImg}`}
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '50%' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// const SingleCardJose: React.FC<{
//   title: string
//   author: string
//   image: string
//   descripcion: string
//   descripcionCharla: string
// }> = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <>
//       <div
//         className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
//         onClick={toggleModal}
//       >
//         <div className="row align-items-center mx-auto">
//           <div className="col-lg-7 col-md-12 py-4">
//             <div className="row">
//               <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
//                 {props.title}
//               </h3>
//             </div>
//             <div>
//               <h5
//                 className={styles.scheduleAuthor}
//                 style={{ color: '#A8041A' }}
//               >
//                 {props.author}
//               </h5>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 py-4 ">
//             <img
//               src={props.image}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxWidth: '50%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={toggleModal}>
//           <div className={styles.modalContentSingle}>
//             <span className={styles.close} onClick={toggleModal}>
//               &times;
//             </span>
//             <h2>{props.title}</h2>
//             <p>Author: {props.author}</p>
//             <div className="row">
//               <div className="col-lg-7 col-md-12 py-4">
//                 <p>{props.descripcion}</p>
//                 <p className="mt-3">{props.descripcionCharla}</p>
//               </div>
//               <div className="col-lg-5 col-md-12 py-lg-4">
//                 <img
//                   src={props.image}
//                   className={`img-fluid ${styles.singleImg}`}
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '60%' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

const SingleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
  tba?: boolean
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    if (!props.tba) {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.tba ? 'TBA' : props.title} {}
              </h3>
            </div>
            {!props.tba && (
              <div>
                <h5
                  className={styles.scheduleAuthor}
                  style={{ color: '#A8041A' }}
                >
                  {props.author}
                </h5>
              </div>
            )}
          </div>
          {!props.tba && (
            <div className="col-lg-5 col-md-12 py-4 ">
              <img
                src={props.image}
                className={`img-fluid ${styles.singleImg}`}
                alt="..."
                style={{ maxHeight: '100%' }}
              />
            </div>
          )}
        </div>
      </div>

      {isModalOpen && !props.tba && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingle}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className="mt-5">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// const SingleCardTalleres: React.FC<{
//   title: string
//   author: string
//   image: string
//   descripcion: string
//   descripcionCharla: string
// }> = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <>
//       <div
//         className={`col-10 container-fluid d-flex ${styles.card}`}
//         onClick={toggleModal}
//       >
//         <div className="row align-items-center mx-auto">
//           <div className="col-lg-7 col-md-12 py-4">
//             <div className="row">
//               <h3 className={styles.scheduleTitle}>{props.title}</h3>
//             </div>
//             <div>
//               <h5 className={styles.scheduleAuthor}>{props.author}</h5>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 py-4 ">
//             <img
//               src={props.image}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={toggleModal}>
//           <div className={styles.modalContentSingleTalleres}>
//             <span className={styles.close} onClick={toggleModal}>
//               &times;
//             </span>
//             <h2>{props.title}</h2>
//             <p>Author: {props.author}</p>
//             <div className="row">
//               <div className="col-lg-7 col-md-12 py-4">
//                 <p>{props.descripcion}</p>
//                 <p className="mt-4">{props.descripcionCharla}</p>
//               </div>
//               <div className="col-lg-5 col-md-12 py-lg-4">
//                 <img
//                   src={props.image}
//                   className="img-fluid"
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '70%' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

const BigDoubleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
  image2: string
  isTba: boolean
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-lg-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100px', maxWidth: '100%' }}
            />
            <img
              src={props.image2}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100px', maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-6 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>

              <div className="col-lg-3 col-md-12 py-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <div className="col-lg-3 col-md-12 py-4">
                <img
                  src={props.image2}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const ScheduleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
  isTba: boolean
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '80%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const DoubleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
  isTba: boolean
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '80%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Schedule: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.text}>
        <a>Horario</a>
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row">
            <h3>08:30</h3>
          </div>
          <div className="row">
            <h3>08:55</h3>
          </div>
        </div>
        <FirstCard title="Check In" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>09:00</h3>
          </div>
          <div className="row pt-4">
            <h3>9:25</h3>
          </div>
        </div>
        <FirstCard title="Acto de Bienvenida" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>9:30</h3>
          </div>
          <div className="row pt-4">
            <h3>10:20</h3>
          </div>
        </div>

        <ScheduleCard
          title="Beyond the Tab: How Modern Browsers are being built"
          author="Marc Rodríguez"
          image={Marc}
          descripcion="Backend Engineer @ Embat, del Aula desde xikitito."
          descripcionCharla="En los últimos años hemos visto un auge de nuevos navegadores web: Arc, Vivaldi, Brave, Zen, Orion… En un mercado dominado por Chrome, con una cuota del 70%, ¿qué ha cambiado para que surjan tantas alternativas en tan poco tiempo? En esta charla no solo exploraremos qué es realmente un navegador y cómo se están construyendo, sino que también los destriparemos para ver qué hay bajo el capó."
          isTba={true}
        />

        <ScheduleCard
          title="Cómo convertirse en el perfil que todos los recruiters quieran fichar"
          author="Gabriela Alba Ballesteros"
          image={Gabi}
          descripcion="Psicóloga y Reclutadora IT. Me dedico a planificar y transformar tu carrera laboral."
          descripcionCharla="Cómo encontrar tu primer empleo Tech nace con la misión de ayudar a jóvenes ingenieros y estudiantes de informática a destacar en el competitivo mercado laboral. Revelaré las tácticas más avanzadas de 2025 para optimizar tu perfil de LinkedIn y hacerte visible para reclutadores y headhunters, mientras transformamos tu CV en un imán irresistible de oportunidades."
          isTba={false}
        />
      </div>

      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row">
            <h3>10:25</h3>
          </div>
          <div className="row">
            <h3>10:55</h3>
          </div>
        </div>
        <Card title="Desayuno" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>11:00</h3>
          </div>
          <div className="row pt-4">
            <h3>11:40</h3>
          </div>
        </div>

        <ScheduleCard
          title="Arquitectura Limpia en el Front"
          author="Ruben Aguilera"
          image={Ruben}
          descripcion="Liderando equipos de desarrollo de software"
          descripcionCharla="En esta charla vamos a ver una aproximación a una arquitectura limpia en el front para poder hacer aplicaciones SPA más evolucionables y mantenibles."
          isTba={false}
        />

        <ScheduleCard
          title="Debug Your Life: Enfrentando el Burnout en Tech"
          author="Mariana Rolfo"
          image={Mariana}
          descripcion="AI & Process Automation Expert|Community Builder|Technical Writer in Web Technology"
          descripcionCharla="Como desarrolladores, es conocido cómo depurar código, pero ¿sabes cómo depurar tu vida cuando todo parece estar al límite? Entre deadlines imposibles, guardias nocturnas y la presión constante por mantenernos actualizados, el burnout se ha convertido en el error no controlado más común en nuestra industria."
          isTba={false}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>11:45</h3>
          </div>
          <div className="row pt-4">
            <h3>12:25</h3>
          </div>
        </div>
        <ScheduleCard
          title="Beyond the Tab: How Modern Browsers are being built"
          author="Marc Rodríguez"
          image={Marc}
          descripcion="Backend Engineer @ Embat, del Aula desde xikitito."
          descripcionCharla="En los últimos años hemos visto un auge de nuevos navegadores web: Arc, Vivaldi, Brave, Zen, Orion… En un mercado dominado por Chrome, con una cuota del 70%, ¿qué ha cambiado para que surjan tantas alternativas en tan poco tiempo? En esta charla no solo exploraremos qué es realmente un navegador y cómo se están construyendo, sino que también los destriparemos para ver qué hay bajo el capó."
          isTba={false}
        />
        <ScheduleCard
          title="Awesome Selfhosted versión gratuita"
          author="Eduardo Roldán Pijuán"
          image={Edu}
          descripcion="Ex miembro del ASL y actual Tech Lead en comercio electrónico en Redsys"
          descripcionCharla="Aprende cómo conseguir de forma gratuita tu servidor y dominio gracias a Oracle y GitHub, y empieza a desplegar todo tipo de cosas de forma autónoma, segura y gratuita."
          isTba={false}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row">
            <h3>12:30</h3>
          </div>
          <div className="row">
            <h3>13:05</h3>
          </div>
        </div>
        <Card title="Tapa" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>13:10</h3>
          </div>
          <div className="row pt-4">
            <h3>13:50</h3>
          </div>
        </div>
        <ScheduleCard
          title="Generando código en arquitectura hexagonal desde contratos"
          author="Carlos Agudo Belloso"
          image={Karsagudo}
          descripcion="Team lead Fullstack -> transformo cafeina en codigo"
          descripcionCharla="En esta charla trataremos varios puntos: 
          Contratos openapi / standares, que información nos dan, de cara a un generador, resultados esperados de nuestro generador
, introducción a hexagonal architecture con cada una de sus capas (aplicación, dominio, infra)
, comunicación entre capas
, cqrs
, commands
, queries
, commands and queries desde http
, command bus / query bus
, demo"
          isTba={false}
        />
        <ScheduleCard
          title="Datos y política: MP Scrape"
          author="Sofia Aritz Albors Escobés"
          image={Sofia}
          descripcion="Programadora apasionada por la tecnología como herramienta de transformación social."
          descripcionCharla="En un mundo donde los gigantes dominan el diálogo político, es crucial que los activistas puedan hacer oír su voz. MP Scrape, una herramienta desarrollada por la FSFE, te da las herramientas para poder conectar directamente con tus representantes, extraer información clave y defender el Software Libre.

Aprende cómo esta herramienta puede ayudarte a defender las causas que más te importan."
          isTba={false}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>13:55</h3>
          </div>
          <div className="row pt-4">
            <h3>14:35</h3>
          </div>
        </div>
        <DoubleCard
          title="Cómo construir un interprete de lenguaje de signos con IA"
          author="Rafa, Alba y Jesús"
          image={RafaAlbaJesus}
          descripcion="Somos tres amigos de la carrera y exmiembros del ASL a los que les encanta apuntarse a todo. Después de varios años en la organización del Salmorejo, hemos decidido ver cómo se vive todo desde el otro lado. Tenemos poquita experiencia dando charlas, pero esperamos estar a la altura. En el networking seguro que nadie nos supera, nos vemos allí."
          descripcionCharla="Explicaremos el proceso de como realizamos un traductor de Lenguaje de Signos con IA.
Durante la charla, iremos detallando como fuimos siguiendo todos los pasos, desde la toma de imágenes de signos hasta la obtención del resultado.
Algunas de las cosas que explicaremos, ya que a nosotros también nos abrumaron en su momento si es muy difícil entrenar un modelo en local o como evitar que GPT alucine."
          isTba={false}
        />
        <BigDoubleCard
          title="Mamá, de mayor quiero ser ponente"
          author="Marisa Martín y Lourdes Martínez"
          image={Marisa}
          image2={Lourdes}
          descripcion="Mentoras de Tech SHEssions Madrid."
          descripcionCharla="Nunca dijo nadie y sin embargo, muchos pensamos. Pero, ¿qué nos frena a dar ese paso? ¿Por qué nos estamos perdiendo esas oportunidades de aprender, de compartir, de crecer personal y profesionalmente? 
En esta charla, te contamos nuestros secretos como mentoras del programa de Tech SHEssions Madrid para que te animes a ser ponente!"
          isTba={false}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row">
            <h3>14:40</h3>
          </div>
          <div className="row">
            <h3>15:50</h3>
          </div>
        </div>
        <Card title="Comida" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>15:55</h3>
          </div>
          <div className="row pt-4">
            <h3>16:35</h3>
          </div>
        </div>
        <BigDoubleCard
          title="Game of Forums"
          author="Ainoa Guillén González y Gloria Jorge Lema"
          image={Ainoa}
          image2={Gloria}
          descripcion="Criminóloga, ciberseguridad, especializada en ciberinteligencia, divulgadora y docente."
          descripcionCharla="Explorarán la evolución de los foros del cibercrimen, el impacto de las operaciones policiales y la migración hacia Telegram y plataformas descentralizadas, analizando posibles escenarios futuros y y las medidas que podrían adoptar los gobiernos y las fuerzas de seguridad ante esta situación."
          isTba={false}
        />
        <ScheduleCard
          title="Buenas Prácticas para la Gestión de Repositorios en GitHub. "
          author="Juan Ariza Toledano"
          image={JuanAriza}
          descripcion="Ingeniero software en VMware, especializado en desplegar aplicaciones en Kubernetes."
          descripcionCharla="Publicar y gestionar un proyecto open-source implica mucho más que crear un repositorio en GitHub y subir código para que otros lo usen.
En esta ponencia, exploraremos buenas prácticas y aspectos clave que debes considerar antes de dar este paso, como la gestión de contribuciones e incidencias, la documentación, la organización del proyecto, GitHub Actions o la seguridad."
          isTba={false}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>16:40</h3>
          </div>
          <div className="row pt-4">
            <h3>17:20</h3>
          </div>
        </div>
        <ScheduleCard
          title="No, lo que haces no es DDD (y tampoco pasa nada)"
          author="Rolando Caldas Sánchez"
          image={Rolando}
          descripcion="Team Lead, ex-CTO y organizador de CraftersVigo y la pulpoCon"
          descripcionCharla="Se nos llena la boca con conceptos como agregados, value objects, CQRS, servicios de dominio, etc. porque en DDD patatas. Cuando la realidad es que muchas veces no llegamos ni a POO. Qué te parece si hacemos un recorrido por lo que nos gusta decir que hacemos y lo que realmente ocurre? Que no pasa nada por no hacer DDD, ni tener VO, etc etc. El problema sería pensar que lo hacemos sin hacerlo ¿no?"
          isTba={false}
        />
        <ScheduleCard
          title="EL PM, ¿AMIGO O ENEMIGO?"
          author="Guiomar"
          image={IreneMorgado}
          descripcion="Trabajo en la frontera del PM y el PO pero sin simples etiquetas para acotar todo el trabajo que hago en equipo para desarrollar productos digitales."
          descripcionCharla="Hablaremos de la figura del PM en el equipo del desarrollo y cómo entre todo se hace el producto"
          isTba={true}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>17:25</h3>
          </div>
          <div className="row pt-4">
            <h3>18:15</h3>
          </div>
        </div>
        <SingleCard
          title="SHIP. VALIDATE. ITERATE AND REPEAT"
          author="José Fernández"
          image={IreneMorgado}
          descripcion="Software Developer @Qualifyze Del @ASL pa toda la vida ❤️‍🔥"
          descripcionCharla="En esta charla cuento una experiencia personal en la que se ha montado un producto desde 0 a toda velocidad, todo ello siguiendo una filosofía de buenas prácticas"
          tba={true}
        />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row">
            <h3>18:30</h3>
          </div>
          <div className="row">
            <h3>20:00</h3>
          </div>
        </div>
        <Card title="Networking" />
      </div>
      <div className={styles.text}>
        <a>Taller</a>
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          <div className="row pb-5">
            <h3>17:25</h3>
          </div>
          <div className="row pt-4">
            <h3>18:15</h3>
          </div>
        </div>
        <SingleCard
          title="openSUSE Linux Install Party"
          author="openSUSE"
          image={openSUSE}
          descripcion="¡No tires tu portátil! Dale una segunda oportunidad con openSUSE."
          descripcionCharla="En este taller práctico de la comunidad openSUSE, te invitamos a traer ese compañero tecnológico olvidado. Olvídate de la obsolescencia programada y descubre el poder del código abierto para transformar tu equipo"
          tba={false}
        />
      </div>
    </div>
  )
}

export default Schedule
