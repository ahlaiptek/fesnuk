import IconText from "../elements/IconText";
import logo from "../assets/logo.png"



function FilterButton() {
  return (
    <div className=" flex flex-col gap-2.5 py-3">
      <IconText buttonName="Trending" iconName="arrow-trend-up" />
      <IconText buttonName="Best Seller" iconName="star" />
      <IconText buttonName="Electronic" iconName="lightbulb" />
      <IconText buttonName="fashion" iconName="shirt" />
      <IconText buttonName="Home & Living" iconName="house-chimney" />
      <IconText
        buttonName="Health & Beauty"
        iconName="notes-medical"
      />
      <IconText
        buttonName="Sports & Outdoors"
        iconName="baseball-bat-ball"
      />
      <IconText buttonName="Toys & Games" iconName="gamepad" />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-1 border-b border-white">
      <img src={logo} alt="" className="w-18 h-auto object-contain" />
      <h2 className="text-stone-900 font-bold text-2xl">Fesnuk</h2>
    </div>
  )
}

const SideBar = () => {
  return (
    <div className="min-h-screen shadow px-3">
      <Logo/>
      <FilterButton />
    </div>
  );
};

export default SideBar;
