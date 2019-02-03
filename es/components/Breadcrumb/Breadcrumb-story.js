/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';

var props = function props() {
  return {
    className: 'some-class',
    noTrailingSlash: boolean('No trailing slash (noTrailingSlash)', false),
    onClick: action('onClick')
  };
};

storiesOf('Breadcrumb', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(Breadcrumb, props(), React.createElement(BreadcrumbItem, null, React.createElement("a", {
    href: "/#"
  }, "Breadcrumb 1")), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 3"));
}, {
  info: {
    text: "\n          Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.\n        "
  }
}).add('skeleton', function () {
  return React.createElement(BreadcrumbSkeleton, null);
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n          "
  }
});