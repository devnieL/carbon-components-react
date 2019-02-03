function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
export var ProgressStep = function ProgressStep(_ref) {
  var _classnames;

  var props = _extends({}, _ref);

  var label = props.label,
      description = props.description,
      className = props.className,
      current = props.current,
      complete = props.complete;
  var classes = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--progress-step"), true), _defineProperty(_classnames, "".concat(prefix, "--progress-step--current"), current), _defineProperty(_classnames, "".concat(prefix, "--progress-step--complete"), complete), _defineProperty(_classnames, "".concat(prefix, "--progress-step--incomplete"), !complete && !current), _defineProperty(_classnames, className, className), _classnames));
  var currentSvg = current && React.createElement("svg", null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), React.createElement("title", null, description));
  var completeSvg = complete && React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, React.createElement("title", null, description), React.createElement("g", {
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
  }), React.createElement("path", {
    d: "M11.646 5.146l.708.708-5.604 5.603-3.104-3.103.708-.708 2.396 2.397z"
  })));
  var incompleteSvg = !complete && React.createElement("svg", null, React.createElement("title", null, description), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12"
  }));
  return React.createElement("li", {
    className: classes
  }, currentSvg || completeSvg || incompleteSvg, React.createElement("p", {
    className: "".concat(prefix, "--progress-label")
  }, label), React.createElement("span", {
    className: "".concat(prefix, "--progress-line")
  }));
};
ProgressStep.propTypes = {
  /**
   * Provide the label for the <ProgressStep>
   */
  label: PropTypes.node.isRequired,

  /**
   * Provide an optional className to be applied to the containing <li> node
   */
  className: PropTypes.string,

  /**
   * Specify whether the step is the current step
   */
  current: PropTypes.bool,

  /**
   * Specify whether the step has been completed
   */
  complete: PropTypes.bool,

  /**
   * Provide a description for the <ProgressStep>
   */
  description: PropTypes.string
};
export var ProgressIndicator =
/*#__PURE__*/
function (_Component) {
  _inherits(ProgressIndicator, _Component);

  function ProgressIndicator() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProgressIndicator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProgressIndicator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSteps", function () {
      return React.Children.map(_this.props.children, function (child, index) {
        if (index === _this.state.currentIndex) {
          return React.cloneElement(child, {
            current: true
          });
        } else if (index < _this.state.currentIndex) {
          return React.cloneElement(child, {
            complete: true
          });
        } else if (index > _this.state.currentIndex) {
          return React.cloneElement(child, {
            complete: false
          });
        }

        return null;
      });
    });

    return _this;
  }

  _createClass(ProgressIndicator, [{
    key: "render",
    value: function render() {
      var _classnames2;

      var _this$props = this.props,
          className = _this$props.className,
          currentIndex = _this$props.currentIndex,
          other = _objectWithoutProperties(_this$props, ["className", "currentIndex"]); // eslint-disable-line no-unused-vars


      var classes = classnames((_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefix, "--progress"), true), _defineProperty(_classnames2, className, className), _classnames2));
      return React.createElement("ul", _extends({
        className: classes
      }, other), this.renderSteps());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var currentIndex = _ref2.currentIndex;
      var prevCurrentIndex = state.prevCurrentIndex;
      return prevCurrentIndex === currentIndex ? null : {
        currentIndex: currentIndex,
        prevCurrentIndex: currentIndex
      };
    }
  }]);

  return ProgressIndicator;
}(Component);

_defineProperty(ProgressIndicator, "propTypes", {
  /**
   * Provide <ProgressStep> components to be rendered in the
   * <ProgressIndicator>
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Optionally specify the current step array index
   */
  currentIndex: PropTypes.number
});

_defineProperty(ProgressIndicator, "defaultProps", {
  currentIndex: 0
});