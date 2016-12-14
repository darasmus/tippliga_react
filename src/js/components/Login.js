import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

const mapDispatchToProps = (dispatch) => ({
    checkLogin: () => dispatch(userActions.checkLogin()),
    login: (data) => dispatch(userActions.login(data))
});

const mapStateToProps = (state) => ({
    user: state.user.user,
    loggedIn: state.user.loggedIn
});

class Login extends React.Component {
    static propTypes = {
        checkLogin: React.PropTypes.func.isRequired,
        login: React.PropTypes.func.isRequired,
        user: React.PropTypes.object,
        loggedIn: React.PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    componentWillMount() {
        this.props.checkLogin();
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            usr: this.state.user,
            pwd: this.state.password
        };
        this.props.login(userData);
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
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

export {
    Login
};
