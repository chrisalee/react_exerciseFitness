import React from "react";
import { Icon } from "@iconify/react";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: "arcticons:exercisetimer",
      name: bodyPart,
    },
    {
      icon: "healthicons:exercise-running-outline",
      name: target,
    },
    {
      icon: "healthicons:exercise-weights-outline",
      name: equipment,
    },
  ];
  return (
    <div className="detail">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="detail-content">
        <h2>{name}</h2>
        <p>
          Exercises keep you strong. <span>{name}</span>
          is one of the best
          <br />
          exercises to target your {target}. It will improve your <br />
          mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div className="detail-item" key={item.name}>
            <button className="detail-button">
              <Icon icon={item.icon} className="detail-btn-img" />,
            </button>
            <p className="detail-btn-txt">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
