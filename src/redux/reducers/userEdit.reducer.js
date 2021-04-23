const edit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_USER':
            return action.payload;
        case 'UPDATE_USER_FIELD':
            return { ...state, [action.payload.key]: action.payload.value }
        case 'TOGGLE_SELECTED_EDIT_QUALITY':
            const id = action.payload
            const qualities = state.qualities
            return {
                ...state,
                qualities:  qualities.includes(id) ? 
                 qualities.filter((index) => index !== id) 
                : [...qualities, id] 
            }
        case 'UNSET_EDIT_USER':
            return {};
        default:
            return state;
    }
};

export default edit;

