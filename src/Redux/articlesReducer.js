import just2102_avatar from "../img/just2102_avatar.png"

const ADD_ARTICLE = "ADD-ARTICLE"
const UPDATE_NEW_ARTICLE_HEADER = "UPDATE-NEW-ARTICLE-HEADER"
const UPDATE_NEW_ARTICLE_BODY = "UPDATE-NEW-ARTICLE-BODY"
export const addArticleActionCreator = () => ({type:ADD_ARTICLE})
export const updateNewArticleBodyActionCreator = (newBody) => 
({type: UPDATE_NEW_ARTICLE_BODY, newBody: newBody})
export const updateNewArticleHeaderActionCreator = (newHeader) =>
({type: UPDATE_NEW_ARTICLE_HEADER, newHeader: newHeader})

let initialState = {
    articlesData:
        [
            {id:1,header:'First article...',body:'Some text in the body of this article...', date:'Today', likeCount: 0},
            {id:2,header:'Second article!',body:'Some random text idk?', date:'Today', likeCount: 0}
    ],
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
        default:
            return state;
    }
}



export default articlesReducer