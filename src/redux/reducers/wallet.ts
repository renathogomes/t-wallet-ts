// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { CURRENCIES_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

export const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CURRENCIES_WALLET:
      return {
        ...state,
        payload: [action.USDT],
      };

    default:
      return state;
  }
};
