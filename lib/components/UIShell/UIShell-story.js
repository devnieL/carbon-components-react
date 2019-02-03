"use strict";

var _iconsReact = require("@carbon/icons-react");

var _react = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _react2 = _interopRequireDefault(require("react"));

var _storybookReadme = require("storybook-readme");

var _README = _interopRequireDefault(require("./README.md"));

var _UIShell = require("../UIShell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fade16 = function Fade16() {
  return _react2.default.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, _react2.default.createElement("path", {
    d: "M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
  }));
};

var StoryContent = function StoryContent() {
  var content = Array.from({
    length: 10
  }, function (_, i) {
    return _react2.default.createElement("div", {
      key: i
    }, _react2.default.createElement("h2", null, "Title"), _react2.default.createElement("p", null, "Elit dolores reiciendis sit id consequuntur facere! Recusandae rerum sequi possimus soluta sit Facilis quidem minima sit ipsa consequuntur Maiores facilis dolorum suscipit velit soluta unde. Aliquam consequuntur cum eum"));
  });
  return _react2.default.createElement(_UIShell.Content, {
    id: "main-content"
  }, content);
}; // Ideally, we'd have a <UIShell> component that could help make using these
// components much simpler. In the interim, we're going to create presentational
// components and try and piece them together to figure out what are standard
// usage patterns for each to see what kind of component API we should expose


(0, _react.storiesOf)('[Experimental] UI Shell', module).add('Header', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_UIShell.Header, null, _react2.default.createElement(_UIShell.HeaderMenuButton, {
    "aria-label": "Open menu",
    onClick: (0, _addonActions.action)('Menu clicked')
  }), _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
    "aria-label": "IBM [Platform]"
  }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Catalog"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Docs"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Support"), _react2.default.createElement(_UIShell.HeaderMenu, {
    "aria-label": "Manage"
  }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 3"))), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: (0, _addonActions.action)('notification click')
  }, _react2.default.createElement(_iconsReact.Notification16, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Profile",
    onClick: (0, _addonActions.action)('user click')
  }, _react2.default.createElement(_iconsReact.User16, null))));
}), {
  info: {
    text: '[Experimental] UI Shell'
  }
}).add('SideNav', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
    "aria-label": "Open menu",
    onClick: (0, _addonActions.action)('Menu clicked')
  }), _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
    "aria-label": "IBM [Platform]"
  }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Catalog"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Docs"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Support"), _react2.default.createElement(_UIShell.HeaderMenu, {
    "aria-label": "Manage"
  }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
    href: "#"
  }, "Link 3"))), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: (0, _addonActions.action)('notification click')
  }, _react2.default.createElement(_iconsReact.Notification16, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Profile",
    onClick: (0, _addonActions.action)('user click')
  }, _react2.default.createElement(_iconsReact.User16, null)))), _react2.default.createElement(_UIShell.SideNav, {
    "aria-label": "Side navigation"
  }, _react2.default.createElement(_UIShell.SideNavHeader, {
    icon: _react2.default.createElement(Fade16, null)
  }, _react2.default.createElement(_UIShell.SideNavDetails, {
    title: "Side navigation title"
  }, _react2.default.createElement(_UIShell.SideNavSwitcher, {
    labelText: "Switcher",
    onChange: (0, _addonActions.action)('switcher changed'),
    options: ['Option 1', 'Option 2', 'Option 3']
  }))), _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavLink, {
    icon: _react2.default.createElement(Fade16, null),
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenu, {
    defaultExpanded: true,
    icon: _react2.default.createElement(Fade16, null),
    isActive: true,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")))), _react2.default.createElement(StoryContent, null));
}));