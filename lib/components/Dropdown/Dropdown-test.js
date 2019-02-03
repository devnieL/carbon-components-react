"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Dropdown', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
      className: "extra-class",
      defaultText: "Choose something.."
    }));
    var dropdownWrapper = wrapper.childAt(0);
    var mounted = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, {
      className: "extra-class",
      defaultText: "Choose something.."
    }));
    it('renders a dropdown', function () {
      expect(wrapper.length).toEqual(1);
    });
    it('has the expected classes', function () {
      expect(dropdownWrapper.hasClass('bx--dropdown')).toEqual(true);
    });
    it('has the expected classes when disabled', function () {
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
        defaultText: "Choose something..",
        disabled: true
      })).childAt(0);
      expect(wrapper.hasClass('bx--dropdown--disabled')).toEqual(true);
    });
    it('has the expected classes when light is true', function () {
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
        defaultText: "Choose something..",
        light: true
      })).childAt(0);
      expect(wrapper.hasClass('bx--dropdown--light')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(dropdownWrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      var dropdown = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, null, _react.default.createElement("div", {
        className: "test-child"
      }), _react.default.createElement("div", {
        className: "test-child"
      })));
      expect(dropdown.find('.test-child').length).toEqual(2);
    });
    it('should handle null children', function () {
      var dropdown = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, null, null, _react.default.createElement("div", {
        className: "test-child"
      }), null));
      expect(dropdown.find('.test-child').length).toEqual(1);
    });
    it('should use correct icon', function () {
      var icon = mounted.find(_Icon.default);
      expect(icon.props().icon).toEqual(_carbonIcons.iconCaretDown);
    });
    it('has the expected default iconDescription', function () {
      expect(mounted.props().iconDescription).toEqual('open list of options');
    });
    it('adds new iconDescription when passed via props', function () {
      mounted.setProps({
        iconDescription: 'new description'
      });
      expect(mounted.props().iconDescription).toEqual('new description');
    });
    it('should have iconDescription match Icon component description prop', function () {
      var matches = mounted.props().iconDescription === mounted.find(_Icon.default).props().description;
      expect(matches).toEqual(true);
    });
    it('should start with the selected text over the default text when present in props', function () {
      var dropdown = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
        defaultText: "Choose something...",
        selectedText: "Value"
      }, _react.default.createElement(_DropdownItem.default, {
        itemText: "Value",
        value: "Value"
      })));
      expect(dropdown.state().selectedText).toEqual('Value');
    });
    it('should select default text when provided selected text does not match any children', function () {
      var dropdown = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
        defaultText: "Choose something...",
        selectedText: "NotValue"
      }, _react.default.createElement(_DropdownItem.default, {
        itemText: "Value",
        value: "Value"
      })));
      expect(dropdown.state().selectedText).toEqual('Choose something...');
    });
  });
  describe('events', function () {
    var onClick = jest.fn();
    var onOpen = jest.fn();
    var onClose = jest.fn();
    var handleKeydown = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, {
      onClick: onClick,
      onOpen: onOpen,
      onClose: onClose
    }, _react.default.createElement(_DropdownItem.default, {
      className: "test-child",
      itemText: "test-child",
      value: "test-child"
    })));
    var dropdown = wrapper.find('.bx--dropdown');
    var child = wrapper.find('.test-child');
    it('should add the open dropdown class on click', function () {
      dropdown.simulate('click');
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(true);
    });
    it('should toggle the open dropdown class on Enter', function () {
      wrapper.setState({
        open: false
      });
      dropdown.simulate('keypress', {
        which: 13
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(true);
      dropdown.simulate('keypress', {
        which: 13
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(false);
    });
    it('should toggle the open dropdown class on Space', function () {
      wrapper.setState({
        open: false
      });
      dropdown.simulate('keypress', {
        which: 32
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(true);
      dropdown.simulate('keypress', {
        which: 32
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(false);
    });
    it('should close when ESC is pressed', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, {
        handleKeydown: handleKeydown
      }, _react.default.createElement(_DropdownItem.default, {
        className: "test-child",
        itemText: "test-child",
        value: "test-child"
      })));
      wrapper.setState({
        open: true
      });
      wrapper.mount();
      dropdown.simulate('keypress', {
        which: 27
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(false);
      dropdown.simulate('keypress', {
        which: 27
      });
      expect(wrapper.find('.bx--dropdown').hasClass('bx--dropdown--open')).toEqual(false);
      wrapper.unmount();
    });
    it('should update data value state when child item is clicked', function () {
      child.last().simulate('click');
      expect(wrapper.find('.bx--dropdown').props().value).toEqual('test-child');
    });
    it('should update selected text when child item is clicked', function () {
      child.last().simulate('click');
      expect(wrapper.state().selectedText).toEqual('test-child');
    });
    it('should close dropdown on click outside', function () {
      wrapper.setState({
        open: true
      });
      var listener = wrapper.find(_ClickListener.default);
      listener.props().onClickOutside();
      expect(wrapper.state().open).toBe(false);
    });
    it('fires open and close callbacks when the dropdown is clicked', function () {
      onOpen.mockReset();
      onClose.mockReset();
      dropdown.simulate('click');
      expect(onOpen).toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();
      dropdown.simulate('click');
      expect(onOpen).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalled();
    });
    it('should not open when disabled', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dropdown.default, {
        onClick: onClick,
        disabled: true
      }, _react.default.createElement(_DropdownItem.default, {
        className: "test-child",
        itemText: "test-child",
        value: "test-child"
      })));
      var dropdown = wrapper.find('.bx--dropdown--disabled');
      dropdown.simulate('click');
      expect(dropdown.hasClass('bx--dropdown--open')).toEqual(false);
      dropdown.simulate('keypress', {
        which: 13
      });
      expect(dropdown.hasClass('bx--dropdown--open')).toEqual(false);
      dropdown.simulate('keypress', {
        which: 32
      });
      expect(dropdown.hasClass('bx--dropdown--open')).toEqual(false);
      expect(wrapper.state().open).toBe(false);
    });
  });
});