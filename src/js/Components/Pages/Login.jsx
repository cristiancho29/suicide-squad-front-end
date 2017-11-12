import React from 'react';
import {Row,Input,Button} from 'react-materialize';

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            message:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit() {
        console.log(this.state.email);
        if(this.state.email==='' || this.state.password===''){
            this.setState({
                message: 'No puede haber campos vacíos'
            });
        }
        else{
            this.setState({
                email:'',
                password: '',
                message: ''
            });
        }
    }
    
    render(){
        return(
            <div>
                <Row>
            		<h1>Iniciar Sesión</h1>
                    <Input type="email" label="Email" s={12} onChange={this.handleChange} value={this.state.email} name="email"/>
            		<Input type="password" label="Password" s={12} onChange={this.handleChange} value={this.state.password} name="password"/>
            		<Button onClick={this.handleSubmit}>Iniciar Sesión</Button>
                </Row>
                <p>
                    {
                    this.state.message==='' ? '' : this.state.message
                    }
                </p>
            </div>
            
        );
    }
}