import {
    GET_COMMENTS, 
    ADD_COMMENT
  } from '../actions/commentActions'
  
  
  
  let initialState = [];
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMMENTS:
        return action.payload;
      case ADD_COMMENT:
          return [action.payload, ...state]
      default:
        return state
    }
  
  }
  
  export default commentReducer;