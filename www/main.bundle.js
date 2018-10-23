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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "www/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/app.js":
/*!********************!*\
  !*** ./api/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs */ "./api/configs/index.js");
/* harmony import */ var _database_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database/connect */ "./api/database/connect.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./api/routes/index.js");






 // Connect our Database.

var dbConnect = new _database_connect__WEBPACK_IMPORTED_MODULE_5__["default"](_configs__WEBPACK_IMPORTED_MODULE_4__["default"]);
dbConnect.initialize();
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
  extended: true
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use('/api', _routes__WEBPACK_IMPORTED_MODULE_6__["default"]); // We need this to make sure we don't run a second instance

if (!module.parent) {
  app.listen(_configs__WEBPACK_IMPORTED_MODULE_4__["default"].APP_CONFIG.APP_PORT, function (err) {
    if (err) {
      console.log('Server Cannot run!');
    } else {
      console.log('//========================================');
      console.log("// Server running on port number: ".concat(_configs__WEBPACK_IMPORTED_MODULE_4__["default"].APP_CONFIG.APP_PORT));
      console.log('// Environment Prod: ', _configs__WEBPACK_IMPORTED_MODULE_4__["default"].APP_CONFIG.PROD_ENV);
      console.log('//========================================');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (app);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./api/configs/index.js":
/*!******************************!*\
  !*** ./api/configs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__(/*! dotenv */ "dotenv").config();

var DATABASE = {
  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_PORT: process.env.MONGO_PORT,
  CONNECT_URL: "mongodb://".concat(process.env.MONGO_USER, ":").concat(encodeURIComponent(process.env.MONGO_PASSWORD), "@ds163822.mlab.com:").concat(process.env.MONGO_PORT, "/").concat(process.env.MONGO_DB_NAME)
};
var APP_CONFIG = {
  ENV: "development" || 'development',
  APP_PORT: process.env.APP_PORT,
  PROD_ENV: process.env.PROD_ENV,
  MONGOOSE_DEBUG: process.env.MONGOOSE_DEBUG
};
/* harmony default export */ __webpack_exports__["default"] = ({
  DATABASE: DATABASE,
  APP_CONFIG: APP_CONFIG
});

/***/ }),

/***/ "./api/controllers/abstract.controller.js":
/*!************************************************!*\
  !*** ./api/controllers/abstract.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Application Abstract Controller class.
 *
 * @api Abstract class, cannot be instantiated but extended only.
 *
 * @export
 * @class Abstract
 */

var Abstract =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Abstract.
   *
   * @param {*} model - DI model required for CRUD methods.
   * @memberof Abstract
   */
  function Abstract(model) {
    _classCallCheck(this, Abstract);

    // Detect whether this constructor was called using the new operator.
    // new.target returns a reference to the constructor or function.
    if ((this instanceof Abstract ? this.constructor : void 0) === Abstract) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    this._model = model;
    this.getByName = this.getByName.bind(this);
    this.getList = this.getList.bind(this);
    this.create = this.create.bind(this);
  }
  /**
   * @api {get} /endpoint/:name (http://example.com/api/icons/person-icon)
   * @apiDescription Get single item by name.
   * @apiName getByName
   * @apiGroup Abstract
   * @apiParam {string} name
   * @apiErrorExample {json} item not found HTTP/1.1 404 Not Found
   * @apiSuccessExample Success-Response:
   *
   * HTTP/1.1 200 OK
   *
   *  {
   *    "tags": ["solid", "outline"],
   *    "versions": [],
   *    "name": "person-icon",
   *    "version": "0",
   *  }
   *
   * @param {string} req
   * @param {string} res
   * @param {any} next
   */


  _createClass(Abstract, [{
    key: "getByName",
    value: function () {
      var _getByName = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._model.findOne({
                  name: req.params.name
                });

              case 3:
                data = _context.sent;
                return _context.abrupt("return", res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(data));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                _context.t0.status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST;
                return _context.abrupt("return", next(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function getByName(_x, _x2, _x3) {
        return _getByName.apply(this, arguments);
      };
    }()
    /**
     * @api {get} /endpoint Get list of items (http://example.com/api/icons)
     * @apiDescription Get a list of items
     * @apiName getList
     * @apiGroup Abstract
     * @apiErrorExample {json} items not found HTTP/1.1 404 Not Found
     * @apiSuccessExample Success-Response:
     *
     * HTTP/1.1 200 OK
     *
     * [
     *  {
     *    "tags": ["solid", "outline"],
     *    "versions": [],
     *    "name": "person-icon",
     *    "version": "0",
     *  },
     *  {
     *    "tags": ["solid", "outline"],
     *    "versions": [],
     *    "name": "lock-icon",
     *    "version": "0",
     *  }
     * ]
     *
     * @param {string} req
     * @param {string} res
     * @param {any} next
     */

  }, {
    key: "getList",
    value: function () {
      var _getList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this._model.find();

              case 3:
                data = _context2.sent;
                return _context2.abrupt("return", res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.OK).json(data));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                _context2.t0.status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST;
                return _context2.abrupt("return", next(_context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      return function getList(_x4, _x5, _x6) {
        return _getList.apply(this, arguments);
      };
    }()
    /**
     * @api {post} /endpoint Create item (http://example.com/api/icons)
     * @apiDescription Create item requires body obj.
     * @apiName create
     * @apiGroup Abstract
     *
     * @apiErrorExample {json} item not found HTTP/1.1 404 Not Found
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     *
     *
     * @apiParam (Body) {Object} name Icon name.
     *
     * @apiParamExample {json} Post-Example:
     *
     *  {
     *    "tags": ["solid", "outline"],
     *    "versions": [],
     *    "name": "person-icon",
     *    "version": "0",
     *  }
     *
     * @param {string} req
     * @param {string} res
     * @param {any} next
     */

  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res, next) {
        var body, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                body = req.body;
                _context3.next = 4;
                return this._model.create(body);

              case 4:
                data = _context3.sent;
                return _context3.abrupt("return", res.status(http_status__WEBPACK_IMPORTED_MODULE_0___default.a.CREATED).json(data));

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                _context3.t0.status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST;
                return _context3.abrupt("return", next(_context3.t0));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      return function create(_x7, _x8, _x9) {
        return _create.apply(this, arguments);
      };
    }()
  }]);

  return Abstract;
}();



/***/ }),

/***/ "./api/controllers/icon.controller.js":
/*!********************************************!*\
  !*** ./api/controllers/icon.controller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconController; });
/* harmony import */ var _abstract_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.controller */ "./api/controllers/abstract.controller.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @export
 * @class IconController
 * @extends {Abstract}
 */

var IconController =
/*#__PURE__*/
function (_Abstract) {
  _inherits(IconController, _Abstract);

  /**
   * Creates an instance of IconController.
   *
   * @param {*} model
   * @memberof IconController
   */
  function IconController(model) {
    _classCallCheck(this, IconController);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconController).call(this, model));
  }

  return IconController;
}(_abstract_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./api/database/connect.js":
/*!*********************************!*\
  !*** ./api/database/connect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connect; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Database connection and settings.
 *
 * @export
 * @class Connect
 */

var Connect =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Connect.
   *
   * @param {*} configs
   * @memberof Connect
   */
  function Connect(configs) {
    _classCallCheck(this, Connect);

    this._configs = configs;
    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = bluebird__WEBPACK_IMPORTED_MODULE_1___default.a;
    this.setDebug();
  }
  /**
   * Mongoose set debug based on env.
   *
   * @memberof Connect
   */


  _createClass(Connect, [{
    key: "setDebug",
    value: function setDebug() {
      mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('debug', this._configs.APP_CONFIG.MONGOOSE_DEBUG);
    }
    /**
     * Connect database.
     *
     * @memberof Connect
     */

  }, {
    key: "initialize",
    value: function initialize() {
      try {
        mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(this._configs.DATABASE.CONNECT_URL, {
          useNewUrlParser: true
        });
      } catch (error) {
        mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(this._configs.DATABASE.CONNECT_URL);
      }

      mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {
        return console.log('MongoDB Running');
      }).on('error', function (error) {
        throw error;
      });
    }
  }]);

  return Connect;
}();



/***/ }),

/***/ "./api/models/icon.model.js":
/*!**********************************!*\
  !*** ./api/models/icon.model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var IconSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: 'string',
    required: true,
    unique: true
  },
  tags: Array,
  versions: Array
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}); // Export the model

var Icon = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Icons', IconSchema);
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./api/routes/icon.routes.js":
/*!***********************************!*\
  !*** ./api/routes/icon.routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_icon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/icon.model */ "./api/models/icon.model.js");
/* harmony import */ var _controllers_icon_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/icon.controller */ "./api/controllers/icon.controller.js");



var routes = new express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
var IconCtrl = new _controllers_icon_controller__WEBPACK_IMPORTED_MODULE_2__["default"](_models_icon_model__WEBPACK_IMPORTED_MODULE_1__["default"]);
routes.get('/', IconCtrl.getList);
routes.get('/:name', IconCtrl.getByName);
routes.post('/', IconCtrl.create);
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./api/routes/index.js":
/*!*****************************!*\
  !*** ./api/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.routes */ "./api/routes/icon.routes.js");


var routes = new express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
routes.use('/icons', _icon_routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi regenerator-runtime/runtime ./api/app.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"regenerator-runtime/runtime");
module.exports = __webpack_require__(/*! ./api/app.js */"./api/app.js");


/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map