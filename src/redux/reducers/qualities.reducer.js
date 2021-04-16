import { SET_QUALITIES, TOGGLE_SELECTED_QUALITY } from '../actions/qualities.actions'
import {combineReducers} from 'redux'

const qualities = (state = [], action) => {
  switch (action.type) {
    case SET_QUALITIES:
      return action.payload;
    default:
      return state;
  }
};

const selectedQualities = (state = [], action) => {
  const id = action.payload
  switch (action.type) {
    case TOGGLE_SELECTED_QUALITY:
      let newState;
      state.includes(action.payload) ? 
        newState = state.filter((index) => index !== id) 
        : newState = [...state, id] 
        return newState;

    default:
      return state;
  }
}

// user will be on the redux state at:
// state.user
export default combineReducers({qualities, selectedQualities});