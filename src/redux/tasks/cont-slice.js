import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  contacts: [],
  filter: "",
};

export const rootSlice = createSlice({
    name: 'state',
    initialState: initialState,
    reducers: {
        addContact: (state, { payload }) => {
                return { ...state, contacts: [...state.contacts, payload] };
            },
        deleteContact: (state, { payload }) => {
            return {...state, contacts: state.contacts.filter(({ id }) => id !== payload)}
},
      settedFilter: (state, { payload }) => {
        return {...state, filter: payload}
    } 
  },
});


export default rootSlice.reducer;