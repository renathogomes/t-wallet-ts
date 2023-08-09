import { fetchApi } from '../../services/fetchApi';
import { Dispatch, ExpenseType, NewExpense } from '../../types';

// Actions Types
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_COINS = 'ADD_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_TOTAL = 'ADD_TOTAL';

// Actions Normais (Acrions Creators)
export const login = (email: string) => ({
  type: USER_LOGIN,
  payload: email,
});

export const setCoins = (payload: string[]) => ({
  type: ADD_COINS,
  payload,
});

export const setExpense = (payload: NewExpense) => ({
  type: ADD_EXPENSE,
  payload,
});

export const setTotal = (value: string) => ({
  type: ADD_TOTAL,
  value,
});

export const addExpense = (expense: ExpenseType) => {
  return async (dispatch: Dispatch) => {
    const coins = await fetchApi();

    dispatch(setExpense({ ...expense, exchangeRates: coins }));
  };
};

// Actions Thunks
export const currencieWallet = () => {
  return async (dispatch: Dispatch) => {
    const data = await fetchApi();
    const coins = Object.keys(data);

    dispatch(setCoins(coins));
  };
};
