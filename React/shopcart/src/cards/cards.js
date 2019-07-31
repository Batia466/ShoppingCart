
import React, {Component} from 'react';

// import './App.css';

import CardItem from '../card-item/card-item.js';



export default class Cards extends Component {

    state = {
      items: null

    }
  constructor(props) {
    super(props);    
    this.toBasket  = this.props.toBasket; 
    this.toBaskgetDataet  = this.props.getData; 
    console.log("constructor",props)
}
  buyCb = (item) => {

    console.log("buyCb", item);
    if (this.toBasket) {
      this.toBasket(item)
    }
  }
  
  componentDidMount() {
    this.props.getData().then((items)=> {
        this.setState({items})
    })
  }
  renderItems = (arr) => {
    console.log("renderItems",arr)
    return arr.map((obj) => {
      return ( < CardItem buyCb = {this.buyCb}
        key = {obj.key}
        item = {obj}
        />)
      })
  }

  render() {
    if(!this.state.items) {
      return null
    }
 
    const Items = this.renderItems(this.state.items);

    return (
      <div className="row row-pb-md">
          {Items}
      </div>
    );
  }

}


 





