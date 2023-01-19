import React from "react";

import Article from "./Article/Article";
// import UserSectionContainer from "./UserSection/UserSectionContainer"
import styles from "./Articles.css";
import UserSection from "./UserSection/UserSection";

const Articles = (props) => {
  let articles = props.writerArticles;

  let mappedArticles = articles.map((article) => {
    return (
      <Article
        key={article.id}
        id={article.id}
        header={article.header}
        body={article.body}
        date={article.date}
        likeCount={article.likeCount}
        onDeleteArticleRequest={props.onDeleteArticleRequest}
      />
    );
  });

  return (
    <div className="user_articles">
      <UserSection {...props} />
      <div className="article_container">{mappedArticles}</div>
    </div>
  );
};

export default Articles;
