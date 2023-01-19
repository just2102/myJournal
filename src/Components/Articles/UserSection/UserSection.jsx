import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useState } from "react";

const UserSection = ({writer, isAuthorized, currentUser, onPostArticleRequest}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    // if new article has both header and body, form a new object in ArticlesContainer and post it 
    // (articles container has access to all articles)
    if (data.newArticleHeader!=="" && data.newArticleBody!=="") {
      onPostArticleRequest(data)
    }
  }
    let params = useParams()
    return (
        <>
          {writer && (
            <div className="user_section">
              <div className="user_avatar">
                <img src={writer.avatar} alt="" />
              </div>
              <div className="user_username">{writer.name}</div>
              {writer.id === currentUser.id && (
                <div className="post_article_section">
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="newArticle_header">Your new article is called</label>
                  <input
                    {...register('newArticleHeader')}
                    type="text"
                    id="newArticle_header"
                    placeholder="..."
                  />
                  <textarea
                    {...register('newArticleBody')}
                    id="newArticle_body"
                    placeholder="In the beginning there was word..."
                  ></textarea>
                  <input type='submit' value='Post' className="post_article_button" />
                  </form>
                </div>
              )}
            </div>
          )}
        </>
      );
}
 
export default UserSection;