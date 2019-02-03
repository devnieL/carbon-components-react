/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { iconCaretDown } from 'carbon-icons';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
import Icon from '../Icon';
import ClickListener from '../../internal/ClickListener';
import { shallow, mount } from 'enzyme';
describe('Dropdown', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(Dropdown, {
      className: "extra-class",
      defaultText: "Choose something.."
    }));
    var dropdownWrapper = wrapper.childAt(0);
    var mounted = mount(React.createElement(Dropdown, {
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
      var wrapper = shallow(React.createElement(Dropdown, {
        defaultText: "Choose something..",
        disabled: true
      })).childAt(0);
      expect(wrapper.hasClass('bx--dropdown--disabled')).toEqual(true);
    });
    it('has the expected classes when light is true', function () {
      var wrapper = shallow(React.createElement(Dropdown, {
        defaultText: "Choose something..",
        light: true
      })).childAt(0);
      expect(wrapper.hasClass('bx--dropdown--light')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(dropdownWrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      var dropdown = shallow(React.createElement(Dropdown, null, React.createElement("div", {
        className: "test-child"
      }), React.createElement("div", {
        className: "test-child"
      })));
      expect(dropdown.find('.test-child').length).toEqual(2);
    });
    it('should handle null children', function () {
      var dropdown = shallow(React.createElement(Dropdown, null, null, React.createElement("div", {
        className: "test-child"
      }), null));
      expect(dropdown.find('.test-child').length).toEqual(1);
    });
    it('should use correct icon', function () {
      var icon = mounted.find(Icon);
      expect(icon.props().icon).toEqual(iconCaretDown);
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
      var matches = mounted.props().iconDescription === mounted.find(Icon).props().description;
      expect(matches).toEqual(true);
    });
    it('should start with the selected text over the default text when present in props', function () {
      var dropdown = shallow(React.createElement(Dropdown, {
        defaultText: "Choose something...",
        selectedText: "Value"
      }, React.createElement(DropdownItem, {
        itemText: "Value",
        value: "Value"
      })));
      expect(dropdown.state().selectedText).toEqual('Value');
    });
    it('should select default text when provided selected text does not match any children', function () {
      var dropdown = shallow(React.createElement(Dropdown, {
        defaultText: "Choose something...",
        selectedText: "NotValue"
      }, React.createElement(DropdownItem, {
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
    var wrapper = mount(React.createElement(Dropdown, {
      onClick: onClick,
      onOpen: onOpen,
      onClose: onClose
    }, React.createElement(DropdownItem, {
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
      var wrapper = mount(React.createElement(Dropdown, {
        handleKeydown: handleKeydown
      }, React.createElement(DropdownItem, {
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
      var listener = wrapper.find(ClickListener);
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
      var wrapper = mount(React.createElement(Dropdown, {
        onClick: onClick,
        disabled: true
      }, React.createElement(DropdownItem, {
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