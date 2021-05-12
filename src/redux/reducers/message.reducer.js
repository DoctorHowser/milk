import { actionChannel } from "@redux-saga/core/effects";

const messages = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGE':

            return [...state, action.payload];
        case 'DISPLAYED_MESSAGE':
            return [ ...state.slice(1) ];
        case 'CLEAR_MESSAGES':
            return []
        default:
            return state;
    }
}

export default messages