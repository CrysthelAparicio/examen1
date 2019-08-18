import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../Toolbar.css";

class Toolbar extends Component {
    render() {
        return(
            <div class="ui teal four item inverted menu">
                <a class="active item">PRODUCTS</a>
                <a class="item">WORK WITH FENDER</a>
                <a class="item">FENDER AT SPACE</a>
                <a class ="item">MORE</a>
            </div>
        );
    }
}

export default Toolbar;