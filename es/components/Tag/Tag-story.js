function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
var types = typesList.reduce(function (o, type) {
  return _objectSpread({}, o, _defineProperty({}, type, "".concat(type, " (").concat(type, ")")));
}, {});
storiesOf('Tag', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n        The example below shows how the Tag component can be used. Each type has a default message describing the type,\n        but a custom message can also be applied.\n      "
})(function () {
  return React.createElement("div", null, React.createElement(Tag, {
    className: "some-class",
    type: select('Tag type (type)', types, 'experimental')
  }, text('Content (children)', '')));
})).add('skeleton', withInfo({
  text: "\n      Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement("div", null, React.createElement(TagSkeleton, null));
}));