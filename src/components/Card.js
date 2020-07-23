import React from "react";
import "../style/Card.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import CardDetail from "./CardDetail";

function Card({ Cards = ["any"], groupId, deleteCard }) {
  return Cards.map((card, i) => {
    const StyledLink = styled(Link)`
        text-decoration:none;
        color: cornflowerblue;
        }`;
    const DetailInfo = {
      header: card.header,
      text: card.text,
      tag: card.tag,
      date: card.date,
    };
    if (card !== "any") {
      return (
        <section key={Math.random()} className="card">
          <div className="card__info">
            <div className="card__info__left">
              <div className="card__info__left__header">{card.header}</div>
              <div className="card__left__text">{card.text}</div>
              <div className="card__left__tag">{card.tag}</div>
            </div>
            <div className="card__info__right">
              <div className="card__info__right__image">IMG</div>
              <div className="card__info__right__date">{card.date}</div>
            </div>
          </div>
          <div className="card__buttons">
            <button
              className={"card__button"}
              onClick={() => {
                deleteCard(groupId, i);
              }}
              type="button"
            >
              Delete Card
            </button>
            <button className={"card__button"} type="button">
              <StyledLink to={"/detail"}>Detail</StyledLink>
            </button>
          </div>
          <div className={"card__detail__in__card"}>
            <CardDetail info={DetailInfo} />
          </div>
        </section>
      );
    }
    return <div key={card}>There is no Card</div>;
  });
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (groupId, cardIndex) =>
      dispatch({
        type: "DELETE_CARD",
        groupId,
        cardIndex,
      }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));
