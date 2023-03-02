import { combineReducers } from 'redux';
import currentUser from './reducer1'

const rootReducer = combineReducers({
    user: currentUser
})

export default rootReducer