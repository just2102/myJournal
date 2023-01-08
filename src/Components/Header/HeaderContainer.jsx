import Header from "./Header";
import { connect } from "react-redux";


const HeaderAPIComponent = (props) => {
    return ( 
        <Header isAuthorized={props.isAuthorized} currentWriter={props.currentWriter}></Header>
     );
}
 

function mapStateToProps (state) {
    return {
        isAuthorized: state.auth.isAuthorized,

        currentWriter: state.auth.currentWriter
    }
}

const HeaderContainer = connect(mapStateToProps, {

}) (HeaderAPIComponent) 

export default HeaderContainer