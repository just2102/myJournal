import { connect } from "react-redux";
import {
  updateUsernameInput,
  updatePasswordInput,
  updateEmailInput,
  requestRegister,
  requestAuth
} from "../../Redux/authReducer";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginAPIComponent = (props) => {
  function onRegistrationFormSubmit(username, email, password) {
    props.requestRegister(username, email, password);
  }
  function onLoginFormSubmit(email, password) {
    props.requestAuth(email, password);
  }
  function onUsernameInputUpdate(input) {
    props.updateUsernameInput(input);
  }
  function onEmailInputUpdate(input) {
    props.updateEmailInput(input);
  }
  function onPasswordInputUpdate(input) {
    props.updatePasswordInput(input);
  }
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  function handleRegisterClick() {
    setShowRegister(true);
    setActiveButton("register")
    setShowLogin(false);
  }
  function handleLoginClick() {
    setShowLogin(true);
    setActiveButton("login")
    setShowRegister(false);
  }
  if (props.isAuthorized) {
    return <Navigate to={`/articles/${props.currentUser.id}`} />
  }
  return (
    <div className="login_container">
      <button onClick={handleRegisterClick} className={activeButton==="register" ? 'active_button' : "inactive_button"}>Register</button>
      <button onClick={handleLoginClick}className={activeButton==="login" ? 'active_button' : "inactive_button"}>Login</button>

      {showRegister && (
        <Register
          isAuthorized={props.isAuthorized}
          currentUser={props.currentUser}
          usernameInput={props.usernameInput}
          emailInput={props.emailInput}
          passwordInput={props.passwordInput}
          onUsernameInputUpdate={onUsernameInputUpdate}
          onEmailInputUpdate={onEmailInputUpdate}
          onPasswordInputUpdate={onPasswordInputUpdate}
          onRegistrationFormSubmit={onRegistrationFormSubmit}
        />
      )}
      {showLogin && (
        <Login
          isAuthorized={props.isAuthorized}
          currentUser={props.currentUser}
          usernameInput={props.usernameInput}
          emailInput={props.emailInput}
          passwordInput={props.passwordInput}
          onUsernameInputUpdate={onUsernameInputUpdate}
          onEmailInputUpdate={onEmailInputUpdate}
          onPasswordInputUpdate={onPasswordInputUpdate}
          onLoginFormSubmit={onLoginFormSubmit}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    usernameInput: state.auth.usernameInput,
    emailInput: state.auth.emailInput,
    passwordInput: state.auth.passwordInput,
    isAuthorized: state.auth.isAuthorized,
    currentUser: state.auth.currentUser,
  };
}

const LoginContainer = connect(mapStateToProps, {
  updateUsernameInput,
  updateEmailInput,
  updatePasswordInput,

  requestRegister,
  requestAuth
})(LoginAPIComponent);

export default LoginContainer;
