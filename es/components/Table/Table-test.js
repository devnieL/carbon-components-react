/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Table from '../Table';
import { shallow } from 'enzyme';
describe('Table', function () {
  describe('Renders as expected', function () {
    var tableContainer = shallow(React.createElement(Table, null, React.createElement("tbody", null)));
    it('has the expected classes', function () {
      expect(tableContainer.hasClass('bx--responsive-table-container')).toEqual(true);
    });
    it('should render a table with the appropriate class', function () {
      var tableEl = tableContainer.find('table');
      expect(tableEl.hasClass('bx--responsive-table')).toEqual(true);
    });
    it('should add extra classes that are passed via className for the container', function () {
      tableContainer.setProps({
        containerClassName: 'extra-class'
      });
      expect(tableContainer.hasClass('extra-class')).toEqual(true);
    });
    it('should add extra classes that are passed via className for the table', function () {
      tableContainer.setProps({
        className: 'extra-class'
      });
      var tableEl = tableContainer.find('table');
      expect(tableEl.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(tableContainer.find('tbody').length).toEqual(1);
    });
  });
});