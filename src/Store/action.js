const AuthActions = {
  ON_LOGIN: "ON_LOGIN",
  ON_LOGOUT: "ON_LOGOUT"
};

const onLogin = user => ({
  type: AuthActions.ON_LOGIN,
  payload: user
});

const onLogout = () => ({
  type: AuthActions.ON_LOGOUT,
  payload: null
});

export default {
  onLogin,
  onLogout,
  AuthActions
};
