import React from 'react';
import {Row,Col} from 'react-materialize';

export class About extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Acerca de Nosotros</h1>
                <h3>Explicacion del curso</h3>
                <p>Texto dummy :v</p>
                <h3>Inteción del proyexto</h3>
                <p>Texto dummy :v</p>
                <h3>Integrantes</h3>
                <Row>
                    <Col>
                    <img />
                    <h4>Mauricio Guzman</h4>
                    <h4>Correo</h4>
                    <h4>Celular</h4>
                    </Col>
                    <Col>
                    <img />
                    <h4>Carlos Quintero</h4>
                    <h4>Correo</h4>
                    <h4>Celular</h4>
                    </Col>
                    <Col>
                    <img />
                    <h4>Cristian Suárez</h4>
                    <h4>Correo</h4>
                    <h4>Celular</h4>
                    </Col>
                </Row>
            </div>
            );
    }
}