const Register = (props) => {
  return (
    <div className="login_wrapper">
      <form>
        Register
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={props.usernameInput}
          onChange={(e) => {
            props.onUsernameInputUpdate(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={props.emailInput}
          onChange={(e) => {
            props.onEmailInputUpdate(e.target.value);
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
        <button
          type="button"
          onClick={() => {
            props.onRegistrationFormSubmit(
              props.usernameInput,
              props.emailInput,
              props.passwordInput
            );
          }}
        >
          Register
        </button>
        <span>
          Test credentials: <p>test</p>
          <p>test@myjournal.com</p>
          <p>test</p>
        </span>
      </form>
    </div>
  );
};

export default Register;
