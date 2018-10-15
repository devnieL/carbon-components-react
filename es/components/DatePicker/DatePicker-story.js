function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import DatePicker from '../DatePicker';
import DatePickerInput from '../DatePickerInput';
import DatePickerSkeleton from '../DatePicker/DatePicker.Skeleton';
import WithState from '../../tools/withState'; // Datepickers last argument contains an instance of flatpickr
// and will cause action logger to enter an infinite loop. Just don't log that argument

var datePickerOnChangeActions = decorateAction([function (args) {
  return args.slice(0, args.length - 2);
}]);
var patterns = {
  'd{1,2}/d{4}': 'Short (d{1,2}/d{4})',
  'd{1,2}/d{1,2}/d{4}': 'Regular (d{1,2}/d{1,2}/d{4})'
};
var props = {
  datePicker: function datePicker() {
    return {
      id: 'date-picker',
      light: boolean('Light variant (light in <DatePicker>)', false),
      onChange: datePickerOnChangeActions('onPickerChange')
    };
  },
  datePickerInput: function datePickerInput() {
    return {
      id: 'date-picker-input-id',
      className: 'some-class',
      labelText: text('Label text (labelText in <DatePickerInput>)', 'Date Picker label'),
      pattern: select('The date format (pattern in <DatePickerInput>)', patterns, 'd{1,2}/d{4}'),
      placeholder: text('Placeholder text (placeholder in <DatePickerInput>)', 'mm/dd/yyyy'),
      disabled: boolean('Disabled (disabled in <DatePickerInput>)', false),
      invalid: boolean('Show form validation UI (invalid in <DatePickerInput>)', false),
      invalidText: text('Form validation UI content (invalidText in <DatePickerInput>)', 'A valid value is required'),
      onClick: action('onClick'),
      onChange: action('onInputChange')
    };
  }
};
storiesOf('DatePicker', module).addDecorator(withKnobs).add('simple', withInfo({
  text: 'A simple Date Picker consists of an input field and no calendar.'
})(function () {
  return React.createElement(DatePicker, _extends({}, props.datePicker(), {
    short: boolean('Use shorter width (short in <DatePicker>)', false),
    datePickerType: "simple"
  }), React.createElement(DatePickerInput, props.datePickerInput()));
})).add('single with calendar', withInfo({
  text: "\n        A single Date Picker consists of an input field and a calendar.\n      "
})(function () {
  return React.createElement(DatePicker, _extends({}, props.datePicker(), {
    datePickerType: "single",
    dateFormat: text('The date format (dateFormat in <DatePicker>)', 'm/d/Y')
  }), React.createElement(DatePickerInput, _extends({}, props.datePickerInput(), {
    iconDescription: text('Icon description (iconDescription in <DatePickerInput>)', 'Icon description')
  })));
})).add('range with calendar', withInfo({
  text: "\n        A range Date Picker consists of two input fields and a calendar.\n      "
})(function () {
  var datePickerInputProps = props.datePickerInput();
  return React.createElement(DatePicker, _extends({}, props.datePicker(), {
    datePickerType: "range",
    dateFormat: text('The date format (dateFormat in <DatePicker>)', 'm/d/Y'),
    iconDescription: text('Icon description (iconDescription in <DatePicker>)', 'Icon description')
  }), React.createElement(DatePickerInput, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-start"
  })), React.createElement(DatePickerInput, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-end"
  })));
})).add('range with calendar and min/max dates', withInfo({
  text: "\n        A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.\n      "
})(function () {
  var datePickerInputProps = props.datePicker();
  return React.createElement(DatePicker, _extends({}, props.datePicker(), {
    minDate: "1/10/2020",
    maxDate: "1/20/2020",
    datePickerType: "range",
    dateFormat: "m/d/Y"
  }), React.createElement(DatePickerInput, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id"
  })), React.createElement(DatePickerInput, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-2"
  })));
})).add('fully controlled', withInfo({
  text: "\n        If your application needs to control the value of the date picker and\n        be notified of any changes.\n      "
})(function () {
  return React.createElement(WithState, {
    initialState: {
      date: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement(React.Fragment, null, React.createElement(DatePicker, {
      datePickerType: "single",
      dateFormat: "m/d/Y",
      value: state.date,
      onChange: function onChange(eventOrDates) {
        var value = eventOrDates.target ? eventOrDates.target.value : eventOrDates[0];
        setState({
          date: value
        });
      }
    }, React.createElement(DatePickerInput, _extends({}, props.datePickerInput(), {
      id: "date-picker-input-id"
    }))), React.createElement("button", {
      onClick: function onClick() {
        return setState({
          date: '01/01/2011'
        });
      }
    }, "Click me to set to 01/01/2011"));
  });
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n        "
})(function () {
  return React.createElement(DatePickerSkeleton, {
    range: true
  });
}));