import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main-container">
                <Login />
                <Header params={this.props.params} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node,
    params: React.PropTypes.object.isRequired
};

export default App;
