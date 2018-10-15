import React from 'react';
import OverflowMenuItem from '../OverflowMenuItem';
import { shallow } from 'enzyme';

var shallowRender = function shallowRender(props) {
  return shallow(React.createElement(OverflowMenuItem, props));
};

describe('OverflowMenuItem', function () {
  describe('Renders as expected', function () {
    it('should render a button and text as expected', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {}
      });
      var button = wrapper.find('button');
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('testing');
      expect(wrapper.type()).toEqual('li');
    });
    it('should have the correct classes', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {}
      });
      var button = wrapper.find('button');
      expect(button.hasClass('bx--overflow-menu-options__btn')).toEqual(true);
    });
    it('should have the correct class when hasDivider is true', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {},
        hasDivider: true
      });
      expect(wrapper.hasClass('bx--overflow-menu--divider')).toEqual(true);
    });
  });
});