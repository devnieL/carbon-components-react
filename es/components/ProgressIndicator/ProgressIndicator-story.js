/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ProgressIndicator, ProgressStep } from '../ProgressIndicator';
import ProgressIndicatorSkeleton from '../ProgressIndicator/ProgressIndicator.Skeleton';
storiesOf('Progress Indicator', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(ProgressIndicator, {
    currentIndex: number('Current progress (currentIndex)', 3)
  }, React.createElement(ProgressStep, {
    label: "First step",
    description: "Step 1: Getting Started with Node.js"
  }), React.createElement(ProgressStep, {
    label: "Second step",
    description: "Step 2: Getting Started with Node.js"
  }), React.createElement(ProgressStep, {
    label: "Third step",
    description: "Step 3: Getting Started with Node.js"
  }), React.createElement(ProgressStep, {
    label: "Fourth step",
    description: "Step 4: Getting Started with Node.js"
  }), React.createElement(ProgressStep, {
    label: "Fifth step",
    description: "Step 5: Getting Started with Node.js"
  }));
}, {
  info: {
    text: "\n            For React usage, ProgressIndicator holds the currentIndex state to indicate which ProgerssStep is the current step. The ProgressIndicator component should always be used with ProgressStep components as its children. Changing currentIndex prop will automatically set the ProgressStep components props (complete, incomplete, current).\n            For general usage, Progress Indicators display steps in a process. It should indicate when steps have been complete, the active step,\n            and the steps to come.\n          "
  }
}).add('skeleton', function () {
  return React.createElement(ProgressIndicatorSkeleton, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n        "
  }
});