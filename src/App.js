import React, { Component } from "react";
import "./App.css";

const NUM_BOXES = 31;

const Box = ({ color }) => {
  const style = {
    width: "180px",
    height: "180px",
    display: "inline-block",
    backgroundColor: color,
  };
  return <div style={style} />;
};

class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = { boxes };

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomColor();
      this.setState({ boxes });
    }, 3000);
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return <div className="App">{boxes}</div>;
  }
}

App.defaultProps = {
  allColors: [
    "#000000",
    "#080808",
    "#101010",
    "#181818",
    "#202020",
    "#282828",
    "#303030",
    "#383838",
    "#404040",
    "#484848",
    "#505050",
    "#585858",
    "#606060",
    "#686868",
    "#707070",
    "#787878",
    "#808080",
    "#888888",
    "#909090",
    "#989898",
    "#A0A0A0",
    "#A8A8A8",
    "#B0B0B0",
    "#B8B8B8",
    "#C0C0C0",
    "#C8C8C8",
    "#D0D0D0",
    "#D8D8D8",
    "#E0E0E0",
    "#E8E8E8",
    "#F0F0F0",
    "#F8F8F8",
    "#FFFFFF",
  ],
};

export default App;
