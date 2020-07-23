import React, { Component } from "react";
import "../style/CardDetail.css";
import { Map } from "immutable";
import {withRouter} from "react-router-dom";

class CardDetail extends Component {
  render() {
    const { history } = this.props;
    console.log("not im", this.props.info);

    const ImmutableInfo = Map(this.props.info);
    console.log("im", ImmutableInfo.get("header"));
    return (
      <div className={"card__detail__main"}>
        <button  onClick={() => history && history.push("/board")} className={'back__page'}>Back Page</button>
        <div className={"detail__list"}>
          <div className={"detail header"}>
            <h3 className={"title"}>HEADER :</h3> {ImmutableInfo.get("header")}
          </div>
          <div className={"detail text"}>
            <h3 className={"title"}>TASK :</h3> {ImmutableInfo.get("text")}
          </div>
          <div className={"detail tag"}>
            <h3 className={"title"}>TAG : {ImmutableInfo.get("tag")}</h3>
          </div>
          <div className={"detail date"}>
            <h3 className={"title"}>DATE :</h3> {ImmutableInfo.get("date")}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardDetail);
