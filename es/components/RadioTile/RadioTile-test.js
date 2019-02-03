function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import RadioButton from '../RadioButton';
import { mount } from 'enzyme';

var render = function render(props) {
  return mount(React.createElement(RadioButton, _extends({}, props, {
    className: "extra-class",
    name: "test-name",
    value: "test-value",
    labelText: "testlabel"
  })));
};

describe('RadioButton', function () {
  describe('renders as expected', function () {
    var wrapper = render({
      checked: true
    });
    var input = wrapper.find('input');
    var label = wrapper.find('label');
    var div = wrapper.find('div');
    describe('input', function () {
      it('is of type radio', function () {
        expect(input.props().type).toEqual('radio');
      });
      it('has the expected class', function () {
        expect(input.hasClass('bx--radio-button')).toEqual(true);
      });
      it('has a unique id set by default', function () {
        expect(input.props().id).toBeDefined();
      });
      it('should have checked set when checked is passed', function () {
        wrapper.setProps({
          checked: true
        });
        expect(input.props().checked).toEqual(true);
      });
      it('should set the name prop as expected', function () {
        expect(input.props().name).toEqual('test-name');
      });
    });
    describe('label', function () {
      it('should set htmlFor', function () {
        expect(label.props().htmlFor).toEqual(input.props().id);
      });
      it('should set the correct class', function () {
        expect(label.props().className).toEqual('bx--radio-button__label');
      });
      it('should render a span with the correct class', function () {
        var span = label.find('span');
        expect(span.hasClass('bx--radio-button__appearance')).toEqual(true);
      });
      it('should render label text', function () {
        wrapper.setProps({
          labelText: 'test label text'
        });
        expect(label.text()).toMatch(/test label text/);
      });
      it('should not have the className when no class is passed through props', function () {
        expect(label.hasClass(label.props.className)).toEqual(false);
      });
      it('should have the className passed through props', function () {
        var label = render({
          className: 'extra-class'
        });
        expect(label.hasClass('extra-class')).toEqual(true);
      });
    });
    describe('wrapper', function () {
      it('should have the correct class', function () {
        expect(div.hasClass('radioButtonWrapper')).toEqual(true);
      });
      it('should have extra classes applied', function () {
        expect(div.hasClass('extra-class')).toEqual(true);
      });
    });
  });
  it('should set defaultChecked as expected', function () {
    var wrapper = render({
      defaultChecked: true
    });

    var input = function input() {
      return wrapper.find('input');
    };

    expect(input().props().defaultChecked).toEqual(true);
    wrapper.setProps({
      defaultChecked: false
    });
    expect(input().props().defaultChecked).toEqual(false);
  });
  it('should set id if one is passed in', function () {
    var wrapper = render({
      id: 'unique-id'
    });
    var input = wrapper.find('input');
    expect(input.props().id).toEqual('unique-id');
  });
  describe('events', function () {
    it('should invoke onChange with expected arguments', function () {
      var onChange = jest.fn();
      var wrapper = render({
        onChange: onChange
      });
      var input = wrapper.find('input');
      var inputElement = input.instance();
      inputElement.checked = true;
      wrapper.find('input').simulate('change');
      var call = onChange.mock.calls[0];
      expect(call[0]).toEqual('test-value');
      expect(call[1]).toEqual('test-name');
      expect(call[2].target).toBe(inputElement);
    });
  });
});