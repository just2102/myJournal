import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Preloader from "../Common/Preloader";
import Articles from "./Articles";
import { getWriterArticles, getWriter } from "../../Redux/articlesReducer";
import { Navigate, useParams } from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";

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
          currentUser={props.currentUser}
          isAuthorized={props.isAuthorized}
          articles={props.articles}
        ></Articles>
      )}
    </>
  );
};

const AuthRedirectComponent = withAuthRedirect(ArticlesAPIComponent)

function mapStateToProps(state) {
  return {
    articles: state.articlesPage.articles,
    isFetching: state.articlesPage.isFetching,

    currentUser: state.auth.currentUser,
    isAuthorized: state.auth.isAuthorized,
  };
}

const ArticlesContainer = connect(mapStateToProps, {
  getWriter,
  getWriterArticles,
})(AuthRedirectComponent);

export default ArticlesContainer;
