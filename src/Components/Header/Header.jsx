import { NavLink } from "react-router-dom";
import styles from "./Header.css"

const Header = () => {
    return ( 
        <header>
            <div className="logo">
                Logo
            </div>
            <div className="articles">
                <NavLink to="/articles">Articles</NavLink>
                </div>
            <div className="about">
                <NavLink to="/about">About</NavLink>
                </div>
        </header>
     );
}
 
export default Header;