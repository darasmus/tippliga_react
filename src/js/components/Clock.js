import React from 'react';
import moment from 'moment';


const MINUTE = 60000;

class Clock extends React.Component {
    static PropTypes = {}

    constructor (props) {
        super(props);

        this.state = {
            time: moment()
        };
    }

    componentWillMount () {
        this._isMounted = true;
    }

    componentDidMount () {
        this.setTimer();
    }

    componentDidUpdate () {
        const offset = MINUTE - (moment().valueOf() % MINUTE);
        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._timer = setTimeout(() => {
            this.setTimer();
        }, offset);
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    setTimer () {
        if (this._isMounted) {
            this.setState({
                time: moment()
            });
        }
    }

    render () {
        return (
            <div className="clock">
                <span className="date">
                    {this.state.time.format('dd. DD.MM.YY')}
                </span>
                <span className="time">
                    {this.state.time.format('HH:mm')}
                </span>
            </div>
        );
    }
}

export default Clock;
