import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Cards extends Component {
  render() {
    console.log(this.props)
    let {title, price, pictureUrl} = this.props;
    return (
      <a class="teal card">
          <div class="image">
            <img src={(`${pictureUrl}`)} />
          </div>
          <div class="content">
            <div class="header">{title}</div>
            <div class="description">$ {price} USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">
                  <i class="cart plus icon" />
                </div>
                <div class="visible content">Get it</div>
              </div>
            </span>
          </div>
        </a>
    );
  }
}

export default Cards;
