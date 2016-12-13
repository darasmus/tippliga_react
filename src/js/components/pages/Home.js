import React from 'react';

import exampleApi from '../../api/exampleFeed';

import Counter from '../Counter';


class PageHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentWillMount() {
        exampleApi.get().then(data => {
            this.setState({
                data
            });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="page page-home">
                <h1>{data.title}</h1>

                {data.data ?
                    data.data.map(item => (
                        <div key={item.title}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                    : null}

                <Counter />
            </div>
        );
    }
}

export default PageHome;
