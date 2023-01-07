import Header from "./Header";
import { connect } from "react-redux";


const HeaderAPIComponent = () => {
    return ( 
        <Header ></Header>
     );
}
 
export default HeaderAPIComponent;

function mapStateToProps (state) {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

const HeaderContainer = connect(mapStateToProps, {

}) (HeaderAPIComponent) 