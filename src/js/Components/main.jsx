import React from 'react';
import {Home} from './Pages/Home.jsx';
import {Login} from './Pages/Login.jsx';
import {Register} from './Pages/Register.jsx';
import {NewProduct} from './Pages/NewProduct.jsx';
import {Profile} from './Pages/Profile.jsx';
import {About} from './Pages/About.jsx';
import {Product} from './Pages/Product.jsx';
import {Footer} from './Layout/Footer.jsx';
import {Nav} from './Layout/Nav.jsx';
import axios from 'axios';
import {
  HashRouter as Router,
  hashHistory,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

export class Main extends React.Component {
	
	constructor(props){
  	super(props);
  	this.state={
  		products:[],
  		productid:'',
  		uid:''
  	};
  	this.catchProductId=this.catchProductId.bind(this);
  }
  
  componentDidMount(){
  	axios
    .get('https://back-end-salazarthecoder.c9users.io/api/v1/products')
    .then(res => {
    	this.setState({ products: res.data });
    	console.log(res.data);
    })
    .catch(err => console.log(err));
  }
  catchProductId(pid){
  	this.setState({productid:pid});
  }
	render() {
		return (
		<Router history={hashHistory}>
			<main>
				<Nav isLogIn={false}/>
				<Route exact path="/" component={()=><Home products={this.state.products} catchProductId={this.catchProductId}/>}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/new_product" component={NewProduct}/>
				<Route path="/about" component={About}/>
				<Route path="/profile" component={Profile}/>
				<Route path={"/products/"+this.state.productid} component={()=><Product pid={this.state.productid}/>}/>
				<Footer/>
			</main>
		</Router>
		);
	}
}


