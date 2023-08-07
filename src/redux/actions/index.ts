import { Dispatch } from '../../types';
import { url } from '../../url';

// Actions Types
export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES_WALLET = 'CURRENCIES_WALLET';
export const ADD_COINS = 'ADD_COINS';

// Actions Normais (Acrions Creators)
export const login = (email: string) => ({
  type: USER_LOGIN,
  payload: email,
});

export const setCoins = (payload: string[]) => ({
  type: ADD_COINS,
  payload,
});

export const currentCode = () => ({
  type: CURRENCIES_WALLET,
});

// Actions Thunks
export const currencieWallet = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(url);
    const data = await response.json();

    delete data.USDT;
    console.log(data);
    dispatch(setCoins(data));
  };
};
