import { combineReducers } from 'redux';
import ActiveBookReducer from './reducer1'

const rootReducer = combineReducers({
    activeBook: ActiveBookReducer
})

export default rootReducer