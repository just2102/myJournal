import { connect } from "react-redux"
import { addArticleActionCreator, updateNewArticleBodyActionCreator, updateNewArticleHeaderActionCreator, updateNewArticleTextActionCreator } 
from "../../../Redux/articlesReducer"
import UserSection from "./UserSection"

function mapStateToProps (state) {
    return {
        currentUser: state.articlesPage.currentUser,
        newArticleHeader: state.articlesPage.newArticleHeader,
        newArticleBody: state.articlesPage.newArticleBody
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addArticle: () => {dispatch(addArticleActionCreator())},
        onNewArticleBodyChange: (newBody) => {dispatch(updateNewArticleBodyActionCreator(newBody))},
        onNewArticleHeaderChange: (newHeader) => {dispatch(updateNewArticleHeaderActionCreator(newHeader))}
    }
}

const UserSectionContainer = connect(mapStateToProps, mapDispatchToProps) (UserSection)

 
export default UserSectionContainer;