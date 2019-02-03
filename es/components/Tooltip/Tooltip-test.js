function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { iconInfoGlyph } from 'carbon-icons';
import Icon from '../Icon';
import FloatingMenu from '../../internal/FloatingMenu';
import Tooltip from '../Tooltip';
import { shallow, mount } from 'enzyme';
jest.mock('lodash.debounce');
debounce.mockImplementation(function (fn) {
  return fn;
});
describe('Tooltip', function () {
  // An icon component class
  var CustomIcon =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CustomIcon, _Component);

    function CustomIcon() {
      _classCallCheck(this, CustomIcon);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomIcon).apply(this, arguments));
    }

    _createClass(CustomIcon, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null);
      }
    }]);

    return CustomIcon;
  }(Component);

  describe('Renders as expected with defaults', function () {
    var wrapper = mount(React.createElement(Tooltip, {
      triggerText: "Tooltip"
    }, React.createElement("p", {
      className: "bx--tooltip__label"
    }, "Tooltip label"), React.createElement("p", null, "Lorem ipsum dolor sit amet")));
    var trigger = wrapper.find('.bx--tooltip__trigger');
    describe('tooltip trigger', function () {
      it('renders a tooltip container', function () {
        expect(trigger.length).toEqual(1);
      });
      it('renders the info icon', function () {
        var icon = trigger.find(Icon);
        expect(icon.length).toBe(1);
        expect(icon.props().icon).toBe(iconInfoGlyph);
        expect(icon.props().iconTitle).toBe('');
      });
    });
  });
  describe('Renders as expected with specified properties', function () {
    var wrapper = mount(React.createElement(Tooltip, {
      className: "tooltip--class",
      triggerClassName: "tooltip--trigger-class",
      triggerText: "Tooltip",
      direction: "bottom",
      menuOffset: {
        left: 10,
        top: 15
      },
      showIcon: false,
      open: true
    }, ' ', React.createElement("p", {
      className: "bx--tooltip__label"
    }, "Tooltip label"), React.createElement("p", null, "Lorem ipsum dolor sit amet")));
    var trigger = wrapper.find('.bx--tooltip__trigger');
    var floatingMenu = wrapper.find(FloatingMenu);
    describe('tooltip container', function () {
      it("sets the tooltip's position", function () {
        expect(floatingMenu.prop('menuDirection')).toEqual('bottom');
      });
      it("sets the tooltip's offset", function () {
        expect(floatingMenu.prop('menuOffset')).toEqual({
          left: 10,
          top: 15
        });
      });
      it('does not render info icon', function () {
        var icon = trigger.find(Icon);
        expect(icon.exists()).toBe(false);
      });
      it('sets the tooltip class', function () {
        expect(floatingMenu.find('[data-floating-menu-direction]').first().prop('className')).toBe('bx--tooltip bx--tooltip--shown tooltip--class');
      });
      it('sets the trigger class', function () {
        expect(trigger.prop('className')).toBe('bx--tooltip__trigger tooltip--trigger-class');
      });
      it('does not render the custom icon wrapper', function () {
        var customIconWrapper = wrapper.find('.bx--tooltip__custom-icon');
        expect(customIconWrapper.exists()).toBe(false);
      });
    });
  });
  describe('Renders as expected when an Icon component is provided, considered also as a custom icon component', function () {
    var wrapper = mount(React.createElement(Tooltip, {
      renderIcon: React.forwardRef(function () {
        return React.createElement(Icon, {
          name: "icon--add"
        });
      })
    }));
    it('does render Icon', function () {
      var icon = wrapper.find(Icon);
      expect(icon.exists()).toBe(true);
    });
    it('does render the custom icon wrapper', function () {
      var customIconWrapper = wrapper.find('.bx--tooltip__custom-icon');
      expect(customIconWrapper.exists()).toBe(true);
    });
  });
  describe('Renders as expected when custom icon component is provided', function () {
    var wrapper = mount(React.createElement(Tooltip, {
      renderIcon: React.forwardRef(function () {
        return React.createElement(CustomIcon, null);
      })
    }));
    it('does not render Icon', function () {
      var icon = wrapper.find(Icon);
      expect(icon.exists()).toBe(false);
    });
    it('does render provided custom icon component instance', function () {
      var icon = wrapper.find(CustomIcon);
      expect(icon.exists()).toBe(true);
    });
    it('does render the custom icon wrapper', function () {
      var customIconWrapper = wrapper.find('.bx--tooltip__custom-icon');
      expect(customIconWrapper.exists()).toBe(true);
    });
  });
  describe('events', function () {
    it('hover changes state with icon', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('mouseover');
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('mouseout');
      expect(wrapper.state().open).toEqual(false);
    });
    it('focus/blur changes state with icon', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('focus');
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('blur');
      expect(wrapper.state().open).toEqual(false);
    });
    it('hover changes state with no icon', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        showIcon: false,
        triggerText: "Tooltip"
      }));
      var trigger = wrapper.find('.bx--tooltip__trigger');
      trigger.simulate('mouseover');
      expect(wrapper.state().open).toEqual(true);
      trigger.simulate('mouseout');
      expect(wrapper.state().open).toEqual(false);
    });
    it('focus/blur changes state with no icon', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        showIcon: false,
        triggerText: "Tooltip"
      }));
      var trigger = wrapper.find('.bx--tooltip__trigger');
      trigger.simulate('focus');
      expect(wrapper.state().open).toEqual(true);
      trigger.simulate('blur');
      expect(wrapper.state().open).toEqual(false);
    });
    it('hover changes state with custom icon', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('mouseover');
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('mouseout');
      expect(wrapper.state().open).toEqual(false);
    });
    it('click changes state when clickToOpen is set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('click');
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('click');
      expect(wrapper.state().open).toEqual(false);
    });
    it('click changes state when clickToOpen and custom icon are set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('click');
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('click');
      expect(wrapper.state().open).toEqual(false);
    });
    it('hover does not change state when clickToOpen is set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('mouseover');
      expect(wrapper.state().open).toEqual(false);
      icon.simulate('mouseout');
      expect(wrapper.state().open).toEqual(false);
    });
    it('hover does not change state when clickToOpen and custom icon are set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('mouseover');
      expect(wrapper.state().open).toEqual(false);
      icon.simulate('mouseout');
      expect(wrapper.state().open).toEqual(false);
    });
    it('Enter key press changes state when clickToOpen is set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('keyDown', {
        which: 'Enter'
      });
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('keyDown', {
        key: 13
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('Enter key press changes state when clickToOpen and custom icon are set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('keyDown', {
        which: 'Enter'
      });
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('keyDown', {
        key: 13
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('Space key press changes state when clickToOpen is set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('keyDown', {
        which: ' '
      });
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('keyDown', {
        key: 32
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('Space key press changes state when clickToOpen and custom icon are set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('keyDown', {
        which: ' '
      });
      expect(wrapper.state().open).toEqual(true);
      icon.simulate('keyDown', {
        key: 32
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('A different key press does not change state', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find(Icon);
      icon.simulate('keyDown', {
        which: 'x'
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('A different key press does not change state when custom icon is set', function () {
      var wrapper = mount(React.createElement(Tooltip, {
        renderIcon: React.forwardRef(function (props, ref) {
          return React.createElement("div", {
            ref: ref
          });
        }),
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      var icon = wrapper.find('.bx--tooltip__custom-icon');
      icon.simulate('keyDown', {
        which: 'x'
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('should be in a closed state after handleOutsideClick() is invoked', function () {
      var rootWrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      expect(rootWrapper.state().open).toEqual(false);
      rootWrapper.setState({
        open: true
      });
      rootWrapper.instance().handleClickOutside();
      expect(rootWrapper.state().open).toEqual(false);
    });
    it('prop.open change should update open state', function () {
      var rootWrapper = mount(React.createElement(Tooltip, {
        open: false,
        triggerText: "Tooltip"
      }));
      expect(rootWrapper.state().open).toEqual(false);
      rootWrapper.setProps({
        open: true,
        triggerText: 'Tooltip'
      });
      expect(rootWrapper.state().open).toEqual(true);
    });
    it('should avoid change the open state upon setting props, unless there the value actually changes', function () {
      var rootWrapper = shallow(React.createElement(Tooltip, null));
      rootWrapper.setProps({
        open: true
      });
      rootWrapper.setState({
        open: false
      });
      rootWrapper.setProps({
        open: true
      });
      expect(rootWrapper.state().open).toEqual(false);
    });
  });
  describe('getTriggerPosition', function () {
    it('sets triggerPosition when triggerEl is set', function () {
      var rootWrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      rootWrapper.setState({
        triggerPosition: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      });
      rootWrapper.instance().getTriggerPosition();
      expect(rootWrapper.state().triggerPosition).not.toEqual({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
    it('does not set triggerPosition when triggerEl is not set', function () {
      var rootWrapper = mount(React.createElement(Tooltip, {
        clickToOpen: true,
        triggerText: "Tooltip"
      }));
      rootWrapper.setState({
        triggerPosition: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      });
      delete rootWrapper.instance().triggerEl;
      rootWrapper.instance().getTriggerPosition();
      expect(rootWrapper.state().triggerPosition).toEqual({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  });
});