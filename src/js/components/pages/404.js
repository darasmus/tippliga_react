import React from 'react';
import Link from 'react-router/lib/Link';

import Arrow from '../icons/Arrow';


class Page404 extends React.Component {
    componentWillMount() {
        this.setState({});
    }

    render() {
        return (
            <div className="page page-404">
                <h2>404</h2>
                <Arrow
                    className="icon icon-link"
                    open={this.state.showMore}
                    color="white"
                />
                <Link to="/">zurück zur Startseite</Link>
            </div>
        );
    }
}

export default Page404;
