import { useState } from "react";
import IconToggle from "../app/hocks/IconToggle";

const Card = ({ id, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div className="custom-card" key={id} onClick={handleClick}>
      <p>{title}</p>

      <IconToggle isChecked={isChecked} />
    </div>
  );
};

export default Card;
