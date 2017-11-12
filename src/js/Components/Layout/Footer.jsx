import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <h1>Footer</h1>
                <p>Lista Categorias</p>
                <Link to="/about">Acerca de Nosotros</Link>
                <h3>Siganos en</h3>
            </footer>
        );
    }
}