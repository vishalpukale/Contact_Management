// action.js
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

// Action creator for adding a contact
export const addContact = (payload) => {
  console.log(payload)
  return {
    type: ADD_CONTACT,
    payload,
  };
};

// Action creator for removing a contact
export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

// Action creator for editing a contact
export const editContact = (payload) => {
  console.log(payload)
  return {
    type: EDIT_CONTACT,
    payload,
  };
};
