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
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { iconAddSolid, iconSearch } from 'carbon-icons';
import { AddFilled16, Search16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
var icons = {
  None: 'None',
  'Add with filled circle (iconAddSolid from `carbon-icons`)': componentsX ? 'AddFilled16' : 'iconAddSolid',
  'Search (iconSearch from `carbon-icons`)': componentsX ? 'Search16' : 'iconSearch'
};
var iconMap = {
  iconAddSolid: iconAddSolid,
  iconSearch: iconSearch,
  AddFilled16: React.createElement(AddFilled16, {
    className: "".concat(prefix, "--btn__icon")
  }),
  Search16: React.createElement(Search16, {
    className: "".concat(prefix, "--btn__icon")
  })
};
var kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Danger primary button (danger--primary)': 'danger--primary',
  'Ghost button (ghost)': 'ghost'
};
var props = {
  regular: function regular() {
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      small: boolean('Small (small)', false),
      icon: iconMap[select('Icon (icon)', icons, 'none')],
      onClick: action('onClick'),
      onFocus: action('onFocus')
    };
  },
  set: function set() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      small: boolean('Small (small)', false),
      icon: iconMap[select('Icon (icon)', icons, 'none')],
      onClick: action('onClick'),
      onFocus: action('onFocus')
    };
  }
};
storiesOf('Buttons', module).addDecorator(withKnobs).add('Default', function () {
  var regularProps = props.regular();
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(Button, _extends({}, regularProps, {
    className: "some-class"
  }), "Button"), "\xA0", React.createElement(Button, _extends({}, regularProps, {
    href: "#",
    className: "some-class"
  }), "Link"), "\xA0");
}, {
  info: {
    text: "\n          Buttons are used to initialize an action, either in the background or\n          foreground of an experience.\n\n          There are several kinds of buttons.\n\n          Primary buttons should be used for the principle call to action\n          on the page.\n\n          Secondary buttons should be used for secondary actions on each page.\n\n          Danger buttons should be used for a negative action (such as Delete) on the page.\n\n          Modify the behavior of the button by changing its event properties.\n\n          Small buttons may be used when there is not enough space for a\n          regular sized button. This issue is most found in tables. Small button should have three words\n          or less.\n\n          When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are\n          always paired with text.\n        "
  }
}).add('Sets of Buttons', function () {
  var setProps = props.set();
  return React.createElement("div", null, React.createElement(Button, _extends({
    kind: "secondary"
  }, setProps), "Secondary button"), React.createElement(Button, _extends({
    kind: "primary"
  }, setProps), "Primary button"));
}, {
  info: {
    text: "\n          When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.\n        "
  }
}).add('skeleton', function () {
  return React.createElement("div", null, React.createElement(ButtonSkeleton, null), "\xA0", React.createElement(ButtonSkeleton, {
    href: "#"
  }), "\xA0", React.createElement(ButtonSkeleton, {
    small: true
  }));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n        "
  }
});