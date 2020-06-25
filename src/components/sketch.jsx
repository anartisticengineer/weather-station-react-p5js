import React from "react";
import Sketch from "react-p5";
import mainFont from "../SIMPLIFICA Typeface.ttf";
import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: null,
      weatherData: {},
      lon: 0,
      lat: 0,
      cityName: "",
      temp: 0,
      description: "",
    };
  }

  componentDidUpdate() {
    this.loadData(this.props.weatherUrl);
  }

  preload = (p5) => {
    this.setState({ font: p5.loadFont(mainFont) });
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 400, p5.WEBGL).parent(canvasParentRef);
    //GLOBAL PROPERTIES
    p5.textFont(this.state.font);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.imageMode(p5.CENTER);
  };
  draw = (p5) => {
    p5.background(255, 0);
    p5.push();
    //drawSphere();
    p5.noFill();
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.millis() / 3000);
    p5.rotateZ(-p5.PI / 6);
    p5.sphere(100);
    //end of drawSphere();

    if (this.props.cityLoaded) {
      //drawLine with city info
      let theta = this.state.lon;
      let phi = this.state.lat;
      let location = p5.createVector(
        200 * p5.sin(phi) * p5.cos(theta),
        200 * p5.sin(phi) * p5.sin(theta),
        200 * p5.cos(phi)
      );
      p5.stroke(255, 0, 0);
      p5.strokeWeight(3);
      p5.line(0, 0, 0, location.x * 0.75, location.y * 0.75, location.z * 0.75);
      //text
      p5.fill(0);
      p5.textSize(50);
      p5.translate(location.x, location.y, location.z);
      p5.rotateY(p5.millis() / 3000);
      p5.text(this.state.cityName, 0, 0, 0);
      p5.textSize(20);
      p5.text(
        p5.str(p5.round(this.state.temp)) +
          (this.props.units === "metric" ? " C" : " F"),
        80,
        0,
        0
      );
      p5.textSize(20);
      p5.text(this.state.description, 80, 80, 0);
    }

    p5.pop();
  };

  async loadData(url) {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      lon: data.coord.lon,
      lat: data.coord.lat,
      cityName: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Sketch preload={this.preload} setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}

export default Main;

Main.defaultProps = {
  weatherUrl: "",
  cityLoaded: false,
};
