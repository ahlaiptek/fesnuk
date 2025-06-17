import "../assets/icon";
import logo from "../assets/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationButton(props) {
  const { iconName, buttonName } = props;

  return (
    <div className="flex text-white items-center gap-2.5  hover:cursor-pointer w-fit">
      <i className="w-10 text-center"><FontAwesomeIcon icon={iconName}/></i>
      <div>{buttonName}</div>
    </div>
  );
}

function FilterButton() {
  return (
    <div className=" flex flex-col gap-2.5 py-3">
      <NavigationButton buttonName="Trending" iconName="arrow-trend-up" />
      <NavigationButton buttonName="Best Seller" iconName="star" />
      <NavigationButton buttonName="Electronic" iconName="lightbulb" />
      <NavigationButton buttonName="fashion" iconName="shirt" />
      <NavigationButton buttonName="Home & Living" iconName="house-chimney" />
      <NavigationButton
        buttonName="Health & Beauty"
        iconName="notes-medical"
      />
      <NavigationButton
        buttonName="Sports & Outdoors"
        iconName="baseball-bat-ball"
      />
      <NavigationButton buttonName="Toys & Games" iconName="gamepad" />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1 border-b border-white">
      <img src={logo} alt="" className="w-12 h-12 object-contain" />
      <h2 className="text-white">Fesnuk</h2>
    </div>
  )
}

const SideBar = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Logo/>
      <FilterButton />
    </div>
  );
};

export default SideBar;
