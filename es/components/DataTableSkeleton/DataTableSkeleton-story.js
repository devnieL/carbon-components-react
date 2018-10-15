/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import DataTableSkeleton from '../DataTableSkeleton';

var props = function props() {
  return {
    zebra: boolean('Use zebra stripe (zebra)', false),
    compact: boolean('Compact variant (compact)', false)
  };
};

storiesOf('DataTableSkeleton', module).addDecorator(withKnobs).add('default', withInfo({
  text: "\n        Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n        This example shows a skeleton state for a data table.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(DataTableSkeleton, props()), React.createElement("br", null));
}));