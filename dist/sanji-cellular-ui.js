var sjCellular =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sanjiCoreUi = __webpack_require__(13);
	
	var _sanjiCoreUi2 = _interopRequireDefault(_sanjiCoreUi);
	
	__webpack_require__(12);
	
	__webpack_require__(1);
	
	var _componentI18n = __webpack_require__(10);
	
	var _componentI18n2 = _interopRequireDefault(_componentI18n);
	
	var _componentService = __webpack_require__(11);
	
	var _componentService2 = _interopRequireDefault(_componentService);
	
	var _componentContainerController = __webpack_require__(5);
	
	var _componentContainerController2 = _interopRequireDefault(_componentContainerController);
	
	var _componentController = __webpack_require__(8);
	
	var _componentController2 = _interopRequireDefault(_componentController);
	
	var _componentContainerDirective = __webpack_require__(6);
	
	var _componentContainerDirective2 = _interopRequireDefault(_componentContainerDirective);
	
	var _componentDirective = __webpack_require__(9);
	
	var _componentDirective2 = _interopRequireDefault(_componentDirective);
	
	var _componentWindowDirective = __webpack_require__(7);
	
	var _componentWindowDirective2 = _interopRequireDefault(_componentWindowDirective);
	
	var app = angular.module('sanji.cellular', [_sanjiCoreUi2['default']]);
	app.config(_componentI18n2['default']);
	app.service('cellularService', _componentService2['default']);
	app.controller('CellularContainerController', _componentContainerController2['default']);
	app.controller('CellularController', _componentController2['default']);
	app.directive('sanjiCellularContainer', _componentContainerDirective2['default'].directiveFactory);
	app.directive('sanjiCellular', _componentDirective2['default'].directiveFactory);
	app.directive('sanjiCellularWindow', _componentWindowDirective2['default'].directiveFactory);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"get": {
			"url": "/network/cellulars",
			"type": "collection",
			"titlePrefix": "cellular"
		},
		"put": {
			"url": "/network/cellulars/:id",
			"type": "model"
		},
		"fields": [
			{
				"key": "enable",
				"type": "switch",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_ENABLE"
				}
			},
			{
				"key": "apn",
				"type": "input",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_APN"
				}
			},
			{
				"key": "pinCode",
				"type": "input",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_PINCODE"
				}
			},
			{
				"key": "keepalive.enable",
				"type": "switch",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE"
				}
			},
			{
				"key": "keepalive.targetHost",
				"type": "input",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_TARGET_HOST"
				},
				"hideExpression": "!model.keepalive.enable"
			},
			{
				"key": "keepalive.intervalSec",
				"type": "number",
				"templateOptions": {
					"label": "CELLULAR_FORM_LABEL_PING_INTERVAL",
					"min": 0,
					"max": null
				},
				"hideExpression": "!model.keepalive.enable"
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"CELLULAR": "Cellular",
		"CELLULAR_FORM_SETTING": "Setting",
		"CELLULAR_FORM_LABEL_ENABLE": "Enable",
		"CELLULAR_FORM_LABEL_APN": "APN",
		"CELLULAR_FORM_LABEL_PINCODE": "Pin Code",
		"CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE": "Enable Keep-alive",
		"CELLULAR_FORM_LABEL_TARGET_HOST": "Target Host",
		"CELLULAR_FORM_LABEL_PING_INTERVAL": "Ping Interval",
		"CELLULAR_FORM_SAVE": "Save"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"CELLULAR": "Cellular",
		"CELLULAR_FORM_SETTING": "設定",
		"CELLULAR_FORM_LABEL_ENABLE": "啟用",
		"CELLULAR_FORM_LABEL_APN": "APN",
		"CELLULAR_FORM_LABEL_PINCODE": "Pin 碼",
		"CELLULAR_FORM_LABEL_ENABLE_KEEPALIVE": "啟用保持連線",
		"CELLULAR_FORM_LABEL_TARGET_HOST": "目標主機",
		"CELLULAR_FORM_LABEL_PING_INTERVAL": "Ping 間隔",
		"CELLULAR_FORM_SAVE": "儲存"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService', 'cellularService'];
	var WINDOW_ID = 'sanji-cellular-ui';
	
	var CellularContainerController = (function () {
	  function CellularContainerController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, CellularContainerController);
	
	    CellularContainerController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
	    this.data = this.cellularService.data;
	
	    this.activate();
	
	    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
	  }
	
	  _createClass(CellularContainerController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this2 = this;
	
	      this.sanjiWindowMgr.promise = this.cellularService.get().then(function () {
	        _this2.data = _this2.cellularService.data;
	      });
	    }
	  }, {
	    key: 'onRefresh',
	    value: function onRefresh(event, args) {
	      if (args.id === WINDOW_ID) {
	        this.activate();
	      }
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave(data) {
	      this.sanjiWindowMgr.promise = this.cellularService.update(data);
	    }
	  }]);
	
	  return CellularContainerController;
	})();
	
	CellularContainerController.$inject = $inject;
	exports['default'] = CellularContainerController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var CellularContainerDirective = (function () {
	  function CellularContainerDirective(injects) {
	    _classCallCheck(this, CellularContainerDirective);
	
	    CellularContainerDirective.directiveFactory.$inject.forEach(function (item, index) {
	      CellularContainerDirective[item] = injects[index];
	      injectMap.set(CellularContainerDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.controller = 'CellularContainerController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = true;
	    this.template = '<sanji-cellular data="vm.data" on-submit="vm.onSave(data)"></sanji-cellular>';
	  }
	
	  _createClass(CellularContainerDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      CellularContainerDirective.instance = new CellularContainerDirective(injects);
	      return CellularContainerDirective.instance;
	    }
	  }]);
	
	  return CellularContainerDirective;
	})();
	
	CellularContainerDirective.directiveFactory.$inject = $inject;
	exports['default'] = CellularContainerDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var CellularWindowDirective = (function () {
	  function CellularWindowDirective(injects) {
	    _classCallCheck(this, CellularWindowDirective);
	
	    CellularWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      CellularWindowDirective[item] = injects[index];
	      injectMap.set(CellularWindowDirective[item], injects[index]);
	    });
	    this.restrict = 'E';
	    this.template = '<sanji-window window-id="sanji-cellular-ui"\n                      window-name="{{\'CELLULAR\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-form"\n                        link-name="{{\'CELLULAR_FORM_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-cellular-container></sanji-cellular-container>\n                      </sanji-window-state>\n                    </sanji-window>';
	  }
	
	  _createClass(CellularWindowDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      CellularWindowDirective.instance = new CellularWindowDirective(injects);
	      return CellularWindowDirective.instance;
	    }
	  }]);
	
	  return CellularWindowDirective;
	})();
	
	CellularWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = CellularWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $inject = [];
	
	var CellularController = (function () {
	  function CellularController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, CellularController);
	
	    CellularController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(CellularController, [{
	    key: "save",
	    value: function save(data) {
	      this.submitCallback({ data: data });
	    }
	  }]);
	
	  return CellularController;
	})();
	
	CellularController.$inject = $inject;
	exports["default"] = CellularController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var CellularDirective = (function () {
	  function CellularDirective(injects) {
	    _classCallCheck(this, CellularDirective);
	
	    CellularDirective.directiveFactory.$inject.forEach(function (item, index) {
	      CellularDirective[item] = injects[index];
	      injectMap.set(CellularDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-cellular-edit.tpl.html';
	    this.restrict = 'EA';
	    this.controller = 'CellularController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = {
	
	      tabs: '=data',
	
	      submitCallback: '&onSubmit'
	    };
	  }
	
	  _createClass(CellularDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      CellularDirective.instance = new CellularDirective(injects);
	      return CellularDirective.instance;
	    }
	  }]);
	
	  return CellularDirective;
	})();
	
	CellularDirective.directiveFactory.$inject = $inject;
	exports['default'] = CellularDirective;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($translateProvider) {
	  $translateProvider.translations('en', __webpack_require__(3));
	  $translateProvider.translations('zh-tw', __webpack_require__(4));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
	var config = __webpack_require__(2);
	
	var CellularService = (function () {
	  function CellularService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, CellularService);
	
	    CellularService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    switch (config.get.type) {
	      case 'collection':
	        this.data = [];
	        break;
	      case 'model':
	        this.data = {};
	        break;
	      default:
	        this.data = [];
	    }
	  }
	
	  _createClass(CellularService, [{
	    key: '_transform',
	    value: function _transform(data) {
	      switch (config.get.type) {
	        case 'collection':
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	        case 'model':
	          return {
	            content: data,
	            formOptions: {},
	            fields: config.fields
	          };
	        default:
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _this2 = this;
	
	      var toPath = this.pathToRegexp.compile(config.get.url);
	      return this.rest.get(toPath(),  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined).then(function (res) {
	        _this2.data = _this2._transform(res.data);
	      })['catch'](function (err) {
	        _this2.exception.catcher('[CellularService] Get data error.')(err);
	        return _this2.$q.reject();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      var toPath = this.pathToRegexp.compile(config.put.url);
	      var path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
	      return this.rest.put(path, data.content, data.formOptions.files,  false ? 'http://private-d8e84-sanjigeneric.apiary-mock.com' : undefined)['catch'](function (err) {
	        _this3.exception.catcher('[CellularService] Update data error.')(err);
	        return _this3.$q.reject();
	      });
	    }
	  }]);
	
	  return CellularService;
	})();
	
	CellularService.$inject = $inject;
	exports['default'] = CellularService;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<md-content>\n    <md-tabs md-dynamic-height md-border-bottom>\n      <md-tab ng-repeat=\"tab in vm.tabs track by $index\" label=\"{{::tab.title}}\">\n        <form ng-submit=\"vm.save(tab)\"\n          role=\"form\" layout=\"column\" layout-padding novalidate>\n          <md-content>\n            <formly-form\n            model=\"tab.content\" options=\"tab.formOptions\" fields=\"tab.fields\" form=\"tab.form\">\n              <div layout layout-align=\"end center\">\n                <md-button type=\"submit\" class=\"md-raised md-primary\"\n                ng-disabled=\"tab.form.$invalid\">\n                  <sapn translate=\"CELLULAR_FORM_SAVE\"></span>\n                </md-button>\n              </div>\n            </formly-form>\n          </md-content>\n        </form>\n      </md-tab>\n    </md-tabs>\n  </md-content>";
	ngModule.run(["$templateCache",function(c){c.put("sanji-cellular-edit.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = sjCore;

/***/ }
/******/ ]);
//# sourceMappingURL=sanji-cellular-ui.js.map