import PlusIcon from "../../public/plus";
import AcceptIcon from "../../public/accepted";

const IconToggle = ({ isChecked }) => {
  return <div>{isChecked ? <AcceptIcon /> : <PlusIcon />}</div>;
};

export default IconToggle;
