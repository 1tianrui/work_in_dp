/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var common = __webpack_require__(5);
	common._reset();

	var app = new Vue({

		el: "#app",
		data: {
			currentPage: 'home',
			hasMenu: true,
			store: {
				misId: '',
				uname: '',
				utils: common
			},
			result: []
		},
		created: function () {
			var vm = this;
			_hashCheck(vm);
			var callback = function (res) {
				vm.store.misId = res.misId;
				vm.store.uname = res.name;
			};
			this.store.utils._ajax('get', '/api/v1/user/login', {}, callback);
		},
		components: {
			home: __webpack_require__(6),
			result: __webpack_require__(11),
			user: __webpack_require__(15),
			chat: __webpack_require__(21),
			menu: __webpack_require__(25)
		},
		events: {
			_search: function (result, target) {
				result.forEach(function (res, i) {
					res.end_name == target && Array.prototype.unshift.apply(result, result.splice(i, 1));
				});
				if (!result.length) {
					alert('暂无搜索结果，自己发起一单啦！');
					location.href = '/app#home';
				} else {
					this.result = result;
				}
			}
		}

	});

	function _hashCheck(vm) {
		var app = vm;
		var hash = location.hash;
		if (window.mt_t) {
			clearInterval(mt_t);
		}

		var reg = /^#(\w+)/;
		// var tpl = hash.match(reg)[1];
		// app.currentPage = tpl;

		if (!hash.trim() || /home/.test(hash)) {
			// 首页
			app.currentPage = 'home';
		}
		if (/user/.test(hash)) {
			// 用户中心
			app.currentPage = 'user';
		}
		if (/result/.test(hash)) {
			// 搜索结果
			app.currentPage = 'result';
		}
		if (/chat/.test(hash)) {
			app.currentPage = 'chat';
			app.hasMenu = false;
		} else {
			app.hasMenu = true;
		}
	}

	window.onhashchange = function () {
		_hashCheck(app);
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./global.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./global.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); }\n\nul {\n  list-style-type: none; }\n\na {\n  color: #444;\n  text-decoration: none; }\n\na:visited {\n  color: #444; }\n\nbutton {\n  background: #fff;\n  border: none;\n  font-size: 14px; }\n\ni {\n  font-style: normal; }\n\ninput {\n  border: 1px solid #ddd; }\n\ninput:focus {\n  border-color: #8BC34A; }\n\n.no_touch {\n  pointer-events: none; }\n\n.hide {\n  display: none; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  font: 14px/1.5 \"Helvetica Neue\",Helvetica,\"\\5FAE\\8F6F\\96C5\\9ED1\",Arial,Verdana,sans-serif;\n  color: #444;\n  overflow: hidden;\n  background: #fcfcfc; }\n\nmain {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.list {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-top: 5px;\n  padding-bottom: 80px;\n  left: 0;\n  top: 0;\n  overflow: scroll; }\n  .list .item {\n    position: relative;\n    overflow: hidden;\n    margin-bottom: 4px;\n    padding: 12px;\n    box-shadow: 0 2px 4px rgba(221, 221, 221, 0.2);\n    background: #fff; }\n\n.popup {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.75);\n  z-index: 9; }\n  .popup .mask {\n    position: absolute;\n    width: 14rem;\n    padding: .2rem;\n    font-size: 12px;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -75%); }\n    .popup .mask > p {\n      color: #888; }\n    .popup .mask > label {\n      display: block;\n      margin-top: 10px; }\n      .popup .mask > label span {\n        display: inline-block;\n        width: 3rem;\n        vertical-align: top; }\n      .popup .mask > label input {\n        height: 24px;\n        width: 9.5rem;\n        border-radius: 2px; }\n      .popup .mask > label textarea {\n        width: 9.5rem;\n        height: 40px;\n        border: 1px solid #ddd;\n        resize: none;\n        border-radius: 2px; }\n    .popup .mask > h4 {\n      font-size: 14px;\n      margin-bottom: 4px; }\n    .popup .mask > small {\n      font-size: 12px;\n      color: #666; }\n    .popup .mask > button {\n      display: block;\n      background: #8BC34A;\n      color: #fff;\n      width: 100%;\n      height: 30px;\n      border-radius: 2px;\n      margin-top: 4px; }\n      .popup .mask > button + button {\n        background: #ddd; }\n  .popup .btn_box {\n    overflow: hidden; }\n    .popup .btn_box button {\n      float: left;\n      width: 48%;\n      margin: 5px 1%;\n      height: 26px;\n      border-radius: 2px;\n      color: #fff;\n      font-size: 12px;\n      background: #8BC34A; }\n      .popup .btn_box button + button {\n        background: #ddd; }\n\n#alert, #confirm {\n  position: absolute;\n  width: 12rem;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -75%);\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n  padding: 10px; }\n  #alert button, #confirm button {\n    display: block;\n    margin-top: 10px;\n    width: 100%;\n    height: 30px;\n    font-size: 12px;\n    background: #a4d070;\n    color: #fff;\n    border-radius: 2px; }\n\n#confirm > button {\n  float: left;\n  width: 48%;\n  margin: 10px 1%; }\n  #confirm > button + button {\n    background: #e2e2e2; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	// common.js @Liupd
	module.exports = {
		_reset: function () {
			var el = document.documentElement,
			    cw = document.body.clientWidth,
			    fz = cw / 320 * 20;
			el.style.fontSize = fz + 'px';

			var ua = navigator.userAgent;
			if (!/iphone|mobile|android/ig.test(ua)) {
				alert('暂不支持PC访问，请使用手机浏览器扫描二维码打开或关注大象公众号『美团拼车』从手机端打开');
				// todo QRCode
				var wrapper = document.createElement('div');
				wrapper.className = 'popup';
				var img = document.createElement('img');
				img.id = 'QRCode';
				img.src = 'http://192.168.4.222/qrcode.png';
				img.style.position = 'absolute';
				img.style.left = '50%';
				img.style.top = '50%';
				img.style.webkitTransform = 'translate(-50%, -50%)';
				wrapper.appendChild(img);
				document.body.appendChild(wrapper);
			}
		},
		_ajax: function (type, url, data, callback) {
			var me = this;
			var data = data || {};
			var callback = callback || function () {};
			$.ajax({
				url: url,
				type: type,
				data: data,
				success: function (res) {
					console.log(res);
					me._loading()._remove();
					if (res.code == 0) {
						callback(res.data);
					} else {
						alert(res.msg);
					}
				},
				beforeSend: function () {
					me._loading()._create();
				}
			});
		},
		_loading: function () {
			return {
				_create: function () {
					var wrap = document.createElement('div');
					wrap.id = 'loading';
					wrap.style.position = 'fixed';
					wrap.style.left = '0';
					wrap.style.top = '0';
					wrap.style.right = '0';
					wrap.style.bottom = '0';
					wrap.style.zIndex = '999';
					wrap.style.background = 'rgba(255,255,255,0)';
					document.body.appendChild(wrap);
				},
				_remove: function () {
					document.getElementById('loading').remove();
				}
			};
		},
		_alert: function (msg, cb) {
			var popup = document.createElement('div');
			popup.className = 'popup';
			var alert = document.createElement('div');
			alert.id = 'alert';
			var p = document.createElement('p');
			p.innerHTML = msg;
			alert.appendChild(p);
			var btn = document.createElement('button');
			btn.innerHTML = 'OK';
			btn.onclick = function () {
				this.parentNode.parentNode.remove();
				cb && cb();
			};
			alert.appendChild(btn);

			popup.appendChild(alert);
			document.body.appendChild(popup);
		},
		_confirm: function (msg, cb, params) {
			var popup = document.createElement('div');
			popup.className = 'popup';
			var confirm = document.createElement('div');
			confirm.id = 'confirm';
			var p = document.createElement('p');
			p.innerHTML = msg;
			confirm.appendChild(p);
			// sure
			var sure = document.createElement('button');
			sure.innerHTML = '确认';
			sure.onclick = function () {
				this.parentNode.parentNode.remove();
				cb(params);
			};
			confirm.appendChild(sure);

			var cancel = document.createElement('button');
			cancel.innerHTML = '取消';
			cancel.onclick = function () {
				this.parentNode.parentNode.remove();
			};
			confirm.appendChild(cancel);

			popup.appendChild(confirm);
			document.body.appendChild(popup);
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);

	module.exports = {
		template: __webpack_require__(9),
		props: ['store'],
		data: function () {
			return {
				mapShow: false,
				condition: {
					end_pos: '',
					set_out_time: '',
					start_name: '望京研发园',
					end_name: '',
					has_car: false,
					n_limit: ''
				},
				timeList: [{ val: '', time: '不限' }, { val: '18001900', time: '18:00 - 19:00' }, { val: '19001930', time: '19:00 - 19:30' }, { val: '19302000', time: '19:30 - 20:00' }, { val: '20002100', time: '20:00 - 21:00' }, { val: '21002200', time: '21:00 - 22:00' }, { val: '22002400', time: '22:00 - 24:00' }]
			};
		},
		created: function () {},
		methods: {
			_map: function () {
				this.mapShow = true;
			},
			_start: function () {
				var vm = this;
				var data = this.condition;
				if (!data.set_out_time) {
					vm.store.utils._alert('请输入出发时间');
					return false;
				}
				if (!data.end_name) {
					vm.store.utils._alert('请输入目的地');
					return false;
				}

				var callback = function () {
					var cb = function () {
						location.href = '/app#user';
					};
					vm.store.utils._alert('发起拼车成功！', cb);
				};
				vm.store.utils._ajax('post', '/api/v1/order', data, callback);
			},
			_search: function () {
				var vm = this;
				var filter = vm.condition.end_name;
				var callback = function (res) {
					location.href = '/app#result';
					vm.$dispatch('_search', res, filter);
				};
				vm.store.utils._ajax('get', '/api/v1/order', { set_out_time: vm.condition.set_out_time, end_pos: vm.condition.end_pos }, callback);
			}
		},
		components: {
			amap: {
				data: function () {
					return {
						target: ''
					};
				},
				template: __webpack_require__(10),
				ready: function () {
					var vm = this;
					var map = new AMap.Map('aMapContainer', {
						center: new AMap.LngLat(116.498720, 40.008911),
						resizeEnable: true,
						zoom: 14
					});
					var autoOptions = {
						input: 'mapSearch'
					};
					var auto = new AMap.Autocomplete(autoOptions);
					var placeSearch = new AMap.PlaceSearch({
						map: map,
						pageSize: 2
					}); //构造地点查询类
					AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
					function select(e) {
						var pos = {
							x: e.poi.location.lat,
							y: e.poi.location.lng
						};
						vm.$parent.condition.end_pos = JSON.stringify(pos);
						placeSearch.setCity(e.poi.adcode);
						placeSearch.search(e.poi.name); //关键字查询查询
					}
				},
				methods: {
					_sure: function () {
						this.$parent.condition.end_name = $('#mapSearch').val();
						this.$parent.mapShow = false;
					},
					_cancel: function () {
						this.$parent.mapShow = false;
					}
				}
			}
		},
		filters: {
			time: function (value) {
				if (value.length) {
					return value.substr(0, 2) + ':' + value.substr(2, 2) + ' - ' + value.substr(4, 2) + ':' + value.substr(6, 2);
				}
			}
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./order.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./order.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".form {\n  position: relative;\n  width: 15rem;\n  margin: .5rem auto;\n  padding: 10px;\n  padding-bottom: 2rem;\n  overflow-y: scroll; }\n  .form > button {\n    display: block;\n    width: 100%;\n    height: 40px;\n    background: #FF9800;\n    color: #fff;\n    border-radius: 2px;\n    margin-top: 20px;\n    transition: background .2s ease; }\n    .form > button:active {\n      background: #e68900; }\n    .form > button + button {\n      background: #8BC34A;\n      margin-top: 5px; }\n      .form > button + button:active {\n        background: #7eb73d; }\n\n.form_item {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 40px;\n  background: #fff;\n  margin: 2px 0;\n  border: 1px solid #f1f1f1;\n  border-radius: 2px;\n  text-align: center; }\n  .form_item > input {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    line-height: 30px;\n    margin: 0 auto;\n    text-align: center;\n    border: none;\n    font-size: 14px;\n    z-index: 2; }\n  .form_item > select {\n    position: absolute;\n    width: 90%;\n    height: 90%;\n    left: 5%;\n    top: 5%;\n    border: none;\n    z-index: 1; }\n  .form_item > label {\n    display: block;\n    line-height: 36px;\n    color: #666; }\n    .form_item > label > input {\n      width: 20px;\n      vertical-align: 1px; }\n\n#more {\n  display: block;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 12px;\n  color: #aaaaaa; }\n\n#mapWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  background: #fff; }\n\n#aMapContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: #8BC34A; }\n\n#searchBar {\n  position: absolute;\n  width: 100%;\n  height: 40px;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  background: #fff;\n  padding: 5px; }\n  #searchBar > input {\n    height: 30px;\n    border-radius: 2px;\n    width: 8rem; }\n  #searchBar > button {\n    width: 3rem;\n    background: #8BC34A;\n    height: 30px;\n    color: #fff;\n    border-radius: 2px;\n    margin-left: 5px; }\n    #searchBar > button + button {\n      background: #d0d0d0; }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form\">\n\t<div class=\"form_item\">\n\t\t<input class=\"no_touch\" readonly :value=\"condition.set_out_time | time\" placeholder=\"出发时间(不填为不限)\">\n\t\t<select v-model=\"condition.set_out_time\">\n\t\t\t<option v-for=\"opt in timeList\" value=\"{{opt.val}}\">{{opt.time}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"form_item\">\n\t\t<input v-model=\"condition.end_name\" placeholder=\"目的地(不填为查全部,推荐不填)\" readonly @tap=\"_map\">\n\t</div>\n\t<div class=\"form_item\">\n\t\t<input disabled placeholder=\"出发地-望京研发园\">\n\t</div>\n\n\t<!-- <a id=\"more\" href=\"javascript:;\" @tap=\"_more\">更多选项</a> -->\n\t<p id=\"more\">- 若是发起拼车可选择以下更多选项 -</p>\n\t<div class=\"form_item\">\n\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"has_car\" v-model=\"condition.has_car\">\n\t\t\t<span>自己开车(即顺风车服务)</span>\n\t\t</label>\n\t</div>\n\t<div class=\"form_item\">\n\t\t<input type=\"tel\" v-model=\"condition.n_limit\" placeholder=\"拼车人数限定(默认4人)\">\n\t</div>\n\n\t<button @tap=\"_start\">发起拼车</button>\n\t<button @tap=\"_search\">寻找拼车</button>\n</div>\n<amap v-if=\"mapShow\"></amap>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div id=\"mapWrapper\">\n\t<div id=\"searchBar\">\n\t\t<input palceholder=\"输入地址\" id=\"mapSearch\" v-model=\"target\">\n\t\t<button @tap=\"_sure\">确定</button>\n\t\t<button @tap=\"_cancel\">取消</button>\n\t</div>\n\t<div id=\"aMapContainer\"></div>\n</div>";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);

	module.exports = {
		template: __webpack_require__(14),
		props: ['store', 'result'],
		data: function () {
			return {};
		},
		created: function () {
			var vm = this;
			if (!vm.result.length) {
				var callback = function (res) {
					location.href = '/app#result';
					vm.$dispatch('_search', res, '');
				};
				vm.store.utils._ajax('get', '/api/v1/order', {}, callback);
			}
		},
		methods: {
			_join: function (target) {
				var vm = this;
				var id = target.id;
				var misId = vm.store.misId;
				var n = target.users.length;
				if (n == target.n_limit) {
					vm.store.utils._alert('没有坑位啦>.<');
					return false;
				}
				for (var i = 0; i < n; i++) {
					if (misId == target.users[i].misId) {
						vm.store.utils._alert('您已经加入该拼车了~');
						return false;
					}
				}
				var cb = function () {
					var url = '/api/v1/order/' + id + '/join';
					var callback = function () {
						location.href = '/app#user';
					};
					vm.store.utils._ajax('put', url, {}, callback);
				};
				vm.store.utils._confirm('确认要拼着这一单么？', cb);
			}
		},
		filters: {
			time: function (value) {
				if (!value) {
					return '';
				}
				var value = value.toString();
				if (value.length) {
					return value.substr(0, 2) + ':' + value.substr(2, 2) + ' - ' + value.substr(4, 2) + ':' + value.substr(6, 2);
				}
			}
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./result.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./result.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#resultList .item {\n  height: 3rem; }\n  #resultList .item > button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 3rem;\n    height: 3rem;\n    background: #8BC34A;\n    color: #fff;\n    transition: background .2s ease; }\n    #resultList .item > button:active {\n      background: #7eb73d; }\n  #resultList .item .target {\n    font-size: 15px;\n    font-weight: 500;\n    height: 1.2rem; }\n  #resultList .item p {\n    font-weight: normal;\n    font-size: 12px;\n    height: .8rem;\n    color: #666; }\n  #resultList .item .time {\n    margin-right: 10px; }\n  #resultList .item .blue {\n    font-weight: bold;\n    color: #03A9F4; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<ul id=\"resultList\" class=\"list\">\n\t<template v-for=\"li in result\">\n\t\t<li class=\"item\" @click=\"_join(li)\">\n\t\t\t<div class=\"target\">{{li.end_name}} <small v-if=\"li.has_car == 1\" style=\"margin-left: 5px;color: #FF9800;\">顺风车 :D</small></div>\n\t\t\t<p>\n\t\t\t\t出发时间：<span class=\"time\">{{li.set_out_time | time}}</span>\n\t\t\t\t人数：<span class=\"blue\">{{li.users.length}}</span> / {{li.n_limit}} 人\n\t\t\t</p>\n\t\t\t<button>拼!</button>\n\t\t</li>\n\t</template>\n</ul>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);

	module.exports = {
		template: __webpack_require__(18),
		props: ['store'],
		data: function () {
			return {
				payShow: false,
				infoShow: false,
				orderShow: false,
				pay: {
					id: '',
					price: '',
					alipay: '',
					note: ''
				},
				payOrder: null,
				orders: []
			};
		},
		created: function () {
			var vm = this;
			var callback = function (res) {
				res.forEach(function (order) {
					order.handle = false;
				});
				vm.orders = res;
			};
			vm.store.utils._ajax('get', '/api/v1/user/order', { misId: vm.store.misId }, callback);
		},
		attached: function () {
			console.info('user center');
		},
		methods: {
			_handler: function (order) {
				order.handle = !order.handle;
			},
			_check: function (order) {
				// 查看订单信息
				this.payOrder = order;
				this.orderShow = true;
			},
			_quit: function (order) {
				// 取消订单
				var vm = this;
				var cb = function () {
					var callback = function () {
						vm.orders.$remove(order);
						order.handle = false;
					};
					vm.store.utils._ajax('put', '/api/v1/order/' + order.id + '/cancel', {}, callback);
				};
				vm.store.utils._confirm('确定要取消订单么？', cb);
			},
			_start: function (order) {
				// 开始行程 status 0 -> 1
				var vm = this;
				var cb = function () {
					var callback = function () {
						order.status = 1;
						order.handle = false;
					};
					vm.store.utils._ajax('put', '/api/v1/order/' + order.id, { status: 1 }, callback);
				};
				vm.store.utils._confirm('行程开始后其他用户将无法加入此单拼车，确认开始么？', cb);
			},
			_pay: function (order) {
				// 修改支付信息
				this.payShow = true;
				this.payOrder = order;
				this.pay.id = order.id;
			},
			_cancelPay: function () {
				// 取消修改
				this.payShow = false;
				this.payOrder.handle = false;
			},
			_surePay: function () {
				// 确认修改
				var vm = this;
				var id = vm.pay.id;
				var form = {
					status: 2,
					payer: vm.store.misId,
					price: vm.pay.price,
					alipay: vm.pay.alipay,
					note: vm.pay.note
				};
				if (!form.price || isNaN(form.price)) {
					vm.store.utils._alert('请输入正确付款金额');
					return false;
				}
				if (!form.alipay && !form.note) {
					vm.store.utils._alert('请至少留下一条信息 XD');
					return false;
				}
				var callback = function () {
					vm.payShow = false;
					// 更改对应订单信息
					vm.payOrder.handle = false;
					vm.payOrder.status = 2;
					vm.payOrder.payer = vm.store.misId;
					vm.payOrder.price = form.price;
					vm.payOrder.note = form.note;
				};
				vm.store.utils._ajax('put', '/api/v1/order/' + id, form, callback);
			},
			_info: function (order) {
				// 查看支付信息
				this.payOrder = order;
				this.infoShow = true;
			},
			_cancel: function (order) {
				order.handle = false;
			}
		},
		components: {
			payinfo: {
				props: ['order'],
				template: __webpack_require__(19),
				methods: {
					_cancel: function () {
						this.order.handle = false;
						this.$parent.infoShow = false;
					}
				}
			},
			orderinfo: {
				props: ['order'],
				template: __webpack_require__(20),
				methods: {
					_cancel: function () {
						this.order.handle = false;
						this.$parent.orderShow = false;
					},
					_chat: function () {
						location.href = '/app#chat?id=' + this.order.id;
						this.order.handle = false;
					}
				}
			}
		},
		filters: {
			status: function (value) {
				switch (value) {
					case 0:
						return 'finding';
						break;
					case 1:
						return 'doing';
						break;
					case 2:
						return 'payed';
						break;
					case 3:
						return 'done';
						break;
				}
			},
			time: function (value) {
				if (!value) {
					return '';
				}
				var value = value.toString();
				if (value.length) {
					return value.substr(0, 2) + ':' + value.substr(2, 2) + ' - ' + value.substr(4, 2) + ':' + value.substr(6, 2);
				}
			}
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n#orderList .item {\n  padding-bottom: 8px;\n  -webkit-animation: itemAni .3s ease both; }\n\n#orderList .order_target {\n  font-weight: 500;\n  margin-right: 15px; }\n\n#orderList .order_people {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 4px; }\n  #orderList .order_people > span {\n    margin-right: 4px;\n    color: #777; }\n\n#orderList .order_status {\n  position: absolute;\n  width: 80px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  color: #fff;\n  -webkit-transform: rotate(45deg);\n  right: -20px;\n  top: 10px; }\n  #orderList .order_status.finding {\n    background: #2196F3; }\n    #orderList .order_status.finding::before {\n      content: '\\7EC4\\961F\\4E2D'; }\n  #orderList .order_status.doing {\n    background: #8BC34A; }\n    #orderList .order_status.doing::before {\n      content: '\\8FDB\\884C\\4E2D'; }\n  #orderList .order_status.payed {\n    background: #FF9800; }\n    #orderList .order_status.payed::before {\n      content: '\\5B8C\\6210'; }\n  #orderList .order_status.done {\n    background: #F44336; }\n    #orderList .order_status.done::before {\n      content: '\\7ED3\\675F'; }\n\n.order_handle {\n  position: relative;\n  overflow: hidden;\n  padding-top: 8px; }\n  .order_handle::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #ddd;\n    -webkit-transform: scaleY(0.5);\n    left: 0;\n    top: 0; }\n  .order_handle .bold {\n    font-weight: bold; }\n  .order_handle > button {\n    position: relative;\n    float: left;\n    height: 20px;\n    font-size: 12px;\n    color: #888;\n    transition: background .2s ease; }\n    .order_handle > button + button::before {\n      content: '';\n      position: absolute;\n      width: 1px;\n      height: 100%;\n      background: #ddd;\n      -webkit-transform: scaleX(0.5);\n      left: 0;\n      top: 0; }\n    .order_handle > button:active {\n      background: #f7f7f7; }\n  .order_handle .btn_big {\n    width: 100%; }\n  .order_handle .btn_mid {\n    width: 50%; }\n  .order_handle .btn_sm {\n    width: 33.33333%; }\n\n@-webkit-keyframes itemAni {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<ul id=\"orderList\" class=\"list\">\n\t<li v-for=\"order in orders\" :class=\"order.status | status\" class=\"item\" :style=\"{animationDelay: $index * 0.1 + 's'}\">\n\t\t<div @tap=\"_handler(order)\">\n\t\t\t<small class=\"order_status\" :class=\"order.status | status\">\n\t\t\t\t<!-- {{order.status | status}} -->\n\t\t\t</small>\n\t\t\t<p>\n\t\t\t\t<span class=\"order_target\">{{order.end_name}}</span>\n\t\t\t\t<small class=\"order_time\">{{order.set_out_time | time}}</small>\n\t\t\t</p>\n\t\t\t<p class=\"order_people\">\n\t\t\t\t<span>小伙伴:</span>\n\t\t\t\t<span v-for=\"u in order.users\">{{u.misId}}</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div v-if=\"order.status == 0\" class=\"order_handle\" v-show=\"order.handle\">\n\t\t\t<button class=\"btn_sm\" @tap=\"_check(order)\">查看详情</button>\n\t\t\t<button class=\"btn_sm\" @tap=\"_quit(order)\">取消拼车</button>\n\t\t\t<button class=\"btn_sm bold\" @tap=\"_start(order)\">开始行程</button>\n\t\t</div>\n\t\t<div v-if=\"order.status == 1\" class=\"order_handle\" v-show=\"order.handle\">\n\t\t\t<button class=\"btn_big\" @tap=\"_pay(order)\">我出的打车费！</button>\n\t\t</div>\n\t\t<div v-if=\"order.status == 2\" class=\"order_handle\" v-show=\"order.handle\">\n\t\t\t<button class=\"btn_mid\" @tap=\"_info(order)\">查看付款信息</button>\n\t\t\t<button class=\"btn_mid\" @tap=\"_pay(order)\">更改付款信息</button>\n\t\t</div>\n\t</li>\n</ul>\n<div class=\"popup\" v-if=\"payShow\">\n\t<div class=\"mask\">\n\t\t<p>请输入您的付款金额以及支付宝或其他支付方式账号，提交后其他拼车小伙伴将会收到系统推送通知付款信息。</p>\n\t\t<label>\n\t\t\t<span>付款金额:</span>\n\t\t\t<input type=\"tel\" v-model=\"pay.price\">\n\t\t</label>\n\t\t<label>\n\t\t\t<span>支付宝:</span>\n\t\t\t<input type=\"text\" v-model=\"pay.alipay\">\n\t\t</label>\n\t\t<label>\n\t\t\t<span>备注</span>\n\t\t\t<textarea v-model=\"pay.note\" placeholder=\"若不通过支付宝方式，请在备注中留下其他支付方式以供他人付款\"></textarea>\n\t\t</label>\n\t\t<div class=\"btn_box\">\n\t\t\t<button @tap=\"_surePay\">确定</button>\n\t\t\t<button @tap=\"_cancelPay\">取消</button>\n\t\t</div>\n\t</div>\n</div>\n<payinfo v-if=\"infoShow\" :order=\"payOrder\"></payinfo>\n<orderinfo v-if=\"orderShow\" :order=\"payOrder\"></orderinfo>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"popup\">\n\t<div class=\"mask\">\n\t\t<h4><span>付款人：</span><span>{{order.payer}}</span></h4>\n\t\t<h4><span>总金额：</span><span>{{order.price}}元</span></h4>\n\t\t<h4><span>支付宝：</span><span>{{order.alipay}}</span></h4>\n\t\t<h4><span>备注：</span><span>{{order.note}}</span></h4>\n\t\t<small>如果认为订单支付信息有误可以点击<b>更改支付信息</b></small>\n\t\t<button @tap=\"_cancel\">知道了</button>\n\t</div>\n</div>";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"popup\">\n\t<div class=\"mask\">\n\t\t<p>小伙伴们的联系方式：</p>\n\t\t<h4 v-for=\"u in order.users\">\n\t\t\t<span>{{u.name}}: </span><span>{{u.phone}}</span>\n\t\t</h4>\n\t\t<button @tap=\"_chat\">进入聊天室</button>\n\t\t<button @tap=\"_cancel\">取消</button>\n\t</div>\n</div>";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);

	module.exports = {
		template: __webpack_require__(24),
		props: ['store'],
		data: function () {
			return {
				chatId: '',
				chatList: [],
				content: '',
				lock: false
			};
		},
		ready: function () {
			var vm = this;
			var id = location.href.split('?')[1].match(/\d+/)[0];
			vm.chatId = id;
			var callback = function (res) {
				vm.chatList = res;
				vm._scroll();

				window.mt_t = setInterval(function () {
					var cb = function (res) {
						var n = res.data.length;
						if (n > 0) {
							for (var i = 0; i < n; i++) {
								vm.chatList.push(res.data[i]);
							}
						} else {
							return false;
						}
						vm._scroll();
					};
					var start = vm.chatList.length > 0 ? vm.chatList[vm.chatList.length - 1].id : 0;
					$.get('/api/v1/chat/new?chat_room_id=' + id, { start_id: start }, cb);
				}, 3000);
			};
			vm.store.utils._ajax('get', '/api/v1/chat?chat_room_id=' + id, {}, callback);
		},
		methods: {
			_send: function () {
				var vm = this;
				if (!vm.content.trim()) {
					return false;
				}
				var data = {
					chat_room_id: vm.chatId,
					msg: vm.content
				};
				var callback = function (res) {
					vm.chatList.push(res);
					vm.content = '';
					vm._scroll();
				};
				vm.store.utils._ajax('post', '/api/v1/chat', data, callback);
			},
			_back: function () {
				window.history.back();
			},
			_scroll: function () {
				var vm = this;
				var h = vm.chatList.length * 60;
				var bh = document.body.clientHeight;
				var xh = h - (bh - 50);
				setTimeout(function () {
					document.getElementById('chatBox').scrollTop = xh;
				}, 200);
			}
		}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./chat.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./chat.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#chatBox {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  padding-bottom: 50px;\n  background: #fff; }\n  #chatBox ul::after {\n    content: '';\n    display: block;\n    clear: both; }\n  #chatBox .chat_item {\n    float: left;\n    clear: both;\n    margin: 10px 10px 0;\n    text-align: left;\n    height: 50px; }\n    #chatBox .chat_item > small {\n      float: left;\n      clear: both;\n      color: #666;\n      margin-bottom: 5px; }\n    #chatBox .chat_item > span {\n      position: relative;\n      float: left;\n      margin-left: 2px;\n      clear: both;\n      background: #FF9800;\n      color: #fff;\n      padding: 2px 8px;\n      border-radius: 2px; }\n      #chatBox .chat_item > span::before {\n        content: '';\n        position: absolute;\n        border-left: 6px solid #FF9800;\n        border-top: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid transparent;\n        left: 0;\n        top: -6px; }\n  #chatBox .chat_item.self {\n    float: right;\n    text-align: right; }\n    #chatBox .chat_item.self > span {\n      float: right;\n      background: #8BC34A;\n      margin-right: 2px; }\n      #chatBox .chat_item.self > span::before {\n        border-left: 6px solid transparent;\n        border-top: 6px solid transparent;\n        border-right: 6px solid #8BC34A;\n        border-bottom: 6px solid transparent;\n        right: 0;\n        top: -6px;\n        left: auto; }\n\n#chatTool {\n  position: fixed;\n  width: 100%;\n  height: 40px;\n  padding: 4px;\n  left: 0;\n  bottom: 0;\n  background: #fcfcfc; }\n  #chatTool::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    left: 0;\n    top: 0;\n    -webkit-transform: scaleY(0.5);\n    background: #ddd; }\n  #chatTool .back,\n  #chatTool .send {\n    float: left;\n    width: 3rem;\n    height: 1.6rem;\n    border-radius: 2px;\n    color: #fff;\n    background: #2196F3; }\n  #chatTool .back {\n    background: #82c4f8; }\n  #chatTool .input {\n    float: left;\n    width: 9rem;\n    height: 1.6rem;\n    margin: 0 .25rem;\n    border: 1px solid #ddd;\n    padding: 4px;\n    overflow: hidden;\n    background: #fff;\n    border-radius: 4px; }\n    #chatTool .input > textarea {\n      width: 100%;\n      height: 100%;\n      resize: none;\n      border: none;\n      background: #fff; }\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div id=\"chatBox\">\n\t<ul id=\"chatList\">\n\t\t<li class=\"chat_item\" v-for=\"li in chatList\" :class=\"li.is_me == 1 ? 'self' : ''\">\n\t\t\t<small class=\"avatar\">{{li.sender_mis_id}}</small>\n\t\t\t<span class=\"content\">{{li.msg}}</span>\n\t\t</li>\n\t</ul>\n</div>\n<div id=\"chatTool\">\n\t<button class=\"back\" @tap=\"_back\">返回</button>\n\t<div class=\"input\">\n\t\t<textarea v-model=\"content\"></textarea>\n\t</div>\n\t<button class=\"send\" @tap=\"_send\">发送</button>\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);

	module.exports = {
		template: __webpack_require__(28),
		props: ['store'],
		data: function () {
			return {
				show: false
			};
		},
		created: function () {
			var hash = location.hash;
			if (/chat/.test(hash)) {
				this.hasMenu = false;
			}
		},
		methods: {
			_toggleMenu: function () {
				this.show = !this.show;
			},
			_home: function () {
				location.href = '/app#home';
				this.show = false;
			},
			_user: function () {
				location.href = '/app#user';
				this.show = false;
			}
		}
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#menuBtn {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  right: 20px;\n  bottom: 20px;\n  background: #8BC34A;\n  color: #fff;\n  border-radius: 100%;\n  opacity: .85;\n  box-shadow: 0 0 10px rgba(139, 195, 74, 0.5);\n  z-index: 7; }\n\n#menu {\n  position: fixed;\n  height: 100%;\n  width: 8rem;\n  right: 0;\n  top: 0;\n  background: #a4d070;\n  z-index: 9;\n  -webkit-transform: translateX(100%);\n  transition: -webkit-transform .4s ease; }\n  #menu.show {\n    -webkit-transform: translateX(0);\n    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15); }\n  #menu .logo {\n    padding: 15px 0;\n    font-size: 16px;\n    text-align: center;\n    color: #fff;\n    border-bottom: 1px solid #8BC34A; }\n  #menu li {\n    padding: 10px;\n    font-size: 13px;\n    text-align: center;\n    color: #fdfdfd;\n    border-bottom: 1px solid #8BC34A; }\n\n#menuBg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.25);\n  z-index: 8;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .4s ease; }\n  #menuBg.show {\n    visibility: visible;\n    opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<!-- menu -->\n<button id=\"menuBtn\" @tap=\"_toggleMenu\">菜单</button>\n<aside id=\"menu\" :class=\"show ? 'show' : ''\">\n\t<h4 class=\"logo\">\n\t\t<p>你好, {{store.uname}}</p>\n\t\t<p>欢迎使用</p>\n\t\t<p>MT-Pin</p>\n\t</h4>\n\t<ul>\n\t\t<li @tap=\"_home\">下单拼车</li>\n\t\t<li @tap=\"_user\">个人中心</li>\n\t\t<li @tap=\"_toggleMenu\">收起菜单</li>\n\t</ul>\n</aside>\n<div id=\"menuBg\" :class=\"show ? 'show' : ''\" @tap=\"_toggleMenu\"></div>";

/***/ }
/******/ ]);