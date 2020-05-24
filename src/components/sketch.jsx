import React, { Component } from "react";
import Sketch from "react-p5";

class Main extends Component {
  state = {};
  preload = (p5) => {};
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };
  draw = (p5) => {
    p5.background(250);
    p5.noFill();
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.millis() / 3000);
    p5.rotateZ(-p5.PI / 6);
    p5.sphere(100);
  };

  render() {
    return (
      <Sketch preload={this.preload} setup={this.setup} draw={this.draw} />
    );
  }
}

export default Main;
