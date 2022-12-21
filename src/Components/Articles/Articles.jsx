import React from "react"
import { addArticleActionCreator, updateNewArticleTextActionCreator } from "../../Redux/store"
import Article from "./Article/Article"
import styles from "./Articles.css"


const Articles = (props) => {
    let articlesData = props.state.articlesData
    let mappedArticles = articlesData.map((article) => {
        return <Article header={article.header} body={article.body} date={article.date} />
    })


    let newArticleElement = React.createRef()

    function addArticle() {
        props.dispatch(addArticleActionCreator())
    }
    function onTextChange() {
        let newText = newArticleElement.current.value

        props.dispatch(updateNewArticleTextActionCreator(newText))
    }
    return ( 
        <div className="article_container">
            {mappedArticles}
            <div className="post_article_section">
                <textarea name="newArticle" id="newArticle" ref={newArticleElement} onChange={onTextChange} value={props.state.newArticleText}></textarea>
                <button className="post_article_button" onClick={addArticle}>Post</button>
            </div>
        </div>
     );
}
 
export default Articles;