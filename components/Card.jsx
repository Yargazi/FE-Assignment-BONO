"use client";

import IconToggle from "../app/hocks/IconToggle";
import useCardSelection from "../app/hocks/useCardSelection";

const Card = ({ id, title, handleCardClick, isChecked }) => {
  const handleClick = () => {
    handleCardClick(id);
  };

  return (
    <div className="custom-card" onClick={handleClick}>
      <p>{title}</p>

      <IconToggle isChecked={isChecked} />
    </div>
  );
};

export default Card;
