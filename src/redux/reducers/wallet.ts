// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { ADD_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

export const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_COINS:
      return {
        ...state,
        currencies: action.payload,
      };

    default:
      return state;
  }
};
