import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  userContacts: [
    { id: nanoid(2), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(2), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(2), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(2), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // console.log(state.userContacts);
        if (
          state.userContacts.some(
            el => el.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert('this contact are alredy in your phonebook');
        }
        state.userContacts.push(action.payload);
      },
      prepare(contactData) {
        const { name, number } = contactData;
        return {
          payload: {
            id: nanoid(3),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.userContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.userContacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts;
