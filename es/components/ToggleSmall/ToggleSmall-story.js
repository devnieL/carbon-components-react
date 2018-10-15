function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import ToggleSmall from '../ToggleSmall';
import ToggleSmallSkeleton from '../ToggleSmall/ToggleSmall.Skeleton';

var toggleProps = function toggleProps() {
  return {
    className: 'some-class',
    toggled: boolean('Toggled (toggled)', false),
    ariaLabel: text('ARIA label (ariaLabel)', 'Label Name'),
    onChange: action('onChange'),
    onToggle: action('onToggle')
  };
};

storiesOf('ToggleSmall', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Toggles are controls that are used to quickly switch between two possible states. The example below shows\n        an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n        Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n        prop will only set the value initially. Small toggles may be used when there is not enough space for a regular sized toggle. This issue is most\n        commonly found in tables.\n      "
})(function () {
  return React.createElement(ToggleSmall, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement(ToggleSmallSkeleton, null);
}));