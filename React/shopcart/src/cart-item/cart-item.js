
import React, { Component } from 'react';
import { BrowserRouter as  Link } from "react-router-dom";
// import './App.css';  {/* {require(`${photo}`)} */}
export default class CartItem extends Component {

constructor(props) {
    super(props);    
    this.price  = this.props.item.price; 
    this.deleteCb  = this.props.deleteCb; 
    this.state = {value: 1, total: this.price};
}
 
 
 handleChange = (event) => {
    let value = event.target.value;
    this.setState((state)=> { 

       
        let total=  value * this.price;
        return {value:value,total:total}});
 }
 handleDelete = (event) => {  
    event.preventDefault();
    this.deleteCb(this.props.item)
 }  
  render() {
    const { name, price, photo } = this.props.item; 
    const imgStyle = {
       
        backgroundImage: 'url(' + photo + ')',
      };
 
    return (
    <div className="product-cart d-flex">
        <div className="one-forth">
            <div className="product-img" style={imgStyle} >
          
            </div>
            <div className="display-tc">
                <h3>{name}</h3>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <span className="price">{price}</span>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
            <input type="text" className="form-control input-number text-center" value={this.state.value} onChange={this.handleChange} />
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <span className="price"> {this.state.total}</span>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <a href="#" onClick={this.handleDelete} className="closed"></a>
            </div>
        </div>
    </div>

    );


  }
}



