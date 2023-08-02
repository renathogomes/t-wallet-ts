// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';

const INITIAL_STATE = {
  algumaCoisa: '',
};

export const reducerWallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'XABLAU':
      return 'oi';

    default:
      break;
  }
  return state;
};
