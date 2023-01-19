import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Preloader from "../Common/Preloader";
import Articles from "./Articles";
import {
  getWriterArticles,
  getWriter,
  getAllArticles,
  postArticleRequest,
  deleteArticleRequest,
} from "../../Redux/articlesReducer";
import { Navigate, useParams } from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";

const ArticlesAPIComponent = (props) => {
  const params = useParams();
  useEffect(() => {
    props.getAllArticles();
    props.getWriter(params.writerId);
    props.getWriterArticles(params.writerId);
  }, [params.writerId, props.writerArticles.length]);
  if (!props.isAuthorized) {
    return <Navigate to="/login"></Navigate>;
  }
  const onPostArticleRequest = ({ newArticleHeader, newArticleBody }) => {
    // form an object containing data from 'post article' form in UserSection.jsx and send request to the server to post it
    // id of new article is determined by the length of the allArticles array
    let newArticle = {
      id: props.allArticles.length + 1,
      header: newArticleHeader,
      body: newArticleBody,
      date: "19.01.2023",
      likeCount: 0,
      authorId: props.currentUser.id,
    };
    props.postArticleRequest(newArticle);
  };
  const onDeleteArticleRequest = (id) => {
    props.deleteArticleRequest(id)
  }
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Articles
          currentUser={props.currentUser}
          writer={props.writer}
          isAuthorized={props.isAuthorized}
          writerArticles={props.writerArticles}
          onPostArticleRequest={onPostArticleRequest}
          onDeleteArticleRequest={onDeleteArticleRequest}
        ></Articles>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    allArticles: state.articlesPage.allArticles,
    writer: state.articlesPage.writer,
    writerArticles: state.articlesPage.writerArticles,
    isFetching: state.articlesPage.isFetching,

    currentUser: state.auth.currentUser,
    isAuthorized: state.auth.isAuthorized,
  };
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getWriter,
    getWriterArticles,
    getAllArticles,
    postArticleRequest,
    deleteArticleRequest,
  })
)(ArticlesAPIComponent);
