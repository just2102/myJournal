import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuthorized = useSelector(state=> state.auth.isAuthorized)
        if (!isAuthorized) {
            return <Navigate to="/login"/>
        } else {
            return <Component {...props} />;
        }
    }
    return RedirectComponent
}


export default withAuthRedirect