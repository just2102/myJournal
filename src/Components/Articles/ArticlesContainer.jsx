import { connect } from "react-redux";
import Articles from "./Articles"

function mapStateToProps (state) {
    return {
        articlesData: state.articlesPage.articlesData
    }
}
function mapDispatchToProps (dispatch) {
    return {
        //nothing yet
    }
}

const ArticlesContainer = connect(mapStateToProps, null) (Articles)

export default ArticlesContainer;