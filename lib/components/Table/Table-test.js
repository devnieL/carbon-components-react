"use strict";

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../Table"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Table', function () {
  describe('Renders as expected', function () {
    var tableContainer = (0, _enzyme.shallow)(_react.default.createElement(_Table.default, null, _react.default.createElement("tbody", null)));
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