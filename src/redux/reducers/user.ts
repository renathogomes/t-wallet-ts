import { AnyAction } from 'redux';
import { USER_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

export const reducerUser = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        email: action.email,
      };

    default:
      return state;
  }
};
