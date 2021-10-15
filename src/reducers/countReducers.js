import {
    GET_TACO_COUNTS, UPDATE_COUNTS
  } from '../actions/countActions'
  
  
  
  let initialState = {}

  
  const countReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TACO_COUNTS:
        let teamCounts = {};
        if (action.payload.length === 0) {
          teamCounts.teamACT = 0;
          teamCounts.teamHHS = 0;
          teamCounts.teamTLC = 0;
          teamCounts.teamRR = 0;
        } 
        action.payload.forEach(element => {
            teamCounts[element.team] = element.tacoCount;
        });
        return teamCounts;
      case UPDATE_COUNTS:
          return {...state, [action.payload.team] : state[action.payload.team] + 1}
      default:
        return state
    }
  
  }
  
  export default countReducer;