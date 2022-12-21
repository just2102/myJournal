const ADD_ARTICLE = "ADD-ARTICLE"
const UPDATE_NEW_ARTICLE_TEXT = "UPDATE-NEW-ARTICLE-TEXT"

let store = {
    _state: {
        articlesPage: {
            articlesData:
            [
                {id:1,header:'First article...',body:'Some text in the body of this article...', date:'Today'},
                {id:2,header:'Second article!',body:'Some random text idk?', date:'Today'}
            ],
            newArticleText:'some new article text!'
        }

    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber=observer;
    },
    getState() {return this._state},
    
    _addArticle() {
        let newArticle = {id:3,header:'some header',body:this._state.articlesPage.newArticleText,date:'Today'}
        this._state.articlesPage.articlesData.push(newArticle)

        this._state.articlesPage.newArticleText=""
        this._callSubscriber()
    },
    _updateNewArticleText(newText) {
        this._state.articlesPage.newArticleText = newText

        this._callSubscriber()
    },
    dispatch(action) 
    {
        if (action.type===ADD_ARTICLE) {this._addArticle()}
        else if (action.type===UPDATE_NEW_ARTICLE_TEXT) {this._updateNewArticleText(action.newText)}
    }

}
export const addArticleActionCreator = () => {
    return {
        type:ADD_ARTICLE
    }
}
export const updateNewArticleTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_ARTICLE_TEXT,
        newText: newText
    }
}

window.store=store;

export default store