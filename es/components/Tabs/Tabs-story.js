function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';
var props = {
  tabs: function tabs() {
    return {
      className: 'some-class',
      selected: number('The index of the selected tab (selected in <Tabs>)', 1),
      triggerHref: text('The href of trigger button for narrow mode (triggerHref in <Tabs>)', '#'),
      role: text('ARIA role (role in <Tabs>)', 'navigation'),
      iconDescription: text('The description of the trigger icon for narrow mode (iconDescription in <Tabs>)', 'show menu options'),
      onClick: action('onClick'),
      onKeyDown: action('onKeyDown'),
      onSelectionChange: action('onSelectionChange')
    };
  },
  tab: function tab() {
    return {
      className: 'another-class',
      href: text('The href for tab (href in <Tab>)', '#'),
      role: text('ARIA role (role in <Tab>)', 'presentation'),
      tabIndex: number('Tab index (tabIndex in <Tab>)', 0),
      onClick: action('onClick'),
      onKeyDown: action('onKeyDown')
    };
  }
};
storiesOf('Tabs', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(Tabs, props.tabs(), React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 1"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 2"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 3"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), React.createElement(Tab, _extends({}, props.tab(), {
    label: "Tab label 4"
  }), React.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}, {
  info: {
    text: "\n            Tabs are used to quickly navigate between views within the same context. Create individual\n            Tab components for each item in the Tabs list.\n          "
  }
}).add('skeleton', function () {
  return React.createElement(TabsSkeleton, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});