/* global describe, it, expect, beforeEach, afterEach, sinon */
/* eslint-disable no-unused-expressions */
import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../src/js/components/Header';
import Clock from '../../src/js/components/Clock';

describe('Component: Header', () => {
    it('renders a clock', () => {
        const component = shallow(<Header />);

        expect(component).to.have.exactly(1).descendants(Clock);
    });
});
