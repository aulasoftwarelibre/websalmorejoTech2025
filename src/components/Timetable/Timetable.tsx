import React, { useState } from 'react'
import IreneMorgado from '../../sprites/ponentes/IreneM.Morgado.png'

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

const DoubleCard: React.FC<{
  title: string
  author: string
  image: string
  image2: string
  descripcion1: string
  descripcion2: string
  descripcionCharla: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className="img-fluid"
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '50%' }}
            />
            <img
              src={props.image2}
              className="img-fluid"
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '50%' }}
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
                <p className="m-0">{props.descripcion1} </p>
                <p className="m-0">{props.descripcion2}</p>
                <p className="mt-4">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '50%' }}
                />
                <img
                  src={props.image2}
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const SingleCardJose: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxWidth: '40%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
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
                <p className="mt-3">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '60%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const SingleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
          <div className="col-lg-5 col-md-12 py-4 ">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
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
                  className="img-fluid"
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

const SingleCardTalleres: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '50%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingleTalleres}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className="mt-4">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className="img-fluid"
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

const BigDoubleCard: React.FC<{
  title: string
  author: string
  image: string
  descripcion: string
  descripcionCharla: string
  image2: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className="img-fluid"
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '45%' }}
            />
            <img
              src={props.image2}
              className="img-fluid"
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '45%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingleTalleres}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className="mt-3">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '50%' }}
                />
                <img
                  src={props.image2}
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '50%' }}
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
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
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
                  className="img-fluid"
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '50%' }}
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
            <h3>09:00</h3>
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
            <h3>09:10</h3>
          </div>
          <div className="row pt-4">
            <h3>10:10</h3>
          </div>
        </div>
        <SingleCard
          title="FIND YOUR FUTURE"
          author="Irene M. Morgado"
          image={IreneMorgado}
          descripcion="Socióloga especializada en psicología social y comportamiento humano."
          descripcionCharla="¿Es mejor trabajar en una empresa de producto o de servicios? ¿Qué tengo que tener en cuenta para dirigir mi carrera profesional hacia donde realmente quiero? ¿Por qué me contactan tantos recruiters pero sólo para puestos que no me interesan?"
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
            <h3>10:20</h3>
          </div>
          <div className="row">
            <h3>11:00</h3>
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
          title="DOCTOR, MI COMPONENTE DE REACT TIENE SQL"
          author="Javi Velasco"
          image={IreneMorgado}
          descripcion="Tech Lead de Vercel"
          descripcionCharla="Vengo a hablar de React, server components, streaming, suspense y server actions, contando un poco de dónde venimos."
        />

        <ScheduleCard
          title="NO TODO EL CAMPO ES 'GREEN'. CÓMO LIDIAR CON LEGACY CODE"
          author="Concha Asensio"
          image={IreneMorgado}
          descripcion="Desarrolladora de software | Women Techmaker Ambassador | Mentora en Step4ward"
          descripcionCharla="Mi objetivo es compartir algunos recursos que he ido aprendiendo trabajando en proyectos de este tipo, enfocados por un lado, a seguir añadiendo nuevas funcionalidades a nuestro código sin incrementar la complejidad, y por otro, al refactoring, que nos permite conseguir tener un código más sostenible en el tiempo."
        />
      </div>
    </div>
  )
}

export default Schedule
