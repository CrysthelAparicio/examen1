import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import HeaderContainer from "../containers/HeaderContainer";
import ToolbarContainer from "../containers/ToolbarContainer";
import CardsContainer from "../containers/CardsContainer";
import Carousell from "../components/Carousel";
import FootherContainer from "../containers/FootherContainer";

class HomePage extends Component {
  componentDidMount() {
    document.title = 'Fender';
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <ToolbarContainer />
        <Carousell />
        <CardsContainer />
        <FootherContainer />
      </div>
    );
  }
}

export default HomePage;