import React from "react"

import Article from "./Article/Article"
import UserSectionContainer from "./UserSection/UserSectionContainer"
import styles from "./Articles.css"


const Articles = (props) => {

    let articles = props.articles

    let mappedArticles = articles.map((article) => {
        return <Article header={article.header} body={article.body} date={article.date} likeCount={article.likeCount}/>
    })

    return (
        <div className="user_articles">
            <UserSectionContainer/>
            <div className="article_container">
                {mappedArticles}
            </div>
        </div>
     );
}
 
export default Articles;