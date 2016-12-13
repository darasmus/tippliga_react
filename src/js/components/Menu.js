/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import Link from 'react-router/lib/Link';

import menuConfig from '../config/menu';


class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-overlay" onClick={this.props.onClickElsewhere} />
                <ul>
                    {menuConfig.map(item => (
                        <li
                            key={item.title}
                            className="menu-item"
                        >
                            <Link
                                to={item.url}
                                onClick={this.props.onClick}
                            >{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    onClick: React.PropTypes.func,
    onClickElsewhere: React.PropTypes.func
};

export default Menu;
