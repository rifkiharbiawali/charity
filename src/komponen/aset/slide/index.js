import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [],
    };
  }
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://insidearabia.com/wp-content/uploads/2020/05/IMG_2393-1280x640.jpg"
            alt="First slide"
            height="500"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.theukdomain.uk/wp-content/uploads/2019/03/What-makes-a-good-charity-website.jpg"
            alt="Third slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.synchtank.com/wp-content/uploads/2018/12/Charity-Formation-e1545174672284.jpg"
            alt="Third slide"
            height="500"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slide;
