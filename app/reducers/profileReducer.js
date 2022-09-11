import * as actionTypes from "../constants/types.js";

const initialState = {
  
}

export default function reducer(state = initialState , action){
  switch(action.type)
  {
    case actionTypes.SIGN_IN:
    return state;
    case actionTypes.SIGN_UP:
      return state;
    default:
      return state;
  }
}