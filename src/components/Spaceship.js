// Code The Spaceship Component Here
import React from "react";
import ReactDOM from "react-dom";

class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
        <ul>
          {this.props.colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
