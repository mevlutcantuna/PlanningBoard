import React, { PureComponent } from "react";
import "../style/Navbar.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Navbar extends PureComponent {
  render() {
    const { showForm } = this.props;
    const {history} = this.props
    return (
      <div className={"navbar__big"}>
        <div className={"navbar__little"}>
          <h3>Planning Board</h3>
          <div className={"buttons"}>
            <button
              className={"header__left__button btn"}
              onClick={showForm}
              name={"clickColumn"}
              value={"clickColumn"}
              type={"button"}
            >
              Add Column
            </button>
            <button
              className={"header__right__button btn"}
              onClick={showForm}
              name={"clickCard"}
              value={"clickCard"}
              type={"button"}
            >
              Add Card
            </button>
          </div>
        </div>
        <button onClick={() => history && history.push('/exit')} className={"exit__button btn"}>
          Exit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    showForm: (event) =>
      dispatch({
        type: "SHOW_FORM",
        name: event.target.name,
      }),
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
