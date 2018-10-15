import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import InlineLoading from '../InlineLoading';

var props = function props() {
  return {
    success: boolean('Loading successful state (success)', false),
    description: text('Loading progress description (description)', 'Loading data...'),
    successDelay: number('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: action('onSuccess')
  };
};

storiesOf('InlineLoading', module).addDecorator(withKnobs).add('Inline loading', withInfo({
  text: "\n        Inline Loading spinners are used when create, updating, or deleting an item.\n        They help notify users that their change is underway. Inline Loading has three states, LOADING, SUCCESS.\n      "
})(function () {
  return React.createElement("div", null, React.createElement(InlineLoading, props()));
}));