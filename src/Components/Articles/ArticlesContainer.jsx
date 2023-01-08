import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Preloader from "../Common/Preloader";
import Articles from "./Articles";
import { getWriterArticles, getWriter } from "../../Redux/articlesReducer";
import { Navigate, useParams } from "react-router-dom";

const ArticlesAPIComponent = (props) => {
  const params = useParams();
  useEffect(() => {
    props.getWriter(params.writerId);
    props.getWriterArticles(params.writerId);
  }, [params.writerId]);
  if (!props.isAuthorized) {
    return <Navigate to="/login"></Navigate>;
  }
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Articles
          currentWriter={props.currentWriter}
          isAuthorized={props.isAuthorized}
          articles={props.articles}
        ></Articles>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    articles: state.articlesPage.articles,
    isFetching: state.articlesPage.isFetching,

    currentWriter: state.auth.currentWriter,
    isAuthorized: state.auth.isAuthorized,
  };
}

const ArticlesContainer = connect(mapStateToProps, {
  getWriter,
  getWriterArticles,
})(ArticlesAPIComponent);

export default ArticlesContainer;
