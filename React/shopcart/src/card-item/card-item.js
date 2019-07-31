
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
export default class CardItem extends Component {

state = {
  inBasket: false
}

  clickBuyBtn = () => {
    console.log("this.",this);
    let item = this.props.item;
    if(this.props && this.props.buyCb) {
      this.props.buyCb(item)
    }
    this.setState((state)=> {
      return {
        inBasket: true
      }
    })
  }
  toBasket = (e) => {
    e.preventDefault();
    window.location.search = "/cart"
  }
  

  render() {
    console.log(this);
    const { name, price, photo } = this.props.item;

    const { inBasket } = this.state;
    return (
      <div className="col-lg-3 mb-4 text-center">
        <div className="product-entry border">
          <a href="#" className="prod-img">
            <img src={require(`${photo}`)} className="img-fluid" alt="Free html5 bootstrap 4 template" />

          </a>
          <div className="desc">
            <h2><a href="#">{name}</a></h2>
            <span className="price">{price}</span>
          </div>
      {inBasket ? 
      ( <Link  className="btn btn-info" to="/cart">To Basket</Link> ) 
      : ( <button type="button" onClick={this.clickBuyBtn} className="btn btn-info">Buy</button>) }
        </div>
      </div>

    );


  }
}

// const CardItem = (item) => {
//     console.log("item",item);
//     const {name,price,photo} = item.item;
//     console.log("item",name,price);
//   return (
//     <div className="col-lg-3 mb-4 text-center">
//     <div className="product-entry border">
//       <a href="#" className="prod-img">
//       <img src={require(`${photo}`)} className="img-fluid" alt="Free html5 bootstrap 4 template"/>

//       </a>
//       <div className="desc">
//         <h2><a href="#">{name}</a></h2>
//         <span className="price">{price}</span>
//       </div>
//       <button type="button" className="btn btn-info">Buy</button>
//     </div>
//   </div>

//   );
// }

// export default CardItem;


