/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import TableRowExpanded from '../TableRowExpanded';
import { shallow } from 'enzyme';
describe('TableRowExpanded', function () {
  describe('Renders as expected', function () {
    var tableRow = shallow(React.createElement(TableRowExpanded, null, React.createElement("p", null, "Deep in")));
    it('if expanded, should render a tr with the appropriate class', function () {
      tableRow.setProps({
        expanded: true
      });
      var trEl = tableRow.find('tr');
      expect(trEl.hasClass('bx--table-row')).toEqual(true);
      expect(trEl.hasClass('bx--expandable-row')).toEqual(true);
    });
    it('if expanded, should add extra classes that are passed via className for the tr', function () {
      tableRow.setProps({
        expanded: true
      });
      tableRow.setProps({
        className: 'extra-class'
      });
      expect(tableRow.hasClass('extra-class')).toEqual(true);
    });
    it('if expanded, should render children as expected', function () {
      tableRow.setProps({
        expanded: true
      });
      expect(tableRow.find('p').length).toEqual(1);
    });
    it('if not expanded, should not render anything', function () {
      tableRow.setProps({
        expanded: false
      });
      expect(tableRow.text()).toEqual('');
    });
  });
});