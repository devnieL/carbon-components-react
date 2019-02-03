"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('OverflowMenu', function () {
  describe('Renders as expected', function () {
    var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, {
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    }), _react.default.createElement("div", {
      className: "test-child"
    })));
    var menu = rootWrapper.childAt(0);
    var icon = menu.find(_Icon.default);
    it('should render an Icon', function () {
      expect(icon.length).toBe(1);
      expect(icon.hasClass('bx--overflow-menu__icon')).toEqual(true);
    });
    it('should use correct overflow-menu icon', function () {
      expect(icon.props().icon).toEqual(_carbonIcons.iconOverflowMenu);
    });
    it('has the expected classes', function () {
      expect(menu.hasClass('bx--overflow-menu')).toBe(true);
      expect(menu.hasClass('bx--overflow-menu--open')).not.toBe(true);
    });
    it('should not render a ul unless menu is open', function () {
      var list = menu.find('ul');
      expect(list.length).toEqual(0);
    });
    it('should add extra classes that are passed via className', function () {
      expect(menu.hasClass('extra-class')).toEqual(true);
    });
    it('should not render children unless the menu is open', function () {
      expect(menu.find('.test-child').length).toEqual(0);
    });
    it('should set tabIndex if one is passed via props', function () {
      rootWrapper.setProps({
        tabIndex: 2
      });
      expect(rootWrapper.childAt(0).props().tabIndex).toEqual(2);
    });
    it('should set ariaLabel if one is passed via props', function () {
      rootWrapper.setProps({
        ariaLabel: 'test label'
      });
      expect(rootWrapper.childAt(0).props()['aria-label']).toEqual('test label');
    });
    it('should set id if one is passed via props', function () {
      rootWrapper.setProps({
        id: 'uniqueId'
      });
      expect(rootWrapper.childAt(0).props().id).toEqual('uniqueId');
    });
    it('should apply a tabindex to the menu', function () {
      var defaultMenu = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, null, _react.default.createElement("div", null, "Child"))).childAt(0);
      expect(defaultMenu.props().tabIndex).toBe(0);
    });
  });
  describe('open and closed states', function () {
    it('open state should be false by default', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null));
      expect(rootWrapper.state().open).toEqual(false);
      expect(rootWrapper.props().open).toEqual(false);
    });
    it('should render a ul with the appropriate class', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null, _react.default.createElement("div", {
        className: "test-child"
      }), _react.default.createElement("div", {
        className: "test-child"
      })));
      rootWrapper.setState({
        open: true
      });
      rootWrapper.update();
      var list = rootWrapper.find('ul');
      expect(list.length).toEqual(1);
      expect(list.hasClass('bx--overflow-menu-options')).toEqual(true);
    });
    it('should render children as expected', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null, _react.default.createElement("div", {
        className: "test-child"
      }), _react.default.createElement("div", {
        className: "test-child"
      })));
      rootWrapper.setState({
        open: true
      });
      rootWrapper.update();
      expect(rootWrapper.find('.test-child').length).toEqual(2);
    });
    it('should set expected class when state is open', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null));
      var openClass = 'bx--overflow-menu-options--open';
      expect(rootWrapper.find('ul').length).toEqual(0);
      rootWrapper.setState({
        open: true
      });
      rootWrapper.update();
      expect(rootWrapper.find('ul').hasClass(openClass)).not.toEqual(false);
    });
    it('should be in an open state after icon is clicked', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null));
      var menu = rootWrapper.childAt(0);
      var icon = menu.find(_Icon.default);
      icon.simulate('click');
      expect(rootWrapper.state().open).toEqual(true);
    });
    it('should toggle state in response to Enter or Space when the menu is closed', function () {
      var enterKey = 13;
      var spaceKey = 32;
      var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, null));
      var menu = rootWrapper.childAt(0);
      rootWrapper.setState({
        open: false
      });
      menu.simulate('keydown', {
        which: spaceKey
      });
      expect(rootWrapper.state().open).toEqual(true);
      menu.simulate('keydown', {
        which: enterKey
      });
      expect(rootWrapper.state().open).toEqual(true);
    });
    it('should NOT toggle state in response to Enter or Space when the menu is open', function () {
      var enterKey = 13;
      var spaceKey = 32;
      var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, null));
      var menu = rootWrapper.childAt(0);
      rootWrapper.setState({
        open: true
      });
      menu.simulate('keydown', {
        which: spaceKey
      });
      expect(rootWrapper.state().open).toEqual(true);
      menu.simulate('keydown', {
        which: enterKey
      });
      expect(rootWrapper.state().open).toEqual(true);
    }); // Removed until a better solution appears
    //
    // it('should be hidden when it loses focus', () => {
    //   const rootWrapper = mount(
    //     <OverflowMenu className="extra-class">
    //       <div className="test-child"></div>
    //       <div className="test-child"></div>
    //     </OverflowMenu>
    //   );
    //   const menu = rootWrapper.childAt(0);
    //   rootWrapper.setState({ open: true });
    //   menu.simulate('blur');
    //   expect(rootWrapper.state().open).toEqual(false);
    // });

    it('should be in a closed state after handleOutsideClick() is invoked', function () {
      var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, null));
      expect(rootWrapper.state().open).not.toEqual(true);
      rootWrapper.setState({
        open: true
      });
      rootWrapper.props().onClickOutside();
      expect(rootWrapper.state().open).not.toEqual(true);
    });
    it('open state should be controlled by open props', function () {
      var rootWrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null));
      rootWrapper.setProps({
        open: true
      });
      expect(rootWrapper.state().open).toEqual(true);
    });
  });
  describe('customized icon', function () {
    it('renders', function () {
      var rootWrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, {
        className: "extra-class",
        renderIcon: function renderIcon() {
          return _react.default.createElement("div", {
            className: "other"
          }, "Other");
        }
      }, _react.default.createElement("div", {
        className: "test-child"
      }), _react.default.createElement("div", {
        className: "test-child"
      })));
      expect(rootWrapper.find('.bx--overflow-menu__icon')).toHaveLength(0);
      expect(rootWrapper.find('.other')).toHaveLength(1);
    });
  });
  describe('Getting derived state from props', function () {
    it('should change the open state upon change in props', function () {
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenu.default, {
        open: true
      }));
      expect(wrapper.state().open).toEqual(true);
      wrapper.setProps({
        open: false
      });
      expect(wrapper.state().open).toEqual(false);
    });
    it('should avoid change the open state upon setting props, unless there the value actually changes', function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_OverflowMenu.default, null));
      wrapper.setProps({
        open: true
      });
      wrapper.setState({
        open: false
      });
      wrapper.setProps({
        open: true
      });
      expect(wrapper.state().open).toEqual(false);
    });
  });
});