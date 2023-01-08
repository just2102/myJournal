import { Navigate } from "react-router-dom";

const Login = (props) => {
  if (props.isAuthorized) {
    return <Navigate to={`/articles/${props.currentWriter.id}`} />
  }
  return (
    <div className="login_wrapper">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={props.usernameInput}
          onChange={(e) => {
            props.onUsernameInputUpdate(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={props.passwordInput}
          onChange={(e) => {
            props.onPasswordInputUpdate(e.target.value);
          }}
        />
        <button type="button" onClick={()=> {props.onFormSubmit(props.usernameInput,props.passwordInput)}}>Login</button>
        <span>Test credentials: just2102 ; bestPassw0rd</span>
      </form>
    </div>
  );
};

export default Login;
