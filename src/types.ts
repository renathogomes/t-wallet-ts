import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ExpenseType = {
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type NewExpense = ExpenseType & {
  exchangeRates: {
    [key: string]: {
      ask: string,
      name: string,
    } }
};

export type Expense = NewExpense & {
  id: number,
};

export type ExpenseTest = ExpenseType & {
  id: number,
};

export type UserType = {
  email: string
};

export type WalletProps = {
  currencies: string[]
  expenses: Expense[],
};

export type StateProps = {
  user: UserType,
  wallet: WalletProps,
};

export type Dispatch = ThunkDispatch<StateProps, null, AnyAction>;
