import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
