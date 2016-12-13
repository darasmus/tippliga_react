/* global describe, it, expect, sinon, beforeEach, afterEach */
import deepFreeze from 'deep-freeze';
import reducer from '../../src/js/reducers/counter';

describe('Reducer: counter', () => {
    describe('INCREMENT_COUNT', () => {
        it('adds to positive', () => {
            const action = {
                type: 'INCREMENT_COUNT'
            };
            const stateBefore = {
                count: 0
            };
            const stateAfter = {
                count: 1
            };

            deepFreeze(stateBefore);
            deepFreeze(action);

            expect(reducer(stateBefore, action)).to.eql(stateAfter);
        });

        it('adds to negative', () => {
            const action = {
                type: 'INCREMENT_COUNT'
            };
            const stateBefore = {
                count: -2
            };
            const stateAfter = {
                count: -1
            };

            deepFreeze(stateBefore);
            deepFreeze(action);

            expect(reducer(stateBefore, action)).to.eql(stateAfter);
        });
    });

    describe('DECREMENT_COUNT', () => {
        it('subtracts from positive', () => {
            const action = {
                type: 'DECREMENT_COUNT'
            };
            const stateBefore = {
                foo: 'bar',
                count: 4
            };
            const stateAfter = {
                foo: 'bar',
                count: 3
            };

            deepFreeze(stateBefore);
            deepFreeze(action);

            expect(reducer(stateBefore, action)).to.eql(stateAfter);
        });

        it('subtracts from negative', () => {
            const action = {
                type: 'DECREMENT_COUNT'
            };
            const stateBefore = {
                count: -42
            };
            const stateAfter = {
                count: -43
            };

            deepFreeze(stateBefore);
            deepFreeze(action);

            expect(reducer(stateBefore, action)).to.eql(stateAfter);
        });
    });

    describe('SET_COUNT', () => {
        it('sets the count to given value', () => {
            const action = {
                type: 'SET_COUNT',
                count: 42
            };
            const stateBefore = {
                foo: 'bar',
                count: 4
            };
            const stateAfter = {
                foo: 'bar',
                count: 42
            };

            deepFreeze(stateBefore);
            deepFreeze(action);

            expect(reducer(stateBefore, action)).to.eql(stateAfter);
        });
    });
});
