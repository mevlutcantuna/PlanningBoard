import { List, Map } from "immutable";

const INITIAL_STATE = {
  clickCard: false,
  clickColumn: false,
  groupNameInput: "",
  eventHeader: "",
  eventContent: "",
  eventTags: "Medium",
  eventDate: "",
  eventGroupName: "School",
  groups: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_FORM":
      const Istate = Map(state);
      const clickCard = Istate.get("clickCard", false);
      const clickColumn = Istate.get("clickColumn", false);
      let value;
      if (action.name === "clickColumn") {
        value = clickColumn;
      } else if (action.name === "clickCard") {
        value = clickCard;
      }
      return Istate.set(action.name, !value);
    case "SHOW_ADD_CARD":
      const Immstate = Map(state);
      const clickCardd = Immstate.get("clickCard", false);
      let valuee;
      if (action.name === "clickCard") {
        valuee = clickCardd;
      }
      return Immstate.set(action.name, !valuee);
    case "HANDLE_CHANGE":
      const Imstate = Map(state);
      return Imstate.set(action.name, action.value);
    case "ADD_GROUP":
      const groupss = List(Map(state).get("groups", [" "])).toJS();
      const groupNameInput = Map(state).get("groupNameInput", " ");
      const lastGroup = groupss[groupss.length - 1];
      let newGroupId;
      if (lastGroup) {
        newGroupId = lastGroup.groupId + 1;
      } else {
        newGroupId = 0;
      }
      const newGroupss = {
        groupId: newGroupId,
        groupName: groupNameInput,
        card: [],
      };
      const Igroups = List(groupss).push(newGroupss);
      return {
        groups: Igroups,
        clickCard: false,
        clickColumn: false,
        groupNameInput: "",
        eventHeader: "",
        eventTags: "",
        eventDate: "2",
        eventGroupName: "School",
      };
    case "HANDLE_SUBMIT":
      const {
        groups,
        eventHeader,
        eventContent,
        eventDate,
        eventTags,
        eventGroupName,
      } = Map(state).toJS();
      let index;
      groups.map((value, i) => {
        if (value.groupName === eventGroupName) {
          index = i;
        }
      });
      const newCard = {
        header: eventHeader,
        text: eventContent,
        imgSrc: "",
        date: eventDate,
        tag: eventTags,
      };
      const oldCards = Map(List(groups).get(index)).get("cards");
      const newCards = List(oldCards).push(newCard);
      const d = Map(List(groups).get(index, 0)).update(
        "cards",
        (value) => newCards
      );
      let newGroups = groups.map((value, i) => {
        if (i === index) {
          return d.toJS();
        }
        return value;
      });
      return {
        ...state,
        groups: newGroups,
        clickCard: false,
        clickColumn: false,
        eventHeader: "",
        eventContent: "",
        eventDate: "",
        eventTags: "Medium",
        eventGroupName: "School",
      };
    case "DELETE_COLUMN":
      const groupsss = List(Map(state).get("groups", [""]));
      const newGroupsss = groupsss.delete(action.groupId);
      return { ...state, groups: newGroupsss };
    case "DELETE_CARD":
      const groupssss = List(Map(state).get("groups", [""])).toJS();
      let indexx;
      groupssss.map((value, i) => {
        if (value.groupId === action.groupId) {
          indexx = i;
        }
      });
      const cards = Map(List(groupssss).get(indexx), 0).get("cards", [""]);
      const newCardsss = List(cards).delete(action.cardIndex);
      const newGroupssss = Map(List(groupssss).get(indexx, 0)).update(
        "cards",
        (value) => newCardsss
      );
      const resGroup = groupssss.map((value, i) => {
        if (indexx === i) {
          return newGroupssss.toJS();
        }
        return value;
      });
      return {
        ...state,
        groups: resGroup,
      };
    default:
      return state;
  }
}

export default reducer;
