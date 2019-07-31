import React, {Component} from 'react';
import Header from './header/header.js';
import Cards from './cards/cards.js';
import Cart from './cart/cart.js';
import dbService from "./dbService/db-servece.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import './App.css';

export default class App extends Component {

  dbService = new dbService();
  state = {
    cardsList: [],
      basketArr: []  
  }



  Main = () => {

    console.log("Main",this.getAppData)
      return (
        <div >
         <Header />
         <Cards toBasket={this.toBasket} getData={this.getAppData} />
        </div>
        );
    
   
 
  }
  deleteCb = (item) => {
   
    this.setState(({basketArr,cardsList})=> { 
      let newArr = basketArr.filter((e)=> { return e.key != item.key });
      return {basketArr: newArr, cardsList: cardsList}
    })
  }
   CartBlock = () => {

    console.log("this.state.basketArr",this.state.basketArr)
    return (
      <Cart items = {this.state.basketArr} deleteCb={this.deleteCb}  />
    );
  }

  
  toBasket = (item) => {
    if(this.state.basketArr && this.state.basketArr.length > 0) {
      if(this.state.basketArr.findIndex((obj)=> { return obj.key === item.key}) < 0) {
        item.inBasket = true;
        this.state.basketArr.push(item)
      }
    }
    else {
      item.inBasket = true;
      this.state.basketArr.push(item)
    }

  }

  getAppData = () => {
   return this.dbService.getItems()
  }
  componentDidMount() {
  
  this.getAppData().then((res) => {
    const items = res;
    this.items = items;
    console.log("items",this.items)
    }).catch(() => {
      return null
    });
  }

    // componentDidMount() {
    //   this.getAppData();
    // }
    // componentDidUpdate(prevProps, prevState) {
    //   // console.log(prevProps)
    //   // console.log(prevState)
    //   console.log(this.state.cardsList)
    //   console.log(prevState.cardsList)
    //   console.log(JSON.stringify(this.state.cardsList) ==  JSON.stringify(prevState.cardsList))
    //   if(this.state.cardsList.length !== prevState.cardsList.length) {
    //     this.getAppData();
    //   }
    // }
  render () {
    return (
      <Router>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">About</Link>
            </li>
     
          </ul>
        <Route exact path="/" component={this.Main} />
        <Route path="/cart" component={this.CartBlock}  />
      </Router>
    );
  }

}


