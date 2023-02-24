import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";







export const rootSlice = createSlice({
    name: 'root',
    initialState: {
  contacts: [],
  filter: "",
},
    reducers: {
      addContact: (state, { payload }) => {
          return {
            ...state, contacts: [...state.contacts, {id: nanoid(), ...payload}]
          }
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