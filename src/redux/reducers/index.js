import { combineReducers } from 'redux';
import { headerReducer } from './headerReducer';

const reducers = combineReducers({
    pageSelection: headerReducer,
});

export default reducers
