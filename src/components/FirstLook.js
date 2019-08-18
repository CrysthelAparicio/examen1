import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class FirstLook extends Component {
    render(){
        return (
            <img class="ui fluid image" src={ require ("../img/club.jpg") } alt="SecureHouse" />    
        );
    }
}

export default FirstLook;