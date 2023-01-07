import just2102_avatar from "../img/just2102_avatar.png"
import { articlesAPI } from "../api/api"

const ADD_ARTICLE = "ADD_ARTICLE"
const UPDATE_NEW_ARTICLE_HEADER = "UPDATE_NEW_ARTICLE_HEADER"
const UPDATE_NEW_ARTICLE_BODY = "UPDATE_NEW-ARTICLE_BODY"

const SET_WRITER = "SET_WRITER"
const SET_WRITER_ARTICLES   =  "SET_WRITER_ARTICLES"
const GET_WRITER_ARTICLES = "GET_WRITER_ARTICLES"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


export const addArticleActionCreator = () => ({type:ADD_ARTICLE})
export const updateNewArticleBodyActionCreator = (newBody) => 
({type: UPDATE_NEW_ARTICLE_BODY, newBody: newBody})
export const updateNewArticleHeaderActionCreator = (newHeader) =>
({type: UPDATE_NEW_ARTICLE_HEADER, newHeader: newHeader})

const setWriter = (writer) => ({type: SET_WRITER, writer})
const setWriterArticles = (articles) => ({type:SET_WRITER_ARTICLES, articles})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export function getWriter (writerId) {
    return function (dispatch) {
        articlesAPI.getWriter(writerId).then(response=>{
            if (response.status === 200) {
                dispatch(setWriter(response.data))
            }
        })
    }
}
export function getWriterArticles (writerId) {
    return function (dispatch) {
        dispatch(toggleIsFetching(true))

        articlesAPI.getWriterArticles(writerId).then(response=>{
            if (response.status===200) {
                dispatch(setWriterArticles(response.data))
            } dispatch(toggleIsFetching(false))
        })
    }
}

let initialState = {
    articles:[],
    writer: null,
    newArticleHeader: '',
    newArticleBody:'',
    isFetching: false
}

function articlesReducer (state = initialState, action) {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_ARTICLE:
            if (state.newArticleText!=="" && state.newArticleHeader!=="") {
                let newArticle = 
                {
                    id:state.articlesData[state.articlesData.length-1].id + 1,
                    header:state.newArticleHeader,
                    body:state.newArticleBody,
                    date:'Today',
                    likeCount: 0
                }
                stateCopy.articlesData = [...state.articlesData]
                stateCopy.articlesData.push(newArticle)
                stateCopy.newArticleBody=""
                stateCopy.newArticleHeader=""
            }
            return stateCopy;
        case UPDATE_NEW_ARTICLE_BODY:
            stateCopy.newArticleBody=action.newBody
            return stateCopy;
        case UPDATE_NEW_ARTICLE_HEADER:
            stateCopy.newArticleHeader=action.newHeader
            return stateCopy;
        case SET_WRITER:
            return {
                ...state,
                writer: action.writer
            }
        case GET_WRITER_ARTICLES:
            return {
                ...state,
                articlesData: action.articles
            }
        case SET_WRITER_ARTICLES:
            return {
                ...state,
                articles: [...action.articles]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}



export default articlesReducer