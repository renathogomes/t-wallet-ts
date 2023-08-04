import { Dispatch } from '../../types';
import { url } from '../../url';

// Actions Types
export const USER_LOGIN = 'USER_LOGIN';
export const CURRENCIES_WALLET = 'CURRENCIES_WALLET';

// Actions
export const login = (email: string) => ({
  type: USER_LOGIN,
  payload: email,
});

export const currentCode = () => ({
  type: CURRENCIES_WALLET,
});

// Actions Thunks
export const currencieWallet = () => {
  return async (dispatch: Dispatch) => {
    // dispatch(currencieWallet());
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.USDT);
  };
};
