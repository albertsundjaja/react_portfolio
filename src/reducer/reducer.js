const initialState = {
    guideFlag:true
}

const reducer = (state=initialState, action) => {
    if (action.type === 'TOGGLE_GUIDE') {
        return {
            ...state,
            guideFlag: !state.guideFlag
        }
    }
    return state;
}

export default reducer;