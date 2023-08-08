import { Dispatch } from '../../types';
import { url } from '../../url';

// Actions Types
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_COINS = 'ADD_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';

// Actions Normais (Acrions Creators)
export const login = (email: string) => ({
  type: USER_LOGIN,
  payload: email,
});

export const setCoins = (payload: string[]) => ({
  type: ADD_COINS,
  payload,
});

export const setExpense = (payload: any) => ({
  type: ADD_EXPENSE,
  expenses: {
    value: payload.expenses.value,
    describe: payload.expenses.describe,
    coins: payload.expenses.coins,
    method: payload.expenses.method,
    category: payload.expenses.category,
  },
});

export const addExpense = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    dispatch(setExpense(data));
  };
};

// Actions Thunks
export const currencieWallet = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(url);
    const data = await response.json();

    delete data.USDT;
    dispatch(setCoins(data));
  };
};
