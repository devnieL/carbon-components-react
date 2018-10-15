import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';

var props = function props() {
  return {
    className: 'some-class',
    id: 'tj-input',
    label: text('Label (label)', 'Number Input label'),
    min: number('Minimum value (min)', 0),
    max: number('Maximum value (max)', 100),
    value: number('Value (value)', 50),
    step: number('Step of up/down arrow (step)', 10),
    disabled: boolean('Disabled (disabled)', false),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text('Form validation UI content (invalidText)', 'Number is not valid'),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    light: boolean('Light variant (light)', false),
    onChange: action('onChange'),
    onClick: action('onClick'),
    allowEmpty: boolean('Allow empty value (allowEmpty)', false)
  };
};

storiesOf('NumberInput', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.\n        The Number Input component can be passed a starting value, a min, a max, and the step.\n      "
})(function () {
  return React.createElement(NumberInput, props());
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement(NumberInputSkeleton, null);
}));