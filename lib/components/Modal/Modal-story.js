"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _Modal = _interopRequireDefault(require("../Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    className: 'some-class',
    open: (0, _addonKnobs.boolean)('Open (open)', true),
    passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
    danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
    shouldSubmitOnEnter: (0, _addonKnobs.boolean)('Enter key to submit (shouldSubmitOnEnter)', false),
    modalHeading: (0, _addonKnobs.text)('Modal heading (modalHeading)', 'Modal heading'),
    modalLabel: (0, _addonKnobs.text)('Optional label (modalLabel)', 'Label'),
    modalAriaLabel: (0, _addonKnobs.text)('ARIA label (modalAriaLabel)', ''),
    primaryButtonText: (0, _addonKnobs.text)('Primary button text (primaryButtonText)', 'Primary Button'),
    secondaryButtonText: (0, _addonKnobs.text)('Secondary button text (secondaryButtonText)', 'Secondary Button'),
    iconDescription: (0, _addonKnobs.text)('Close icon description (iconDescription)', 'Close the modal'),
    onBlur: (0, _addonActions.action)('onBlur'),
    onClick: (0, _addonActions.action)('onClick'),
    onFocus: (0, _addonActions.action)('onFocus'),
    onRequestClose: (0, _addonActions.action)('onRequestClose'),
    onRequestSubmit: (0, _addonActions.action)('onRequestSubmit'),
    onSecondarySubmit: (0, _addonActions.action)('onSecondarySubmit')
  };
};

(0, _react2.storiesOf)('Modal', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n        Use the Modal Wrapper component to encapsulate your Modal within a button.\n      "
})(function () {
  return _react.default.createElement(_Modal.default, props(), _react.default.createElement("p", {
    className: "bx--modal-content__text"
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}));