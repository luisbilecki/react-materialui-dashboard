const clearAccessToken = () => {
  localStorage.removeItem('accessToken');
};

const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => (
  localStorage.getItem('accessToken')
);

export {
  clearAccessToken,
  setAccessToken,
  getAccessToken,
};
