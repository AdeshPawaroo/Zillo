import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, } from '../actions/session_actions';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState 
    }
}

export default sessionReducer;