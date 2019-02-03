"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Footer = _interopRequireDefault(require("../Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var props = function props() {
  return {
    className: (0, _addonKnobs.text)('CSS class name (className)', 'some-class'),
    labelOne: (0, _addonKnobs.text)('Label in the 1st item (labelOne)', 'Need Help?'),
    linkTextOne: (0, _addonKnobs.text)('Link text in the 1st item (linkTextOne)', 'Contact Bluemix Sales'),
    linkHrefOne: (0, _addonKnobs.text)('Link href in the 1st item (linkHrefOne)', 'www.google.com'),
    labelTwo: (0, _addonKnobs.text)('Label in the 1st item (labelTwo)', 'Estimate Monthly Cost'),
    linkTextTwo: (0, _addonKnobs.text)('Label in the 1st item (linkTextTwo)', 'Cost Calculator'),
    linkHrefTwo: (0, _addonKnobs.text)('Link href in the 2nd item (linkHrefTwo)', 'www.google.com'),
    buttonText: (0, _addonKnobs.text)('Button text (buttonText)', 'Create'),
    onClick: (0, _addonActions.action)('onClick')
  };
};

(0, _react2.storiesOf)('Footer', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Footer.default, props(), (0, _addonKnobs.text)('Footer text', ''));
}, {
  info: {
    text: 'Footer is used on configuration screens.'
  }
});