function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import Slider from '../Slider';
import SliderSkeleton from '../Slider/Slider.Skeleton';

var props = function props() {
  return {
    name: text('Form item name (name)', ''),
    inputType: text('The form element type (inputType)', ''),
    ariaLabelInput: text('The ARIA label for the <input> (ariaLabelInput)', ''),
    disabled: boolean('Disabled (disabled)', false),
    light: boolean('Light variant (light)', false),
    hideTextInput: boolean('Without text input (hideTextInput)', false),
    min: number('The minimum value (min)', 0),
    max: number('The maximum value (max)', 100),
    step: number('The step (step)', 1),
    stepMuliplier: number('The step factor for Shift+arrow keys (stepMuliplier)', 4),
    labelText: text('Label text (labelText)', 'Slider Label'),
    minLabel: text('Label for minimum value (minLabel)', ''),
    maxLabel: text('Label for maximum value (maxLabel)', ''),
    onChange: action('onChange')
  };
};

storiesOf('Slider', module).addDecorator(withKnobs).add('default', withInfo({
  text: "\n        Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Slider, _extends({
    id: "slider",
    value: 50
  }, props())));
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(SliderSkeleton, null));
}));