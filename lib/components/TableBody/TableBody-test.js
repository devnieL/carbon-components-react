"use strict";

var _react = _interopRequireDefault(require("react"));

var _TableBody = _interopRequireDefault(require("../TableBody"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('TableBody', function () {
  describe('Renders as expected', function () {
    var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_TableBody.default, {
      className: "extra-class"
    }, _react.default.createElement("td", null, "Sample")));
    it('has the expected classes', function () {
      expect(rootWrapper.hasClass('bx--table-body')).toEqual(true);
    });
    it('should render a tbody', function () {
      var tbody = rootWrapper.find('tbody');
      expect(tbody.length).toEqual(1);
    });
    it('should render children as expected', function () {
      expect(rootWrapper.find('td').length).toEqual(1);
    });
  });
});