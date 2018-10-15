/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
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

storiesOf('Breadcrumb', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.\n      "
})(function () {
  return React.createElement(Breadcrumb, props(), React.createElement(BreadcrumbItem, null, React.createElement("a", {
    href: "/#"
  }, "Breadcrumb 1")), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 2"), React.createElement(BreadcrumbItem, {
    href: "#"
  }, "Breadcrumb 3"));
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n        "
})(function () {
  return React.createElement(BreadcrumbSkeleton, null);
}));