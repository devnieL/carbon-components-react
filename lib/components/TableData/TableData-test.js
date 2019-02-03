"use strict";

var _react = _interopRequireDefault(require("react"));

var _TableData = _interopRequireDefault(require("../TableData"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('TableData', function () {
  describe('Renders as expected', function () {
    var td = (0, _enzyme.shallow)(_react.default.createElement(_TableData.default, null, "Content"));
    it('should render a table data element', function () {
      expect(td.find('td').length).toEqual(1);
    });
    it('should add extra classes that are passed via className for the td', function () {
      td.setProps({
        className: 'extra-class'
      });
      var tdEl = td.find('td');
      expect(tdEl.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('events', function () {
    var onClick = jest.fn();
    var wrapper;
    var icon;
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement("table", null, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement(_TableData.default, {
        expanded: true,
        onClick: onClick
      }, "Content")))));
      icon = wrapper.find('.bx--table-expand__svg').first();
    });
    afterEach(function () {
      onClick.mockClear();
    });
    it('should fire onClick on click', function () {
      icon.simulate('click');
      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
    it('should fire onClick on enter or space', function () {
      icon.simulate('keypress', {
        which: 13
      });
      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(1);
      icon.simulate('keypress', {
        which: 32
      });
      expect(onClick).toHaveBeenCalledTimes(2);
      icon.simulate('keypress', {
        which: 1
      });
      expect(onClick).toHaveBeenCalledTimes(2);
    });
  });
});