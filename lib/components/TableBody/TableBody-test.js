"use strict";

var _react = _interopRequireDefault(require("react"));

var _TableBody = _interopRequireDefault(require("../TableBody"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TableBody', function () {
  describe('Renders as expected', function () {
    var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_TableBody.default, {
      className: "extra-class"
    }, _react.default.createElement("td", null, "Sample")));
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