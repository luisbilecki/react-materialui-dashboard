const actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  login: uid => ({
    type: actions.LOGIN,
    uid,
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
};

export default actions;
