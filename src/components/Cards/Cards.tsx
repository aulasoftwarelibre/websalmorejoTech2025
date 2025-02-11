import styles from './Cards.module.css'
import Card from '../Card/Card'


export default function Cards() {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-4">
                <Card description="prueba 1">Nombre 1</Card>
            </div>
            <div className="col-md-4">
                <Card description="prueba 2">Nombre 2</Card>
            </div>
            <div className="col-md-4">
                <Card description="prueba 3">Nombre 3</Card>
            </div>
            </div>
        </div>
        </>
    );
  }
  