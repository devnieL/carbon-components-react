"use strict";

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _SearchFilterButton = _interopRequireDefault(require("../SearchFilterButton"));

var _enzyme = require("enzyme");

var _carbonIcons = require("carbon-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('SearchFilterButton', function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_SearchFilterButton.default, {
    labelText: "testlabel"
  }));
  describe('buttons', function () {
    var btn = wrapper.find('button');
    it('should have type="button"', function () {
      var type = btn.instance().getAttribute('type');
      expect(type).toEqual('button');
    });
    it('has expected class', function () {
      expect(btn.hasClass('bx--search-button')).toEqual(true);
    });
  });
  describe('icons', function () {
    it('should use "filter" icon', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.props().icon).toEqual(_carbonIcons.iconFilter);
    });
  });
});