import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import loginApi from '../api/login';

const mapDispatchToProps = (dispatch) => ({
    logindata: (data) => dispatch(userActions.logindata(data))
});

const mapStateToProps = (state) => ({
    data: state.user.data,
    loggedIn: state.user.loggedIn
});

class Login extends React.Component {
    static propTypes = {
        logindata: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired,
        loggedIn: React.PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            usr: this.state.user,
            pwd: this.state.password
        };

        loginApi.post(userData).then(data => {
            this.props.logindata(data);
        });
    }

    render() {
        return (
            <div className={this.props.loggedIn ? 'login is-hidden' : 'login'}>
                <form className="search-form" onSubmit={e => this.onSubmit(e)}>
                    <div className="form-group">
                        <input name="user" type="text" value={this.state.user} onChange={e => this.setState({[e.target.name]: e.target.value})} placeholder="Username" />
                        <input name="password" type="password" value={this.state.password} onChange={e => this.setState({[e.target.name]: e.target.value})} placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                    MSG: {this.props.data.msg}
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

export {
    Login
};
