import { NavLink } from "react-router-dom";

const Article = (props) => {
    return (
        <div className="article">
            <div className="article_header"><h2>{props.header}</h2></div>
            <div className="image_container">some image</div>
            <div className="article_body">{props.body}</div>
            <div className="article_footer">{props.date}</div>
        </div>
     );
}
 
export default Article;