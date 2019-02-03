/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Accordion from '../Accordion';
import AccordionSkeleton from '../Accordion/Accordion.Skeleton';
import { shallow } from 'enzyme';
describe('Accordion', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(Accordion, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass('bx--accordion')).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('AccordionSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(AccordionSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--accordion')).toEqual(true);
    });
  });
});