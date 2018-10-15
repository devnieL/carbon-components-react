function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, array, boolean, number, select, text } from '@storybook/addon-knobs';
import FileUploader, { FileUploaderButton } from '../FileUploader';
import FileUploaderSkeleton from '../FileUploader/FileUploader.Skeleton';
import Button from '../Button';
var buttonKinds = {
  primary: 'Primary (primary)',
  secondary: 'Secondary (secondary)',
  danger: 'Danger (danger)',
  ghost: 'Ghost (ghost)',
  'danger--primary': 'Danger Primary (danger--primary)',
  tertiary: 'Tertiary (tertiary)'
};
var filenameStatuses = {
  edit: 'Edit (edit)',
  complete: 'Complete (complete)',
  uploading: 'Uploading (uploading)'
};
var props = {
  fileUploaderButton: function fileUploaderButton() {
    var buttonKind = select('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: text('Label text (labelText)', 'Add files'),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: boolean('Prevent the label from being replaced with file selected file (disableLabelChanges)', false),
      role: text('ARIA role of the button (role)', ''),
      tabIndex: number('Tab index (tabIndex)', -1),
      onChange: action('onChange')
    };
  },
  fileUploader: function fileUploader() {
    return {
      labelTitle: text('The label title (labelTitle)', 'Upload'),
      labelDescription: text('The label description (labelDescription)', 'only .jpg files at 500mb or less'),
      buttonLabel: text('The button label (buttonLabel)', 'Add files'),
      filenameStatus: select('Status for file name (filenameStatus)', filenameStatuses, 'edit'),
      accept: array('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true)
    };
  }
};
storiesOf('FileUploader', module).addDecorator(withKnobs).add('FileUploaderButton', withInfo({
  text: "\n        The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.\n      "
})(function () {
  return React.createElement(FileUploaderButton, props.fileUploaderButton());
})).add('FileUploader', withInfo({
  text: "\n        The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').\n      "
})(function () {
  var fileUploader;
  return React.createElement("div", {
    className: "bx--file__container"
  }, React.createElement(FileUploader, _extends({}, props.fileUploader(), {
    ref: function ref(node) {
      return fileUploader = node;
    }
  })), React.createElement(Button, {
    kind: "secondary",
    small: true,
    style: {
      marginTop: '1rem'
    },
    onClick: function onClick() {
      fileUploader.clearFiles();
    }
  }, "Clear File"));
})).add('skeleton', withInfo({
  text: "\nPlaceholder skeleton state to use when content is loading.\n"
})(function () {
  return React.createElement("div", {
    style: {
      width: '500px'
    }
  }, React.createElement(FileUploaderSkeleton, null));
}));