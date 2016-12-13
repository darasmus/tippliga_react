/* global describe, it, expect, beforeEach, afterEach, sinon */
/* eslint-disable no-unused-expressions */
import { shallow } from 'enzyme';
import React from 'react';
import { Counter } from '../../src/js/components/Counter';

describe('Component: Counter', () => {
    let dummySpy;
    let realSpy;
    beforeEach(() => {
        dummySpy = sinon.spy();
        realSpy = sinon.spy();
    });

    it('renders given count', () => {
        const component = shallow(<Counter increment={realSpy} decrement={dummySpy} multiply={dummySpy} count={42} />);

        expect(component.find('strong')).to.have.text('42');
    });

    it('clicking increment button fires increment method', () => {
        const component = shallow(<Counter increment={realSpy} decrement={dummySpy} multiply={dummySpy} count={42} />);

        component.find('button').at(1).simulate('click');

        expect(realSpy).to.have.been.called;
        expect(dummySpy).to.not.have.been.called;
    });

    it('clicking decrement button fires decrement method', () => {
        const component = shallow(<Counter increment={dummySpy} decrement={realSpy} multiply={dummySpy} count={42} />);

        component.find('button').at(0).simulate('click');

        expect(realSpy).to.have.been.called;
        expect(dummySpy).to.not.have.been.called;
    });

    it('clicking multiply button fires multiply method', () => {
        const component = shallow(<Counter increment={dummySpy} decrement={dummySpy} multiply={realSpy} count={42} />);

        component.find('button').at(2).simulate('click');

        expect(realSpy).to.have.been.called;
        expect(dummySpy).to.not.have.been.called;
    });
});
