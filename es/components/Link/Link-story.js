/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import Link from '../Link';

var props = function props() {
  return {
    className: 'some-class',
    href: text('The link href (href)', '#'),
    onClick: function (handler) {
      return function (evt) {
        evt.preventDefault(); // Prevent link from being followed for demo purpose

        handler(evt);
      };
    }(action('onClick'))
  };
};

storiesOf('Link', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.\n        For anything else, especially things that change data, you should be using a button.\n      "
})(function () {
  return React.createElement(Link, props(), "Link");
}));