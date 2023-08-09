// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { ADD_COINS, ADD_EXPENSE, ADD_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_COINS:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ADD_TOTAL:
      return {
        ...state,
        value: Number(action.payload.value),
      };

    default:
      return state;
  }
};
