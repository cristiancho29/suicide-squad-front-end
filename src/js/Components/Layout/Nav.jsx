import React from 'react';
import {Navbar} from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

export class Nav extends React.Component{
    
    render(){
        return(
            (this.props.isLogIn ?
                (
                <div>
                    <Navbar className="navbar" brand={document.title} right>
                        <ul>
                            <li><Link to="/products">Buscar</Link></li>
                            <li><Link to="/profile">Perfil</Link></li>
                            <li><Link to="/new_product">vender</Link></li>
                            <li><Link to="/shopping_cart">Carrito</Link></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>
                    </Navbar>
                </div>
                )
                :  
                (
                <div>
                    <Navbar className="navbar" brand={document.title} right>
                        <ul>
                            <li><Link to="/products">Buscar</Link></li>
                            <li><Link to="/register">Registar</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </Navbar>
                </div>
                )
            )
        );
    }
}