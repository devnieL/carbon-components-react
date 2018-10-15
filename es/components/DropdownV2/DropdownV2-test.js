function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount, shallow } from 'enzyme';
import { assertMenuOpen, assertMenuClosed, findMenuItemNode, openMenu, generateItems, generateGenericItem } from '../ListBox/test-helpers';
import DropdownV2 from '../DropdownV2';
import DropdownSkeleton from '../DropdownV2/Dropdown.Skeleton';
describe('DropdownV2', function () {
  var mockProps;
  beforeEach(function () {
    mockProps = {
      items: generateItems(5, generateGenericItem),
      onChange: jest.fn(),
      label: 'input',
      placeholder: 'Filter...',
      type: 'default'
    };
  });
  it('should render', function () {
    var wrapper = mount(React.createElement(DropdownV2, mockProps));
    expect(wrapper).toMatchSnapshot();
  });
  it('should initially render with the menu not open', function () {
    var wrapper = mount(React.createElement(DropdownV2, mockProps));
    assertMenuClosed(wrapper);
  });
  it('should let the user open the menu by clicking on the control', function () {
    var wrapper = mount(React.createElement(DropdownV2, mockProps));
    openMenu(wrapper);
    assertMenuOpen(wrapper, mockProps);
  });
  it('should specify light version as expected', function () {
    var wrapper = mount(React.createElement(DropdownV2, mockProps));
    expect(wrapper.props().light).toEqual(false);
    wrapper.setProps({
      light: true
    });
    expect(wrapper.props().light).toEqual(true);
  });
  it('should let the user select an option by clicking on the option node', function () {
    var wrapper = mount(React.createElement(DropdownV2, mockProps));
    openMenu(wrapper);
    findMenuItemNode(wrapper, 0).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[0]
    });
    assertMenuClosed(wrapper);
    mockProps.onChange.mockClear();
    openMenu(wrapper);
    findMenuItemNode(wrapper, 1).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[1]
    });
  });
  describe('should display initially selected item found in `initialSelectedItem`', function () {
    it('using an object type for the `initialSelectedItem` prop', function () {
      var wrapper = mount(React.createElement(DropdownV2, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[0]
      })));
      expect(wrapper.find('span.bx--list-box__label').text()).toEqual(mockProps.items[0].label);
    });
    it('using a string type for the `initialSelectedItem` prop', function () {
      // Replace the 'items' property in mockProps with a list of strings
      mockProps = _objectSpread({}, mockProps, {
        items: ['1', '2', '3']
      });
      var wrapper = mount(React.createElement(DropdownV2, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[1]
      })));
      expect(wrapper.find('span.bx--list-box__label').text()).toEqual(mockProps.items[1]);
    });
  });
});
describe('DropdownSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(DropdownSkeleton, {
      inline: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--dropdown-v2')).toEqual(true);
      expect(wrapper.hasClass('bx--list-box--inline')).toEqual(true);
    });
  });
});