import authActions from '../actions/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        uid: action.uid,
      };
    case authActions.LOGOUT:
      return {};
    default:
      return state;
  }
};
