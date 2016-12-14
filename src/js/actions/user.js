import loginApi from '../api/login';
import userApi from '../api/user';

const checkLogin = () => (dispatch) => {
    dispatch({
        type: 'LOGIN_USER',
        loginStatus: 'loading'
    });

    userApi.get().then(user => {
        dispatch({
            type: 'LOGIN_USER',
            loginStatus: 'success',
            user
        });
    }, (error) => {
        dispatch({
            type: 'LOGIN_USER',
            loginStatus: 'failed',
            errorMsg: error
        });
    });
};

const login = (credentials) => (dispatch) => {
    dispatch({
        type: 'LOGIN_USER',
        loginStatus: 'loading'
    });

    loginApi.post(credentials).then(user => {
        dispatch({
            type: 'LOGIN_USER',
            loginStatus: 'success',
            user
        });
    }, (error) => {
        dispatch({
            type: 'LOGIN_USER',
            loginStatus: 'failed',
            errorMsg: error
        });
    });
};

const logout = () => ({ type: 'LOGOUT_USER' });

export {
    login,
    logout,
    checkLogin
};
