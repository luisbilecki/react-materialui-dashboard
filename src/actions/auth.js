export const login = userInfo => ({
  type: 'LOGIN_REQUEST',
  payload: { userInfo },
});

export const logout = () => ({
  type: 'LOGOUT',
});
