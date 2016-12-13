import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Link from 'react-router/lib/Link';

import Clock from './Clock';
import Menu from './Menu';
import MenuIcon from './icons/Menu';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    toggleMenu(event) {
        event.preventDefault();
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    closeMenu() {
        this.setState({
            showMenu: false
        });
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img className="logo--img" src="/img/logo.jpg" />
                    </Link>
                </div>
                <Link
                    to=""
                    className="menu-toggle"
                    onClick={(event) => this.toggleMenu(event)}
                >
                    <MenuIcon
                        className="icon icon-menu"
                        alt="Menu"
                        open={this.state.showMenu}
                    />
                </Link>
                <Clock />
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                    name="fade-toggle"
                >
                    {this.state.showMenu ? (
                        <Menu
                            onClick={() => this.closeMenu()}
                            onClickElsewhere={() => this.closeMenu()}
                        />
                    ) : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Header.propTypes = {
    params: React.PropTypes.shape({
        text: React.PropTypes.string
    })
};

export default Header;
