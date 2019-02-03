/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DropdownItem from '../DropdownItem';
import { mount } from 'enzyme';
describe('DropdownItem', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(DropdownItem, {
      className: "extra-class",
      itemText: "test",
      value: "test"
    }));
    var item = wrapper.find('li');
    var link = wrapper.find('a');
    it('renders a dropdown item', function () {
      expect(wrapper.length).toEqual(1);
    });
    it('has the expected classes', function () {
      expect(item.hasClass('bx--dropdown-item')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(item.hasClass('extra-class')).toEqual(true);
    });
    it('should add the value passed via value', function () {
      expect(item.props().value).toEqual('test');
    });
    it('should add the item text passed via itemText', function () {
      expect(link.props().children).toEqual('test');
    });
  });
  describe('Functions are called as expected', function () {
    var onClick = jest.fn();
    var wrapper = mount(React.createElement(DropdownItem, {
      onClick: onClick,
      itemText: "test",
      value: "test"
    }));
    it('onClick is called as expected', function () {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});