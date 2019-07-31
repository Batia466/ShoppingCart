
import React, { Component } from 'react';

import CartItem from '../cart-item/cart-item.js';
// import './App.css';
export default class Cart extends Component {
    // deleteCb = this.props.items.deleteCb;

//     CartItems = this.props.items.map((obj)=> {
//         return ( <CartItem key={obj.key}  item={obj} deleteCb={this.props.deleteCb} />)
//   })

  updateState = () => {
    this.CartItems = this.props.items.map((obj)=> {
        return ( <CartItem key={obj.key}  item={obj} deleteCb={this.props.deleteCb} />)
    })
  }
 
  render() {
    console.log("this.props.items",this.props.items)
    this.updateState();
    return (
    <div className="row row-pb-lg">
					<div className="col-md-12">
						<div className="product-name d-flex">
							<div className="one-forth text-left px-4">
								<span>Product Details</span>
							</div>
							<div className="one-eight text-center">
								<span>Price</span>
							</div>
							<div className="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div className="one-eight text-center">
								<span>Total</span>
							</div>
							<div className="one-eight text-center px-4">
								<span>Remove</span>
							</div>
						</div>
						{this.CartItems}
						
						
					</div>
				</div>
    );


  }
}



