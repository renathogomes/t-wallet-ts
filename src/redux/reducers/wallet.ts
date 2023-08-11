// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { ADD_COINS, ADD_EXPENSE, ADD_ID, ADD_TOTAL, REMOVE_EXPENSE } from '../actions';
import { ExpenseTest } from '../../types';

const INITIAL_STATE = {
  total: 0,
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
    case ADD_ID:
      return {
        ...state,
        id: action.payload,
      };
    case ADD_TOTAL:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses
          .filter((expense: ExpenseTest) => expense.id !== action.payload),
      };

    default:
      return state;
  }
};
