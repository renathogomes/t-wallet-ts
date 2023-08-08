import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type GeneralProps = {
  use: {
    email: string
    password: string
  }
  wallet: {
    currencies: []
    expenses: [{
      id: number,
      value: number,
      description: string,
      currency: string,
      method: string,
      tag: string,
      exchangeRates: {
        USD: {
          code: string,
          name: string,
          ask: string,
        } } }];
  } };

export type Dispatch = ThunkDispatch<GeneralProps, null, AnyAction>;
