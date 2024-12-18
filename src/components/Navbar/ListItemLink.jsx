import { NavLink } from "react-router-dom";
import styles from "../../styles/Navbar/ListItemLink.module.scss";

const ListItemLink = ({url, children, clickHandler, optionClass}) => {
  return ( 
  <li className={`${styles.ListItem} ${optionClass}`} onClick={clickHandler}>
    <NavLink 
    to={`/${url}`} className={({isActive})=>(isActive? styles.active: undefined)}>
    {children}
    </NavLink>  
  </li>
  );
};

ListItemLink.defaultPops = {
  url: "",
  optionClass: undefined, 
};

export default ListItemLink