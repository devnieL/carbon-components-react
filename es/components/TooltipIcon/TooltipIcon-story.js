/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Filter16 } from '@carbon/icons-react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import TooltipIcon from '../TooltipIcon';
import { componentsX } from '../../internal/FeatureFlags';
var directions = {
  'Bottom (bottom)': 'bottom',
  'Top (top)': 'top'
};

var props = function props() {
  return {
    direction: select('Tooltip direction (direction)', directions, 'bottom'),
    tooltipText: text('Tooltip content (tooltipText)', 'Filter')
  };
};

storiesOf('TooltipIcon', module).addDecorator(withKnobs).add('default', function () {
  return React.createElement(TooltipIcon, props(), componentsX ? React.createElement(Filter16, null) : React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12"
  }, React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }))));
}, {
  info: {
    text: "\n            Tooltip Icon\n          "
  }
});