/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DataTableSkeleton from '../DataTableSkeleton/';
import { shallow } from 'enzyme';
describe('DataTableSkeleton', function () {
  describe('Renders as expected', function () {
    var rowCount = 20;
    var columnCount = 3;
    var wrapper = shallow(React.createElement(DataTableSkeleton, {
      compact: true,
      rowCount: rowCount,
      columnCount: columnCount
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--data-table-v2')).toEqual(true);
    });
    it('Has the correct number of rows and columns', function () {
      expect(wrapper.find('thead > tr > th').length).toEqual(columnCount);
      expect(wrapper.find('tbody > tr').length).toEqual(rowCount);
      expect(wrapper.find('tbody > tr > td').length).toEqual(rowCount * columnCount);
    });
  });
});
describe('DataTableSkeleton Compact', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(DataTableSkeleton, {
      compact: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--data-table-v2')).toEqual(true);
      expect(wrapper.hasClass('bx--data-table-v2--compact')).toEqual(true);
    });
  });
});
describe('DataTableSkeleton Zebra', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(DataTableSkeleton, {
      zebra: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--data-table-v2')).toEqual(true);
      expect(wrapper.hasClass('bx--data-table-v2--zebra')).toEqual(true);
    });
  });
});