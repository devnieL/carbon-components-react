import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormItem from './FormItem';
import NumberInput from '../NumberInput';
storiesOf('FormItem', module).add('Default', withInfo({
  text: 'Form item.'
})(function () {
  return React.createElement(FormItem, null, React.createElement(NumberInput, {
    id: "number-input-1"
  }));
}));