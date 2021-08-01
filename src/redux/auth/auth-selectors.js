const getIsAuth = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuth,
  getUserName,
};
