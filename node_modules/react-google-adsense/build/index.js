module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var externalJs = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

var ReactGoogleAdsense = function (_Component) {
    _inherits(ReactGoogleAdsense, _Component);

    function ReactGoogleAdsense() {
        _classCallCheck(this, ReactGoogleAdsense);

        return _possibleConstructorReturn(this, (ReactGoogleAdsense.__proto__ || Object.getPrototypeOf(ReactGoogleAdsense)).apply(this, arguments));
    }

    _createClass(ReactGoogleAdsense, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (function (d, s, id, cb) {
                var element = d.getElementsByTagName(s)[0];
                var fjs = element;
                var js = element;

                js = d.createElement(s);
                js.id = id;
                js.src = externalJs;
                fjs.parentNode.insertBefore(js, fjs);
                js.onload = cb;
            })(document, 'script', 'google-ads-sdk', function () {
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('ins', {
                className: 'adsbygoogle ' + (this.props.className || ''),
                'data-ad-client': this.props.client,
                'data-ad-slot': this.props.slot,
                'data-ad-format': this.props.format,
                style: this.props.style
            });
        }
    }]);

    return ReactGoogleAdsense;
}(_react.Component);

ReactGoogleAdsense.propTypes = {
    client: _react.PropTypes.string.isRequired,
    slot: _react.PropTypes.string.isRequired,
    format: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};

ReactGoogleAdSense.defaultProps = {
    style: { display: 'block ' },
    format: 'auto'
};

exports.default = ReactGoogleAdsense;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);