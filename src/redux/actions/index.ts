// Coloque aqui suas actions

export const USER_LOGIN = 'USER_LOGIN';

export const login = (email: string) => ({
  type: USER_LOGIN,
  payload: email,
});
