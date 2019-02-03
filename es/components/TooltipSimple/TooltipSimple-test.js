/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Icon from '../Icon';
import TooltipSimple from '../TooltipSimple';
import { mount } from 'enzyme';
describe('TooltipSimple', function () {
  describe('Renders as expected with defaults', function () {
    var wrapper = mount(React.createElement(TooltipSimple, {
      text: "Basic TooltipSimple Text",
      className: "extra-class"
    }, React.createElement("a", {
      href: "/"
    }, "A Link")));
    var tooltipWrapper = wrapper.find('.bx--tooltip--simple').first();
    var tooltip = wrapper.find('.bx--tooltip--simple__top').first();
    describe('tooltip container', function () {
      it('renders a tooltip container', function () {
        expect(tooltipWrapper.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(tooltip.hasClass('bx--tooltip--simple__top')).toEqual(true);
      });
      it('applies extra classes to the tooltip container', function () {
        expect(tooltipWrapper.hasClass('extra-class')).toEqual(true);
      });
      it('has the tooltip text specified', function () {
        expect(tooltip.props()['data-tooltip-text']).toEqual('Basic TooltipSimple Text');
      });
    });
    describe('children', function () {
      it('should wrap the children in the tooltip container', function () {
        var child = tooltipWrapper.find('a').first();
        expect(child.length).toEqual(1);
      });
    });
  });
  describe('Renders as expected with specified properties', function () {
    var wrapper = mount(React.createElement(TooltipSimple, {
      text: "Basic TooltipSimple Text",
      position: "bottom",
      showIcon: false
    }, React.createElement("a", {
      href: "/"
    }, "A Link")));
    var tooltip = wrapper.find('.bx--tooltip--simple__bottom').first();
    describe('tooltip container', function () {
      it("sets the tooltip's position", function () {
        expect(tooltip.hasClass('bx--tooltip--simple__bottom')).toEqual(true);
      });
      it('does not render info icon', function () {
        var icon = tooltip.find(Icon);
        expect(icon.length).toBe(0);
      });
    });
  });
});