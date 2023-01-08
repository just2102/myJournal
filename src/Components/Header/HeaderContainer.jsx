import Header from "./Header";
import { connect } from "react-redux";
import { useEffect } from "react";


const HeaderAPIComponent = (props) => {
    useEffect(()=>{
        // if (!props.isAuthorized) {
        //  props.checkAuthorizedCookies()
        //  }
    })

    return ( 
        <Header isAuthorized={props.isAuthorized} currentUser={props.currentUser}></Header>
     );
}
 

function mapStateToProps (state) {
    return {
        isAuthorized: state.auth.isAuthorized,

        currentUser: state.auth.currentUser
    }
}

const HeaderContainer = connect(mapStateToProps, {

}) (HeaderAPIComponent) 

export default HeaderContainer