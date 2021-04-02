import {SET_QUALITIES} from '../actions/qualities.actions'

const qualities = (state = [], action) => {
    switch (action.type) {
      case SET_QUALITIES:
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default qualities;