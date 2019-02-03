"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.translationIds = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonIcons = require("carbon-icons");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/chevron--down/16"));

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var _defaultTranslations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;
var translationIds = {
  'close.menu': 'close.menu',
  'open.menu': 'open.menu'
};
exports.translationIds = translationIds;
var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationIds['close.menu'], 'Close menu'), _defineProperty(_defaultTranslations, translationIds['open.menu'], 'Open menu'), _defaultTranslations);
/**
 * `ListBoxMenuIcon` is used to orient the icon up or down depending on the
 * state of the menu for a given `ListBox`
 */

var ListBoxMenuIcon = function ListBoxMenuIcon(_ref) {
  var _cx;

  var isOpen = _ref.isOpen,
      t = _ref.translateWithId;
  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--list-box__menu-icon"), true), _defineProperty(_cx, "".concat(prefix, "--list-box__menu-icon--open"), isOpen), _cx));
  var description = isOpen ? t('close.menu') : t('open.menu');
  return _react.default.createElement("div", {
    className: className
  }, _FeatureFlags.componentsX ? _react.default.createElement(_.default, {
    name: "chevron--down"
  }) : _react.default.createElement(_Icon.default, {
    icon: _carbonIcons.iconCaretDown,
    description: description,
    alt: description,
    focusable: "false"
  }));
};

ListBoxMenuIcon.propTypes = {
  /**
   * Specify whether the menu is currently open, which will influence the
   * direction of the menu icon
   */
  isOpen: _propTypes.default.bool.isRequired,

  /**
   * i18n hook used to provide the appropriate description for the given menu
   * icon. This function takes in an id defined in `translationIds` and should
   * return a string message for that given message id.
   */
  translateWithId: _propTypes.default.func.isRequired
};
ListBoxMenuIcon.defaultProps = {
  translateWithId: function translateWithId(id) {
    return defaultTranslations[id];
  }
};
var _default = ListBoxMenuIcon;
exports.default = _default;