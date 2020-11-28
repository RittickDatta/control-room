import { combineReducers } from 'redux';

import taskReducer from './task';
import personReducer from './person';
import meetingReducer from './meeting';

const rootReducer = combineReducers({
    tasks: taskReducer,
    persons: personReducer,
    meetings: meetingReducer
})

export default rootReducer;