import { ActionTypes } from "../constants/actionsTypes";

export const initialState = {
    selectedPage: "home"
}

export const headerReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_ACTIVE_PAGE:
            return {...state, ...payload};
        default:
            return state;
    }
}