function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Loading from '../Loading';

var props = function props() {
  return {
    active: boolean('Active (active)', true),
    withOverlay: boolean('With overlay (withOverlay)', false),
    small: boolean('Small (small)', false)
  };
};

storiesOf('Loading', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Loading spinners are used when retrieving data or performing slow computations,\n        and help to notify users that loading is underway. The 'active' property is true by default;\n        set to false to end the animation.\n      "
})(function () {
  return React.createElement(Loading, _extends({}, props(), {
    className: 'some-class'
  }));
}));