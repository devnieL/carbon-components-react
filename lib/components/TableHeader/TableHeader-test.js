"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _TableHeader = _interopRequireDefault(require("../TableHeader"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('TableHeader', function () {
  describe('Renders as expected', function () {
    var theader = (0, _enzyme.shallow)(_react.default.createElement(_TableHeader.default, null, _react.default.createElement("p", null, "Content")));
    it('should render a th with the appropriate class', function () {
      var thEl = theader.find('th');
      expect(thEl.hasClass('bx--table-header')).toEqual(true);
    });
    it('should add extra classes that are passed via className for the th', function () {
      theader.setProps({
        className: 'extra-class'
      });
      expect(theader.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(theader.find('p').length).toEqual(1);
    });
    it('should render a down icon if sortDir is passed in', function () {
      theader.setProps({
        sortDir: 'DESC'
      });
      var icon = theader.find(_Icon.default);
      expect(icon.length).toEqual(1);
      expect(icon.hasClass('bx--table-sort__svg')).toEqual(true);
      expect(icon.props().icon).toEqual(_carbonIcons.iconCaretDown);
    });
  });
});