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
      } ${
        isChecked
          ? "border-solid border-2 border-black drop-shadow-[-1px_1px_0.3px_rgba(1,1,1,1)]"
          : ""
      }`}
      style={{ backgroundColor: cause.impactBackground }}
      onClick={handleClick}
    >
      <p className="p-[1px]">{cause.title}</p>
      <IconToggle isChecked={isChecked} />
    </div>
  );
};

export default Card;
