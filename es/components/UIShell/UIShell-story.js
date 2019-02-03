/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Notification16, User16 } from '@carbon/icons-react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import { Content, Header, HeaderMenuButton, HeaderName, HeaderNavigation, HeaderMenu, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, SkipToContent, SideNav, SideNavHeader, SideNavDetails, SideNavSwitcher, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from '../UIShell';

var Fade16 = function Fade16() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
  }));
};

var StoryContent = function StoryContent() {
  var content = Array.from({
    length: 10
  }, function (_, i) {
    return React.createElement("div", {
      key: i
    }, React.createElement("h2", null, "Title"), React.createElement("p", null, "Elit dolores reiciendis sit id consequuntur facere! Recusandae rerum sequi possimus soluta sit Facilis quidem minima sit ipsa consequuntur Maiores facilis dolorum suscipit velit soluta unde. Aliquam consequuntur cum eum"));
  });
  return React.createElement(Content, {
    id: "main-content"
  }, content);
}; // Ideally, we'd have a <UIShell> component that could help make using these
// components much simpler. In the interim, we're going to create presentational
// components and try and piece them together to figure out what are standard
// usage patterns for each to see what kind of component API we should expose


storiesOf('[Experimental] UI Shell', module).add('Header', withReadme(readme, function () {
  return React.createElement(Header, null, React.createElement(HeaderMenuButton, {
    "aria-label": "Open menu",
    onClick: action('Menu clicked')
  }), React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), React.createElement(HeaderNavigation, {
    "aria-label": "IBM [Platform]"
  }, React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Catalog"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Docs"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Support"), React.createElement(HeaderMenu, {
    "aria-label": "Manage"
  }, React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 1"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 2"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 3"))), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: action('notification click')
  }, React.createElement(Notification16, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "Profile",
    onClick: action('user click')
  }, React.createElement(User16, null))));
}), {
  info: {
    text: '[Experimental] UI Shell'
  }
}).add('SideNav', withReadme(readme, function () {
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
    "aria-label": "Open menu",
    onClick: action('Menu clicked')
  }), React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), React.createElement(HeaderNavigation, {
    "aria-label": "IBM [Platform]"
  }, React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Catalog"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Docs"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Support"), React.createElement(HeaderMenu, {
    "aria-label": "Manage"
  }, React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 1"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 2"), React.createElement(HeaderMenuItem, {
    href: "#"
  }, "Link 3"))), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: action('notification click')
  }, React.createElement(Notification16, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "Profile",
    onClick: action('user click')
  }, React.createElement(User16, null)))), React.createElement(SideNav, {
    "aria-label": "Side navigation"
  }, React.createElement(SideNavHeader, {
    icon: React.createElement(Fade16, null)
  }, React.createElement(SideNavDetails, {
    title: "Side navigation title"
  }, React.createElement(SideNavSwitcher, {
    labelText: "Switcher",
    onChange: action('switcher changed'),
    options: ['Option 1', 'Option 2', 'Option 3']
  }))), React.createElement(SideNavItems, null, React.createElement(SideNavLink, {
    icon: React.createElement(Fade16, null),
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenu, {
    defaultExpanded: true,
    icon: React.createElement(Fade16, null),
    isActive: true,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")))), React.createElement(StoryContent, null));
}));