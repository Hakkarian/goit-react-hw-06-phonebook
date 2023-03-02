import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContacts, fetchAllContacts, fetchdDeleteContact } from './taskoperations';

const initialState = {
  contacts: {
    items: [],
  error: null,
  loading: false
  },
  filter: ''

}

export const rootSlice = createSlice({
  name: 'root',
  initialState: initialState,
  reducers: {
    settedFilter(state, { payload }) {
      state.filter = payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => ({
        ...state,
        contacts: { ...state.contacts, loading: true },
      }))
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => ({
        ...state,
        contacts: { ...state.contacts, items: [...payload], loading: false },
      }))
      .addCase(fetchAllContacts.rejected, (state, { payload }) => ({
        ...state,
        contacts: {
          ...state.contacts,
          error: payload,
          loading: false,
        },
      }))
      .addCase(fetchAddContacts.pending, state => {
        state.contacts.loading = true;
      })
      .addCase(fetchAddContacts.fulfilled, (state, { payload }) => ({
        ...state,
        contacts: {...state.contacts, items: [...state.contacts.items, {...payload}], loading: false}
      }))
      .addCase(fetchAddContacts.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })
      .addCase(fetchdDeleteContact.pending, state => {
        state.contacts.loading = true;
      })
      .addCase(fetchdDeleteContact.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        const index = state.contacts.items.findIndex(
          item => item.id === payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(fetchdDeleteContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })

  },
});

export const {
  settedFilter
} = rootSlice.actions;

export default rootSlice.reducer;
