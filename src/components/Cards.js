import React from "react";
import CardItem from "./CardItem";
import img2 from "../assets/images/img-2.jpg";
import img9 from "../assets/images/img-9.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
