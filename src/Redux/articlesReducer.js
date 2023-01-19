import just2102_avatar from "../img/just2102_avatar.png";
import { articlesAPI } from "../api/api";

const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS"
const POST_ARTICLE_SUCCESS = "POST_ARTICLE_SUCCESS";

const SET_WRITER = "SET_WRITER";
const SET_ALL_ARTICLES = "SET_ALL_ARTICLES"
const SET_WRITER_ARTICLES = "SET_WRITER_ARTICLES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";




const setWriter = (writer) => ({ type: SET_WRITER, writer });
const setWriterArticles = (articles) => ({
  type: SET_WRITER_ARTICLES,
  articles,
});
const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export function getWriter(writerId) {
  return function (dispatch) {
    articlesAPI.getWriter(writerId).then((response) => {
      if (response.status === 200) {
        dispatch(setWriter(response.data));
      }
    });
  };
}
export function getWriterArticles(writerId) {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));

    articlesAPI.getWriterArticles(writerId).then((response) => {
      if (response.status === 200) {
        dispatch(setWriterArticles(response.data));
      }
      dispatch(toggleIsFetching(false));
    });
  };
}
const setAllArticles = (allArticles) => {return {type: SET_ALL_ARTICLES, allArticles}} 
export const getAllArticles = () => {
    return (dispatch) => {
        articlesAPI.getAllArticles().then(response=>{
            if (response.status===200) {
                dispatch(setAllArticles(response.data)) 
            }
        })
    }
}

const postArticleSuccess = (article) => ({ type: POST_ARTICLE_SUCCESS, article });
export const postArticleRequest = (newArticle) => {
    return (dispatch) => {
        articlesAPI.postArticle(newArticle).then(response=>{
            if (response.status===201) {
                dispatch(postArticleSuccess(response.data))  
            }
        })
    }
}

 const deleteArticleSuccess = (id) => ({type: DELETE_ARTICLE_SUCCESS, id})
export const deleteArticleRequest = (id) => {
    return (dispatch) => {
        articlesAPI.deleteArticle(id).then(response=>{
            if (response.status===200) {
                 dispatch(deleteArticleSuccess(id))
            }
        })
    }
}

let initialState = {
  writerArticles: [],
  allArticles: [],
  writer: null,
  isFetching: false,
};

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ARTICLE_SUCCESS:
        return {
            ...state,
            writerArticles: [...state.writerArticles, action.article],
            allArticles: [...state.allArticles, action.article]
        }
    case DELETE_ARTICLE_SUCCESS:
        let newWriterArticles = [...state.writerArticles].filter(article=>article.id!==action.id)
        let newAllArticles = [...state.allArticles].filter(article=> article.id!==action.id)
        return {
            ...state,
            writerArticles: newWriterArticles,
            allArticles: newAllArticles
        }
    case SET_WRITER:
      return {
        ...state,
        writer: action.writer,
      };
    case SET_WRITER_ARTICLES:
      return {
        ...state,
        writerArticles: [...action.articles],
      };
    case SET_ALL_ARTICLES: {
        return {
            ...state,
            allArticles: action.allArticles
        }
    }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}

export default articlesReducer;
