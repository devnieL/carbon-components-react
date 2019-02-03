/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import TableData from '../TableData';
import { mount, shallow } from 'enzyme';
describe('TableData', function () {
  describe('Renders as expected', function () {
    var td = shallow(React.createElement(TableData, null, "Content"));
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
      wrapper = mount(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(TableData, {
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