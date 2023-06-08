import React from "react";
import Icon from "../assets/gym.jpg";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      type="button"
      className={
        bodyPart === item
          ? "bodyPart-item-active bodyPart-card"
          : "bodyPart-item-notactive bodyPart-card"
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" />
      <p className="bodyPart-txt">{item}</p>
    </div>
  );
};

export default BodyPart;
