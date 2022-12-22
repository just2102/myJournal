
const Article = (props) => {
    return (
        <div className="article">
            <div className="article_header"><h2>{props.header}</h2></div>
            <div className="image_container">some image</div>
            <div className="article_body">{props.body}</div>
            <div className="article_footer">
                <div className="article_date">{props.date}</div>
                <div className="article_likes">Likes: {props.likeCount}</div>
            </div>
        </div>
     );
}
 
export default Article;