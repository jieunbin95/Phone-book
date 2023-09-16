let initialState = {
  contactList: [],
  keyword: "",
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({name:payload.name,
        phonenum:payload.phonenum,}); 
        break;
    case "SEARCH_BY_USERNAME":
      state.keyword=payload.keyword
      break;   
      
  }return { ...state };
};

export default reducer;
