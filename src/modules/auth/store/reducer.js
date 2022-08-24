
const userData = localStorage.getItem('RBW5_user') ? JSON.parse(localStorage.getItem('RBW5_user')) : null;

export default (state = { user: userData }, action) => {
    switch(action.type) {
        case 'SETUSER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
} 