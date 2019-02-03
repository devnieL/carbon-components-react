"use strict";

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _Breadcrumb2 = _interopRequireDefault(require("../Breadcrumb/Breadcrumb.Skeleton"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Breadcrumb', function () {
  describe('Renders as expected', function () {
    var breadcrumb = (0, _enzyme.mount)(_react.default.createElement(_Breadcrumb.default, {
      className: "parent-class"
    }, _react.default.createElement(_BreadcrumbItem.default, {
      className: "some-class",
      href: "www.google.com"
    }, "Breadcrumb 1")));
    var breadcrumbItem = breadcrumb.find(_BreadcrumbItem.default);
    it('renders a breadcrumb', function () {
      expect(breadcrumb.length).toEqual(1);
    });
    it('should use the appropriate breadcrumb class', function () {
      expect(breadcrumb.children().hasClass('bx--breadcrumb')).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(breadcrumb.hasClass('parent-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(breadcrumb.find(_BreadcrumbItem.default).length).toEqual(1);
    });
    it('should render children content as expected', function () {
      expect(breadcrumbItem.text()).toEqual('Breadcrumb 1');
    });
  });
});
describe('BreadcrumbSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Breadcrumb2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--breadcrumb')).toEqual(true);
    });
  });
});