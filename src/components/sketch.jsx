import React from "react";
import Sketch from "react-p5";

const Main = (props) => {
  const preload = (p5) => {};

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400, p5.WEBGL).parent(canvasParentRef);
    //GLOBAL PROPERTIES
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.imageMode(p5.CENTER);
  };
  const draw = (p5) => {
    p5.background(255, 0);
    p5.push();
    //drawSphere();
    p5.noFill();
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.millis() / 3000);
    p5.rotateZ(-p5.PI / 6);
    p5.sphere(100);
    //end of drawSphere();
    if (props.cityLoaded) {
      //drawLine with city info
      let theta = this.props.weatherData.coord.lon;
      let phi = this.props.weatherData.coord.lat;
      let location = p5.Vector.fromAngles(
        p5.radians(theta),
        p5.radians(phi),
        200
      );
      p5.stroke(255, 0, 0);
      p5.strokeWeight(3);
      p5.line(0, 0, 0, location.x * 0.75, location.y * 0.75, location.z * 0.75);
      //text
      p5.fill(0);
      p5.textSize(50);
      p5.translate(location.x * 1.25, location.y * 1.25, location.z * 1.25);
      p5.rotateY(-p5.millis() / 3000);
      p5.text(this.props.weatherData.name, 0, 0, 0);
      p5.textSize(20);
      p5.text(
        p5.str(p5.round(this.props.weatherData.main.temp)) + " C",
        80,
        0,
        0
      );
      p5.textSize(20);
      p5.text(p5.str(p5.round(this.props.weatherData[0].main)), 80, 80, 0);
    }
    p5.pop();
  };

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
};

export default Main;
