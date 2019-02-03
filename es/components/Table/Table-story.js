function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../Table';
import TableHead from '../TableHead';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableRow from '../TableRow';
import TableRowExpanded from '../TableRowExpanded';
import TableData from '../TableData';

var NestedTable =
/*#__PURE__*/
function (_Component) {
  _inherits(NestedTable, _Component);

  function NestedTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NestedTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NestedTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toggle: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleRow", function (index) {
      var toggle = _this.state.toggle;
      toggle[index] = toggle[index] ? !toggle[index] : true;

      _this.setState({
        toggle: toggle
      });
    });

    return _this;
  }

  _createClass(NestedTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = [['Harry', 'Potter', 'Gryffindor'], ['Hermoine', 'Granger', 'Slytherin!?'], ['Jon', 'Snow', 'Stark']];
      var relatedData = [React.createElement("p", null, "The main character in Harry Potter"), React.createElement("p", null, "The other main character"), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, {
        header: true
      }, React.createElement(TableHeader, null, "First Name"), React.createElement(TableHeader, null, "Last Name"), React.createElement(TableHeader, null, "House"))), React.createElement(TableBody, null, React.createElement(TableRow, null, React.createElement(TableData, null, "Harry"), React.createElement(TableData, null, "Potter"), React.createElement(TableData, null, "Gryffindor"))))];
      var rowData = data.map(function (character, index) {
        var toggleState = _this2.state.toggle[index] ? _this2.state.toggle[index] : false;
        var charArray = character.map(function (trait, charIndex) {
          return React.createElement(TableData, {
            key: "d".concat(charIndex)
          }, trait);
        });
        return [React.createElement(TableData, {
          onClick: function onClick() {
            return _this2.toggleRow(index);
          },
          key: "a".concat(index),
          expanded: toggleState
        })].concat(_toConsumableArray(charArray));
      });
      var createRows = rowData.map(function (row, index) {
        return React.createElement(TableRow, {
          key: "b".concat(index)
        }, row);
      });
      var createExpandedRows = relatedData.map(function (row, index) {
        var toggleState = _this2.state.toggle[index] ? _this2.state.toggle[index] : false;
        return React.createElement(TableRowExpanded, {
          expanded: toggleState,
          colSpan: 4,
          key: "c".concat(index)
        }, row);
      });
      var createTableBody = createRows.map(function (character, index) {
        return [character, createExpandedRows[index]];
      });
      return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, {
        header: true
      }, React.createElement(TableHeader, null), React.createElement(TableHeader, null, "First Name"), React.createElement(TableHeader, null, "Last Name"), React.createElement(TableHeader, null, "House"))), React.createElement(TableBody, null, createTableBody));
    }
  }]);

  return NestedTable;
}(Component);

storiesOf('Table', module).add('Simple Table', function () {
  return React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, {
    header: true
  }, React.createElement(TableHeader, null, "First Name"), React.createElement(TableHeader, null, "Last Name"), React.createElement(TableHeader, null, "House"))), React.createElement(TableBody, null, React.createElement(TableRow, null, React.createElement(TableData, null, "Harry"), React.createElement(TableData, null, "Potter"), React.createElement(TableData, null, "Gryffindor")), React.createElement(TableRow, null, React.createElement(TableData, null, "Hermoine"), React.createElement(TableData, null, "Granger"), React.createElement(TableData, null, "Gryffindor")), React.createElement(TableRow, null, React.createElement(TableData, null, "Blaise"), React.createElement(TableData, null, "Zambini"), React.createElement(TableData, null, "Slytherin")), React.createElement(TableRow, null, React.createElement(TableData, null, "Jon"), React.createElement(TableData, null, "Snow"), React.createElement(TableData, null, "Stark"))));
}, {
  info: {
    text: "\n            The Table component is the data-table implementation of blueix-components.\n            Create a table using Table, TableHead, Table Row, TableHeader, and TableBody. Each component maps to their HTML counterpart,\n            wrapped with carbon components styles.\n    \n            Table doesn't do data-fetch for you or height/width calculations, it auto-fills it\n            to the native HTML spec. Any overrides you want to do can be passed in via props.\n          "
  }
}).add('Nested Table', function () {
  return React.createElement(NestedTable, null);
}, {
  info: {
    text: "\n            Nested table shows the expansion capabilities of the basic tables. Note that\n            this functionality is driven (like most of our components) through your application\n            altering props on the elements\n          "
  }
});