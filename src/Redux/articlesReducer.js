import just2102_avatar from "../img/just2102_avatar.png"

const ADD_ARTICLE = "ADD_ARTICLE"
const UPDATE_NEW_ARTICLE_HEADER = "UPDATE_NEW_ARTICLE_HEADER"
const UPDATE_NEW_ARTICLE_BODY = "UPDATE_NEW-ARTICLE_BODY"
const GET_WRITER_ARTICLES = "GET_WRITER_ARTICLES"

export const addArticleActionCreator = () => ({type:ADD_ARTICLE})
export const updateNewArticleBodyActionCreator = (newBody) => 
({type: UPDATE_NEW_ARTICLE_BODY, newBody: newBody})
export const updateNewArticleHeaderActionCreator = (newHeader) =>
({type: UPDATE_NEW_ARTICLE_HEADER, newHeader: newHeader})

let initialState = {
    articles:[],
    newArticleHeader: '',
    newArticleBody:'',
    currentUser: {id:1,username:'just2102',avatar: just2102_avatar}
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
        case GET_WRITER_ARTICLES:
            return {
                ...state,
                articlesData: action.articles
            }
        default:
            return state;
    }
}



export default articlesReducer