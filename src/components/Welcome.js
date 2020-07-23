import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../style/Welcome.css";

class Welcome extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={"welcome"}>
        <h1>Welcome to Planning Board</h1>
        <button
          className={"board__button"}
          onClick={() => history && history.push("/board")}
        >
          Go App
        </button>
      </div>
    );
  }
}

export default withRouter(Welcome);
