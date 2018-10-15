import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormLabel from './FormLabel';
import Tooltip from '../Tooltip';
var additionalProps = {
  className: 'some-class'
};
storiesOf('FormLabel', module).add('Default', withInfo({
  text: 'Form label.'
})(function () {
  return React.createElement(FormLabel, additionalProps, "Label");
})).add('With tooltip', withInfo({
  text: 'Form label with tooltip.'
})(function () {
  return React.createElement(FormLabel, additionalProps, React.createElement(Tooltip, {
    triggerText: "Label"
  }, "This is the content of the tooltip."));
}));