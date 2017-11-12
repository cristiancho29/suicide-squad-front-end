import React from 'react';
import {Carousel} from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
export class Home extends React.Component {
	sendProductId(pid){
		this.props.catchProductId(pid);
	}
	render() {
		const products=this.props.products;
		return (
		<div className= "Body">
			<Carousel className="CarouselPrincipal">
				<img className="responsive-img" src="https://lorempixel.com/250/250/nature/1"/>
				<img className="responsive-img" src="https://lorempixel.com/250/250/nature/2"/>
				<img className="responsive-img" src="https://lorempixel.com/250/250/nature/3"/>
				<img className="responsive-img" src="https://lorempixel.com/250/250/nature/4"/>
				<img className="responsive-img" src="https://lorempixel.com/250/250/nature/5"/>
			</Carousel>
			
			<div className="LatestItems">
				{products.map((product)=>
						(<div key={product.id}>
						<img src="https://fibremex.com/fibraoptica/modulos/Foro/images/icono-usuario.png"/>
						<p>{product.name}</p>
						<p>Precio: {product.price}</p>
						<Link to={'/products/'+product.id} onClick={()=>this.sendProductId(product.id)}><button >Ver producto</button></Link>
						</div>)
					)
				}
			</div>
			<div className="Instrucciones">
					fdsfs
			</div>
		
		</div>
		);
		
	}
}


