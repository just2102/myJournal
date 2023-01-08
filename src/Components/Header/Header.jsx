import { NavLink } from "react-router-dom";
import styles from "./Header.css"

const Header = (props) => {
    return (
        <>
        <header>
            <div className="logo">
                Logo
            </div>
            <div className="articles_link">
                {props.currentUser.id
                ?<NavLink to={`/articles/${props.currentUser.id}`}>My Articles</NavLink>
                :<NavLink to="/articles/1">Articles</NavLink>}
                </div>
            <div className="writers_link">
                <NavLink to="/writers">Writers</NavLink>
            </div>
            <div className="about_link">
                <NavLink to="/about">About</NavLink>
                </div>
            <div className="login_link">
                {!props.isAuthorized
                ?<NavLink to="/login">Login</NavLink>
                :<span>Hi,{props.currentUser.username}</span> }

            </div>
        </header>
        </> 
     );
}

 
export default Header;