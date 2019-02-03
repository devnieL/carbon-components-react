/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';
import { mount, shallow } from 'enzyme';
describe('Breadcrumb', function () {
  describe('Renders as expected', function () {
    var breadcrumb = mount(React.createElement(Breadcrumb, {
      className: "parent-class"
    }, React.createElement(BreadcrumbItem, {
      className: "some-class",
      href: "www.google.com"
    }, "Breadcrumb 1")));
    var breadcrumbItem = breadcrumb.find(BreadcrumbItem);
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
      expect(breadcrumb.find(BreadcrumbItem).length).toEqual(1);
    });
    it('should render children content as expected', function () {
      expect(breadcrumbItem.text()).toEqual('Breadcrumb 1');
    });
  });
});
describe('BreadcrumbSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(BreadcrumbSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass('bx--skeleton')).toEqual(true);
      expect(wrapper.hasClass('bx--breadcrumb')).toEqual(true);
    });
  });
});