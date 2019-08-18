import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require("../img/VariedadFender.jpg")} />
                    <p className="legend">LAS MEJORES GUITARRAS</p>
                </div>
                <div>
                    <img src={require("../img/FendyB.jpg")} />
                    <p className="legend">PRECIOS COMODOS</p>
                </div>
                <div>
                    <img src={require("../img/Fteam.jpg")}  />
                    <p className="legend">EQUIPO ESPECIALIZADO</p>
                </div>
                <div>
                    <img src={require("../img/FenderHome.jpg")} />
                    <p className="legend">FENDER ES SENCILLO, PERO ELEGANTE</p>
                </div>
                <div>
                    <img src={require("../img/wow.jpg")}  />
                    <p className="legend">LO TRADICIONAL NO ES SUFICIENTE</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;