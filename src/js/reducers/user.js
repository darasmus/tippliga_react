export default (state = { loggedIn: false, data: {} }, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loggedIn: true
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                loggedIn: false
            };
        case 'SET_DATA':
            return {
                ...state,
                data: action.data,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
};
