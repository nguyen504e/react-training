/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_mock-data.js":
/*!***************************!*\
  !*** ./src/_mock-data.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ \"faker\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfaker__WEBPACK_IMPORTED_MODULE_1___default().seed(123);\nconst companies = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(20, () => {\n  return {\n    uuid: faker__WEBPACK_IMPORTED_MODULE_1___default().random.uuid(),\n    suffixes: faker__WEBPACK_IMPORTED_MODULE_1___default().company.suffixes(),\n    name: faker__WEBPACK_IMPORTED_MODULE_1___default().company.companyName(),\n    account: faker__WEBPACK_IMPORTED_MODULE_1___default().finance.account(),\n    address: {\n      zipCode: faker__WEBPACK_IMPORTED_MODULE_1___default().address.zipCode(),\n      city: faker__WEBPACK_IMPORTED_MODULE_1___default().address.city(),\n      streetAddress: faker__WEBPACK_IMPORTED_MODULE_1___default().address.streetAddress(),\n      county: faker__WEBPACK_IMPORTED_MODULE_1___default().address.county(),\n      state: faker__WEBPACK_IMPORTED_MODULE_1___default().address.state(),\n      country: faker__WEBPACK_IMPORTED_MODULE_1___default().address.country()\n    }\n  };\n});\nconst companyIds = companies.map(c => c.uuid);\nconst products = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(200, () => {\n  return {\n    uuid: faker__WEBPACK_IMPORTED_MODULE_1___default().random.uuid(),\n    company: faker__WEBPACK_IMPORTED_MODULE_1___default().random.arrayElement(companyIds),\n    name: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.productName(),\n    type: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.product(),\n    description: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.productDescription(),\n    price: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.price()\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  company: companies,\n  product: products\n});\n\n//# sourceURL=webpack://react-training-backend/./src/_mock-data.js?");

/***/ }),

/***/ "./src/data-sources.js":
/*!*****************************!*\
  !*** ./src/data-sources.js ***!
  \*****************************/
/*! namespace exports */
/*! export createDatasource [provided] [no usage info] [missing usage info prevents renaming] */
/*! export seed [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDatasource\": () => /* binding */ createDatasource,\n/* harmony export */   \"seed\": () => /* binding */ seed\n/* harmony export */ });\n/* harmony import */ var lokijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lokijs */ \"lokijs\");\n/* harmony import */ var lokijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lokijs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDatasource = name => {\n  const db = new (lokijs__WEBPACK_IMPORTED_MODULE_0___default())(name);\n  return {\n    company: db.addCollection('company', {\n      indices: ['name']\n    })\n  };\n};\nconst seed = (datasource, data) => {\n  Object.entries(data).forEach(([key, records]) => {\n    const collection = datasource[key];\n\n    if (!collection) {\n      return;\n    }\n\n    collection.insert(records);\n  });\n};\n\n//# sourceURL=webpack://react-training-backend/./src/data-sources.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/resolvers */ \"./src/modules/resolvers.js\");\n/* harmony import */ var _modules_typeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/typeDefs */ \"./src/modules/typeDefs.js\");\n/* harmony import */ var _data_sources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-sources */ \"./src/data-sources.js\");\n/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mock-data */ \"./src/_mock-data.js\");\n\n\n\n\n\nconst dataSources = (0,_data_sources__WEBPACK_IMPORTED_MODULE_3__.createDatasource)('my.db');\n(0,_data_sources__WEBPACK_IMPORTED_MODULE_3__.seed)(dataSources, _mock_data__WEBPACK_IMPORTED_MODULE_4__.default);\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  resolvers: _modules_resolvers__WEBPACK_IMPORTED_MODULE_1__.default,\n  typeDefs: _modules_typeDefs__WEBPACK_IMPORTED_MODULE_2__.default,\n  dataSources: () => dataSources\n});\nserver.listen().then(({\n  url\n}) => {\n  console.log(`🚀  Server ready at ${url}`);\n});\n\n//# sourceURL=webpack://react-training-backend/./src/index.js?");

/***/ }),

/***/ "./src/modules/company/resolvers.js":
/*!******************************************!*\
  !*** ./src/modules/company/resolvers.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Company: {\n    id: src => src.uuid\n  },\n  Query: {\n    listCompany: (_, args, {\n      dataSources\n    }) => {\n      return dataSources.company.find(args.name ? {\n        name: {\n          $regex: `${args.name}`\n        }\n      } : {});\n    },\n    getCompany: (src, args, {\n      dataSources\n    }) => {\n      return dataSources.company.findOne({\n        uuid: args.id\n      });\n    }\n  },\n  Mutation: {\n    removeCompany: (_, args, {\n      dataSources\n    }) => {\n      const {\n        company: companyCollection\n      } = dataSources;\n      companyCollection.remove({\n        uuid: args.id\n      });\n      return companyCollection.findOne({\n        uuid: args.id\n      });\n    },\n    updateCompany: (_, args, {\n      dataSources\n    }) => {\n      const {\n        company: companyCollection\n      } = dataSources;\n      companyCollection.update({\n        uuid: args.id\n      }, args.data);\n      return companyCollection.findOne({\n        uuid: args.id\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://react-training-backend/./src/modules/company/resolvers.js?");

/***/ }),

/***/ "./src/modules/resolvers.js":
/*!**********************************!*\
  !*** ./src/modules/resolvers.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _company_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/resolvers */ \"./src/modules/company/resolvers.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_company_resolvers__WEBPACK_IMPORTED_MODULE_0__.default]);\n\n//# sourceURL=webpack://react-training-backend/./src/modules/resolvers.js?");

/***/ }),

/***/ "./src/modules/typeDefs.js":
/*!*********************************!*\
  !*** ./src/modules/typeDefs.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _company_schema_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/schema.graphql */ \"./src/modules/company/schema.graphql\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_company_schema_graphql__WEBPACK_IMPORTED_MODULE_0__.default]);\n\n//# sourceURL=webpack://react-training-backend/./src/modules/typeDefs.js?");

/***/ }),

/***/ "./src/modules/company/schema.graphql":
/*!********************************************!*\
  !*** ./src/modules/company/schema.graphql ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"type Address {\\n  zipCode: String!\\n  city: String\\n  streetAddress: String!\\n  county: String!\\n  state: String\\n  country: String\\n}\\n\\ntype Company {\\n  id: String!\\n  name: String!\\n  suffixes: [String]!\\n  account: String!\\n  address: Address!\\n}\\n\\ninput CompanyInput {\\n  name: String\\n  suffixes: [String]\\n  account: String\\n  address: AddressInput\\n}\\n\\ninput AddressInput {\\n  zipCode: String\\n  city: String\\n  streetAddress: String\\n  county: String\\n  state: String\\n  country: String\\n}\\n\\ntype Query {\\n  listCompany(name: String): [Company]\\n  getCompany(id: String!): Company\\n}\\n\\ntype Mutation {\\n  removeCompany(id: String!): Company\\n  updateCompany(id: String, data: CompanyInput): Company\\n}\\n\");\n\n//# sourceURL=webpack://react-training-backend/./src/modules/company/schema.graphql?");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"apollo-server\");;\n\n//# sourceURL=webpack://react-training-backend/external_%22apollo-server%22?");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"faker\");;\n\n//# sourceURL=webpack://react-training-backend/external_%22faker%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"lodash\");;\n\n//# sourceURL=webpack://react-training-backend/external_%22lodash%22?");

/***/ }),

/***/ "lokijs":
/*!*************************!*\
  !*** external "lokijs" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"lokijs\");;\n\n//# sourceURL=webpack://react-training-backend/external_%22lokijs%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;