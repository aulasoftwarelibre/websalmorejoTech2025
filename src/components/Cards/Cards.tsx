import styles from './Cards.module.css'
import Card from '../Card/Card'
import DavidMart from '../../sprites/PeoplePhotos/front/David Martinez Molina.jpeg'
import CarlosTorres from '../../sprites/PeoplePhotos/front/Carlos Torres Jiménez.jpg'
import DavidSanchez from '../../sprites/PeoplePhotos/front/David Sanchéz Palomino.jpeg'
import Roxana from '../../sprites/PeoplePhotos/front/Roxana Ortiz.jpg'
import Cañete from '../../sprites/PeoplePhotos/front/Cañete.jpeg'
import Belen from '../../sprites/PeoplePhotos/front/Belén María Montes Caro.jpg'
import Dario from '../../sprites/PeoplePhotos/front/Darío Martínez Kostyuk.jpg'
import Tefry from '../../sprites/PeoplePhotos/front/Manuel Reyes.png'
import Juanan from '../../sprites/PeoplePhotos/front/Juan Antonio Mellado Arenas.jpeg'
import Elena from '../../sprites/PeoplePhotos/front/Elena Molero Padilla.jpeg'
import AntonioJose from '../../sprites/PeoplePhotos/front/Antonio José Serrano Maestre.jpg'
import AntonioMerlo from '../../sprites/PeoplePhotos/front/ant2005onio.jpg'
import Jaime from '../../sprites/PeoplePhotos/front/Jaime Hernández Pérez.jpg'
import Minghan from '../../sprites/PeoplePhotos/front/Minghan Wang.jpg'
import Sofia from '../../sprites/PeoplePhotos/front/Sofía Aritz.png'
import Alvaro from '../../sprites/PeoplePhotos/front/alvaro serrano.jpg'
import Pablo from '../../sprites/PeoplePhotos/front/PMMS.jpg'
import Alejandro from '../../sprites/PeoplePhotos/front/Alejandro Martos Bellido.jpg'
import Sergio from '../../sprites/PeoplePhotos/front/Sergio Palacios López.jpg'

import DavidMartOP from '../../sprites/PeoplePhotos/back/OPDavid Martinez Molina.jpeg'
import CarlosTorresOP from '../../sprites/PeoplePhotos/back/OPCarlos Torres Jiménez.jpg'
import DavidSanchezOP from '../../sprites/PeoplePhotos/back/OPDavid Sanchéz Palomino.jpeg'
import RoxanaOP from '../../sprites/PeoplePhotos/back/OPRoxana Ortiz.jpg'
import CañeteOP from '../../sprites/PeoplePhotos/back/OPCañete.jpeg'
import BelenOP from '../../sprites/PeoplePhotos/back/OPBelén María Montes Caro.jpg'
import DarioOP from '../../sprites/PeoplePhotos/back/OPDarío Martínez Kostyuk.jpg'
import TefryOP from '../../sprites/PeoplePhotos/back/OPManuel Reyes.png'
import JuananOP from '../../sprites/PeoplePhotos/back/OPJuan Antonio Mellado Arenas.jpeg'
import ElenaOP from '../../sprites/PeoplePhotos/back/OPElena Molero Padilla.jpeg'
import AntonioJoseOP from '../../sprites/PeoplePhotos/back/OPAntonio José Serrano Maestre.jpg'
import AntonioMerloOP from '../../sprites/PeoplePhotos/back/OPant2005onio.jpg'
import JaimeOP from '../../sprites/PeoplePhotos/back/OPJaime Hernández Pérez.jpg'
import MinghanOP from '../../sprites/PeoplePhotos/back/OPMinghan Wang.jpg'
import SofiaOP from '../../sprites/PeoplePhotos/back/OPSofía Aritz.png'
import AlvaroOP from '../../sprites/PeoplePhotos/back/OPalvaro serrano.jpg'
import PabloOP from '../../sprites/PeoplePhotos/back/OPPMMS.jpg'
import AlejandroOP from '../../sprites/PeoplePhotos/back/OPAlejandro Martos Bellido.jpg'
import SergioOP from '../../sprites/PeoplePhotos/back/OPSergio Palacios López.jpg'

export default function Cards() {
  return (
    <>
      <div>
        <h2 className={styles.title}>Nuestro equipo</h2>
        <h3 className={styles.group}>GENERAL</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card
                description="Coordino el SalmorejoTech 2025, y en mi tiempo libre estudio Ingeniería Informática"
                photo={Belen}
                backphoto={BelenOP}
                twlink="https://x.com/belenmmontes"
                ghlink="https://github.com/belenmmc"
                lklink="https://www.linkedin.com/in/bel%C3%A9n-mar%C3%ADa-montes-caro-128929294/"
              >
                Belén María Montes Caro
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de 2°Ingeniería informática UCO"
                photo={Cañete}
                backphoto={CañeteOP}
              >
                {' '}
                Antonio Cañete lopez
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="✍️ Promoviendo el Software Libre en Europa"
                photo={Sofia}
                backphoto={SofiaOP}
              >
                Sofía Aritz Albors Escobés
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiando informática en la UCO"
                photo={CarlosTorres}
                backphoto={CarlosTorresOP}
              >
                {' '}
                Carlos Torres Jiménez{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de 1°Ingeniería Informática."
                lklink="https://www.linkedin.com/in/david-s%C3%A1nchez-palomino-a06671322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                ghlink="https://github.com/davidI9"
                photo={DavidSanchez}
                backphoto={DavidSanchezOP}
              >
                {' '}
                David Sánchez Palomino{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de ingeniería informática de la UCO"
                photo={Roxana}
                backphoto={RoxanaOP}
              >
                {' '}
                Roxana Ortiz Mellado
              </Card>
            </div>
          </div>
        </div>
        <h3 className={styles.group}>Infraestructura</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card
                description=""
                photo={Juanan}
                backphoto={JuananOP}
                twlink="https://x.com/__juaneljulaint"
                lklink="https://www.linkedin.com/in/juan-mellado-02056a352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                ghlink="https://github.com/butifarraprogramadora3000"
              >
                {' '}
                Arturo Vicente Perez
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de ingenieria informatica de la Uco"
                photo={DavidMart}
                backphoto={DavidMartOP}
                lklink="https://www.linkedin.com/in/david-martinez-76b284352/"
                ghlink="https://github.com/darkghost078"
              >
                {' '}
                David Martínez Molina{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de 2° de Ingeniería informática 😄 
                A tope con el salmorejo para aprender y disfrutar 🎉"
                photo={Dario}
                backphoto={DarioOP}
                twlink="https://x.com/000Volk000?t=JzjQST-fwPFT21_nVzy9kA&s=09"
                lklink="https://www.linkedin.com/in/dar%C3%ADo-mart%C3%ADnez-kostyuk-931994330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                ghlink="https://github.com/000Volk000"
              >
                {' '}
                Dario Martínez Kostyuk
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de informática, Delegado de relaciones externas del aula e interesado en aprender y mejorar "
                photo={Tefry}
                backphoto={TefryOP}
                lklink="https://www.linkedin.com/in/manuel-reyes-a15283352/"
              >
                {' '}
                Manuel Reyes Serrano (Tefry)
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de 2° de ingeniería informática con muchas ganas de aprender."
                photo={Juanan}
                backphoto={JuananOP}
                twlink="https://x.com/__juaneljulaint"
                lklink="https://www.linkedin.com/in/juan-mellado-02056a352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                ghlink="https://github.com/butifarraprogramadora3000"
              >
                {' '}
                Juan Antonio Mellado Arenas
              </Card>
            </div>
          </div>
          <h3 className={styles.group}>Diseño</h3>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Card
                  description="Estudiante de ingeniería informática amante del arte, un poco 'The best of both worlds' :)"
                  photo={Elena}
                  backphoto={ElenaOP}
                  lklink="https://www.linkedin.com/in/elena-molero-padilla-9213432b7/"
                  ghlink="https://github.com/elenamolero"
                >
                  {' '}
                  Elena Molero Padilla
                </Card>
              </div>
              <div className="col-md-4">
                <Card
                  description="Funciono con código: 
                            if(café === true) { productividad++; } else {error('Requiere más café');"
                  photo={AntonioJose}
                  backphoto={AntonioJoseOP}
                  lklink="https://www.linkedin.com/in/antonio-jos%C3%A9-serrano-maestre-6322a9352/"
                >
                  {' '}
                  Antonio José Serrano Maestre{' '}
                </Card>
              </div>
              <div className="col-md-4">
                <Card
                  description="2°Ingeniería Informática Grupo diseño"
                  photo={AntonioMerlo}
                  backphoto={AntonioMerloOP}
                  lklink="https://www.linkedin.com/in/antonio-jes%C3%BAs-merlo-morales-28ba162a8/"
                >
                  {' '}
                  Antonio Jesús Merlo Morales{' '}
                </Card>
              </div>
            </div>
          </div>
          <h3 className={styles.group}>Marketing</h3>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Card
                  description="2ndo de Ingeniería Informática en la UCO
                                Subdelegado de las relaciones externas del Aula de Software Libre
                                Distribuidor oficial de memes del Salmorejo"
                  photo={Jaime}
                  backphoto={JaimeOP}
                  twlink="https://x.com/JaimeH_05"
                  lklink="https://www.linkedin.com/in/jaime-hern%C3%A1ndez-p%C3%A9rez-731284352/"
                  ghlink="https://github.com/JaimeHP05"
                >
                  {' '}
                  Jaime Hernández Pérez{' '}
                </Card>
              </div>
              <div className="col-md-4">
                <Card
                  description="Ojala el meme de Cristiano y Messi hubiese sido idea mía"
                  photo={Minghan}
                  backphoto={MinghanOP}
                >
                  {' '}
                  Minghan Wang{' '}
                </Card>
              </div>
            </div>
          </div>
        </div>
        <h3 className={styles.group}>Gestión</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card
                description="Estudiante de 4 de ingeniería informática apasionado del desarrollo de software con muchas ganas de aprender"
                photo={Alvaro}
                backphoto={AlvaroOP}
                ghlink="https://github.com/alvaroserrano09"
                lklink="https://www.linkedin.com/in/%C3%A1lvaro-serrano-lop%C3%A9z-98058125a/"
              >
                {' '}
                Álvaro Serrano Lopéz{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de 2 curso de ingeniería informática por la UCO"
                photo={Pablo}
                backphoto={PabloOP}
                ghlink="https://github.com/PMMS22"
                lklink="https://www.linkedin.com/in/pablo-miguel-martín-segovia-1ab9001b9/"
              >
                {' '}
                Pablo Miguel Martín Segovia{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de ingeniería informática en la UCO. Utilizaré un algoritmo de búsqueda O(1) para encontrar lo antes posible tu corazón."
                photo={Sergio}
                backphoto={SergioOP}
                ghlink="https://github.com/Serpal64"
                lklink="https://www.linkedin.com/in/sergio-palacios-l%C3%B3pez-695736352/"
              >
                {' '}
                Sergio Palacios López{' '}
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                description="Estudiante de Ing. Informática en la UCO, miembro del ASL"
                photo={Alejandro}
                backphoto={AlejandroOP}
                ghlink="https://github.com/alejandrombe"
                lklink="https://www.linkedin.com/in/alejandromartosbellido/"
              >
                {' '}
                Alejandro Martos Bellido{' '}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
