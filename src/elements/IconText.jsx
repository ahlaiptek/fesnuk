import "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconText(props) {
  const { iconName, buttonName } = props;

  return (
    <div className="flex text-stone-600 items-center gap-2.5  hover:cursor-pointer hover:text-stone-900 font-medium">
      <i className="w-10 text-center"><FontAwesomeIcon icon={iconName}/></i>
      <div>{buttonName}</div>
    </div>
  );
}

export default IconText;