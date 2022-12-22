import articlesReducer from "./articlesReducer";
import just2102_avatar from "../img/just2102_avatar.png"

let store = {
    _state: {
        articlesPage: {
            articlesData:
            [
                {id:1,header:'First article...',body:'Some text in the body of this article...', date:'Today', likeCount: 0},
                {id:2,header:'Second article!',body:'Some random text idk?', date:'Today', likeCount: 0}
            ],
            newArticleHeader: '',
            newArticleText:''
        },
        writersPage: {
            writersData:
            [
                {id:1,username:'just2102',avatar: just2102_avatar}
            ]
        }
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber=observer;
    },
    getState() {return this._state},
    dispatch(action) {
        this._state.articlesPage = articlesReducer(this._state.articlesPage, action)
        this._callSubscriber();
    }

}


window.store=store;

export default store