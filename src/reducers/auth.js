export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        accessToken: action.accessToken,
      };
    case 'LOGIN_ERROR':
      return {
        loginError: action.error,
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
