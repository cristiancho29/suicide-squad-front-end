import React from 'react';
import {Row,Input,Button} from 'react-materialize';

export class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            info:'',
            cant:''
        };
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit() {
        
    }
    
    render(){
        return(
            <div>
                <h1>Agregar Producto</h1>
                <div>
                    <h1>Foto</h1>
                    <Button>Examinar</Button>
                </div>
                <div>
                    <Row>
                        <Input type="text" label="Nombre" s={12}onChange={this.handleChange} value={this.state.name} name="name"/>
                		<Input type="textarea" label="Descripción" s={12} onChange={this.handleChange} value={this.state.info} name="info"/>
                		<Input type="text" label="#Unidades" s={12} onChange={this.handleChange} value={this.state.cant} name="cant"/>
                		<Button onClick={this.handleSubmit}>Vender!!</Button>
                    </Row>
                    <p>
                        {
                        this.state.message==='' ? '' : this.state.message
                        }
                    </p>
                </div>
            </div>
            
            
        );
    }
}