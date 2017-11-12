import React from 'react';
import {Button} from 'react-materialize';
import {Link} from 'react-router-dom'

export class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            uid:'',
            name:'',
            email:'',
            cellphone:'',
            products:[]
        };
    }
    
    render(){
        return (
            <div>
                <div>
                    <div>
                        Foto de perfil<img />
                        <button>Cambiar Foto</button>
                    </div>
                    <div>
                        <h2>Información Personal</h2>
                        <div>
                            <p>Nombre:</p>
                            <p>Email:</p>
                            <p>Cellphone:</p>
                        </div>
                        <Button><Link to="new_product">Agregar Producto</Link></Button>
                    </div>
                    <div>
                    Anuncios
                    </div>
                </div>
            </div>
                
        );
    }
}