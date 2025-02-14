import styles from './Cards.module.css'
import Card from '../Card/Card'
import fotoPrueba from '../../sprites/PeoplePhotos/fotoPrueba.jpeg'
import mirrorPrueba from '../../sprites/PeoplePhotos/mirrorphoto.jpg'

export default function Cards() {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-4">
                <Card description="prueba 1" photo={fotoPrueba} twlink= "https://www.google.es/" lklink= "https://www.google.es/" ghlink= "https://www.google.es/" mirrorphoto={mirrorPrueba}> Nombre 1</Card>
            </div>
            <div className="col-md-4">
                <Card description="prueba 2">Nombre 2</Card>
            </div>
            {/*
            <div className="col-md-4">
                <Card description="prueba 3">Nombre 3</Card>
            </div>*/}
            </div>
        </div>
        </>
    );
}
