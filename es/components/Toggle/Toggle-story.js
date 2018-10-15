function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Toggle from '../Toggle';
import ToggleSkeleton from '../Toggle/Toggle.Skeleton';

var toggleProps = function toggleProps() {
  return {
    className: 'some-class',
    toggled: boolean('Toggled (toggled)', false),
    labelA: text('Label for untoggled state (labelA)', 'Off'),
    labelB: text('Label for toggled state (labelB)', 'On'),
    onChange: action('onChange'),
    onToggle: action('onToggle')
  };
};

storiesOf('Toggle', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Toggles are controls that are used to quickly switch between two possible states. The example below shows\n        an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n        Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n        prop will only set the value initially.\n      "
})(function () {
  return React.createElement(Toggle, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement(ToggleSkeleton, null);
}));