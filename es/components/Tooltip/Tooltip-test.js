import React from 'react';
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