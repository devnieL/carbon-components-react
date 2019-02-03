/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import TableHead from '../TableHead';
import { shallow } from 'enzyme';
describe('TableHead', function () {
  describe('Renders as expected', function () {
    var thead = shallow(React.createElement(TableHead, null, React.createElement("tr", null)));
    it('has the expected classes', function () {
      expect(thead.hasClass('bx--table-head')).toEqual(true);
    });
    it('should render a thead with the appropriate class', function () {
      var theadEl = thead.find('thead');
      expect(theadEl.hasClass('bx--table-head')).toEqual(true);
    });
    it('should add extra classes that are passed via className for the table', function () {
      thead.setProps({
        className: 'extra-class'
      });
      var tableEl = thead.find('thead');
      expect(tableEl.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(thead.find('tr').length).toEqual(1);
    });
  });
});