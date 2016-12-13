/* global describe, it, expect, beforeEach, afterEach, sinon */
/* eslint-disable no-unused-expressions */
import {mount} from 'enzyme';
import React from 'react';
import moment from 'moment';
import Clock from '../../src/js/components/Clock';

describe('Component: Clock', () => {
    let clock;
    beforeEach(() => {
        clock = sinon.useFakeTimers();
        moment.locale('en-gb');
    });

    afterEach(() => {
        clock.restore();
    });

    it('renders date and time', () => {
        const component = mount(<Clock />);

        expect(component).to.have.exactly(1).descendants('.date');
        expect(component.find('.date')).to.have.text('Th. 01.01.70');

        expect(component).to.have.exactly(1).descendants('.time');
        expect(component.find('.time')).to.have.text('01:00');

        component.unmount();
    });

    it('changes time every minute', () => {
        const component = mount(<Clock />);

        clock.tick(60000);

        expect(component).to.have.exactly(1).descendants('.date');
        expect(component.find('.date')).to.have.text('Th. 01.01.70');

        expect(component).to.have.exactly(1).descendants('.time');
        expect(component.find('.time')).to.have.text('01:01');

        component.unmount();
    });
});
