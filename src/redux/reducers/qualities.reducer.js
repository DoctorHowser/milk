import { SET_QUALITIES, TOGGLE_SELECTED_QUALITY_ON, TOGGLE_SELECTED_QUALITY_OFF } from '../actions/qualities.actions'
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
    case TOGGLE_SELECTED_QUALITY_ON:
      return [...state, id]
    case TOGGLE_SELECTED_QUALITY_OFF:
      return state.filter((index) => index !== id)
    default:
      return state;
  }
}

// user will be on the redux state at:
// state.user
export default combineReducers({qualities, selectedQualities});