import React from 'react';
import Icon from '../Icon';
import SearchFilterButton from '../SearchFilterButton';
import { mount } from 'enzyme';
import { iconFilter } from 'carbon-icons';
describe('SearchFilterButton', function () {
  var wrapper = mount(React.createElement(SearchFilterButton, {
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
      var icon = wrapper.find(Icon);
      expect(icon.props().icon).toEqual(iconFilter);
    });
  });
});