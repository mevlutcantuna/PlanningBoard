import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";

class Board extends React.Component {
  render() {
    return (
      <div className={'board'}>
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default Board;
