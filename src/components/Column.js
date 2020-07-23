import React from "react";
import "../style/Column.css";
import { Map } from "immutable";
import { connect } from "react-redux";
import Card from "./Card";

function Column(props) {
  const { deleteColumn, groups, showAddCard } = props;
  return groups.map((group, i) => {
    return (
      <div className={"column"} key={group.groupId + Math.random()}>
        <div className={"column__top"}>
          <h2 className={"column__header"}>{group.groupName}</h2>
          <div className={"column__buttons"}>
            <button
              onClick={() => {
                deleteColumn(i);
              }}
              className={"column__button"}
              type={"button"}
            >
              Delete Column
            </button>
            <button
              onClick={showAddCard}
              name={"clickCard"}
              value={"clickCard"}
              className={"column__button"}
              type={"button"}
            >
              Add Card
            </button>
          </div>
        </div>
        <Card groupId={group.groupId} Cards={group.cards} />
      </div>
    );
  });
}

function mapStateToProps(state) {
  return {
    groups: Map(state).get("groups", [""]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteColumn: (id) =>
      dispatch({
        type: "DELETE_COLUMN",
        groupId: id,
      }),
    showAddCard: (event) =>
      dispatch({
        type: "SHOW_ADD_CARD",
        name: event.target.name,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
