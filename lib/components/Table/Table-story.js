"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _Table = _interopRequireDefault(require("../Table"));

var _TableHead = _interopRequireDefault(require("../TableHead"));

var _TableHeader = _interopRequireDefault(require("../TableHeader"));

var _TableBody = _interopRequireDefault(require("../TableBody"));

var _TableRow = _interopRequireDefault(require("../TableRow"));

var _TableRowExpanded = _interopRequireDefault(require("../TableRowExpanded"));

var _TableData = _interopRequireDefault(require("../TableData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      var relatedData = [_react.default.createElement("p", null, "The main character in Harry Potter"), _react.default.createElement("p", null, "The other main character"), _react.default.createElement(_Table.default, null, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, {
        header: true
      }, _react.default.createElement(_TableHeader.default, null, "First Name"), _react.default.createElement(_TableHeader.default, null, "Last Name"), _react.default.createElement(_TableHeader.default, null, "House"))), _react.default.createElement(_TableBody.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableData.default, null, "Harry"), _react.default.createElement(_TableData.default, null, "Potter"), _react.default.createElement(_TableData.default, null, "Gryffindor"))))];
      var rowData = data.map(function (character, index) {
        var toggleState = _this2.state.toggle[index] ? _this2.state.toggle[index] : false;
        var charArray = character.map(function (trait, charIndex) {
          return _react.default.createElement(_TableData.default, {
            key: "d".concat(charIndex)
          }, trait);
        });
        return [_react.default.createElement(_TableData.default, {
          onClick: function onClick() {
            return _this2.toggleRow(index);
          },
          key: "a".concat(index),
          expanded: toggleState
        })].concat(_toConsumableArray(charArray));
      });
      var createRows = rowData.map(function (row, index) {
        return _react.default.createElement(_TableRow.default, {
          key: "b".concat(index)
        }, row);
      });
      var createExpandedRows = relatedData.map(function (row, index) {
        var toggleState = _this2.state.toggle[index] ? _this2.state.toggle[index] : false;
        return _react.default.createElement(_TableRowExpanded.default, {
          expanded: toggleState,
          colSpan: 4,
          key: "c".concat(index)
        }, row);
      });
      var createTableBody = createRows.map(function (character, index) {
        return [character, createExpandedRows[index]];
      });
      return _react.default.createElement(_Table.default, null, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, {
        header: true
      }, _react.default.createElement(_TableHeader.default, null), _react.default.createElement(_TableHeader.default, null, "First Name"), _react.default.createElement(_TableHeader.default, null, "Last Name"), _react.default.createElement(_TableHeader.default, null, "House"))), _react.default.createElement(_TableBody.default, null, createTableBody));
    }
  }]);

  return NestedTable;
}(_react.Component);

(0, _react2.storiesOf)('Table', module).add('Simple Table', function () {
  return _react.default.createElement(_Table.default, null, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, {
    header: true
  }, _react.default.createElement(_TableHeader.default, null, "First Name"), _react.default.createElement(_TableHeader.default, null, "Last Name"), _react.default.createElement(_TableHeader.default, null, "House"))), _react.default.createElement(_TableBody.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableData.default, null, "Harry"), _react.default.createElement(_TableData.default, null, "Potter"), _react.default.createElement(_TableData.default, null, "Gryffindor")), _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableData.default, null, "Hermoine"), _react.default.createElement(_TableData.default, null, "Granger"), _react.default.createElement(_TableData.default, null, "Gryffindor")), _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableData.default, null, "Blaise"), _react.default.createElement(_TableData.default, null, "Zambini"), _react.default.createElement(_TableData.default, null, "Slytherin")), _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableData.default, null, "Jon"), _react.default.createElement(_TableData.default, null, "Snow"), _react.default.createElement(_TableData.default, null, "Stark"))));
}, {
  info: {
    text: "\n            The Table component is the data-table implementation of blueix-components.\n            Create a table using Table, TableHead, Table Row, TableHeader, and TableBody. Each component maps to their HTML counterpart,\n            wrapped with carbon components styles.\n    \n            Table doesn't do data-fetch for you or height/width calculations, it auto-fills it\n            to the native HTML spec. Any overrides you want to do can be passed in via props.\n          "
  }
}).add('Nested Table', function () {
  return _react.default.createElement(NestedTable, null);
}, {
  info: {
    text: "\n            Nested table shows the expansion capabilities of the basic tables. Note that\n            this functionality is driven (like most of our components) through your application\n            altering props on the elements\n          "
  }
});