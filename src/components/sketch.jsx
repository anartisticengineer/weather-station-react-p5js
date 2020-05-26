import React, { Component } from "react";
import Sketch from "react-p5";

class Main extends Component {
  constructor(props) {
    super(props);
    this.mainFont = null;
  }
  state = {
    cityLoaded: false,
  };

  preload = (p5) => {
    //p5.loadJSON("../city.list.min.json", this.getCityData);
    //this.mainFont = p5.loadFont("SIMPLIFICA Typeface.ttf");
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    //GLOBAL PROPERTIES
    //p5.textFont(this.mainFont);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.imageMode(p5.CENTER);
  };
  draw = (p5) => {
    p5.background(250);
    p5.push();
    //drawSphere();
    p5.noFill();
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.millis() / 3000);
    p5.rotateZ(-p5.PI / 6);
    p5.sphere(100);
    //end of drawSphere();
    if (this.state.cityLoaded) {
      //drawLine with city info
    }
    p5.pop();
  };
  //---------------
  getCityData = (cities) => {
    this.cityIds = cities.map((city) => city.id);
    this.cityNames = cities.map((city) => city.name);
    console.log("City Data Loaded");
  };
  render() {
    return (
      <Sketch preload={this.preload} setup={this.setup} draw={this.draw} />
    );
  }
}

export default Main;
