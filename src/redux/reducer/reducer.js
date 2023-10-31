import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  contactList: [],
  keyword: "",
};

const book=createSlice({
  name:'phone-book',
  initialState,
  reducers:{
    ADD_CONTACT(state,action){
      state.contactList=action.payload
    },

    SEARCH_BY_USERNAME(state,action){
      state.keyword=action.payload
    }
  }
})

export const phone=book.actions
export default book.reducer;
