"use strict";

var _react = _interopRequireDefault(require("react"));

var _TableRowExpanded = _interopRequireDefault(require("../TableRowExpanded"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TableRowExpanded', function () {
  describe('Renders as expected', function () {
    var tableRow = (0, _enzyme.shallow)(_react.default.createElement(_TableRowExpanded.default, null, _react.default.createElement("p", null, "Deep in")));
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