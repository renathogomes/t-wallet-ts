import { fetchApi } from '../../services/fetchApi';
import { Dispatch, ExpenseType, NewExpense } from '../../types';

// Actions Types
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_COINS = 'ADD_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_ID = 'ADD_ID';
export const ADD_TOTAL = 'ADD_TOTAL';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

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

export const setId = (countID: number) => ({
  type: ADD_ID,
  id: countID,
});

export const setAsk = (payload: number) => ({
  type: ADD_TOTAL,
  payload,
});

export const removeExpense = (id: number) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const addExpense = (expense: ExpenseType) => {
  return async (dispatch: Dispatch) => {
    const coins = await fetchApi();
    const numberValue = parseFloat(expense.value);
    const askValue = coins[expense.currency].ask;
    const calcValue = numberValue * askValue;
    const pronto = String(calcValue);
    const asda = parseFloat(pronto).toFixed(2);
    const num = parseFloat(asda);

    dispatch(setAsk(num));
    dispatch(setExpense({
      ...expense,
      exchangeRates: coins,
    }));
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
