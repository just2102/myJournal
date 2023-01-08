import { useParams } from "react-router-dom"

const UserSection = (props) => {
    let params = useParams()
    function addArticle() {
        props.addArticle()
    }
    function onBodyChange(e) {
        let newBody = e.target.value
        props.onNewArticleBodyChange(newBody)
    }
    function onHeaderChange(e) {
        let newHeader = e.target.value;
        props.onNewArticleHeaderChange(newHeader)
    }
    return (
        <>
          {props.writer && (
            <div className="user_section">
              <div className="user_avatar">
                <img src={props.writer.avatar} alt="" />
              </div>
              <div className="user_username">{props.writer.name}</div>
              {props.writer.id === props.currentUser.id && (
                <div className="post_article_section">
                  <label htmlFor="newArticle_header">Your new article is called</label>
                  <input
                    type="text"
                    id="newArticle_header"
                    placeholder="..."
                    value={props.newArticleHeader}
                    onChange={onHeaderChange}
                  />
      
                  <textarea
                    name="newArticle"
                    id="newArticle_body"
                    onChange={onBodyChange}
                    placeholder="In the beginning there was word..."
                    value={props.newArticleBody}
                  ></textarea>
                  <button className="post_article_button" onClick={addArticle}>
                    Post
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      );
}
 
export default UserSection;