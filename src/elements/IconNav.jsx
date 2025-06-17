import "../assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IconNav = (props)=>{
    const {iconName, link = ""} = props
    return <a href={link} className="text-2xl text-stone-700 hover:text-stone-950"><FontAwesomeIcon icon={iconName}/></a>
}

export default IconNav;