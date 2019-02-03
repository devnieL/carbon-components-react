"use strict";

var _react = _interopRequireDefault(require("react"));

var _Accordion = _interopRequireDefault(require("../Accordion"));

var _Accordion2 = _interopRequireDefault(require("../Accordion/Accordion.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Accordion', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Accordion.default, {
      className: "extra-class"
    }, _react.default.createElement("div", {
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
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Accordion2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--accordion')).toEqual(true);
    });
  });
});