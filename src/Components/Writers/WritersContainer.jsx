import { connect } from "react-redux";
import Writers from "./Writers";
import { followCreator, setWritersCreator, unfollowCreator } from "../../Redux/writersReducer";

function mapStateToProps (state) {
    return {
        writersData: state.writersPage.writersData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onSetWriters: (writers) => dispatch(setWritersCreator(writers)),
        onFollow: (writerId) => dispatch(followCreator(writerId)),
        onUnfollow: (writerId) => dispatch(unfollowCreator(writerId))
    }
}

const WritersContainer = connect(mapStateToProps, mapDispatchToProps) (Writers)
 
export default WritersContainer;