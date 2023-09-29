import { combineReducers } from "redux";

import {
    districtsReducer,
    p2hReducer,
    providersReducer,
    streetsReducer,
} from './reducers'

export const rootReducer = combineReducers({
    streets: streetsReducer,
    p2h: p2hReducer,
    districts: districtsReducer,
    providers: providersReducer
});