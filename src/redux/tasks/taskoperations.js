import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from 'shared/contacts';

// import {
//   fetchAddActContactsError,
//   fetchAddActContactsLoading,
//   fetchAddActContactsSuccess,
//   fetchAllActContactsError,
//   fetchAllActContactsLoading,
//   fetchAllActContactsSuccess,
// } from './cont-slice';

export const fetchAllContacts = createAsyncThunk("contacts/fetch", async (_, { rejectWithValue }) => {
  try {
    const data = await getAllContacts();
    return data;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
})
export const fetchAddContacts = createAsyncThunk("contacts/add", async (data, {rejectWithValue}) => {
  try {
    const result = await addContact(data);
    return result;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
}, {
  condition: ({ name, phone }, {getState}) => {
    const { contacts } = getState();
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();
    const result = contacts.items.find(({ name, phone }) => name.toLowerCase() === normalizedName || phone.toLowerCase() === normalizedPhone);
    if (result) {
      alert(`${name} or ${phone} already exist`)
      return false
    }
  }
} )

export const fetchdDeleteContact = createAsyncThunk("contacts/delete", async (id, { rejectWithValue }) => {
  try {
    const result = await deleteContact(id);
    return result;
  } catch ({ response }) {
    rejectWithValue(response.data.message);
  }
}) 
