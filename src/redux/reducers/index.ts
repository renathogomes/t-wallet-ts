// import user from './user';
// import wallet from './wallet';

import { combineReducers } from 'redux';
import { reducerUser } from './user';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

export const rootReducer = combineReducers({
  reducerUser,
}); // delete essa linha e configure os seus reducers
