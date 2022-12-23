import React from "react"

import Article from "./Article/Article"
import UserSection from "./UserSection/UserSection"
import styles from "./Articles.css"


const Articles = (props) => {

    let articlesData = props.state.articlesData

    let mappedArticles = articlesData.map((article) => {
        return <Article header={article.header} body={article.body} date={article.date} likeCount={article.likeCount}/>
    })

    return (
        <div className="user_articles">
            <UserSection dispatch={props.dispatch} state={props.state}/>
            <div className="article_container">
                {mappedArticles}
            </div>
        </div>
     );
}
 
export default Articles;