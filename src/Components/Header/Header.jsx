import { NavLink } from "react-router-dom";
import styles from "./Header.css"

const Header = () => {
    return ( 
        <header>
            <div className="logo">
                Logo
            </div>
            <div className="articles_link">
                <NavLink to="/articles">Articles</NavLink>
                </div>
            <div className="writers_link">
                <NavLink to="/writers">Writers</NavLink>
            </div>
            <div className="about_link">
                <NavLink to="/about">About</NavLink>
                </div>
        </header>
     );
}
 
export default Header;