import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Cards from "../components/Cards"
import items from "../items.js";
class CardsContainer extends Component {
    render() {
      console.log(items);
      let itemList = items.map((item) => {
        return   <Cards title={item.title} 
            price={item.price} 
            pictureUrl={item.pictureUrl}
          />
      })
      return (
          <div class="iu two cards">
            <div class="ui four cards">
              {itemList}
            </div>
          </div>
        );
    }
  }
  
  export default CardsContainer;