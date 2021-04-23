import contactsReducer from './contacts/contact-reducer';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
