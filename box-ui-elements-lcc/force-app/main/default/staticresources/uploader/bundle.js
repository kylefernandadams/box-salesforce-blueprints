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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lightning-container/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lightning-container/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nCopyright 2016 salesforce.com, inc. All rights reserved. \n\nUse of this software is subject to the salesforce.com Developerforce Terms of Use and other\napplicable terms that salesforce.com may make available, as may be amended from time to time.\nYou may not decompile, reverse engineer, disassemble, attempt to derive the source code of,\ndecrypt, modify, or create derivative works of this software, updates thereto, or any part\nthereof. You may not use the software to engage in any development activity that interferes\nwith, disrupts, damages, or accesses in an unauthorized manner the servers, networks, or\nother properties or services of salesforce.com or any third party.\n\nWITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT\nWARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL SALESFORCE.COM HAVE ANY LIABILITY\nFOR ANY DAMAGES, INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE,\nOR CONSEQUENTIAL DAMAGES, OR DAMAGES BASED ON LOST PROFITS, DATA OR USE, IN CONNECTION WITH THE\nSOFTWARE, HOWEVER CAUSED AND, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY,\nWHETHER OR NOT YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n*/\n\n\n\nmodule.exports.sendMessage = function(userMessage) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.sendMessage(\"containerUserMessage\", {payload: userMessage});\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.addErrorHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.addErrorHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.removeErrorHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.removeErrorHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.addMessageHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.addMessageHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.removeMessageHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.removeMessageHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.getRESTAPISessionKey = function() {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        return LCC.onlineSupport.getRESTAPISessionKey();\n    }\n    else {\n        // TODO: offline\n        return \"\";\n    }\n}\n\nmodule.exports.callApex = function(fullyQualifiedApexMethodName,\n                                   apexMethodParameters,\n                                   callbackFunction,\n                                   apexCallConfiguration) {\n    if (typeof Visualforce !== \"undefined\" && \n        typeof Visualforce.remoting !== \"undefined\" &&\n        typeof Visualforce.remoting.Manager !== \"undefined\") {\n\n            Visualforce.remoting.Manager.invokeAction(fullyQualifiedApexMethodName,\n                                                      apexMethodParameters,\n                                                      callbackFunction,\n                                                      apexCallConfiguration);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/lightning-container/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lightning_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightning-container */ \"./node_modules/lightning-container/index.js\");\n/* harmony import */ var lightning_container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lightning_container__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    console.log('DOM fully loaded. Calling Apex controller...');\n    lightning_container__WEBPACK_IMPORTED_MODULE_0___default.a.sendMessage({\n        name: 'jsApp',\n        value: 'DOM ready'\n    });\n    // Calling apex from the JS app is actually slower than messaging the lightning:container and calling Apex from the ltn controller\n    // Not sure why\n    // var scopes = 'base_upload';\n    // LCC.callApex(\"BoxContentUploaderController.getDownScopedToken\",\n    //     scopes,\n    //     resultHandler,\n    //     { escape: true });\n})\n\n\n// function resultHandler(accessToken, event) {\n//     console.log('LCC Call Apex - Result handler: ', accessToken);\n//     if (event.status) {\n//         // Set Folder Id to the Root folder \n//         var rooFolderId = '0';\n\n//         // Show the content uploader\n//         var uploader = new Box.ContentUploader();\n//         uploader.show(rooFolderId, accessToken, {\n//             container: '.uploader-container'\n//         });\n\n//         // Log upload data to console\n//         uploader.on('complete', (data) => { \n//             console.log(`All files successfully uploaded: ${JSON.stringify(data)}`); \n//         });\n\n//         uploader.on('upload', (data) => {\n//             console.log(`Successfully uploaded file with name \"${data.name}\" to Box File ID ${data.id}`);\n//         });\n\n//         uploader.on('error', (data) => {\n//             console.log(`Error uploading file with name \"${data.file.name}\". The error was: \"${JSON.stringify(data.error)}\"`);\n//         });\n\n//         uploader.on('close', (data) => {\n//             console.log('Closing...');\n//             uploader.hide();\n//             uploader.show(rooFolderId, accessToken, {\n//                 container: '.uploader-container'\n//             });\n//         })\n//     } else if (event.type === \"exception\") {\n//         console.log(event.message + \" : \" + event.where);\n//     }\n// }\n\n// Register for messages sent by hosting component\nlightning_container__WEBPACK_IMPORTED_MODULE_0___default.a.addMessageHandler(function(message) {\n    var folderId = message.value.folderId;\n    var accessToken = message.value.accessToken;\n\n    console.log('Found folder id from LCC: ', folderId);\n    console.log('Found access token from LCC: ', accessToken);\n\n    // Show the content uploader\n    var uploader = new Box.ContentUploader();\n    uploader.show(folderId, accessToken, {\n        container: '.uploader-container'\n    });\n\n    // Log upload data to console\n    uploader.on('complete', (data) => { \n        console.log(`All files successfully uploaded: ${JSON.stringify(data)}`); \n    });\n\n    uploader.on('upload', (data) => {\n        console.log(`Successfully uploaded file with name \"${data.name}\" to Box File ID ${data.id}`);\n    });\n\n    uploader.on('error', (data) => {\n        console.log(`Error uploading file with name \"${data.file.name}\". The error was: \"${JSON.stringify(data.error)}\"`);\n    });\n\n    uploader.on('close', (data) => {\n        console.log('Closing...');\n        uploader.hide();\n        uploader.show(folderId, accessToken, {\n            container: '.uploader-container'\n        });\n    })\n});\n\n\nlightning_container__WEBPACK_IMPORTED_MODULE_0___default.a.addErrorHandler(function(error) {\n    console.log('Found error receiving message from lightning container: ', JSON.stringify(error));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });