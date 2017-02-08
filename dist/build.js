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

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	__webpack_require__(3);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _vueRouter = __webpack_require__(24);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _myCourse = __webpack_require__(14);

	var _myCourse2 = _interopRequireDefault(_myCourse);

	var _collect = __webpack_require__(25);

	var _collect2 = _interopRequireDefault(_collect);

	var _allLesson = __webpack_require__(27);

	var _allLesson2 = _interopRequireDefault(_allLesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//使用路由插件
	_vue2.default.use(_vueRouter2.default);

	//引入子组件 

	//引用路由插件


	var routes = [{ path: '/', component: _myCourse2.default }, { path: '/collect/', component: _collect2.default }, { path: '/allLesson/', component: _allLesson2.default }];

	//使用路由规则
	var router = new _vueRouter2.default({
	    routes: routes
	});

	new _vue2.default({
	    router: router,
	    el: "#app",
	    render: function render(create) {
	        return create(_App2.default);
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.1.10
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _toString(val) {
	  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber(val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n;
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap(str, expectsLowerCase) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase ? function (val) {
	    return map[val.toLowerCase()];
	  } : function (val) {
	    return map[val];
	  };
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive(value) {
	  return typeof value === 'string' || typeof value === 'number';
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) {
	    return c ? c.toUpperCase() : '';
	  });
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1(fn, ctx) {
	  function boundFn(a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn;
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 */
	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject(arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res;
	}

	/**
	 * Perform no operation.
	 */
	function noop() {}

	/**
	 * Always return false.
	 */
	var no = function no() {
	  return false;
	};

	/**
	 * Return same value
	 */
	var identity = function identity(_) {
	  return _;
	};

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys(modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || []);
	  }, []).join(',');
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual(a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b);
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b);
	  } else {
	    return false;
	  }
	}

	function looseIndexOf(arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: ['component', 'directive', 'filter'],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Define a property.
	 */
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath(path) {
	  if (bailRE.test(path)) {
	    return;
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) {
	          return;
	        }
	        obj = obj[segments[i]];
	      }
	      return obj;
	    };
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function isServerRendering() {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer;
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function logError(err) {
	      console.error(err);
	    };
	    timerFunc = function timerFunc() {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) {
	        setTimeout(noop);
	      }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
	  // PhantomJS and iOS 7.x
	  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function timerFunc() {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function timerFunc() {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick(cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) {
	        cb.call(ctx);
	      }
	      if (_resolve) {
	        _resolve(ctx);
	      }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      });
	    }
	  };
	}();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    function Set() {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has(key) {
	      return this.set[key] === true;
	    };
	    Set.prototype.add = function add(key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear() {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }();
	}

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function warn(msg, vm) {
	    if (hasConsole && !config.silent) {
	      console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
	    }
	  };

	  formatComponentName = function formatComponentName(vm) {
	    if (vm.$root === vm) {
	      return 'root instance';
	    }
	    var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
	    return (name ? "component <" + name + ">" : "anonymous component") + (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : '');
	  };

	  var formatLocation = function formatLocation(str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return "\n(found in " + str + ")";
	  };
	}

	/*  */

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub(sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub(sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend() {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify() {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget(_target) {
	  if (Dep.target) {
	    targetStack.push(Dep.target);
	  }
	  Dep.target = _target;
	}

	function popTarget() {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) {
	      ob.observeArray(inserted);
	    }
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk(obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray(items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe(value, asRootData) {
	  if (!isObject(value)) {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1(obj, key, val, customSetter) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || newVal !== newVal && value !== value) {
	        return;
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1(obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val;
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || ob && ob.vmCount) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
	    return;
	  }
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del(obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || ob && ob.vmCount) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
	    return;
	  }
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray(value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
	    }
	    return defaultStrat(parent, child);
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData(to, from) {
	  if (!from) {
	    return to;
	  }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook(parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, childVal) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) {
	    return parentVal;
	  }
	  if (!parentVal) {
	    return childVal;
	  }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) {
	    return parentVal;
	  }
	  if (!parentVal) {
	    return childVal;
	  }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Validate component names
	 */
	function checkComponents(options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps(options) {
	  var props = options.props;
	  if (!props) {
	    return;
	  }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val) ? val : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives(options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions(parent, child, vm) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$2) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) {
	    return assets[id];
	  }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) {
	    return assets[camelizedId];
	  }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) {
	    return assets[PascalCaseId];
	  }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	/*  */

	function validateProp(key, propOptions, propsData, vm) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value;
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue(vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined;
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm[key] !== undefined) {
	    return vm[key];
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp(prop, name, value, vm, absent) {
	  if (prop.required && absent) {
	    warn('Missing required prop: "' + name + '"', vm);
	    return;
	  }
	  if (value == null && !prop.required) {
	    return;
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
	    return;
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType(value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType(fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1];
	}

	function isType(type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type);
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true;
	    }
	  }
	  /* istanbul ignore next */
	  return false;
	}

	var util = Object.freeze({
	  defineReactive: defineReactive$$1,
	  _toString: _toString,
	  toNumber: toNumber,
	  makeMap: makeMap,
	  isBuiltInTag: isBuiltInTag,
	  remove: remove$1,
	  hasOwn: hasOwn,
	  isPrimitive: isPrimitive,
	  cached: cached,
	  camelize: camelize,
	  capitalize: capitalize,
	  hyphenate: hyphenate,
	  bind: bind$1,
	  toArray: toArray,
	  extend: extend,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  toObject: toObject,
	  noop: noop,
	  no: no,
	  identity: identity,
	  genStaticKeys: genStaticKeys,
	  looseEqual: looseEqual,
	  looseIndexOf: looseIndexOf,
	  isReserved: isReserved,
	  def: def,
	  parsePath: parsePath,
	  hasProto: hasProto,
	  inBrowser: inBrowser,
	  UA: UA,
	  isIE: isIE,
	  isIE9: isIE9,
	  isEdge: isEdge,
	  isAndroid: isAndroid,
	  isIOS: isIOS,
	  isServerRendering: isServerRendering,
	  devtools: devtools,
	  nextTick: nextTick,
	  get _Set() {
	    return _Set;
	  },
	  mergeOptions: mergeOptions,
	  resolveAsset: resolveAsset,
	  get warn() {
	    return warn;
	  },
	  get formatComponentName() {
	    return formatComponentName;
	  },
	  validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function warnNonPresent(target, key) {
	    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
	  };

	  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set(target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
	          return false;
	        } else {
	          target[key] = value;
	          return true;
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has(target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed;
	    }
	  };

	  var getHandler = {
	    get: function get(target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key];
	    }
	  };

	  initProxy = function initProxy(vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var prototypeAccessors = { child: {} };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance;
	};

	Object.defineProperties(VNode.prototype, prototypeAccessors);

	var createEmptyVNode = function createEmptyVNode() {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node;
	};

	function createTextVNode(val) {
	  return new VNode(undefined, undefined, undefined, String(val));
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode) {
	  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned;
	}

	function cloneVNodes(vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res;
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent(Ctor, data, context, children, tag) {
	  if (!Ctor) {
	    return;
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn("Invalid Component definition: " + String(Ctor), context);
	    }
	    return;
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return;
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children);
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
	  return vnode;
	}

	function createFunctionalComponent(Ctor, propsData, data, context, children) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function h(a, b, c, d) {
	    return createElement(_context, a, b, c, d, true);
	  };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function slots() {
	      return resolveSlots(children, context);
	    }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode;
	}

	function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
	parent, // activeInstance in lifecycle state
	parentElm, refElm) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options);
	}

	function init(vnode, hydrating, parentElm, refElm) {
	  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
	    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch(oldVnode, vnode) {
	  var options = vnode.componentOptions;
	  var child = vnode.componentInstance = oldVnode.componentInstance;
	  child._updateFromParent(options.propsData, // updated props
	  options.listeners, // updated listeners
	  vnode, // new parent vnode
	  options.children // new children
	  );
	}

	function insert(vnode) {
	  if (!vnode.componentInstance._isMounted) {
	    vnode.componentInstance._isMounted = true;
	    callHook(vnode.componentInstance, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.componentInstance._inactive = false;
	    callHook(vnode.componentInstance, 'activated');
	  }
	}

	function destroy$1(vnode) {
	  if (!vnode.componentInstance._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.componentInstance.$destroy();
	    } else {
	      vnode.componentInstance._inactive = true;
	      callHook(vnode.componentInstance, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent(factory, baseCtor, cb) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function resolve(res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function reject(reason) {
	      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved;
	  }
	}

	function extractProps(data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return;
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res;
	}

	function checkProp(res, hash, key, altKey, preserve) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true;
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true;
	    }
	  }
	  return false;
	}

	function mergeHooks(data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1(one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  };
	}

	/*  */

	function mergeVNodeHook(def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var once = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once,
	    capture: capture
	  };
	});

	function createEventHandle(fn) {
	  var handle = {
	    fn: fn,
	    invoker: function invoker() {
	      var arguments$1 = arguments;

	      var fn = handle.fn;
	      if (Array.isArray(fn)) {
	        for (var i = 0; i < fn.length; i++) {
	          fn[i].apply(null, arguments$1);
	        }
	      } else {
	        fn.apply(null, arguments);
	      }
	    }
	  };
	  return handle;
	}

	function updateListeners(on, oldOn, add, remove$$1, vm) {
	  var name, cur, old, event;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
	    } else if (!old) {
	      if (!cur.invoker) {
	        cur = on[name] = createEventHandle(cur);
	      }
	      add(event.name, cur.invoker, event.once, event.capture);
	    } else if (cur !== old) {
	      old.fn = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name].invoker, event.capture);
	    }
	  }
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// nomralization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren(children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children);
	    }
	  }
	  return children;
	}

	// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren(children) {
	  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
	}

	function normalizeArrayChildren(children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') {
	      continue;
	    }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res;
	}

	/*  */

	function getFirstComponentChild(children) {
	  return children && children.filter(function (c) {
	    return c && c.componentOptions;
	  })[0];
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType);
	}

	function _createElement(context, tag, data, children, normalizationType) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
	    return createEmptyVNode();
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode();
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) && typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
	    } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(tag, data, children, undefined, undefined, context);
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) {
	      applyNS(vnode, ns);
	    }
	    return vnode;
	  } else {
	    return createEmptyVNode();
	  }
	}

	function applyNS(vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return;
	  }
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}

	/*  */

	function initRender(vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) {
	    return createElement(vm, a, b, c, d, false);
	  };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) {
	    return createElement(vm, a, b, c, d, true);
	  };
	}

	function renderMixin(Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this);
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn("Error when rendering " + formatComponentName(vm) + ":");
	        }
	        throw e;
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode;
	  };

	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic(index, isInFor) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, "__static__" + index, false);
	    return tree;
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce(tree, index, key) {
	    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
	    return tree;
	  };

	  function markStatic(tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], key + "_" + i, isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode(node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter(id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity;
	  };

	  // render v-for
	  Vue.prototype._l = function renderList(val, render) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val) || typeof val === 'string') {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret;
	  };

	  // renderSlot
	  Vue.prototype._t = function (name, fallback, props, bindObject) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) {
	      // scoped slot
	      props = props || {};
	      if (bindObject) {
	        extend(props, bindObject);
	      }
	      return scopedSlotFn(props) || fallback;
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback;
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps(data, tag, value, asProp) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var type = data.attrs && data.attrs.type;
	            var hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data;
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes(eventKeyCode, key, builtInAlias) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1;
	    } else {
	      return keyCodes !== eventKeyCode;
	    }
	  };
	}

	function resolveSlots(children, context) {
	  var slots = {};
	  if (!children) {
	    return slots;
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
	      var slot = slots[name] || (slots[name] = []);
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
	    slots.default = defaultSlot;
	  }
	  return slots;
	}

	/*  */

	function initEvents(vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add$1(event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$2(event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners(vm, listeners, oldListeners) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	}

	function eventsMixin(Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    // optimize hook:event cost by using a boolean flag marked at registration
	    // instead of a hash lookup
	    if (hookRE.test(event)) {
	      vm._hasHookEvent = true;
	    }
	    return vm;
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on() {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm;
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm;
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm;
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return vm;
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm;
	  };
	}

	/*  */

	var activeInstance = null;

	function initLifecycle(vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin(Vue) {
	  Vue.prototype._mount = function (el, hydrating) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
	        } else {
	          warn('Failed to mount component: template or render function not defined.', vm);
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function updateComponent() {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm;
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
	      , vm.$options._parentElm, vm.$options._refElm);
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };

	  Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) {
	      // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      updateComponentListeners(vm, listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return;
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook(vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}

	/*  */

	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState() {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue() {
	  flushing = true;
	  var watcher, id, vm;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) {
	    return a.id - b.id;
	  });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
	        break;
	      }
	    }
	  }

	  // call updated hooks
	  index = queue.length;
	  while (index--) {
	    watcher = queue[index];
	    vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher(watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher(vm, expOrFn, cb, options) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get() {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value;
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep(dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps() {
	  var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update() {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run() {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated.
	    isObject(value) || this.deep) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            process.env.NODE_ENV !== 'production' && warn("Error in watcher \"" + this.expression + "\"", this.vm);
	            throw e;
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate() {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend() {
	  var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown() {
	  var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse(val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse(val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
	    return;
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return;
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) {
	      _traverse(val[i], seen);
	    }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      _traverse(val[keys[i]], seen);
	    }
	  }
	}

	/*  */

	function initState(vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) {
	    initProps(vm, opts.props);
	  }
	  if (opts.methods) {
	    initMethods(vm, opts.methods);
	  }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) {
	    initComputed(vm, opts.computed);
	  }
	  if (opts.watch) {
	    initWatch(vm, opts.watch);
	  }
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps(vm, props) {
	  var propsData = vm.$options.propsData || {};
	  var keys = vm.$options._propKeys = Object.keys(props);
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function loop(i) {
	    var key = keys[i];
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      if (isReservedProp[key]) {
	        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
	      }
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
	        }
	      });
	    } else {
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	    }
	  };

	  for (var i = 0; i < keys.length; i++) {
	    loop(i);
	  }observerState.shouldConvert = true;
	}

	function initData(vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed(vm, computed) {
	  for (var key in computed) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && key in vm) {
	      warn("existing instance property \"" + key + "\" will be " + "overwritten by a computed property with the same name.", vm);
	    }
	    var userDef = computed[key];
	    if (typeof userDef === 'function') {
	      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	      computedSharedDefinition.set = noop;
	    } else {
	      computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind$1(userDef.get, vm) : noop;
	      computedSharedDefinition.set = userDef.set ? bind$1(userDef.set, vm) : noop;
	    }
	    Object.defineProperty(vm, key, computedSharedDefinition);
	  }
	}

	function makeComputedGetter(getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}

	function initMethods(vm, methods) {
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	    if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	      warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
	    }
	  }
	}

	function initWatch(vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher(vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin(Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data;
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	}

	function proxy(vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var uid = 0;

	function initMixin(Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}

	function initInternalComponent(vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions(Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options;
	}

	function Vue$2(options) {
	  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$2)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);

	/*  */

	function initUse(Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	}

	/*  */

	function initMixin$1(Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend(Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId];
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
	      }
	    }
	    var Sub = function VueComponent(options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub;
	  };
	}

	/*  */

	function initAssetRegisters(Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function getComponentName(opts) {
	  return opts && (opts.Ctor.options.name || opts.tag);
	}

	function matches(pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1;
	  } else {
	    return pattern.test(name);
	  }
	}

	function pruneCache(cache, filter) {
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cachedNode);
	        cache[key] = null;
	      }
	    }
	  }
	}

	function pruneCacheEntry(vnode) {
	  if (vnode) {
	    if (!vnode.componentInstance._inactive) {
	      callHook(vnode.componentInstance, 'deactivated');
	    }
	    vnode.componentInstance.$destroy();
	  }
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,

	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },

	  created: function created() {
	    this.cache = Object.create(null);
	  },

	  destroyed: function destroyed() {
	    var this$1 = this;

	    for (var key in this.cache) {
	      pruneCacheEntry(this$1.cache[key]);
	    }
	  },

	  watch: {
	    include: function include(val) {
	      pruneCache(this.cache, function (name) {
	        return matches(val, name);
	      });
	    },
	    exclude: function exclude(val) {
	      pruneCache(this.cache, function (name) {
	        return !matches(val, name);
	      });
	    }
	  },

	  render: function render() {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
	        return vnode;
	      }
	      var key = vnode.key == null
	      // same constructor may get registered as different local components
	      // so cid alone is not enough (#3269)
	      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
	      if (this.cache[key]) {
	        vnode.componentInstance = this.cache[key].componentInstance;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode;
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI(Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () {
	    return config;
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn('Do not replace the Vue.config object, set individual fields instead.');
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$2);

	Object.defineProperty(Vue$2.prototype, '$isServer', {
	  get: isServerRendering
	});

	Vue$2.version = '2.1.10';

	/*  */

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function mustUseProp(tag, type, attr) {
	  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function isXlink(name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
	};

	var getXlinkProp = function getXlinkProp(name) {
	  return isXlink(name) ? name.slice(6, name.length) : '';
	};

	var isFalsyAttrValue = function isFalsyAttrValue(val) {
	  return val == null || val === false;
	};

	/*  */

	function genClassForVnode(vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.componentInstance) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (parentNode = parentNode.parent) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data);
	}

	function mergeClassData(child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class ? [child.class, parent.class] : parent.class
	  };
	}

	function genClassFromData(data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass));
	  }
	  /* istanbul ignore next */
	  return '';
	}

	function concat(a, b) {
	  return a ? b ? a + ' ' + b : a : b || '';
	}

	function stringifyClass(value) {
	  var res = '';
	  if (!value) {
	    return res;
	  }
	  if (typeof value === 'string') {
	    return value;
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if (stringified = stringifyClass(value[i])) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1);
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) {
	        res += key + ' ';
	      }
	    }
	    return res.slice(0, -1);
	  }
	  /* istanbul ignore next */
	  return res;
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' + 'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

	var isReservedTag = function isReservedTag(tag) {
	  return isHTMLTag(tag) || isSVG(tag);
	};

	function getTagNamespace(tag) {
	  if (isSVG(tag)) {
	    return 'svg';
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math';
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement(tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true;
	  }
	  if (isReservedTag(tag)) {
	    return false;
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag];
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	  } else {
	    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	      return document.createElement('div');
	    }
	  }
	  return el;
	}

	/*  */

	function createElement$1(tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm;
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm;
	}

	function createElementNS(namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName);
	}

	function createTextNode(text) {
	  return document.createTextNode(text);
	}

	function createComment(text) {
	  return document.createComment(text);
	}

	function insertBefore(parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild(node, child) {
	  node.removeChild(child);
	}

	function appendChild(node, child) {
	  node.appendChild(child);
	}

	function parentNode(node) {
	  return node.parentNode;
	}

	function nextSibling(node) {
	  return node.nextSibling;
	}

	function tagName(node) {
	  return node.tagName;
	}

	function setTextContent(node, text) {
	  node.textContent = text;
	}

	function setAttribute(node, key, val) {
	  node.setAttribute(key, val);
	}

	var nodeOps = Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create(_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update(oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy(vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef(vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) {
	    return;
	  }

	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef(s) {
	  return s == null;
	}

	function isDef(s) {
	  return s != null;
	}

	function sameVnode(vnode1, vnode2) {
	  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
	}

	function createKeyToOldIdx(children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) {
	      map[key] = i;
	    }
	  }
	  return map;
	}

	function createPatchFunction(backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) {
	        cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
	      }
	    }
	  }

	  function emptyNodeAt(elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
	  }

	  function createRmCb(childElm, listeners) {
	    function remove$$1() {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1;
	  }

	  function removeNode(el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return;
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
	        }
	      }
	      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true;
	      }
	    }
	  }

	  function initComponent(vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break;
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert(parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren(vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable(vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag);
	  }

	  function invokeCreateHooks(vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) {
	        i.create(emptyNode, vnode);
	      }
	      if (i.insert) {
	        insertedVnodeQueue.push(vnode);
	      }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope(vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook(vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
	        i(vnode);
	      }
	      for (i = 0; i < cbs.destroy.length; ++i) {
	        cbs.destroy[i](vnode);
	      }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else {
	          // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook(vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) {
	        // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) {
	        // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) {
	          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	        }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) {
	          // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return;
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.componentInstance = oldVnode.componentInstance;
	      return;
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) {
	        cbs.update[i](oldVnode, vnode);
	      }
	      if (isDef(i = data.hook) && isDef(i = i.update)) {
	        i(oldVnode, vnode);
	      }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) {
	          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
	        }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) {
	          nodeOps.setTextContent(elm, '');
	        }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
	        i(oldVnode, vnode);
	      }
	    }
	  }

	  function invokeInsertHook(vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate(elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false;
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) {
	        i(vnode, true /* hydrating */);
	      }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true;
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break;
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false;
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break;
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true;
	  }

	  function assertNodeMatch(node, vnode) {
	    if (vnode.tag) {
	      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3);
	    }
	  }

	  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) {
	        invokeDestroyHook(oldVnode);
	      }
	      return;
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode;
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	        createElm(vnode, insertedVnodeQueue,
	        // extremely rare edge case: do not insert if old element is in a
	        // leaving transition. Only happens when combining transition +
	        // keep-alive + HOCs. (#4590)
	        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parentElm$1 !== null) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm;
	  };
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives(vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives(oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update(oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function callInsert() {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1(dirs, vm) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res;
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res;
	}

	function getRawDirName(dir) {
	  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
	}

	function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}

	var baseModules = [ref, directives];

	/*  */

	function updateAttrs(oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return;
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr(el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass(oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
	    return;
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	var target$1;

	function add$2(event, _handler, once, capture) {
	  if (once) {
	    var oldHandler = _handler;
	    var _target = target$1; // save current target element in closure
	    _handler = function handler(ev) {
	      remove$3(event, _handler, capture, _target);
	      arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
	    };
	  }
	  target$1.addEventListener(event, _handler, capture);
	}

	function remove$3(event, handler, capture, _target) {
	  (_target || target$1).removeEventListener(event, handler, capture);
	}

	function updateDOMListeners(oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return;
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  updateListeners(on, oldOn, add$2, remove$3, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps(oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return;
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) {
	        vnode.children.length = 0;
	      }
	      if (cur === oldProps[key]) {
	        continue;
	      }
	    }

	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (shouldUpdateValue(elm, vnode, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue(elm, vnode, checkVal) {
	  return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(vnode, checkVal));
	}

	function isDirty(elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	  return document.activeElement !== elm && elm.value !== checkVal;
	}

	function isInputChanged(vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if (modifiers && modifiers.number || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal);
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim();
	  }
	  return value !== newVal;
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res;
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData(data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle ? extend(data.staticStyle, style) : style;
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding(bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle);
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle);
	  }
	  return bindingStyle;
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle(vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if (styleData = normalizeStyleData(vnode.data)) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while (parentNode = parentNode.parent) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res;
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function setProp(el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && prop in testEl.style) {
	    return prop;
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed;
	    }
	  }
	});

	function updateStyle(oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
	    return;
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass(el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return;
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) {
	        return el.classList.add(c);
	      });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass(el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return;
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) {
	        return el.classList.remove(c);
	      });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

	function nextFrame(fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass(el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass(el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds(el, expectedType, cb) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) {
	    return cb();
	  }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function end() {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function onEnd(e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo(el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
	    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	  }
	  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  };
	}

	function getTimeout(delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i]);
	  }));
	}

	function toMs(s) {
	  return Number(s.slice(0, -1)) * 1000;
	}

	/*  */

	function enter(vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return;
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return;
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return;
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var toClass = isAppear ? appearToClass : enterToClass;
	  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
	  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
	  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
	  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = enterHook &&
	  // enterHook may be a bound method which exposes
	  // the length of original fn as _length
	  (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      addTransitionClass(el, toClass);
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave(vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm();
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return;
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = leave &&
	  // leave hook may be a bound method which exposes
	  // the length of original fn as _length
	  (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave() {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return;
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition(def$$1) {
	  if (!def$$1) {
	    return;
	  }
	  /* istanbul ignore else */
	  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res;
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1);
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: name + "-enter",
	    leaveClass: name + "-leave",
	    appearClass: name + "-enter",
	    enterToClass: name + "-enter-to",
	    leaveToClass: name + "-leave-to",
	    appearToClass: name + "-enter-to",
	    enterActiveClass: name + "-enter-active",
	    leaveActiveClass: name + "-leave-active",
	    appearActiveClass: name + "-enter-active"
	  };
	});

	function once(fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  };
	}

	function _enter(_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove(vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [attrs, klass, events, domProps, style, transition];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted(el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn("v-model is not supported on element type: <" + vnode.tag + ">. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function cb() {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated(el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple ? binding.value.some(function (v) {
	        return hasNoMatchingOption(v, el.options);
	      }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected(el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
	    return;
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return;
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption(value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false;
	    }
	  }
	  return true;
	}

	function getValue(option) {
	  return '_value' in option ? option._value : option.value;
	}

	function onCompositionStart(e) {
	  e.target.composing = true;
	}

	function onCompositionEnd(e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger(el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode(vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
	}

	var show = {
	  bind: function bind(el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update(el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) {
	      return;
	    }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children));
	  } else {
	    return vnode;
	  }
	}

	function extractTransitionData(comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data;
	}

	function placeholder(h, rawChild) {
	  return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
	  );
	}

	function hasParentTransition(vnode) {
	  while (vnode = vnode.parent) {
	    if (vnode.data.transition) {
	      return true;
	    }
	  }
	}

	function isSameChild(child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag;
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render(h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return;
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) {
	      return c.tag;
	    });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return;
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn('invalid <transition> mode: ' + mode, this.$parent);
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild;
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild;
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild);
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + this._uid + "-";
	    var key = child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) {
	      return d.name === 'show';
	    })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild);
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function performLeave() {
	          delayedLeave();
	        };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild;
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render(h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
	          warn("<transition-group> children must be keyed: <" + name + ">");
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children);
	  },

	  beforeUpdate: function beforeUpdate() {
	    // force removing pass
	    this.__patch__(this._vnode, this.kept, false, // hydrating
	    true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated() {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name || 'v') + '-move';
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return;
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove(el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false;
	      }
	      if (this._hasMove != null) {
	        return this._hasMove;
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return this._hasMove = info.hasTransform;
	    }
	  }
	};

	function callPendingCbs(c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition(c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation(c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$2.config.isUnknownElement = isUnknownElement;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);

	// install platform patch function
	Vue$2.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$2.prototype.$mount = function (el, hydrating) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating);
	};

	if (process.env.NODE_ENV !== 'production' && inBrowser && typeof console !== 'undefined') {
	  console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue$2;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./common.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\nbody,\r\nhtml {\r\n  height: 100%;\r\n}\r\n/* 初始化 */\r\nbody,\r\ndiv,\r\nul,\r\nli,\r\nol,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\ninput,\r\ntextarea,\r\nselect,\r\np,\r\ndl,\r\ndt,\r\ndd,\r\na,\r\nimg,\r\nbutton,\r\nform,\r\ntable,\r\nth,\r\ntr,\r\ntd,\r\ntbody,\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\na,\r\nli {\r\n  font: 400 14px 微软雅黑;\r\n  color: #333333;\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n.fl {\r\n  float: left;\r\n}\r\n.fr {\r\n  float: right;\r\n}\r\n.clearfix:after {\r\n  clear: both;\r\n  content: '';\r\n  display: block;\r\n  height: 0;\r\n  width: 0;\r\n  visibility: hidden;\r\n}\r\n.leaveout {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\ni {\r\n  font-style: normal;\r\n}\r\n/* 取消链接高亮  */\r\nbody,\r\ndiv,\r\nul,\r\nli,\r\nol,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\ninput,\r\ntextarea,\r\nselect,\r\np,\r\ndl,\r\ndt,\r\ndd,\r\na,\r\nimg,\r\nbutton,\r\nform,\r\ntable,\r\nth,\r\ntr,\r\ntd,\r\ntbody,\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n/* 图片自适应 */\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  width: auto\\9;\r\n  /* ie8 */\r\n  display: block;\r\n  -ms-interpolation-mode: bicubic;\r\n  /*为了照顾ie图片缩放失真*/\r\n}\r\n.w50 {\r\n  width: 50%;\r\n}\r\n.w25 {\r\n  width: 25%;\r\n}\r\n.w20 {\r\n  width: 20%;\r\n}\r\n.w33 {\r\n  width: 33.333333%;\r\n}\r\n.w55 {\r\n  width: 55%;\r\n}\r\n.w45 {\r\n  width: 45%;\r\n}\r\n.fl {\r\n  float: left;\r\n}\r\n.fr {\r\n  float: right;\r\n}\r\n.db {\r\n  display: block !important;\r\n}\r\n.dn {\r\n  display: none;\r\n}\r\n/*单行溢出*/\r\n.one_txt_cut {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n/*多行溢出 手机端使用*/\r\n.txt_cut {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  /* -webkit-line-clamp: 2;不能写高度 */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n/*行内元素转换并垂直居中  为元素是属于标签的*/\r\n.my__center,\r\n.my_center::before {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n/*垂直方向上居中*/\r\n.my__center_y,\r\n.my_center_y::before {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(8)

	var Component = __webpack_require__(12)(
	  /* script */
	  __webpack_require__(13),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\ajax\\test\\lessonChoicer\\src\\App.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35020942", Component.options)
	  } else {
	    hotAPI.reload("data-v-35020942", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(10)("085e455d", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35020942!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
	     var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35020942!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.template {\n    color: pink;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(11)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles(parentId, list) {
	  var styles = [];
	  var newStyles = {};
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i];
	    var id = item[0];
	    var css = item[1];
	    var media = item[2];
	    var sourceMap = item[3];
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    };
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] });
	    } else {
	      newStyles[id].parts.push(part);
	    }
	  }
	  return styles;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _myCourse = __webpack_require__(14);

	var _myCourse2 = _interopRequireDefault(_myCourse);

	__webpack_require__(16);

	__webpack_require__(18);

	__webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            msg: "hello world"
	        };
	    },

	    components: {
	        myCourse: _myCourse2.default
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(12)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(15),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\ajax\\test\\lessonChoicer\\src\\components\\myCourse.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myCourse.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-32b17d81", Component.options)
	  } else {
	    hotAPI.reload("data-v-32b17d81", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "index_content"
	  }, [_c('div', {
	    staticClass: "my_lesson"
	  }, [_c('div', {
	    staticClass: "lesson_head"
	  }, [_c('i', {
	    staticClass: "fa fa-calendar"
	  }), _vm._v(" "), _c('h2', [_vm._v("我的课表")])]), _vm._v(" "), _c('div', {
	    staticClass: "lesson_body"
	  }, [_c('table', {
	    attrs: {
	      "border": "0",
	      "cellspacing": "0"
	    }
	  }, [_c('thead', [_c('tr', [_c('th', {
	    staticClass: "left"
	  }), _vm._v(" "), _c('th', [_vm._v("一")]), _vm._v(" "), _c('th', [_vm._v("二")]), _vm._v(" "), _c('th', [_vm._v("三")]), _vm._v(" "), _c('th', [_vm._v("四")]), _vm._v(" "), _c('th', [_vm._v("五")]), _vm._v(" "), _c('th', {
	    staticClass: "right"
	  }, [_vm._v("六")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }, [_vm._v("5")]), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "4"
	    }
	  })]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("8")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("9")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }, [_vm._v("10")]), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  }), _vm._v(" "), _c('td', {
	    attrs: {
	      "line": "9"
	    }
	  })]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("11")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("12")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("13")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "my_lessonList"
	  }, [_c('div', {
	    staticClass: "lesson_head"
	  }, [_c('i', {
	    staticClass: "fa fa-file-o"
	  }), _vm._v(" "), _c('h2', [_vm._v("课程清单")])]), _vm._v(" "), _c('div', {
	    staticClass: "lesson_body clearfix"
	  }, [_c('table', {
	    attrs: {
	      "border": "0",
	      "cellspacing": "0"
	    }
	  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("课程编号")]), _vm._v(" "), _c('th', [_vm._v("课程名称")]), _vm._v(" "), _c('th', [_vm._v("教师姓名")]), _vm._v(" "), _c('th', [_vm._v("学分")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上）")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("5")])])])]), _vm._v(" "), _c('p', {
	    staticClass: "allScore fr"
	  }, [_vm._v("总学分:\n                "), _c('span', [_vm._v("5")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "my_test"
	  }, [_c('div', {
	    staticClass: "lesson_head"
	  }, [_c('i', {
	    staticClass: "fa fa-clock-o"
	  }), _vm._v(" "), _c('h2', [_vm._v("考试时间")])]), _vm._v(" "), _c('div', {
	    staticClass: "lesson_body clearfix"
	  }, [_c('table', {
	    attrs: {
	      "border": "0",
	      "cellspacing": "0"
	    }
	  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("课程名称")]), _vm._v(" "), _c('th', [_vm._v("考试时间")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("考试日期：\n                            "), _c('span', [_vm._v("2015-12-30")]), _vm._v(" 考试时间：\n                            "), _c('span', [_vm._v("08:30-10:30")])])])])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-32b17d81", module.exports)
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./index.css");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".index_content {\r\n  margin: 20px 0 0 200px;\r\n  height: 1000px;\r\n}\r\n.index_content .my_lesson,\r\n.index_content .my_lessonList,\r\n.index_content .my_test {\r\n  margin: 20px;\r\n}\r\n.index_content .my_lesson,\r\n.index_content .my_lessonList,\r\n.index_content .my_test {\r\n  height: auto;\r\n  box-shadow: -2px 5px 15px 5px #CFCFCF;\r\n}\r\n.index_content .my_lesson .lesson_head,\r\n.index_content .my_lessonList .lesson_head,\r\n.index_content .my_test .lesson_head {\r\n  height: 62px;\r\n  background-color: #54555A;\r\n  position: relative;\r\n  padding: 6px 40px;\r\n}\r\n.index_content .my_lesson .lesson_head i,\r\n.index_content .my_lessonList .lesson_head i,\r\n.index_content .my_test .lesson_head i {\r\n  position: absolute;\r\n  left: 15px;\r\n  top: 8px;\r\n  color: #fff;\r\n  font-size: 20px;\r\n}\r\n.index_content .my_lesson .lesson_head h2,\r\n.index_content .my_lessonList .lesson_head h2,\r\n.index_content .my_test .lesson_head h2 {\r\n  color: #fff;\r\n  font-size: 20px;\r\n}\r\n.index_content .my_lesson .lesson_body {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n.index_content .my_lesson .lesson_body table {\r\n  width: 100%;\r\n}\r\n.index_content .my_lesson .lesson_body table thead th {\r\n  height: 32px;\r\n  line-height: 30px;\r\n  font: 600 16px 微软雅黑;\r\n  border-right: 2px solid #eee;\r\n  border-bottom: 2px solid #eee;\r\n}\r\n.index_content .my_lesson .lesson_body table thead th:nth-child(1) {\r\n  width: 167px;\r\n}\r\n.index_content .my_lesson .lesson_body table tbody td {\r\n  height: 40px;\r\n  border-right: 2px solid #eee;\r\n  border-bottom: 2px solid #eee;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n.index_content .my_lesson .lesson_body table tbody td:nth-child(1) {\r\n  width: 167px;\r\n}\r\n.index_content .my_lesson .lesson_body table tbody td[line=\"4\"],\r\n.index_content .my_lesson .lesson_body table tbody td[line=\"9\"] {\r\n  border-bottom: 2px solid #000;\r\n}\r\n.index_content .my_lessonList .lesson_head {\r\n  height: 42px;\r\n}\r\n.index_content .my_lessonList .lesson_body table {\r\n  width: 100%;\r\n}\r\n.index_content .my_lessonList .lesson_body table thead th {\r\n  padding: 5px 20px;\r\n  font-size: 16px;\r\n}\r\n.index_content .my_lessonList .lesson_body table tbody td {\r\n  padding: 5px 20px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-bottom: 2px solid #eee;\r\n}\r\n.index_content .my_lessonList .lesson_body .allScore {\r\n  padding: 5px 20px;\r\n  font-size: 16px;\r\n}\r\n.index_content .my_test .lesson_head {\r\n  height: 42px;\r\n}\r\n.index_content .my_test .lesson_body table {\r\n  width: 100%;\r\n}\r\n.index_content .my_test .lesson_body table thead th {\r\n  padding: 5px 75px;\r\n  height: 31px;\r\n  font-size: 16px;\r\n}\r\n.index_content .my_test .lesson_body table tbody td {\r\n  padding: 5px 75px;\r\n  height: 31px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./lessonAll.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./lessonAll.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".active {\r\n  background-color: #fff;\r\n  color: #54555a!important;\r\n}\r\n.sidebar {\r\n  width: 200px;\r\n  height: 100%;\r\n  background-color: #54555a;\r\n  padding-top: 20px;\r\n  box-shadow: 2px 2px 8px #ccc;\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n.sidebar .title {\r\n  height: 135px;\r\n  padding: 10px 0 100px;\r\n  text-align: center;\r\n  font: 400 24px/24px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n  color: #fff;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.sidebar .nav li {\r\n  height: 40px;\r\n  border-bottom: 1px solid #ccc;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.sidebar .nav li i {\r\n  font-size: 18px;\r\n  line-height: 40px;\r\n  margin-left: 20px;\r\n  font-weight: 400;\r\n}\r\n.sidebar .nav li .navName {\r\n  color: #fff;\r\n  font: 400 20px/40px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n}\r\n.alllesson {\r\n  padding: 20px 0 0 200px;\r\n}\r\n.alllesson .hidden {\r\n  display: none;\r\n}\r\n.alllesson .select {\r\n  background-color: #eee;\r\n  height: auto;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2000;\r\n  border-radius: 4px;\r\n}\r\n.alllesson .select .name {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  padding: 5px;\r\n}\r\n.alllesson .select .teacher {\r\n  text-align: center;\r\n  font-size: 1pc;\r\n  padding: 5px;\r\n}\r\n.alllesson .select button {\r\n  width: 75pt;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  height: 26px;\r\n  box-sizing: border-box;\r\n}\r\n.alllesson .select .update {\r\n  background-color: #00ae68;\r\n  border: 0;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\r\n.alllesson .select .box {\r\n  background-color: #de7d2c;\r\n  border: 0;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\r\n.alllesson .select .gray {\r\n  background-color: #aaa;\r\n}\r\n.alllesson .lessonInfo {\r\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n  margin: 0 20px;\r\n}\r\n.alllesson .lessonInfo .table-name {\r\n  text-align: center;\r\n  font: 700 25px/35px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n}\r\n.alllesson .lessonInfo table {\r\n  width: 100%;\r\n  border-spacing: 0;\r\n}\r\n.alllesson .lessonInfo table td {\r\n  padding: 5px;\r\n  height: 50px;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n.alllesson .lessonInfo table thead td {\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n.alllesson .lessonInfo table thead:hover,\r\n.alllesson .lessonInfo table tr:hover {\r\n  background-color: #ddd;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./collect.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./collect.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".active {\r\n  background-color: #fff;\r\n  color: #54555a!important;\r\n}\r\n.sidebar {\r\n  width: 200px;\r\n  height: 100%;\r\n  background-color: #54555a;\r\n  padding-top: 20px;\r\n  box-shadow: 2px 2px 8px #ccc;\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n.sidebar .title {\r\n  height: 135px;\r\n  padding: 10px 0 100px;\r\n  text-align: center;\r\n  font: 400 24px/24px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n  color: #fff;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.sidebar .nav li {\r\n  height: 40px;\r\n  border-bottom: 1px solid #ccc;\r\n  color: #fff;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.sidebar .nav li i {\r\n  font-size: 18px;\r\n  line-height: 40px;\r\n  margin-left: 20px;\r\n  font-weight: 400;\r\n}\r\n.sidebar .nav li .navName {\r\n  color: #fff;\r\n  font: 400 20px/40px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n}\r\n.alllesson {\r\n  padding: 20px 0 0 200px;\r\n}\r\n.alllesson .lessonInfo {\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 0 20px;\r\n}\r\n.alllesson .lessonInfo .table-name {\r\n  text-align: center;\r\n  font: 700 25px/35px '\\5FAE\\8F6F\\96C5\\9ED1';\r\n}\r\n.alllesson .lessonInfo table {\r\n  width: 100%;\r\n  border-spacing: 0;\r\n}\r\n.alllesson .lessonInfo table td {\r\n  padding: 5px;\r\n  text-align: center;\r\n}\r\n.alllesson .lessonInfo table td .update {\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  height: 26px;\r\n  width: 75pt;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  box-sizing: border-box;\r\n  border: none;\r\n  font-size: 15px;\r\n}\r\n.alllesson .lessonInfo table td .add {\r\n  background-color: #aaa;\r\n}\r\n.alllesson .lessonInfo table td .remove {\r\n  background-color: #df3e3e;\r\n}\r\n.alllesson .lessonInfo table td .copy {\r\n  background-color: #6cf;\r\n}\r\n.alllesson .lessonInfo table td .remove:hover,\r\n.alllesson .lessonInfo table td .copy:hover {\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.alllesson .lessonInfo table thead td {\r\n  color: #fff;\r\n  background-color: #54555a;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', [_c('div', {
	    staticClass: "sidebar"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(23),
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('h2', {
	    staticClass: "title"
	  }, [_vm._v("复旦选课助手")]), _vm._v(" "), _c('ul', {
	    staticClass: "nav"
	  }, [_c('li', {
	    staticClass: "active"
	  }, [_c('i', {
	    staticClass: "fa fa-table fl"
	  }), _vm._v(" "), _c('router-link', {
	    staticClass: "navName active",
	    attrs: {
	      "to": "/"
	    }
	  }, [_vm._v("我的课表")])], 1), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "fa fa-star-o fl"
	  }), _vm._v(" "), _c('router-link', {
	    staticClass: "navName",
	    attrs: {
	      "to": "/collect"
	    }
	  }, [_vm._v("收藏夹")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "fa fa-list-alt fl"
	  }), _vm._v(" "), _c('router-link', {
	    staticClass: "navName",
	    attrs: {
	      "to": "/allLesson"
	    }
	  }, [_vm._v("所有课程")])], 1)])]), _vm._v(" "), _c('router-view', {
	    staticClass: "view",
	    attrs: {
	      "keep-alive": "",
	      "transition": "",
	      "transition-mode": "out-in"
	    }
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('i', {
	    staticClass: "fa fa-search fl"
	  }), _vm._v(" "), _c('a', {
	    staticClass: "navName",
	    attrs: {
	      "href": "javascript:;"
	    }
	  }, [_vm._v("搜索")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35020942", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function assert(condition, message) {
	  if (!condition) {
	    throw new Error("[vue-router] " + message);
	  }
	}

	function warn(condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
	  }
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render(h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children);
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h();
	    }

	    var component = cache[name] = matched.components[name];

	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children);
	  }
	};

	function resolveProps(route, config) {
	  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
	    case 'undefined':
	      return;
	    case 'object':
	      return config;
	    case 'function':
	      return config(route);
	    case 'boolean':
	      return config ? route.params : undefined;
	    default:
	      warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", expecting an object, function or boolean.");
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function encodeReserveReplacer(c) {
	  return '%' + c.charCodeAt(0).toString(16);
	};
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function encode(str) {
	  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
	};

	var decode = decodeURIComponent;

	function resolveQuery(query, extraQuery) {
	  if (extraQuery === void 0) extraQuery = {};

	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery;
	  } else {
	    return extraQuery;
	  }
	}

	function parseQuery(query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res;
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0 ? decode(parts.join('=')) : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res;
	}

	function stringifyQuery(obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return '';
	    }

	    if (val === null) {
	      return encode(key);
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return;
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&');
	    }

	    return encode(key) + '=' + encode(val);
	  }).filter(function (x) {
	    return x.length > 0;
	  }).join('&') : null;
	  return res ? "?" + res : '';
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute(record, location, redirectedFrom) {
	  var route = {
	    name: location.name || record && record.name,
	    meta: record && record.meta || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
	  }
	  return Object.freeze(route);
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch(record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res;
	}

	function getFullPath(ref) {
	  var path = ref.path;
	  var query = ref.query;if (query === void 0) query = {};
	  var hash = ref.hash;if (hash === void 0) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash;
	}

	function isSameRoute(a, b) {
	  if (b === START) {
	    return a === b;
	  } else if (!b) {
	    return false;
	  } else if (a.path && b.path) {
	    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
	  } else if (a.name && b.name) {
	    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
	  } else {
	    return false;
	  }
	}

	function isObjectEqual(a, b) {
	  if (a === void 0) a = {};
	  if (b === void 0) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false;
	  }
	  return aKeys.every(function (key) {
	    return String(a[key]) === String(b[key]);
	  });
	}

	function isIncludedRoute(current, target) {
	  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	}

	function queryIncludes(current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false;
	    }
	  }
	  return true;
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render(h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	    var classes = {};
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);

	    var handler = function handler(e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) {
	        on[e] = handler;
	      });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default);
	  }
	};

	function guardEvent(e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) {
	    return;
	  }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) {
	    return;
	  }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) {
	    return;
	  }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) {
	      return;
	    }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true;
	}

	function findAnchor(children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child;
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child;
	      }
	    }
	  }
	}

	var _Vue;

	function install(Vue) {
	  if (install.installed) {
	    return;
	  }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get() {
	      return this.$root._router;
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get() {
	      return this.$root._route;
	    }
	  });

	  Vue.mixin({
	    beforeCreate: function beforeCreate() {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath(relative, base, append) {
	  if (relative.charAt(0) === '/') {
	    return relative;
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative;
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue;
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/');
	}

	function parsePath(path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  };
	}

	function cleanPath(path) {
	  return path.replace(/\/\//g, '/');
	}

	/*  */

	function createRouteMap(routes, oldPathMap, oldNameMap) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  };
	}

	function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) {
	        return (/^\/?$/.test(child.path)
	        );
	      })) {
	        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
	    }
	  }
	}

	function normalizePath(path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') {
	    return path;
	  }
	  if (parent == null) {
	    return path;
	  }
	  return cleanPath(parent.path + "/" + path);
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse(str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens;
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile(str, options) {
	  return tokensToFunction(parse(str, options));
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty(str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk(str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue;
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue;
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }

	      path += token.prefix + segment;
	    }

	    return path;
	  };
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys);
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys);
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options);
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp(tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (isarray(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex(path) {
	  var hit = regexpCache[path];
	  var keys, regexp;

	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }

	  return { keys: keys, regexp: regexp };
	}

	var regexpCompileCache = Object.create(null);

	function fillParams(path, params, routeMsg) {
	  try {
	    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true });
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, "missing param for " + routeMsg + ": " + e.message);
	    }
	    return '';
	  }
	}

	/*  */

	function normalizeLocation(raw, current, append) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next;
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, "path " + current.path);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next;
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = current && current.path || '/';
	  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : current && current.path || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  };
	}

	function assign(a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a;
	}

	/*  */

	function createMatcher(routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes(routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match(raw, currentRoute, redirectedFrom) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, "Route with name '" + name + "' does not exist");
	      }
	      var paramNames = getRouteRegex(record.path).keys.filter(function (key) {
	        return !key.optional;
	      }).map(function (key) {
	        return key.name;
	      });

	      if (_typeof(location.params) !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && _typeof(currentRoute.params) === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
	        return _createRoute(record, location, redirectedFrom);
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom);
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location);
	  }

	  function redirect(record, location) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location)) : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	      return _createRoute(null, location);
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location);
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location);
	    } else {
	      warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	      return _createRoute(null, location);
	    }
	  }

	  function alias(record, location, matchAs) {
	    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location);
	    }
	    return _createRoute(null, location);
	  }

	  function _createRoute(record, location, redirectedFrom) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location);
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs);
	    }
	    return createRoute(record, location, redirectedFrom);
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  };
	}

	function matchRoute(path, params, pathname) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false;
	  } else if (!params) {
	    return true;
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true;
	}

	function resolveRecordPath(path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true);
	}

	/*  */

	var positionStore = Object.create(null);

	function setupScroll() {
	  window.addEventListener('popstate', function (e) {
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });

	  window.addEventListener('scroll', saveScrollPosition);
	}

	function handleScroll(router, to, from, isPop) {
	  if (!router.app) {
	    return;
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return;
	    }
	    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition() {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition() {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key];
	  }
	}

	function getElementPosition(el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  };
	}

	function isValidPosition(obj) {
	  return isNumber(obj.x) || isNumber(obj.y);
	}

	function normalizePosition(obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  };
	}

	function isNumber(v) {
	  return typeof v === 'number';
	}

	/*  */

	var supportsPushState = inBrowser && function () {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }

	  return window.history && 'pushState' in window.history;
	}();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

	var _key = genKey();

	function genKey() {
	  return Time.now().toFixed(3);
	}

	function getStateKey() {
	  return _key;
	}

	function setStateKey(key) {
	  _key = key;
	}

	function pushState(url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	    saveScrollPosition();
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState(url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue(queue, fn, cb) {
	  var step = function step(index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	var History = function History(router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};

	History.prototype.listen = function listen(cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady(cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};

	History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
	  var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};

	History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
	  var this$1 = this;

	  var current = this.current;
	  var abort = function abort() {
	    onAbort && onAbort();
	  };
	  if (isSameRoute(route, current) &&
	  // in the case the route map has been dynamically appended to
	  route.matched.length === current.matched.length) {
	    this.ensureURL();
	    return abort();
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	  var updated = ref.updated;
	  var deactivated = ref.deactivated;
	  var activated = ref.activated;

	  var queue = [].concat(
	  // in-component leave guards
	  extractLeaveGuards(deactivated),
	  // global before hooks
	  this.router.beforeHooks,
	  // in-component update hooks
	  extractUpdateHooks(updated),
	  // in-config enter guards
	  activated.map(function (m) {
	    return m.beforeEnter;
	  }),
	  // async components
	  resolveAsyncComponents(activated));

	  this.pending = route;
	  var iterator = function iterator(hook, next) {
	    if (this$1.pending !== route) {
	      return abort();
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function isValid() {
	      return this$1.current === route;
	    };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort();
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) {
	            return cb();
	          });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute(route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase(base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl ? baseEl.getAttribute('href') : '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '');
	}

	function resolveQueue(current, next) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break;
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  };
	}

	function extractGuards(records, name, bind, reverse) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard) ? guard.map(function (guard) {
	        return bind(guard, instance, match, key);
	      }) : bind(guard, instance, match, key);
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards);
	}

	function extractGuard(def, key) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key];
	}

	function extractLeaveGuards(deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
	}

	function extractUpdateHooks(updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
	}

	function bindGuard(guard, instance) {
	  return function boundRouteGuard() {
	    return guard.apply(instance, arguments);
	  };
	}

	function extractEnterGuards(activated, cbs, isValid) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid);
	  });
	}

	function bindEnterGuard(guard, match, key, cbs, isValid) {
	  return function routeEnterGuard(to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    });
	  };
	}

	function poll(cb, // somehow flow cannot infer this is a function
	instances, key, isValid) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents(matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });

	        var reject = once(function (reason) {
	          warn(false, "Failed to resolve async component " + key + ": " + reason);
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      };
	    }
	  });
	}

	function flatMapComponents(matched, fn) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return fn(m.components[key], m.instances[key], m, key);
	    });
	  }));
	}

	function flatten(arr) {
	  return Array.prototype.concat.apply([], arr);
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    return fn.apply(this, arguments);
	  };
	}

	/*  */

	var HTML5History = function (History$$1) {
	  function HTML5History(router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }

	  if (History$$1) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go(n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL(push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
	    return getLocation(this.base);
	  };

	  return HTML5History;
	}(History);

	function getLocation(base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash;
	}

	/*  */

	var HashHistory = function (History$$1) {
	  function HashHistory(router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return;
	    }
	    ensureSlash();
	  }

	  if (History$$1) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners() {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return;
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go(n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL(push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
	    return getHash();
	  };

	  return HashHistory;
	}(History);

	function checkFallback(base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(cleanPath(base + '/#' + location));
	    return true;
	  }
	}

	function ensureSlash() {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true;
	  }
	  replaceHash('/' + path);
	  return false;
	}

	function getHash() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1);
	}

	function pushHash(path) {
	  window.location.hash = path;
	}

	function replaceHash(path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	}

	/*  */

	var AbstractHistory = function (History$$1) {
	  function AbstractHistory(router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if (History$$1) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go(n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return;
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/';
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL() {
	    // noop
	  };

	  return AbstractHistory;
	}(History);

	/*  */

	var VueRouter = function VueRouter(options) {
	  if (options === void 0) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break;
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break;
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break;
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, "invalid mode: " + mode);
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
	  return this.matcher.match(raw, current, redirectedFrom);
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current;
	};

	VueRouter.prototype.init = function init(app /* Vue component instance */) {
	  var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return;
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function setupHashListener() {
	      history.setupListeners();
	    };
	    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach(fn) {
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach(fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady(cb) {
	  this.history.onReady(cb);
	};

	VueRouter.prototype.push = function push(location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go(n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back() {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward() {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
	  var route = to ? this.resolve(to).route : this.currentRoute;
	  if (!route) {
	    return [];
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key];
	    });
	  }));
	};

	VueRouter.prototype.resolve = function resolve(to, current, append) {
	  var location = normalizeLocation(to, current || this.history.current, append);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  };
	};

	VueRouter.prototype.addRoutes = function addRoutes(routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties(VueRouter.prototype, prototypeAccessors);

	function createHref(base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path;
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(12)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(26),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\ajax\\test\\lessonChoicer\\src\\components\\collect.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] collect.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a749ee00", Component.options)
	  } else {
	    hotAPI.reload("data-v-a749ee00", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "alllesson"
	  }, [_c('div', {
	    staticClass: "lessonInfo"
	  }, [_c('table', [_c('thead', [_c('td', [_vm._v("选课序号")]), _vm._v(" "), _c('td', [_vm._v("课程名称")]), _vm._v(" "), _c('td', [_vm._v("教师")]), _vm._v(" "), _c('td', [_vm._v("时间")]), _vm._v(" "), _c('td', [_vm._v("教室")]), _vm._v(" "), _c('td', [_vm._v("操作")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("一 3-4 ，三 1-2 ，五 3-4")]), _vm._v(" "), _c('td', [_vm._v("H3308")]), _vm._v(" "), _c('td', [_c('button', {
	    staticClass: "update add"
	  }, [_vm._v("已加入课表")]), _vm._v(" "), _c('button', {
	    staticClass: "update remove"
	  }, [_c('i', {
	    staticClass: "fa fa-trash-o"
	  }), _vm._v("\n                        移除\n                    ")]), _vm._v(" "), _c('button', {
	    staticClass: "update copy"
	  }, [_vm._v("复制序号")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("一 3-4 ，三 1-2 ，五 3-4")]), _vm._v(" "), _c('td', [_vm._v("H3308")]), _vm._v(" "), _c('td', [_c('button', {
	    staticClass: "update add"
	  }, [_vm._v("已加入课表")]), _vm._v(" "), _c('button', {
	    staticClass: "update remove"
	  }, [_c('i', {
	    staticClass: "fa fa-trash-o"
	  }), _vm._v("\n                        移除\n                    ")]), _vm._v(" "), _c('button', {
	    staticClass: "update copy"
	  }, [_vm._v("复制序号")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("一 3-4 ，三 1-2 ，五 3-4")]), _vm._v(" "), _c('td', [_vm._v("H3308")]), _vm._v(" "), _c('td', [_c('button', {
	    staticClass: "update add"
	  }, [_vm._v("已加入课表")]), _vm._v(" "), _c('button', {
	    staticClass: "update remove"
	  }, [_c('i', {
	    staticClass: "fa fa-trash-o"
	  }), _vm._v("\n                        移除\n                    ")]), _vm._v(" "), _c('button', {
	    staticClass: "update copy"
	  }, [_vm._v("复制序号")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("一 3-4 ，三 1-2 ，五 3-4")]), _vm._v(" "), _c('td', [_vm._v("H3308")]), _vm._v(" "), _c('td', [_c('button', {
	    staticClass: "update add"
	  }, [_vm._v("已加入课表")]), _vm._v(" "), _c('button', {
	    staticClass: "update remove"
	  }, [_c('i', {
	    staticClass: "fa fa-trash-o"
	  }), _vm._v("\n                        移除\n                    ")]), _vm._v(" "), _c('button', {
	    staticClass: "update copy"
	  }, [_vm._v("复制序号")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("MATH120001.01")]), _vm._v(" "), _c('td', [_vm._v("高等数学A(上)")]), _vm._v(" "), _c('td', [_vm._v("徐惠平")]), _vm._v(" "), _c('td', [_vm._v("一 3-4 ，三 1-2 ，五 3-4")]), _vm._v(" "), _c('td', [_vm._v("H3308")]), _vm._v(" "), _c('td', [_c('button', {
	    staticClass: "update add"
	  }, [_vm._v("已加入课表")]), _vm._v(" "), _c('button', {
	    staticClass: "update remove"
	  }, [_c('i', {
	    staticClass: "fa fa-trash-o"
	  }), _vm._v("\n                        移除\n                    ")]), _vm._v(" "), _c('button', {
	    staticClass: "update copy"
	  }, [_vm._v("复制序号")])])])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a749ee00", module.exports)
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(12)(
	  /* script */
	  __webpack_require__(28),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\ajax\\test\\lessonChoicer\\src\\components\\allLesson.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] allLesson.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3bfa870f", Component.options)
	  } else {
	    hotAPI.reload("data-v-3bfa870f", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    data: function data() {
	        return {
	            course: COURSE_DATA,
	            isHide: true,
	            left: 0,
	            top: 0,
	            hide: true,
	            info: {}
	        };
	    },
	    methods: {
	        //alert,点击每一行时触发的方法 ,会弹出一个选择框,添加课程表或者添加到收藏夹
	        alert: function alert($event) {
	            //变量声明，width(屏幕可视区域的宽度)，distance(弹出窗距离页面最右侧的距离)，current(当前被点击的dom对象)，children(当前对象的子dom元素)，data(我们需要的数据)
	            var width, distance, current, children, i, data;
	            width = document.body.clientWidth;
	            distance = width - $event.clientX;
	            if (this.isHide) {
	                var current = $event.currentTarget;
	                var children = current.children;
	                for (i = 0; i < children.length; i++) {
	                    if (i == 0) {
	                        data = children[0].innerText;
	                        //将json字符串转换成json对象，得到我们要的数据
	                        data = JSON.parse(data);
	                        this.info = data;
	                    }
	                }
	            }
	            //当我们点击某行弹出弹出层的时候，我们才需要调动弹出层的位置，而我们关闭弹出层的时候不需要
	            this.left = this.isHide ? distance > 200 ? $event.clientX + 'px' : width - 220 + 'px' : this.left;
	            this.top = this.isHide ? $event.clientY + 'px' : this.top;
	            //弹出框开始时是隐藏的，点击一次显示，点击第二次隐藏
	            this.isHide = this.isHide ? false : true;
	            this.hide = false;
	        },
	        //addLesson,点击添加到课程表页面中
	        addLesson: function addLesson($event) {
	            var add = {
	                "type": "addLesson",
	                "info": ""
	            };
	            add.info = this.info;
	            $.cookie('addLesson' + this.info['选课序号'], JSON.stringify(add));
	            this.isHide = true;
	        },
	        //addCollect,点击添加数据到收藏夹页面中
	        addCollect: function addCollect($event) {
	            var add = {
	                "type": "addCollect",
	                "info": ""
	            };
	            add.info = this.info;
	            $.cookie('addCollect' + this.info['选课序号'], JSON.stringify(add));
	            this.isHide = true;
	        },
	        disabled: function disabled() {
	            if ($.cookie('addLesson' + this.info['选课序号'])) {
	                return false;
	            } else {
	                return true;
	            }
	        },
	        disable: function disable() {
	            if ($.cookie('addCollect' + this.info['选课序号'])) {
	                return false;
	            } else {
	                return true;
	            }
	        }
	    }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "alllesson"
	  }, [_c('div', {
	    class: {
	      animated: true, bounceOut: _vm.isHide, select: true, bounceIn: !_vm.isHide, hidden: _vm.hide
	    },
	    style: ({
	      left: _vm.left,
	      top: _vm.top
	    })
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v(_vm._s(_vm.info['课程名称']))]), _vm._v(" "), _c('p', {
	    staticClass: "teacher"
	  }, [_vm._v(_vm._s(_vm.info['教师']))]), _vm._v(" "), (_vm.disabled()) ? _c('button', {
	    staticClass: "update",
	    on: {
	      "click": function($event) {
	        _vm.addLesson($event)
	      }
	    }
	  }, [_vm._v("加入课表")]) : _c('button', {
	    staticClass: "update gray",
	    attrs: {
	      "disabled": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.addLesson($event)
	      }
	    }
	  }, [_vm._v("加入课表")]), _vm._v(" "), (_vm.disable()) ? _c('button', {
	    staticClass: "box",
	    on: {
	      "click": function($event) {
	        _vm.addCollect($event)
	      }
	    }
	  }, [_vm._v("加入收藏夹")]) : _c('button', {
	    staticClass: "box gray",
	    attrs: {
	      "disabled": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.addCollect($event)
	      }
	    }
	  }, [_vm._v("加入收藏夹")])]), _vm._v(" "), _c('div', {
	    staticClass: "lessonInfo"
	  }, [_c('div', {
	    staticClass: "table-name"
	  }, [_vm._v("理科课程")]), _vm._v(" "), _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.course), function(value, key) {
	    return _c('tbody', _vm._l((_vm.course[key]), function(value1, key1) {
	      return _c('tr', {
	        attrs: {
	          "id": key1
	        },
	        on: {
	          "click": function($event) {
	            _vm.alert($event)
	          }
	        }
	      }, [_c('span', {
	        staticClass: "hidden"
	      }, [_vm._v(_vm._s(value1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['选课序号']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['课程名称']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['学分']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['教师']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['职称']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['人数']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['教室']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['时间']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['备注'] || '无'))])])
	    }))
	  })], 2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('td', [_vm._v("选课序号")]), _vm._v(" "), _c('td', [_vm._v("课程名称")]), _vm._v(" "), _c('td', [_vm._v("学分")]), _vm._v(" "), _c('td', [_vm._v("教师")]), _vm._v(" "), _c('td', [_vm._v("职称")]), _vm._v(" "), _c('td', [_vm._v("人数")]), _vm._v(" "), _c('td', [_vm._v("教室")]), _vm._v(" "), _c('td', [_vm._v("时间")]), _vm._v(" "), _c('td', [_vm._v("备注")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3bfa870f", module.exports)
	  }
	}

/***/ }
/******/ ]);