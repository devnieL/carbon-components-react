"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _SearchLayoutButton = _interopRequireDefault(require("../SearchLayoutButton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('SearchLayoutButton', function () {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
    labelText: "testlabel"
  }));
  describe('buttons', function () {
    var btn = wrapper.find('button');
    it('should have type="button"', function () {
      var type = btn.instance().getAttribute('type');
      expect(type).toEqual('button');
    });
    it('has expected class for sort button', function () {
      expect(btn.hasClass('bx--search-button')).toEqual(true);
    });
  });
  describe('icons', function () {
    it('should use "list" icon for toggle button', function () {
      var icon = wrapper.find(_Icon.default);
      expect(icon.props().icon).toEqual(_carbonIcons.iconList);
    });
    it('should use "grid" icon when format state is not "list"', function () {
      wrapper.setState({
        format: 'not-list'
      });
      var icon = wrapper.find(_Icon.default);
      expect(icon.props().icon).toEqual(_carbonIcons.iconGrid);
    });
    it('should support specifying the layout via props', function () {
      var wrapperWithFormatProps = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
        format: "grid"
      }));
      expect(wrapperWithFormatProps.find(_Icon.default).props().icon).toEqual(_carbonIcons.iconGrid);
      wrapperWithFormatProps.setProps({
        format: 'list'
      });
      expect(wrapperWithFormatProps.find(_Icon.default).props().icon).toEqual(_carbonIcons.iconList);
    });
    it('should avoid change the format upon setting props, unless there the value actually changes', function () {
      var wrapperWithFormatProps = (0, _enzyme.shallow)(_react.default.createElement(_SearchLayoutButton.default, null));
      wrapperWithFormatProps.setProps({
        format: 'grid'
      });
      wrapperWithFormatProps.setState({
        format: 'list'
      });
      wrapperWithFormatProps.setProps({
        format: 'grid'
      });
      expect(wrapperWithFormatProps.state().format).toEqual('list');
    });
    it('should support being notified of change in layout', function () {
      var onChangeFormat = jest.fn();
      var wrapperWithFormatProps = (0, _enzyme.mount)(_react.default.createElement(_SearchLayoutButton.default, {
        format: "grid",
        onChangeFormat: onChangeFormat
      }));
      wrapperWithFormatProps.find('button').simulate('click');
      wrapperWithFormatProps.find('button').simulate('click');
      expect(onChangeFormat.mock.calls).toEqual([[{
        format: 'list'
      }], [{
        format: 'grid'
      }]]);
    });
  });
});