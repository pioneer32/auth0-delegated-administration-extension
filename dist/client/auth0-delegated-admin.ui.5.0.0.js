/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1350,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 463,
	"./af.js": 463,
	"./ar": 464,
	"./ar-dz": 465,
	"./ar-dz.js": 465,
	"./ar-kw": 466,
	"./ar-kw.js": 466,
	"./ar-ly": 467,
	"./ar-ly.js": 467,
	"./ar-ma": 468,
	"./ar-ma.js": 468,
	"./ar-ps": 469,
	"./ar-ps.js": 469,
	"./ar-sa": 470,
	"./ar-sa.js": 470,
	"./ar-tn": 471,
	"./ar-tn.js": 471,
	"./ar.js": 464,
	"./az": 472,
	"./az.js": 472,
	"./be": 473,
	"./be.js": 473,
	"./bg": 474,
	"./bg.js": 474,
	"./bm": 475,
	"./bm.js": 475,
	"./bn": 476,
	"./bn-bd": 477,
	"./bn-bd.js": 477,
	"./bn.js": 476,
	"./bo": 478,
	"./bo.js": 478,
	"./br": 479,
	"./br.js": 479,
	"./bs": 480,
	"./bs.js": 480,
	"./ca": 481,
	"./ca.js": 481,
	"./cs": 482,
	"./cs.js": 482,
	"./cv": 483,
	"./cv.js": 483,
	"./cy": 484,
	"./cy.js": 484,
	"./da": 485,
	"./da.js": 485,
	"./de": 486,
	"./de-at": 487,
	"./de-at.js": 487,
	"./de-ch": 488,
	"./de-ch.js": 488,
	"./de.js": 486,
	"./dv": 489,
	"./dv.js": 489,
	"./el": 490,
	"./el.js": 490,
	"./en-au": 491,
	"./en-au.js": 491,
	"./en-ca": 492,
	"./en-ca.js": 492,
	"./en-gb": 493,
	"./en-gb.js": 493,
	"./en-ie": 494,
	"./en-ie.js": 494,
	"./en-il": 495,
	"./en-il.js": 495,
	"./en-in": 496,
	"./en-in.js": 496,
	"./en-nz": 497,
	"./en-nz.js": 497,
	"./en-sg": 498,
	"./en-sg.js": 498,
	"./eo": 499,
	"./eo.js": 499,
	"./es": 500,
	"./es-do": 501,
	"./es-do.js": 501,
	"./es-mx": 502,
	"./es-mx.js": 502,
	"./es-us": 503,
	"./es-us.js": 503,
	"./es.js": 500,
	"./et": 504,
	"./et.js": 504,
	"./eu": 505,
	"./eu.js": 505,
	"./fa": 506,
	"./fa.js": 506,
	"./fi": 507,
	"./fi.js": 507,
	"./fil": 508,
	"./fil.js": 508,
	"./fo": 509,
	"./fo.js": 509,
	"./fr": 510,
	"./fr-ca": 511,
	"./fr-ca.js": 511,
	"./fr-ch": 512,
	"./fr-ch.js": 512,
	"./fr.js": 510,
	"./fy": 513,
	"./fy.js": 513,
	"./ga": 514,
	"./ga.js": 514,
	"./gd": 515,
	"./gd.js": 515,
	"./gl": 516,
	"./gl.js": 516,
	"./gom-deva": 517,
	"./gom-deva.js": 517,
	"./gom-latn": 518,
	"./gom-latn.js": 518,
	"./gu": 519,
	"./gu.js": 519,
	"./he": 520,
	"./he.js": 520,
	"./hi": 521,
	"./hi.js": 521,
	"./hr": 522,
	"./hr.js": 522,
	"./hu": 523,
	"./hu.js": 523,
	"./hy-am": 524,
	"./hy-am.js": 524,
	"./id": 525,
	"./id.js": 525,
	"./is": 526,
	"./is.js": 526,
	"./it": 527,
	"./it-ch": 528,
	"./it-ch.js": 528,
	"./it.js": 527,
	"./ja": 529,
	"./ja.js": 529,
	"./jv": 530,
	"./jv.js": 530,
	"./ka": 531,
	"./ka.js": 531,
	"./kk": 532,
	"./kk.js": 532,
	"./km": 533,
	"./km.js": 533,
	"./kn": 534,
	"./kn.js": 534,
	"./ko": 535,
	"./ko.js": 535,
	"./ku": 536,
	"./ku-kmr": 537,
	"./ku-kmr.js": 537,
	"./ku.js": 536,
	"./ky": 538,
	"./ky.js": 538,
	"./lb": 539,
	"./lb.js": 539,
	"./lo": 540,
	"./lo.js": 540,
	"./lt": 541,
	"./lt.js": 541,
	"./lv": 542,
	"./lv.js": 542,
	"./me": 543,
	"./me.js": 543,
	"./mi": 544,
	"./mi.js": 544,
	"./mk": 545,
	"./mk.js": 545,
	"./ml": 546,
	"./ml.js": 546,
	"./mn": 547,
	"./mn.js": 547,
	"./mr": 548,
	"./mr.js": 548,
	"./ms": 549,
	"./ms-my": 550,
	"./ms-my.js": 550,
	"./ms.js": 549,
	"./mt": 551,
	"./mt.js": 551,
	"./my": 552,
	"./my.js": 552,
	"./nb": 553,
	"./nb.js": 553,
	"./ne": 554,
	"./ne.js": 554,
	"./nl": 555,
	"./nl-be": 556,
	"./nl-be.js": 556,
	"./nl.js": 555,
	"./nn": 557,
	"./nn.js": 557,
	"./oc-lnc": 558,
	"./oc-lnc.js": 558,
	"./pa-in": 559,
	"./pa-in.js": 559,
	"./pl": 560,
	"./pl.js": 560,
	"./pt": 561,
	"./pt-br": 562,
	"./pt-br.js": 562,
	"./pt.js": 561,
	"./ro": 563,
	"./ro.js": 563,
	"./ru": 564,
	"./ru.js": 564,
	"./sd": 565,
	"./sd.js": 565,
	"./se": 566,
	"./se.js": 566,
	"./si": 567,
	"./si.js": 567,
	"./sk": 568,
	"./sk.js": 568,
	"./sl": 569,
	"./sl.js": 569,
	"./sq": 570,
	"./sq.js": 570,
	"./sr": 571,
	"./sr-cyrl": 572,
	"./sr-cyrl.js": 572,
	"./sr.js": 571,
	"./ss": 573,
	"./ss.js": 573,
	"./sv": 574,
	"./sv.js": 574,
	"./sw": 575,
	"./sw.js": 575,
	"./ta": 576,
	"./ta.js": 576,
	"./te": 577,
	"./te.js": 577,
	"./tet": 578,
	"./tet.js": 578,
	"./tg": 579,
	"./tg.js": 579,
	"./th": 580,
	"./th.js": 580,
	"./tk": 581,
	"./tk.js": 581,
	"./tl-ph": 582,
	"./tl-ph.js": 582,
	"./tlh": 583,
	"./tlh.js": 583,
	"./tr": 584,
	"./tr.js": 584,
	"./tzl": 585,
	"./tzl.js": 585,
	"./tzm": 586,
	"./tzm-latn": 587,
	"./tzm-latn.js": 587,
	"./tzm.js": 586,
	"./ug-cn": 588,
	"./ug-cn.js": 588,
	"./uk": 589,
	"./uk.js": 589,
	"./ur": 590,
	"./ur.js": 590,
	"./uz": 591,
	"./uz-latn": 592,
	"./uz-latn.js": 592,
	"./uz.js": 591,
	"./vi": 593,
	"./vi.js": 593,
	"./x-pseudo": 594,
	"./x-pseudo.js": 594,
	"./yo": 595,
	"./yo.js": 595,
	"./zh-cn": 596,
	"./zh-cn.js": 596,
	"./zh-hk": 597,
	"./zh-hk.js": 597,
	"./zh-mo": 598,
	"./zh-mo.js": 598,
	"./zh-tw": 599,
	"./zh-tw.js": 599
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1158;

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(1349);
} else {}

/***/ }),

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("div", null);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./client/actions/auth.js
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, "login", function() { return login; });
__webpack_require__.d(auth_namespaceObject, "logout", function() { return logout; });
__webpack_require__.d(auth_namespaceObject, "loadCredentials", function() { return loadCredentials; });
__webpack_require__.d(auth_namespaceObject, "getAccessLevel", function() { return getAccessLevel; });
__webpack_require__.d(auth_namespaceObject, "getAppSettings", function() { return getAppSettings; });
__webpack_require__.d(auth_namespaceObject, "toggleStyleSettings", function() { return toggleStyleSettings; });
__webpack_require__.d(auth_namespaceObject, "getStyleSettings", function() { return getStyleSettings; });

// NAMESPACE OBJECT: ./client/actions/application.js
var application_namespaceObject = {};
__webpack_require__.r(application_namespaceObject);
__webpack_require__.d(application_namespaceObject, "fetchApplications", function() { return fetchApplications; });

// NAMESPACE OBJECT: ./client/actions/connection.js
var connection_namespaceObject = {};
__webpack_require__.r(connection_namespaceObject);
__webpack_require__.d(connection_namespaceObject, "fetchConnections", function() { return fetchConnections; });

// NAMESPACE OBJECT: ./client/actions/log.js
var log_namespaceObject = {};
__webpack_require__.r(log_namespaceObject);
__webpack_require__.d(log_namespaceObject, "fetchLogs", function() { return fetchLogs; });
__webpack_require__.d(log_namespaceObject, "fetchLog", function() { return fetchLog; });
__webpack_require__.d(log_namespaceObject, "clearLog", function() { return clearLog; });

// NAMESPACE OBJECT: ./client/actions/user.js
var user_namespaceObject = {};
__webpack_require__.r(user_namespaceObject);
__webpack_require__.d(user_namespaceObject, "fetchUsers", function() { return fetchUsers; });
__webpack_require__.d(user_namespaceObject, "createUser", function() { return createUser; });
__webpack_require__.d(user_namespaceObject, "requestCreateUser", function() { return requestCreateUser; });
__webpack_require__.d(user_namespaceObject, "cancelCreateUser", function() { return cancelCreateUser; });
__webpack_require__.d(user_namespaceObject, "changeFields", function() { return changeFields; });
__webpack_require__.d(user_namespaceObject, "requestFieldsChange", function() { return requestFieldsChange; });
__webpack_require__.d(user_namespaceObject, "cancelChangeFields", function() { return cancelChangeFields; });
__webpack_require__.d(user_namespaceObject, "fetchUserDetail", function() { return fetchUserDetail; });
__webpack_require__.d(user_namespaceObject, "fetchUser", function() { return fetchUser; });
__webpack_require__.d(user_namespaceObject, "requestRemoveMultiFactor", function() { return requestRemoveMultiFactor; });
__webpack_require__.d(user_namespaceObject, "cancelRemoveMultiFactor", function() { return user_cancelRemoveMultiFactor; });
__webpack_require__.d(user_namespaceObject, "removeMultiFactor", function() { return removeMultiFactor; });
__webpack_require__.d(user_namespaceObject, "requestBlockUser", function() { return requestBlockUser; });
__webpack_require__.d(user_namespaceObject, "cancelBlockUser", function() { return user_cancelBlockUser; });
__webpack_require__.d(user_namespaceObject, "updateUser", function() { return updateUser; });
__webpack_require__.d(user_namespaceObject, "blockUser", function() { return blockUser; });
__webpack_require__.d(user_namespaceObject, "requestUnblockUser", function() { return requestUnblockUser; });
__webpack_require__.d(user_namespaceObject, "requestRemoveBlockedIPs", function() { return requestRemoveBlockedIPs; });
__webpack_require__.d(user_namespaceObject, "cancelUnblockUser", function() { return user_cancelUnblockUser; });
__webpack_require__.d(user_namespaceObject, "cancelRemoveBlocks", function() { return user_cancelRemoveBlocks; });
__webpack_require__.d(user_namespaceObject, "unblockUser", function() { return unblockUser; });
__webpack_require__.d(user_namespaceObject, "removeUserBlocks", function() { return removeUserBlocks; });
__webpack_require__.d(user_namespaceObject, "requestDeleteUser", function() { return requestDeleteUser; });
__webpack_require__.d(user_namespaceObject, "cancelDeleteUser", function() { return user_cancelDeleteUser; });
__webpack_require__.d(user_namespaceObject, "deleteUser", function() { return deleteUser; });
__webpack_require__.d(user_namespaceObject, "requestPasswordReset", function() { return requestPasswordReset; });
__webpack_require__.d(user_namespaceObject, "cancelPasswordReset", function() { return user_cancelPasswordReset; });
__webpack_require__.d(user_namespaceObject, "resetPassword", function() { return resetPassword; });
__webpack_require__.d(user_namespaceObject, "requestPasswordChange", function() { return requestPasswordChange; });
__webpack_require__.d(user_namespaceObject, "cancelPasswordChange", function() { return user_cancelPasswordChange; });
__webpack_require__.d(user_namespaceObject, "changePassword", function() { return changePassword; });
__webpack_require__.d(user_namespaceObject, "requestUsernameChange", function() { return requestUsernameChange; });
__webpack_require__.d(user_namespaceObject, "cancelUsernameChange", function() { return user_cancelUsernameChange; });
__webpack_require__.d(user_namespaceObject, "changeUsername", function() { return changeUsername; });
__webpack_require__.d(user_namespaceObject, "requestEmailChange", function() { return requestEmailChange; });
__webpack_require__.d(user_namespaceObject, "cancelEmailChange", function() { return user_cancelEmailChange; });
__webpack_require__.d(user_namespaceObject, "changeEmail", function() { return changeEmail; });
__webpack_require__.d(user_namespaceObject, "requestResendVerificationEmail", function() { return requestResendVerificationEmail; });
__webpack_require__.d(user_namespaceObject, "cancelResendVerificationEmail", function() { return user_cancelResendVerificationEmail; });
__webpack_require__.d(user_namespaceObject, "resendVerificationEmail", function() { return resendVerificationEmail; });

// NAMESPACE OBJECT: ./client/actions/script.js
var script_namespaceObject = {};
__webpack_require__.r(script_namespaceObject);
__webpack_require__.d(script_namespaceObject, "fetchScript", function() { return fetchScript; });
__webpack_require__.d(script_namespaceObject, "updateScript", function() { return updateScript; });

// EXTERNAL MODULE: ./node_modules/babel-polyfill/lib/index.js
var lib = __webpack_require__(638);

// EXTERNAL MODULE: ./node_modules/string.prototype.endswith/endswith.js
var endswith = __webpack_require__(840);

// EXTERNAL MODULE: ./node_modules/axios/dist/browser/axios.cjs
var axios = __webpack_require__(22);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/react/react.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(44);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/react-router/lib/index.js
var react_router_lib = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/history/lib/index.js
var history_lib = __webpack_require__(631);

// EXTERNAL MODULE: ./node_modules/react-router-redux/lib/index.js
var react_router_redux_lib = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/jwt-decode/build/jwt-decode.cjs.js
var jwt_decode_cjs = __webpack_require__(632);
var jwt_decode_cjs_default = /*#__PURE__*/__webpack_require__.n(jwt_decode_cjs);

// EXTERNAL MODULE: ./client/constants.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./client/actions/auth.js




var webAuthOptions = {
  domain: window.config.AUTH0_CUSTOM_DOMAIN || window.config.AUTH0_DOMAIN,
  clientID: window.config.AUTH0_CLIENT_ID,
  scope: 'openid roles',
  responseType: 'id_token',
  redirectUri: "".concat(window.config.BASE_URL, "/login")
};
var webAuth = new auth0.WebAuth(webAuthOptions); // eslint-disable-line no-undef

function login(returnUrl, locale) {
  sessionStorage.setItem('delegated-admin:returnTo', returnUrl || '/users');
  webAuth.authorize({
    ui_locales: locale
  });
  return {
    type: constants["rc" /* SHOW_LOGIN */]
  };
}

/** Checks if a decoded token is expired **/
function isTokenExpired(decodedToken) {
  return isDateExpired(decodedToken.exp);
}

/** Checks if a given token exp is expired **/
function isDateExpired(exp) {
  // if there is no expiration date, return
  if (typeof exp === 'undefined') return true;

  // convert to date and store
  var d = new Date(0);
  d.setUTCSeconds(exp);

  // check if date is expired
  var isExpired = !(d.valueOf() > new Date().valueOf() + 30);
  return isExpired;
}
function logout(logoutUrl) {
  return function (dispatch) {
    sessionStorage.clear();
    localStorage.clear();
    if (logoutUrl) {
      window.location.href = logoutUrl;
    } else if (window.config.FEDERATED_LOGOUT) {
      window.location.href = "https://".concat(window.config.AUTH0_CUSTOM_DOMAIN || window.config.AUTH0_DOMAIN, "/v2/logout?federated&client_id=").concat(window.config.AUTH0_CLIENT_ID, "&returnTo=").concat(encodeURIComponent(window.config.BASE_URL));
    } else {
      window.location.href = "https://".concat(window.config.AUTH0_CUSTOM_DOMAIN || window.config.AUTH0_DOMAIN, "/v2/logout?client_id=").concat(window.config.AUTH0_CLIENT_ID, "&returnTo=").concat(encodeURIComponent(window.config.BASE_URL));
    }
    dispatch({
      type: constants["Ib" /* LOGOUT_PENDING */]
    });
  };
}

// calls checkSession to refresh idToken
function refreshToken() {
  return new Promise(function (resolve, reject) {
    // invoke check session to get a new token
    webAuth.checkSession({}, function (err, result) {
      if (err) {
        // there was an error
        reject(err);
      } else {
        // we got a token
        resolve(result);
      }
    });
  });
}
var _processTokens = function processTokens(dispatch, apiToken, returnTo) {
  return new Promise(function (resolve, reject) {
    // check token expiration date
    var decodedToken = jwt_decode_cjs_default()(apiToken);
    if (isTokenExpired(decodedToken)) {
      return;
    }
    axios_default.a.defaults.headers.common.Authorization = "Bearer ".concat(apiToken);
    axios_default.a.defaults.headers.common['dae-locale'] = window.config.LOCALE || 'en';
    sessionStorage.setItem('delegated-admin:apiToken:exp', decodedToken.exp);

    // creates an interceptor to refresh token if needed
    axios_default.a.interceptors.request.use(function (config) {
      // get token expiration from storage
      var exp = sessionStorage.getItem('delegated-admin:apiToken:exp');

      // if there is no token, or it is expired, try to get one
      if (isDateExpired(exp)) {
        return refreshToken().then(function (tokenResponse) {
          // we got one, store and load credentials
          return _processTokens(dispatch, tokenResponse.idToken).then(function () {
            config.headers.Authorization = axios_default.a.defaults.headers.common.Authorization;
            return Promise.resolve(config);
          });
        }).catch(function (error) {
          login(returnTo, window.config.LOCALE || 'en');
          return Promise.reject(error);
        });
      }

      // token is not expired, move on.
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    axios_default.a.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      var value = error.response;
      if (value && value.status === 401 && value.data.message === 'TokenExpired') {
        // renewToken performs authentication using username/password saved in sessionStorage/sessionStorage
        return refreshToken().then(function (tokenResponse) {
          // we got one, store and load credentials
          return _processTokens(dispatch, tokenResponse.idToken).then(function () {
            error.config.headers.Authorization = axios_default.a.defaults.headers.common.Authorization;
            return axios_default.a.request(error.config);
          });
        });
      }
      return Promise.reject(error);
    });
    dispatch({
      type: constants["Eb" /* LOADED_TOKEN */],
      payload: {
        token: apiToken
      }
    });
    dispatch({
      type: constants["Hb" /* LOGIN_SUCCESS */],
      payload: {
        token: apiToken,
        decodedToken: decodedToken,
        user: decodedToken,
        returnTo: returnTo
      }
    });
    if (returnTo) {
      dispatch(Object(react_router_redux_lib["push"])(returnTo));
    }
    resolve();
  });
};
function loadCredentials() {
  return function (dispatch) {
    if (window.location.hash) {
      dispatch({
        type: constants["Gb" /* LOGIN_PENDING */]
      });
      return webAuth.parseHash({
        hash: window.location.hash
      }, function (err, hash) {
        if (err || !hash || !hash.idToken) {
          /* Must have had hash, but didn't get an idToken in the hash */
          console.error('login error: ', err);
          return dispatch({
            type: constants["Fb" /* LOGIN_FAILED */],
            payload: {
              error: err && err.error ? "".concat(err.error, ": ").concat(err.errorDescription) : 'UnknownError: Unknown Error'
            }
          });
        }
        var returnTo = sessionStorage.getItem('delegated-admin:returnTo') || '/users';
        sessionStorage.removeItem('delegated-admin:returnTo');
        return _processTokens(dispatch, hash.idToken, returnTo);
      });
    }
    var token = sessionStorage.getItem('delegated-admin:apiToken');
    sessionStorage.removeItem('delegated-admin:apiToken');
    if (token) {
      return _processTokens(dispatch, token);
    }
  };
}
function getAccessLevel(onSuccess) {
  return {
    type: constants["D" /* FETCH_ACCESS_LEVEL */],
    meta: {
      onSuccess: onSuccess
    },
    payload: {
      promise: axios_default.a.get('/api/me', {
        responseType: 'json',
        timeout: 8000,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  };
}
function getAppSettings(_onSuccess) {
  return function (dispatch) {
    return dispatch({
      type: constants["fb" /* FETCH_SETTINGS */],
      meta: {
        onSuccess: function onSuccess(response) {
          return dispatch(getLanguageDictionary(response, _onSuccess));
        }
      },
      payload: {
        promise: axios_default()('/api/settings', {
          responseType: 'json'
        })
      }
    });
  };
}
function toggleStyleSettings() {
  return function (dispatch, getState) {
    var settings = getState().settings.get('record').toJS();
    settings = settings.settings || settings || {};
    var useAlt = localStorage.getItem('delegated-admin:use-alt-css') === 'true';
    var path = useAlt ? settings.css : settings.altcss;
    localStorage.setItem('delegated-admin:use-alt-css', (!useAlt).toString());
    dispatch({
      type: constants["sc" /* TOGGLE_STYLE_SETTINGS */],
      payload: {
        useAlt: !useAlt,
        path: path
      }
    });
  };
}
function getStyleSettings() {
  return function (dispatch, getState) {
    var settings = getState().settings.get('record').toJS();
    settings = settings.settings || settings || {};
    var useAlt = localStorage.getItem('delegated-admin:use-alt-css') === 'true';
    var path = !useAlt ? settings.css : settings.altcss;
    dispatch({
      type: constants["Db" /* GET_STYLE_SETTINGS */],
      payload: {
        useAlt: useAlt,
        path: path
      }
    });
  };
}
function getLanguageDictionary(response, _onSuccess2) {
  var settings = _.get(response, 'data.settings', {});
  var promise = Promise.resolve({
    data: {}
  });
  if (settings.languageDictionary) {
    if (_.isObject(settings.languageDictionary)) {
      promise = Promise.resolve({
        data: settings.languageDictionary
      });
    } else if (_.isString(settings.languageDictionary) && settings.languageDictionary.startsWith('http')) {
      // Setting Authorization to None because we don't want to ship the token to some undeclared endpoint,
      // especially if not enforcing https
      var oldAuth = axios_default.a.defaults.headers.common['Authorization'];
      var oldLocale = axios_default.a.defaults.headers.common['dae-locale'];
      delete axios_default.a.defaults.headers.common['Authorization']; // and create your own headers
      delete axios_default.a.defaults.headers.common['dae-locale']; // and create your own headers

      promise = axios_default.a.get(settings.languageDictionary, {
        responseType: 'json'
      }).then(function (response) {
        if (response.data) return response;
        return Promise.reject(new Error("Language Dictionary endpoint: ".concat(settings.languageDictionary, " returned no data")));
      });

      // TODO: Race condition?  I hope not!
      axios_default.a.defaults.headers.common['Authorization'] = oldAuth;
      axios_default.a.defaults.headers.common['dae-locale'] = oldLocale;
    } // ignore else, bad languageDictionary
  }
  return {
    type: constants["P" /* FETCH_LANGUAGE_DICTIONARY */],
    meta: {
      onSuccess: function onSuccess() {
        return _onSuccess2 && _onSuccess2(response);
      }
    },
    payload: {
      promise: promise
    }
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(15);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(8);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(18);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/actions/application.js


function fetchApplications() {
  // eslint-disable-line import/prefer-default-export
  return {
    type: constants["H" /* FETCH_APPLICATIONS */],
    payload: {
      promise: axios_default.a.get('/api/applications', {
        responseType: 'json'
      })
    }
  };
}
// CONCATENATED MODULE: ./client/actions/connection.js


function fetchConnections() {
  // eslint-disable-line import/prefer-default-export
  return {
    type: constants["L" /* FETCH_CONNECTIONS */],
    payload: {
      promise: axios_default.a.get('/api/connections', {
        responseType: 'json'
      })
    }
  };
}
// CONCATENATED MODULE: ./client/actions/log.js


function fetchLogs() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    type: constants["U" /* FETCH_LOGS */],
    meta: {
      page: page
    },
    payload: {
      promise: axios_default.a.get('/api/logs', {
        params: {
          page: page
        },
        responseType: 'json'
      })
    }
  };
}
function fetchLog(logId) {
  return {
    type: constants["T" /* FETCH_LOG */],
    meta: {
      logId: logId
    },
    payload: {
      promise: axios_default.a.get("/api/logs/".concat(logId), {
        responseType: 'json'
      })
    }
  };
}
function clearLog() {
  return {
    type: constants["q" /* CLEAR_LOG */]
  };
}
// CONCATENATED MODULE: ./client/actions/userLog.js


function fetchUserLogs(userId) {
  // eslint-disable-line import/prefer-default-export
  return {
    type: constants["tb" /* FETCH_USER_LOGS */],
    meta: {
      userId: userId
    },
    payload: {
      promise: axios_default.a.get("/api/users/".concat(userId, "/logs"), {
        responseType: 'json'
      })
    }
  };
}
// CONCATENATED MODULE: ./client/actions/userDevice.js


function fetchUserDevices(userId) {
  // eslint-disable-line import/prefer-default-export
  return {
    type: constants["ob" /* FETCH_USER_DEVICES */],
    meta: {
      userId: userId
    },
    payload: {
      promise: axios_default.a.get("/api/users/".concat(userId, "/devices"), {
        responseType: 'json'
      })
    }
  };
}
// CONCATENATED MODULE: ./client/actions/user.js






var addRequiredTextParam = function addRequiredTextParam(url, languageDictionary) {
  languageDictionary = languageDictionary || {};
  if (languageDictionary.requiredErrorText) return "".concat(url, "?requiredErrorText=").concat(encodeURIComponent(languageDictionary.requiredErrorText));
  return url;
};

/*
 * Search for users.
 */
function fetchUsers(search) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var filterBy = arguments.length > 3 ? arguments[3] : undefined;
  var sort = arguments.length > 4 ? arguments[4] : undefined;
  var onSuccess = arguments.length > 5 ? arguments[5] : undefined;
  return function (dispatch, getState) {
    var _getState$users$toJS = getState().users.toJS(),
      sortProperty = _getState$users$toJS.sortProperty,
      sortOrder = _getState$users$toJS.sortOrder,
      searchValue = _getState$users$toJS.searchValue,
      selectedFilter = _getState$users$toJS.selectedFilter;
    var meta = {
      page: page,
      sortProperty: sortProperty,
      sortOrder: sortOrder,
      searchValue: searchValue,
      onSuccess: onSuccess
    };
    meta.selectedFilter = reset ? '' : filterBy || selectedFilter;
    meta.searchValue = reset ? '' : search || searchValue;
    if (sort) {
      meta.sortProperty = sort.property;
      meta.sortOrder = sort.order;
    }
    dispatch({
      type: constants["kb" /* FETCH_USERS */],
      payload: {
        promise: axios_default.a.get('/api/users', {
          params: {
            search: meta.searchValue,
            page: page,
            filterBy: meta.selectedFilter,
            sortOrder: meta.sortOrder,
            sortProperty: meta.sortProperty
          },
          responseType: 'json'
        })
      },
      meta: meta
    });
  };
}

/*
 * Create a user.
 */
function createUser(user, languageDictionary) {
  return function (dispatch) {
    dispatch({
      type: constants["r" /* CREATE_USER */],
      meta: {
        user: user,
        onSuccess: function onSuccess() {
          // Give indexing some time when we reload users.
          setTimeout(function () {
            return dispatch(fetchUsers());
          }, 1000);
          dispatch(getAccessLevel());
        }
      },
      payload: {
        promise: axios_default.a.post(addRequiredTextParam('/api/users/', languageDictionary), user, {
          responseType: 'json'
        })
      }
    });
  };
}

/*
 * Show dialog to create a user.
 */
function requestCreateUser(memberships) {
  return function (dispatch, getState) {
    var connections = getState().connections.get('records').toJS();
    var connection = connections.length === 0 ? null : connections && connections.length && connections[0].name;
    dispatch({
      type: constants["bc" /* REQUEST_CREATE_USER */],
      payload: {
        connection: connection,
        memberships: memberships && memberships.length === 1 ? [memberships[0]] : []
      }
    });
  };
}

/*
 * Cancel creating a user.
 */
function cancelCreateUser() {
  return {
    type: constants["f" /* CANCEL_CREATE_USER */]
  };
}

/*
 * Create a user.
 */
function changeFields(userId, user, languageDictionary) {
  return function (dispatch) {
    dispatch({
      type: constants["zb" /* FIELDS_CHANGE */],
      meta: {
        userId: userId,
        user: user,
        onSuccess: function onSuccess() {
          dispatch(fetchUser(userId));
        }
      },
      payload: {
        promise: axios_default.a.patch(addRequiredTextParam("/api/users/".concat(userId), languageDictionary), user, {
          responseType: 'json'
        })
      }
    });
  };
}

/*
 * Show dialog to create a user.
 */
function requestFieldsChange(user) {
  return function (dispatch) {
    dispatch({
      type: constants["ec" /* REQUEST_FIELDS_CHANGE */],
      payload: {
        user: user
      }
    });
  };
}

/*
 * Cancel creating a user.
 */
function cancelChangeFields() {
  return {
    type: constants["i" /* CANCEL_FIELDS_CHANGE */]
  };
}

/*
 * Fetch the user details.
 */
function fetchUserDetail(userId, onSuccess) {
  return {
    type: constants["jb" /* FETCH_USER */],
    meta: {
      userId: userId,
      onSuccess: onSuccess
    },
    payload: {
      promise: axios_default.a.get("/api/users/".concat(userId), {
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      })
    }
  };
}

/*
 * Fetch the complete user object.
 */
function fetchUser(userId) {
  return function (dispatch) {
    dispatch(fetchUserDetail(userId));
    dispatch(fetchUserLogs(userId));
    dispatch(fetchUserDevices(userId));
  };
}

/*
 * Get confirmation to remove MFA from a user.
 */
function requestRemoveMultiFactor(user) {
  return {
    type: constants["ic" /* REQUEST_REMOVE_MULTIFACTOR */],
    user: user
  };
}

/*
 * Cancel the removal process.
 */
function user_cancelRemoveMultiFactor() {
  return {
    type: constants["m" /* CANCEL_REMOVE_MULTIFACTOR */]
  };
}

/*
 * Remove multi factor from a user.
 */
function removeMultiFactor(userId, provider) {
  return function (dispatch) {
    dispatch({
      type: constants["Wb" /* REMOVE_MULTIFACTOR */],
      payload: {
        promise: axios_default.a.delete("/api/users/".concat(userId, "/multifactor/").concat(provider))
      },
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      }
    });
  };
}

/*
 * Get confirmation to block a user.
 */
function requestBlockUser(user) {
  return {
    type: constants["ac" /* REQUEST_BLOCK_USER */],
    user: user
  };
}

/*
 * Cancel blocking a user.
 */
function user_cancelBlockUser() {
  return {
    type: constants["e" /* CANCEL_BLOCK_USER */]
  };
}

/*
 * Update the user details.
 */
function updateUser(userId, data, _onSuccess, languageDictionary) {
  return function (dispatch) {
    dispatch({
      type: constants["Bc" /* UPDATE_USER */],
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          if (_onSuccess) {
            _onSuccess();
          }
          dispatch(fetchUserDetail(userId));
        }
      },
      payload: {
        promise: axios_default.a.put(addRequiredTextParam("/api/users/".concat(userId), languageDictionary), data, {
          responseType: 'json'
        })
      }
    });
  };
}
/*
 * Block a user.
 */
function blockUser() {
  return function (dispatch, getState) {
    var userId = getState().block.get('user').get('user_id');
    dispatch({
      type: constants["a" /* BLOCK_USER */],
      payload: {
        promise: axios_default.a.put("/api/users/".concat(userId, "/block"))
      },
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      }
    });
  };
}

/*
 * Get confirmation to unblock a user.
 */
function requestUnblockUser(user) {
  return {
    type: constants["kc" /* REQUEST_UNBLOCK_USER */],
    user: user
  };
}

/*
 * Get confirmation to remove user blocks.
 */
function requestRemoveBlockedIPs(user) {
  return {
    type: constants["hc" /* REQUEST_REMOVE_BLOCKED_IPS */],
    user: user
  };
}

/*
 * Cancel unblocking a user.
 */
function user_cancelUnblockUser() {
  return {
    type: constants["o" /* CANCEL_UNBLOCK_USER */]
  };
}

/*
 * Cancel removing user blocks.
 */
function user_cancelRemoveBlocks() {
  return {
    type: constants["l" /* CANCEL_REMOVE_BLOCKED_IPS */]
  };
}

/*
 * Unblock a user.
 */
function unblockUser() {
  return function (dispatch, getState) {
    var userId = getState().unblock.get('user').get('user_id');
    dispatch({
      type: constants["tc" /* UNBLOCK_USER */],
      payload: {
        promise: axios_default.a.put("/api/users/".concat(userId, "/unblock"))
      },
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      }
    });
  };
}

/*
 * Unblock a user.
 */
function removeUserBlocks() {
  return function (dispatch, getState) {
    var userId = getState().removeBlockedIPs.get('user').get('user_id');
    dispatch({
      type: constants["Sb" /* REMOVE_BLOCKED_IPS */],
      payload: {
        promise: axios_default.a.delete("/api/users/".concat(userId, "/blocks"))
      },
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      }
    });
  };
}

/*
 * Get confirmation to delete a user.
 */
function requestDeleteUser(user) {
  return {
    type: constants["cc" /* REQUEST_DELETE_USER */],
    user: user
  };
}

/*
 * Cancel the delete process.
 */
function user_cancelDeleteUser() {
  return {
    type: constants["g" /* CANCEL_DELETE_USER */]
  };
}

/*
 * Delete user.
 */
function deleteUser() {
  return function (dispatch, getState) {
    var _getState$userDelete$ = getState().userDelete.toJS(),
      user_id = _getState$userDelete$.user.user_id;
    dispatch({
      type: constants["v" /* DELETE_USER */],
      payload: {
        promise: axios_default.a.delete("/api/users/".concat(user_id))
      },
      meta: {
        userId: user_id,
        onSuccess: function onSuccess() {
          dispatch(Object(react_router_redux_lib["push"])('/users'));
        }
      }
    });
  };
}

/*
 * Get confirmation to reset a password.
 */
function requestPasswordReset(user, connection) {
  return {
    type: constants["gc" /* REQUEST_PASSWORD_RESET */],
    user: user,
    connection: connection
  };
}

/*
 * Cancel the password reset process.
 */
function user_cancelPasswordReset() {
  return {
    type: constants["k" /* CANCEL_PASSWORD_RESET */]
  };
}

/*
 * Reset password.
 */
function resetPassword(application) {
  return function (dispatch, getState) {
    var _getState$passwordRes = getState().passwordReset.toJS(),
      user_id = _getState$passwordRes.user.user_id,
      connection = _getState$passwordRes.connection;
    var clientId = application.client ? application.client.value || application.client : null;
    dispatch({
      type: constants["Ob" /* PASSWORD_RESET */],
      payload: {
        promise: axios_default.a.post("/api/users/".concat(user_id, "/password-reset"), {
          connection: connection,
          clientId: clientId
        })
      },
      meta: {
        userId: user_id
      }
    });
  };
}

/*
 * Get confirmation to change a password.
 */
function requestPasswordChange(user, connection) {
  return {
    type: constants["fc" /* REQUEST_PASSWORD_CHANGE */],
    user: user,
    connection: connection
  };
}

/*
 * Cancel the password change process.
 */
function user_cancelPasswordChange() {
  return {
    type: constants["j" /* CANCEL_PASSWORD_CHANGE */]
  };
}

/*
 * Change password.
 */
function changePassword(formData, languageDictionary) {
  return function (dispatch, getState) {
    var _getState$passwordCha = getState().passwordChange.toJS(),
      user_id = _getState$passwordCha.user.user_id,
      connection = _getState$passwordCha.connection;
    dispatch({
      type: constants["Kb" /* PASSWORD_CHANGE */],
      payload: {
        promise: axios_default.a.put(addRequiredTextParam("/api/users/".concat(user_id, "/change-password"), languageDictionary), {
          connection: connection,
          password: formData.password,
          repeatPassword: formData.repeatPassword
        })
      },
      meta: {
        userId: user_id
      }
    });
  };
}

/*
 * Get confirmation to change a username.
 */
function requestUsernameChange(user, connection, customField) {
  return {
    type: constants["lc" /* REQUEST_USERNAME_CHANGE */],
    user: user,
    connection: connection,
    customField: customField
  };
}

/*
 * Cancel the username change process.
 */
function user_cancelUsernameChange() {
  return {
    type: constants["p" /* CANCEL_USERNAME_CHANGE */]
  };
}

/*
 * Change username.
 */
function changeUsername(userId, data, languageDictionary) {
  return function (dispatch, getState) {
    var user = getState().user.get('record').toJS();
    user.username = data.username;
    dispatch({
      type: constants["Cc" /* USERNAME_CHANGE */],
      meta: {
        user: user,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      },
      payload: {
        promise: axios_default.a.put(addRequiredTextParam("/api/users/".concat(userId, "/change-username"), languageDictionary), data, {
          responseType: 'json'
        })
      }
    });
  };
}

/*
 * Get confirmation to change a email.
 */
function requestEmailChange(user, connection, customField) {
  return {
    type: constants["dc" /* REQUEST_EMAIL_CHANGE */],
    user: user,
    connection: connection,
    customField: customField
  };
}

/*
 * Cancel the email change process.
 */
function user_cancelEmailChange() {
  return {
    type: constants["h" /* CANCEL_EMAIL_CHANGE */]
  };
}

/*
 * Change email.
 */
function changeEmail(user, data, languageDictionary) {
  return function (dispatch) {
    var userId = user.user_id;
    user.email = data.email;
    dispatch({
      type: constants["z" /* EMAIL_CHANGE */],
      meta: {
        user: user,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      },
      payload: {
        promise: axios_default.a.put(addRequiredTextParam("/api/users/".concat(userId, "/change-email"), languageDictionary), data, {
          responseType: 'json'
        })
      }
    });
  };
}

/*
 * Get confirmation to change a email.
 */
function requestResendVerificationEmail(user, connection) {
  return {
    type: constants["jc" /* REQUEST_RESEND_VERIFICATION_EMAIL */],
    user: user,
    connection: connection
  };
}

/*
 * Cancel the email change process.
 */
function user_cancelResendVerificationEmail() {
  return {
    type: constants["n" /* CANCEL_RESEND_VERIFICATION_EMAIL */]
  };
}

/*
 * Resend verification email.
 */
function resendVerificationEmail(userId) {
  return function (dispatch) {
    var data = {
      user_id: userId
    };
    dispatch({
      type: constants["mc" /* RESEND_VERIFICATION_EMAIL */],
      meta: {
        userId: userId,
        onSuccess: function onSuccess() {
          dispatch(fetchUserDetail(userId));
        }
      },
      payload: {
        promise: axios_default.a.post("/api/users/".concat(userId, "/send-verification-email"), data, {
          responseType: 'json'
        })
      }
    });
  };
}
// CONCATENATED MODULE: ./client/actions/script.js



function fetchScript(name) {
  return {
    type: constants["bb" /* FETCH_SCRIPT */],
    payload: {
      promise: axios_default.a.get("/api/scripts/".concat(name), {
        responseType: 'json'
      })
    },
    meta: {
      name: name
    }
  };
}
function updateScript(name, script) {
  return function (dispatch) {
    dispatch({
      type: constants["xc" /* UPDATE_SCRIPT */],
      meta: {
        name: name,
        script: script,
        onSuccess: function onSuccess() {
          if (name === 'settings') {
            return dispatch(getAppSettings());
          }
        }
      },
      payload: {
        promise: axios_default.a.post("/api/scripts/".concat(name), {
          script: script
        }, {
          responseType: 'json'
        })
      }
    });
  };
}
// CONCATENATED MODULE: ./client/actions/index.js
















// EXTERNAL MODULE: ./node_modules/auth0-extension-ui/dist/index.js
var dist = __webpack_require__(7);

// EXTERNAL MODULE: ./client/components/Header.styles.css
var Header_styles = __webpack_require__(1021);

// CONCATENATED MODULE: ./client/components/Header.jsx






function _callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var Header_Header = /*#__PURE__*/function (_Component) {
  function Header() {
    var _this;
    classCallCheck_default()(this, Header);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Header, [].concat(args));
    defineProperty_default()(_this, "onKeyUp", function (event) {
      if (event && event.key === 'Enter') {
        event.target.click();
      }
    });
    defineProperty_default()(_this, "renderTitle", function (isAdmin) {
      if (isAdmin && window.config.AUTH0_MANAGE_URL) {
        return /*#__PURE__*/react_default.a.createElement("a", {
          className: "navbar-brand",
          href: window.config.AUTH0_MANAGE_URL
        }, _this.props.getDictValue('title', window.config.TITLE));
      }
      return /*#__PURE__*/react_default.a.createElement("span", {
        className: "navbar-brand"
      }, _this.props.getDictValue('title', window.config.TITLE));
    });
    return _this;
  }
  inherits_default()(Header, _Component);
  return createClass_default()(Header, [{
    key: "getName",
    value: function getName(iss, user) {
      var thisMenuName = this.props.getDictValue('menuName');
      thisMenuName = thisMenuName || user && user.get('name');
      thisMenuName = thisMenuName || user && user.get('nickname');
      thisMenuName = thisMenuName || user && user.get('email');
      thisMenuName = thisMenuName || iss;
      return thisMenuName.length >= 21 ? thisMenuName.substr(0, 18) + '...' : thisMenuName;
    }
  }, {
    key: "getPicture",
    value: function getPicture(iss, user) {
      if (user && user.get('picture')) {
        return user.get('picture');
      }
      if (user && user.get('nickname')) {
        return "https://cdn.auth0.com/avatars/".concat(user.get('nickname').slice(0, 2).toLowerCase(), ".png");
      }
      return "https://cdn.auth0.com/avatars/".concat(iss.slice(0, 2).toLowerCase(), ".png");
    }
  }, {
    key: "showOnFocus",
    value: function showOnFocus() {
      document.querySelector('#navbar-collapse li.dropdown').classList.add('open');
    }
  }, {
    key: "hideOnBlur",
    value: function hideOnBlur() {
      document.querySelector('#navbar-collapse li.dropdown').classList.remove('open');
    }
  }, {
    key: "renderCssSwitcher",
    value: function renderCssSwitcher(languageDictionary) {
      if (this.props.renderCssToggle) {
        var toggleTextDefault = languageDictionary.toggleStyleSetDefault || 'Use Default Style';
        var toggleTextAlt = languageDictionary.toggleStyleSetAlternative || 'Use Alternative Style';
        var text = this.props.styleSettings.get('useAlt') ? toggleTextDefault : toggleTextAlt;
        return /*#__PURE__*/react_default.a.createElement("li", {
          role: "presentation"
        }, /*#__PURE__*/react_default.a.createElement("a", {
          role: "menuitem",
          onClick: this.props.onCssToggle,
          onFocus: this.showOnFocus,
          onBlur: this.hideOnBlur,
          onKeyUp: this.onKeyUp,
          tabIndex: "0"
        }, text));
      }
      return '';
    }
  }, {
    key: "getMenu",
    value: function getMenu(isAdmin, languageDictionary) {
      if (!isAdmin) {
        return /*#__PURE__*/react_default.a.createElement("ul", {
          role: "menu",
          className: "dropdown-menu"
        }, this.renderCssSwitcher(languageDictionary), /*#__PURE__*/react_default.a.createElement("li", {
          role: "presentation"
        }, /*#__PURE__*/react_default.a.createElement("a", {
          role: "menuitem",
          onClick: this.props.onLogout,
          onFocus: this.showOnFocus,
          onBlur: this.hideOnBlur,
          onKeyUp: this.onKeyUp,
          tabIndex: "0"
        }, languageDictionary.logoutMenuItemText || 'Logout')));
      }
      return /*#__PURE__*/react_default.a.createElement("ul", {
        role: "menu",
        className: "dropdown-menu"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        role: "presentation"
      }, /*#__PURE__*/react_default.a.createElement(react_router_lib["Link"], {
        to: "/users",
        onFocus: this.showOnFocus,
        onBlur: this.hideOnBlur
      }, languageDictionary.usersAndLogsMenuItemText || 'Users & Logs')), /*#__PURE__*/react_default.a.createElement("li", {
        role: "presentation"
      }, /*#__PURE__*/react_default.a.createElement(react_router_lib["Link"], {
        to: "/configuration",
        onFocus: this.showOnFocus,
        onBlur: this.hideOnBlur
      }, languageDictionary.configurationMenuItemText || 'Configuration')), this.renderCssSwitcher(languageDictionary), /*#__PURE__*/react_default.a.createElement("li", {
        role: "presentation"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        role: "menuitem",
        onClick: this.props.onLogout,
        onFocus: this.showOnFocus,
        onBlur: this.hideOnBlur,
        onKeyUp: this.onKeyUp,
        tabIndex: "0"
      }, languageDictionary.logoutMenuItemText || 'Logout')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        user = _this$props.user,
        issuer = _this$props.issuer,
        accessLevel = _this$props.accessLevel;
      var languageDictionary = this.props.languageDictionary || {};
      var isAdmin = accessLevel.role === 3;
      return /*#__PURE__*/react_default.a.createElement("header", {
        className: "dashboard-header"
      }, /*#__PURE__*/react_default.a.createElement("nav", {
        title: "header",
        role: "navigation",
        className: "navbar navbar-default"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        id: "header",
        className: "navbar-header",
        style: {
          width: '800px'
        }
      }, this.renderTitle(isAdmin)), /*#__PURE__*/react_default.a.createElement("div", {
        id: "navbar-collapse",
        className: "collapse navbar-collapse"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "nav navbar-nav navbar-right"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        className: "dropdown"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        role: "button",
        "data-toggle": "dropdown",
        "data-target": "#",
        className: "btn-dro btn-username"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        role: "presentation",
        src: this.getPicture(issuer, user),
        className: "picture avatar",
        alt: languageDictionary.adminAvatarTitle || 'Avatar',
        title: languageDictionary.adminAvatarTitle || 'Avatar'
      }), /*#__PURE__*/react_default.a.createElement("span", {
        className: "username-text"
      }, this.getName(issuer, user)), /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-budicon-460"
      })), this.getMenu(isAdmin, languageDictionary)))))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(Header_Header, "propTypes", {
  user: prop_types_default.a.object,
  getDictValue: prop_types_default.a.func,
  accessLevel: prop_types_default.a.object,
  issuer: prop_types_default.a.string,
  onLogout: prop_types_default.a.func.isRequired,
  onCssToggle: prop_types_default.a.func.isRequired,
  renderCssToggle: prop_types_default.a.bool,
  styleSettings: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object
});

// CONCATENATED MODULE: ./client/containers/App.jsx






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function App_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, App_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function App_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (App_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var App_App = /*#__PURE__*/function (_Component) {
  function App() {
    var _this;
    classCallCheck_default()(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = App_callSuper(this, App, [].concat(args));
    defineProperty_default()(_this, "getDictValue", function (index, defaultValue) {
      var appSettings = _this.props.settings;
      var val = '';
      if (appSettings.get('settings') && appSettings.get('settings').get('dict')) {
        val = appSettings.get('settings').get('dict').get(index);
      }
      return val || defaultValue;
    });
    defineProperty_default()(_this, "onLogout", function () {
      var appSettings = _this.props.settings;
      var logoutUrl;
      if (appSettings.get('settings') && appSettings.get('settings').get('dict')) {
        logoutUrl = appSettings.get('settings').get('dict').get('logoutUrl');
      }
      _this.props.logout(logoutUrl);
    });
    return _this;
  }
  inherits_default()(App, _Component);
  return createClass_default()(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.getAppSettings();
      this.props.fetchApplications();
      this.props.fetchConnections();
      this.props.getAccessLevel();
      this.props.getStyleSettings();
    }
  }, {
    key: "render",
    value: function render() {
      var settingsLoading = this.props.settingsLoading;
      var languageDictionary = this.props.languageDictionary ? this.props.languageDictionary.toJS() : {};
      var settings = this.props.settings.get('settings') && this.props.settings.get('settings').toJS();
      var renderCssToggle = !!(settings && settings.css && settings.altcss);
      if (settingsLoading) {
        return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
          show: settingsLoading
        });
      }
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Header_Header, {
        user: this.props.user,
        issuer: this.props.issuer,
        getDictValue: this.getDictValue,
        onLogout: this.onLogout,
        onCssToggle: this.props.toggleStyleSettings,
        accessLevel: this.props.accessLevel.toJSON(),
        styleSettings: this.props.styleSettings,
        languageDictionary: languageDictionary,
        renderCssToggle: renderCssToggle
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("section", {
        className: "content-page current"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        id: "content-area",
        className: "tab-content"
      }, /*#__PURE__*/react_default.a.cloneElement(this.props.children, {
        accessLevel: this.props.accessLevel.toJSON(),
        appSettings: this.props.settings.toJSON(),
        getDictValue: this.getDictValue
      })))))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(App_App, "propTypes", {
  user: prop_types_default.a.object,
  settings: prop_types_default.a.object,
  issuer: prop_types_default.a.string,
  logout: prop_types_default.a.func,
  settingsLoading: prop_types_default.a.bool,
  styleSettings: prop_types_default.a.bool,
  fetchApplications: prop_types_default.a.func.isRequired,
  fetchConnections: prop_types_default.a.func.isRequired,
  getAccessLevel: prop_types_default.a.func.isRequired,
  getAppSettings: prop_types_default.a.func.isRequired,
  toggleStyleSettings: prop_types_default.a.func.isRequired,
  languageDictionary: prop_types_default.a.object.isRequired
});
function App_select(state) {
  return {
    issuer: state.auth.get('issuer'),
    user: state.auth.get('user'),
    accessLevel: state.accessLevel.get('record'),
    settings: state.settings.get('record'),
    styleSettings: state.styleSettings,
    settingsLoading: state.settings.get('loading'),
    languageDictionary: state.languageDictionary.get('record')
  };
}
/* harmony default export */ var containers_App = (Object(react_redux_lib["connect"])(App_select, _objectSpread(_objectSpread(_objectSpread({
  logout: logout
}, application_namespaceObject), connection_namespaceObject), auth_namespaceObject))(App_App));
// CONCATENATED MODULE: ./client/containers/Login.jsx






function Login_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, Login_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function Login_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Login_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var Login_LoginContainer = /*#__PURE__*/function (_Component) {
  function LoginContainer() {
    classCallCheck_default()(this, LoginContainer);
    return Login_callSuper(this, LoginContainer, arguments);
  }
  inherits_default()(LoginContainer, _Component);
  return createClass_default()(LoginContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.push(this.props.auth.returnTo || '/users');
      } else if (!this.props.auth.isAuthenticating && !this.props.auth.error) {
        // reset the local storage for locale
        this.props.login(this.props.location.query.returnUrl, window.config.LOCALE || 'en');
      }
    }
  }, {
    key: "login",
    value: function login() {
      this.props.login(this.props.location.query.returnUrl, window.config.LOCALE || 'en');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        auth = _this$props.auth,
        languageDictionary = _this$props.languageDictionary;
      if (auth.error) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "row"
        }, /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
          dialogClassName: "login-error",
          confirmMessage: languageDictionary.loginErrorButtonText || "Login",
          loading: false,
          title: languageDictionary.loginErrorTitle || "Login Error",
          show: this.props.auth.error,
          onConfirm: this.login.bind(this)
        }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
          show: true,
          message: this.props.auth.error
        })));
      }
      if (!auth.isAuthenticating) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 wrapper"
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], null)));
    }
  }]);
}(react["Component"]);
defineProperty_default()(Login_LoginContainer, "propTypes", {
  login: prop_types_default.a.func.isRequired,
  push: prop_types_default.a.func.isRequired,
  auth: prop_types_default.a.object.isRequired,
  location: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object.isRequired
});
function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    languageDictionary: state.languageDictionary.get('record').toJS()
  };
}
/* harmony default export */ var Login = (Object(react_redux_lib["connect"])(mapStateToProps, {
  login: login,
  push: react_router_redux_lib["push"]
})(Login_LoginContainer));
// EXTERNAL MODULE: ./node_modules/react-bootstrap/lib/index.js
var react_bootstrap_lib = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(5);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./client/utils/getErrorMessage.js
var defaultMessages = {
  defaultErrorMessage: 'Unknown Error',
  FETCH_ACCESS_LEVEL: {
    default: 'An error occurred while loading the settings: {message}'
  },
  FETCH_APPLICATIONS: {
    default: 'An error occurred while loading the applications: {message}'
  },
  BLOCK_USER: {
    default: 'An error occurred while blocking the user: {message}'
  },
  FETCH_CONNECTIONS: {
    default: 'An error occurred while loading the connections: {message}'
  },
  EMAIL_CHANGE: {
    default: 'An error occurred while changing the email: {message}'
  },
  FIELDS_CHANGE: {
    default: 'An error occurred while changing the users fields: {message}'
  },
  FETCH_LANGUAGE_DICTIONARY: {
    default: 'An error occurred while loading the language dictionary: {message}'
  },
  FETCH_LOG: {
    default: 'An error occurred while loading the log record: {message}'
  },
  FETCH_LOGS: {
    default: 'An error occurred while loading the logs list: {message}'
  },
  REMOVE_MULTIFACTOR: {
    default: 'An error occurred while removing multi factor authentication for the user: {message}'
  },
  PASSWORD_CHANGE: {
    default: 'An error occurred while changing the password: {message}'
  },
  PASSWORD_RESET: {
    default: 'An error occurred while resetting the password: {message}'
  },
  FETCH_SCRIPT: {
    default: 'An error occurred while loading the script: {message}'
  },
  UPDATE_SCRIPT: {
    default: 'An error occurred while saving the script: {message}'
  },
  FETCH_SETTINGS: {
    default: 'An error occurred while loading the settings: {message}'
  },
  UNBLOCK_USER: {
    default: 'An error occurred while unblocking the user: {message}'
  },
  REMOVE_BLOCKS: {
    default: 'An error occurred while removing anomaly blocks: {message}'
  },
  FETCH_USER_LOGS: {
    default: 'An error occurred while loading the user logs: {message}'
  },
  FETCH_USER_DEVICES: {
    default: 'An error occurred while loading the user devices: {message}'
  },
  FETCH_USER: {
    default: 'An error occurred while loading the user: {message}'
  },
  CREATE_USER: {
    default: 'An error occurred while creating the user: {message}'
  },
  DELETE_USER: {
    default: 'An error occurred while deleting the user: {message}'
  },
  USERNAME_CHANGE: {
    default: 'An error occurred while changing the username: {message}'
  },
  FETCH_USERS: {
    default: 'An error occurred while loading the users list: {message}'
  },
  RESEND_VERIFICATION_EMAIL: {
    default: 'An error occurred while sending verification email: {message}'
  }
};
/* harmony default export */ var getErrorMessage = (function (languageDictionary, error, translator) {
  languageDictionary = languageDictionary || {};
  var errors = languageDictionary.errors || {};
  if (!error) {
    return null;
  }
  error = error.toJS ? error.toJS() : error;
  var messages = Object.assign({}, defaultMessages, errors);
  var message = messages[error.type] && messages[error.type][error.status] || messages[error.type].default;
  if (translator) {
    return message.replace('{message}', translator(error, languageDictionary) || messages.defaultErrorMessage);
  }
  return message.replace('{message}', error.message || messages.defaultErrorMessage);
});
// CONCATENATED MODULE: ./client/components/Logs/LogDialog.jsx






function LogDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, LogDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function LogDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (LogDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var LogDialog_LogDialog = /*#__PURE__*/function (_Component) {
  function LogDialog() {
    classCallCheck_default()(this, LogDialog);
    return LogDialog_callSuper(this, LogDialog, arguments);
  }
  inherits_default()(LogDialog, _Component);
  return createClass_default()(LogDialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        logId = _this$props.logId,
        error = _this$props.error,
        loading = _this$props.loading,
        onClose = _this$props.onClose,
        settings = _this$props.settings;
      if (logId === null) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      var languageDictionary = this.props.languageDictionary || {};
      var log = this.props.log.toJS();
      var logType = lodash_default.a.get(languageDictionary, "logTypes.".concat(log.shortType, ".event"), log.type);
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"], {
        show: logId !== null,
        onHide: onClose
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Header, {
        closeButton: !loading
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Title, null, languageDictionary.logDialogTitleText || 'Log', " - ", /*#__PURE__*/react_default.a.createElement("span", null, logType || languageDictionary.logDialogDefaultLogRecordText || 'Log Record'))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Body, null, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading,
        spinnerStyle: {
          height: '16px',
          width: '16px'
        },
        animationStyle: {
          paddingTop: '0px',
          paddingBottom: '0px',
          marginTop: '0px',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }, /*#__PURE__*/react_default.a.createElement(dist["Json"], {
        jsonObject: log
      })))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Footer, null, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        disabled: loading,
        onClick: onClose
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon icon-budicon-501"
      }), " ", languageDictionary.closeButtonText || 'Close')));
    }
  }]);
}(react["Component"]);
defineProperty_default()(LogDialog_LogDialog, "propTypes", {
  onClose: prop_types_default.a.func.isRequired,
  log: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  error: prop_types_default.a.string,
  loading: prop_types_default.a.bool.isRequired,
  logId: prop_types_default.a.string,
  languageDictionary: prop_types_default.a.object
});

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(4);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./client/components/Logs/LogsTable.jsx






function LogsTable_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, LogsTable_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function LogsTable_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (LogsTable_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var LogsTable_LogsTable = /*#__PURE__*/function (_Component) {
  function LogsTable() {
    classCallCheck_default()(this, LogsTable);
    return LogsTable_callSuper(this, LogsTable, arguments);
  }
  inherits_default()(LogsTable, _Component);
  return createClass_default()(LogsTable, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.logs !== this.props.logs || nextProps.loading !== this.props.loading;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        error = _this$props.error,
        loading = _this$props.loading,
        settings = _this$props.settings;
      var languageDictionary = this.props.languageDictionary || {};
      var suppressRawData = settings && settings.suppressRawData === true;
      if (!error && this.props.logs.size === 0) {
        return /*#__PURE__*/react_default.a.createElement("div", null, languageDictionary.noLogsMessage || 'No logs found');
      }
      var logs = this.props.logs.toJS();
      return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement(dist["Table"], null, /*#__PURE__*/react_default.a.createElement(dist["TableHeader"], null, /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "3%"
      }), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "20%"
      }, languageDictionary.logEventColumnHeader || 'Event'), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "25%"
      }, languageDictionary.logDescriptionColumnHeader || 'Description'), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "12%"
      }, languageDictionary.logDateColumnHeader || 'Date'), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "15%"
      }, languageDictionary.logConnectionColumnHeader || 'Connection'), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "15%"
      }, languageDictionary.logApplicationColumnHeader || 'Application')), /*#__PURE__*/react_default.a.createElement(dist["TableBody"], null, logs.map(function (log, index) {
        var icon = log.type.icon;
        var onClick = suppressRawData ? null : function () {
          return _this.props.onOpen(log._id);
        };
        var logType = lodash_default.a.get(languageDictionary, "logTypes.".concat(log.shortType, ".event"), log.type.event);
        var logDescription = lodash_default.a.get(languageDictionary, "logTypes.".concat(log.shortType, ".description"), languageDictionary.logTableDefaultLogRecordDescription || log.description || log.type.description);
        var descriptionText = _this.props.isUserLogs ? logDescription || log.user_name : log.user_name || logDescription;
        log.time_ago = moment_default()(log.date).locale(languageDictionary.momentLocale || 'en').fromNow();
        return /*#__PURE__*/react_default.a.createElement(dist["TableRow"], {
          key: index
        }, /*#__PURE__*/react_default.a.createElement(dist["TableIconCell"], {
          color: icon.color,
          icon: icon.name,
          title: logType
        }), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], {
          onClick: onClick
        }, logType || languageDictionary.logDialogDefaultLogRecordText || 'Log Record'), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, descriptionText), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, log.time_ago), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, log.connection || languageDictionary.notApplicableLabel || 'N/A'), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, log.client_name || languageDictionary.notApplicableLabel || 'N/A'));
      }))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(LogsTable_LogsTable, "propTypes", {
  onOpen: prop_types_default.a.func.isRequired,
  error: prop_types_default.a.string,
  loading: prop_types_default.a.bool.isRequired,
  logs: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  isUserLogs: prop_types_default.a.bool,
  languageDictionary: prop_types_default.a.object
});

;
// CONCATENATED MODULE: ./client/components/TabsHeader.jsx






function TabsHeader_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, TabsHeader_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function TabsHeader_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TabsHeader_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var TabsHeader_TabsHeader = /*#__PURE__*/function (_Component) {
  function TabsHeader() {
    classCallCheck_default()(this, TabsHeader);
    return TabsHeader_callSuper(this, TabsHeader, arguments);
  }
  inherits_default()(TabsHeader, _Component);
  return createClass_default()(TabsHeader, [{
    key: "render",
    value: function render() {
      var hasLogsAccess = this.props.role >= 2;
      var languageDictionary = this.props.languageDictionary || {};
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "widget-title title-with-nav-bars"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, /*#__PURE__*/react_default.a.createElement(dist["TabPane"], {
        title: languageDictionary.userUsersTabTitle || "Users",
        route: "users"
      }), hasLogsAccess ? /*#__PURE__*/react_default.a.createElement(dist["TabPane"], {
        title: languageDictionary.userLogsTabTitle || "Logs",
        route: "logs"
      }) : null));
    }
  }]);
}(react["Component"]);
defineProperty_default()(TabsHeader_TabsHeader, "propTypes", {
  role: prop_types_default.a.number,
  languageDictionary: prop_types_default.a.object
});

// CONCATENATED MODULE: ./client/containers/Logs.jsx






function Logs_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, Logs_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function Logs_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Logs_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }










var Logs_LogsContainer = /*#__PURE__*/function (_Component) {
  function LogsContainer() {
    var _this;
    classCallCheck_default()(this, LogsContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = Logs_callSuper(this, LogsContainer, [].concat(args));
    defineProperty_default()(_this, "refresh", function () {
      _this.props.fetchLogs();
    });
    defineProperty_default()(_this, "loadMore", function () {
      _this.props.fetchLogs(_this.props.logs.nextPage);
    });
    return _this;
  }
  inherits_default()(LogsContainer, _Component);
  return createClass_default()(LogsContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchLogs();
    }
  }, {
    key: "createToolbar",
    value: function createToolbar() {
      var isBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var languageDictionary = this.props.languageDictionary;
      if (isBottom && (!this.props.logs.records || this.props.logs.records.size <= 20)) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["ButtonToolbar"], {
        className: "pull-right"
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsSize: "small",
        onClick: this.refresh,
        disabled: this.props.logs.loading
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon icon-budicon-257"
      }), " ", languageDictionary.logsRefreshButtonText || 'Refresh'), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsStyle: "primary",
        bsSize: "small",
        disabled: this.props.logs.loading,
        onClick: this.loadMore
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon icon-budicon-686"
      }), " ", languageDictionary.logsLoadMoreButtonText || 'Load More'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        log = _this$props.log,
        logs = _this$props.logs,
        accessLevel = _this$props.accessLevel,
        languageDictionary = _this$props.languageDictionary,
        settings = _this$props.settings;
      var originalTitle = settings.dict && settings.dict.title || window.config.TITLE || 'User Management';
      document.title = "".concat(languageDictionary.userLogsTabTitle || 'Logs', " - ").concat(originalTitle);
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(TabsHeader_TabsHeader, {
        role: accessLevel.role,
        languageDictionary: languageDictionary
      }), /*#__PURE__*/react_default.a.createElement(LogDialog_LogDialog, {
        onClose: this.props.clearLog,
        error: log.error,
        loading: log.loading,
        log: log.record,
        logId: log.id,
        settings: settings,
        languageDictionary: languageDictionary
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 wrapper"
      }, this.createToolbar(false))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 wrapper"
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, logs.error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: logs.loading
      }, /*#__PURE__*/react_default.a.createElement(LogsTable_LogsTable, {
        onOpen: this.props.fetchLog,
        loading: logs.loading,
        logs: logs.records,
        settings: settings,
        languageDictionary: languageDictionary
      })))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 wrapper"
      }, this.createToolbar(true))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(Logs_LogsContainer, "propTypes", {
  clearLog: prop_types_default.a.func.isRequired,
  fetchLog: prop_types_default.a.func.isRequired,
  fetchLogs: prop_types_default.a.func.isRequired,
  log: prop_types_default.a.object,
  accessLevel: prop_types_default.a.object,
  logs: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object.isRequired
});
function Logs_mapStateToProps(state) {
  return {
    logs: {
      error: state.logs.get('error'),
      loading: state.logs.get('loading'),
      records: state.logs.get('records'),
      total: state.logs.get('total'),
      nextPage: state.logs.get('nextPage')
    },
    log: {
      record: state.log.get('record'),
      id: state.log.get('logId'),
      error: state.log.get('error'),
      loading: state.log.get('loading')
    },
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary.get('record').toJS()
  };
}
/* harmony default export */ var Logs = (Object(react_redux_lib["connect"])(Logs_mapStateToProps, log_namespaceObject)(Logs_LogsContainer));
// CONCATENATED MODULE: ./client/containers/RequireAuthentication.jsx






function RequireAuthentication_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, RequireAuthentication_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function RequireAuthentication_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RequireAuthentication_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





function RequireAuthentication(InnerComponent) {
  var RequireAuthenticationContainer = /*#__PURE__*/function (_React$Component) {
    function RequireAuthenticationContainer() {
      classCallCheck_default()(this, RequireAuthenticationContainer);
      return RequireAuthentication_callSuper(this, RequireAuthenticationContainer, arguments);
    }
    inherits_default()(RequireAuthenticationContainer, _React$Component);
    return createClass_default()(RequireAuthenticationContainer, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.requireAuthentication();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        this.requireAuthentication();
      }
    }, {
      key: "requireAuthentication",
      value: function requireAuthentication() {
        if (!this.props.auth.isAuthenticated && !this.props.auth.isAuthenticating) {
          if (!this.props.location) {
            this.props.push('/login');
          } else {
            this.props.push("/login?returnUrl=".concat(this.props.location.pathname).concat(this.props.location.search ? this.props.location.search : ''));
          }
        }
        axios_default.a.defaults.headers.common['dae-locale'] = window.config.LOCALE;
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.auth.isAuthenticated) {
          return /*#__PURE__*/react_default.a.createElement(InnerComponent, this.props);
        }
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
    }]);
  }(react_default.a.Component);
  defineProperty_default()(RequireAuthenticationContainer, "propTypes", {
    push: prop_types_default.a.func.isRequired,
    auth: prop_types_default.a.object.isRequired,
    location: prop_types_default.a.object.isRequired
  });
  return Object(react_redux_lib["connect"])(function (state) {
    return {
      auth: state.auth.toJS()
    };
  }, {
    push: react_router_redux_lib["push"]
  })(RequireAuthenticationContainer);
}
// EXTERNAL MODULE: ./node_modules/redux-static/lib/index.js
var redux_static_lib = __webpack_require__(33);
var redux_static_lib_default = /*#__PURE__*/__webpack_require__.n(redux_static_lib);

// EXTERNAL MODULE: ./client/containers/Users/User.styles.css
var User_styles = __webpack_require__(1159);

// CONCATENATED MODULE: ./client/containers/Users/Dialogs/getDialogMessage.js
var getDialogMessage = function getDialogMessage(message, fieldName, value) {
  var regexp = /^([^{]*){([^}]*)}(.*)$/; // rudimentary string replacement
  var match = regexp.exec(message);
  if (match && match[2].trim() === fieldName) {
    return "".concat(match[1]).concat(value).concat(match[3]);
  }
  return "".concat(message).concat(value);
};
/* harmony default export */ var Dialogs_getDialogMessage = (getDialogMessage);
// CONCATENATED MODULE: ./client/utils/display.js


var getProperty = function getProperty(obj, path) {
  var args = path.split('.'),
    i,
    l;
  for (i = 0, l = args.length; i < l; i++) {
    if (!obj.hasOwnProperty(args[i])) return;
    obj = obj[args[i]];
  }
  return obj;
};
var display_getName = function getName(user, fields, languageDictionary) {
  fields = fields || [];
  var field = lodash_default.a.find(fields, {
    property: 'name'
  });
  if (field) {
    return display_getValue(user, field, languageDictionary);
  }
  return user && (user.name || user.user_name || user.email);
};
var display_getValueForType = function getValueForType(type, user, field) {
  var languageDictionary = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var additionalData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var mergedField = lodash_default.a.assign({}, field, field[type]);
  return display_getValue(user, mergedField, languageDictionary, additionalData);
};
var display_getValue = function getValue(user, field) {
  var languageDictionary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var additionalData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!user || user.size === 0) {
    return null;
  }
  if (lodash_default.a.isFunction(field.display)) {
    try {
      return field.display(user, lodash_default.a.at(user, field.property), languageDictionary, additionalData);
    } catch (e) {
      /* Swallow eval errors */
      console.log("Could not display ".concat(field.property, " because: ").concat(e.message));
      return null;
    }
  }
  var value = getProperty(user, field.property);
  if (value === undefined) return null;
  if (field.type && field.type === 'elapsedTime') {
    value = moment_default()(value).locale(languageDictionary.momentLocale || 'en').fromNow();
  }
  if (lodash_default.a.isObject(value)) {
    value = JSON.stringify(value);
  }
  if (lodash_default.a.isBoolean(value)) {
    value = value ? languageDictionary.trueLabel || 'TRUE' : languageDictionary.falseLabel || 'FALSE';
  }
  return value;
};
var display_mapValues = function mapValues(user, fieldNames, fields, type) {
  var languageDictionary = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var additionalData = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var mappedUser = {};
  if (user) {
    fieldNames.forEach(function (fieldName) {
      var field = lodash_default.a.find(fields, {
        property: fieldName
      });
      if (field) {
        var value = display_getValueForType(type, user, field, languageDictionary, additionalData);
        if (value) mappedUser[fieldName] = value;
        return;
      }
      if (user[fieldName]) mappedUser[fieldName] = user[fieldName];
    });
  }
  return mappedUser;
};
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/BlockDialog.jsx






var BlockDialog_Class;
function BlockDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function BlockDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? BlockDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : BlockDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function BlockDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, BlockDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function BlockDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (BlockDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








/* harmony default export */ var BlockDialog = (redux_static_lib_default()((BlockDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = BlockDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.blockUser();
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.block !== this.props.block || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelBlockUser = _this$props.cancelBlockUser,
        settings = _this$props.settings;
      var _this$props$block$toJ = this.props.block.toJS(),
        user = _this$props$block$toJ.user,
        error = _this$props$block$toJ.error,
        requesting = _this$props$block$toJ.requesting,
        loading = _this$props$block$toJ.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.blockDialogMessage || 'Do you really want to block {username}? ' + 'After doing so the user will not be able to sign in anymore.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.blockDialogTitle || 'Block User?',
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelBlockUser,
        onConfirm: this.onConfirm,
        closeLabel: languageDictionary.closeButtonText
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message));
    }
  }]);
}(react["Component"]), defineProperty_default()(BlockDialog_Class, "stateToProps", function (state) {
  return {
    block: state.block,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(BlockDialog_Class, "actionsToProps", BlockDialog_objectSpread({}, user_namespaceObject)), defineProperty_default()(BlockDialog_Class, "propTypes", {
  cancelBlockUser: prop_types_default.a.func.isRequired,
  blockUser: prop_types_default.a.func.isRequired,
  block: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object
}), BlockDialog_Class)));
// EXTERNAL MODULE: ./client/utils/createReducer.js
var createReducer = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.js
var immutable = __webpack_require__(9);

// CONCATENATED MODULE: ./client/reducers/removeBlockedIPs.js

function removeBlockedIPs_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function removeBlockedIPs_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? removeBlockedIPs_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : removeBlockedIPs_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var removeBlockedIPs_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null
};
var removeBlockedIPs = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(removeBlockedIPs_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["hc" /* REQUEST_REMOVE_BLOCKED_IPS */], function (state, action) {
  return state.merge({
    user: Object(immutable["fromJS"])(action.user),
    requesting: true
  });
}), constants["l" /* CANCEL_REMOVE_BLOCKED_IPS */], function (state) {
  return state.merge(removeBlockedIPs_objectSpread({}, removeBlockedIPs_initialState));
}), constants["Ub" /* REMOVE_BLOCKED_IPS_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["Vb" /* REMOVE_BLOCKED_IPS_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Tb" /* REMOVE_BLOCKED_IPS_FULFILLED */], function (state) {
  return state.merge(removeBlockedIPs_objectSpread({}, removeBlockedIPs_initialState));
}));
// CONCATENATED MODULE: ./client/components/Users/UserActions.jsx






function UserActions_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserActions_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserActions_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserActions_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var UserActions_UserActions = /*#__PURE__*/function (_Component) {
  function UserActions(props) {
    var _this;
    classCallCheck_default()(this, UserActions);
    _this = UserActions_callSuper(this, UserActions, [props]);
    defineProperty_default()(_this, "getDeleteAction", function (user, loading) {
      var deleteField = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'delete' && field.edit === false;
      });
      if (deleteField.length > 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.deleteUser
      }, _this.state.languageDictionary.deleteUserMenuItemText || 'Delete User');
    });
    defineProperty_default()(_this, "getChangeFieldsAction", function (user, loading) {
      if (!_this.props.userFields || !_this.props.userFields.length) {
        return null;
      }

      /* Only display this if there are editable fields */
      var fieldsWithEdit = lodash_default.a.filter(_this.props.userFields, function (field) {
        return !lodash_default.a.includes(constants["qc" /* RESERVED_USER_FIELDS */], field.property) && field.edit;
      });
      if (fieldsWithEdit.length <= 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.changeFields
      }, _this.state.languageDictionary.changeFieldsMenuItemText || 'Change Profile');
    });
    defineProperty_default()(_this, "getResetPasswordAction", function (user, loading) {
      if (!_this.state.databaseConnections || !_this.state.databaseConnections.length) {
        return null;
      }

      /* Check if settings are disabling the editing of password */
      var falsePasswordEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'password' && field.edit === false;
      });
      var trueResetPasswordEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'resetPassword' && field.edit === true;
      });
      if (falsePasswordEditFields.length > 0 && trueResetPasswordEditFields.length <= 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.resetPassword
      }, _this.state.languageDictionary.resetPasswordMenuItemText || 'Reset Password');
    });
    defineProperty_default()(_this, "getChangePasswordAction", function (user, loading) {
      if (!_this.state.databaseConnections || !_this.state.databaseConnections.length) {
        return null;
      }

      /* Check if settings are disabling the editing of password */
      var falsePasswordEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'password' && field.edit === false;
      });
      if (falsePasswordEditFields.length > 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.changePassword
      }, _this.state.languageDictionary.changePasswordMenuItemText || 'Change Password');
    });
    defineProperty_default()(_this, "getChangeUsernameAction", function (user, loading) {
      if (!_this.state.databaseConnections || !_this.state.databaseConnections.length || !user.username) {
        return null;
      }

      /* Check if settings are disabling the editing of username */
      var falseUsernameEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'username' && field.edit === false;
      });
      if (falseUsernameEditFields.length > 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.changeUsername
      }, _this.state.languageDictionary.changeUsernameMenuItemText || 'Change Username');
    });
    defineProperty_default()(_this, "getChangeEmailAction", function (user, loading) {
      if (!_this.state.databaseConnections || !_this.state.databaseConnections.length) {
        return null;
      }

      /* Check if settings are disabling the editing of username */
      var falseEmailEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'email' && field.edit === false;
      });
      if (falseEmailEditFields.length > 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.changeEmail
      }, _this.state.languageDictionary.changeEmailMenuItemText || 'Change Email');
    });
    defineProperty_default()(_this, "getResendEmailVerificationAction", function (user, loading) {
      if (!_this.state.databaseConnections || !_this.state.databaseConnections.length || user.email_verified) {
        return null;
      }

      /* Check if resending verification email option is enabled */
      var falseTriggerEmailVerified = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'email_verified' && field.edit === false;
      });
      if (falseTriggerEmailVerified.length > 0) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.resendVerificationEmail
      }, _this.state.languageDictionary.resendVerificationEmailMenuItemText || "Resend Verification Email");
    });
    defineProperty_default()(_this, "getMultifactorAction", function (user, loading) {
      if (!user.multifactor || !user.multifactor.length) {
        return null;
      }
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.removeMfa
      }, _this.state.languageDictionary.removeMfaMenuItemText || "Remove MFA");
    });
    defineProperty_default()(_this, "getBlockedAction", function (user, loading) {
      if (user.blocked) {
        return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
          disabled: loading || false,
          onClick: _this.unblockUser
        }, _this.state.languageDictionary.unblockUserMenuItemText || "Unblock User");
      }
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
        disabled: loading || false,
        onClick: _this.blockUser
      }, _this.state.languageDictionary.blockUserMenuItemText || "Block User");
    });
    defineProperty_default()(_this, "getUserBlocksAction", function (user, loading) {
      if (user.blocked_for && user.blocked_for.length) {
        return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["MenuItem"], {
          disabled: loading || false,
          onClick: _this.removeBlockedIPs
        }, _this.state.languageDictionary.removeBlockedIPsMenuItemText || "Unblock for all IPs");
      }
      return null;
    });
    defineProperty_default()(_this, "deleteUser", function () {
      _this.props.deleteUser(_this.state.user);
    });
    defineProperty_default()(_this, "changeFields", function () {
      var languageDictionary = _this.props.languageDictionary;
      var ignoreFields = ['username', 'memberships', 'connection', 'password', 'email', 'repeatPassword'];
      var customFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return !lodash_default.a.includes(ignoreFields, field.property) && field.edit && lodash_default.a.isFunction(field.edit.display);
      });
      var user = Object.assign({}, _this.state.user);
      lodash_default.a.each(customFields, function (field) {
        try {
          lodash_default.a.update(user, field.property, function (value) {
            return field.edit.display(_this.state.user, value, languageDictionary);
          });
        } catch (e) {
          /* Swallow eval errors */
          console.log("Could not display ".concat(field.property, " because: ").concat(e.message));
        }
      });
      _this.props.changeFields(user);
    });
    defineProperty_default()(_this, "resetPassword", function () {
      _this.props.resetPassword(_this.state.user, _this.state.databaseConnections[0]);
    });
    defineProperty_default()(_this, "changePassword", function () {
      _this.props.changePassword(_this.state.user, _this.state.databaseConnections[0]);
    });
    defineProperty_default()(_this, "changeUsername", function () {
      var usernameEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'username' && field.edit !== false && field.edit;
      });
      _this.props.changeUsername(_this.state.user, _this.state.databaseConnections[0], UserActions.getDisplayObject(_this.state.user, usernameEditFields));
    });
    defineProperty_default()(_this, "changeEmail", function () {
      var emailEditFields = lodash_default.a.filter(_this.props.userFields, function (field) {
        return field.property === 'email' && field.edit !== false && field.edit;
      });
      _this.props.changeEmail(_this.state.user, _this.state.databaseConnections[0], UserActions.getDisplayObject(_this.state.user, emailEditFields));
    });
    defineProperty_default()(_this, "resendVerificationEmail", function () {
      _this.props.resendVerificationEmail(_this.state.user, _this.state.databaseConnections[0]);
    });
    defineProperty_default()(_this, "blockUser", function () {
      _this.props.blockUser(_this.state.user);
    });
    defineProperty_default()(_this, "unblockUser", function () {
      _this.props.unblockUser(_this.state.user);
    });
    defineProperty_default()(_this, "removeBlockedIPs", function () {
      _this.props.removeBlockedIPs(_this.state.user);
    });
    defineProperty_default()(_this, "removeMfa", function () {
      _this.props.removeMfa(_this.state.user);
    });
    if (props.user) {
      _this.state = {
        user: props.user.toJS(),
        loading: props.loading
      };
      if (props.databaseConnections) {
        _this.state.databaseConnections = props.databaseConnections.toJS();
      }
    } else {
      _this.state = {
        user: null,
        loading: false
      };
    }
    _this.state.languageDictionary = props.languageDictionary || {};
    return _this;
  }
  inherits_default()(UserActions, _Component);
  return createClass_default()(UserActions, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.user) {
        var _nextProps$user$toJS = nextProps.user.toJS(),
          record = _nextProps$user$toJS.record,
          loading = _nextProps$user$toJS.loading;
        this.setState({
          user: record,
          loading: loading
        });
      }
      if (nextProps.databaseConnections) {
        this.setState({
          databaseConnections: nextProps.databaseConnections.toJS()
        });
      }
      if (nextProps.languageDictionary) {
        this.setState({
          languageDictionary: nextProps.languageDictionary
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.user || this.props.role < 1) {
        return null;
      }
      var languageDictionary = this.props.languageDictionary || {};
      var buttonTitle = languageDictionary.userActionsButton || 'Actions';
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["DropdownButton"], {
        bsStyle: "success",
        title: buttonTitle,
        id: "user-actions"
      }, this.getMultifactorAction(this.state.user, this.state.loading), this.getBlockedAction(this.state.user, this.state.loading), this.getUserBlocksAction(this.state.user, this.state.loading), this.getResetPasswordAction(this.state.user, this.state.loading), this.getResendEmailVerificationAction(this.state.user, this.state.loading), this.getChangeUsernameAction(this.state.user, this.state.loading), this.getChangeEmailAction(this.state.user, this.state.loading), this.getChangePasswordAction(this.state.user, this.state.loading), this.getChangeFieldsAction(this.state.user, this.state.loading), this.getDeleteAction(this.state.user, this.state.loading));
    }
  }], [{
    key: "getDisplayObject",
    value: function getDisplayObject(user, fields) {
      if (fields.length > 0) {
        var displayFunction = undefined;
        if (lodash_default.a.isFunction(fields[0].edit.display)) displayFunction = fields[0].edit.display;else if (!fields[0].edit.display && fields[0].edit.display !== false && lodash_default.a.isFunction(fields[0].display)) displayFunction = fields[0].display;
        if (displayFunction) return {
          display: displayFunction,
          user: user
        };
      }
      return null;
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserActions_UserActions, "propTypes", {
  blockUser: prop_types_default.a.func.isRequired,
  changeEmail: prop_types_default.a.func.isRequired,
  changePassword: prop_types_default.a.func.isRequired,
  changeUsername: prop_types_default.a.func.isRequired,
  databaseConnections: prop_types_default.a.object.isRequired,
  deleteUser: prop_types_default.a.func.isRequired,
  changeFields: prop_types_default.a.func.isRequired,
  removeMfa: prop_types_default.a.func.isRequired,
  resendVerificationEmail: prop_types_default.a.func.isRequired,
  resetPassword: prop_types_default.a.func.isRequired,
  unblockUser: prop_types_default.a.func.isRequired,
  removeBlockedIPs: prop_types_default.a.func.isRequired,
  user: prop_types_default.a.object.isRequired,
  role: prop_types_default.a.number.isRequired,
  userFields: prop_types_default.a.array.isRequired,
  languageDictionary: prop_types_default.a.object
});

// EXTERNAL MODULE: ./node_modules/redux-form/lib/index.js
var redux_form_lib = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(311);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./client/utils/requiredValidationFunction.js


var requiredValidationFunction_ValidationFunctionInstance = /*#__PURE__*/function () {
  function ValidationFunctionInstance(languageDictionary) {
    classCallCheck_default()(this, ValidationFunctionInstance);
    this.languageDictionary = languageDictionary;
  }
  return createClass_default()(ValidationFunctionInstance, [{
    key: "requiredValidationFunction",
    value: function requiredValidationFunction(value) {
      var languageDictionary = this.languageDictionary || {};
      var error = languageDictionary.requiredErrorText || 'required';
      return !value || value === '' ? error : false;
    }
  }]);
}();
/* harmony default export */ var requiredValidationFunction = (function (languageDictionary) {
  var instance = new requiredValidationFunction_ValidationFunctionInstance(languageDictionary);
  return instance.requiredValidationFunction.bind(instance);
});
// CONCATENATED MODULE: ./client/components/Users/UserFormField.jsx







function UserFormField_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserFormField_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserFormField_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserFormField_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var UserFormField_UserFormField = /*#__PURE__*/function (_Component) {
  function UserFormField() {
    classCallCheck_default()(this, UserFormField);
    return UserFormField_callSuper(this, UserFormField, arguments);
  }
  inherits_default()(UserFormField, _Component);
  return createClass_default()(UserFormField, [{
    key: "getFieldComponent",
    value: function getFieldComponent(field, component, additionalOptions) {
      var languageDictionary = this.props.languageDictionary || {};
      var requiredLabel = languageDictionary.requiredFieldLabel || ' (required)';
      var label = languageDictionary.labels && languageDictionary.labels[field.property] || field.label;
      return /*#__PURE__*/react_default.a.createElement(redux_form_lib["Field"], extends_default()({
        name: field.property,
        type: field.type,
        label: label + (field.required ? requiredLabel : ''),
        placeholder: field.placeholder,
        component: component
      }, additionalOptions));
    }
  }, {
    key: "getFieldByComponentName",
    value: function getFieldByComponentName(field, componentName) {
      var _this = this;
      var validate = field.required || field.validationFunction ? [] : undefined;
      if (field.required) validate.push(requiredValidationFunction(this.props.languageDictionary || {}));
      if (field.validationFunction) {
        validate.push(function (value, values, context) {
          return field.validationFunction(value, values, context, _this.props.languageDictionary || {});
        });
      }
      switch (componentName) {
        case 'InputCombo':
          {
            var additionalOptions = {
              options: field.options ? lodash_default.a.map(field.options, function (option) {
                return {
                  value: option.value,
                  text: option.label
                };
              }) : null
            };
            if (validate) additionalOptions.validate = validate;
            return this.getFieldComponent(field, dist["InputCombo"], additionalOptions);
          }
        case 'InputMultiCombo':
          {
            var _additionalOptions = {
              loadOptions: function loadOptions(input, callback) {
                return callback(null, {
                  options: field.options || [],
                  complete: true
                });
              },
              multi: true,
              displayLabelOnly: field.displayLabelOnly
            };
            if (validate) _additionalOptions.validate = validate;
            return this.getFieldComponent(field, dist["Multiselect"], _additionalOptions);
          }
        case 'InputSelectCombo':
          {
            var _additionalOptions2 = {
              loadOptions: function loadOptions(input, callback) {
                return callback(null, {
                  options: field.options || [],
                  complete: true
                });
              },
              multi: false
            };
            if (validate) _additionalOptions2.validate = validate;
            return this.getFieldComponent(field, dist["Select"], _additionalOptions2);
          }
        case 'InputVirtualizedSelect':
          {
            var _additionalOptions3 = {
              options: field.options,
              multi: field.multi,
              displayLabelOnly: field.displayLabelOnly
            };
            if (validate) _additionalOptions3.validate = validate;
            return this.getFieldComponent(field, dist["VirtualizedSelect"], _additionalOptions3);
          }
        default:
          {
            var _additionalOptions4 = {
              disabled: field.disabled || false
            };
            if (validate) _additionalOptions4.validate = validate;
            return this.getFieldComponent(field, dist["InputText"], _additionalOptions4);
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        field = _this$props.field,
        isEditField = _this$props.isEditField;
      var formType = isEditField ? 'edit' : 'create';

      /* End early if property is not defined or edit/create is not defined */
      if (field.disable) return null;
      if (!field.property || !field[formType]) return null;

      /* Add some default behavior */
      if (!field.label) field.label = field.property;
      if (field[formType].type === 'hidden') field.label = '';
      if (!lodash_default.a.isFunction(field[formType].validationFunction) && field[formType].validationFunction) {
        console.warn("WARNING: validation function for field: ".concat(field.label, "(").concat(field.property, ") is not a function"));
        delete field[formType].validationFunction;
      }
      var finalField = lodash_default.a.isBoolean(field[formType]) ? Object.assign({}, field, {
        type: 'text',
        component: 'InputText'
      }) : Object.assign({}, field, field[formType]);
      return /*#__PURE__*/react_default.a.createElement("div", null, this.getFieldByComponentName(finalField, finalField.component));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserFormField_UserFormField, "propTypes", {
  field: prop_types_default.a.object.isRequired,
  isEditField: prop_types_default.a.bool.isRequired,
  languageDictionary: prop_types_default.a.object
});

;
// CONCATENATED MODULE: ./client/components/Users/UserCustomFormFields.jsx






function UserCustomFormFields_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserCustomFormFields_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserCustomFormFields_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserCustomFormFields_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var UserCustomFormFields_UserCustomFormFields = /*#__PURE__*/function (_Component) {
  function UserCustomFormFields() {
    classCallCheck_default()(this, UserCustomFormFields);
    return UserCustomFormFields_callSuper(this, UserCustomFormFields, arguments);
  }
  inherits_default()(UserCustomFormFields, _Component);
  return createClass_default()(UserCustomFormFields, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        fields = _this$props.fields,
        isEditForm = _this$props.isEditForm;
      return /*#__PURE__*/react_default.a.createElement("div", null, lodash_default.a.map(fields, function (field, index) {
        return /*#__PURE__*/react_default.a.createElement(UserFormField_UserFormField, {
          key: index,
          field: field,
          isEditField: isEditForm,
          languageDictionary: _this.props.languageDictionary
        });
      }));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserCustomFormFields_UserCustomFormFields, "propTypes", {
  fields: prop_types_default.a.array.isRequired,
  isEditForm: prop_types_default.a.bool.isRequired,
  languageDictionary: prop_types_default.a.object
});

;
// CONCATENATED MODULE: ./client/components/Users/UserFieldsChangeForm.jsx






function UserFieldsChangeForm_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserFieldsChangeForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserFieldsChangeForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserFieldsChangeForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var UserFieldsChangeForm_UserFieldsChangeForm = /*#__PURE__*/function (_Component) {
  function UserFieldsChangeForm() {
    classCallCheck_default()(this, UserFieldsChangeForm);
    return UserFieldsChangeForm_callSuper(this, UserFieldsChangeForm, arguments);
  }
  inherits_default()(UserFieldsChangeForm, _Component);
  return createClass_default()(UserFieldsChangeForm, [{
    key: "render",
    value: function render() {
      var fields = this.props.customFields || [];
      if (fields.length === 0) return null;
      var languageDictionary = this.props.languageDictionary || {};
      var filteredCustomFields = lodash_default.a.filter(fields, function (field) {
        return !lodash_default.a.includes(constants["qc" /* RESERVED_USER_FIELDS */], field.property) && field.edit;
      });
      if (filteredCustomFields.length === 0) return null;
      var loading = this.props.loading;
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Body, null, this.props.children, /*#__PURE__*/react_default.a.createElement("div", {
        className: "form-horizontal"
      }, /*#__PURE__*/react_default.a.createElement(UserCustomFormFields_UserCustomFormFields, {
        isEditForm: true,
        fields: filteredCustomFields,
        languageDictionary: languageDictionary
      }))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Footer, null, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsSize: "large",
        bsStyle: "default",
        disabled: loading,
        onClick: this.props.onClose
      }, languageDictionary.cancelButtonText || 'Cancel'), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsSize: "large",
        bsStyle: "primary",
        disabled: loading,
        onClick: this.props.handleSubmit
      }, loading ? languageDictionary.savingText || 'Saving....' : languageDictionary.updateButtonText || 'Update')));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserFieldsChangeForm_UserFieldsChangeForm, "propTypes", {
  initialValues: prop_types_default.a.object,
  getDictValue: prop_types_default.a.func,
  onClose: prop_types_default.a.func.isRequired,
  handleSubmit: prop_types_default.a.func.isRequired,
  submitting: prop_types_default.a.bool,
  customFields: prop_types_default.a.array,
  languageDictionary: prop_types_default.a.object,
  loading: prop_types_default.a.bool
});
var reduxFormDecorator = Object(redux_form_lib["reduxForm"])({
  form: 'user'
});
/* harmony default export */ var Users_UserFieldsChangeForm = (reduxFormDecorator(UserFieldsChangeForm_UserFieldsChangeForm));
// CONCATENATED MODULE: ./client/components/Users/UserDevices.jsx






function UserDevices_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserDevices_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserDevices_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserDevices_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var UserDevices_UserDevices = /*#__PURE__*/function (_Component) {
  function UserDevices() {
    classCallCheck_default()(this, UserDevices);
    return UserDevices_callSuper(this, UserDevices, arguments);
  }
  inherits_default()(UserDevices, _Component);
  return createClass_default()(UserDevices, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.devices !== this.props.devices || nextProps.user !== this.props.user || nextProps.loading !== this.props.loading;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        error = _this$props.error,
        loading = _this$props.loading,
        settings = _this$props.settings;
      if (loading) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      var languageDictionary = this.props.languageDictionary || {};
      if (!error && this.props.devices.size === 0) {
        return /*#__PURE__*/react_default.a.createElement("div", null, languageDictionary.noDevicesMessage || 'This user does not have any registered devices.');
      }
      var devices = this.props.devices.toJS();
      return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement(dist["Table"], null, /*#__PURE__*/react_default.a.createElement(dist["TableHeader"], null, /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "3%"
      }), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "70%"
      }, languageDictionary.deviceNameColumnHeader || 'Device'), /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
        width: "27%"
      }, languageDictionary.deviceNumberTokensColumnHeader || '# of Tokens/Public Keys')), /*#__PURE__*/react_default.a.createElement(dist["TableBody"], null, Object.keys(devices).sort().map(function (device) {
        return /*#__PURE__*/react_default.a.createElement(dist["TableRow"], {
          key: device
        }, /*#__PURE__*/react_default.a.createElement(dist["TableIconCell"], {
          color: "green",
          icon: "243"
        }), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, device), /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], null, devices[device]));
      }))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserDevices_UserDevices, "propTypes", {
  user: prop_types_default.a.object,
  error: prop_types_default.a.string,
  devices: prop_types_default.a.object.isRequired,
  loading: prop_types_default.a.bool.isRequired,
  settings: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object
});

// CONCATENATED MODULE: ./client/utils/useDefaultFields.js


var useDefaultFields_applyDefaults = function applyDefaults(type, fields, property, defaults) {
  var field = lodash_default.a.find(fields, {
    property: property
  });
  if (field) {
    if (lodash_default.a.isBoolean(field[type]) && field[type] === false) return lodash_default.a.remove(fields, {
      property: property
    });
    return lodash_default.a.defaults(field, defaults);
  }
  return fields.unshift(defaults);
};
var useDefaultFields_useUsernameField = function useUsernameField(isEditField, fields, connections, hasSelectedConnection, initialValues) {
  var type = isEditField ? 'edit' : 'create';
  var selectedConnection = lodash_default.a.find(connections, function (conn) {
    return conn.name === hasSelectedConnection;
  });
  var requireUsername = selectedConnection && selectedConnection.options ? selectedConnection.options.requires_username : false;
  var noUsername = connections && connections.length > 0 ? !requireUsername && (!initialValues || !initialValues.username)
  // if we have no connections, we *might* need a username field, we don't know - 
  // because we don't have the connections to check
  : false;
  var defaults = defineProperty_default()({
    property: 'username',
    label: 'Username',
    disable: noUsername
  }, type, {
    type: 'text',
    // if we have no connections we should show the field but not require it
    required: connections && connections.length > 0
  });
  return useDefaultFields_applyDefaults(type, fields, 'username', defaults);
};
var useDefaultFields_useMembershipsField = function useMembershipsField(isEditField, fields, hasMembership, memberships, createMemberships, getDictValue) {
  var type = isEditField ? 'edit' : 'create';
  var allMemberships = lodash_default()(memberships || []).concat(hasMembership).uniq().sort().value();
  if (allMemberships.length <= 1 && !createMemberships) {
    return lodash_default.a.remove(fields, {
      property: 'memberships'
    });
  }
  var defaults = defineProperty_default()({
    property: 'memberships',
    label: getDictValue('memberships', 'Memberships')
  }, type, {
    type: 'select',
    component: 'InputMultiCombo',
    options: allMemberships.map(function (m) {
      return {
        value: m,
        label: m
      };
    })
  });
  return useDefaultFields_applyDefaults(type, fields, 'memberships', defaults);
};
var useDefaultFields_useConnectionsField = function useConnectionsField(isEditField, fields, connections, onConnectionChange) {
  var type = isEditField ? 'edit' : 'create';
  // if we have exactly one connection then don't show this field and use that connection
  // however if we have zero connections, we should show the free text connections field
  if (!connections || connections.length === 1) {
    return lodash_default.a.remove(fields, {
      property: 'connection'
    });
  }
  var isConnectionLimitExceeded = connections.length === 0;
  var defaults = defineProperty_default()({
    property: 'connection',
    label: isConnectionLimitExceeded ? 'Connection Name' : 'Connection'
  }, type, {
    required: true,
    type: isConnectionLimitExceeded ? 'text' : 'select',
    component: isConnectionLimitExceeded ? 'InputText' : 'InputCombo',
    options: isConnectionLimitExceeded ? undefined : connections.map(function (conn) {
      return {
        value: conn.name,
        label: conn.name
      };
    }),
    onChange: onConnectionChange
  });
  return useDefaultFields_applyDefaults(type, fields, 'connection', defaults);
};
var useDefaultFields_useMfaField = function useMfaField(isEditField, fields, providers, onProviderChange) {
  var type = isEditField ? 'edit' : 'create';
  var providerList = providers && providers.toJS ? providers.toJS() : providers || [];
  var hasPasskey = providerList.includes('passkey');
  var options = providerList.map(function (prov) {
    return {
      value: prov,
      label: prov
    };
  });
  if (providerList.length > 1 && !hasPasskey) {
    options.push({
      value: 'all',
      label: 'all'
    });
  }
  var defaults = defineProperty_default()({
    property: 'multifactor',
    label: 'MFA Provider'
  }, type, {
    required: true,
    type: 'select',
    component: 'InputCombo',
    options: options,
    onChange: onProviderChange
  });
  useDefaultFields_applyDefaults(type, fields, 'multifactor', defaults);
  var field = lodash_default.a.find(fields, {
    property: 'multifactor'
  });
  if (field && field[type]) {
    field[type].options = options;
  }
};
var useDefaultFields_useDisabledConnectionField = function useDisabledConnectionField(isEditField, fields, connection, connections) {
  var type = isEditField ? 'edit' : 'create';
  if (!connection || !connections || connections.length < 2) {
    return lodash_default.a.remove(fields, {
      property: 'connection'
    });
  }
  var defaults = defineProperty_default()({
    property: 'connection',
    label: 'Connection'
  }, type, {
    type: 'text',
    disabled: true
  });
  useDefaultFields_applyDefaults(type, fields, 'connection', defaults);
  var field = lodash_default.a.find(fields, {
    property: 'connection'
  });
  // If connection is an editable field, we need to display it on other pages, but only as disabled
  if (field && (lodash_default.a.isObject(field[type]) && field[type].disabled !== true || lodash_default.a.isBoolean(field[type]))) field[type] = defaults[type];
};
var useDefaultFields_usePasswordFields = function usePasswordFields(isEditField, fields) {
  var type = isEditField ? 'edit' : 'create';
  var repeatPasswordDefaults = defineProperty_default()({
    property: 'repeatPassword',
    label: 'Repeat Password'
  }, type, {
    required: true,
    type: 'password',
    component: 'InputText',
    validationFunction: function validationFunction(value, values) {
      return value !== values.password ? 'passwords must match' : false;
    }
  });
  var passwordDefaults = defineProperty_default()({
    property: 'password',
    label: 'Password'
  }, type, {
    required: true,
    type: 'password',
    component: 'InputText'
  });
  useDefaultFields_applyDefaults(type, fields, 'repeatPassword', repeatPasswordDefaults);
  useDefaultFields_applyDefaults(type, fields, 'password', passwordDefaults);
};
var useDefaultFields_useEmailField = function useEmailField(isEditField, fields) {
  var type = isEditField ? 'edit' : 'create';
  var defaults = defineProperty_default()({
    property: 'email',
    label: 'Email'
  }, type, {
    type: 'text',
    component: 'InputText',
    required: true
  });
  useDefaultFields_applyDefaults(type, fields, 'email', defaults);
};
var useDefaultFields_useClientField = function useClientField(isEditField, fields, clients) {
  var type = isEditField ? 'edit' : 'create';
  var defaults = defineProperty_default()({
    property: 'client',
    label: 'Client'
  }, type, {
    type: 'select',
    component: 'InputCombo',
    required: false,
    options: clients.map(function (option) {
      return {
        value: option.client_id,
        label: option.name
      };
    })
  });
  useDefaultFields_applyDefaults(type, fields, 'client', defaults);
};
var useDefaultFields_useDisabledEmailField = function useDisabledEmailField(isEditField, fields) {
  var type = isEditField ? 'edit' : 'create';
  var defaults = defineProperty_default()({
    property: 'email',
    label: 'Email'
  }, type, {
    type: 'text',
    component: 'InputText',
    disabled: true
  });
  useDefaultFields_applyDefaults(type, fields, 'email', defaults);
  var field = lodash_default.a.find(fields, {
    property: 'email'
  });
  // If connection is an editable field, we need to display it on other pages, but only as disabled
  if (field && (lodash_default.a.isObject(field[type]) && field[type].disabled !== true || lodash_default.a.isBoolean(field[type]))) field[type] = defaults[type];
};
// CONCATENATED MODULE: ./client/components/Users/UserForm.jsx






function UserForm_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var UserForm_AddUserForm = /*#__PURE__*/function (_Component) {
  function AddUserForm() {
    classCallCheck_default()(this, AddUserForm);
    return UserForm_callSuper(this, AddUserForm, arguments);
  }
  inherits_default()(AddUserForm, _Component);
  return createClass_default()(AddUserForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        submitting = _this$props.submitting,
        customFields = _this$props.customFields,
        connections = _this$props.connections,
        hasSelectedConnection = _this$props.hasSelectedConnection,
        initialValues = _this$props.initialValues,
        hasMembership = _this$props.hasMembership,
        memberships = _this$props.memberships,
        createMemberships = _this$props.createMemberships,
        getDictValue = _this$props.getDictValue,
        loading = _this$props.loading;
      var languageDictionary = this.props.languageDictionary || {};

      /* First let's add field to the top if not in the list of fields */
      var fields = lodash_default.a.cloneDeep(customFields) || [];
      useDefaultFields_useConnectionsField(false, fields, connections, this.onConnectionsChange);
      useDefaultFields_usePasswordFields(false, fields);
      useDefaultFields_useUsernameField(false, fields, connections, hasSelectedConnection, initialValues);
      useDefaultFields_useEmailField(false, fields);
      useDefaultFields_useMembershipsField(false, fields, hasMembership, memberships, createMemberships, getDictValue);
      var createFields = lodash_default.a.filter(fields, function (field) {
        return field.create;
      });
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Body, null, this.props.children, /*#__PURE__*/react_default.a.createElement("div", {
        className: "form-horizontal"
      }, /*#__PURE__*/react_default.a.createElement(UserCustomFormFields_UserCustomFormFields, {
        isEditForm: false,
        fields: createFields,
        languageDictionary: languageDictionary
      }))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Footer, null, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsSize: "large",
        bsStyle: "default",
        disabled: loading,
        onClick: this.props.onClose
      }, languageDictionary.cancelButtonText || 'Cancel'), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Button"], {
        bsSize: "large",
        bsStyle: "primary",
        disabled: loading,
        onClick: this.props.handleSubmit
      }, loading ? languageDictionary.savingText || 'Saving....' : languageDictionary.createButtonText || 'Create')));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserForm_AddUserForm, "propTypes", {
  initialValues: prop_types_default.a.object,
  connections: prop_types_default.a.array.isRequired,
  memberships: prop_types_default.a.array.isRequired,
  createMemberships: prop_types_default.a.bool,
  getDictValue: prop_types_default.a.func,
  hasSelectedConnection: prop_types_default.a.string,
  hasMembership: prop_types_default.a.array,
  onClose: prop_types_default.a.func.isRequired,
  handleSubmit: prop_types_default.a.func.isRequired,
  submitting: prop_types_default.a.bool,
  customFields: prop_types_default.a.array,
  customFieldGetter: prop_types_default.a.func.isRequired,
  languageDictionary: prop_types_default.a.object,
  loading: prop_types_default.a.bool
});
var UserForm_reduxFormDecorator = Object(redux_form_lib["reduxForm"])({
  form: 'user'
});

// Decorate with connect to read form values
var selector = Object(redux_form_lib["formValueSelector"])('user');
var connectDecorator = Object(react_redux_lib["connect"])(function (state) {
  var hasSelectedConnection = selector(state, 'connection');
  var hasMembership = selector(state, 'memberships');
  return {
    hasSelectedConnection: hasSelectedConnection,
    hasMembership: hasMembership
  };
});
/* harmony default export */ var UserForm = (connectDecorator(UserForm_reduxFormDecorator(UserForm_AddUserForm)));
// CONCATENATED MODULE: ./client/components/Users/UserHeader.jsx






function UserHeader_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserHeader_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserHeader_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserHeader_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var UserHeader_UserHeader = /*#__PURE__*/function (_Component) {
  function UserHeader() {
    classCallCheck_default()(this, UserHeader);
    return UserHeader_callSuper(this, UserHeader, arguments);
  }
  inherits_default()(UserHeader, _Component);
  return createClass_default()(UserHeader, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.user !== this.props.user || nextProps.loading !== this.props.loading;
    }
  }, {
    key: "getName",
    value: function getName(user, userFields) {
      var nameField = lodash_default.a.find(userFields, function (field) {
        return field.property === 'name';
      });
      if (nameField && lodash_default.a.isFunction(nameField.display)) {
        /* Custom Name Field function, use that instead of email address */
        return nameField.display(user);
      }
      return user.name || user.nickname || user.email;
    }
  }, {
    key: "getPicture",
    value: function getPicture(user, userFields) {
      var pictureField = lodash_default.a.find(userFields, function (field) {
        return field.property === 'picture';
      });
      if (pictureField && lodash_default.a.isFunction(pictureField.display)) {
        /* Custom Name Field function, use that instead of email address */
        return pictureField.display(user);
      }
      return user.picture;
    }
  }, {
    key: "getEmail",
    value: function getEmail(user, userFields) {
      // Check for user.email right away to make sure the user has been initialized
      if (!user.email) return /*#__PURE__*/react_default.a.createElement("div", null);
      var email = user.email;
      var emailField = lodash_default.a.find(userFields, function (field) {
        return field.property === 'email';
      });
      if (emailField && lodash_default.a.isFunction(emailField.display)) {
        /* Custom Name Field function, use that instead of email address */
        email = emailField.display(user);
      }
      if (!email || email.length === 0) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      return /*#__PURE__*/react_default.a.createElement("span", {
        className: "user-label user-head-email"
      }, email);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.loading || this.props.error) {
        return /*#__PURE__*/react_default.a.createElement("div", null);
      }
      var user = this.props.user.toJS();
      var userFields = this.props.userFields || [];
      var languageDictionary = this.props.languageDictionary || {};
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "user-header"
      }, /*#__PURE__*/react_default.a.createElement("img", {
        role: "presentation",
        className: "img-polaroid",
        src: this.getPicture(user, userFields),
        alt: languageDictionary.userImageTitle || 'User Image',
        title: languageDictionary.userImageTitle || 'User Image'
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "user-bg-box",
        style: {
          position: 'relative',
          height: '120px',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react_default.a.createElement("img", {
        role: "presentation",
        className: "user-bg",
        src: this.getPicture(user, userFields),
        alt: languageDictionary.userImageTitle || 'User Image',
        title: languageDictionary.userImageTitle || 'User Image'
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "box-content"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "login-count"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "lined-text"
      }, languageDictionary.loginsCountLabel || 'Logins Count:'), /*#__PURE__*/react_default.a.createElement("strong", null, user.logins_count || 0)), /*#__PURE__*/react_default.a.createElement("div", {
        className: "username-area"
      }, /*#__PURE__*/react_default.a.createElement("h2", null, /*#__PURE__*/react_default.a.createElement("span", {
        className: "name user-head-nickname"
      }, this.getName(user, userFields)), this.getEmail(user, userFields))))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserHeader_UserHeader, "propTypes", {
  error: prop_types_default.a.string,
  loading: prop_types_default.a.bool.isRequired,
  user: prop_types_default.a.object.isRequired,
  userFields: react_default.a.PropTypes.array.isRequired,
  languageDictionary: react_default.a.PropTypes.object
});

// EXTERNAL MODULE: ./client/components/Users/UserOverview.styles.css
var UserOverview_styles = __webpack_require__(1324);

// CONCATENATED MODULE: ./client/components/Users/UserOverview.jsx






function UserOverview_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserOverview_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserOverview_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserOverview_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var UserOverview_UserOverview = /*#__PURE__*/function (_React$Component) {
  function UserOverview(props) {
    var _this;
    classCallCheck_default()(this, UserOverview);
    _this = UserOverview_callSuper(this, UserOverview, [props]);
    defineProperty_default()(_this, "onSearch", function (query, filter) {
      _this.props.onSearch(query, filter, _this.focusSearchResults);
    });
    defineProperty_default()(_this, "onKeyPress", function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var query = e.target.value;
        _this.onSearch(query, _this.state.selectedFilter.filterBy);
      }
    });
    defineProperty_default()(_this, "focusSearchResults", function () {
      var searchResults = Object(react_dom["findDOMNode"])(_this.refs.searchResults);
      var element = searchResults.querySelector('a') || searchResults.querySelector('label');
      element.focus();
    });
    _this.searchOptions = lodash_default()(_this.props.userFields).filter(function (field) {
      return lodash_default.a.isObject(field.search) && field.search.filter && field.search.filter === true;
    }).map(function (field, index) {
      return {
        title: field.label,
        value: field.property,
        filterBy: field.property,
        selected: index === 0
      };
    }).value();
    _this.defaultFilter = lodash_default.a.find(_this.searchOptions, {
      selected: true
    });
    _this.state = {
      searchValue: _this.props.searchValue,
      selectedFilter: _this.defaultFilter
    };
    _this.onKeyPress = _this.onKeyPress.bind(_this);
    _this.onReset = _this.onReset.bind(_this);
    _this.onHandleOptionChange = _this.onHandleOptionChange.bind(_this);
    return _this;
  }
  inherits_default()(UserOverview, _React$Component);
  return createClass_default()(UserOverview, [{
    key: "onReset",
    value: function onReset() {
      this.props.onReset();
      this.setState({
        searchValue: ''
      });
    }
  }, {
    key: "onHandleOptionChange",
    value: function onHandleOptionChange(option) {
      this.setState({
        selectedFilter: option
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        loading = _this$props.loading,
        sortProperty = _this$props.sortProperty,
        sortOrder = _this$props.sortOrder,
        error = _this$props.error,
        settings = _this$props.settings;
      var languageDictionary = this.props.languageDictionary || {};
      var labels = languageDictionary.labels || {};
      var searchOptions = this.searchOptions.map(function (option) {
        option.title = labels[option.value] || option.title || option.value;
        return option;
      });
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 wrapper"
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement("label", {
        className: "hidden-label",
        htmlFor: "search-bar"
      }, languageDictionary.searchBarPlaceholder || 'Search for users using the Lucene syntax'), searchOptions.length > 0 ? /*#__PURE__*/react_default.a.createElement(dist["SearchBar"], {
        inputId: "search-bar",
        onReset: this.props.onReset,
        enabled: !loading,
        handleKeyPress: this.onKeyPress,
        handleReset: this.onReset,
        handleOptionChange: this.onHandleOptionChange,
        searchOptions: searchOptions,
        searchValue: this.state.searchValue,
        placeholder: languageDictionary.searchBarPlaceholder,
        resetButtonText: languageDictionary.searchBarReset,
        instructionsText: languageDictionary.searchBarInstructions
      }) : /*#__PURE__*/react_default.a.createElement(LuceneSearchBar_SearchBar, {
        inputId: "search-bar",
        onReset: this.props.onReset,
        onSearch: this.onSearch,
        searchValue: this.state.searchValue,
        enabled: !loading,
        languageDictionary: languageDictionary
      }))), /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12",
        ref: "searchResults"
      }, /*#__PURE__*/react_default.a.createElement(UsersTable_UsersTable, {
        loading: loading,
        users: this.props.users,
        userFields: this.props.userFields,
        onColumnSort: this.props.onColumnSort,
        sortOrder: sortOrder,
        sortProperty: sortProperty,
        languageDictionary: languageDictionary
      })))));
    }
  }]);
}(react_default.a.Component);
defineProperty_default()(UserOverview_UserOverview, "propTypes", {
  onReset: prop_types_default.a.func.isRequired,
  onSearch: prop_types_default.a.func.isRequired,
  onPageChange: prop_types_default.a.func.isRequired,
  error: prop_types_default.a.object,
  users: prop_types_default.a.array.isRequired,
  loading: prop_types_default.a.bool.isRequired,
  userFields: prop_types_default.a.array.isRequired,
  onColumnSort: prop_types_default.a.func.isRequired,
  sortOrder: prop_types_default.a.number.isRequired,
  searchValue: prop_types_default.a.string,
  sortProperty: prop_types_default.a.string.isRequired,
  settings: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object
});

// CONCATENATED MODULE: ./client/components/Users/UserProfile.jsx






function UserProfile_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserProfile_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserProfile_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserProfile_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var UserProfile_UserProfile = /*#__PURE__*/function (_Component) {
  function UserProfile() {
    classCallCheck_default()(this, UserProfile);
    return UserProfile_callSuper(this, UserProfile, arguments);
  }
  inherits_default()(UserProfile, _Component);
  return createClass_default()(UserProfile, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.error !== this.props.error || nextProps.user !== this.props.user || nextProps.loading !== this.props.loading;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        user = _this$props.user,
        error = _this$props.error,
        loading = _this$props.loading,
        settings = _this$props.settings;
      return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: this.props.languageDictionary.errorTitle,
        message: getErrorMessage(this.props.languageDictionary, error, settings.errorTranslator)
      }, /*#__PURE__*/react_default.a.createElement(dist["Json"], {
        jsonObject: user.toJS()
      })));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserProfile_UserProfile, "propTypes", {
  error: react["PropTypes"].string,
  loading: react["PropTypes"].bool.isRequired,
  user: react["PropTypes"].object.isRequired,
  settings: react["PropTypes"].object.isRequired,
  languageDictionary: react["PropTypes"].object
});

// EXTERNAL MODULE: ./client/components/Users/UserInfo.styles.css
var UserInfo_styles = __webpack_require__(1325);

// EXTERNAL MODULE: ./client/components/Users/UserInfoField.styles.css
var UserInfoField_styles = __webpack_require__(1326);

// CONCATENATED MODULE: ./client/components/Users/UserInfoField.jsx






function UserInfoField_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserInfoField_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserInfoField_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserInfoField_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var UserInfoField_UserInfoField = /*#__PURE__*/function (_Component) {
  function UserInfoField() {
    classCallCheck_default()(this, UserInfoField);
    return UserInfoField_callSuper(this, UserInfoField, arguments);
  }
  inherits_default()(UserInfoField, _Component);
  return createClass_default()(UserInfoField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.title !== this.props.title || nextProps.children !== this.props.children;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children;
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "user-info-field"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "user-info-field-title"
      }, title), /*#__PURE__*/react_default.a.createElement("span", null, children));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserInfoField_UserInfoField, "propTypes", {
  title: react["PropTypes"].string.isRequired
});

// CONCATENATED MODULE: ./client/components/Users/UserInfo.jsx






function UserInfo_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserInfo_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserInfo_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserInfo_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








var UserInfo_UserInfo = /*#__PURE__*/function (_Component) {
  function UserInfo() {
    var _this;
    classCallCheck_default()(this, UserInfo);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = UserInfo_callSuper(this, UserInfo, [].concat(args));
    defineProperty_default()(_this, "getMemberships", function (memberships) {
      var meta = memberships || [];
      return meta.join(', ');
    });
    defineProperty_default()(_this, "getIdentities", function (user) {
      if (user.size === 0) return {};
      return user.get('identities').toJS()[0];
    });
    defineProperty_default()(_this, "getBlocked", function (user, languageDictionary) {
      if (user.size === 0) return '';
      return user.get('blocked') ? languageDictionary.yesLabel || 'Yes' : languageDictionary.noLabel || 'No';
    });
    return _this;
  }
  inherits_default()(UserInfo, _Component);
  return createClass_default()(UserInfo, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.user !== this.props.user || nextProps.memberships !== this.props.memberships || nextProps.userFields !== this.props.userFields || nextProps.loading !== this.props.loading || nextProps.error !== this.props.error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        user = _this$props.user,
        error = _this$props.error,
        loading = _this$props.loading,
        memberships = _this$props.memberships,
        settings = _this$props.settings;
      var languageDictionary = this.props.languageDictionary || {};
      var labels = languageDictionary.labels || {};

      /* First let's grab the custom fields */
      var customDisplayFields = lodash_default()(this.props.userFields || []).filter(function (field) {
        return field.display;
      }).map(function (field) {
        return {
          title: labels[field.property] || field.label || field.property,
          property: field.property,
          display: field.display
        };
      }).value();

      /* We will need to know which fields are explicitly rejected for display */
      var nonDisplayFieldProperties = lodash_default()(this.props.userFields || []).filter(function (field) {
        return field.display === false;
      }).groupBy(function (field) {
        return field.property;
      }).value();
      var customDisplayFieldProperties = lodash_default()(customDisplayFields).groupBy(function (field) {
        return field.property;
      }).value();
      var mfaDefaultDisplay = function mfaDefaultDisplay(user) {
        return user.multifactor.join(', ');
      };
      var defaultFields = [{
        title: 'User ID',
        property: 'user_id'
      }, {
        title: 'Name',
        property: 'name'
      }, {
        title: 'Username',
        property: 'username'
      }, {
        title: 'Email',
        property: 'email'
      }, {
        title: 'Identity',
        property: 'identity.connection'
      }, {
        title: 'Blocked',
        property: 'isBlocked'
      }, {
        title: 'Last IP',
        property: 'last_ip'
      }, {
        title: 'Logins Count',
        property: 'logins_count'
      }, {
        title: 'Memberships',
        property: 'currentMemberships'
      }, {
        title: 'Multifactor',
        property: 'multifactor',
        display: mfaDefaultDisplay
      }, {
        title: 'Signed Up',
        property: 'created_at',
        type: 'elapsedTime'
      }, {
        title: 'Updated',
        property: 'updated_at',
        type: 'elapsedTime'
      }, {
        title: 'Last Login',
        property: 'last_login',
        type: 'elapsedTime'
      }];
      var defaultFieldInfo = defaultFields.map(function (field) {
        field.title = labels[field.property] || field.title;
        return field;
      });
      var standardFields = lodash_default()(defaultFieldInfo).reject(function (field) {
        return field.property in customDisplayFieldProperties || field.property in nonDisplayFieldProperties;
      }).value();
      var standardFieldProperties = lodash_default()(standardFields).groupBy(function (field) {
        return field.property;
      }).value();

      /* Now allow for the extra fields that show up from identities */
      var excludeProperties = lodash_default()(customDisplayFieldProperties) // ignore the custom fields
      .keys().concat(Object.keys(standardFieldProperties)) // ignore the standard fields
      .concat(Object.keys(nonDisplayFieldProperties)) // ignore fields that have explicitly been rejected
      .concat(['identity', 'identities', 'app_metadata', 'picture', 'user_metadata']) // always ignore these
      .value();

      /* Prepare the user object */
      var userObject = user.toJS();
      if (!userObject || Object.keys(userObject).length === 0) {
        return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
          show: loading,
          animationStyle: {
            paddingTop: '5px',
            paddingBottom: '5px'
          }
        }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
          title: languageDictionary.errorTitle,
          message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
        }));
      }
      userObject.currentMemberships = this.getMemberships(memberships);
      userObject.identity = this.getIdentities(user);
      userObject.isBlocked = this.getBlocked(user, languageDictionary);

      /* Grab all user properties that haven't been rejected or already used */
      var extraFieldProperties = lodash_default.a.keys(lodash_default.a.omit(userObject, excludeProperties));

      /* Turn those properties into new field display objects */
      var extraFields = lodash_default.a.map(extraFieldProperties, function (property) {
        return {
          title: property,
          property: property
        };
      });

      /* Now put all fields together */
      var fields = lodash_default()(customDisplayFields).concat(standardFields).concat(extraFields).filter(function (field) {
        return field.property !== 'picture';
      }).sortBy(function (field) {
        return field.title;
      }).value();
      var fieldsAndValues = lodash_default.a.map(fields, function (field) {
        field.value = display_getValue(userObject, field, languageDictionary);
        return field;
      });
      var nonNullFields = lodash_default.a.filter(fieldsAndValues, function (field) {
        return field.value;
      }) || [];
      return /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "user-info"
      }, nonNullFields.map(function (field, index) {
        return /*#__PURE__*/react_default.a.createElement(UserInfoField_UserInfoField, {
          key: index,
          title: field.title
        }, field.value);
      })));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserInfo_UserInfo, "propTypes", {
  error: prop_types_default.a.string,
  loading: prop_types_default.a.bool.isRequired,
  user: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  memberships: prop_types_default.a.array,
  userFields: prop_types_default.a.array,
  languageDictionary: prop_types_default.a.object
});

// EXTERNAL MODULE: ./client/components/Users/UserTable.styles.css
var UserTable_styles = __webpack_require__(1327);

// CONCATENATED MODULE: ./client/components/Users/UsersTable.jsx






function UsersTable_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UsersTable_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UsersTable_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UsersTable_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var UsersTable_UsersTable = /*#__PURE__*/function (_Component) {
  function UsersTable(props) {
    var _this;
    classCallCheck_default()(this, UsersTable);
    _this = UsersTable_callSuper(this, UsersTable, [props]);
    var listFields = _this.getListFields(props);
    _this.state = {
      listFields: listFields
    };
    return _this;
  }
  inherits_default()(UsersTable, _Component);
  return createClass_default()(UsersTable, [{
    key: "getListFields",
    value: function getListFields(props) {
      var userFields = props.userFields;
      var defaultListFields = [{
        listOrder: 0,
        listSize: '6%',
        property: 'picture',
        label: '',
        display: function display(user) {
          return user.picture || '';
        },
        search: {
          sort: true
        }
      }, {
        listOrder: 1,
        listSize: '20%',
        property: 'name',
        label: 'Name',
        display: function display(user) {
          return user.nickname || user.email || user.user_id;
        },
        search: {
          sort: true
        }
      }, {
        listOrder: 2,
        listSize: '29%',
        property: 'email',
        label: 'Email',
        display: function display(user) {
          return user.email || 'N/A';
        }
      }, {
        listOrder: 3,
        listSize: '15%',
        property: 'last_login_relative',
        sortProperty: 'last_login',
        label: 'Latest Login',
        search: {
          sort: true
        }
      }, {
        listOrder: 4,
        listSize: '15%',
        property: 'logins_count',
        label: 'Logins',
        search: {
          sort: true
        }
      }];
      var connectionField = lodash_default.a.find(userFields, {
        property: 'connection'
      });
      if (!connectionField) {
        defaultListFields.push({
          listOrder: 5,
          listSize: '25%',
          property: 'identities',
          label: 'Connection',
          display: function display(user) {
            return user.identities[0].connection;
          }
        });
      } else if (lodash_default.a.isFunction(connectionField.display) || lodash_default.a.isBoolean(connectionField.display) && connectionField.display === true) {
        defaultListFields.push({
          listOrder: 5,
          listSize: '25%',
          property: 'identities',
          label: 'Connection',
          display: function display(user) {
            return lodash_default.a.isFunction(connectionField.display) ? connectionField.display(user) : user.identities[0].connection;
          }
        });
      }
      var listFields = defaultListFields;

      // Apply some customization
      if (userFields.length > 0) {
        // Figure out if we have any user list fields
        var customListFields = lodash_default()(userFields).filter(function (field) {
          return lodash_default.a.isObject(field.search) || lodash_default.a.isBoolean(field.search) && field.search === true;
        }).map(function (field) {
          if (lodash_default.a.isBoolean(field.search) && field.search === true) {
            var defaultField = Object.assign({}, field, {
              listOrder: 1000,
              listSize: '25%'
            });
            return defaultField;
          }
          var customField = Object.assign({}, field, field.search);
          return customField;
        }).value();

        // If we do, allow the userFields to override the existing search fields
        if (Array.isArray(customListFields) && customListFields.length > 0) {
          // First filter out defaultListFields from userField entries
          var customFieldProperties = lodash_default()(userFields).filter(function (field) {
            return lodash_default.a.isObject(field.search) || lodash_default.a.isBoolean(field.search) && field.search === true;
          }).map('property').value();
          listFields = lodash_default()(defaultListFields).filter(function (field) {
            return customFieldProperties.indexOf(field.property) < 0;
          }).concat(customListFields).sortBy(function (field) {
            return field.listOrder;
          }).filter(function (field) {
            return field.display !== false;
          }) // Remove any fields that have display set to false
          .value();
        }

        /* Now filter out any fields that are set to search === false, this should kill custom fields that are
         * overriding default fields
         */
        var falseSearchFields = lodash_default()(userFields).filter(function (field) {
          return field.search === false;
        }).map('property').value();
        listFields = lodash_default()(listFields).filter(function (field) {
          return falseSearchFields.indexOf(field.property) < 0;
        }).value();
      }
      return listFields;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!lodash_default.a.isEqual(this.props.userFields, nextProps.userFields)) {
        var listFields = this.getListFields(nextProps);
        this.setState({
          listFields: listFields
        });
      }
    }
  }, {
    key: "onColumnSort",
    value: function onColumnSort(property, sortOrder) {
      var sort = {
        property: property,
        order: sortOrder === -1 ? 1 : -1
      };
      this.props.onColumnSort(sort);
    }
  }, {
    key: "returnToSearch",
    value: function returnToSearch(event) {
      if (event && event.key === 'Enter') {
        event.target.click();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        users = _this$props.users,
        loading = _this$props.loading,
        sortProperty = _this$props.sortProperty,
        sortOrder = _this$props.sortOrder;
      var languageDictionary = this.props.languageDictionary || {};
      var labels = languageDictionary.labels || {};
      var listFields = this.state.listFields;
      if (!users.length && !loading) {
        return /*#__PURE__*/react_default.a.createElement("label", {
          className: "user-search-no-results",
          tabIndex: "0",
          htmlFor: "search-bar",
          onKeyUp: this.returnToSearch
        }, languageDictionary.userSearchNoResults || 'No users found by given parameters.');
      }
      return /*#__PURE__*/react_default.a.createElement(dist["Table"], null, /*#__PURE__*/react_default.a.createElement(dist["TableHeader"], null, listFields.map(function (field) {
        var sort = lodash_default.a.isObject(field.search) && lodash_default.a.isBoolean(field.search.sort) && field.search.sort === true;
        if (sort) {
          return /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
            key: field.property,
            width: field.listSize
          }, /*#__PURE__*/react_default.a.createElement("div", {
            className: "table-column-div",
            onClick: _this2.onColumnSort.bind(_this2, field.sortProperty || field.property, sortOrder)
          }, labels[field.property] || field.label, (field.sortProperty || field.property) === sortProperty && /*#__PURE__*/react_default.a.createElement("i", {
            className: sortOrder === -1 ? 'icon-budicon-462 icon' : 'icon-budicon-460 icon',
            "aria-hidden": "true"
          })));
        }
        return /*#__PURE__*/react_default.a.createElement(dist["TableColumn"], {
          key: field.property,
          width: field.listSize
        }, labels[field.property] || field.label);
      })), /*#__PURE__*/react_default.a.createElement(dist["TableBody"], null, users.map(function (user) {
        return /*#__PURE__*/react_default.a.createElement(dist["TableRow"], {
          key: user.user_id
        }, listFields.map(function (field, index) {
          var key = "".concat(user.user_id, "_").concat(field.property);
          if (field.property === 'picture') {
            return /*#__PURE__*/react_default.a.createElement(dist["TableCell"], null, /*#__PURE__*/react_default.a.createElement("img", {
              className: "img-circle",
              src: display_getValueForType('search', user, field, languageDictionary) || '(empty)',
              alt: user.name || user.user_name || user.email,
              title: user.name || user.user_name || user.email,
              width: "32"
            }));
          }
          if (field.property === 'name') {
            return /*#__PURE__*/react_default.a.createElement(dist["TableRouteCell"], {
              key: key,
              route: "/users/".concat(user.user_id)
            }, display_getValueForType('search', user, field, languageDictionary) || '(empty)');
          }
          return /*#__PURE__*/react_default.a.createElement(dist["TableTextCell"], {
            key: key
          }, display_getValueForType('search', user, field, languageDictionary));
        }));
      })));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UsersTable_UsersTable, "propTypes", {
  users: prop_types_default.a.array.isRequired,
  loading: prop_types_default.a.bool.isRequired,
  userFields: prop_types_default.a.array.isRequired,
  onColumnSort: prop_types_default.a.func.isRequired,
  sortOrder: prop_types_default.a.number.isRequired,
  sortProperty: prop_types_default.a.string.isRequired,
  languageDictionary: prop_types_default.a.object
});

// CONCATENATED MODULE: ./client/components/Users/LuceneSearchBar.jsx






function LuceneSearchBar_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, LuceneSearchBar_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function LuceneSearchBar_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (LuceneSearchBar_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var LuceneSearchBar_SearchBar = /*#__PURE__*/function (_Component) {
  function SearchBar(props) {
    var _this;
    classCallCheck_default()(this, SearchBar);
    _this = LuceneSearchBar_callSuper(this, SearchBar, [props]);
    defineProperty_default()(_this, "onKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.props.onSearch(Object(react_dom["findDOMNode"])(_this.refs.search).value);
      }
    });
    defineProperty_default()(_this, "handleChange", function (event) {
      _this.setState({
        searchValue: event.target.value
      });
    });
    defineProperty_default()(_this, "onResetSearch", function () {
      _this.setState({
        searchValue: ''
      });
      Object(react_dom["findDOMNode"])(_this.refs.search).value = '';
      _this.props.onReset();
    });
    defineProperty_default()(_this, "renderInstructions", function (searchBarInstructions) {
      if (searchBarInstructions) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "help-block"
        }, searchBarInstructions);
      }
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "help-block"
      }, "To perform your search, press ", /*#__PURE__*/react_default.a.createElement("span", {
        className: "keyboard-button"
      }, "enter"), ". You can also search for specific fields, eg: ", /*#__PURE__*/react_default.a.createElement("strong", null, "email:\"john@doe.com\""), ".");
    });
    _this.state = {
      searchValue: props.searchValue
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  inherits_default()(SearchBar, _Component);
  return createClass_default()(SearchBar, [{
    key: "render",
    value: function render() {
      var languageDictionary = this.props.languageDictionary || {};
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "advanced-search-control"
      }, /*#__PURE__*/react_default.a.createElement("span", {
        className: "search-area"
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-budicon-489"
      }), /*#__PURE__*/react_default.a.createElement("input", {
        className: "user-input",
        type: "text",
        ref: "search",
        placeholder: languageDictionary.searchBarPlaceholder || 'Search for users using the Lucene syntax',
        spellCheck: "false",
        style: {
          marginLeft: '10px'
        },
        onChange: this.handleChange,
        onKeyPress: this.onKeyPress,
        value: this.state.searchValue,
        id: this.props.inputId || ''
      })), /*#__PURE__*/react_default.a.createElement("span", {
        className: "controls pull-right"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.onResetSearch,
        type: "reset",
        disabled: !this.props.enabled
      }, languageDictionary.searchBarReset || 'Reset', " ", /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-budicon-471"
      }))))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, this.renderInstructions(languageDictionary.searchBarInstructions)));
    }
  }]);
}(react["Component"]);
defineProperty_default()(LuceneSearchBar_SearchBar, "propTypes", {
  enabled: prop_types_default.a.bool.isRequired,
  onReset: prop_types_default.a.func.isRequired,
  onSearch: prop_types_default.a.func.isRequired,
  languageDictionary: prop_types_default.a.object,
  searchValue: prop_types_default.a.string,
  inputId: prop_types_default.a.string
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(210);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./client/components/Users/UserPaginator.jsx







function UserPaginator_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserPaginator_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserPaginator_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserPaginator_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var UserPaginator_UserPaginator = /*#__PURE__*/function (_React$Component) {
  function UserPaginator() {
    var _this;
    classCallCheck_default()(this, UserPaginator);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = UserPaginator_callSuper(this, UserPaginator, [].concat(args));
    defineProperty_default()(_this, "onPreviousPage", function () {
      _this.props.onPageChange(_this.props.nextPage - 1);
    });
    defineProperty_default()(_this, "onNextPage", function () {
      _this.props.onPageChange(_this.props.nextPage + 1);
    });
    defineProperty_default()(_this, "changePage", function (page) {
      _this.props.onPageChange(page);
    });
    return _this;
  }
  inherits_default()(UserPaginator, _React$Component);
  return createClass_default()(UserPaginator, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.nextPage !== nextProps.nextPage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        nextPage = _this$props.nextPage,
        pages = _this$props.pages;
      return /*#__PURE__*/react_default.a.createElement("nav", {
        className: "pull-right"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "pagination pull-right"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return _this2.onPreviousPage();
        },
        className: nextPage - 2 < 0 ? 'disabled' : ''
      }, /*#__PURE__*/react_default.a.createElement("a", null, /*#__PURE__*/react_default.a.createElement("span", null, "\xAB"))), toConsumableArray_default()(Array(pages)).map(function (item, i) {
        var page = i + 1;
        return /*#__PURE__*/react_default.a.createElement("li", {
          key: i,
          style: {
            cursor: 'pointer'
          },
          className: nextPage === page ? 'active' : '',
          onClick: function onClick() {
            return _this2.changePage(page);
          }
        }, /*#__PURE__*/react_default.a.createElement("a", null, page));
      }), /*#__PURE__*/react_default.a.createElement("li", {
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return _this2.onNextPage();
        },
        className: nextPage + 1 > pages ? 'disabled' : ''
      }, /*#__PURE__*/react_default.a.createElement("a", null, /*#__PURE__*/react_default.a.createElement("span", null, "\xBB")))));
    }
  }]);
}(react_default.a.Component);
defineProperty_default()(UserPaginator_UserPaginator, "propTypes", {
  onPageChange: react_default.a.PropTypes.func.isRequired,
  nextPage: react_default.a.PropTypes.number.isRequired,
  pages: react_default.a.PropTypes.number.isRequired
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(162);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./client/components/Users/ValidationError.styles.css
var ValidationError_styles = __webpack_require__(1332);

// CONCATENATED MODULE: ./client/components/Users/ValidationError.jsx







function ValidationError_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, ValidationError_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function ValidationError_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ValidationError_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var ValidationError_ValidationError = /*#__PURE__*/function (_Component) {
  function ValidationError() {
    var _this;
    classCallCheck_default()(this, ValidationError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = ValidationError_callSuper(this, ValidationError, [].concat(args));
    defineProperty_default()(_this, "getPlainFields", function (data) {
      var fields = [];
      lodash_default.a.forEach(data, function (item, name) {
        return fields.push(_this.getField(item, name));
      });
      return lodash_default.a.flattenDeep(fields);
    });
    defineProperty_default()(_this, "getField", function (item, name, parentName) {
      var property = parentName ? "".concat(parentName, ".").concat(name) : name;
      var customField = lodash_default.a.find(_this.props.customFields, {
        property: property
      });
      var label = customField && customField.label || name;
      if (typeof item === 'string') {
        return {
          property: property,
          label: label
        };
      }
      if (typeof_default()(item) === 'object') {
        var result = [];
        lodash_default.a.forEach(item, function (value, key) {
          return result.push(_this.getField(value, key, property));
        });
        return result;
      }
    });
    defineProperty_default()(_this, "renderLabel", function (property, label, index) {
      return /*#__PURE__*/react_default.a.createElement("li", {
        key: index
      }, /*#__PURE__*/react_default.a.createElement("label", {
        htmlFor: property
      }, label));
    });
    return _this;
  }
  inherits_default()(ValidationError, _Component);
  return createClass_default()(ValidationError, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.userForm && this.props.userForm.user && this.props.userForm.user.submitFailed && this.props.userForm.user.syncErrors) {
        var fields = this.getPlainFields(this.props.userForm.user.syncErrors);
        return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Alert"], {
          bsStyle: "danger",
          className: "validation-error"
        }, /*#__PURE__*/react_default.a.createElement("h4", null, this.props.errorMessage || 'Validation Error'), /*#__PURE__*/react_default.a.createElement("ul", {
          className: "validation-error-fields-list"
        }, fields.map(function (field, index) {
          return _this2.renderLabel(field.property, field.label, index);
        })));
      }
      return /*#__PURE__*/react_default.a.createElement("div", null);
    }
  }]);
}(react["Component"]);
ValidationError_ValidationError.propTypes = {
  userForm: prop_types_default.a.object.required,
  customFields: prop_types_default.a.array.required,
  errorMessage: prop_types_default.a.string
};
/* harmony default export */ var Users_ValidationError = (ValidationError_ValidationError);
// CONCATENATED MODULE: ./client/components/Users/index.js












// CONCATENATED MODULE: ./client/containers/Users/Dialogs/CreateDialog.jsx






var CreateDialog_Class;
function CreateDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CreateDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CreateDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CreateDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CreateDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, CreateDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function CreateDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (CreateDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








/* harmony default export */ var CreateDialog = (redux_static_lib_default()((CreateDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = CreateDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onSubmit", function (user) {
      var languageDictionary = _this.props.languageDictionary.get('record').toJS();
      _this.props.createUser(user, languageDictionary);
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.userCreate !== this.props.userCreate || nextProps.languageDictionary !== this.props.languageDictionary || nextProps.connections !== this.props.connections || nextProps.accessLevel !== this.props.accessLevel || nextProps.userFields !== this.props.userFields;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$userCreat = this.props.userCreate.toJS(),
        error = _this$props$userCreat.error,
        loading = _this$props$userCreat.loading,
        record = _this$props$userCreat.record;
      var connections = this.props.connections.toJS();
      var accessLevel = this.props.accessLevel.get('record').toJS();
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"], {
        show: record !== null,
        className: "modal-overflow-visible",
        onHide: this.props.cancelCreateUser
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Header, {
        closeButton: !loading,
        className: "has-border",
        closeLabel: languageDictionary.closeButtonText
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Title, null, languageDictionary.createDialogTitle || 'Create User')), /*#__PURE__*/react_default.a.createElement(UserForm, {
        customFields: this.props.userFields || [],
        customFieldGetter: function customFieldGetter(field) {
          return field.create;
        },
        connections: connections.records,
        initialValues: record,
        createMemberships: accessLevel.createMemberships,
        memberships: accessLevel.memberships,
        getDictValue: this.props.getDictValue,
        onClose: this.props.cancelCreateUser,
        onSubmit: this.onSubmit,
        loading: loading,
        languageDictionary: languageDictionary
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, this.props.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement(Users_ValidationError, {
        userForm: this.props.userForm,
        customFields: this.props.userFields || [],
        errorMessage: languageDictionary.validationError
      })));
    }
  }]);
}(react["Component"]), defineProperty_default()(CreateDialog_Class, "stateToProps", function (state) {
  return {
    userCreate: state.userCreate,
    accessLevel: state.accessLevel,
    connections: state.connections,
    languageDictionary: state.languageDictionary,
    userForm: state.form
  };
}), defineProperty_default()(CreateDialog_Class, "actionsToProps", CreateDialog_objectSpread(CreateDialog_objectSpread({}, user_namespaceObject), script_namespaceObject)), defineProperty_default()(CreateDialog_Class, "propTypes", {
  accessLevel: prop_types_default.a.object.isRequired,
  connections: prop_types_default.a.object.isRequired,
  userCreate: prop_types_default.a.object.isRequired,
  userForm: prop_types_default.a.object.isRequired,
  createUser: prop_types_default.a.func.isRequired,
  getDictValue: prop_types_default.a.func.isRequired,
  cancelCreateUser: prop_types_default.a.func.isRequired,
  userFields: prop_types_default.a.array.isRequired,
  errorTranslator: prop_types_default.a.func,
  languageDictionary: prop_types_default.a.object
}), CreateDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/DeleteDialog.jsx






var DeleteDialog_Class;
function DeleteDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function DeleteDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? DeleteDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DeleteDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DeleteDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, DeleteDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function DeleteDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (DeleteDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








/* harmony default export */ var DeleteDialog = (redux_static_lib_default()((DeleteDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = DeleteDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.deleteUser();
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.userDelete !== this.props.userDelete || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelDeleteUser = _this$props.cancelDeleteUser,
        settings = _this$props.settings;
      var _this$props$userDelet = this.props.userDelete.toJS(),
        user = _this$props$userDelet.user,
        error = _this$props$userDelet.error,
        requesting = _this$props$userDelet.requesting,
        loading = _this$props$userDelet.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.deleteDialogMessage || 'Do you really want to delete {username}? ' + 'This will completely remove the user and cannot be undone.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.deleteDialogTitle || "Delete User?",
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelDeleteUser,
        onConfirm: this.onConfirm,
        closeLabel: languageDictionary.closeButtonText
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message));
    }
  }]);
}(react["Component"]), defineProperty_default()(DeleteDialog_Class, "stateToProps", function (state) {
  return {
    userDelete: state.userDelete,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(DeleteDialog_Class, "actionsToProps", DeleteDialog_objectSpread({}, user_namespaceObject)), defineProperty_default()(DeleteDialog_Class, "propTypes", {
  cancelDeleteUser: prop_types_default.a.func.isRequired,
  deleteUser: prop_types_default.a.func.isRequired,
  userDelete: prop_types_default.a.object.isRequired,
  languageDictionary: prop_types_default.a.object
}), DeleteDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/FieldsChangeDialog.jsx






var FieldsChangeDialog_Class;
function FieldsChangeDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function FieldsChangeDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? FieldsChangeDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FieldsChangeDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function FieldsChangeDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, FieldsChangeDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function FieldsChangeDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (FieldsChangeDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







/* harmony default export */ var FieldsChangeDialog = (redux_static_lib_default()((FieldsChangeDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = FieldsChangeDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onSubmit", function (user) {
      var submitFields = _([]).concat(_.map(_.filter(_this.props.userFields, function (field) {
        return field.property && field.edit && field.edit !== false;
      }), function (field) {
        return field.property.split('.')[0];
      })).uniq().value();
      _this.props.changeFields(_this.props.userId, _.pick(user, submitFields), _this.props.languageDictionary.get('record').toJS());
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.fieldsChange !== this.props.fieldsChange || nextProps.userFields !== this.props.userFields || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$fieldsCha = this.props.fieldsChange.toJS(),
        error = _this$props$fieldsCha.error,
        loading = _this$props$fieldsCha.loading,
        record = _this$props$fieldsCha.record;
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"], {
        show: record !== null,
        className: "modal-overflow-visible",
        onHide: this.props.cancelChangeFields
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Header, {
        closeButton: !loading,
        className: "has-border",
        closeLabel: languageDictionary.closeButtonText
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Modal"].Title, null, languageDictionary.changeProfileDialogTitle || 'Change Profile')), /*#__PURE__*/react_default.a.createElement(Users_UserFieldsChangeForm, {
        customFields: this.props.userFields || [],
        customFieldGetter: function customFieldGetter(field) {
          return field.edit;
        },
        initialValues: record,
        onClose: this.props.cancelChangeFields,
        onSubmit: this.onSubmit,
        loading: loading,
        languageDictionary: languageDictionary
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, this.props.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement(Users_ValidationError, {
        userForm: this.props.userForm,
        customFields: this.props.userFields || [],
        errorMessage: languageDictionary.validationError
      })));
    }
  }]);
}(react["Component"]), defineProperty_default()(FieldsChangeDialog_Class, "stateToProps", function (state) {
  return {
    fieldsChange: state.fieldsChange,
    userId: state.fieldsChange.toJS().userId,
    languageDictionary: state.languageDictionary,
    userForm: state.form
  };
}), defineProperty_default()(FieldsChangeDialog_Class, "actionsToProps", FieldsChangeDialog_objectSpread(FieldsChangeDialog_objectSpread({}, user_namespaceObject), script_namespaceObject)), defineProperty_default()(FieldsChangeDialog_Class, "propTypes", {
  fieldsChange: react["PropTypes"].object.isRequired,
  changeFields: react["PropTypes"].func.isRequired,
  cancelChangeFields: react["PropTypes"].func.isRequired,
  userFields: react["PropTypes"].array.isRequired,
  userForm: react["PropTypes"].object.isRequired,
  userId: react["PropTypes"].string.isRequired,
  languageDictionary: react["PropTypes"].object,
  errorTranslator: react["PropTypes"].func
}), FieldsChangeDialog_Class)));
// CONCATENATED MODULE: ./client/actions/submitForm.js

var submitForm_submitForm = function submitForm(formName) {
  return function (dispatch) {
    dispatch(Object(redux_form_lib["submit"])(formName));
  };
};
/* harmony default export */ var actions_submitForm = (submitForm_submitForm);
// CONCATENATED MODULE: ./client/components/Users/UserFieldsForm.jsx






function UserFieldsForm_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UserFieldsForm_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UserFieldsForm_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UserFieldsForm_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var UserFieldsForm_UserFieldsFormBase = /*#__PURE__*/function (_Component) {
  function UserFieldsFormBase() {
    classCallCheck_default()(this, UserFieldsFormBase);
    return UserFieldsForm_callSuper(this, UserFieldsFormBase, arguments);
  }
  inherits_default()(UserFieldsFormBase, _Component);
  return createClass_default()(UserFieldsFormBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        fields = _this$props.fields,
        isEditForm = _this$props.isEditForm;
      var languageDictionary = this.props.languageDictionary || {};
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, fields.map(function (field, index) {
        return /*#__PURE__*/react_default.a.createElement(UserFormField_UserFormField, {
          key: index,
          field: field,
          isEditField: isEditForm,
          languageDictionary: languageDictionary
        });
      }));
    }
  }]);
}(react["Component"]);
defineProperty_default()(UserFieldsForm_UserFieldsFormBase, "propTypes", {
  isEditForm: prop_types_default.a.bool.isRequired,
  fields: prop_types_default.a.array.isRequired,
  languageDictionary: prop_types_default.a.object
});
;
var UserFieldsForm_UserFieldsForm = function UserFieldsForm(name, submit) {
  return Object(redux_form_lib["reduxForm"])({
    form: name,
    onSubmit: submit
  })(UserFieldsForm_UserFieldsFormBase);
};
/* harmony default export */ var Users_UserFieldsForm = (UserFieldsForm_UserFieldsForm);
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/EmailChangeDialog.jsx






var EmailChangeDialog_Class;
function EmailChangeDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function EmailChangeDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? EmailChangeDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : EmailChangeDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function EmailChangeDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, EmailChangeDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function EmailChangeDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (EmailChangeDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }












/* harmony default export */ var EmailChangeDialog = (redux_static_lib_default()((EmailChangeDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = EmailChangeDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.submitForm('change-email');
    });
    defineProperty_default()(_this, "onSubmit", function (emailForm) {
      var _this$props$emailChan = _this.props.emailChange.toJS(),
        user = _this$props$emailChan.user;
      _this.props.changeEmail(user, emailForm, _this.props.languageDictionary.get('record').toJS());
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.languageDictionary !== this.props.languageDictionary || nextProps.emailChange !== this.props.emailChange;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelEmailChange = _this$props.cancelEmailChange,
        settings = _this$props.settings,
        connections = _this$props.connections;
      var _this$props$emailChan2 = this.props.emailChange.toJS(),
        user = _this$props$emailChan2.user,
        connection = _this$props$emailChan2.connection,
        error = _this$props$emailChan2.error,
        requesting = _this$props$emailChan2.requesting,
        loading = _this$props$emailChan2.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.changeEmailMessage || 'Do you really want to change the email for {username}?';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      var fields = lodash_default.a.cloneDeep(userFields) || [];
      useDefaultFields_useEmailField(true, fields);
      useDefaultFields_useDisabledConnectionField(true, fields, connection, connections.get('records').toJS());
      var allowedFields = ['email', 'connection'];
      var filteredFields = lodash_default.a.filter(fields, function (field) {
        return lodash_default.a.includes(allowedFields, field.property);
      });
      var UserFieldsFormInstance = Users_UserFieldsForm('change-email', this.onSubmit.bind(this));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.changeEmailTitle || 'Change Email?',
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        show: requesting,
        loading: loading,
        onCancel: cancelEmailChange,
        onConfirm: this.onConfirm,
        closeLabel: languageDictionary.closeButtonText
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message), /*#__PURE__*/react_default.a.createElement(UserFieldsFormInstance, {
        initialValues: display_mapValues(user, allowedFields, filteredFields, 'edit', languageDictionary),
        isEditForm: true,
        fields: filteredFields,
        languageDictionary: languageDictionary
      }));
    }
  }]);
}(react["Component"]), defineProperty_default()(EmailChangeDialog_Class, "stateToProps", function (state) {
  return {
    connections: state.connections,
    emailChange: state.emailChange,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(EmailChangeDialog_Class, "actionsToProps", EmailChangeDialog_objectSpread({
  submitForm: actions_submitForm
}, user_namespaceObject)), defineProperty_default()(EmailChangeDialog_Class, "propTypes", {
  cancelEmailChange: prop_types_default.a.func.isRequired,
  changeEmail: prop_types_default.a.func.isRequired,
  connections: prop_types_default.a.object.isRequired,
  emailChange: prop_types_default.a.object.isRequired
}), EmailChangeDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/PasswordChangeDialog.jsx






var _PasswordChangeDialog;
function PasswordChangeDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PasswordChangeDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PasswordChangeDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PasswordChangeDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PasswordChangeDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, PasswordChangeDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function PasswordChangeDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PasswordChangeDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }











/* harmony default export */ var Dialogs_PasswordChangeDialog = (redux_static_lib_default()((_PasswordChangeDialog = /*#__PURE__*/function (_Component) {
  function PasswordChangeDialog() {
    var _this;
    classCallCheck_default()(this, PasswordChangeDialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = PasswordChangeDialog_callSuper(this, PasswordChangeDialog, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.submitForm('change-password');
    });
    defineProperty_default()(_this, "onSubmit", function (changeForm) {
      var languageDictionary = _this.props.languageDictionary.get('record').toJS();
      _this.props.changePassword(changeForm, languageDictionary);
    });
    return _this;
  }
  inherits_default()(PasswordChangeDialog, _Component);
  return createClass_default()(PasswordChangeDialog, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.passwordChange !== this.props.passwordChange || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelPasswordChange = _this$props.cancelPasswordChange,
        settings = _this$props.settings,
        connections = _this$props.connections;
      var _this$props$passwordC = this.props.passwordChange.toJS(),
        connection = _this$props$passwordC.connection,
        user = _this$props$passwordC.user,
        error = _this$props$passwordC.error,
        requesting = _this$props$passwordC.requesting,
        loading = _this$props$passwordC.loading;
      var userFields = settings.userFields || [];
      if (!requesting) {
        return null;
      }
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.changePasswordMessage || 'Do you really want to reset the password for {username}? ' + 'You\'ll need a safe way to communicate the new password to your user, never send the user this' + ' new password in clear text.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      var fields = lodash_default.a.cloneDeep(userFields) || [];
      useDefaultFields_usePasswordFields(true, fields);
      useDefaultFields_useDisabledConnectionField(true, fields, connection, connections.get('records').toJS());
      useDefaultFields_useDisabledEmailField(true, fields);
      var allowedFields = ['email', 'connection', 'password', 'repeatPassword'];
      var filteredFields = lodash_default.a.filter(fields, function (field) {
        return lodash_default.a.includes(allowedFields, field.property);
      });
      var UserFieldsFormInstance = Users_UserFieldsForm('change-password', this.onSubmit);
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.changePasswordTitle || 'Change Password?',
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelPasswordChange,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message), /*#__PURE__*/react_default.a.createElement(UserFieldsFormInstance, {
        initialValues: display_mapValues(user, allowedFields, filteredFields, 'edit', languageDictionary),
        isEditForm: true,
        fields: filteredFields,
        languageDictionary: languageDictionary
      }));
    }
  }]);
}(react["Component"]), defineProperty_default()(_PasswordChangeDialog, "stateToProps", function (state) {
  return {
    connections: state.connections,
    passwordChange: state.passwordChange,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(_PasswordChangeDialog, "actionsToProps", PasswordChangeDialog_objectSpread({
  submitForm: actions_submitForm
}, user_namespaceObject)), defineProperty_default()(_PasswordChangeDialog, "propTypes", {
  connections: react["PropTypes"].object.isRequired,
  passwordChange: react["PropTypes"].object.isRequired,
  changePassword: react["PropTypes"].func.isRequired,
  cancelPasswordChange: react["PropTypes"].func.isRequired
}), _PasswordChangeDialog)));
// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var reselect_lib = __webpack_require__(211);

// CONCATENATED MODULE: ./client/selectors/getAppsForConnection.js

var getApps = function getApps(state) {
  return state.applications.get('records');
};
var getEnabledClients = function getEnabledClients(state) {
  return state.user.get('connection') && state.user.get('connection').get('enabled_clients');
};
var getAppsForConnection = Object(reselect_lib["createSelector"])([getApps, getEnabledClients], function (apps, enabledClients) {
  return apps.filter(function (app) {
    return enabledClients && enabledClients.indexOf(app.get('client_id')) >= 0;
  });
});
/* harmony default export */ var selectors_getAppsForConnection = (getAppsForConnection);
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/PasswordResetDialog.jsx






var PasswordResetDialog_Class;
function PasswordResetDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PasswordResetDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PasswordResetDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PasswordResetDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function PasswordResetDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, PasswordResetDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function PasswordResetDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PasswordResetDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }













/* harmony default export */ var PasswordResetDialog = (redux_static_lib_default()((PasswordResetDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = PasswordResetDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.submitForm('reset-password');
    });
    defineProperty_default()(_this, "onSubmit", function (formData) {
      _this.props.resetPassword(formData);
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.passwordReset !== this.props.passwordReset || nextProps.languageDictionary !== this.props.languageDictionary ||
      // nextProps.settings !== this.props.settings ||
      nextProps.appsForConnection !== this.props.appsForConnection;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelPasswordReset = _this$props.cancelPasswordReset,
        settings = _this$props.settings,
        connections = _this$props.connections;
      var _this$props$passwordR = this.props.passwordReset.toJS(),
        connection = _this$props$passwordR.connection,
        user = _this$props$passwordR.user,
        error = _this$props$passwordR.error,
        requesting = _this$props$passwordR.requesting,
        loading = _this$props$passwordR.loading;
      if (!requesting) {
        return null;
      }
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.resetPasswordMessage || 'Do you really want to reset the password for {username}? ' + 'This will send an email to the user allowing them to choose a new password.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      var fields = lodash_default.a.cloneDeep(userFields) || [];
      useDefaultFields_useClientField(true, fields, this.props.appsForConnection.toJS());
      useDefaultFields_useDisabledConnectionField(true, fields, connection, connections.get('records').toJS());
      useDefaultFields_useDisabledEmailField(true, fields);
      var allowedFields = ['email', 'client', 'connection'];
      var filteredFields = lodash_default.a.filter(fields, function (field) {
        return lodash_default.a.includes(allowedFields, field.property);
      });
      var UserFieldsFormInstance = Users_UserFieldsForm('reset-password', this.onSubmit);
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.resetPasswordTitle || 'Reset Password?',
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelPasswordReset,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message), /*#__PURE__*/react_default.a.createElement(UserFieldsFormInstance, {
        initialValues: display_mapValues(user, allowedFields, filteredFields, 'edit', languageDictionary, {
          applications: this.props.appsForConnection.toJS()
        }),
        isEditForm: true,
        fields: filteredFields,
        languageDictionary: languageDictionary
      }));
    }
  }]);
}(react["Component"]), defineProperty_default()(PasswordResetDialog_Class, "stateToProps", function (state) {
  return {
    connections: state.connections,
    passwordReset: state.passwordReset,
    appsForConnection: selectors_getAppsForConnection(state),
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(PasswordResetDialog_Class, "actionsToProps", PasswordResetDialog_objectSpread({
  submitForm: actions_submitForm
}, user_namespaceObject)), defineProperty_default()(PasswordResetDialog_Class, "propTypes", {
  cancelPasswordReset: prop_types_default.a.func.isRequired,
  resetPassword: prop_types_default.a.func.isRequired,
  connections: prop_types_default.a.object.isRequired,
  passwordReset: prop_types_default.a.object.isRequired,
  appsForConnection: prop_types_default.a.object
}), PasswordResetDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/RemoveMultiFactorDialog.jsx






var RemoveMultiFactorDialog_Class;
function RemoveMultiFactorDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function RemoveMultiFactorDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? RemoveMultiFactorDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RemoveMultiFactorDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function RemoveMultiFactorDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, RemoveMultiFactorDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function RemoveMultiFactorDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RemoveMultiFactorDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }













/**
 * Normalizes a multifactor value from the user object into an array of provider strings.
 *
 * The value can arrive in three forms depending on how the field was processed:
 * - Already a JS array (normal path)
 * - A JSON-stringified array (e.g. when mapValues serializes the field)
 * - A plain provider string (e.g. a single-provider user with no serialization)
 *
 * @param {string[]|string} value - Raw multifactor value from the user object.
 * @returns {string[]} Array of MFA provider strings.
 */
var parseProviders = function parseProviders(value) {
  if (Array.isArray(value)) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (_unused) {
    return [value];
  }
};
/* harmony default export */ var RemoveMultiFactorDialog = (redux_static_lib_default()((RemoveMultiFactorDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = RemoveMultiFactorDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.submitForm('remove-mfa');
    });
    defineProperty_default()(_this, "onSubmit", function (form) {
      _this.props.removeMultiFactor(form.user_id, form.multifactor);
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.mfa !== this.props.mfa || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelRemoveMultiFactor = _this$props.cancelRemoveMultiFactor,
        settings = _this$props.settings;
      var _this$props$mfa$toJS = this.props.mfa.toJS(),
        user = _this$props$mfa$toJS.user,
        error = _this$props$mfa$toJS.error,
        requesting = _this$props$mfa$toJS.requesting,
        loading = _this$props$mfa$toJS.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.removeMultiFactorMessage || 'Do you really want to remove the multi factor authentication settings for {username}? ' + 'This will allow the user to authenticate and reconfigure a new device.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      var fields = lodash_default.a.cloneDeep(userFields) || [];
      var providers = user && user.multifactor ? user.multifactor : [];
      var hasPasskey = providers.includes('passkey');
      var nonPasskeyProviders = providers.filter(function (p) {
        return p !== 'passkey';
      });
      useDefaultFields_useMfaField(true, fields, providers);
      var allowedFields = ['user_id', 'multifactor'];
      var filteredFields = lodash_default.a.filter(fields, function (field) {
        return lodash_default.a.includes(allowedFields, field.property);
      });
      var UserFieldsFormInstance = Users_UserFieldsForm('remove-mfa', this.onSubmit.bind(this));
      var initialValues = display_mapValues(user, allowedFields, filteredFields, 'edit', languageDictionary);
      if (initialValues.multifactor) {
        initialValues.multifactor = parseProviders(initialValues.multifactor)[0];
      }
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.removeMultiFactorTitle || "Remove Multi Factor Authentication?",
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelRemoveMultiFactor,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message), hasPasskey && nonPasskeyProviders.length > 0 && /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("b", null, "Note:"), " Removing all authentication factors at once is not supported when the user has at least one passkey registered. Remove any passkeys first, and then if multiple types of factors remain, an option to remove all of the remaining types will be added below."), /*#__PURE__*/react_default.a.createElement(UserFieldsFormInstance, {
        initialValues: initialValues,
        isEditForm: true,
        fields: filteredFields,
        languageDictionary: languageDictionary
      }));
    }
  }]);
}(react["Component"]), defineProperty_default()(RemoveMultiFactorDialog_Class, "stateToProps", function (state) {
  return {
    mfa: state.mfa,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(RemoveMultiFactorDialog_Class, "actionsToProps", RemoveMultiFactorDialog_objectSpread({
  submitForm: actions_submitForm
}, user_namespaceObject)), defineProperty_default()(RemoveMultiFactorDialog_Class, "propTypes", {
  cancelRemoveMultiFactor: prop_types_default.a.func.isRequired,
  removeMultiFactor: prop_types_default.a.func.isRequired,
  mfa: prop_types_default.a.object.isRequired
}), RemoveMultiFactorDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/ResendVerificationEmailDialog.jsx






var ResendVerificationEmailDialog_Class;
function ResendVerificationEmailDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ResendVerificationEmailDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ResendVerificationEmailDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ResendVerificationEmailDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ResendVerificationEmailDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, ResendVerificationEmailDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function ResendVerificationEmailDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ResendVerificationEmailDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








/* harmony default export */ var ResendVerificationEmailDialog = (redux_static_lib_default()((ResendVerificationEmailDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = ResendVerificationEmailDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.resendVerificationEmail(_this.props.verificationEmail.toJS().user.user_id);
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.verificationEmail !== this.props.verificationEmail || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelResendVerificationEmail = _this$props.cancelResendVerificationEmail,
        settings = _this$props.settings;
      var _this$props$verificat = this.props.verificationEmail.toJS(),
        user = _this$props$verificat.user,
        error = _this$props$verificat.error,
        requesting = _this$props$verificat.requesting,
        loading = _this$props$verificat.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.resendVerificationEmailMessage || 'Do you really want to resend verification email to {username}?';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.resendVerificationEmailTitle || "Resend Verification Email?",
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelResendVerificationEmail,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message));
    }
  }]);
}(react["Component"]), defineProperty_default()(ResendVerificationEmailDialog_Class, "stateToProps", function (state) {
  return {
    verificationEmail: state.verificationEmail,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(ResendVerificationEmailDialog_Class, "actionsToProps", ResendVerificationEmailDialog_objectSpread({}, user_namespaceObject)), defineProperty_default()(ResendVerificationEmailDialog_Class, "propTypes", {
  cancelResendVerificationEmail: prop_types_default.a.func.isRequired,
  resendVerificationEmail: prop_types_default.a.func.isRequired,
  verificationEmail: prop_types_default.a.object.isRequired
}), ResendVerificationEmailDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/UnblockDialog.jsx






var UnblockDialog_Class;
function UnblockDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function UnblockDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? UnblockDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : UnblockDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function UnblockDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UnblockDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UnblockDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UnblockDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









/* harmony default export */ var UnblockDialog = (redux_static_lib_default()((UnblockDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = UnblockDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.unblockUser();
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.unblock !== this.props.unblock || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelUnblockUser = _this$props.cancelUnblockUser,
        settings = _this$props.settings;
      var _this$props$unblock$t = this.props.unblock.toJS(),
        user = _this$props$unblock$t.user,
        error = _this$props$unblock$t.error,
        requesting = _this$props$unblock$t.requesting,
        loading = _this$props$unblock$t.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.unblockDialogMessage || 'Do you really want to unblock {username}? ' + 'After doing so the user will be able to sign in again.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.unblockDialogTitle || "Unblock User?",
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelUnblockUser,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message));
    }
  }]);
}(react["Component"]), defineProperty_default()(UnblockDialog_Class, "stateToProps", function (state) {
  return {
    unblock: state.unblock,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(UnblockDialog_Class, "actionsToProps", UnblockDialog_objectSpread({}, user_namespaceObject)), defineProperty_default()(UnblockDialog_Class, "propTypes", {
  cancelUnblockUser: prop_types_default.a.func.isRequired,
  unblockUser: prop_types_default.a.func.isRequired,
  unblock: prop_types_default.a.object.isRequired
}), UnblockDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/RemoveBlocksDialog.jsx






var RemoveBlocksDialog_Class;
function RemoveBlocksDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function RemoveBlocksDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? RemoveBlocksDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RemoveBlocksDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function RemoveBlocksDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, RemoveBlocksDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function RemoveBlocksDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RemoveBlocksDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









/* harmony default export */ var RemoveBlocksDialog = (redux_static_lib_default()((RemoveBlocksDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = RemoveBlocksDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.removeUserBlocks();
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.removeBlockedIPs !== this.props.removeBlockedIPs || nextProps.languageDictionary !== this.props.languageDictionary;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelRemoveBlocks = _this$props.cancelRemoveBlocks,
        settings = _this$props.settings;
      var _this$props$removeBlo = this.props.removeBlockedIPs.toJS(),
        user = _this$props$removeBlo.user,
        error = _this$props$removeBlo.error,
        requesting = _this$props$removeBlo.requesting,
        loading = _this$props$removeBlo.loading;
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.removeBlockedIPsDialogMessage || 'Do you really want to remove all Anomaly Detection blocks from {username}? ' + 'After doing so the user will be able to sign in again.';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.removeBlockedIPsDialogTitle || 'Remove all blocked IPs?',
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelRemoveBlocks,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message));
    }
  }]);
}(react["Component"]), defineProperty_default()(RemoveBlocksDialog_Class, "stateToProps", function (state) {
  return {
    removeBlockedIPs: state.removeBlockedIPs,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(RemoveBlocksDialog_Class, "actionsToProps", RemoveBlocksDialog_objectSpread({}, user_namespaceObject)), defineProperty_default()(RemoveBlocksDialog_Class, "propTypes", {
  cancelRemoveBlocks: prop_types_default.a.func.isRequired,
  removeUserBlocks: prop_types_default.a.func.isRequired,
  removeBlockedIPs: prop_types_default.a.object.isRequired
}), RemoveBlocksDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/UsernameChangeDialog.jsx






var UsernameChangeDialog_Class;
function UsernameChangeDialog_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function UsernameChangeDialog_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? UsernameChangeDialog_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : UsernameChangeDialog_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function UsernameChangeDialog_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, UsernameChangeDialog_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function UsernameChangeDialog_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (UsernameChangeDialog_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }











/* harmony default export */ var UsernameChangeDialog = (redux_static_lib_default()((UsernameChangeDialog_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    var _this;
    classCallCheck_default()(this, _Class);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = UsernameChangeDialog_callSuper(this, _Class, [].concat(args));
    defineProperty_default()(_this, "onConfirm", function () {
      _this.props.submitForm('change-username');
    });
    defineProperty_default()(_this, "onSubmit", function (formData) {
      var languageDictionary = _this.props.languageDictionary.get('record').toJS();
      _this.props.changeUsername(_this.props.usernameChange.toJS().user.user_id, formData, languageDictionary);
    });
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.languageDictionary !== this.props.languageDictionary || nextProps.usernameChange !== this.props.usernameChange;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        cancelUsernameChange = _this$props.cancelUsernameChange,
        connections = _this$props.connections,
        settings = _this$props.settings;
      var _this$props$usernameC = this.props.usernameChange.toJS(),
        user = _this$props$usernameC.user,
        connection = _this$props$usernameC.connection,
        error = _this$props$usernameC.error,
        requesting = _this$props$usernameC.requesting,
        loading = _this$props$usernameC.loading;
      if (!requesting) {
        return null;
      }
      var userFields = settings.userFields || [];
      var languageDictionary = this.props.languageDictionary.get('record').toJS();
      var messageFormat = languageDictionary.changeUsernameMessage || 'Do you really want to change the username for {username}?';
      var message = Dialogs_getDialogMessage(messageFormat, 'username', display_getName(user, userFields, languageDictionary));
      var allowedFields = ['username', 'connection'];
      var initialValues = display_mapValues(user, allowedFields, userFields, 'edit', languageDictionary);
      var fields = lodash_default.a.cloneDeep(userFields) || [];
      useDefaultFields_useUsernameField(true, fields, connections.get('records').toJS(), connection, initialValues);
      useDefaultFields_useDisabledConnectionField(true, fields, connection, connections.get('records').toJS());
      var filteredFields = lodash_default.a.filter(fields, function (field) {
        return lodash_default.a.includes(allowedFields, field.property);
      });
      var UserFieldsFormInstance = Users_UserFieldsForm('change-username', this.onSubmit);
      return /*#__PURE__*/react_default.a.createElement(dist["Confirm"], {
        title: languageDictionary.changeUsernameTitle || 'Change Username?',
        show: requesting,
        loading: loading,
        confirmMessage: languageDictionary.dialogConfirmText,
        cancelMessage: languageDictionary.dialogCancelText,
        onCancel: cancelUsernameChange,
        closeLabel: languageDictionary.closeButtonText,
        onConfirm: this.onConfirm
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, error, settings.errorTranslator)
      }), /*#__PURE__*/react_default.a.createElement("p", null, message), /*#__PURE__*/react_default.a.createElement(UserFieldsFormInstance, {
        initialValues: initialValues,
        isEditForm: true,
        fields: filteredFields,
        languageDictionary: languageDictionary
      }));
    }
  }]);
}(react["Component"]), defineProperty_default()(UsernameChangeDialog_Class, "stateToProps", function (state) {
  return {
    usernameChange: state.usernameChange,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    connections: state.connections,
    languageDictionary: state.languageDictionary
  };
}), defineProperty_default()(UsernameChangeDialog_Class, "actionsToProps", UsernameChangeDialog_objectSpread({
  submitForm: actions_submitForm
}, user_namespaceObject)), defineProperty_default()(UsernameChangeDialog_Class, "propTypes", {
  cancelUsernameChange: react["PropTypes"].func.isRequired,
  changeUsername: react["PropTypes"].func.isRequired,
  connections: react["PropTypes"].object.isRequired,
  usernameChange: react["PropTypes"].object.isRequired
}), UsernameChangeDialog_Class)));
// CONCATENATED MODULE: ./client/containers/Users/Dialogs/index.js












// CONCATENATED MODULE: ./client/selectors/getUserDatabaseConnections.js

var getUserIdentities = function getUserIdentities(state) {
  return state.user.get('record') && state.user.get('record').get('identities');
};
var getUserDatabaseConnections = Object(reselect_lib["createSelector"])([getUserIdentities], function (identities) {
  return identities && identities.filter(function (identity) {
    return identity.get('provider') === 'auth0';
  }).map(function (identity) {
    return identity.get('connection');
  });
});
/* harmony default export */ var selectors_getUserDatabaseConnections = (getUserDatabaseConnections);
// CONCATENATED MODULE: ./client/containers/Users/User.jsx






var User_Class;
function User_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function User_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? User_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : User_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function User_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, User_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function User_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (User_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }












/* harmony default export */ var User = (redux_static_lib_default()((User_Class = /*#__PURE__*/function (_Component) {
  function _Class() {
    classCallCheck_default()(this, _Class);
    return User_callSuper(this, _Class, arguments);
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchUser(this.props.params.id);
    }
  }, {
    key: "renderProfile",
    value: function renderProfile(suppressRawData, user, languageDictionary, settings) {
      if (suppressRawData) return null;
      return /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 4,
        title: languageDictionary.userProfileTabTitle || 'Profile'
      }, /*#__PURE__*/react_default.a.createElement(UserProfile_UserProfile, {
        loading: user.get('loading'),
        user: user.get('record'),
        error: user.get('error'),
        languageDictionary: languageDictionary,
        settings: settings
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        user = _this$props.user,
        databaseConnections = _this$props.databaseConnections,
        log = _this$props.log,
        logs = _this$props.logs,
        devices = _this$props.devices,
        settings = _this$props.settings,
        languageDictionary = _this$props.languageDictionary;
      var userFields = settings && settings.userFields || [];
      var allowedUserFields = userFields.filter(function (field) {
        return field.property !== 'picture' && field.property !== 'client';
      });
      var suppressRawData = settings && settings.suppressRawData === true;
      var role = this.props.accessLevel.role;
      var originalTitle = settings.dict && settings.dict.title || window.config.TITLE || 'User Management';
      document.title = "".concat(languageDictionary.userTitle || 'User Details', " - ").concat(originalTitle);
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "user"
      }, /*#__PURE__*/react_default.a.createElement(TabsHeader_TabsHeader, {
        role: role,
        languageDictionary: languageDictionary
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row content-header"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement("h1", {
        className: "pull-left"
      }, languageDictionary.userTitle || 'User Details'), /*#__PURE__*/react_default.a.createElement("div", {
        className: "pull-right"
      }, /*#__PURE__*/react_default.a.createElement(UserActions_UserActions, {
        role: role,
        user: user,
        userFields: allowedUserFields,
        databaseConnections: databaseConnections,
        deleteUser: this.props.requestDeleteUser,
        changeFields: this.props.requestFieldsChange,
        resetPassword: this.props.requestPasswordReset,
        changePassword: this.props.requestPasswordChange,
        removeMfa: this.props.requestRemoveMultiFactor,
        blockUser: this.props.requestBlockUser,
        unblockUser: this.props.requestUnblockUser,
        removeBlockedIPs: this.props.requestRemoveBlockedIPs,
        changeUsername: this.props.requestUsernameChange,
        changeEmail: this.props.requestEmailChange,
        resendVerificationEmail: this.props.requestResendVerificationEmail,
        languageDictionary: languageDictionary
      })))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement(UserHeader_UserHeader, {
        loading: user.get('loading'),
        user: user.get('record'),
        error: user.get('error'),
        userFields: allowedUserFields,
        languageDictionary: languageDictionary
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row user-tabs"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tabs"], {
        defaultActiveKey: 1,
        animation: false,
        id: "user-info-tabs"
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 1,
        title: languageDictionary.userUserInfoTabTitle || 'User Information'
      }, /*#__PURE__*/react_default.a.createElement(UserInfo_UserInfo, {
        loading: user.get('loading'),
        user: user.get('record'),
        memberships: user.get('memberships') && user.get('memberships').toJSON(),
        userFields: allowedUserFields,
        error: user.get('error'),
        settings: settings,
        languageDictionary: languageDictionary
      })), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 2,
        title: languageDictionary.userDevicesTabTitle || 'Devices'
      }, /*#__PURE__*/react_default.a.createElement(UserDevices_UserDevices, {
        loading: devices.get('loading'),
        devices: devices.get('records'),
        languageDictionary: languageDictionary,
        settings: settings,
        error: devices.get('error')
      })), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 3,
        title: languageDictionary.userLogsTabTitle || 'Logs'
      }, /*#__PURE__*/react_default.a.createElement(LogDialog_LogDialog, {
        onClose: this.props.clearLog,
        error: log.get('error'),
        loading: log.get('loading'),
        log: log.get('record'),
        languageDictionary: languageDictionary,
        settings: settings,
        logId: log.get('logId')
      }), /*#__PURE__*/react_default.a.createElement(LogsTable_LogsTable, {
        onOpen: this.props.fetchLog,
        loading: logs.get('loading'),
        logs: logs.get('records'),
        languageDictionary: languageDictionary,
        error: logs.get('error'),
        settings: settings,
        isUserLogs: true
      })), this.renderProfile(suppressRawData, user, languageDictionary, settings)))), /*#__PURE__*/react_default.a.createElement(DeleteDialog, null), /*#__PURE__*/react_default.a.createElement(FieldsChangeDialog, {
        getDictValue: this.props.getDictValue,
        userFields: allowedUserFields,
        errorTranslator: settings.errorTranslator
      }), /*#__PURE__*/react_default.a.createElement(EmailChangeDialog, null), /*#__PURE__*/react_default.a.createElement(PasswordResetDialog, null), /*#__PURE__*/react_default.a.createElement(Dialogs_PasswordChangeDialog, null), /*#__PURE__*/react_default.a.createElement(UsernameChangeDialog, null), /*#__PURE__*/react_default.a.createElement(ResendVerificationEmailDialog, null), /*#__PURE__*/react_default.a.createElement(BlockDialog, null), /*#__PURE__*/react_default.a.createElement(UnblockDialog, null), /*#__PURE__*/react_default.a.createElement(RemoveBlocksDialog, null), /*#__PURE__*/react_default.a.createElement(RemoveMultiFactorDialog, null));
    }
  }]);
}(react["Component"]), defineProperty_default()(User_Class, "stateToProps", function (state) {
  return {
    user: state.user,
    databaseConnections: selectors_getUserDatabaseConnections(state),
    log: state.log,
    logs: state.user.get('logs'),
    devices: state.user.get('devices'),
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary.get('record').toJS() || {}
  };
}), defineProperty_default()(User_Class, "actionsToProps", User_objectSpread(User_objectSpread({}, log_namespaceObject), user_namespaceObject)), defineProperty_default()(User_Class, "propTypes", {
  languageDictionary: react["PropTypes"].object.isRequired,
  accessLevel: react["PropTypes"].object.isRequired,
  settings: react["PropTypes"].object.isRequired,
  user: react["PropTypes"].object,
  log: react["PropTypes"].object,
  logs: react["PropTypes"].object,
  devices: react["PropTypes"].object,
  params: react["PropTypes"].object,
  clearLog: react_default.a.PropTypes.func.isRequired,
  fetchLog: react_default.a.PropTypes.func.isRequired,
  fetchUser: react_default.a.PropTypes.func.isRequired,
  getDictValue: react_default.a.PropTypes.func.isRequired
}), User_Class)));
// EXTERNAL MODULE: ./client/containers/Users/Users.styles.css
var Users_styles = __webpack_require__(1333);

// CONCATENATED MODULE: ./client/containers/Users/Users.jsx






function Users_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Users_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Users_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Users_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Users_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, Users_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function Users_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Users_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }









var Users_Users = /*#__PURE__*/function (_Component) {
  function Users(props) {
    var _this;
    classCallCheck_default()(this, Users);
    _this = Users_callSuper(this, Users, [props]);
    defineProperty_default()(_this, "componentWillMount", function () {
      _this.props.fetchUsers();
      if (!_this.props.connectionsLoading) {
        _this.props.fetchConnections();
      }
    });
    defineProperty_default()(_this, "onPageChange", function (page) {
      _this.props.fetchUsers('', false, page - 1);
    });
    defineProperty_default()(_this, "onSearch", function (query, filterBy, onSuccess) {
      if (query && query.length > 0) {
        _this.props.fetchUsers(query, false, 0, filterBy, null, onSuccess);
      }
    });
    defineProperty_default()(_this, "onReset", function () {
      _this.props.fetchUsers('', true);
    });
    defineProperty_default()(_this, "createUser", function () {
      _this.props.requestCreateUser(_this.props.accessLevel.get('record').get('memberships') && _this.props.accessLevel.get('record').get('memberships').toJS());
    });
    defineProperty_default()(_this, "onColumnSort", function (sort) {
      _this.props.fetchUsers('', false, 0, null, sort);
    });
    _this.state = {
      showCreateForm: false
    };
    return _this;
  }
  inherits_default()(Users, _Component);
  return createClass_default()(Users, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        loading = _this$props.loading,
        error = _this$props.error,
        users = _this$props.users,
        total = _this$props.total,
        connectionsLoading = _this$props.connectionsLoading,
        accessLevel = _this$props.accessLevel,
        nextPage = _this$props.nextPage,
        pages = _this$props.pages,
        settings = _this$props.settings,
        sortProperty = _this$props.sortProperty,
        sortOrder = _this$props.sortOrder,
        searchValue = _this$props.searchValue,
        languageDictionary = _this$props.languageDictionary;
      var userFields = settings && settings.userFields || [];
      var showCreateUser = settings.canCreateUser !== undefined ? settings.canCreateUser : true;
      var role = accessLevel.get('record').get('role');
      var originalTitle = settings.dict && settings.dict.title || window.config.TITLE || 'User Management';
      document.title = "".concat(languageDictionary.userUsersTabTitle || 'Users', " - ").concat(originalTitle);
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "users"
      }, /*#__PURE__*/react_default.a.createElement(TabsHeader_TabsHeader, {
        languageDictionary: languageDictionary,
        role: role
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row content-header"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 user-table-content"
      }, /*#__PURE__*/react_default.a.createElement("h1", null, languageDictionary.usersTitle || 'Users'), !connectionsLoading && role > 0 && showCreateUser ? /*#__PURE__*/react_default.a.createElement("button", {
        id: "create-user-button",
        className: "btn btn-success pull-right new",
        onClick: this.createUser
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "icon-budicon-473"
      }), languageDictionary.createUserButtonText || 'Create User') : '')), /*#__PURE__*/react_default.a.createElement(CreateDialog, {
        getDictValue: this.props.getDictValue,
        userFields: userFields,
        errorTranslator: settings && settings.errorTranslator
      }), /*#__PURE__*/react_default.a.createElement(UserOverview_UserOverview, {
        onReset: this.onReset,
        onSearch: this.onSearch,
        onPageChange: this.onPageChange,
        error: error,
        users: users,
        total: total,
        nextPage: nextPage,
        pages: pages,
        loading: loading,
        role: accessLevel.role,
        userFields: userFields,
        sortProperty: sortProperty,
        sortOrder: sortOrder,
        searchValue: searchValue,
        onColumnSort: this.onColumnSort,
        settings: settings,
        languageDictionary: languageDictionary
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, pages > 1 ? /*#__PURE__*/react_default.a.createElement(dist["Pagination"], {
        totalItems: total,
        handlePageChange: this.onPageChange,
        perPage: 10,
        textFormat: languageDictionary.paginationTextFormat
      }) : /*#__PURE__*/react_default.a.createElement(dist["TableTotals"], {
        currentCount: users.length,
        totalCount: total,
        textFormat: languageDictionary.tableTotalsTextFormat
      }))));
    }
  }]);
}(react["Component"]);
defineProperty_default()(Users_Users, "propTypes", {
  loading: prop_types_default.a.bool.isRequired,
  connectionsLoading: prop_types_default.a.bool.isRequired,
  error: prop_types_default.a.string,
  users: prop_types_default.a.array,
  connections: prop_types_default.a.array,
  userCreateError: prop_types_default.a.string,
  userCreateLoading: prop_types_default.a.bool,
  validationErrors: prop_types_default.a.object,
  accessLevel: prop_types_default.a.object,
  total: prop_types_default.a.number,
  fetchUsers: prop_types_default.a.func.isRequired,
  getDictValue: prop_types_default.a.func.isRequired,
  createUser: prop_types_default.a.func.isRequired,
  fetchConnections: prop_types_default.a.func.isRequired,
  requestCreateUser: prop_types_default.a.func.isRequired,
  settings: prop_types_default.a.object.isRequired,
  sortOrder: prop_types_default.a.number.isRequired,
  sortProperty: prop_types_default.a.string.isRequired,
  searchValue: prop_types_default.a.string,
  languageDictionary: prop_types_default.a.object.isRequired
});
function Users_mapStateToProps(state) {
  return {
    accessLevel: state.accessLevel,
    error: state.users.get('error'),
    userCreateError: state.userCreate.get('error'),
    userCreateLoading: state.userCreate.get('loading'),
    validationErrors: state.userCreate.get('validationErrors'),
    loading: state.users.get('loading'),
    users: state.users.get('records').toJS(),
    connections: state.connections.get('records').toJS(),
    connectionsLoading: state.connections.get('loading'),
    total: state.users.get('total'),
    nextPage: state.users.get('nextPage'),
    pages: state.users.get('pages'),
    sortProperty: state.users.get('sortProperty'),
    sortOrder: state.users.get('sortOrder'),
    searchValue: state.users.get('searchValue'),
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary.get('record').toJS()
  };
}
var UsersContainer = Object(react_redux_lib["connect"])(Users_mapStateToProps, Users_objectSpread(Users_objectSpread({}, connection_namespaceObject), user_namespaceObject))(Users_Users);
/* harmony default export */ var containers_Users_Users = (UsersContainer);
// EXTERNAL MODULE: ./node_modules/react-codemirror/lib/Codemirror.js
var Codemirror = __webpack_require__(633);
var Codemirror_default = /*#__PURE__*/__webpack_require__.n(Codemirror);

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.js
var codemirror = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/codemirror/mode/javascript/javascript.js
var javascript = __webpack_require__(1335);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/lint/lint.js
var lint = __webpack_require__(1336);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/lint/lint.css
var lint_lint = __webpack_require__(1337);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/lint/javascript-lint.js
var javascript_lint = __webpack_require__(1338);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/lint/json-lint.js
var json_lint = __webpack_require__(1339);

// EXTERNAL MODULE: ./node_modules/codemirror/addon/hint/show-hint.css
var show_hint = __webpack_require__(1340);

// EXTERNAL MODULE: ./client/components/Editor/editor.css
var editor = __webpack_require__(1341);

// CONCATENATED MODULE: ./client/components/Editor/index.jsx






function Editor_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, Editor_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function Editor_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Editor_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }










var Editor_Editor = /*#__PURE__*/function (_Component) {
  function Editor(props) {
    var _this;
    classCallCheck_default()(this, Editor);
    _this = Editor_callSuper(this, Editor, [props]);
    defineProperty_default()(_this, "onChange", function (code) {
      _this.setState({
        value: code
      });
      if (_this.props.onChange) {
        _this.props.onChange(code);
      }
    });
    _this.state = {
      value: props.value || ''
    };
    return _this;
  }
  inherits_default()(Editor, _Component);
  return createClass_default()(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editor = this.refs.editor; // eslint-disable-line react/no-string-refs
      editor.getCodeMirror().refresh();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
        var editor = this.refs.editor; // eslint-disable-line react/no-string-refs
        if (editor) {
          editor.getCodeMirror().setValue(nextProps.value);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var editor = this.refs.editor; // eslint-disable-line react/no-string-refs
      editor.getCodeMirror().refresh();
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options;
      return /*#__PURE__*/react_default.a.createElement(Codemirror_default.a, {
        ref: "editor" // eslint-disable-line react/no-string-refs
        ,
        value: this.state.value || '',
        onChange: this.onChange,
        options: options
      });
    }
  }]);
}(react["Component"]);
defineProperty_default()(Editor_Editor, "propTypes", {
  value: react["PropTypes"].string.isRequired,
  options: react["PropTypes"].object.isRequired,
  onChange: react["PropTypes"].func
});
defineProperty_default()(Editor_Editor, "defaultProps", {
  value: '',
  options: {
    mode: 'javascript',
    lineWrapping: true,
    continueComments: 'Enter',
    matchBrackets: true,
    styleActiveLine: true,
    closeBrackets: true,
    indentUnit: 2,
    smartIndent: true,
    autofocus: true,
    tabSize: 2,
    lint: {
      options: {
        sub: true,
        noarg: true,
        undef: true,
        eqeqeq: true,
        laxcomma: true,
        '-W025': true,
        predef: ['module', 'require']
      }
    }
  }
});

// EXTERNAL MODULE: ./client/containers/Configuration/Configuration.css
var Configuration = __webpack_require__(1342);

// CONCATENATED MODULE: ./client/containers/Configuration/Configuration.jsx






var Configuration_Class;
function Configuration_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Configuration_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Configuration_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Configuration_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Configuration_callSuper(t, o, e) { return o = getPrototypeOf_default()(o), possibleConstructorReturn_default()(t, Configuration_isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf_default()(t).constructor) : o.apply(t, e)); }
function Configuration_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Configuration_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }








/* harmony default export */ var Configuration_Configuration = (redux_static_lib_default()((Configuration_Class = /*#__PURE__*/function (_Component) {
  function _Class(props) {
    var _this;
    classCallCheck_default()(this, _Class);
    _this = Configuration_callSuper(this, _Class, [props]);
    defineProperty_default()(_this, "componentWillMount", function () {
      _this.props.fetchScript('access');
      _this.props.fetchScript('filter');
      _this.props.fetchScript('create');
      _this.props.fetchScript('memberships');
      _this.props.fetchScript('settings');
      _this.props.fetchScript('customDomain');
    });
    defineProperty_default()(_this, "saveScript", function (name) {
      return function () {
        _this.props.updateScript(name, _this.state.code[name]);
      };
    });
    defineProperty_default()(_this, "onEditorChanged", function (name) {
      return function (value) {
        var code = _this.state.code;
        code[name] = value;
        _this.setState({
          code: code
        });
      };
    });
    _this.state = {
      activeTab: 1,
      code: {}
    };
    return _this;
  }
  inherits_default()(_Class, _Component);
  return createClass_default()(_Class, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.scripts !== nextProps.scripts;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scripts) {
        var code = this.state.code;
        var scripts = nextProps.scripts.toJS();
        Object.keys(scripts).forEach(function (scriptName) {
          if (!code[scriptName]) {
            code[scriptName] = scripts[scriptName].script;
          }
        });
        this.setState({
          code: code
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var code = this.state.code;
      var scripts = this.props.scripts.toJS();
      var _this$props = this.props,
        languageDictionary = _this$props.languageDictionary,
        settings = _this$props.settings;
      var originalTitle = settings.dict && settings.dict.title || window.config.TITLE || 'User Management';
      document.title = "".concat(languageDictionary.configurationMenuItemText || 'Configuration', " - ").concat(originalTitle);
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: "configuration"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "row content-header"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12 user-table-content"
      }, /*#__PURE__*/react_default.a.createElement("h2", null, "Configuration"), /*#__PURE__*/react_default.a.createElement("p", null, "This configuration page allows you to fine tune the behavior of the Delegated Administration dashboard. More information and examples of hooks are available ", /*#__PURE__*/react_default.a.createElement("a", {
        href: "https://auth0.com/docs/extensions/delegated-admin"
      }, "on the documentation page"), "."))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "row configuration-tabs"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "col-xs-12"
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tabs"], {
        defaultActiveKey: this.state.activeTab,
        animation: false,
        id: "configuration-tabs"
      }, /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 1,
        title: code.filter && code.filter.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Filter Hook") : /*#__PURE__*/react_default.a.createElement("i", null, "Filter Hook")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.filter && scripts.filter.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.filter && scripts.filter.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "The ", /*#__PURE__*/react_default.a.createElement("strong", null, "filter hook"), " allows you to specify which records are shown to the current users when loading the list of users or searching. For example: ", /*#__PURE__*/react_default.a.createElement("i", null, "Only show users from my department"), ". This has to be defined using the lucene syntax."), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.filter || '',
        onChange: this.onEditorChanged('filter')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('filter'),
        className: "btn btn-success"
      }, "Save Filter Hook")))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 2,
        title: code.access && code.access.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Access Hook") : /*#__PURE__*/react_default.a.createElement("i", null, "Access Hook")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.access && scripts.access.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.access && scripts.access.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "The ", /*#__PURE__*/react_default.a.createElement("strong", null, "access hook"), " will allow you to specify if the current user is allowed to access a specific user (eg: view the details, delete the user, ...)."), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.access || '',
        onChange: this.onEditorChanged('access')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('access'),
        className: "btn btn-success"
      }, "Save Access Hook")))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 3,
        title: code.create && code.create.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Write Hook") : /*#__PURE__*/react_default.a.createElement("i", null, "Write Hook")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.create && scripts.create.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.create && scripts.create.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "The ", /*#__PURE__*/react_default.a.createElement("strong", null, "write hook"), " will run every time a new user is created. This hook will allow you to shape the user object before it's sent to Auth0. The context object contains the request (with the current user) and the payload sent by the end user."), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.create || '',
        onChange: this.onEditorChanged('create')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('create'),
        className: "btn btn-success"
      }, "Save Write Hook")))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 4,
        title: code.memberships && code.memberships.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Memberships Hook") : /*#__PURE__*/react_default.a.createElement("i", null, "Memberships Hook")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.memberships && scripts.memberships.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.memberships && scripts.memberships.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "With the ", /*#__PURE__*/react_default.a.createElement("strong", null, "membership query"), " you can specify in which groups the current user can create new users. Only in their own department? Or other departments also?"), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.memberships || '',
        onChange: this.onEditorChanged('memberships')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('memberships'),
        className: "btn btn-success"
      }, "Save Memberships Query")))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 5,
        title: code.settings && code.settings.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Settings Query") : /*#__PURE__*/react_default.a.createElement("i", null, "Settings Query")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.settings && scripts.settings.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.settings && scripts.settings.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "With the ", /*#__PURE__*/react_default.a.createElement("strong", null, "settings query"), " you can control the title and the look-and-feel of the dashboard after the user has logged in?"), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.settings || '',
        onChange: this.onEditorChanged('settings')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('settings'),
        className: "btn btn-success"
      }, "Save Settings Query")))), /*#__PURE__*/react_default.a.createElement(react_bootstrap_lib["Tab"], {
        eventKey: 6,
        title: code.customDomain && code.customDomain.length ? /*#__PURE__*/react_default.a.createElement("span", null, "Custom Domain Hook") : /*#__PURE__*/react_default.a.createElement("i", null, "Custom Domain Hook")
      }, /*#__PURE__*/react_default.a.createElement(dist["LoadingPanel"], {
        show: scripts.customDomain && scripts.customDomain.loading,
        animationStyle: {
          paddingTop: '5px',
          paddingBottom: '5px'
        }
      }, /*#__PURE__*/react_default.a.createElement(dist["Error"], {
        title: languageDictionary.errorTitle,
        message: getErrorMessage(languageDictionary, scripts.customDomain && scripts.customDomain.error)
      }), /*#__PURE__*/react_default.a.createElement("p", null, "The ", /*#__PURE__*/react_default.a.createElement("strong", null, "Custom Domain Selection hook"), " allows you to specify which Auth0 custom domain should be used for user-facing operations like password resets and email verifications."), /*#__PURE__*/react_default.a.createElement(Editor_Editor, {
        value: code.customDomain || '',
        onChange: this.onEditorChanged('customDomain')
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "save-config"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.saveScript('customDomain'),
        className: "btn btn-success"
      }, "Save Custom Domain Hook"))))))));
    }
  }]);
}(react["Component"]), defineProperty_default()(Configuration_Class, "stateToProps", function (state) {
  return {
    scripts: state.scripts,
    settings: state.settings.get('record') && state.settings.get('record').toJS().settings || {},
    languageDictionary: state.languageDictionary && state.languageDictionary.get('record').toJS()
  };
}), defineProperty_default()(Configuration_Class, "actionsToProps", Configuration_objectSpread({}, script_namespaceObject)), defineProperty_default()(Configuration_Class, "propTypes", {
  scripts: react["PropTypes"].object.isRequired,
  settings: react["PropTypes"].object.isRequired,
  fetchScript: react["PropTypes"].func.isRequired,
  updateScript: react["PropTypes"].func.isRequired,
  languageDictionary: react["PropTypes"].object
}), defineProperty_default()(Configuration_Class, "defaultProps", {
  languageDictionary: {}
}), Configuration_Class)));
// CONCATENATED MODULE: ./client/containers/index.js







// CONCATENATED MODULE: ./client/routes.jsx



/* harmony default export */ var routes = (function (history) {
  return /*#__PURE__*/react_default.a.createElement(react_router_lib["Router"], {
    history: history
  }, /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "/",
    component: RequireAuthentication(containers_App)
  }, /*#__PURE__*/react_default.a.createElement(react_router_lib["IndexRedirect"], {
    to: "/users"
  }), /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "logs",
    component: Logs
  }), /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "configuration",
    component: Configuration_Configuration
  }), /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "users",
    component: containers_Users_Users
  }), /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "users/:id",
    component: User
  })), /*#__PURE__*/react_default.a.createElement(react_router_lib["Route"], {
    path: "/login",
    component: Login
  }));
});
// EXTERNAL MODULE: ./node_modules/redux-logger/lib/index.js
var redux_logger_lib = __webpack_require__(634);
var redux_logger_lib_default = /*#__PURE__*/__webpack_require__.n(redux_logger_lib);

// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var redux_thunk_lib = __webpack_require__(635);
var redux_thunk_lib_default = /*#__PURE__*/__webpack_require__.n(redux_thunk_lib);

// EXTERNAL MODULE: ./node_modules/redux-promise-middleware/dist/index.js
var redux_promise_middleware_dist = __webpack_require__(636);
var redux_promise_middleware_dist_default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware_dist);

// EXTERNAL MODULE: ./node_modules/redux/lib/index.js
var redux_lib = __webpack_require__(85);

// CONCATENATED MODULE: ./client/reducers/accessLevel.js

function accessLevel_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function accessLevel_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? accessLevel_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : accessLevel_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var accessLevel_initialState = {
  loading: false,
  error: null,
  record: Object(immutable["fromJS"])({
    role: 0,
    memberships: [],
    createMemberships: false
  })
};
var accessLevel_accessLevel = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(accessLevel_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["F" /* FETCH_ACCESS_LEVEL_PENDING */], function (state) {
  return state.merge({
    loading: true,
    error: null
  });
}), constants["G" /* FETCH_ACCESS_LEVEL_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData,
    record: Object(immutable["fromJS"])(accessLevel_objectSpread(accessLevel_objectSpread({}, accessLevel_initialState.record.toJS()), {}, {
      role: 2
    }))
  });
}), constants["E" /* FETCH_ACCESS_LEVEL_FULFILLED */], function (state, action) {
  return state.merge({
    loading: false,
    error: null,
    record: Object(immutable["fromJS"])(action.payload.data)
  });
}));
// CONCATENATED MODULE: ./client/reducers/applications.js




var applications_initialState = {
  loading: false,
  error: null,
  records: Object(immutable["fromJS"])([])
};
var applications = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(applications_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["J" /* FETCH_APPLICATIONS_PENDING */], function (state) {
  return state.merge({
    loading: true,
    error: null
  });
}), constants["K" /* FETCH_APPLICATIONS_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["I" /* FETCH_APPLICATIONS_FULFILLED */], function (state, action) {
  return state.merge({
    loading: false,
    error: null,
    records: Object(immutable["fromJS"])(action.payload.data)
  });
}));
// CONCATENATED MODULE: ./client/reducers/auth.js

function auth_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function auth_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? auth_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : auth_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var auth_initialState = {
  error: null,
  isAuthenticated: false,
  isAuthenticating: false,
  issuer: null,
  token: null,
  decodedToken: null,
  user: null
};
var auth_auth = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(auth_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["Gb" /* LOGIN_PENDING */], function (state) {
  return state.merge(auth_objectSpread(auth_objectSpread({}, auth_initialState), {}, {
    isAuthenticating: true
  }));
}), constants["Fb" /* LOGIN_FAILED */], function (state, action) {
  return state.merge({
    isAuthenticating: false,
    error: action.payload && action.payload.error || 'Unknown Error'
  });
}), constants["Hb" /* LOGIN_SUCCESS */], function (state, action) {
  return state.merge({
    isAuthenticated: true,
    isAuthenticating: false,
    user: Object(immutable["fromJS"])(action.payload.user),
    token: action.payload.token,
    decodedToken: action.payload.decodedToken,
    issuer: new URL(action.payload.decodedToken.iss).hostname,
    returnTo: action.payload.returnTo
  });
}), constants["Jb" /* LOGOUT_SUCCESS */], function (state) {
  return state.merge({
    user: null,
    token: null,
    decodedToken: null,
    isAuthenticated: false
  });
}));
// CONCATENATED MODULE: ./client/reducers/block.js

function block_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function block_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? block_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : block_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var block_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null
};
var block = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(block_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["ac" /* REQUEST_BLOCK_USER */], function (state, action) {
  return state.merge({
    user: Object(immutable["fromJS"])(action.user),
    requesting: true
  });
}), constants["e" /* CANCEL_BLOCK_USER */], function (state) {
  return state.merge(block_objectSpread({}, block_initialState));
}), constants["c" /* BLOCK_USER_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["d" /* BLOCK_USER_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["b" /* BLOCK_USER_FULFILLED */], function (state) {
  return state.merge(block_objectSpread({}, block_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/connections.js




var connections_initialState = {
  loading: false,
  error: null,
  records: Object(immutable["fromJS"])([])
};
var connections_connections = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(connections_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["N" /* FETCH_CONNECTIONS_PENDING */], function (state) {
  return state.merge({
    loading: true,
    error: null
  });
}), constants["O" /* FETCH_CONNECTIONS_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["M" /* FETCH_CONNECTIONS_FULFILLED */], function (state, action) {
  return state.merge({
    loading: false,
    error: null,
    records: Object(immutable["fromJS"])(action.payload.data)
  });
}));
// CONCATENATED MODULE: ./client/reducers/emailChange.js

function emailChange_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function emailChange_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? emailChange_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : emailChange_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var emailChange_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null,
  connection: null
};
var emailChange = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(emailChange_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["dc" /* REQUEST_EMAIL_CHANGE */], function (state, action) {
  return state.merge(emailChange_objectSpread(emailChange_objectSpread({}, emailChange_initialState), {}, {
    user: action.user,
    connection: action.connection,
    requesting: true
  }));
}), constants["h" /* CANCEL_EMAIL_CHANGE */], function (state) {
  return state.merge(emailChange_objectSpread({}, emailChange_initialState));
}), constants["B" /* EMAIL_CHANGE_PENDING */], function (state, action) {
  return state.merge({
    loading: true,
    user: action.meta.user
  });
}), constants["C" /* EMAIL_CHANGE_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["A" /* EMAIL_CHANGE_FULFILLED */], function (state) {
  return state.merge(emailChange_objectSpread({}, emailChange_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/languageDictionary.js

function languageDictionary_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function languageDictionary_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? languageDictionary_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : languageDictionary_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var languageDictionary_initialState = {
  loading: false,
  error: null,
  record: Object(immutable["fromJS"])({})
};
var languageDictionary_languageDictionary = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(languageDictionary_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["R" /* FETCH_LANGUAGE_DICTIONARY_PENDING */], function (state) {
  return state.merge(languageDictionary_objectSpread(languageDictionary_objectSpread({}, languageDictionary_initialState), {}, {
    loading: true,
    error: null
  }));
}), constants["S" /* FETCH_LANGUAGE_DICTIONARY_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Q" /* FETCH_LANGUAGE_DICTIONARY_FULFILLED */], function (state, action) {
  var data = action.payload.data;
  return state.merge({
    loading: false,
    error: null,
    record: Object(immutable["fromJS"])(data)
  });
}));
// CONCATENATED MODULE: ./client/utils/logTypes.js
/* harmony default export */ var logTypes = ({
  s: {
    event: 'Success Login',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  ssa: {
    event: 'Success Silent Auth',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  seacft: {
    event: 'Success Exchange',
    description: 'Authorization Code for Access Token',
    icon: {
      name: '456',
      color: 'green'
    }
  },
  feacft: {
    event: 'Failed Exchange',
    description: 'Authorization Code for Access Token',
    icon: {
      name: '456',
      color: '#A93F3F'
    }
  },
  f: {
    event: 'Failed Login',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fsa: {
    event: 'Failed Silent Auth',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  w: {
    event: 'Warnings During Login',
    icon: {
      name: '354',
      color: '#FFA500'
    }
  },
  du: {
    event: 'Deleted User',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fu: {
    event: 'Failed Login (invalid email/username)',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fp: {
    event: 'Failed Login (wrong password)',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fc: {
    event: 'Failed by Connector',
    icon: {
      name: '313',
      color: '#A93F3F'
    }
  },
  fco: {
    event: 'Failed by CORS',
    icon: {
      name: '313',
      color: '#A93F3F'
    }
  },
  con: {
    event: 'Connector Online',
    icon: {
      name: '143',
      color: 'green'
    }
  },
  coff: {
    event: 'Connector Offline',
    icon: {
      name: '143',
      color: '#A93F3F'
    }
  },
  fcpro: {
    event: 'Failed Connector Provisioning',
    icon: {
      name: '143',
      color: '#A93F3F'
    }
  },
  ss: {
    event: 'Success Signup',
    icon: {
      name: '314',
      color: 'green'
    }
  },
  fs: {
    event: 'Failed Signup',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  cs: {
    event: 'Code Sent',
    icon: {
      name: '243',
      color: 'green'
    }
  },
  cls: {
    event: 'Code/Link Sent',
    icon: {
      name: '781',
      color: 'green'
    }
  },
  sv: {
    event: 'Success Verification Email',
    icon: {
      name: '781',
      color: 'green'
    }
  },
  fv: {
    event: 'Failed Verification Email',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  scp: {
    event: 'Success Change Password',
    icon: {
      name: '280',
      color: 'green'
    }
  },
  fcp: {
    event: 'Failed Change Password',
    icon: {
      name: '266',
      color: '#A93F3F'
    }
  },
  sce: {
    event: 'Success Change Email',
    icon: {
      name: '266',
      color: 'green'
    }
  },
  fce: {
    event: 'Failed Change Email',
    icon: {
      name: '266',
      color: '#A93F3F'
    }
  },
  scu: {
    event: 'Success Change Username',
    icon: {
      name: '266',
      color: 'green'
    }
  },
  fcu: {
    event: 'Failed Change Username',
    icon: {
      name: '266',
      color: '#A93F3F'
    }
  },
  scpn: {
    event: 'Success Change Phone Number',
    icon: {
      name: '266',
      color: 'green'
    }
  },
  fcpn: {
    event: 'Failed Change Phone Number',
    icon: {
      name: '266',
      color: '#A93F3F'
    }
  },
  svr: {
    event: 'Success Verification Email Request',
    icon: {
      name: '781',
      color: 'green'
    }
  },
  fvr: {
    event: 'Failed Verification Email Request',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  scpr: {
    event: 'Success Change Password Request',
    icon: {
      name: '280',
      color: 'green'
    }
  },
  fcpr: {
    event: 'Failed Change Password Request',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fn: {
    event: 'Failed Sending Notification',
    icon: {
      name: '782',
      color: '#A93F3F'
    }
  },
  sapi: {
    event: 'API Operation',
    icon: {
      name: '546',
      color: 'green'
    },
    category: 'api'
  },
  fapi: {
    event: 'Failed API Operation',
    icon: {
      name: '546',
      color: '#A93F3F'
    },
    category: 'api'
  },
  limit_wc: {
    event: 'Blocked Account',
    icon: {
      name: '313',
      color: '#A93F3F'
    }
  },
  limit_ui: {
    event: 'Too Many Calls to /userinfo',
    icon: {
      name: '313',
      color: '#A93F3F'
    }
  },
  api_limit: {
    event: 'Rate Limit On API',
    icon: {
      name: '313',
      color: '#A93F3F'
    }
  },
  sdu: {
    event: 'Successful User Deletion',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  fdu: {
    event: 'Failed User Deletion',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  seccft: {
    event: 'Success Exchange (Client Credentials)',
    icon: {
      name: '546',
      color: 'green'
    }
  },
  feccft: {
    event: 'Failed Exchange (Client Credentials)',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  limit_mu: {
    event: 'Blocked IP Address',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  slo: {
    event: 'Success Logout',
    icon: {
      name: '546',
      color: 'green'
    }
  },
  flo: {
    event: 'Failed Logout',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  sd: {
    event: 'Success Delegation',
    icon: {
      name: '546',
      color: 'green'
    }
  },
  fd: {
    event: 'Failed Delegation',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_start_enroll: {
    event: 'Enroll started',
    description: 'Guardian - Start second factor enrollment',
    icon: {
      name: '299',
      color: 'green'
    }
  },
  gd_enrollment_complete: {
    event: 'Guardian enrollment complete',
    description: 'Guardian - Enrollment complete',
    icon: {
      name: '299',
      color: 'green'
    }
  },
  gd_auth_succeed: {
    event: 'OTP Auth suceed',
    description: 'Guardian - Second factor authentication succeed',
    icon: {
      name: 'mfa-login-succeed',
      color: 'green'
    }
  },
  gd_unenroll: {
    event: 'Unenroll device account',
    description: 'Guardian - Enrollment removed',
    icon: {
      name: '298',
      color: 'green'
    }
  },
  sui: {
    event: 'Users import',
    description: 'Users import finished',
    icon: {
      name: '299',
      color: 'green'
    }
  },
  fcoa: {
    event: 'Failed cross-origin authentication',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fcph: {
    event: 'Failed Post Change Password Hook',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  feoobft: {
    event: 'Failed Exchange',
    description: 'Failed exchange of Password and OOB Challenge for Access Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  feotpft: {
    event: 'Failed Exchange',
    description: 'Failed exchange of Password and OTP Challenge for Access Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fepft: {
    event: 'Failed Exchange',
    description: 'Failed exchange of Password for Access Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fercft: {
    event: 'Failed Exchange',
    description: 'Failed Exchange of Password and MFA Recovery code for Access Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fertft: {
    event: 'Failed Exchange',
    description: 'Failed Exchange of Refresh Token for Access Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  ferrt: {
    event: 'Failed Exchange',
    description: 'Reused Refresh Token',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  fui: {
    event: 'Failed users import',
    description: 'Failed to import users',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_auth_failed: {
    event: 'OTP Auth failed',
    description: 'One-time password authentication failed.',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_auth_rejected: {
    event: 'OTP Auth rejected',
    description: 'One-time password authentication rejected.',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_module_switch: {
    event: 'Module switch',
    icon: {
      name: '354',
      color: '#FFA500'
    }
  },
  gd_otp_rate_limit_exceed: {
    event: 'Too many failures',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_recovery_failed: {
    event: 'Recovery failed',
    description: 'Multi-factor recovery code failed.',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_recovery_rate_limit_exceed: {
    event: 'Too many failures',
    description: 'Multi-factor recovery code has failed too many times.',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  gd_recovery_succeed: {
    event: 'Recovery success',
    description: 'Multi-factor recovery code succeeded authorization.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_send_pn: {
    event: 'Push notification sent',
    description: 'Push notification for MFA sent successfully sent.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_send_sms: {
    event: 'SMS Sent',
    description: 'SMS for MFA sent successfully sent.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_start_auth: {
    event: 'Second factor started',
    description: 'Second factor authentication event started for MFA.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_tenant_update: {
    event: 'Guardian tenant update',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_update_device_account: {
    event: 'Update device account',
    description: 'Device used for second factor authentication has been updated.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  gd_user_delete: {
    event: 'User delete',
    description: 'Deleted multi-factor user account.',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  limit_delegation: {
    event: 'Too Many Calls to /delegation',
    description: 'Rate limit exceeded to /delegation endpoint',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  pwd_leak: {
    event: 'Breached password',
    description: 'Someone attempted to login with a leaked password.',
    icon: {
      name: '311',
      color: '#A93F3F'
    }
  },
  scoa: {
    event: 'Success cross-origin authentication',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  scph: {
    event: 'Success Post Change Password Hook',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  seoobft: {
    event: 'Success Exchange',
    description: 'Successful exchange of Password and OOB Challenge for Access Token',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  seotpft: {
    event: 'Success Exchange',
    description: 'Successful exchange of Password and OTP Challenge for Access Token',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sepft: {
    event: 'Success Exchange',
    description: 'Successful exchange of Password for Access Token',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sercft: {
    event: 'Success Exchange',
    description: 'Successful exchange of Password and MFA Recovery code for Access Token',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sertft: {
    event: 'Success Exchange',
    description: 'Successful exchange of Refresh Token for Access Token',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sys_os_update_end: {
    event: 'Auth0 OS Update Ended',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sys_os_update_start: {
    event: 'Auth0 OS Update Started',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sys_update_end: {
    event: 'Auth0 Update Ended',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  sys_update_start: {
    event: 'Auth0 Update Started',
    icon: {
      name: '312',
      color: 'green'
    }
  },
  ublkdu: {
    event: 'User login block released',
    description: 'User block setup by anomaly detection has been released',
    icon: {
      name: '312',
      color: 'green'
    }
  }
});
// CONCATENATED MODULE: ./client/reducers/log.js

function log_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function log_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? log_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : log_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var log_initialState = {
  loading: false,
  error: null,
  logId: null,
  record: Object(immutable["Map"])()
};
var log_log = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(log_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["q" /* CLEAR_LOG */], function (state) {
  return state.merge(log_objectSpread({}, log_initialState));
}), constants["Z" /* FETCH_LOG_PENDING */], function (state, action) {
  return state.merge(log_objectSpread(log_objectSpread({}, log_initialState), {}, {
    loading: true,
    logId: action.meta.logId
  }));
}), constants["ab" /* FETCH_LOG_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Y" /* FETCH_LOG_FULFILLED */], function (state, action) {
  var data = action.payload.data;
  if (data.log._id !== state.get('logId')) {
    // eslint-disable-line no-underscore-dangle
    return state;
  }
  var logType = logTypes[data.log.type];
  if (!logType) {
    logType = {
      // Don't do this, need to handle it elsewhere so language dictionary can do it: event: `Unknown Log Type: ${data.log.type}`,
      icon: {
        name: '354',
        color: '#FFA500'
      }
    };
  }
  data.log.shortType = data.log.type;
  data.log.type = logType.event;
  return state.merge({
    loading: false,
    record: Object(immutable["fromJS"])(data.log)
  });
}));
// CONCATENATED MODULE: ./client/reducers/logs.js

function logs_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function logs_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? logs_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : logs_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var logs_initialState = {
  loading: false,
  error: null,
  records: Object(immutable["fromJS"])([]),
  currentRecord: null
};
var logs_logs = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(logs_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["W" /* FETCH_LOGS_PENDING */], function (state, action) {
  return state.merge(logs_objectSpread(logs_objectSpread({}, logs_initialState), {}, {
    loading: true,
    records: Object(immutable["fromJS"])(action.meta.page === 0 ? [] : state.get('records'))
  }));
}), constants["X" /* FETCH_LOGS_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["V" /* FETCH_LOGS_FULFILLED */], function (state, action) {
  var data = action.payload.data;
  return state.merge({
    loading: false,
    nextPage: action.meta.page + 1,
    records: Object(immutable["fromJS"])(state.get('records').concat(Object(immutable["fromJS"])(data.map(function (log) {
      log.shortType = log.type;
      log.type = logTypes[log.type];
      if (!log.type) {
        log.type = {
          // Don't do this, need to handle it elsewhere so language dictionary can do it: event: 'Unknown Event',
          icon: {
            name: '354',
            color: '#FFA500'
          }
        };
      }
      return log;
    }))))
  });
}));
// CONCATENATED MODULE: ./client/reducers/mfa.js

function mfa_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function mfa_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? mfa_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mfa_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var mfa_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null,
  provider: null
};
var mfa = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(mfa_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["ic" /* REQUEST_REMOVE_MULTIFACTOR */], function (state, action) {
  return state.merge(mfa_objectSpread(mfa_objectSpread({}, mfa_initialState), {}, {
    user: action.user,
    provider: action.provider,
    requesting: true
  }));
}), constants["m" /* CANCEL_REMOVE_MULTIFACTOR */], function (state) {
  return state.merge(mfa_objectSpread({}, mfa_initialState));
}), constants["Yb" /* REMOVE_MULTIFACTOR_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["Zb" /* REMOVE_MULTIFACTOR_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Xb" /* REMOVE_MULTIFACTOR_FULFILLED */], function (state) {
  return state.merge(mfa_objectSpread({}, mfa_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/passwordChange.js

function passwordChange_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function passwordChange_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? passwordChange_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : passwordChange_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var passwordChange_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null,
  connection: null
};
var passwordChange = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(passwordChange_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["fc" /* REQUEST_PASSWORD_CHANGE */], function (state, action) {
  return state.merge(passwordChange_objectSpread(passwordChange_objectSpread({}, passwordChange_initialState), {}, {
    user: action.user,
    connection: action.connection,
    requesting: true
  }));
}), constants["j" /* CANCEL_PASSWORD_CHANGE */], function (state) {
  return state.merge(passwordChange_objectSpread({}, passwordChange_initialState));
}), constants["Mb" /* PASSWORD_CHANGE_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["Nb" /* PASSWORD_CHANGE_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Lb" /* PASSWORD_CHANGE_FULFILLED */], function (state) {
  return state.merge(passwordChange_objectSpread({}, passwordChange_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/passwordReset.js

function passwordReset_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function passwordReset_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? passwordReset_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : passwordReset_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var passwordReset_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null,
  connection: null
};
var passwordReset = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(passwordReset_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["gc" /* REQUEST_PASSWORD_RESET */], function (state, action) {
  return state.merge(passwordReset_objectSpread(passwordReset_objectSpread({}, passwordReset_initialState), {}, {
    user: action.user,
    connection: action.connection,
    requesting: true
  }));
}), constants["k" /* CANCEL_PASSWORD_RESET */], function (state) {
  return state.merge(passwordReset_objectSpread({}, passwordReset_initialState));
}), constants["Qb" /* PASSWORD_RESET_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["Rb" /* PASSWORD_RESET_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Pb" /* PASSWORD_RESET_FULFILLED */], function (state) {
  return state.merge(passwordReset_objectSpread({}, passwordReset_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/scripts.js




var scripts_scripts = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])({}), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["db" /* FETCH_SCRIPT_PENDING */], function (state, action) {
  return state.setIn([action.meta.name], Object(immutable["fromJS"])({
    loading: true,
    error: null,
    script: null,
    token: null
  }));
}), constants["eb" /* FETCH_SCRIPT_REJECTED */], function (state, action) {
  return state.setIn([action.meta.name], Object(immutable["fromJS"])({
    loading: false,
    error: action.errorData
  }));
}), constants["cb" /* FETCH_SCRIPT_FULFILLED */], function (state, action) {
  return state.setIn([action.meta.name], Object(immutable["fromJS"])({
    loading: false,
    script: action.payload.data.script
  }));
}), constants["zc" /* UPDATE_SCRIPT_PENDING */], function (state, action) {
  return state.setIn([action.meta.name, 'loading'], true).setIn([action.meta.name, 'script'], action.meta.script);
}), constants["Ac" /* UPDATE_SCRIPT_REJECTED */], function (state, action) {
  return state.setIn([action.meta.name], Object(immutable["fromJS"])({
    loading: false,
    error: action.errorData
  }));
}), constants["yc" /* UPDATE_SCRIPT_FULFILLED */], function (state, action) {
  return state.setIn([action.meta.name, 'loading'], false);
}));
// EXTERNAL MODULE: ./client/reducers/settings.js
var reducers_settings = __webpack_require__(637);

// CONCATENATED MODULE: ./client/reducers/styleSettings.js




var styleSettings_initialState = {
  useAlt: false,
  path: ''
};
var styleSettings = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(styleSettings_initialState), defineProperty_default()(defineProperty_default()({}, constants["sc" /* TOGGLE_STYLE_SETTINGS */], function (state, action) {
  return state.merge({
    useAlt: action.payload.useAlt,
    path: action.payload.path
  });
}), constants["Db" /* GET_STYLE_SETTINGS */], function (state, action) {
  return state.merge({
    useAlt: action.payload.useAlt,
    path: action.payload.path
  });
}));
// CONCATENATED MODULE: ./client/reducers/unblock.js

function unblock_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function unblock_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? unblock_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : unblock_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var unblock_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null
};
var unblock = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(unblock_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["kc" /* REQUEST_UNBLOCK_USER */], function (state, action) {
  return state.merge({
    user: Object(immutable["fromJS"])(action.user),
    requesting: true
  });
}), constants["o" /* CANCEL_UNBLOCK_USER */], function (state) {
  return state.merge(unblock_objectSpread({}, unblock_initialState));
}), constants["vc" /* UNBLOCK_USER_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["wc" /* UNBLOCK_USER_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["uc" /* UNBLOCK_USER_FULFILLED */], function (state) {
  return state.merge(unblock_objectSpread({}, unblock_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/user.js

function user_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function user_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? user_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : user_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var user_initialState = {
  loading: false,
  error: null,
  userId: null,
  record: Object(immutable["fromJS"])({}),
  memberships: Object(immutable["fromJS"])([]),
  connection: Object(immutable["fromJS"])({}),
  logs: {
    loading: false,
    error: null,
    records: Object(immutable["fromJS"])([])
  },
  devices: {
    loading: false,
    error: null,
    records: Object(immutable["fromJS"])({})
  }
};
var userLogs = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(user_initialState.logs), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["vb" /* FETCH_USER_LOGS_PENDING */], function (state) {
  return state.merge(user_objectSpread(user_objectSpread({}, user_initialState.logs), {}, {
    loading: true
  }));
}), constants["wb" /* FETCH_USER_LOGS_REJECTED */], function (state, action) {
  return state.merge(user_objectSpread(user_objectSpread({}, user_initialState.logs), {}, {
    loading: false,
    error: Object(immutable["fromJS"])(action.errorData)
  }));
}), constants["ub" /* FETCH_USER_LOGS_FULFILLED */], function (state, action) {
  return state.merge({
    loading: false,
    records: Object(immutable["fromJS"])(typeof action.payload.data !== 'undefined' ? action.payload.data.map(function (log) {
      log.time_ago = moment_default()(log.date).fromNow();
      log.shortType = log.type;
      log.type = logTypes[log.type];
      if (!log.type) {
        log.type = {
          event: 'Unknown Error',
          icon: {
            name: '354',
            color: '#FFA500'
          }
        };
      }
      return log;
    }) : [])
  });
}));
var userDevices = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(user_initialState.devices), defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["qb" /* FETCH_USER_DEVICES_PENDING */], function (state) {
  return state.merge(user_objectSpread(user_objectSpread({}, user_initialState.devices), {}, {
    loading: true
  }));
}), constants["rb" /* FETCH_USER_DEVICES_REJECTED */], function (state, action) {
  return state.merge(user_objectSpread(user_objectSpread({}, user_initialState.devices), {}, {
    error: Object(immutable["fromJS"])(action.errorData)
  }));
}), constants["pb" /* FETCH_USER_DEVICES_FULFILLED */], function (state, action) {
  var devices = action.payload.data.devices.reduce(function (map, device) {
    map[device.device_name] = (map[device.device_name] || 0) + 1;
    return map;
  }, {});
  return state.merge({
    loading: false,
    records: Object(immutable["fromJS"])(devices)
  });
}));
var user_user = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(user_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["xb" /* FETCH_USER_PENDING */], function (state, action) {
  return state.merge({
    error: null,
    loading: true,
    userId: action.meta.userId
  });
}), constants["yb" /* FETCH_USER_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["sb" /* FETCH_USER_FULFILLED */], function (state, action) {
  var data = action.payload.data;
  if (data.user.user_id !== state.get('userId')) {
    return state;
  }
  return state.merge({
    loading: false,
    record: Object(immutable["fromJS"])(data.user),
    memberships: Object(immutable["fromJS"])(data.memberships),
    connection: Object(immutable["fromJS"])(data.connection)
  });
}), constants["vb" /* FETCH_USER_LOGS_PENDING */], function (state, action) {
  return state.merge({
    logs: userLogs(state.get('logs'), action)
  });
}), constants["wb" /* FETCH_USER_LOGS_REJECTED */], function (state, action) {
  return state.merge({
    logs: userLogs(state.get('logs'), action)
  });
}), constants["ub" /* FETCH_USER_LOGS_FULFILLED */], function (state, action) {
  return state.merge({
    logs: userLogs(state.get('logs'), action)
  });
}), constants["qb" /* FETCH_USER_DEVICES_PENDING */], function (state, action) {
  return state.merge({
    devices: userDevices(state.get('devices'), action)
  });
}), constants["rb" /* FETCH_USER_DEVICES_REJECTED */], function (state, action) {
  return state.merge({
    devices: userDevices(state.get('devices'), action)
  });
}), constants["pb" /* FETCH_USER_DEVICES_FULFILLED */], function (state, action) {
  return state.merge({
    devices: userDevices(state.get('devices'), action)
  });
}));
// CONCATENATED MODULE: ./client/reducers/userCreate.js

function userCreate_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function userCreate_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? userCreate_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : userCreate_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var userCreate_initialState = {
  error: null,
  record: null,
  loading: false,
  validationErrors: Object(immutable["fromJS"])({})
};
var userCreate = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(userCreate_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["bc" /* REQUEST_CREATE_USER */], function (state, action) {
  return state.merge(userCreate_objectSpread(userCreate_objectSpread({}, userCreate_initialState), {}, {
    record: {
      memberships: action.payload.memberships,
      connection: action.payload.connection
    }
  }));
}), constants["f" /* CANCEL_CREATE_USER */], function (state) {
  return state.merge(userCreate_objectSpread({}, userCreate_initialState));
}), constants["t" /* CREATE_USER_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["u" /* CREATE_USER_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    validationErrors: Object(immutable["fromJS"])({}),
    error: action.errorData
  });
}), constants["s" /* CREATE_USER_FULFILLED */], function (state) {
  return state.merge(userCreate_objectSpread({}, userCreate_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/userDelete.js

function userDelete_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function userDelete_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? userDelete_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : userDelete_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var userDelete_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null
};
var userDelete = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(userDelete_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["cc" /* REQUEST_DELETE_USER */], function (state, action) {
  return state.merge(userDelete_objectSpread(userDelete_objectSpread({}, userDelete_initialState), {}, {
    user: action.user,
    requesting: true
  }));
}), constants["g" /* CANCEL_DELETE_USER */], function (state) {
  return state.merge(userDelete_objectSpread({}, userDelete_initialState));
}), constants["x" /* DELETE_USER_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["y" /* DELETE_USER_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["w" /* DELETE_USER_FULFILLED */], function (state) {
  return state.merge(userDelete_objectSpread({}, userDelete_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/fieldsChange.js

function fieldsChange_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function fieldsChange_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? fieldsChange_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fieldsChange_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var fieldsChange_initialState = {
  error: null,
  userId: null,
  record: null,
  loading: false,
  validationErrors: Object(immutable["fromJS"])({})
};
var fieldsChange = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(fieldsChange_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["ec" /* REQUEST_FIELDS_CHANGE */], function (state, action) {
  return state.merge(fieldsChange_objectSpread(fieldsChange_objectSpread({}, fieldsChange_initialState), {}, {
    userId: action.payload.user.user_id,
    record: action.payload.user
  }));
}), constants["i" /* CANCEL_FIELDS_CHANGE */], function (state) {
  return state.merge(fieldsChange_objectSpread({}, fieldsChange_initialState));
}), constants["Bb" /* FIELDS_CHANGE_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["Cb" /* FIELDS_CHANGE_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    validationErrors: Object(immutable["fromJS"])({}),
    error: action.errorData
  });
}), constants["Ab" /* FIELDS_CHANGE_FULFILLED */], function (state) {
  return state.merge(fieldsChange_objectSpread({}, fieldsChange_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/usernameChange.js

function usernameChange_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function usernameChange_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? usernameChange_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : usernameChange_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var usernameChange_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null,
  connection: null
};
var usernameChange = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(usernameChange_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["lc" /* REQUEST_USERNAME_CHANGE */], function (state, action) {
  return state.merge(usernameChange_objectSpread(usernameChange_objectSpread({}, usernameChange_initialState), {}, {
    user: action.user,
    connection: action.connection,
    requesting: true
  }));
}), constants["p" /* CANCEL_USERNAME_CHANGE */], function (state) {
  return state.merge(usernameChange_objectSpread({}, usernameChange_initialState));
}), constants["Ec" /* USERNAME_CHANGE_PENDING */], function (state, action) {
  return state.merge({
    loading: true,
    user: action.meta.user
  });
}), constants["Fc" /* USERNAME_CHANGE_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["Dc" /* USERNAME_CHANGE_FULFILLED */], function (state) {
  return state.merge(usernameChange_objectSpread({}, usernameChange_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/users.js

function users_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function users_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? users_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : users_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var users_initialState = {
  loading: false,
  error: null,
  records: Object(immutable["fromJS"])([]),
  total: 0,
  currentPage: 1,
  pages: 1,
  selectedFilter: '',
  searchValue: '',
  sortProperty: 'last_login',
  sortOrder: -1
};
var users_users = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(users_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["mb" /* FETCH_USERS_PENDING */], function (state, action) {
  return state.merge(users_objectSpread(users_objectSpread({}, users_initialState), {}, {
    loading: true,
    records: action.meta.page === 0 ? Object(immutable["fromJS"])([]) : state.get('records'),
    pages: action.meta.page === 0 ? 1 : state.get('pages'),
    searchValue: action.meta.searchValue,
    sortProperty: action.meta.sortProperty,
    sortOrder: action.meta.sortOrder
  }));
}), constants["nb" /* FETCH_USERS_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["lb" /* FETCH_USERS_FULFILLED */], function (state, action) {
  var data = action.payload.data;
  return state.merge({
    loading: false,
    total: data.total,
    pages: Math.ceil(data.total / 10),
    nextPage: action.meta.page + 1,
    selectedFilter: action.meta.selectedFilter,
    records: Object(immutable["fromJS"])(data.users.map(function (user) {
      return users_objectSpread(users_objectSpread({}, user), {}, {
        last_login_relative: user.last_login ? moment_default()(user.last_login).fromNow() : 'Never'
      });
    }))
  });
}), constants["b" /* BLOCK_USER_FULFILLED */], function (state, action) {
  return state.updateIn(['records', state.get('records').findIndex(function (p) {
    return p.get('user_id') === action.meta.userId;
  }), 'blocked'], function () {
    return true;
  });
}), constants["uc" /* UNBLOCK_USER_FULFILLED */], function (state, action) {
  return state.updateIn(['records', state.get('records').findIndex(function (p) {
    return p.get('user_id') === action.meta.userId;
  }), 'blocked'], function () {
    return false;
  });
}), constants["Tb" /* REMOVE_BLOCKED_IPS_FULFILLED */], function (state, action) {
  return state.updateIn(['records', state.get('records').findIndex(function (p) {
    return p.get('user_id') === action.meta.userId;
  }), 'blocked_for'], function () {
    return [];
  });
}), constants["Xb" /* REMOVE_MULTIFACTOR_FULFILLED */], function (state, action) {
  return state.updateIn(['records', state.get('records').findIndex(function (p) {
    return p.get('user_id') === action.meta.userId;
  }), 'multifactor'], function (multifactor) {
    return multifactor && multifactor.splice(0, 1);
  });
}));
// CONCATENATED MODULE: ./client/reducers/verificationEmail.js

function verificationEmail_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function verificationEmail_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? verificationEmail_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : verificationEmail_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var verificationEmail_initialState = {
  error: null,
  loading: false,
  requesting: false,
  user: null
};
var verificationEmail = Object(createReducer["a" /* default */])(Object(immutable["fromJS"])(verificationEmail_initialState), defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()(defineProperty_default()({}, constants["jc" /* REQUEST_RESEND_VERIFICATION_EMAIL */], function (state, action) {
  return state.merge(verificationEmail_objectSpread(verificationEmail_objectSpread({}, verificationEmail_initialState), {}, {
    user: action.user,
    requesting: true
  }));
}), constants["n" /* CANCEL_RESEND_VERIFICATION_EMAIL */], function (state) {
  return state.merge(verificationEmail_objectSpread({}, verificationEmail_initialState));
}), constants["oc" /* RESEND_VERIFICATION_EMAIL_PENDING */], function (state) {
  return state.merge({
    loading: true
  });
}), constants["pc" /* RESEND_VERIFICATION_EMAIL_REJECTED */], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), constants["nc" /* RESEND_VERIFICATION_EMAIL_FULFILLED */], function (state) {
  return state.merge(verificationEmail_objectSpread({}, verificationEmail_initialState));
}));
// CONCATENATED MODULE: ./client/reducers/index.js



























function lastAction() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return action;
}
/* harmony default export */ var reducers = (Object(redux_lib["combineReducers"])({
  routing: react_router_redux_lib["routerReducer"],
  accessLevel: accessLevel_accessLevel,
  applications: applications,
  auth: auth_auth,
  block: block,
  connections: connections_connections,
  emailChange: emailChange,
  languageDictionary: languageDictionary_languageDictionary,
  log: log_log,
  logs: logs_logs,
  mfa: mfa,
  passwordChange: passwordChange,
  passwordReset: passwordReset,
  scripts: scripts_scripts,
  settings: reducers_settings["a" /* settings */],
  styleSettings: styleSettings,
  unblock: unblock,
  removeBlockedIPs: removeBlockedIPs,
  user: user_user,
  userCreate: userCreate,
  userDelete: userDelete,
  fieldsChange: fieldsChange,
  usernameChange: usernameChange,
  users: users_users,
  verificationEmail: verificationEmail,
  lastAction: lastAction,
  form: redux_form_lib["reducer"]
}));
// CONCATENATED MODULE: ./client/middlewares/normalizeErrorMiddleware.js
function normalizeErrorMiddleware() {
  return function () {
    return function (next) {
      return function (action) {
        if (action && action.type.endsWith('_REJECTED') && action.payload) {
          // Try to get the default error message from the response.
          var message = action.payload.statusText || action.payload.status || 'Unknown Server Error';
          var status = action.payload.response && action.payload.response.status || 500;
          // Maybe some data is available.
          var error = action.payload.data && action.payload.data.message;
          if (!error) {
            error = action.payload.response && action.payload.response.data && action.payload.response.data.message;
          }
          if (error) {
            message = error.message || error;
          }
          action.errorData = {
            type: action.type.replace('_REJECTED', ''),
            message: message,
            status: status
          };
        }
        next(action);
      };
    };
  };
}
// CONCATENATED MODULE: ./client/middlewares/promiseSuccessMiddleware.js
function promiseSuccessMiddleware_normalizeErrorMiddleware() {
  return function () {
    return function (next) {
      return function (action) {
        next(action);
        if (action && action.meta && action.type.endsWith('_FULFILLED') && action.meta.onSuccess) {
          action.meta.onSuccess(action.payload);
        }
      };
    };
  };
}
// EXTERNAL MODULE: ./client/containers/DevTools.jsx
var DevTools = __webpack_require__(1348);

// CONCATENATED MODULE: ./client/store/configureStore.js









function configureStore(middlewares) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pipeline = [redux_lib["applyMiddleware"].apply(void 0, [redux_promise_middleware_dist_default()(), redux_thunk_lib_default.a, normalizeErrorMiddleware(), promiseSuccessMiddleware_normalizeErrorMiddleware(), redux_logger_lib_default()({
    predicate: function predicate() {
      return "production" !== 'production';
    }
  })].concat(toConsumableArray_default()(middlewares)))];
  if (false) {}
  var finalCreateStore = redux_lib["compose"].apply(void 0, pipeline)(redux_lib["createStore"]);
  var store = finalCreateStore(reducers, initialState);

  // Enable Webpack hot module replacement for reducers.
  if (false) {}
  return store;
}
// CONCATENATED MODULE: ./client/app.jsx














// Make axios aware of the base path.
axios_default.a.defaults.baseURL = window.config.BASE_URL;

// Make history aware of the base path.
var app_history = Object(react_router_lib["useRouterHistory"])(history_lib["createHistory"])({
  basename: window.config.BASE_PATH || ''
});
var app_store = configureStore([Object(react_router_redux_lib["routerMiddleware"])(app_history)], {});
var reduxHistory = Object(react_router_redux_lib["syncHistoryWithStore"])(app_history, app_store);
app_store.subscribe(function () {
  switch (app_store.getState().lastAction.type) {
    case constants["gb" /* FETCH_SETTINGS_FULFILLED */]:
      {
        var useAltCss = localStorage.getItem('delegated-admin:use-alt-css') === 'true';
        var data = app_store.getState().settings.get('record');
        var settings = data.get('settings');
        var dict = settings.get('dict');
        if (dict) {
          var title = dict.get('title');
          if (title && title !== '') {
            document.title = title;
          }
        }
        var css = useAltCss ? settings.get('altcss') : settings.get('css');
        if (css && css.length) {
          var head = document.getElementsByTagName('head')[0];
          var link = document.createElement('link');
          link.id = 'custom_css';
          link.rel = 'stylesheet';
          link.type = 'text/css';
          link.href = css;
          link.media = 'all';
          head.appendChild(link);
        }
        break;
      }
    case constants["sc" /* TOGGLE_STYLE_SETTINGS */]:
      {
        var _css = app_store.getState().styleSettings.get('path');
        if (_css !== '') {
          var customCss = document.getElementById('custom_css');
          if (customCss) {
            customCss.href = _css;
          } else {
            var _head = document.getElementsByTagName('head')[0];
            var _link = document.createElement('link');
            _link.id = 'custom_css';
            _link.rel = 'stylesheet';
            _link.type = 'text/css';
            _link.href = _css;
            _link.media = 'all';
            _head.appendChild(_link);
          }
        }
        break;
      }
    default:
      break;
  }
});
app_store.dispatch(loadCredentials());

// Render application.
react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(react_redux_lib["Provider"], {
  store: app_store
}, routes(reduxHistory)), document.getElementById('app'));

// Show the developer tools.
if (false) { var showDevTools; }

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate, process, Buffer) {/*! Axios v1.15.0 Copyright (c) 2026 Matt Zabriskie and contributors */


/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;

const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};

const typeOfTest = (type) => (thing) => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const { isArray } = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction$1(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = (thing) => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null) &&
    !(toStringTag in val) &&
    !(iterator in val)
  );
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = (val) => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }

  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 * 
 * @param {*} value The value to test
 * 
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 * 
 * @param {*} formData The formData to test
 * 
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = (formData) => formData && typeof formData.getParts !== 'undefined';

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  return {};
}

const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;

const isFormData = (thing) => {
  let kind;
  return thing && (
    (FormDataCtor && thing instanceof FormDataCtor) || (
      isFunction$1(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = [
  'ReadableStream',
  'Request',
  'Response',
  'Headers',
].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer(obj)) {
      return;
    }

    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }

  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const { caseless, skipUndefined } = (isContextDefined(this) && this) || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    const targetKey = (caseless && findKey(result, key)) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key, {
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(a, key, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, 'constructor', {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype,
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = ((TypedArray) => {
  // eslint-disable-next-line func-names
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (
  ({ hasOwnProperty }) =>
  (obj, prop) =>
    hasOwnProperty.call(obj, prop)
)(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction$1(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite((value = +value)) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(
    thing &&
    isFunction$1(thing.append) &&
    thing[toStringTag] === 'FormData' &&
    thing[iterator]
  );
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }

      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = (thing) =>
  thing &&
  (isObject(thing) || isFunction$1(thing)) &&
  isFunction$1(thing.then) &&
  isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported
    ? ((token, callbacks) => {
        _global.addEventListener(
          'message',
          ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          },
          false
        );

        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, '*');
        };
      })(`axios@${Math.random()}`, [])
    : (cb) => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction$1(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap =
  typeof queueMicrotask !== 'undefined'
    ? queueMicrotask.bind(_global)
    : (typeof process !== 'undefined' && process.nextTick) || _setImmediate;

// *********************

const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable,
};

class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }

    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [config] The config.
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     *
     * @returns {Error} The created error.
     */
    constructor(message, code, config, request, response) {
      super(message);
      
      // Make message enumerable to maintain backward compatibility
      // The native Error constructor sets message as non-enumerable,
      // but axios < v1.13.3 had it as enumerable
      Object.defineProperty(this, 'message', {
          value: message,
          enumerable: true,
          writable: true,
          configurable: true
      });
      
      this.name = 'AxiosError';
      this.isAxiosError = true;
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      if (response) {
          this.response = response;
          this.status = response.status;
      }
    }

  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
}

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path
    .concat(key)
    .map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    })
    .join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false,
    },
    false,
    function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils$1.isUndefined(source[option]);
    }
  );

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (utils$1.isBoolean(value)) {
      return value.toString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value)))
      ) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) &&
            formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true
                ? renderKey([key], index, dots)
                : indexes === null
                  ? key
                  : key + '[]',
              convertValue(el)
            );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable,
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result =
        !(utils$1.isUndefined(el) || el === null) &&
        visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00',
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder
    ? function (value) {
        return encoder.call(this, value, encode$1);
      }
    : encode$1;

  return this._pairs
    .map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '')
    .join('&');
};

/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }

  const _encode = (options && options.encode) || encode;

  const _options = utils$1.isFunction(options)
    ? {
        serialize: options,
      }
    : options;

  const serializeFn = _options && _options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params)
      ? params.toString()
      : new AxiosURLSearchParams(params, _options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null,
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1,
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = (typeof navigator === 'object' && navigator) || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv =
  hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = (hasBrowserEnv && window.location.href) || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin: origin
});

var platform = {
  ...utils,
  ...platform$1,
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options,
  });
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {
  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = utils$1.isObject(data);

      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }

      const isFormData = utils$1.isFormData(data);

      if (isFormData) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }

      if (
        utils$1.isArrayBuffer(data) ||
        utils$1.isBuffer(data) ||
        utils$1.isStream(data) ||
        utils$1.isFile(data) ||
        utils$1.isBlob(data) ||
        utils$1.isReadableStream(data)
      ) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }

      let isFileList;

      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }

        if (
          (isFileList = utils$1.isFileList(data)) ||
          contentType.indexOf('multipart/form-data') > -1
        ) {
          const _FormData = this.env && this.env.FormData;

          return toFormData(
            isFileList ? { 'files[]': data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }

      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }

      return data;
    },
  ],

  transformResponse: [
    function transformResponse(data) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === 'json';

      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }

      if (
        data &&
        utils$1.isString(data) &&
        ((forcedJSONParsing && !this.responseType) || JSONRequested)
      ) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;

        try {
          return JSON.parse(data, this.parseReviver);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }

      return data;
    },
  ],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob,
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
    },
  },
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders &&
    rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();

      if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
        return;
      }

      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });

  return parsed;
};

const $internals = Symbol('internals');

const isValidHeaderValue = (value) => !/[\r\n]/.test(value);

function assertValidHeaderValue(value, header) {
  if (value === false || value == null) {
    return;
  }

  if (utils$1.isArray(value)) {
    value.forEach((v) => assertValidHeaderValue(v, header));
    return;
  }

  if (!isValidHeaderValue(String(value))) {
    throw new Error(`Invalid character in header content ["${header}"]`);
  }
}

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function stripTrailingCRLF(str) {
  let end = str.length;

  while (end > 0) {
    const charCode = str.charCodeAt(end - 1);

    if (charCode !== 10 && charCode !== 13) {
      break;
    }

    end -= 1;
  }

  return end === str.length ? str : str.slice(0, end);
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : stripTrailingCRLF(String(value));
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true,
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if (
        !key ||
        self[key] === undefined ||
        _rewrite === true ||
        (_rewrite === undefined && self[key] !== false)
      ) {
        assertValidHeaderValue(_value, _header);
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {},
        dest,
        key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError('Object iterator must return a key-value pair');
        }

        obj[(key = entry[0])] = (dest = obj[key])
          ? utils$1.isArray(dest)
            ? [...dest, entry[1]]
            : [dest, entry[1]]
          : entry[1];
      }

      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(
        key &&
        this[key] !== undefined &&
        (!matcher || matchHeaderValue(this, this[key], key, matcher))
      );
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null &&
        value !== false &&
        (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON())
      .map(([header, value]) => header + ': ' + value)
      .join('\n');
  }

  getSetCookie() {
    return this.get('set-cookie') || [];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals =
      (this[$internals] =
      this[$internals] =
        {
          accessors: {},
        });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    },
  };
});

utils$1.freezeMethods(AxiosHeaders);

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

class CanceledError extends AxiosError {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
}

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(
      new AxiosError(
        'Request failed with status code ' + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
          Math.floor(response.status / 100) - 4
        ],
        response.config,
        response.request,
        response
      )
    );
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return (match && match[1]) || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true,
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [
    (loaded) =>
      throttled[0]({
        lengthComputable,
        total,
        loaded,
      }),
    throttled[1],
  ];
};

const asyncDecorator =
  (fn) =>
  (...args) =>
    utils$1.asap(() => fn(...args));

var isURLSameOrigin = platform.hasStandardBrowserEnv
  ? ((origin, isMSIE) => (url) => {
      url = new URL(url, platform.origin);

      return (
        origin.protocol === url.protocol &&
        origin.host === url.host &&
        (isMSIE || origin.port === url.port)
      );
    })(
      new URL(platform.origin),
      platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
    )
  : () => true;

var cookies = platform.hasStandardBrowserEnv
  ? // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;

        const cookie = [`${name}=${encodeURIComponent(value)}`];

        if (utils$1.isNumber(expires)) {
          cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (utils$1.isString(path)) {
          cookie.push(`path=${path}`);
        }
        if (utils$1.isString(domain)) {
          cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        if (utils$1.isString(sameSite)) {
          cookie.push(`SameSite=${sameSite}`);
        }

        document.cookie = cookie.join('; ');
      },

      read(name) {
        if (typeof document === 'undefined') return null;
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
      },

      remove(name) {
        this.write(name, '', Date.now() - 86400000, '/');
      },
    }
  : // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  if (typeof url !== 'string') {
    return false;
  }

  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => (thing instanceof AxiosHeaders ? { ...thing } : thing);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) =>
      mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true),
  };

  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

var resolveConfig = (config) => {
  const newConfig = mergeConfig({}, config);

  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;

  newConfig.headers = headers = AxiosHeaders.from(headers);

  newConfig.url = buildURL(
    buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls),
    config.params,
    config.paramsSerializer
  );

  // HTTP basic authentication
  if (auth) {
    headers.set(
      'Authorization',
      'Basic ' +
        btoa(
          (auth.username || '') +
            ':' +
            (auth.password ? unescape(encodeURIComponent(auth.password)) : '')
        )
    );
  }

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // browser handles it
    } else if (utils$1.isFunction(data.getHeaders)) {
      // Node.js FormData (like form-data package)
      const formHeaders = data.getHeaders();
      // Only set safe headers to avoid overwriting security headers
      const allowedHeaders = ['content-type', 'content-length'];
      Object.entries(formHeaders).forEach(([key, val]) => {
        if (allowedHeaders.includes(key.toLowerCase())) {
          headers.set(key, val);
        }
      });
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported &&
  function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;

      function done() {
        flushUpload && flushUpload(); // flush events
        flushDownload && flushDownload(); // flush events

        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

        _config.signal && _config.signal.removeEventListener('abort', onCanceled);
      }

      let request = new XMLHttpRequest();

      request.open(_config.method.toUpperCase(), _config.url, true);

      // Set the request timeout in MS
      request.timeout = _config.timeout;

      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        const responseHeaders = AxiosHeaders.from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData =
          !responseType || responseType === 'text' || responseType === 'json'
            ? request.responseText
            : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };

        settle(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );

        // Clean up request
        request = null;
      }

      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (
            request.status === 0 &&
            !(request.responseURL && request.responseURL.indexOf('file:') === 0)
          ) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError(event) {
        // Browsers deliver a ProgressEvent in XHR onerror
        // (message may be empty; when present, surface it)
        // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
        const msg = event && event.message ? event.message : 'Network Error';
        const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
        // attach the underlying event for consumers who want details
        err.event = event || null;
        reject(err);
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout
          ? 'timeout of ' + _config.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config,
            request
          )
        );

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }

      // Handle progress if needed
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);

        request.upload.addEventListener('progress', uploadThrottled);

        request.upload.addEventListener('loadend', flushUpload);
      }

      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };

        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted
            ? onCanceled()
            : _config.signal.addEventListener('abort', onCanceled);
        }
      }

      const protocol = parseProtocol(_config.url);

      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(
          new AxiosError(
            'Unsupported protocol ' + protocol + ':',
            AxiosError.ERR_BAD_REQUEST,
            config
          )
        );
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

const composeSignals = (signals, timeout) => {
  const { length } = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError
            ? err
            : new CanceledError(err instanceof Error ? err.message : err)
        );
      }
    };

    let timer =
      timeout &&
      setTimeout(() => {
        timer = null;
        onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
      }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal) => {
          signal.unsubscribe
            ? signal.unsubscribe(onabort)
            : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const { signal } = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done, value } = await iterator.next();

          if (done) {
            _onFinish();
            controller.close();
            return;
          }

          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = (bytes += len);
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      },
    },
    {
      highWaterMark: 2,
    }
  );
};

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const { isFunction } = utils$1;

const globalFetchAPI = (({ Request, Response }) => ({
  Request,
  Response,
}))(utils$1.global);

const { ReadableStream: ReadableStream$1, TextEncoder } = utils$1.global;

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};

const factory = (env) => {
  env = utils$1.merge.call(
    {
      skipUndefined: true,
    },
    globalFetchAPI,
    env
  );

  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);

  if (!isFetchSupported) {
    return false;
  }

  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);

  const encodeText =
    isFetchSupported &&
    (typeof TextEncoder === 'function'
      ? (
          (encoder) => (str) =>
            encoder.encode(str)
        )(new TextEncoder())
      : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));

  const supportsRequestStream =
    isRequestSupported &&
    isReadableStreamSupported &&
    test(() => {
      let duplexAccessed = false;

      const body = new ReadableStream$1();

      const hasContentType = new Request(platform.origin, {
        body,
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      }).headers.has('Content-Type');

      body.cancel();

      return duplexAccessed && !hasContentType;
    });

  const supportsResponseStream =
    isResponseSupported &&
    isReadableStreamSupported &&
    test(() => utils$1.isReadableStream(new Response('').body));

  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body),
  };

  isFetchSupported &&
    (() => {
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((type) => {
        !resolvers[type] &&
          (resolvers[type] = (res, config) => {
            let method = res && res[type];

            if (method) {
              return method.call(res);
            }

            throw new AxiosError(
              `Response type '${type}' is not supported`,
              AxiosError.ERR_NOT_SUPPORT,
              config
            );
          });
      });
    })();

  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }

    if (utils$1.isBlob(body)) {
      return body.size;
    }

    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body,
      });
      return (await _request.arrayBuffer()).byteLength;
    }

    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }

    if (utils$1.isURLSearchParams(body)) {
      body = body + '';
    }

    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };

  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());

    return length == null ? getBodyLength(body) : length;
  };

  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
    } = resolveConfig(config);

    let _fetch = envFetch || fetch;

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );

    let request = null;

    const unsubscribe =
      composedSignal &&
      composedSignal.unsubscribe &&
      (() => {
        composedSignal.unsubscribe();
      });

    let requestContentLength;

    try {
      if (
        onUploadProgress &&
        supportsRequestStream &&
        method !== 'get' &&
        method !== 'head' &&
        (requestContentLength = await resolveBodyLength(headers, data)) !== 0
      ) {
        let _request = new Request(url, {
          method: 'POST',
          body: data,
          duplex: 'half',
        });

        let contentTypeHeader;

        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
          headers.setContentType(contentTypeHeader);
        }

        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );

          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }

      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined,
      };

      request = isRequestSupported && new Request(url, resolvedOptions);

      let response = await (isRequestSupported
        ? _fetch(request, fetchOptions)
        : _fetch(url, resolvedOptions));

      const isStreamResponse =
        supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach((prop) => {
          options[prop] = response[prop];
        });

        const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

        const [onProgress, flush] =
          (onDownloadProgress &&
            progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            )) ||
          [];

        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](
        response,
        config
      );

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request,
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError(
            'Network Error',
            AxiosError.ERR_NETWORK,
            config,
            request,
            err && err.response
          ),
          {
            cause: err.cause || err,
          }
        );
      }

      throw AxiosError.from(err, err && err.code, config, request, err && err.response);
    }
  };
};

const seedCache = new Map();

const getFetch = (config) => {
  let env = (config && config.env) || {};
  const { fetch, Request, Response } = env;
  const seeds = [Request, Response, fetch];

  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;

  while (i--) {
    seed = seeds[i];
    target = map.get(seed);

    target === undefined && map.set(seed, (target = i ? new Map() : factory(env)));

    map = target;
  }

  return target;
};

getFetch();

/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch,
  },
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', { value });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', { value });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */
const renderReason = (reason) => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = (adapter) =>
  utils$1.isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter(adapters, config) {
  adapters = utils$1.isArray(adapters) ? adapters : [adapters];

  const { length } = adapters;
  let nameOrAdapter;
  let adapter;

  const rejectedReasons = {};

  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;

    adapter = nameOrAdapter;

    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

      if (adapter === undefined) {
        throw new AxiosError(`Unknown adapter '${id}'`);
      }
    }

    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }

    rejectedReasons[id || '#' + i] = adapter;
  }

  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) =>
        `adapter ${id} ` +
        (state === false ? 'is not supported by the environment' : 'is not available in the build')
    );

    let s = length
      ? reasons.length > 1
        ? 'since :\n' + reasons.map(renderReason).join('\n')
        : ' ' + renderReason(reasons[0])
      : 'as no adapter specified';

    throw new AxiosError(
      `There is no suitable adapter to dispatch the request ` + s,
      'ERR_NOT_SUPPORT'
    );
  }

  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
var adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,

  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters,
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);

  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(config, config.transformResponse, response);

      response.headers = AxiosHeaders.from(response.headers);

      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders.from(reason.response.headers);
        }
      }

      return Promise.reject(reason);
    }
  );
}

const VERSION = "1.15.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return (
      '[Axios v' +
      VERSION +
      "] Transitional option '" +
      opt +
      "'" +
      desc +
      (message ? '. ' + message : '')
    );
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError(
          'option ' + opt + ' must be ' + result,
          AxiosError.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1,
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = (() => {
          if (!dummy.stack) {
            return '';
          }

          const firstNewlineIndex = dummy.stack.indexOf('\n');

          return firstNewlineIndex === -1 ? '' : dummy.stack.slice(firstNewlineIndex + 1);
        })();
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex =
              firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines =
              secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);

            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const { transitional, paramsSerializer, headers } = config;

    if (transitional !== undefined) {
      validator.assertOptions(
        transitional,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
        },
        false
      );
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer,
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function,
          },
          true
        );
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(
      config,
      {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken'),
      },
      true
    );

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);

    headers &&
      utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (method) => {
        delete headers[method];
      });

    config.headers = AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      const transitional = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering =
        transitional && transitional.legacyInterceptorReqResOrdering;

      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(
      mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data,
      })
    );
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(
        mergeConfig(config || {}, {
          method,
          headers: isForm
            ? {
                'Content-Type': 'multipart/form-data',
              }
            : {},
          url,
          data,
        })
      );
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then((cancel) => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = (onfulfilled) => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel,
    };
  }
}

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  utils$1.extend(instance, context, null, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders;

axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(61), __webpack_require__(1012).setImmediate, __webpack_require__(182), __webpack_require__(1014).Buffer))

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createReducer; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

function createReducer(initialState, actionHandlers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    if (!immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(state) && !immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(state)) {
      state = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS(state);
    }
    var handler = actionHandlers[action.type];
    if (!handler) {
      return state;
    }
    state = handler(state, action);
    if (!immutable__WEBPACK_IMPORTED_MODULE_0__["Map"].isMap(state) && !immutable__WEBPACK_IMPORTED_MODULE_0__["List"].isList(state)) {
      throw new TypeError('Reducers must return Immutable objects.');
    }
    return state;
  };
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return FETCH_APPLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return FETCH_APPLICATIONS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return FETCH_APPLICATIONS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return FETCH_APPLICATIONS_FULFILLED; });
/* unused harmony export FETCH_APPLICATION */
/* unused harmony export FETCH_APPLICATION_PENDING */
/* unused harmony export FETCH_APPLICATION_REJECTED */
/* unused harmony export FETCH_APPLICATION_FULFILLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return LOADED_TOKEN; });
/* unused harmony export RECIEVED_TOKEN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return SHOW_LOGIN; });
/* unused harmony export REDIRECT_LOGIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return LOGIN_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return LOGOUT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return FETCH_CONNECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return FETCH_CONNECTIONS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return FETCH_CONNECTIONS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return FETCH_CONNECTIONS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return CLEAR_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return FETCH_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return FETCH_LOGS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return FETCH_LOGS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return FETCH_LOGS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return FETCH_LOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return FETCH_LOG_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return FETCH_LOG_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return FETCH_LOG_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bc", function() { return REQUEST_CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCEL_CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return CREATE_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return CREATE_USER_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CREATE_USER_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bc", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return REQUEST_FIELDS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CANCEL_FIELDS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return FIELDS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return FIELDS_CHANGE_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return FIELDS_CHANGE_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return FIELDS_CHANGE_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return FETCH_USERS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return FETCH_USERS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return FETCH_USERS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return FETCH_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return FETCH_USER_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return FETCH_USER_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return FETCH_USER_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return FETCH_USER_LOGS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return FETCH_USER_LOGS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return FETCH_USER_LOGS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return FETCH_USER_DEVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return FETCH_USER_DEVICES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return FETCH_USER_DEVICES_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return FETCH_USER_DEVICES_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return REQUEST_REMOVE_MULTIFACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CANCEL_REMOVE_MULTIFACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return REMOVE_MULTIFACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return REMOVE_MULTIFACTOR_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zb", function() { return REMOVE_MULTIFACTOR_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return REMOVE_MULTIFACTOR_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return REQUEST_BLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CANCEL_BLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BLOCK_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOCK_USER_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLOCK_USER_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return REQUEST_UNBLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CANCEL_UNBLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return UNBLOCK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc", function() { return UNBLOCK_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wc", function() { return UNBLOCK_USER_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uc", function() { return UNBLOCK_USER_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return REQUEST_REMOVE_BLOCKED_IPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CANCEL_REMOVE_BLOCKED_IPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return REMOVE_BLOCKED_IPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return REMOVE_BLOCKED_IPS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return REMOVE_BLOCKED_IPS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return REMOVE_BLOCKED_IPS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return REQUEST_DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CANCEL_DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return DELETE_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return DELETE_USER_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return DELETE_USER_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return REQUEST_PASSWORD_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CANCEL_PASSWORD_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return PASSWORD_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return PASSWORD_RESET_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return PASSWORD_RESET_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return PASSWORD_RESET_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return REQUEST_PASSWORD_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CANCEL_PASSWORD_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return PASSWORD_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return PASSWORD_CHANGE_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return PASSWORD_CHANGE_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return PASSWORD_CHANGE_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return REQUEST_USERNAME_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CANCEL_USERNAME_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cc", function() { return USERNAME_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ec", function() { return USERNAME_CHANGE_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fc", function() { return USERNAME_CHANGE_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dc", function() { return USERNAME_CHANGE_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return REQUEST_EMAIL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CANCEL_EMAIL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return EMAIL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return EMAIL_CHANGE_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return EMAIL_CHANGE_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return EMAIL_CHANGE_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return REQUEST_RESEND_VERIFICATION_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CANCEL_RESEND_VERIFICATION_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return RESEND_VERIFICATION_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return RESEND_VERIFICATION_EMAIL_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return RESEND_VERIFICATION_EMAIL_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return RESEND_VERIFICATION_EMAIL_FULFILLED; });
/* unused harmony export CONFIRM_USER_PICKER */
/* unused harmony export CANCEL_USER_PICKER */
/* unused harmony export OPEN_USER_PICKER */
/* unused harmony export SEARCH_USER_PICKER */
/* unused harmony export SEARCH_USER_PICKER_PENDING */
/* unused harmony export SEARCH_USER_PICKER_REJECTED */
/* unused harmony export SEARCH_USER_PICKER_FULFILLED */
/* unused harmony export SELECT_USER */
/* unused harmony export UNSELECT_USER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return FETCH_SCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return FETCH_SCRIPT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return FETCH_SCRIPT_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return FETCH_SCRIPT_FULFILLED; });
/* unused harmony export UPDATE_SCRIPTS */
/* unused harmony export UPDATE_SCRIPTS_PENDING */
/* unused harmony export UPDATE_SCRIPTS_REJECTED */
/* unused harmony export UPDATE_SCRIPTS_FULFILLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xc", function() { return UPDATE_SCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zc", function() { return UPDATE_SCRIPT_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ac", function() { return UPDATE_SCRIPT_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yc", function() { return UPDATE_SCRIPT_FULFILLED; });
/* unused harmony export FETCH_MEMBERSHIPS */
/* unused harmony export FETCH_MEMBERSHIPS_PENDING */
/* unused harmony export FETCH_MEMBERSHIPS_REJECTED */
/* unused harmony export FETCH_MEMBERSHIPS_FULFILLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return FETCH_ACCESS_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FETCH_ACCESS_LEVEL_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return FETCH_ACCESS_LEVEL_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return FETCH_ACCESS_LEVEL_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return FETCH_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return FETCH_SETTINGS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return FETCH_SETTINGS_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return FETCH_SETTINGS_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return TOGGLE_STYLE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return GET_STYLE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return FETCH_LANGUAGE_DICTIONARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return FETCH_LANGUAGE_DICTIONARY_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return FETCH_LANGUAGE_DICTIONARY_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return FETCH_LANGUAGE_DICTIONARY_FULFILLED; });
/* unused harmony export SUPER_ADMIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return RESERVED_USER_FIELDS; });
/*
 * Applications.
 */

// Fetch.
var FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
var FETCH_APPLICATIONS_PENDING = 'FETCH_APPLICATIONS_PENDING';
var FETCH_APPLICATIONS_REJECTED = 'FETCH_APPLICATIONS_REJECTED';
var FETCH_APPLICATIONS_FULFILLED = 'FETCH_APPLICATIONS_FULFILLED';

// Fetch single.
var FETCH_APPLICATION = 'FETCH_APPLICATION';
var FETCH_APPLICATION_PENDING = 'FETCH_APPLICATION_PENDING';
var FETCH_APPLICATION_REJECTED = 'FETCH_APPLICATION_REJECTED';
var FETCH_APPLICATION_FULFILLED = 'FETCH_APPLICATION_FULFILLED';

/*
 * Auth.
 */

// Token.
var LOADED_TOKEN = 'LOADED_TOKEN';
var RECIEVED_TOKEN = 'RECIEVED_TOKEN';

// Login.
var SHOW_LOGIN = 'SHOW_LOGIN';
var REDIRECT_LOGIN = 'REDIRECT_LOGIN';
var LOGIN_PENDING = 'LOGIN_PENDING';
var LOGIN_FAILED = 'LOGIN_FAILED';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Logout.
var LOGOUT_PENDING = 'LOGOUT_PENDING';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/*
 * Connections.
 */

// Fetch.
var FETCH_CONNECTIONS = 'FETCH_CONNECTIONS';
var FETCH_CONNECTIONS_PENDING = 'FETCH_CONNECTIONS_PENDING';
var FETCH_CONNECTIONS_REJECTED = 'FETCH_CONNECTIONS_REJECTED';
var FETCH_CONNECTIONS_FULFILLED = 'FETCH_CONNECTIONS_FULFILLED';

/*
 * Logs.
 */

var CLEAR_LOG = 'CLEAR_LOG';

// Fetch all.
var FETCH_LOGS = 'FETCH_LOGS';
var FETCH_LOGS_PENDING = 'FETCH_LOGS_PENDING';
var FETCH_LOGS_REJECTED = 'FETCH_LOGS_REJECTED';
var FETCH_LOGS_FULFILLED = 'FETCH_LOGS_FULFILLED';

// Fetch single.
var FETCH_LOG = 'FETCH_LOG';
var FETCH_LOG_PENDING = 'FETCH_LOG_PENDING';
var FETCH_LOG_REJECTED = 'FETCH_LOG_REJECTED';
var FETCH_LOG_FULFILLED = 'FETCH_LOG_FULFILLED';

/*
 * Users.
 */

// Create user.
var REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
var CANCEL_CREATE_USER = 'CANCEL_CREATE_USER';
var CREATE_USER = 'CREATE_USER';
var CREATE_USER_PENDING = 'CREATE_USER_PENDING';
var CREATE_USER_REJECTED = 'CREATE_USER_REJECTED';
var CREATE_USER_FULFILLED = 'CREATE_USER_FULFILLED';

// Edit user.
var UPDATE_USER = 'UPDATE_USER';
var REQUEST_FIELDS_CHANGE = 'REQUEST_FIELDS_CHANGE';
var CANCEL_FIELDS_CHANGE = 'CANCEL_FIELDS_CHANGE';
var FIELDS_CHANGE = 'FIELDS_CHANGE';
var FIELDS_CHANGE_PENDING = 'FIELDS_CHANGE_PENDING';
var FIELDS_CHANGE_REJECTED = 'FIELDS_CHANGE_REJECTED';
var FIELDS_CHANGE_FULFILLED = 'FIELDS_CHANGE_FULFILLED';

// Fetch all.
var FETCH_USERS = 'FETCH_USERS';
var FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
var FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
var FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

// Fetch single.
var FETCH_USER = 'FETCH_USER';
var FETCH_USER_PENDING = 'FETCH_USER_PENDING';
var FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
var FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

// Fetch logs.
var FETCH_USER_LOGS = 'FETCH_USER_LOGS';
var FETCH_USER_LOGS_PENDING = 'FETCH_USER_LOGS_PENDING';
var FETCH_USER_LOGS_REJECTED = 'FETCH_USER_LOGS_REJECTED';
var FETCH_USER_LOGS_FULFILLED = 'FETCH_USER_LOGS_FULFILLED';

// Fetch devices.
var FETCH_USER_DEVICES = 'FETCH_USER_DEVICES';
var FETCH_USER_DEVICES_PENDING = 'FETCH_USER_DEVICES_PENDING';
var FETCH_USER_DEVICES_REJECTED = 'FETCH_USER_DEVICES_REJECTED';
var FETCH_USER_DEVICES_FULFILLED = 'FETCH_USER_DEVICES_FULFILLED';

// Remove MFA.
var REQUEST_REMOVE_MULTIFACTOR = 'REQUEST_REMOVE_MULTIFACTOR';
var CANCEL_REMOVE_MULTIFACTOR = 'CANCEL_REMOVE_MULTIFACTOR';
var REMOVE_MULTIFACTOR = 'REMOVE_MULTIFACTOR';
var REMOVE_MULTIFACTOR_PENDING = 'REMOVE_MULTIFACTOR_PENDING';
var REMOVE_MULTIFACTOR_REJECTED = 'REMOVE_MULTIFACTOR_REJECTED';
var REMOVE_MULTIFACTOR_FULFILLED = 'REMOVE_MULTIFACTOR_FULFILLED';

// Block user.
var REQUEST_BLOCK_USER = 'REQUEST_BLOCK_USER';
var CANCEL_BLOCK_USER = 'CANCEL_BLOCK_USER';
var BLOCK_USER = 'BLOCK_USER';
var BLOCK_USER_PENDING = 'BLOCK_USER_PENDING';
var BLOCK_USER_REJECTED = 'BLOCK_USER_REJECTED';
var BLOCK_USER_FULFILLED = 'BLOCK_USER_FULFILLED';

// Unblock user.
var REQUEST_UNBLOCK_USER = 'REQUEST_UNBLOCK_USER';
var CANCEL_UNBLOCK_USER = 'CANCEL_UNBLOCK_USER';
var UNBLOCK_USER = 'UNBLOCK_USER';
var UNBLOCK_USER_PENDING = 'UNBLOCK_USER_PENDING';
var UNBLOCK_USER_REJECTED = 'UNBLOCK_USER_REJECTED';
var UNBLOCK_USER_FULFILLED = 'UNBLOCK_USER_FULFILLED';

// Remove user blocks.
var REQUEST_REMOVE_BLOCKED_IPS = 'REQUEST_REMOVE_BLOCKED_IPS';
var CANCEL_REMOVE_BLOCKED_IPS = 'CANCEL_REMOVE_BLOCKED_IPS';
var REMOVE_BLOCKED_IPS = 'REMOVE_BLOCKED_IPS';
var REMOVE_BLOCKED_IPS_PENDING = 'REMOVE_BLOCKED_IPS_PENDING';
var REMOVE_BLOCKED_IPS_REJECTED = 'REMOVE_BLOCKED_IPS_REJECTED';
var REMOVE_BLOCKED_IPS_FULFILLED = 'REMOVE_BLOCKED_IPS_FULFILLED';

// Delete user.
var REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
var CANCEL_DELETE_USER = 'CANCEL_DELETE_USER';
var DELETE_USER = 'DELETE_USER';
var DELETE_USER_PENDING = 'DELETE_USER_PENDING';
var DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';
var DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED';

// Reset password.
var REQUEST_PASSWORD_RESET = 'REQUEST_PASSWORD_RESET';
var CANCEL_PASSWORD_RESET = 'CANCEL_PASSWORD_RESET';
var PASSWORD_RESET = 'PASSWORD_RESET';
var PASSWORD_RESET_PENDING = 'PASSWORD_RESET_PENDING';
var PASSWORD_RESET_REJECTED = 'PASSWORD_RESET_REJECTED';
var PASSWORD_RESET_FULFILLED = 'PASSWORD_RESET_FULFILLED';

// Change password.
var REQUEST_PASSWORD_CHANGE = 'REQUEST_PASSWORD_CHANGE';
var CANCEL_PASSWORD_CHANGE = 'CANCEL_PASSWORD_CHANGE';
var PASSWORD_CHANGE = 'PASSWORD_CHANGE';
var PASSWORD_CHANGE_PENDING = 'PASSWORD_CHANGE_PENDING';
var PASSWORD_CHANGE_REJECTED = 'PASSWORD_CHANGE_REJECTED';
var PASSWORD_CHANGE_FULFILLED = 'PASSWORD_CHANGE_FULFILLED';

// Change username.
var REQUEST_USERNAME_CHANGE = 'REQUEST_USERNAME_CHANGE';
var CANCEL_USERNAME_CHANGE = 'CANCEL_USERNAME_CHANGE';
var USERNAME_CHANGE = 'USERNAME_CHANGE';
var USERNAME_CHANGE_PENDING = 'USERNAME_CHANGE_PENDING';
var USERNAME_CHANGE_REJECTED = 'USERNAME_CHANGE_REJECTED';
var USERNAME_CHANGE_FULFILLED = 'USERNAME_CHANGE_FULFILLED';

// Change email.
var REQUEST_EMAIL_CHANGE = 'REQUEST_EMAIL_CHANGE';
var CANCEL_EMAIL_CHANGE = 'CANCEL_EMAIL_CHANGE';
var EMAIL_CHANGE = 'EMAIL_CHANGE';
var EMAIL_CHANGE_PENDING = 'EMAIL_CHANGE_PENDING';
var EMAIL_CHANGE_REJECTED = 'EMAIL_CHANGE_REJECTED';
var EMAIL_CHANGE_FULFILLED = 'EMAIL_CHANGE_FULFILLED';

// Resend verification email.
var REQUEST_RESEND_VERIFICATION_EMAIL = 'REQUEST_RESEND_VERIFICATION_EMAIL';
var CANCEL_RESEND_VERIFICATION_EMAIL = 'CANCEL_RESEND_VERIFICATION_EMAIL';
var RESEND_VERIFICATION_EMAIL = 'RESEND_VERIFICATION_EMAIL';
var RESEND_VERIFICATION_EMAIL_PENDING = 'RESEND_VERIFICATION_EMAIL_PENDING';
var RESEND_VERIFICATION_EMAIL_REJECTED = 'RESEND_VERIFICATION_EMAIL_REJECTED';
var RESEND_VERIFICATION_EMAIL_FULFILLED = 'RESEND_VERIFICATION_EMAIL_FULFILLED';

/*
 * User Picker.
 */

var CONFIRM_USER_PICKER = 'CONFIRM_USER_PICKER';
var CANCEL_USER_PICKER = 'CANCEL_USER_PICKER';

// Open.
var OPEN_USER_PICKER = 'OPEN_USER_PICKER';

// Search.
var SEARCH_USER_PICKER = 'SEARCH_USER_PICKER';
var SEARCH_USER_PICKER_PENDING = 'SEARCH_USER_PICKER_PENDING';
var SEARCH_USER_PICKER_REJECTED = 'SEARCH_USER_PICKER_REJECTED';
var SEARCH_USER_PICKER_FULFILLED = 'SEARCH_USER_PICKER_FULFILLED';

// Select.
var SELECT_USER = 'SELECT_USER';
var UNSELECT_USER = 'UNSELECT_USER';

// Scripts.
var FETCH_SCRIPT = 'FETCH_SCRIPT';
var FETCH_SCRIPT_PENDING = 'FETCH_SCRIPT_PENDING';
var FETCH_SCRIPT_REJECTED = 'FETCH_SCRIPT_REJECTED';
var FETCH_SCRIPT_FULFILLED = 'FETCH_SCRIPT_FULFILLED';
var UPDATE_SCRIPTS = 'UPDATE_SCRIPTS';
var UPDATE_SCRIPTS_PENDING = 'UPDATE_SCRIPTS_PENDING';
var UPDATE_SCRIPTS_REJECTED = 'UPDATE_SCRIPTS_REJECTED';
var UPDATE_SCRIPTS_FULFILLED = 'UPDATE_SCRIPTS_FULFILLED';
var UPDATE_SCRIPT = 'UPDATE_SCRIPT';
var UPDATE_SCRIPT_PENDING = 'UPDATE_SCRIPT_PENDING';
var UPDATE_SCRIPT_REJECTED = 'UPDATE_SCRIPT_REJECTED';
var UPDATE_SCRIPT_FULFILLED = 'UPDATE_SCRIPT_FULFILLED';

// Memberships.
var FETCH_MEMBERSHIPS = 'FETCH_MEMBERSHIPS';
var FETCH_MEMBERSHIPS_PENDING = 'FETCH_MEMBERSHIPS_PENDING';
var FETCH_MEMBERSHIPS_REJECTED = 'FETCH_MEMBERSHIPS_REJECTED';
var FETCH_MEMBERSHIPS_FULFILLED = 'FETCH_MEMBERSHIPS_FULFILLED';

// Access Level.
var FETCH_ACCESS_LEVEL = 'FETCH_ACCESS_LEVEL';
var FETCH_ACCESS_LEVEL_PENDING = 'FETCH_ACCESS_LEVEL_PENDING';
var FETCH_ACCESS_LEVEL_REJECTED = 'FETCH_ACCESS_LEVEL_REJECTED';
var FETCH_ACCESS_LEVEL_FULFILLED = 'FETCH_ACCESS_LEVEL_FULFILLED';

// SETTINGS.
var FETCH_SETTINGS = 'FETCH_SETTINGS';
var FETCH_SETTINGS_PENDING = 'FETCH_SETTINGS_PENDING';
var FETCH_SETTINGS_REJECTED = 'FETCH_SETTINGS_REJECTED';
var FETCH_SETTINGS_FULFILLED = 'FETCH_SETTINGS_FULFILLED';
var TOGGLE_STYLE_SETTINGS = 'TOGGLE_STYLE_SETTINGS';
var GET_STYLE_SETTINGS = 'GET_STYLE_SETTINGS';

// LANGUAGE DICTIONARY.
var FETCH_LANGUAGE_DICTIONARY = 'FETCH_LANGUAGE_DICTIONARY';
var FETCH_LANGUAGE_DICTIONARY_PENDING = 'FETCH_LANGUAGE_DICTIONARY_PENDING';
var FETCH_LANGUAGE_DICTIONARY_REJECTED = 'FETCH_LANGUAGE_DICTIONARY_REJECTED';
var FETCH_LANGUAGE_DICTIONARY_FULFILLED = 'FETCH_LANGUAGE_DICTIONARY_FULFILLED';

// Access level constants
var SUPER_ADMIN = 2;

// The list of reserved user fields that must not be rendered in the custom fields edit form
var RESERVED_USER_FIELDS = ['username', 'memberships', 'connection', 'password', 'email', 'repeatPassword', 'resetPassword'];

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _utils_createReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);





var initialState = {
  loading: false,
  error: null,
  record: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
    settings: {
      dict: {
        title: '',
        memberships: ''
      },
      userFields: [],
      css: ''
    }
  })
};
var parseFunction = function parseFunction(property, attribute, functionString) {
  if (functionString !== undefined && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isString(functionString) && functionString.startsWith('function')) {
    try {
      // TODO: this is scary => what else can we do?
      functionString = eval("(".concat(functionString, ")"));
    } catch (error) {
      console.error("The ".concat(attribute, " function for field ").concat(property, " throws an error"), error);
      // doing this because I couldn't get the tests to work when
      // passing back a function pointer for expect
      return eval('(function() { return "error"; })');
    }
  }
  return functionString;
};
var parseOptions = function parseOptions(options) {
  // Parse options
  if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isArray(options)) {
    options = options.map(function (option) {
      if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isString(option)) {
        return {
          label: option,
          value: option
        };
      } else if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isObject(option) && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(option, 'label') && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(option, 'value')) {
        return option;
      }
      return {
        label: 'Error',
        value: ''
      };
    });
  }
  return options;
};
var parseFieldSection = function parseFieldSection(property, sectionInfo, sectionName, inheritedDisplay) {
  if (sectionInfo && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isObject(sectionInfo)) {
    var sectionDisplay = parseFunction(property, "".concat(sectionName, ".display"), sectionInfo.display);
    var display = sectionDisplay !== undefined ? sectionDisplay : inheritedDisplay;
    if (display !== undefined) sectionInfo.display = display;
    if (sectionInfo.options) sectionInfo.options = parseOptions(sectionInfo.options);
    if (sectionInfo.validationFunction) sectionInfo.validationFunction = parseFunction(property, "".concat(sectionName, ".validationFunction"), sectionInfo.validationFunction);
  }
};
var settings = Object(_utils_createReducer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(initialState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* FETCH_SETTINGS_PENDING */ "hb"], function (state) {
  return state.merge({
    loading: true,
    error: null
  });
}), _constants__WEBPACK_IMPORTED_MODULE_3__[/* FETCH_SETTINGS_REJECTED */ "ib"], function (state, action) {
  return state.merge({
    loading: false,
    error: action.errorData
  });
}), _constants__WEBPACK_IMPORTED_MODULE_3__[/* FETCH_SETTINGS_FULFILLED */ "gb"], function (state, action) {
  var data = action.payload.data;
  if (data.settings.userFields) {
    data.settings.userFields.forEach(function (field) {
      parseFieldSection(field.property, field, 'userField');
      parseFieldSection(field.property, field.edit, 'userField.edit', field.display);
      parseFieldSection(field.property, field.create, 'userField.create', field.display);
      parseFieldSection(field.property, field.search, 'userField.search', field.display);
    });
  }
  if (data.settings.errorTranslator) {
    data.settings.errorTranslator = parseFunction('errorTranslator', 'errorTranslator', data.settings.errorTranslator);
  }
  return state.merge({
    loading: false,
    error: null,
    record: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(data)
  });
}));

/***/ })

/******/ });