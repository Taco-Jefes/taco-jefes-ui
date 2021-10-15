import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import  countReducer from './reducers/countReducers'
import logger from 'redux-logger'
import commentReducer from './reducers/commentReducers'
// import jackpotReducer from './reducers/jackpotReducer'

const rootReducer = combineReducers({
  count: countReducer,
  comments : commentReducer
//   admin : adminReducer
  // jackpot : jackpotReducer
})

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))