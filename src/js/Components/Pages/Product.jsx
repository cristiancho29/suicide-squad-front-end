import React from 'react';

export class Product extends React.Component{
    
    render(){
        return(
            <div>
            <h1>{this.props.pid}</h1>
            </div>
            );
    }
}