import React from 'react';
import axios from 'axios';
import {Row,Input,Button} from 'react-materialize';

export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            c_password:'',
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
        if(this.state.email==='' || this.state.password==='' || this.state.c_password===''){
            this.setState({
                message: 'No puede haber campos vacíos'
            });
        }
        else{
            if(this.state.password!==this.state.c_password){
                this.setState({
                    password:'',
                    c_password:'',
                    message: 'La constraseña no coincide'
                });
            }
            else{
                //Aqui iria el post
                this.setState({
                    email:'',
                    password: '',
                    c_password:'',
                    message: ''
                });
            }
        }
    }
    
    render(){
        return(
            <div>
                <Row>
            		<h1>Registrar nueva cuenta</h1>
                    <Input type="email" label="Email" s={12}onChange={this.handleChange} value={this.state.email} name="email"/>
            		<Input type="password" label="Password" s={12} onChange={this.handleChange} value={this.state.password} name="password"/>
            		<Input type="password" label="Password Confirmation" s={12} onChange={this.handleChange}
            		    value={this.state.c_password} name="c_password"/>
            		<Button onClick={this.handleSubmit}>Registrarse!!</Button>
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