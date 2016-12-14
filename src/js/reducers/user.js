export default (state = { loggedIn: false, user: {} }, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loggedIn: action.loginStatus === 'success',
                user: action.user
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                loggedIn: false,
                user: null
            };
        default:
            return state;
    }
};
