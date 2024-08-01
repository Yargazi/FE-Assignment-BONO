"use client";
import IconToggle from "../app/hocks/IconToggle";

const Card = ({ cause, handleCardClick, isChecked, isDisabled }) => {
  const handleClick = () => {
    if (!isDisabled) {
      handleCardClick(cause);
    }
  };

  return (
    <div
      className={`custom-card ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      style={{ backgroundColor: cause.impactBackground }}
      onClick={handleClick}
    >
      <p>{cause.title}</p>
      <IconToggle isChecked={isChecked} />
    </div>
  );
};

export default Card;
