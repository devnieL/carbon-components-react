import React from 'react';
import TableRow from '../TableRow';
import { shallow } from 'enzyme';
describe('TableRow', function () {
  describe('Renders as expected', function () {
    var tableRow = shallow(React.createElement(TableRow, null, React.createElement("td", null)));
    it('should render a tr with the appropriate class', function () {
      var trEl = tableRow.find('tr');
      expect(trEl.hasClass('bx--table-row')).toEqual(true);
      expect(trEl.hasClass('bx--parent-row')).toEqual(true);
    });
    it('should not render the parent row class if a header row', function () {
      tableRow.setProps({
        header: true
      });
      var trEl = tableRow.find('tr');
      expect(trEl.hasClass('bx--parent-row')).toEqual(false);
    });
    it('should add extra classes that are passed via className for the tr', function () {
      tableRow.setProps({
        className: 'extra-class'
      });
      expect(tableRow.hasClass('extra-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(tableRow.find('td').length).toEqual(1);
    });
  });
});