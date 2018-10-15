import React from 'react';
import TableBody from '../TableBody';
import { shallow } from 'enzyme';
describe('TableBody', function () {
  describe('Renders as expected', function () {
    var rootWrapper = shallow(React.createElement(TableBody, {
      className: "extra-class"
    }, React.createElement("td", null, "Sample")));
    it('has the expected classes', function () {
      expect(rootWrapper.hasClass('bx--table-body')).toEqual(true);
    });
    it('should render a tbody', function () {
      var tbody = rootWrapper.find('tbody');
      expect(tbody.length).toEqual(1);
    });
    it('should render children as expected', function () {
      expect(rootWrapper.find('td').length).toEqual(1);
    });
  });
});