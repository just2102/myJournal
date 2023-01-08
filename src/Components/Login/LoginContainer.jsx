import { connect } from "react-redux";
import {
  updatePasswordInput,
  updateUsernameInput,
  requestAuth
} from "../../Redux/authReducer";
import Login from "./Login";

const LoginAPIComponent = (props) => {
  function onFormSubmit (username,password) {
    props.requestAuth(username,password)
  }
  function onUsernameInputUpdate (input) {
    props.updateUsernameInput(input);
  }
  function onPasswordInputUpdate (input) {
    props.updatePasswordInput(input);
  }
  return (
    <Login
      isAuthorized={props.isAuthorized}
      currentWriter={props.currentWriter}

      usernameInput={props.usernameInput}
      passwordInput={props.passwordInput}
      onUsernameInputUpdate={onUsernameInputUpdate}
      onPasswordInputUpdate={onPasswordInputUpdate}
      onFormSubmit={onFormSubmit}
    ></Login>
  );
};

function mapStateToProps(state) {
  return {
    usernameInput: state.auth.usernameInput,
    passwordInput: state.auth.passwordInput,
    isAuthorized: state.auth.isAuthorized,
    currentWriter: state.auth.currentWriter
  };
}

const LoginContainer = connect(mapStateToProps, {
  updateUsernameInput,
  updatePasswordInput,

  requestAuth
})(LoginAPIComponent);

export default LoginContainer;
