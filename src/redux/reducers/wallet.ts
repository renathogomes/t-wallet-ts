// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { ADD_COINS, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  count: 0,
  totalValue: 0,
  currencies: [],
  expenses: {
    value: '',
    describe: '',
    coins: '',
    method: '',
    category: '',
  },
};

export const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_COINS:
      return {
        ...state,
        currencies: Object.keys(action.payload),
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: action.expenses,
        count: state.count + 1,
        totalValue: Number(state.totalValue) + Number(action.expenses.value),
      };

    default:
      return state;
  }
};
