import { Navigate } from "react-router-dom";



const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuthorized) {
            return <Navigate to="/login"/>
        } else {
            return <Component {...props} />;
        }
    }
    return RedirectComponent
}

export default withAuthRedirect