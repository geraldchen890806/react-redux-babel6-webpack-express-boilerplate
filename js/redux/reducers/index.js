

import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';

import homeIndex from './home/index';

export default combineReducers({
    homeIndex,
    routing: routerReducer
});
