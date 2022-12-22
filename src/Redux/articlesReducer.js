const ADD_ARTICLE = "ADD-ARTICLE"
const UPDATE_NEW_ARTICLE_HEADER = "UPDATE-NEW-ARTICLE-HEADER"
const UPDATE_NEW_ARTICLE_TEXT = "UPDATE-NEW-ARTICLE-TEXT"
export const addArticleActionCreator = () => ({type:ADD_ARTICLE})
export const updateNewArticleTextActionCreator = (newText) => 
({type: UPDATE_NEW_ARTICLE_TEXT, newText: newText})
export const updateNewArticleHeaderActionCreator = (newHeader) =>
({type: UPDATE_NEW_ARTICLE_HEADER, newHeader: newHeader})

function articlesReducer (state, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            if (state.newArticleText!=="" || state.newArticleHeader!=="") {
                let newArticle = 
                {
                    id:state.articlesData[state.articlesData.length-1].id + 1,
                    header:state.newArticleHeader,
                    body:state.newArticleText,
                    date:'Today',
                    likeCount: 0
                }
                state.articlesData.push(newArticle)
                state.newArticleText=""
                state.newArticleHeader=""
            }
            return state;
        case UPDATE_NEW_ARTICLE_TEXT:
            state.newArticleText=action.newText
            return state;
        case UPDATE_NEW_ARTICLE_HEADER:
            state.newArticleHeader=action.newHeader
            return state;
        default:
            console.log('action.type passed into articlesReducer is not defined; check your action creator!')
            return state;
    }
}



export default articlesReducer