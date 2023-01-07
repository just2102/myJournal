import { connect } from "react-redux"
import { addArticleActionCreator, updateNewArticleBodyActionCreator, updateNewArticleHeaderActionCreator, } 
from "../../../Redux/articlesReducer"
import UserSection from "./UserSection"

function mapStateToProps (state) {
    return {
        writer: state.articlesPage.writer,
        newArticleHeader: state.articlesPage.newArticleHeader,
        newArticleBody: state.articlesPage.newArticleBody,

        isAuthorized: state.auth.isAuthorized,
        currentWriter: state.auth.currentWriter
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