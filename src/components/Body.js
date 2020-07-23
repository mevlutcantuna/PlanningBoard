import React from "react";
import "../style/Body.css";
import { Map } from "immutable";
import { connect } from "react-redux";
import Column from "./Column";

function Body(props) {
  const {
    clickCard,
    clickColumn,
    groups,
    eventGroupName,
    eventHeader,
    handleChange,
    eventContent,
    eventDate,
    eventTags,
    handleSubmit,
    groupNameInput,
    addGroup,
  } = props;

  return (
    <div className={"body"}>
      <Column />
      <div className={"body__form" + (clickColumn ? "__show" : "")}>
        <label className={"body__form__show_label"}>
          <h4>Column Title</h4>
          <input
            name={"groupNameInput"}
            type={"text"}
            onChange={handleChange}
            value={groupNameInput}
            className={"body__form__show__input"}
          />
        </label>
        <input
          onClick={addGroup}
          type={"Submit"}
          value={"Add"}
          className={"body__form__show__submit"}
        />
      </div>
      <form className={"body__form" + (clickCard ? "__show" : "")}>
        <label className={"body__form__show_label"}>
          <h4> Card Title</h4>
          <input
            name={"eventHeader"}
            onChange={handleChange}
            type={"text"}
            className={"body__form__show__input"}
            value={eventHeader}
          />
        </label>
        <label className={"body__form__show_label"}>
          <h4>Card Content</h4>
          <textarea
            name={"eventContent"}
            className={"body__form__card__content__input"}
            onChange={handleChange}
            value={eventContent}
            rows={5}
            cols={22}
          />
        </label>
        <label className={"body__form__show_label"}>
          <h4>Date</h4>
          <input
            onChange={handleChange}
            name="eventDate"
            type="date"
            value={eventDate}
            className={"body__form__show__input"}
          />
        </label>
        <label className={"body__form__show_label"}>
          <h4>Level</h4>
          <select
            className={"body__from__show__select"}
            onChange={handleChange}
            name={"eventTags"}
            value={eventTags}
          >
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </select>
        </label>
        <label className={"body__form__show_label"}>
          <h4>Column</h4>
          <select
            onChange={handleChange}
            name={"eventGroupName"}
            className={"body__from__show__select"}
            value={eventGroupName}
          >
            <option className={"first__option"}>choose level</option>
            {groups.map((each) => {
              return (
                <option
                  key={each.groupId + Math.random()}
                  value={each.groupName}
                >
                  {each.groupName}
                </option>
              );
            })}
          </select>
        </label>
        <button
          onClick={handleSubmit}
          className={"body__form__show__submit"}
          value={"Add"}
          type={"button"}
        >
          Add
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    groups: Map(state).get("groups", [""]),
    groupNameInput: Map(state).get("groupNameInput", ""),
    clickColumn: Map(state).get("clickColumn", false),
    clickCard: Map(state).get("clickCard", false),
    eventDate: Map(state).get("eventDate", ""),
    eventHeader: Map(state).get("eventHeader", ""),
    eventContent: Map(state).get("eventContent", ""),
    eventGroupName: Map(state).get("eventGroupName", ""),
    eventTags: Map(state).get("eventTags", "Medium"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGroup: () =>
      dispatch({
        type: "ADD_GROUP",
      }),
    handleChange: (e) =>
      dispatch({
        type: "HANDLE_CHANGE",
        value: e.target.value,
        name: e.target.name,
      }),
    handleSubmit: () =>
      dispatch({
        type: "HANDLE_SUBMIT",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
