import { addArticleActionCreator, updateNewArticleHeaderActionCreator, updateNewArticleTextActionCreator } 
from "../../../Redux/articlesReducer"

const UserSection = (props) => {
    function addArticle() {
        props.dispatch(addArticleActionCreator())
    }
    function onTextChange(e) {
        let newText = e.target.value
        props.dispatch(updateNewArticleTextActionCreator(newText))
    }
    function onHeaderChange(e) {
        let newHeader = e.target.value;
        props.dispatch(updateNewArticleHeaderActionCreator(newHeader))
    }

    return ( 
        <div className="user_section">
            <div className="user_avatar">User avatar...</div>
            <div className="user_username">Username</div>
            <div className="post_article_section">
                <label htmlFor="newArticle_header">Your new article is called</label>
                <input type="text" id="newArticle_header" placeholder="..." value={props.state.newArticleHeader} onChange={onHeaderChange} required/>
                <textarea name="newArticle" id="newArticle_body" 
                onChange={onTextChange} 
                placeholder="In the beginning there was word..."
                value={props.state.newArticleText}
                required
                >
                </textarea>
                <button className="post_article_button" onClick={addArticle}>Post</button>
            </div>

        </div>
     );
}
 
export default UserSection;