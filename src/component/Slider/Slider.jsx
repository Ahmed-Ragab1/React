import React, { Component } from "react";

import Carousel from 'react-bootstrap/Carousel';

import "./Slider.css";
class Slider extends Component {
    render(){
        return(
            <div className="Slider"> 
              <Carousel>
      <Carousel.Item>
        <img
          className="im d-block w-100"
          src="https://m.media-amazon.com/images/I/71ruDmtlBOL._AC_SX500_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-block w-100"
          src="https://m.media-amazon.com/images/I/71ruDmtlBOL._AC_SX500_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="im d-block w-100"
          src="https://m.media-amazon.com/images/I/71ruDmtlBOL._AC_SX500_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        )
    }
}
export default Slider;