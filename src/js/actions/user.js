const login = () => ({ type: 'LOGIN_USER' });

const logout = () => ({ type: 'LOGOUT_USER' });

const logindata = (data) => (dispatch) => {
    let loggedIn = false;
    if (data.msg) {
        loggedIn = true;
    }

    dispatch({
        type: 'SET_DATA',
        data: data,
        loggedIn: loggedIn
    });
};

export {
    login,
    logout,
    logindata
};
