import { ActionTypes } from '../constants/ActionTypes';

export const setActivePage = (page) => {
    return {
        type: ActionTypes.SET_ACTIVE_PAGE,
        payload: page
    }
};

export const selectedPage = (page) => {
    return {
        type: ActionTypes.SELECTED_PAGE,
        payload: page
    }
}