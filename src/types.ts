import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type GeneralProps = {
  use: {
    email: string
    password: string
  }
  wallet: {
    currencies: []
  }
};

export type Dispatch = ThunkDispatch<GeneralProps, null, AnyAction>;
