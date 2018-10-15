import React from 'react';
import UnorderedList from '../UnorderedList';
import ListItem from '../ListItem';
import { shallow } from 'enzyme';
describe('UnorderedList', function () {
  describe('Renders as expected', function () {
    var list = shallow(React.createElement(UnorderedList, {
      className: "some-class"
    }, React.createElement(ListItem, null, "Item")));
    it('should be a ul element', function () {
      expect(list.find('ul').length).toEqual(1);
    });
    it('should render with the appropriate classes', function () {
      expect(list.hasClass('bx--list--unordered')).toEqual(true);
      expect(list.hasClass('some-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(list.find(ListItem).length).toEqual(1);
    });
    it('should render nested lists', function () {
      list.setProps({
        nested: true
      });
      expect(list.hasClass('bx--list--nested')).toEqual(true);
      list.setProps({
        nested: false
      });
      expect(list.hasClass('bx--list--nested')).toEqual(false);
    });
  });
});