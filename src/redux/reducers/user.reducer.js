import { combineReducers } from "redux";

const userData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

const edit = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_USER':
      return action.payload;
    case 'UPDATE_USER_FIELD':
      return {...state, [action.payload.key]: action.payload.value}
    case 'UNSET_EDIT_USER':
      return {};
    default:
      return state;
  }
};

const loading =  (state = true, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return true;
    case 'SET_USER':
      return false;
    default:
      return state;
  }
}

// user will be on the redux state at:
// state.user
export default combineReducers({loading, userData, edit});
