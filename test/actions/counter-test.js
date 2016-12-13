/* global describe, it, expect, beforeEach, afterEach, chai, sinon */
import * as actions from '../../src/js/actions/counter';

describe('Counter Actions', () => {
    it('#increment', () => {
        expect(actions.increment()).to.eql({
            type: 'INCREMENT_COUNT'
        });
    });

    it('#decrement', () => {
        expect(actions.decrement()).to.eql({
            type: 'DECREMENT_COUNT'
        });
    });

    describe('#multiply', () => {
        let count;
        let getState;
        let dispatch;
        beforeEach(() => {
            dispatch = sinon.spy();
            getState = () => ({
                counter: {
                    count
                }
            });
        });

        it('when state is zero it sets count to 0', () => {
            count = 0;
            actions.multiply(3)(dispatch, getState);
            expect(dispatch).to.have.been.calledWith({
                type: 'SET_COUNT',
                count: 0
            });
        });

        it('when state is positive it multiplies count with given number', () => {
            count = 4;
            actions.multiply(3)(dispatch, getState);
            expect(dispatch).to.have.been.calledWith({
                type: 'SET_COUNT',
                count: 12
            });
        });
    });
});
