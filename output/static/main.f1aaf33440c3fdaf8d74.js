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
/******/ 	__webpack_require__.p = "static/";

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

	var _sideBar = __webpack_require__(3);

	var _sideBar2 = _interopRequireDefault(_sideBar);

	var _vueRouter = __webpack_require__(6);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _data = __webpack_require__(7);

	var _data2 = _interopRequireDefault(_data);

	var _myCourse = __webpack_require__(8);

	var _myCourse2 = _interopRequireDefault(_myCourse);

	var _collect = __webpack_require__(10);

	var _collect2 = _interopRequireDefault(_collect);

	var _allLesson = __webpack_require__(12);

	var _allLesson2 = _interopRequireDefault(_allLesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//使用路由插件

	//引用路由插件
	_vue2.default.use(_vueRouter2.default);
	// console.log( data );
	//引入组件 


	var routes = [{ path: '/', component: _myCourse2.default }, { path: '/collect/', component: _collect2.default }, { path: '/allLesson/', component: _allLesson2.default }];

	//使用路由规则
	var router = new _vueRouter2.default({
	    routes: routes
	});
	//加载路由规则
	new _vue2.default({
	    router: router,
	    el: '#app1',
	    render: function render(h) {
	        return h(_sideBar2.default);
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
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b)
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
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
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
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
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
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
	var isServerRendering = function () {
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
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
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
	    var logError = function (err) { console.error(err); };
	    timerFunc = function () {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) { cb.call(ctx); }
	      if (_resolve) { _resolve(ctx); }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      })
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */


	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
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

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
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
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
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
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
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
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
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
	function observe (value, asRootData) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
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
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
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
	function set$1 (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
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
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
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
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
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
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
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
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
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
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
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
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
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
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
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
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
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
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
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
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isType (type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type)
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
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
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      "referenced during render. Make sure to declare reactive data " +
	      "properties in the data option.",
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions
	) {
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
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
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
	        return
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
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
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
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
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
	  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function () { return resolveSlots(children, context); }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
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
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (
	  vnode,
	  hydrating,
	  parentElm,
	  refElm
	) {
	  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
	    var child = vnode.componentInstance = createComponentInstanceForVnode(
	      vnode,
	      activeInstance,
	      parentElm,
	      refElm
	    );
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.componentInstance = oldVnode.componentInstance;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.componentInstance._isMounted) {
	    vnode.componentInstance._isMounted = true;
	    callHook(vnode.componentInstance, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.componentInstance._inactive = false;
	    callHook(vnode.componentInstance, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.componentInstance._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.componentInstance.$destroy();
	    } else {
	      vnode.componentInstance._inactive = true;
	      callHook(vnode.componentInstance, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
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

	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
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

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
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
	  }
	});

	function createEventHandle (fn) {
	  var handle = {
	    fn: fn,
	    invoker: function () {
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
	  return handle
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, event;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
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
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') { continue }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
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
	  return res
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	      typeof children[0] === 'function') {
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
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return
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

	function initRender (vm) {
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
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
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
	          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	        }
	        throw e
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
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
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
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
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback,
	    props,
	    bindObject
	  ) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) { // scoped slot
	      props = props || {};
	      if (bindObject) {
	        extend(props, bindObject);
	      }
	      return scopedSlotFn(props) || fallback
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    tag,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var type = data.attrs && data.attrs.type;
	            var hash = asProp || config.mustUseProp(tag, type, key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes (
	    eventKeyCode,
	    key,
	    builtInAlias
	  ) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  };
	}

	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
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
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add$1 (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$2 (event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    // optimize hook:event cost by using a boolean flag marked at registration
	    // instead of a hash lookup
	    if (hookRE.test(event)) {
	      vm._hasHookEvent = true;
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
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
	    return vm
	  };
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
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

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function updateComponent () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
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
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
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

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) { // update child tree's parent
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
	      return
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

	function callHook (vm, hook) {
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
	function resetSchedulerState () {
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
	function flushSchedulerQueue () {
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
	  queue.sort(function (a, b) { return a.id - b.id; });

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
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
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
	function queueWatcher (watcher) {
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
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
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
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
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
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
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
	Watcher.prototype.update = function update () {
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
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
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
	            process.env.NODE_ENV !== 'production' && warn(
	              ("Error in watcher \"" + (this.expression) + "\""),
	              this.vm
	            );
	            throw e
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
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
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
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch) { initWatch(vm, opts.watch); }
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps (vm, props) {
	  var propsData = vm.$options.propsData || {};
	  var keys = vm.$options._propKeys = Object.keys(props);
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( i ) {
	    var key = keys[i];
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      if (isReservedProp[key]) {
	        warn(
	          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	    }
	  };

	  for (var i = 0; i < keys.length; i++) loop( i );
	  observerState.shouldConvert = true;
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
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

	function initComputed (vm, computed) {
	  for (var key in computed) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && key in vm) {
	      warn(
	        "existing instance property \"" + key + "\" will be " +
	        "overwritten by a computed property with the same name.",
	        vm
	      );
	    }
	    var userDef = computed[key];
	    if (typeof userDef === 'function') {
	      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	      computedSharedDefinition.set = noop;
	    } else {
	      computedSharedDefinition.get = userDef.get
	        ? userDef.cache !== false
	          ? makeComputedGetter(userDef.get, vm)
	          : bind$1(userDef.get, vm)
	        : noop;
	      computedSharedDefinition.set = userDef.set
	        ? bind$1(userDef.set, vm)
	        : noop;
	    }
	    Object.defineProperty(vm, key, computedSharedDefinition);
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm, methods) {
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	    if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	      warn(
	        "method \"" + key + "\" has an undefined value in the component definition. " +
	        "Did you reference the function correctly?",
	        vm
	      );
	    }
	  }
	}

	function initWatch (vm, watch) {
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

	function createWatcher (vm, key, handler) {
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

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
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
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
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

	function initInternalComponent (vm, options) {
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

	function resolveConstructorOptions (Ctor) {
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
	  return options
	}

	function Vue$2 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$2)) {
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

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
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
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
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
	      return cachedCtors[SuperId]
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
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
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
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
	        return definition
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else {
	    return pattern.test(name)
	  }
	}

	function pruneCache (cache, filter) {
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

	function pruneCacheEntry (vnode) {
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

	  created: function created () {
	    this.cache = Object.create(null);
	  },

	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      pruneCacheEntry(this$1.cache[key]);
	    }
	  },

	  watch: {
	    include: function include (val) {
	      pruneCache(this.cache, function (name) { return matches(val, name); });
	    },
	    exclude: function exclude (val) {
	      pruneCache(this.cache, function (name) { return !matches(val, name); });
	    }
	  },

	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.componentInstance = this.cache[key].componentInstance;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
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
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.componentInstance) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);



	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setAttribute (node, key, val) {
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
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

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

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
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

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
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

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
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

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
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
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
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

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
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
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
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
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
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
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
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
	              break
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
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
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );

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
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
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
	    var callInsert = function () {
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

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
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
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
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

	function setAttr (el, key, value) {
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

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
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

	function add$2 (
	  event,
	  handler,
	  once,
	  capture
	) {
	  if (once) {
	    var oldHandler = handler;
	    var _target = target$1; // save current target element in closure
	    handler = function (ev) {
	      remove$3(event, handler, capture, _target);
	      arguments.length === 1
	        ? oldHandler(ev)
	        : oldHandler.apply(null, arguments);
	    };
	  }
	  target$1.addEventListener(event, handler, capture);
	}

	function remove$3 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(event, handler, capture);
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
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

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
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
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
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


	function shouldUpdateValue (
	  elm,
	  vnode,
	  checkVal
	) {
	  return (!elm.composing && (
	    vnode.tag === 'option' ||
	    isDirty(elm, checkVal) ||
	    isInputChanged(vnode, checkVal)
	  ))
	}

	function isDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	  return document.activeElement !== elm && elm.value !== checkVal
	}

	function isInputChanged (vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
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
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
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

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
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
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style &&
	      !oldData.staticStyle && !oldData.style) {
	    return
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
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
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
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
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
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser && window.requestAnimationFrame
	  ? window.requestAnimationFrame.bind(window)
	  : setTimeout;

	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
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

	function getTransitionInfo (el, expectedType) {
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
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
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
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var toClass = isAppear ? appearToClass : enterToClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
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
	      if (pendingNode &&
	          pendingNode.tag === vnode.tag &&
	          pendingNode.elm._leaveCb) {
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

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
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
	  var userWantsControl =
	    leave &&
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

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
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

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    leaveToClass: (name + "-leave-to"),
	    appearToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	function _enter (_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

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
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
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
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
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
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
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

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
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
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
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
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    var key = child.key = child.key == null
	      ? id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
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
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
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

	  render: function render (h) {
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
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
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

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
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
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
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
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
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
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	if (process.env.NODE_ENV !== 'production' &&
	    inBrowser && typeof console !== 'undefined') {
	  console[console.info ? 'info' : 'log'](
	    "You are running Vue in development mode.\n" +
	    "Make sure to turn on production mode when deploying for production.\n" +
	    "See more tips at https://vuejs.org/guide/deployment.html"
	  );
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console[console.info ? 'info' : 'log'](
	        'Download the Vue Devtools extension for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	module.exports = Vue$2;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

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
	function defaultClearTimeout () {
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
	} ())
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
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
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
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
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
	    while(len) {
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

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(5),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\vue-wkdemo\\app\\index\\components\\sideBar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] sideBar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a48e93c0", Component.options)
	  } else {
	    hotAPI.reload("data-v-a48e93c0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "sidebar"
	  }, [_c('img', {
	    attrs: {
	      "src": "public/images/logo.png",
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
	  })], 1)
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
	     require("vue-hot-reload-api").rerender("data-v-a48e93c0", module.exports)
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
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
	  render: function render (h, ref) {
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
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
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

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

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
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
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
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
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
	  render: function render (h) {
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
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
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
	      this.event.forEach(function (e) { on[e] = handler; });
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

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
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

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
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
	      continue
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

	  return stack.join('/')
	}

	function parsePath (path) {
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
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
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
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
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
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
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
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
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
	      continue
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
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
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

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
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

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
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

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
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

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
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
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex (path) {
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

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
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
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
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
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
	      return _createRoute(null, location)
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
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });

	  window.addEventListener('scroll', saveScrollPosition);
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
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

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
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

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
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


	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
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

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
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
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
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
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
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
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents (matched) {
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
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
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

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

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
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
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
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	    var COURSE_DATA = {};
	    var temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,选课限制条件\r\n\
	MATH120001.01,高等数学A(上）,5.0,徐惠平,副教授,100,H3308,一 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120001.01,高等数学A(上）,5.0,徐惠平,副教授,100,H3308,三 1-2 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120001.01,高等数学A(上）,5.0,徐惠平,副教授,100,H3308,五 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120001.02,高等数学A(上）,5.0,程晋,教授,120,H4201,一 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	MATH120001.02,高等数学A(上）,5.0,程晋,教授,120,H4201,三 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	MATH120001.02,高等数学A(上）,5.0,程晋,教授,120,H4201,五 1-2 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	MATH120003.01,高等数学B(上）,5.0,黄云敏,副教授,90,HGX308,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类\r\n\
	15 历史学类\r\n\
	15 经济学院"\r\n\
	MATH120003.01,高等数学B(上）,5.0,黄云敏,副教授,90,HGX308,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类\r\n\
	15 历史学类\r\n\
	15 经济学院"\r\n\
	MATH120003.01,高等数学B(上）,5.0,黄云敏,副教授,90,HGX308,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类\r\n\
	15 历史学类\r\n\
	15 经济学院"\r\n\
	MATH120003.02,高等数学B(上）,5.0,王巨平,副教授,90,HGX407,一 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 历史学类\r\n\
	15 经济学院\r\n\
	15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类"\r\n\
	MATH120003.02,高等数学B(上）,5.0,王巨平,副教授,90,HGX407,三 1-2 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 历史学类\r\n\
	15 经济学院\r\n\
	15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类"\r\n\
	MATH120003.02,高等数学B(上）,5.0,王巨平,副教授,90,HGX407,五 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 历史学类\r\n\
	15 经济学院\r\n\
	15 公共事业管理\r\n\
	15 旅游管理\r\n\
	15 新闻传播学类"\r\n\
	MATH120003.03,高等数学B(上）,5.0,张仑,副研究员,90,H4303,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 新闻传播学类\r\n\
	15 经济学院\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.03,高等数学B(上）,5.0,张仑,副研究员,90,H4303,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 新闻传播学类\r\n\
	15 经济学院\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.03,高等数学B(上）,5.0,张仑,副研究员,90,H4303,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 新闻传播学类\r\n\
	15 经济学院\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.04,高等数学B(上）,5.0,石磊,副教授,90,H3306,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学院\r\n\
	15 新闻传播学类\r\n\
	15 公共事业管理\r\n\
	15 自然科学试验班\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.04,高等数学B(上）,5.0,石磊,副教授,90,H3306,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学院\r\n\
	15 新闻传播学类\r\n\
	15 公共事业管理\r\n\
	15 自然科学试验班\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.04,高等数学B(上）,5.0,石磊,副教授,90,H3306,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学院\r\n\
	15 新闻传播学类\r\n\
	15 公共事业管理\r\n\
	15 自然科学试验班\r\n\
	15 历史学类\r\n\
	15 旅游管理"\r\n\
	MATH120003.05,高等数学B(上）,5.0,黄云敏,副教授,70,HGX309,一 11-12 ,15级不得选修,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120003.05,高等数学B(上）,5.0,黄云敏,副教授,70,HGX309,三 11-12 ,15级不得选修,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120003.05,高等数学B(上）,5.0,黄云敏,副教授,70,HGX309,五 11-12 ,15级不得选修,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120005.01,高等数学C(上）,4.0,杭国明,高级讲师,110,H4204,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 药学\r\n\
	MATH120005.01,高等数学C(上）,4.0,杭国明,高级讲师,110,H4204,四 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 药学\r\n\
	MATH120005.02,高等数学C(上）,4.0,肖晓,高级讲师,110,H4101,一 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学(武警班)\r\n\
	15 留学生\r\n\
	15 法医学\r\n\
	15 预防医学"\r\n\
	MATH120005.02,高等数学C(上）,4.0,肖晓,高级讲师,110,H4101,四 6-8 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学(武警班)\r\n\
	15 留学生\r\n\
	15 法医学\r\n\
	15 预防医学"\r\n\
	MATH120005.03,高等数学C(上）,4.0,刘进,讲师,100,H4405,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 预防医学\r\n\
	15 基础医学\r\n\
	15 留学生\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学(武警班)\r\n\
	15 临床医学(五年制)"\r\n\
	MATH120005.03,高等数学C(上）,4.0,刘进,讲师,100,H4405,四 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 预防医学\r\n\
	15 基础医学\r\n\
	15 留学生\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学(武警班)\r\n\
	15 临床医学(五年制)"\r\n\
	MATH120005.04,高等数学C(上）,4.0,曲鹏,青年副研究员,100,H4403,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 临床医学(五年制)\r\n\
	15 法医学\r\n\
	15 留学生\r\n\
	15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	MATH120005.04,高等数学C(上）,4.0,曲鹏,青年副研究员,100,H4403,四 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 临床医学(五年制)\r\n\
	15 法医学\r\n\
	15 留学生\r\n\
	15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	MATH120005.05,高等数学C(上）,4.0,朱慧敏,高级讲师,100,H3206,一 3-5 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学(二军大)\r\n\
	15 临床医学(八年制)"\r\n\
	MATH120005.05,高等数学C(上）,4.0,朱慧敏,高级讲师,100,H3206,四 8-9 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学(二军大)\r\n\
	15 临床医学(八年制)"\r\n\
	MATH120005.06,高等数学C(上）,4.0,王剑波,讲师,100,H3108,一 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学(二军大)\r\n\
	15 临床医学(八年制)"\r\n\
	MATH120005.06,高等数学C(上）,4.0,王剑波,讲师,100,H3108,四 8-9 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学(二军大)\r\n\
	15 临床医学(八年制)"\r\n\
	MATH120005.07,高等数学C(上）,4.0,王剑波,讲师,60,H3305,一 11-13 ,15级不得选修,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120007.01,高等数学D,4.0,许虹,副教授,80,HGX409,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 新闻学(武警班)\r\n\
	15 社会科学试验班"\r\n\
	MATH120007.01,高等数学D,4.0,许虹,副教授,80,HGX409,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 新闻学(武警班)\r\n\
	15 社会科学试验班"\r\n\
	MATH120007.02,高等数学D,4.0,许虹,副教授,80,HGX409,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 社会科学试验班\r\n\
	15 新闻传播学类\r\n\
	15 新闻学(武警班)"\r\n\
	MATH120007.02,高等数学D,4.0,许虹,副教授,80,HGX409,四 11-13 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 社会科学试验班\r\n\
	15 新闻传播学类\r\n\
	15 新闻学(武警班)"\r\n\
	MATH120007.03,高等数学D,4.0,谷晓明,讲师,150,H3309,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 社会科学试验班\r\n\
	15 新闻学(武警班)\r\n\
	15 新闻传播学类"\r\n\
	MATH120007.03,高等数学D,4.0,谷晓明,讲师,150,H3309,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 社会科学试验班\r\n\
	15 新闻学(武警班)\r\n\
	15 新闻传播学类"\r\n\
	MATH120007.04,高等数学D,4.0,朱慧敏,高级讲师,80,H3206,二 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 艺术教育中心\r\n\
	15 护理学院"\r\n\
	MATH120007.04,高等数学D,4.0,朱慧敏,高级讲师,80,H3206,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 艺术教育中心\r\n\
	15 护理学院"\r\n\
	MATH120010.01,解析几何,3.0,傅吉祥,教授,100,HGX307,二 1-2 ,"周四34节双周习题课\r\n\
	习题课教师：周武斌博士后","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120010.01,解析几何,3.0,傅吉祥,教授,100,HGX307,四 3-4 ,周四34节双周习题课,习题课教师：周武斌博士后,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120010.02,解析几何,3.0,杨翎,副教授,100,HGX407,二 1-2 ,周四34节双周习题课,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120010.02,解析几何,3.0,杨翎,副教授,100,HGX407,四 3-4 ,周四34节双周习题课,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.01,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,一 6-7 ,"上海市精品课程\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.01,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,二 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.01,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,五 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.02,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,一 8-9 ,"上海市精品课程\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.02,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,二 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.02,高等代数Ⅰ,5.0,朱胜林,教授,40,HGX307,五 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.03,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,一 6-7 ,"上海市精品课程\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.03,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,二 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.03,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,五 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.04,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,一 8-9 ,"上海市精品课程\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.04,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,二 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120011.04,高等代数Ⅰ,5.0,谢启鸿,教授,40,HGX507,五 3-4 ,"上海市精品课程,\r\n\
	第一周周一习题课不上","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.01,数学分析AI,5.0,陈纪修,教授,40,HGX104,一 3-4 ,"国家精品课程\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.01,数学分析AI,5.0,陈纪修,教授,40,HGX104,三 3-4 ,"国家精品课程,\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.01,数学分析AI,5.0,陈纪修,教授,40,HGX104,四 6-7 ,"国家精品课程,\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.02,数学分析AI,5.0,陈纪修,教授,40,HGX104,一 3-4 ,"国家精品课程\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.02,数学分析AI,5.0,陈纪修,教授,40,HGX104,三 3-4 ,"国家精品课程\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.02,数学分析AI,5.0,陈纪修,教授,40,HGX104,四 8-9 ,"国家精品课程\r\n\
	国家教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.03,数学分析AI,5.0,严金海,副教授,80,HGX307,一 1-2 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.03,数学分析AI,5.0,严金海,副教授,40,HGX307,三 3-4 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.03,数学分析AI,5.0,严金海,副教授,40,HGX307,四 6-7 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 数学类\r\n\
	MATH120014.04,数学分析AI,5.0,楼红卫,教授,80,HGX408,一 3-4 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 数学类\r\n\
	15 经济学院"\r\n\
	MATH120014.04,数学分析AI,5.0,楼红卫,教授,80,HGX408,四 1-2 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 数学类\r\n\
	15 经济学院"\r\n\
	MATH120014.04,数学分析AI,5.0,楼红卫,教授,80,HGX408,五 8-9 ,国家精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 数学类\r\n\
	15 经济学院"\r\n\
	MATH120016.08,数学分析BI,5.0,王利彬,副教授,60,HGX205,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 技术科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120016.08,数学分析BI,5.0,王利彬,副教授,60,HGX205,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 技术科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120016.08,数学分析BI,5.0,王利彬,副教授,60,HGX205,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 技术科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120016.09,数学分析BI,5.0,谢纳庆,副教授,60,HGX404,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学类\r\n\
	15 技术科学试验班"\r\n\
	MATH120016.09,数学分析BI,5.0,谢纳庆,副教授,60,HGX404,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学类\r\n\
	15 技术科学试验班"\r\n\
	MATH120016.09,数学分析BI,5.0,谢纳庆,副教授,60,HGX404,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学类\r\n\
	15 技术科学试验班"\r\n\
	MATH120021.01,高等数学A(上）,5.0,金路,教授,100,H3109,一 3-4 ,"上海市精品课程\r\n\
	上海市教学名师","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 技术科学试验班\r\n\
	15 工商管理类\r\n\
	15 核科学与技术系\r\n\
	15 经济学类\r\n\
	15 新闻传播学类\r\n\
	15 自然科学试验班"\r\n\
	MATH120021.01,高等数学A(上）,5.0,金路,教授,100,H3109,三 1-2 ,"上海市精品课程\r\n\
	上海市教学名师","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120021.01,高等数学A(上）,5.0,金路,教授,100,H3109,五 3-4 ,"上海市精品课程\r\n\
	上海市教学名师","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH120021.02,高等数学A(上）,5.0,吴汉忠,副教授,100,H4106,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120021.02,高等数学A(上）,5.0,吴汉忠,副教授,100,H4106,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120021.02,高等数学A(上）,5.0,吴汉忠,副教授,100,H4106,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班"\r\n\
	MATH120021.03,高等数学A(上）,5.0,范恩贵,教授,100,H3209,一 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 自然科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120021.03,高等数学A(上）,5.0,范恩贵,教授,100,H3209,三 1-2 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 自然科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120021.03,高等数学A(上）,5.0,范恩贵,教授,100,H3209,五 3-4 ,上海市精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 自然科学试验班\r\n\
	15 经济学类"\r\n\
	MATH120021.04,高等数学A(上）,5.0,刘旭胜,讲师,100,H3101,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 自然科学试验班\r\n\
	15 经济学类\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	MATH120021.04,高等数学A(上）,5.0,刘旭胜,讲师,100,H3101,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 自然科学试验班\r\n\
	15 经济学类\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	MATH120021.04,高等数学A(上）,5.0,刘旭胜,讲师,100,H3101,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 工商管理类\r\n\
	15 自然科学试验班\r\n\
	15 经济学类\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	MATH120021.05,高等数学A(上）,5.0,周子翔,教授,100,H3208,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 经济学类\r\n\
	15 工商管理类\r\n\
	15 自然科学试验班"\r\n\
	MATH120021.05,高等数学A(上）,5.0,周子翔,教授,100,H3208,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 经济学类\r\n\
	15 工商管理类\r\n\
	15 自然科学试验班"\r\n\
	MATH120021.05,高等数学A(上）,5.0,周子翔,教授,100,H3208,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 经济学类\r\n\
	15 工商管理类\r\n\
	15 自然科学试验班"\r\n\
	MATH120021.06,高等数学A(上）,5.0,陆帅,副研究员,100,H4404,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班\r\n\
	15 工商管理类"\r\n\
	MATH120021.06,高等数学A(上）,5.0,陆帅,副研究员,100,H4404,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班\r\n\
	15 工商管理类"\r\n\
	MATH120021.06,高等数学A(上）,5.0,陆帅,副研究员,100,H4404,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 经济学类\r\n\
	15 自然科学试验班\r\n\
	15 技术科学试验班\r\n\
	15 工商管理类"\r\n\
	MATH120044.05,线性代数,3.0,杭国明,高级讲师,60,H6407,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 旅游管理\r\n\
	MATH120044.05,线性代数,3.0,杭国明,高级讲师,60,H6407,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 旅游管理\r\n\
	MATH130001.01,数学分析III,5.0,李洪全,教授,50,HGX407,一 6-7 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.01,数学分析III,5.0,李洪全,教授,50,HGX407,三 11-12 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.01,数学分析III,5.0,李洪全,教授,50,HGX407,五 6-7 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.02,数学分析III,5.0,李洪全,教授,50,HGX407,一 6-7 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.02,数学分析III,5.0,李洪全,教授,50,HGX407,三 11-12 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.02,数学分析III,5.0,李洪全,教授,50,HGX407,五 8-9 ,国家精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.03,数学分析III,5.0,肖体俊,教授,50,HGX308,一 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.03,数学分析III,5.0,肖体俊,教授,50,HGX308,三 8-9 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.03,数学分析III,5.0,肖体俊,教授,50,HGX308,五 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.04,数学分析III,5.0,肖体俊,教授,50,HGX308,一 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.04,数学分析III,5.0,肖体俊,教授,50,HGX308,三 8-9 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130001.04,数学分析III,5.0,肖体俊,教授,50,HGX308,五 8-9 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学类\r\n\
	MATH130004.01,常微分方程,3.0,林伟,教授,100,H3406,二 1-2 ,周五34节双周习题课,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130004.01,常微分方程,3.0,林伟,教授,100,H3406,五 3-4 ,周五34节双周习题课,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130004.02,常微分方程,3.0,张国华,教授,100,HGX408,三 3-4 ,周五34节双周习题课,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130004.02,常微分方程,3.0,张国华,教授,100,HGX408,五 3-4 ,周五34节双周习题课,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130005.01,抽象代数,3.0,陈猛,教授,100,HGX308,二 3-4 ,周四89节双周习题课,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130005.01,抽象代数,3.0,陈猛,教授,100,HGX308,四 8-9 ,周三89节双周习题课,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130005.02,抽象代数,3.0,王庆雪,副教授,100,HGX407,二 3-4 ,周四67节双周习题课,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130005.02,抽象代数,3.0,王庆雪,副教授,100,HGX407,四 6-7 ,周四67节双周习题课,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 数学类\r\n\
	MATH130006.01,复变函数,3.0,邱维元,教授,50,HGX405,二 3-4 ,周五12节双周习题课,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	MATH130006.01,复变函数,3.0,邱维元,教授,50,HGX405,五 1-2 ,周五12节双周习题课,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	MATH130007.01,实变函数,3.0,陈伯勇,教授,50,H3409,一 3-4 ,周四34节双周习题课,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH130007.01,实变函数,3.0,陈伯勇,教授,50,H3409,四 3-4 ,周四34节双周习题课,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MATH130009.01,概率论,3.0,张奇,副教授,100,H3109,五 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130009.02,概率论,3.0,谢践生,副教授,100,H3206,五 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130011.01,泛函分析,3.0,黄昭波,副教授,100,HGX508,二 3-4 ,习题课安排在14-16周上,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130011.01,泛函分析,3.0,黄昭波,副教授,100,HGX508,五 3-4 ,习题课安排在14-16周上,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130011.02,泛函分析,3.0,徐胜芝,副教授,100,H4101,二 1-2 ,每周四第1节习题课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130011.02,泛函分析,3.0,徐胜芝,副教授,100,H4101,四 1-2 ,每周四第1节习题课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 数学科学学院\r\n\
	MATH130012.01,数理方程,3.0,雷震,教授,50,H2101,三 3-4 ,周五34节双周习题课,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	MATH130012.01,数理方程,3.0,雷震,教授,50,H2101,五 3-4 ,周五34节双周习题课,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	MATH130013.01,微分几何,3.0,王志张,副研究员,160,H3308,一 6-8 ,周二89节双周习题课,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 数学与应用数学\r\n\
	MATH130013.01,微分几何,3.0,王志张,副研究员,160,H3308,二 8-9(双周),周二89节双周习题课,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 数学与应用数学\r\n\
	MATH130014.01,生产实习,1.0,应坚刚,教授,10,H院系自主,六 1-1 ,选修,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.01,毕业论文(含专题讨论),6.0,曹沅,正高级讲师,5,H4301,三 1-3 ,复旦教学名师,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.02,毕业论文(含专题讨论),6.0,吴宗敏,教授,5,HGX509,四 3-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.03,毕业论文(含专题讨论),6.0,林伟,教授,5,H2210,四 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.04,毕业论文(含专题讨论),6.0,赵冬华,副教授,5,H2209,四 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.05,毕业论文(含专题讨论),6.0,王_,副教授,5,H2112B,一 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.06,毕业论文(含专题讨论),6.0,田学廷,副教授,5,HGX405,五 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130015.07,毕业论文(含专题讨论),6.0,应志良,教授,5,H4405,三 6-8 ,统计方向,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 数学科学学院\r\n\
	MATH130017.01,微分流形,3.0,丁青,教授,20,H2113A,一 6-8(2-16周),从第二周开始上课,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130018.01,小波分析,3.0,张德志,讲师,20,H4205,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130021.01,计算几何,3.0,刘进,讲师,20,H4203,一 6-8 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130027.01,数学金融学,3.0,"汤善健\r\n\
	张静","教授\r\n\
	讲师",30,H2112A,四 3-5 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-12:30","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130030.01,专题讨论,2.0,赵冬华,副教授,20,HGX306,五 6-8 ,大维统计分析,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130032.01,动力系统,3.0,严军,教授,20,H2106B,一 6-8 ,要求选修学生有一定的理论力学基础，对Lagrange力学和Hamilton力学有初步的了解，修过实分析，泛函分析，拓扑学的本科课程,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130036.01,计算方法,3.0,高卫国,教授,40,H4101,三 1-3 ,"计算与信息方向\r\n\
	运筹与控制方向","考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 信息与计算科学\r\n\
	MATH130047.01,数理方程续论,3.0,王志强,副教授,20,HGX202,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130055.01,非寿险精算数学,3.0,李荣敏,副教授,50,HGX503,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130056.01,复分析,3.0,王_,副教授,20,H4106,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130057.01,控制理论基础,3.0,许亚善,副教授,30,H4403,三 6-8 ,运筹与控制方向,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 信息与计算科学\r\n\
	MATH130059.01,数据结构,3.0,朱松,副教授,20,H2105B,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130062.01,线性规划,3.0,杨卫红,教授,40,H2113A,四 6-8 ,运筹与控制方向,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 信息与计算科学\r\n\
	MATH130063.01,信息论基础,3.0,张德志,讲师,30,H2106A,四 6-8 ,计算与信息方向,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10",13 信息与计算科学\r\n\
	MATH130067.01,时间序列分析,3.0,"冯建峰\r\n\
	杨伟","教授\r\n\
	青年副研究员",20,HGX402,二 6-8 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130068.01,抽象代数续论,3.0,吴泉水,教授,20,HGX403,"一 1-2\r\n\
	(1-12周)",与研究生合上,"考试日期：2015-11-25\r\n\
	\r\n\
	考试时间：08:00-10:00","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130068.01,抽象代数续论,3.0,吴泉水,教授,20,HGX403,"三 1-2\r\n\
	(1-12周)",与研究生合上,"考试日期：2015-11-25\r\n\
	\r\n\
	考试时间：08:00-10:00","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130070.01,测度论,3.0,吴波,副研究员,20,HGX401,二 6-8 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130072.01,数值逼近,3.0,苏仰锋,教授,30,,"二 6-7\r\n\
	(2-16周双周)","计算与信息方向\r\n\
	周二下午在光华楼东主楼17楼机房上课\r\n\
	第一周上机课不上","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 信息与计算科学\r\n\
	MATH130072.01,数值逼近,3.0,苏仰锋,教授,30,HGX410,四 3-4 ,"计算与信息方向\r\n\
	周二下午在光华楼东主楼17楼机房上课\r\n\
	第一周上机课不上","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 信息与计算科学\r\n\
	MATH130073.01,数值代数,3.0,薛军工,教授,30,H2112B,四 6-8 ,计算与信息方向,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 信息与计算科学\r\n\
	MATH130074.01,积分方程数值解法,3.0,张云新,教授,20,H4203,三 6-8 ,计算方向,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",12 信息与计算科学\r\n\
	MATH130078.01,数学建模与实验(下),3.0,曹沅,正高级讲师,35,HGX310,三 6-9 ,"上海市精品课\r\n\
	复旦大学教学名师","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 数学科学学院\r\n\
	MATH130078.02,数学建模与实验(下),3.0,蔡志杰,教授,35,HGX310,三 6-9 ,"上海市精品课\r\n\
	复旦大学教学名师","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 数学科学学院\r\n\
	MATH130080.01,科学计算,3.0,魏益民,教授,20,HGX207,五 3-5 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-12:30","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130083.01,应用数学,2.0,蔡志杰,教授,60,HGX201,四 6-7 ,复旦教学名师,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:00-15:00",14 化学\r\n\
	MATH130091.01,数学分析原理,5.0,梁振国,副教授,50,H6508,一 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 数学类\r\n\
	15 数学类"\r\n\
	MATH130091.01,数学分析原理,5.0,梁振国,副教授,50,HGX503,三 8-9 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 数学类\r\n\
	15 数学类"\r\n\
	MATH130091.01,数学分析原理,5.0,梁振国,副教授,50,HGX503,五 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 数学类\r\n\
	15 数学类"\r\n\
	MATH130102.01,对策论,3.0,许亚善,副教授,60,H4205,一 1-3 ,运筹与控制方向,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：08:00-10:40",13 信息与计算科学\r\n\
	MATH130103.01,统计方法选讲,3.0,张淑芹,副教授,30,H2209,二 3-5 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-12:30","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130105.01,有限元方法,3.0,吴新明,讲师,20,HGX302,二 6-8 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130111.01,流形的拓扑学,3.0,吕志,教授,20,HGX309,五 6-8 ,与研究生合上,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130112.01,拓扑学Ⅱ,3.0,马继明,副教授,20,H2216,一 11-13 ,与研究生合上,"考试日期：2015-12-21\r\n\
	考试时间：18:30-21:05","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130113.01,几何拓扑选讲,3.0,马继明,副教授,20,H2106B,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130114.01,泛函分析续论,3.0,郭坤宇,教授,20,H4105,三 6-8 ,与研究生合上,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130115.01,现代概率论基础,3.0,谢践生,副教授,20,H2218,三 11-13 ,与研究生合上,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：18:30-21:05","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130118.01,Sobolev空间,3.0,陈文斌,教授,20,H3309,一 3-5 ,与研究生合上,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-12:30","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130121.01,现代偏微分方程,3.0,周忆,教授,20,H2214,三 3-5 ,与研究生合上,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-12:30","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130122.01,复流形,3.0,傅吉祥,教授,20,H3108,三 1-3 ,与研究生合上,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-10:40","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130125.01,椭圆曲线入门,3.0,王庆雪,副教授,20,H4404,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130127.01,变分法与偏微分方程,3.0,刘宪高,教授,20,H2207,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130130.01,代数几何初步,3.0,张毅,教授,20,H2208,四 8-10 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:25-18:00","12 数学科学学院\r\n\
	13 数学科学学院"\r\n\
	MATH130131.01,代数数论初步,3.0,王巨平,副教授,20,H4104,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	MATH130132.01,拓扑群,3.0,周国晖,青年副研究员,20,H4204,一 6-8 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-16:10","13 数学科学学院\r\n\
	12 数学科学学院"\r\n\
	PHYS120003.01,普通物理B,3.0,冀敏,副教授,40,H2218,二 1-2 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 留学生 临床医学院\r\n\
	15 留学生 基础医学院"\r\n\
	PHYS120003.01,普通物理B,3.0,冀敏,副教授,40,H2218,四 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 留学生 临床医学院\r\n\
	15 留学生 基础医学院"\r\n\
	PHYS120003.02,普通物理B,3.0,冀敏,副教授,50,JB102,四 8-10 ,校级精品课程团队,"考试日期：\r\n\
	2015-12-24\r\n\
	考试时间：15:25--18:00\r\n\
	",\r\n\
	PHYS120003.03,普通物理B,3.0,杜四德,副教授,120,H2201,一 1-2 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学（二军大）\r\n\
	15 预防医学(武警班)\r\n\
	15 预防医学"\r\n\
	PHYS120003.03,普通物理B,3.0,杜四德,副教授,120,H2201,三 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 八年制临床医学（二军大）\r\n\
	15 预防医学(武警班)\r\n\
	15 预防医学"\r\n\
	PHYS120003.04,普通物理B,3.0,杜四德,副教授,120,H2115,二 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(八年制)\r\n\
	15 药学\r\n\
	15 法医学"\r\n\
	PHYS120003.04,普通物理B,3.0,杜四德,副教授,120,H3308,四 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(八年制)\r\n\
	15 药学\r\n\
	15 法医学"\r\n\
	PHYS120003.05,普通物理B,3.0,符维娟,讲师,120,H2220,二 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 药学\r\n\
	15 临床医学(五年制)\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 基础医学\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120003.05,普通物理B,3.0,符维娟,讲师,120,H3209,四 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 药学\r\n\
	15 临床医学(五年制)\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 基础医学\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120003.06,普通物理B,3.0,吕景林,副教授,120,H2214,二 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 药学\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120003.06,普通物理B,3.0,吕景林,副教授,120,H3208,四 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 基础医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 药学\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120003.07,普通物理B,3.0,修发贤,研究员,120,H2101,二 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 临床医学(八年制)\r\n\
	15 临床医学(五年制)\r\n\
	15 药学\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 基础医学"\r\n\
	PHYS120003.07,普通物理B,3.0,修发贤,研究员,120,H2101,四 3-4 ,校级精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 临床医学(八年制)\r\n\
	15 临床医学(五年制)\r\n\
	15 药学\r\n\
	15 法医学\r\n\
	15 临床医学(五年制)(武警班)\r\n\
	15 基础医学"\r\n\
	PHYS120003.08,普通物理B,3.0,刘_韬,研究员,30,HGD405,三 1-2 ,"全英语教学\r\n\
	校级精品课程团队","考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 临床医学(六年制)\r\n\
	PHYS120003.08,普通物理B,3.0,刘_韬,研究员,30,HGD405,五 3-4 ,"全英语教学\r\n\
	校级精品课程团队","考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 临床医学(六年制)\r\n\
	PHYS120013.01,大学物理B(上),4.0,石磊,青年研究员,60,H3109,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.01,大学物理B(上),4.0,石磊,青年研究员,60,H3106,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.01,大学物理B(上),4.0,石磊,青年研究员,60,H3109,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.01,大学物理B(上),4.0,石磊,青年研究员,60,H3109,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.02,大学物理B(上),4.0,张远波,教授,60,H4204,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 核工程与核技术"\r\n\
	PHYS120013.02,大学物理B(上),4.0,张远波,教授,60,H4201,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 核工程与核技术"\r\n\
	PHYS120013.02,大学物理B(上),4.0,张远波,教授,60,H4204,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 核工程与核技术"\r\n\
	PHYS120013.02,大学物理B(上),4.0,张远波,教授,60,H4204,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 自然科学试验班\r\n\
	15 核工程与核技术"\r\n\
	PHYS120013.03,大学物理B(上),4.0,向红军,教授,60,H3306,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.03,大学物理B(上),4.0,向红军,教授,60,H3206,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.03,大学物理B(上),4.0,向红军,教授,60,H3306,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.03,大学物理B(上),4.0,向红军,教授,60,H3306,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.04,大学物理B(上),4.0,张童,副研究员,60,HGX103,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.04,大学物理B(上),4.0,张童,副研究员,60,HGX103,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.04,大学物理B(上),4.0,张童,副研究员,60,HGX507,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.04,大学物理B(上),4.0,张童,副研究员,60,HGX103,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.05,大学物理B(上),4.0,谭鹏,青年研究员,60,HGX104,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.05,大学物理B(上),4.0,谭鹏,青年研究员,60,HGX104,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.05,大学物理B(上),4.0,谭鹏,青年研究员,60,HGX408,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.05,大学物理B(上),4.0,谭鹏,青年研究员,60,HGX104,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120013.06,大学物理B(上),4.0,陆明,教授,60,H4103,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.06,大学物理B(上),4.0,陆明,教授,60,H4201,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.06,大学物理B(上),4.0,陆明,教授,60,H4103,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.06,大学物理B(上),4.0,陆明,教授,60,H4103,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.07,大学物理B(上),4.0,庄军,教授,60,H4205,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.07,大学物理B(上),4.0,庄军,教授,60,H4206,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.07,大学物理B(上),4.0,庄军,教授,60,H4206,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.07,大学物理B(上),4.0,庄军,教授,60,H4206,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.08,大学物理B(上),4.0,王松有,教授,60,H4105,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	PHYS120013.08,大学物理B(上),4.0,王松有,教授,60,H4106,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	PHYS120013.08,大学物理B(上),4.0,王松有,教授,60,H4106,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	PHYS120013.08,大学物理B(上),4.0,王松有,教授,60,H4106,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班\r\n\
	15 新闻传播学类"\r\n\
	PHYS120013.09,大学物理B(上),4.0,倪刚,副教授,60,H4101,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.09,大学物理B(上),4.0,倪刚,副教授,60,H4104,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.09,大学物理B(上),4.0,倪刚,副教授,60,H4104,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.09,大学物理B(上),4.0,倪刚,副教授,60,H4104,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.10,大学物理B(上),4.0,张浩,副教授,60,H4404,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.10,大学物理B(上),4.0,张浩,副教授,60,H4405,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.10,大学物理B(上),4.0,张浩,副教授,60,H4405,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.10,大学物理B(上),4.0,张浩,副教授,60,H4405,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.11,大学物理B(上),4.0,詹义强,副研究员,60,H4303,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.11,大学物理B(上),4.0,詹义强,副研究员,60,H4306,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.11,大学物理B(上),4.0,詹义强,副研究员,60,H4303,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.11,大学物理B(上),4.0,詹义强,副研究员,60,H4303,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻传播学类\r\n\
	15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	PHYS120013.12,大学物理B(上),4.0,孙晓光,副教授,60,H4301,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.12,大学物理B(上),4.0,孙晓光,副教授,60,H4304,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.12,大学物理B(上),4.0,孙晓光,副教授,60,H4304,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.12,大学物理B(上),4.0,孙晓光,副教授,60,H4304,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.13,大学物理B(上),4.0,马世红,教授,60,H2201,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.13,大学物理B(上),4.0,马世红,教授,60,H2208,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.13,大学物理B(上),4.0,马世红,教授,60,H2201,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.13,大学物理B(上),4.0,马世红,教授,60,H2201,四 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 新闻传播学类\r\n\
	15 技术科学试验班"\r\n\
	PHYS120013.14,大学物理B(上),4.0,殷立峰,副研究员,100,H3108,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	PHYS120013.14,大学物理B(上),4.0,殷立峰,副研究员,100,H3201,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	PHYS120013.14,大学物理B(上),4.0,殷立峰,副研究员,100,H3201,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	PHYS120013.14,大学物理B(上),4.0,殷立峰,副研究员,100,H3201,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	PHYS120013.15,大学物理B(上),4.0,黄敏,助理研究员,60,H6504,二 1-2,上海市精品课程团队,,15 自然科学试验班\r\n\
	,,,,,,H6504,三 8-9(双周),,,\r\n\
	,大学物理B(上),4.0,黄敏,助理研究员,60,H6505,,,,15 自然科学试验班\r\n\
	,大学物理B(上),4.0,黄敏,助理研究员,60,H6504,四 3-4,,,15 自然科学试验班\r\n\
	PHYS120014.01,大学物理B(下),4.0,吴骅,研究员,90,H2214,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.01,大学物理B(下),4.0,吴骅,研究员,90,H2215,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.01,大学物理B(下),4.0,吴骅,研究员,90,H2214,一 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.01,大学物理B(下),4.0,吴骅,研究员,90,H2214,三 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.02,大学物理B(下),4.0,吴施伟,教授,90,H2218,"一 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.02,大学物理B(下),4.0,吴施伟,教授,90,H2220,一 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.02,大学物理B(下),4.0,吴施伟,教授,90,H2220,一 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120014.02,大学物理B(下),4.0,吴施伟,教授,90,H2220,三 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 数学科学学院\r\n\
	PHYS120015.01,基础物理实验,2.0,,,96,H3209,"一 12:45-15:00\r\n\
	(1-2周)","国家级精品课程团队 \r\n\
	具体实验任课教师开学第一周见实验中心网页\r\n\
	(http://phylab.fudan.edu.cn)或光华楼西辅楼8楼实验室橱窗","考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)"\r\n\
	PHYS120015.01,基础物理实验,2.0,,,96,"\r\n\
	H光华西辅8楼","一 12:45-15:00\r\n\
	(3-16周)","国家级精品课程团队 \r\n\
	具体实验任课教师\r\n\
	开学第一周见实验中心网页\r\n\
	(http://phylab.fudan.edu.cn)\r\n\
	或光华楼西辅楼8楼实验室橱窗","考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)"\r\n\
	PHYS120015.02,基础物理实验,2.0,,,86,H3209,"一 15:25-17:40\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)"\r\n\
	PHYS120015.02,基础物理实验,2.0,,,86,H光华西辅8楼,"一 15:25-17:40\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 临床医学(五年制)\r\n\
	15 临床医学(五年制)(武警班)"\r\n\
	PHYS120015.03,基础物理实验,2.0,,,90,H3209,"二  8:55-11:10\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	PHYS120015.03,基础物理实验,2.0,,,90,H光华西辅8楼,"二  8:55-11:10\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	PHYS120015.04,基础物理实验,2.0,,,96,H3209,"二 15:25-17:40\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 临床医学(八年制)\r\n\
	PHYS120015.04,基础物理实验,2.0,,,96,H光华西辅8楼,"二 15:25-17:40\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 临床医学(八年制)\r\n\
	PHYS120015.05,基础物理实验,2.0,,,96,H3209,"三 12:45-15:00\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",14 数学科学学院\r\n\
	PHYS120015.05,基础物理实验,2.0,,,96,H光华西辅8楼,"三 12:45-15:00\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",14 数学科学学院\r\n\
	PHYS120015.06,基础物理实验,2.0,,,90,H3209,"三 15:25-17:40\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 药学\r\n\
	PHYS120015.06,基础物理实验,2.0,,,90,H光华西辅8楼,"三 15:25-17:40\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 药学\r\n\
	PHYS120015.07,基础物理实验,2.0,,,54,H3209,"四 12:45-15:00\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",14 数学科学学院\r\n\
	PHYS120015.07,基础物理实验,2.0,,,54,H光华西辅8楼,"四 12:45-15:00\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",14 数学科学学院\r\n\
	PHYS120015.08,基础物理实验,2.0,,,96,H3209,"四 15:25-17:40\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 自然科学试验班\r\n\
	PHYS120015.08,基础物理实验,2.0,,,96,H光华西辅8楼,"四 15:25-17:40\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00",15 自然科学试验班\r\n\
	PHYS120015.09,基础物理实验,2.0,,,76,H3209,"五 12:45-15:00\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 八年制临床医学（二军大）\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120015.09,基础物理实验,2.0,,,76,H光华西辅8楼,"五 12:45-15:00\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 八年制临床医学（二军大）\r\n\
	15 临床医学(八年制)"\r\n\
	PHYS120015.10,基础物理实验,2.0,,,96,H3209,"五 15:25-17:40\r\n\
	(1-2周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 法医学\r\n\
	15 留学生\r\n\
	15 核工程与核技术\r\n\
	15 基础医学"\r\n\
	PHYS120015.10,基础物理实验,2.0,,,96,H光华西辅8楼,"五 15:25-17:40\r\n\
	(3-16周)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-14:00","15 法医学\r\n\
	15 留学生\r\n\
	15 核工程与核技术\r\n\
	15 基础医学"\r\n\
	PHYS120016.01,大学物理A：力学,4.0,蒋最敏,教授,80,H2201,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.01,大学物理A：力学,4.0,蒋最敏,教授,80,H2115,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.01,大学物理A：力学,4.0,蒋最敏,教授,80,H2201,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.01,大学物理A：力学,4.0,蒋最敏,教授,80,H2201,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.02,大学物理A：力学,4.0,刘晓晗,教授,80,H2220,二 1-2 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.02,大学物理A：力学,4.0,刘晓晗,教授,80,H2214,"三 8-9\r\n\
	(2-16周双周)",上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.02,大学物理A：力学,4.0,刘晓晗,教授,80,H2220,三 8-9(2-16周双周),上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS120016.02,大学物理A：力学,4.0,刘晓晗,教授,80,H2220,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	PHYS130002.01,线性代数与概率统计,3.0,朱胜林,教授,120,H4201,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 物理学系\r\n\
	PHYS130002.01,线性代数与概率统计,3.0,朱胜林,教授,120,H4201,四 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 物理学系\r\n\
	PHYS130003.01,经典力学,3.0,徐晓华,副教授,120,H3106,一 3-4 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 物理学系\r\n\
	PHYS130003.01,经典力学,3.0,徐晓华,副教授,120,H3106,三 1-2 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 物理学系\r\n\
	PHYS130004.01,物理实验(上),2.0,"岑剡\r\n\
	白翠琴\r\n\
	晏湖根\r\n\
	陈元杰","工程师\r\n\
	工程师\r\n\
	研究员\r\n\
	工程师",30,H物理楼3楼,四 6-8 ,"国家级精品课程团队\r\n\
	要求修过《基础物理实验》\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 光信息科学与技术\r\n\
	PHYS130004.02,物理实验(上),2.0,"岑剡\r\n\
	白翠琴\r\n\
	晏湖根\r\n\
	陈元杰","工程师\r\n\
	工程师\r\n\
	研究员\r\n\
	工程师",30,H物理3楼,四 6-8 ,"国家级精品课程团队\r\n\
	要求修过《基础物理实验》\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 核工程与核技术\r\n\
	PHYS130004.03,物理实验(上),2.0,"岑剡\r\n\
	白翠琴\r\n\
	周诗韵\r\n\
	陈元杰","工程师\r\n\
	工程师\r\n\
	讲师\r\n\
	工程师",60,H物理3楼,一 6-8 ,"国家级精品课程团队\r\n\
	要求修过《基础物理实验》\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 物理学系\r\n\
	PHYS130004.04,物理实验(上),2.0,"白翠琴\r\n\
	周诗韵\r\n\
	马世红\r\n\
	陈元杰","工程师\r\n\
	讲师\r\n\
	教授\r\n\
	工程师",60,H物理三楼,三 6-8 ,"国家级精品课程团队\r\n\
	要求修过《基础物理实验》\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 物理学系\r\n\
	PHYS130006.01,数学物理方法A,4.0,马永利,教授,26,HGX206,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 核工程与核技术\r\n\
	PHYS130006.01,数学物理方法A,4.0,马永利,教授,26,HGX206,五 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 核工程与核技术\r\n\
	PHYS130008.01,量子力学I,4.0,吴长勤,教授,150,H4101,二 3-5 ,国家级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 物理学系\r\n\
	PHYS130008.01,量子力学I,4.0,吴长勤,教授,150,H4101,五 3-5 ,国家级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 物理学系\r\n\
	PHYS130009.01,电动力学,3.0,周磊,教授,150,H2115,一 3-4 ,校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 物理学系\r\n\
	PHYS130009.01,电动力学,3.0,周磊,教授,150,H2115,四 3-4 ,校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 物理学系\r\n\
	PHYS130009.01,电动力学,3.0,周磊,教授,150,H3404,四 3-4(1-16周),校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 物理学系\r\n\
	PHYS130017.01,半导体物理A,3.0,陆_,教授,8,H光华东主楼2902,五 6-8(2-16周双周),上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 物理学系\r\n\
	12 物理学系"\r\n\
	PHYS130019.01,表面物理,3.0,杨新菊,教授,30,H4105,三 3-5 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-12:30",12 物理学系\r\n\
	PHYS130020.01,低温和超导物理,3.0,王熠华,,30,HGX309,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10",12 物理学系\r\n\
	PHYS130031.01,C语言程序设计,2.0,左光宏,副教授,25,H3104,五 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 物理学系\r\n\
	PHYS130035.01,热力学与统计物理II,3.0,黄旭光,青年研究员,60,HGX103,五 3-5 ,国家级精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",12 物理学系\r\n\
	PHYS130036.01,量子力学II,3.0,肖江,教授,60,HGX103,一 6-8 ,国家级精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 物理学系\r\n\
	PHYS130042.01,应用数学,3.0,徐建军,副教授,80,H4105,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:10",13 物理学系\r\n\
	PHYS130055.01,近代物理A,4.0,徐晓华,副教授,80,H3306,二 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 材料物理\r\n\
	14 电子科学与技术"\r\n\
	PHYS130055.01,近代物理A,4.0,徐晓华,副教授,80,H3306,五 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 材料物理\r\n\
	14 电子科学与技术"\r\n\
	PHYS130056.01,近代物理实验A,3.0,"李世燕\r\n\
	侯晓远\r\n\
	殳蕾","教授\r\n\
	教授\r\n\
	副研究员",54,H物理楼3楼,三 3-9 ,"国家级精品课程团队\r\n\
	第三阶段不开放选课限制\r\n\
	不接受中期退课\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 光信息科学与技术\r\n\
	13 材料物理"\r\n\
	PHYS130056.03,近代物理实验A,3.0,"俞熹\r\n\
	何琼\r\n\
	姚红英","高级讲师\r\n\
	讲师\r\n\
	讲师",28,H物理楼3楼,四 3-9 ,"国家级精品课程团队\r\n\
	第三阶段不开放选课限制\r\n\
	不接受中期退课\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 电子科学与技术\r\n\
	PHYS130058.01,近代物理实验I,4.0,"俞熹\r\n\
	何琼\r\n\
	姚红英","高级讲师\r\n\
	讲师\r\n\
	讲师",26,H物理三楼,四 3-9 ,"国家级精品课程团队\r\n\
	第三阶段不开放选课限制\r\n\
	不接受中期退课\r\n\
	第一周绪论课在物理楼221B","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 核工程与核技术\r\n\
	PHYS130061.01,近代物理实验II,3.0,乐永康,,20,H物理楼,四 3-8 ,国家级精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130062.01,科研实践,2.0,陶瑞宝,教授,50,H院系自主,六 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 物理学系\r\n\
	PHYS130067.01,量子计算与量子信息,3.0,施郁,教授,30,HGX210,一 3-4(5-16周),,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",12 物理学系\r\n\
	PHYS130067.01,量子计算与量子信息,3.0,施郁,教授,30,HGX210,二 3-4(5-16周),,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",12 物理学系\r\n\
	PHYS130069.01,量子场论,3.0,Antonino Marciano,青年研究员,30,HGX410,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-16:10",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,,20,HGX206,"一 1-2\r\n\
	(第2周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"一 9-10\r\n\
	（2-3周）",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"二 1-2\r\n\
	(第3周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"二 6-7\r\n\
	（2-3周）",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"三 9-10\r\n\
	(第2周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"三 1-2\r\n\
	（2-3周）",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"四 1-2\r\n\
	(第3周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"四 9-10\r\n\
	（2-3周）",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"五 1-2\r\n\
	(第3周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"五 9-10\r\n\
	(第3周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130076.01,经济物理,2.0,陈昱,教授,20,HGX206,"六 3-4\r\n\
	(第3周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130077.01,设计性研究性物理实验,3.0,乐永康等,,30,H物理3楼,三 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 物理学系\r\n\
	PHYS130088.01,医学物理实验,2.0,"冀敏\r\n\
	季敏标\r\n\
	姚红英","副教授\r\n\
	研究员\r\n\
	讲师",36,H逸夫科技楼407,五 13:05-15:20 ,上海市精品课程团队,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","基础医学院\r\n\
	临床医学院"\r\n\
	PHYS130088.02,医学物理实验,2.0,"冀敏\r\n\
	季敏标\r\n\
	姚红英","副教授\r\n\
	研究员\r\n\
	讲师",30,H逸夫科技楼407,五 8-10 ,上海市精品课程团队,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",物理学系\r\n\
	PHYS130089.01,量子光学,3.0,吴赛骏,研究员,30,HGX106,一 3-5 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-12:30",12 物理学系\r\n\
	PHYS130090.01,软凝聚态物理导论,3.0,谭鹏,青年研究员,30,HGX105,五 11-13 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:30-21:05",12 物理学系\r\n\
	PHYS130092.01,大学物理A：光学,3.0,资剑,教授,120,H4201,二 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 物理学系\r\n\
	PHYS130092.01,大学物理A：光学,3.0,资剑,教授,120,H4201,四 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 物理学系\r\n\
	PHYS130098.01,计算物理模拟实验,3.0,龚新高,教授,6,H院系自主,六 2-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 物理学系\r\n\
	PHYS130102.01,生活中的物理学,2.0,Andrey Varlamov,,80,HGX410,"一 11-13\r\n\
	(3-7周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",物理学系\r\n\
	PHYS130102.01,生活中的物理学,2.0,Andrey Varlamov,,80,HGX410,"四 11-13\r\n\
	(3-7周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",物理学系\r\n\
	TCPH130002.01,辐射防护,2.0,王旭飞,副研究员,40,H2215,一 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 核工程与核技术\r\n\
	TCPH130003.01,核辐射探测与测量方法,3.0,张雪梅,副教授,35,H2207,二 3-5 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	TCPH130005.01,核技术概论,3.0,沈皓,教授,35,H2216,三 3-5 ,"全英语教学\r\n\
	校精品课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	TCPH130008.01,核技术综合实验,3.0,"张雪梅\r\n\
	张斌\r\n\
	王旭飞\r\n\
	肖君\r\n\
	沈皓\r\n\
	施立群","副教授\r\n\
	副研究员\r\n\
	副研究员\r\n\
	副研究员\r\n\
	教授\r\n\
	研究员",30,,二 6-9 ,限核技术专业,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130008.01,核技术综合实验,3.0,"张雪梅\r\n\
	张斌\r\n\
	王旭飞\r\n\
	肖君\r\n\
	沈皓\r\n\
	施立群","副教授\r\n\
	副研究员\r\n\
	副研究员\r\n\
	副研究员\r\n\
	教授\r\n\
	研究员",30,,五 1-2 ,限核技术专业,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130009.01,生产实习,1.0,陆广成,助理研究员,30,,六 3-3 ,限核技术专业,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130011.01,核科学与技术前沿讲座,2.0,陆广成,助理研究员,30,,六 4-5 ,限核技术专业,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130014.01,原子物理学,3.0,赵凯锋,副研究员,40,H2216,一 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 核工程与核技术\r\n\
	TCPH130014.01,原子物理学,3.0,赵凯锋,副研究员,40,H2216,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 核工程与核技术\r\n\
	TCPH130015.01,同位素分离技术,2.0,傅云清,副研究员,55,H4304,三 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：15:30-17:30","13 核工程与核技术\r\n\
	12 核技术"\r\n\
	TCPH130016.01,误差分析和数据处理,2.0,李增花,副教授,35,H4303,三 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",14 核工程与核技术\r\n\
	TCPH130017.01,薄膜物理与技术,2.0,施立群,研究员,25,H2217,三 3-4 ,部分课程安排参观实践,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",12 核技术\r\n\
	TCPH130018.01,核聚变等离子体物理,2.0,肖君,副研究员,25,H2104B,四 6-7 ,全英语教学,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130021.01,真空技术,2.0,施立群,研究员,35,H2217,一 8-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",13 核工程与核技术\r\n\
	TCPH130022.01,生命科学中的微量元素,2.0,沈皓,教授,25,H2104B,四 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130023.01,科技英语写作,2.0,Roger Hutton,教授,55,H3404,三 8-9 ,全英语教学,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：15:30-17:30","12 核技术\r\n\
	13 核工程与核技术"\r\n\
	TCPH130025.01,核电厂安全,2.0,陈建新,研究员,25,H2102B,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 核技术\r\n\
	TCPH130028.01,理论物理（下）,4.0,李增花,副教授,25,H4408,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	TCPH130028.01,理论物理（下）,4.0,李增花,副教授,25,H4304,五 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	TCPH130034.01,信号处理与总线,2.0,沈扬,助理研究员,35,H2207,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	TCPH130035.01,计算物理基础,2.0,王月霞,副教授,35,H2215,一 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",13 核工程与核技术\r\n\
	CHEM120005.01,普通化学A（上）,2.0,华伟明,教授,80,H4305,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120005.02,普通化学A（上）,2.0,赵东元,教授,100,H4205,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120005.03,普通化学A（上）,2.0,姚萍,教授,80,H4306,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120005.04,普通化学A（上）,2.0,岳斌,教授,80,H4403,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120005.05,普通化学A（上）,2.0,郑耿锋,教授,30,HGX408,二 3-4 ,"全英文授课\r\n\
	上海市精品","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120005.06,普通化学A（上）,2.0,华伟明,教授,130,H4401,五 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","药学\r\n\
	八年制临床医学(二军大)\r\n\
	临床医学(八年制)\r\n\
	预防医学"\r\n\
	CHEM120005.07,普通化学A（上）,2.0,张亚红,教授,130,H4301,五 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","预防医学(武警班)\r\n\
	八年制临床医学(二军大)\r\n\
	预防医学\r\n\
	临床医学(八年制)\r\n\
	药学"\r\n\
	CHEM120005.08,普通化学A（上）,2.0,王丛笑,副教授,110,H4201,五 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","八年制临床医学(二军大)\r\n\
	预防医学\r\n\
	药学\r\n\
	临床医学(八年制)"\r\n\
	CHEM120005.09,普通化学A（上）,2.0,郑耿锋,教授,40,HGX402,一 3-4 ,"全英文授课\r\n\
	上海市精品","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",临床医学(六年制)\r\n\
	CHEM120007.01,普通化学B（上）,2.0,侯秀峰,教授,60,H4505,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120007.02,普通化学B（上）,2.0,沈建中,副教授,60,H4406,二 3-4 ,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",自然科学试验班\r\n\
	CHEM120009.01,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"一 6-9\r\n\
	(1-16周单周)","选周一双周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.02,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"一 6-9\r\n\
	(2-16周双周)","选周一单周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.03,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"四 6-9\r\n\
	(1-16周单周)","选周四双周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.04,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"四 6-9\r\n\
	(2-16周双周)","选周四单周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.05,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"五 6-9\r\n\
	(1-16周单周)","选周五双周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.06,普通化学实验I,1.0,沈建中,副教授,84,H老化1楼,"五 6-9\r\n\
	(2-16周双周)","选周五单周现代生物科学实验的学生选修\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",自然科学试验班\r\n\
	CHEM120009.07,普通化学实验I,1.0,沈建中,副教授,10,H老化1楼,日 14-14 ,"限转入14级化学系、高分子系学生\r\n\
	第0周周一、二、三、五上课\r\n\
	第三次选课才开放\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 高分子科学系\r\n\
	14 化学系"\r\n\
	CHEM120009.07,普通化学实验I,1.0,沈建中,副教授,10,,日 14-14(1-16周),"限转入14级化学系、高分子系学生\r\n\
	第0周周一、二、三、五上课\r\n\
	第三次选课才开放\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 高分子科学系\r\n\
	14 化学系"\r\n\
	CHEM120009.08,普通化学实验I,1.0,沈建中,副教授,30,H老化1楼,日 14-14 ,"第0周周一、二、三、五上课\r\n\
	第三次选课才开放\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 材料科学系\r\n\
	CHEM120009.08,普通化学实验I,1.0,沈建中,副教授,30,,日 14-14(1-16周),"第0周周一、二、三、五上课\r\n\
	第三次选课才开放\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 材料科学系\r\n\
	CHEM120009.09,普通化学实验I,1.0,陈末华,副教授,28,H老化1楼,"二 6-9\r\n\
	(1-16周单周)","全英文授课\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",临床医学(六年制)\r\n\
	CHEM120010.01,普通化学实验II,1.0,沈建中,副教授,10,,日 14-14 ,"限转入14级化学系、高分子系学生\r\n\
	第三次选课才开放\r\n\
	复旦大学精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 化学系\r\n\
	14 高分子科学系"\r\n\
	CHEM120013.01,普通化学C,3.0,侯秀峰,教授,120,H3106,三 3-4,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","临床医学(五年制)\r\n\
	基础医学\r\n\
	法医学"\r\n\
	CHEM120013.01,普通化学C,3.0,侯秀峰,教授,120,H3106,"五 3-4\r\n\
	(单周)",上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","临床医学(五年制)\r\n\
	基础医学\r\n\
	法医学"\r\n\
	CHEM120013.02,普通化学C,3.0,沈建中,副教授,110,H3206,三 3-4,上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","临床医学(五年制)\r\n\
	法医学\r\n\
	基础医学"\r\n\
	CHEM120013.02,普通化学C,3.0,沈建中,副教授,110,H3206,"五 3-4\r\n\
	(单周)",上海市精品,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30","临床医学(五年制)\r\n\
	法医学\r\n\
	基础医学"\r\n\
	CHEM120013.03,普通化学C,3.0,陈萌,副教授,20,H3405,三 3-4,"上海市精品\r\n\
	临床五年留学生","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",临床医学(五年制)\r\n\
	CHEM120013.03,普通化学C,3.0,陈萌,副教授,20,H3405,"五 3-4\r\n\
	(单周)","上海市精品\r\n\
	临床五年留学生","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",临床医学(五年制)\r\n\
	CHEM130001.01,分析化学AⅠ,2.0,刘宝红,教授,60,H4103,二 1-2 ,复旦大学精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 化学系\r\n\
	CHEM130001.02,分析化学AⅠ,2.0,樊惠芝,正高级讲师,40,H4104,二 1-2 ,"建议拔尖班学生修读\r\n\
	复旦大学精品课程","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 化学系\r\n\
	CHEM130001.03,分析化学AⅠ,2.0,张松,副教授,40,H4105,二 1-2 ,复旦大学精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 高分子科学系\r\n\
	CHEM130003.01,无机化学和化学分析实验Ⅰ,2.0,"赵滨\r\n\
	樊惠芝","高级讲师\r\n\
	正高级讲师",45,H老化2楼,"一 1-9\r\n\
	(1-16周单周)",上海市精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 化学系\r\n\
	CHEM130003.02,无机化学和化学分析实验Ⅰ,2.0,"赵滨\r\n\
	樊惠芝","高级讲师\r\n\
	正高级讲师",36,H老化2楼,"三 1-9\r\n\
	(1-16周单周)","建议拔尖班学生修读\r\n\
	上海市精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 化学系\r\n\
	CHEM130003.03,无机化学和化学分析实验Ⅰ,2.0,"汪伟志\r\n\
	赵滨","副教授\r\n\
	高级讲师",30,H老化2楼,三 1-9,上海市精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 高分子科学系\r\n\
	CHEM130003.04,无机化学和化学分析实验Ⅰ,2.0,赵滨,高级讲师,30,H老化2楼,"三 1-9\r\n\
	(2-16周双周)",上海市精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 材料化学\r\n\
	CHEM130004.01,无机化学和化学分析实验Ⅱ,2.0,"赵滨\r\n\
	樊惠芝","高级讲师\r\n\
	正高级讲师",45,H老化2楼,"一 1-9\r\n\
	(2-16周双周)",上海市精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 化学系\r\n\
	CHEM130004.02,无机化学和化学分析实验Ⅱ,2.0,"赵滨\r\n\
	樊惠芝","高级讲师\r\n\
	正高级讲师",36,H老化2楼,"三 1-9\r\n\
	(2-16周双周)","建议拔尖班学生修读\r\n\
	上海市精品课程","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 化学系\r\n\
	CHEM130006.01,仪器分析和物理化学实验A中,2.0,"刘永梅\r\n\
	戴维林","副教授\r\n\
	教授",125,H老化3楼,"三 1-9\r\n\
	(2-16周双周)",复旦大学精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 化学系\r\n\
	CHEM130006.02,仪器分析和物理化学实验A中,2.0,"刘旭军\r\n\
	刘永梅\r\n\
	冯嘉春\r\n\
	钱再波","副教授\r\n\
	副教授\r\n\
	教授\r\n\
	讲师",70,H老化3楼,"五 1-9\r\n\
	(2-16周双周)",复旦大学精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 高分子材料与工程\r\n\
	13 材料化学"\r\n\
	CHEM130011.01,合成化学实验(下),2.0,"匡云艳\r\n\
	高翔","\r\n\
	教授",125,H老化3楼,"三 1-9\r\n\
	(1-16周单周)",复旦大学精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 化学系\r\n\
	CHEM130011.02,合成化学实验(下),2.0,"姚晋荣\r\n\
	匡云艳\r\n\
	俞麟\r\n\
	程元荣\r\n\
	钱再波","讲师\r\n\
	\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师",70,H老化3楼,"五 1-9\r\n\
	(1-16周单周)",复旦大学精品课程,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 材料化学\r\n\
	13 高分子材料与工程"\r\n\
	CHEM130012.01,物理化学AⅠ,3.0,周鸣飞,教授,60,H4104,"三 3-4\r\n\
	(1-16周单周)",国家精品,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130012.01,物理化学AⅠ,3.0,周鸣飞,教授,60,H4104,五 3-4 ,国家精品,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130012.02,物理化学AⅠ,3.0,"徐昕\r\n\
	吴剑鸣","教授\r\n\
	副研究员",40,H4203,"二 3-4\r\n\
	(1-16周单周)","建议拔尖班学生修读\r\n\
	国家精品","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130012.02,物理化学AⅠ,3.0,"徐昕\r\n\
	吴剑鸣","教授\r\n\
	副研究员",40,H4203,五 3-4 ,"建议拔尖班学生修读\r\n\
	国家精品","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130012.03,物理化学AⅠ,3.0,刘智攀,教授,70,H4204,"二 3-4\r\n\
	(1-16周单周)",国家精品,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","14 高分子材料与工程\r\n\
	14 材料化学"\r\n\
	CHEM130012.03,物理化学AⅠ,3.0,刘智攀,教授,70,H4204,五 3-4 ,国家精品,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","14 高分子材料与工程\r\n\
	14 材料化学"\r\n\
	CHEM130014.01,物理化学AⅢ,3.0,"乔明华\r\n\
	刘永梅","教授\r\n\
	副教授",90,H4304,"一 3-4\r\n\
	(2-16周双周)",国家精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130014.01,物理化学AⅢ,3.0,"乔明华\r\n\
	刘永梅","教授\r\n\
	副教授",90,H4304,四 3-4 ,国家精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130014.02,物理化学AⅢ,3.0,乐英红,教授,50,H4103,"一 3-4\r\n\
	(2-16周双周)","建议拔尖班学生修读\r\n\
	国家精品课程","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130014.02,物理化学AⅢ,3.0,乐英红,教授,50,H4103,四 3-4 ,"建议拔尖班学生修读\r\n\
	国家精品课程","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130014.03,物理化学AⅢ,3.0,"蔡文斌\r\n\
	郭娟","教授\r\n\
	讲师",80,H4203,一 3-4 ,国家精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","13 材料化学\r\n\
	13 高分子材料与工程"\r\n\
	CHEM130014.03,物理化学AⅢ,3.0,"蔡文斌\r\n\
	郭娟","教授\r\n\
	讲师",80,H4203,"四 3-4\r\n\
	(1-16周单周)",国家精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","13 材料化学\r\n\
	13 高分子材料与工程"\r\n\
	CHEM130016.01,无机化学,3.0,"林阳辉\r\n\
	岳斌","副教授\r\n\
	教授",50,H4305,"一 3-4\r\n\
	(1-16周单周)",建议拔尖班学生修读,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130016.01,无机化学,3.0,"林阳辉\r\n\
	岳斌","副教授\r\n\
	教授",50,H4305,五 3-4 ,建议拔尖班学生修读,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 化学系\r\n\
	CHEM130017.01,生产实习,1.0,叶匀分,副教授,120,,日 13-13 ,开学前两周,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 化学系\r\n\
	CHEM130019.01,化学信息学,2.0,乐英红,教授,120,H3206,二 1-2 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：08:00-09:40",13 化学系\r\n\
	CHEM130021.01,现代化学专题(分子设计),2.0,周鸣飞,教授,50,H3205,"二 3-4\r\n\
	(3-16周)",第三周开始上课,"考试日期：论文,2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",12 化学系\r\n\
	CHEM130022.01,现代化学专题(生物与分离),2.0,王文宁,教授,50,H4103,"三 3-4\r\n\
	(3-16周)",第三周开始上课,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 化学系\r\n\
	CHEM130025.01,综合化学实验II,2.0,牛国兴,副教授,80,H化学西楼4楼,"四 1-9\r\n\
	(3-16周)",第三周开始上课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 化学\r\n\
	CHEM130025.02,综合化学实验II,2.0,牛国兴,副教授,0,H化学西楼4楼,六 1-9,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 化学系\r\n\
	CHEM130035.01,环境化学B,2.0,邓春晖,教授,30,H4306,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",13 化学系\r\n\
	CHEM130037.01,精细有机化学,2.0,陈芬儿,教授,30,H3104,"一 6-7\r\n\
	(3-16周)",第三周开始上课,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",12 化学系\r\n\
	CHEM130039.01,计算化学,2.0,李振华,教授,60,H4206,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",14 化学系\r\n\
	CHEM130043.01,应用化学实验,2.0,牛国兴,副教授,30,H化学西楼4楼,"四 1-9\r\n\
	(3-16周)",第三周开始上课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 应用化学\r\n\
	CHEM130045.01,化工原理,2.0,叶匀分,副教授,125,H4301,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 化学系\r\n\
	CHEM130047.01,化工制图,2.0,徐华龙,教授,50,H3204,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",13 化学系\r\n\
	CHEM130048.01,应用化学专题,2.0,乐英红,教授,30,H3105,"五 3-4\r\n\
	(3-16周)",第三周开始上课,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 化学系\r\n\
	CHEM130049.01,有机化学,4.0,贾瑜,副教授,60,H4403,二 1-2 ,复旦大学精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 生命科学学院\r\n\
	CHEM130049.01,有机化学,4.0,贾瑜,副教授,60,H4403,五 3-4 ,复旦大学精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 生命科学学院\r\n\
	CHEM130049.02,有机化学,4.0,王辉,讲师,60,H4205,二 1-2 ,复旦大学精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 生命科学学院\r\n\
	CHEM130049.02,有机化学,4.0,王辉,讲师,60,H4205,五 3-4 ,复旦大学精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 生命科学学院\r\n\
	CHEM130050.01,有机化学实验,2.0,林阳辉,副教授,16,H老化3楼,"四 1-9\r\n\
	(单周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	CHEM130050.02,有机化学实验,2.0,林阳辉,副教授,105,H老化3楼,"四 1-9\r\n\
	(1-16周单周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 生命科学学院\r\n\
	CHEM130052.01,科学训练实验,2.0,牛国兴,副教授,50,,六 1-9,"讨论型课程\r\n\
	第三周开始上课","考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 化学系\r\n\
	CHEM130053.01,光电功能材料,2.0,熊焕明,教授,30,H4208,"二 6-7\r\n\
	(3-16周)",第三周开始上课,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-15:10","12 化学系\r\n\
	13 化学系"\r\n\
	CHEM130061.01,分子组装与分子器件,2.0,钱东金,教授,15,H3104,"一 3-4\r\n\
	(3-16周)","讨论型课程\r\n\
	第三周开始上课","考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35",12 化学系\r\n\
	CHEM130066.01,配位化学,2.0,张道,副教授,30,H3105,"一 6-7\r\n\
	(3-16周)",第三周开始上课,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",12 化学系\r\n\
	CHEM130067.01,有机化学AⅠ,4.0,高翔,教授,60,H4404,二 3-4 ,"上海市精品课程\r\n\
	复旦大学教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130067.01,有机化学AⅠ,4.0,高翔,教授,60,H4404,四 3-4 ,"上海市精品课程\r\n\
	复旦大学教学名师","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130067.02,有机化学AⅠ,4.0,孙兴文,副教授,40,H3105,一 3-4 ,"建议拔尖班学生修读\r\n\
	上海市精品课程","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130067.02,有机化学AⅠ,4.0,孙兴文,副教授,40,H3105,四 3-4 ,"建议拔尖班学生修读\r\n\
	上海市精品课程","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 化学系\r\n\
	CHEM130067.03,有机化学AⅠ,4.0,张丹维,副教授,70,H4105,一 3-4 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 材料化学\r\n\
	14 高分子材料与工程"\r\n\
	CHEM130067.03,有机化学AⅠ,4.0,张丹维,副教授,70,H4105,四 3-4 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 材料化学\r\n\
	14 高分子材料与工程"\r\n\
	CHEM130071.01,分析化学,2.0,包慧敏,副教授,60,H6404,二 3-4,,"考试日期：2016-01-04\r\n\
	考试时间：13:00-15:00",14 生命科学学院\r\n\
	CHEM130071.02,分析化学,2.0,雷杰,高级讲师,60,H6504,二 3-4,,,14 生命科学学院\r\n\
	CHEM130072.01,分析化学实验,2.0,樊惠芝,正高级讲师,105,H老化2楼,"四 1-9\r\n\
	(双周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 生命科学学院\r\n\
	CHEM130075.01,有机结构的探秘和解析,2.0,范仁华,教授,15,H3304,五 6-7 ,研讨型课程,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",13 化学系\r\n\
	CHEM130076.01,元素化学,2.0,王华冬,教授,60,H4103,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",14 化学系\r\n\
	CHEM130077.01,金属有机化学的研究方法和策略,2.0,周锡庚,教授,20,H3404,"三 6-7\r\n\
	(3-16周)","讨论型课程\r\n\
	第三周开始上课","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",12 化学系\r\n\
	CHEM130081.01,现代化学专题（能源化学）,1.0,王忠胜,研究员,10,J先材楼,"一 8-9\r\n\
	(1-8周)",研讨型课程,"考试日期：2015-10-26\r\n\
	\r\n\
	考试时间：15:25-17:05",13 化学系\r\n\
	CHEM130091.01,化学生物学导论,2.0,张琪,研究员,50,H3404,二 6-7 ,全英文授课,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:25-17:05",13 化学系\r\n\
	COMP120004.01,线性代数,3.0,阚海斌,教授,65,H4306,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.01,线性代数,3.0,阚海斌,教授,65,H4306,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.02,线性代数,3.0,张巍,副教授,65,H4305,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.02,线性代数,3.0,张巍,副教授,65,H4305,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.03,线性代数,3.0,章忠志,副研究员,65,H4303,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.03,线性代数,3.0,章忠志,副研究员,65,H4303,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.04,线性代数,3.0,张建国,副教授,65,H4106,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30","15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	COMP120004.04,线性代数,3.0,张建国,副教授,65,H4106,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30","15 技术科学试验班\r\n\
	15 保密管理"\r\n\
	COMP120004.05,线性代数,3.0,赵运磊,教授,65,H4206,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120004.05,线性代数,3.0,赵运磊,教授,65,H4206,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:00-10:30",15 技术科学试验班\r\n\
	COMP120005.01,集合与图论,3.0,阚海斌,教授,35,Z2201,一 6-7 ,上海市精品课程，限拔尖班选课,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP120005.01,集合与图论,3.0,阚海斌,教授,35,Z2201,四 6-7 ,上海市精品课程，限拔尖班选课,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP120005.02,集合与图论,3.0,章忠志,副研究员,35,Z2308A,一 6-7 ,上海市精品课程,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP120005.02,集合与图论,3.0,章忠志,副研究员,35,Z2308A,四 6-7 ,上海市精品课程,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP120005.03,集合与图论,3.0,王智慧,讲师,55,Z2101,一 6-7 ,上海市精品课程,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30","14 保密管理\r\n\
	14 信息安全\r\n\
	14 信息安全(保密方向)"\r\n\
	COMP120005.03,集合与图论,3.0,王智慧,讲师,55,Z2101,四 6-7 ,上海市精品课程,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30","14 保密管理\r\n\
	14 信息安全\r\n\
	14 信息安全(保密方向)"\r\n\
	COMP120006.01,程序设计,4.0,周水庚,教授,50,H计算中心2号机房,三 1-2 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.01,程序设计,4.0,周水庚,教授,50,H4206,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.02,程序设计,4.0,周向东,教授,50,H计算中心2号机房,三 6-7 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.02,程序设计,4.0,周向东,教授,50,H4304,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.03,程序设计,4.0,刘卉,讲师,60,H计算中心2号机房,二 8-9 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 技术科学试验班\r\n\
	15 核科学与技术系"\r\n\
	COMP120006.03,程序设计,4.0,刘卉,讲师,50,H3104,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.04,程序设计,4.0,谈子敬,副教授,50,H计算中心三楼3号机房,三 1-2 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.04,程序设计,4.0,谈子敬,副教授,50,H4303,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.05,程序设计,4.0,周雅倩,讲师,79,H计算中心三楼3号机房,二 8-9 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 保密管理\r\n\
	15 技术科学试验班\r\n\
	15 核科学与技术系"\r\n\
	COMP120006.05,程序设计,4.0,周雅倩,讲师,65,H4305,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	COMP130002.01,数字逻辑与部件设计,3.0,唐志强,高级实验师,70,Z2104,五 2-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",14 计算机科学与技术\r\n\
	COMP130002.02,数字逻辑与部件设计,3.0,孙晓光,副教授,30,Z2208A,一 2-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",14 信息安全\r\n\
	COMP130003.01,数字逻辑与部件设计实验,1.0,唐志强,高级实验师,50,Z计算机学院机房(1),一 2-4(7-16周),,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 计算机科学与技术\r\n\
	COMP130003.02,数字逻辑与部件设计实验,1.0,朱子聪,工程师,50,Z计算机学院机房(2),五 6-8(7-16周),,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 信息安全\r\n\
	14 计算机科学与技术"\r\n\
	COMP130004.01,数据结构,4.0,孙未未,副教授,35,Z计算机学院机房(2),一 11-12 ,"复旦大学校级精品课程\r\n\
	拔尖班课程","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00",14 计算机科学与技术\r\n\
	COMP130004.01,数据结构,4.0,孙未未,副教授,35,Z2103,三 6-8 ,复旦大学校级精品课程，拔尖班课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00",14 计算机科学与技术\r\n\
	COMP130004.02,数据结构,4.0,张_杰,教授,45,Z计算机学院机房(1),一 11-12 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00","14 计算机科学与技术\r\n\
	14 信息安全"\r\n\
	COMP130004.02,数据结构,4.0,张_杰,教授,45,Z2211,三 2-4 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00","14 计算机科学与技术\r\n\
	14 信息安全"\r\n\
	COMP130004.03,数据结构,4.0,陈彤兵,讲师,50,Z院系自主,一 11-12 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00","14 保密管理\r\n\
	14 信息安全\r\n\
	14 信息安全(保密方向)"\r\n\
	COMP130004.03,数据结构,4.0,陈彤兵,讲师,50,Z2207,三 2-4 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00","14 保密管理\r\n\
	14 信息安全\r\n\
	14 信息安全(保密方向)"\r\n\
	COMP130006.01,概率论与数理统计,4.0,张巍,副教授,40,Z2201,三 6-8 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130006.01,概率论与数理统计,4.0,张巍,副教授,40,Z2201,五 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130006.02,概率论与数理统计,4.0,王勇,讲师,40,Z2302,三 6-8 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130006.02,概率论与数理统计,4.0,王勇,讲师,40,Z2302,五 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130006.03,概率论与数理统计,4.0,郭跃飞,副教授,35,Z2308A,三 6-8 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30","13 信息安全\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130006.03,概率论与数理统计,4.0,郭跃飞,副教授,35,Z2308A,五 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30","13 信息安全\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130014.01,编译,3.0,邱锡鹏,副教授,95,Z2307B,一 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00","12 计算机科学与技术\r\n\
	12 信息安全"\r\n\
	COMP130014.01,编译,3.0,邱锡鹏,副教授,95,Z计算机学院机房,二 11-12 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00","12 计算机科学与技术\r\n\
	12 信息安全"\r\n\
	COMP130017.01,数据通信与计算机网络,3.0,曹袖,高级工程师,40,Z2207,一 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130017.01,数据通信与计算机网络,3.0,曹袖,高级工程师,40,Z院系自主,三 11-12 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130017.02,数据通信与计算机网络,3.0,毛迪林,讲师,40,Z计算机学院机房(1),三 11-12 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130017.02,数据通信与计算机网络,3.0,毛迪林,讲师,40,Z2302,五 2-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130017.03,数据通信与计算机网络,3.0,肖晓春,工程师,58,Z计算机学院机房(2),二 11-12 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00","13 信息安全(保密方向)\r\n\
	13 保密管理\r\n\
	13 信息安全"\r\n\
	COMP130017.03,数据通信与计算机网络,3.0,肖晓春,工程师,58,Z2102,五 2-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00","13 信息安全(保密方向)\r\n\
	13 保密管理\r\n\
	13 信息安全"\r\n\
	COMP130018.01,计算机图形学A,3.0,李伟,教授,40,Z2201,五 2-4 ,复旦大学校级精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",12 计算机科学与技术\r\n\
	COMP130018.02,计算机图形学A,3.0,冯瑞,研究员,40,Z2101,五 2-4 ,复旦大学校级精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",12 计算机科学与技术\r\n\
	COMP130019.01,生产实习,1.0,汪卫,教授,80,Z院系自主,六 6-7 ,复旦大学教学名师,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 计算机科学与技术\r\n\
	COMP130019.02,生产实习,1.0,汪卫,教授,15,Z院系自主,六 6-7 ,复旦大学教学名师,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 计算机科学与技术\r\n\
	COMP130019.03,生产实习,1.0,汪卫,教授,12,Z院系自主,六 6-7 ,复旦大学教学名师,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 信息安全(保密方向)\r\n\
	COMP130021.01,信息安全原理,3.0,赵一鸣,副教授,30,Z2202,二 2-4 ,成组选修A组,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：08:55-11:35","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130025.01,软件体系结构,2.0,陈彤兵,讲师,30,Z2311,四 3-4 ,成组选修A组,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130030.01,模式识别,3.0,池明_,副教授,30,Z2313,二 3-5 ,成组选修B组,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-12:30","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130031.01,人工智能A,3.0,危辉,教授,30,Z2202,一 2-4 ,成组选修B组,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：08:55-11:35","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130035.01,中文信息处理,2.0,黄萱菁,教授,30,Z2202,四 3-4 ,成组选修B组,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130039.01,微型机系统与接口及实验,4.0,陈利锋,讲师,30,Z2402,二 2-4 ,成组选修C组,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130041.01,硬件实验,3.0,陈利锋,讲师,30,Z2206,一 2-4 ,成组选修C组,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130052.01,数据库与数据仓库设计,2.0,"熊_\r\n\
	朱扬勇","副教授\r\n\
	教授",30,Z2203,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130058.01,计算机组织与科学计算,2.0,沈一帆,教授,30,Z2203,四 1-2 ,论文,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130065.01,近世代数,3.0,马建庆,讲师,30,Z2303,一 6-7(双周),,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130065.01,近世代数,3.0,马建庆,讲师,30,Z2303,四 2-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",13 计算机科学与技术\r\n\
	COMP130070.01,网络程序设计,2.0,荆一楠,讲师,15,Z2206,三 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:30",12 信息安全\r\n\
	COMP130071.01,网络攻击与防御技术,2.0,吴承荣,副教授,27,Z2203,二 3-4 ,,"考试日期：2015-01-06\r\n\
	\r\n\
	考试时间：09:00-11:00","12 信息安全(保密方向)\r\n\
	12 信息安全"\r\n\
	COMP130093.01,数字水印技术,2.0,刘文海,高级工程师,30,Z2201,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","12 信息安全(保密方向)\r\n\
	13 信息安全\r\n\
	12 信息安全\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130095.01,电子商务结构和安全,2.0,傅维明,工程师,25,Z2203,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35","12 信息安全\r\n\
	14 信息安全\r\n\
	12 信息安全(保密方向)"\r\n\
	COMP130096.01,计算机病毒及其防治,2.0,廖志成,工程师,30,Z2302,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35","14 信息安全\r\n\
	14 保密管理\r\n\
	13 信息安全(保密方向)\r\n\
	14 信息安全(保密方向)\r\n\
	13 信息安全"\r\n\
	COMP130101.01,防火墙技术,2.0,廖健,讲师,30,Z2308A,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35","13 信息安全\r\n\
	13 信息安全(保密方向)\r\n\
	14 保密管理\r\n\
	14 信息安全\r\n\
	14 信息安全(保密方向)"\r\n\
	COMP130105.01,网络存储导论,2.0,傅维明,工程师,30,Z2311,二 2-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：08:55-11:35","13 信息安全(保密方向)\r\n\
	14 信息安全\r\n\
	13 信息安全\r\n\
	14 信息安全(保密方向)\r\n\
	14 保密管理"\r\n\
	COMP130108.01,信息内容安全,2.0,曾剑平,副教授,30,Z2303,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35","12 信息安全(保密方向)\r\n\
	13 信息安全(保密方向)\r\n\
	12 信息安全\r\n\
	13 信息安全"\r\n\
	COMP130110.01,操作系统,3.0,张亮,教授,32,Z院系自主,二 8-9 ,复旦大学校级精品课程，复旦大学教学名师，拔尖班课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130110.01,操作系统,3.0,张亮,教授,32,Z2212,四 6-8 ,复旦大学校级精品课程，复旦大学教学名师，拔尖班课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 计算机科学与技术\r\n\
	COMP130110.02,操作系统,3.0,赵进,副教授,30,Z计算机学院机房(1),二 8-9 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 计算机科学与技术\r\n\
	13 信息安全\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130110.02,操作系统,3.0,赵进,副教授,30,Z2211,四 6-8 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 计算机科学与技术\r\n\
	13 信息安全\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130110.03,操作系统,3.0,王飞,副教授,38,Z计算机学院机房(2),二 8-9 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 计算机科学与技术\r\n\
	13 保密管理\r\n\
	13 信息安全"\r\n\
	COMP130110.03,操作系统,3.0,王飞,副教授,38,Z2209A,四 6-8 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 计算机科学与技术\r\n\
	13 保密管理\r\n\
	13 信息安全"\r\n\
	COMP130110.04,操作系统,3.0,谢志鹏,副教授,35,Z院系自主,二 8-9 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 保密管理\r\n\
	13 计算机科学与技术\r\n\
	13 信息安全"\r\n\
	COMP130110.04,操作系统,3.0,谢志鹏,副教授,35,Z2206,四 6-8 ,复旦大学校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30","13 保密管理\r\n\
	13 计算机科学与技术\r\n\
	13 信息安全"\r\n\
	COMP130112.01,软件工程化开发,2.0,沈立炜,副教授,80,Z2104,三 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 计算机科学与技术\r\n\
	COMP130113.01,电子学基础,2.0,杨夙,教授,30,Z2208A,二 2-4 ,成组选修C组,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：08:55-11:35","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130115.01,法学基础与保密法学,3.0,吴承荣,副教授,35,Z2209A,五 2-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00","14 信息安全(保密方向)\r\n\
	14 保密管理"\r\n\
	COMP130116.01,保密技术概论,3.0,吴杰,研究员,27,Z2206,四 2-4 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：09:00-11:00","13 保密管理\r\n\
	13 信息安全(保密方向)"\r\n\
	COMP130120.01,计算机取证,2.0,曾剑平,副教授,25,Z2203,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","13 信息安全(保密方向)\r\n\
	13 保密管理\r\n\
	12 信息安全(保密方向)"\r\n\
	COMP130123.01,分布式系统,3.0,"张奇\r\n\
	王晓阳","副教授\r\n\
	教授",30,Z2209A,三 2-4 ,成组选修A组,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:55-11:35","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130124.01,计算机视觉,3.0,陈雁秋,教授,30,Z2308A,三 2-4 ,成组选修B组,论文,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130125.01,大数据分析技术,2.0,"王鹏\r\n\
	汪卫","副教授\r\n\
	教授",30,Z2102,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130126.01,信息检索导论,3.0,李伟,教授,30,Z2101,三 2-4 ,论文,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 计算机科学与技术\r\n\
	12 计算机科学与技术"\r\n\
	COMP130129.01,游戏开发基础,3.0,徐志平,讲师,30,Z2212,三 2-4 ,论文,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 计算机科学与技术\r\n\
	13 计算机科学与技术"\r\n\
	COMP130131.01,运筹学,3.0,张建国,副教授,25,Z2212,一 2-4 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：09:00-11:00",14 保密管理\r\n\
	COMP130143.01,计算机系统基础（上）,3.0,"路红\r\n\
	袁春风","教授\r\n\
	教授",35,Z2209A,二 2-4 ,拔尖班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP130143.01,计算机系统基础（上）,3.0,"路红\r\n\
	袁春风","教授\r\n\
	教授",35,Z计算机学院机房(2),"四 8-9\r\n\
	(2-16周双周)",拔尖班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP130143.01,计算机系统基础（上）,3.0,"路红\r\n\
	袁春风","教授\r\n\
	教授",35,Z计算机学院机房(2),"四 8-9\r\n\
	(1-16周单周)",拔尖班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:30-15:30",14 计算机科学与技术\r\n\
	COMP130150.01,算法竞赛导论,3.0,孙未未,副教授,30,Z2211,日 6-8 ,实验报告，ACM队,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 计算机科学与技术\r\n\
	14 计算机科学与技术"\r\n\
	MATH120012.01,微积分（上）,4.0,王轶彤,副教授,30,HGD405,二 2-4 ,HGD405,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",15 留学生 临床医学(六年制)\r\n\
	MATH120012.01,微积分（上）,4.0,王轶彤,副教授,30,HGD405,四 3-4 ,HGD405,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",15 留学生 临床医学(六年制)\r\n\
	MATH120016.01,数学分析BI,5.0,张建国,副教授,75,H4405,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	MATH120016.01,数学分析BI,5.0,张建国,副教授,75,H4405,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	MATH120016.01,数学分析BI,5.0,张建国,副教授,75,H4405,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 保密管理\r\n\
	15 技术科学试验班"\r\n\
	MATH120016.02,数学分析BI,5.0,张守志,副教授,60,H3408,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.02,数学分析BI,5.0,张守志,副教授,60,H3408,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.02,数学分析BI,5.0,张守志,副教授,60,H3408,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.03,数学分析BI,5.0,王勇,讲师,60,H3109,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.03,数学分析BI,5.0,王勇,讲师,60,H3109,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.03,数学分析BI,5.0,王勇,讲师,60,H3109,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.04,数学分析BI,5.0,郭跃飞,副教授,60,H3409,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.04,数学分析BI,5.0,郭跃飞,副教授,60,H3409,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.04,数学分析BI,5.0,郭跃飞,副教授,60,H3409,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.05,数学分析BI,5.0,张巍,副教授,70,H4403,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.05,数学分析BI,5.0,张巍,副教授,70,H4403,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.05,数学分析BI,5.0,张巍,副教授,70,H4403,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	TFSY118003.01,音乐科技导论,1.0,李伟,教授,30,H2103,"五 11-12\r\n\
	(1-8周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	MATE130003.01,纳米材料学,2.0,陈敏,教授,35,HGX206,五 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 材料化学\r\n\
	MATE130005.01,材料化学,2.0,"叶明新\r\n\
	沈剑锋","教授\r\n\
	副教授",35,H2113A,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 材料化学\r\n\
	MATE130007.01,高分子材料化学,2.0,"马晓华\r\n\
	武利民","教授\r\n\
	教授",40,H4101,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 材料化学\r\n\
	MATE130008.01,生产实习,1.0,郭艳辉,副教授,30,,,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 材料化学\r\n\
	MATE130008.02,生产实习,1.0,戎瑞芬,高级工程师,35,,,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 材料物理\r\n\
	MATE130008.03,生产实习,1.0,戎瑞芬,高级工程师,25,,,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 电子科学与技术\r\n\
	MATE130010.01,材料物理,3.0,吴晓京,教授,45,H2113B,四 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 材料物理\r\n\
	MATE130013.01,半导体物理C,3.0,曾_,副教授,45,H4304,五 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 材料物理\r\n\
	MATE130016.01,集成电路的分析与设计,3.0,李楠,高级工程师,35,H2207,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 材料物理\r\n\
	MATE130017.01,电子材料分析,3.0,黄曜,副教授,45,HGX208,二 2-4 ,校级精品课程团队,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 材料物理\r\n\
	MATE130018.01,专业英语(材料物理),2.0,江素华,副教授,30,H2218,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",12 材料科学系\r\n\
	MATE130019.01,真空物理与技术,3.0,蒋益明,教授,30,H4305,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子科学与技术\r\n\
	MATE130023.01,电子物理实验,3.0,"徐辉\r\n\
	张群","副教授\r\n\
	教授",25,H材料2楼,一 1-4 ,材料二楼106,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 电子科学与技术\r\n\
	MATE130026.01,文献检索,2.0,于瀛,副教授,30,HGX202,二 1-2 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：08:00-09:40","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130029.01,专业外语,2.0,胡林峰,副教授,30,H2105A,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130032.01,薄膜材料工艺学,2.0,俞宏坤,副教授,30,H6310,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 材料科学系\r\n\
	MATE130034.01,材料科学导论,3.0,杨振国,教授,100,H3208,四 6-8 ,上海市精品课程团队,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 材料科学系\r\n\
	MATE130035.01,工程材料的电学性质,2.0,李越生,教授,30,H5116,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130036.01,半导体材料,2.0,高尚鹏,教授,30,H2105A,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130037.01,新型能源材料,2.0,"方方\r\n\
	郭艳辉","副教授\r\n\
	副教授",30,H2105A,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",材料科学系\r\n\
	MATE130038.01,光电子发光材料,2.0,曾_,副教授,10,H院系自主,五 3-4 ,"1-6周上课\r\n\
	7-16周实验","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 材料科学系\r\n\
	MATE130042.01,电子与信息材料,3.0,徐辉,副教授,30,H2105B,一 6-8 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130048.01,液晶物理学,2.0,许军,副教授,30,H2105B,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130050.01,数学物理方法,4.0,王_,副教授,30,H4306,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电子科学与技术\r\n\
	MATE130050.01,数学物理方法,4.0,王_,副教授,30,H4306,三 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子科学与技术\r\n\
	MATE130051.01,无机功能材料,2.0,余学斌,教授,30,H2104A,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",材料科学系\r\n\
	MATE130052.01,材料科学前沿讲座,2.0,梁子骐,研究员,30,H5107,三 6-7 ,全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130053.01,计算材料学,2.0,高尚鹏,教授,30,H2102B,一 3-4 ,全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130054.01,光子晶体导论,2.0,胡新华,研究员,30,H2102B,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130058.01,模拟与数字电子线路,3.0,"宋云\r\n\
	方方","工程师\r\n\
	副教授",20,H5216,三 6-8 ,自科试验班分流,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 材料物理\r\n\
	MATE130058.02,模拟与数字电子线路,3.0,"宋云\r\n\
	方方","工程师\r\n\
	副教授",20,H6210,五 3-5 ,技科试验班分流,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 材料物理\r\n\
	MATE130061.01,材料制备与加工,3.0,"周树学\r\n\
	沈杰","教授\r\n\
	副教授",90,H4404,二 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",13 材料科学系\r\n\
	MATE130063.01,固体物理导论,4.0,梅永丰,研究员,30,H6408,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 电子科学与技术\r\n\
	MATE130063.01,固体物理导论,4.0,梅永丰,研究员,30,H6407,五 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 电子科学与技术\r\n\
	MATE130066.01,光电技术与器件,3.0,"肖倩\r\n\
	赵栋\r\n\
	洪广伟\r\n\
	王超","工程师\r\n\
	副教授\r\n\
	副教授\r\n\
	副研究员",25,H2103,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 电子科学与技术\r\n\
	MATE130067.01,材料力学,2.0,王_,副教授,45,H2111,一 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",13 材料物理\r\n\
	MATE130068.01,材料分析化学（上）,2.0,黄曜,副教授,30,H2104A,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 材料化学\r\n\
	MATE130070.01,材料化学实验,3.0,"周树学\r\n\
	韦嘉\r\n\
	钱再波","教授\r\n\
	副教授\r\n\
	讲师",35,H院系自主,一 1-8 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 材料化学\r\n\
	MATE130073.01,柔性光电子学,2.0,许军,副教授,30,H5107,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130074.01,固体材料光谱学,2.0,"梅永丰\r\n\
	黄高山","研究员\r\n\
	副研究员",30,H5112,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130080.01,有机半导体材料与器件概论,2.0,钟高余,副教授,30,H5107,五 9-10 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：16:20-18:00","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130081.01,电子材料的化学处理,2.0,俞宏坤,副教授,30,H5105,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",12 材料科学系\r\n\
	MATE130082.01,复合材料,2.0,于志强,副教授,30,H6108,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","13 材料科学系\r\n\
	12 材料科学系"\r\n\
	MATE130083.01,精细化工工艺学,2.0,"顾广新\r\n\
	游波","副教授\r\n\
	教授",30,H6306,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","12 材料科学系\r\n\
	13 材料科学系"\r\n\
	MATE130087.01,智能材料,2.0,郭艳辉,副教授,30,H2104B,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","14 材料科学系\r\n\
	13 材料科学系"\r\n\
	TFSY118002.01,生活中的材料启示,2.0,梅永丰,研究员,15,H2307,三 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15\r\n\
	TFSY118007.01,生命、医学与材料,2.0,马晓华,教授,35,H2308,"一 6-8\r\n\
	(1-8周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15\r\n\
	MACR130001.01,高分子化学A,3.0,"姚晋荣\r\n\
	邵正中","讲师\r\n\
	教授",48,HGX209,二 1-3 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",13 高分子材料与工程\r\n\
	MACR130007.01,专业英语及文献,3.0,汤慧,副教授,40,H5314,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 高分子材料与工程\r\n\
	MACR130009.01,高分子化学B,2.0,杨武利,教授,130,H4201,四 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 化学\r\n\
	13 应用化学"\r\n\
	MACR130010.01,高分子工艺制图,2.0,王海涛,副教授,78,H4303,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","12 高分子材料与工程\r\n\
	13 高分子材料与工程"\r\n\
	MACR130013.01,高分子专题(高分子光谱学),2.0,周平,教授,40,H2112A,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 高分子材料与工程\r\n\
	MACR130014.01,高分子专题(高分子科学前沿),2.0,"武培怡\r\n\
	丁建东\r\n\
	汪长春\r\n\
	何军坡","教授\r\n\
	教授\r\n\
	教授\r\n\
	教授",30,H2103,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 高分子材料与工程\r\n\
	MACR130015.01,糖化学与糖生物,2.0,陈国颂,教授,40,H跃进楼106,三 3-4 ,全英语课程,"考试日期：其他,2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",13 高分子材料与工程\r\n\
	MACR130016.01,化工传质与分离过程,3.0,汤蓓蓓,副教授,40,H2112A,四 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 高分子材料与工程\r\n\
	MACR130020.01,聚合物电子封装材料基础,2.0,余英丰,教授,40,H6502,三 3-4 ,,,12 高分子材料与工程\r\n\
	MACR130023.01,高分子材料结构性能与应用,2.0,"邱枫\r\n\
	唐萍","教授\r\n\
	教授",45,H2110,四 6-7 ,,,13 高分子材料与工程\r\n\
	MACR130024.01,高分子学术前沿讲座,2.0,何军坡,教授,30,H院系自主,"六 3-4\r\n\
	(第1周)",,"考试日期：其他,2015-12-21\r\n\
	\r\n\
	考试时间：15:25-17:05",14 高分子科学系\r\n\
	MACR130029.01,光电功能高分子材料,2.0,魏大程,研究员,40,H2112A,一 8-9 ,,"考试日期：其他,2015-12-21\r\n\
	\r\n\
	考试时间：15:25-17:05",12 高分子材料与工程\r\n\
	XDSY118003.01,科学研究如何起步及进行,2.0,周平,教授,30,H2102B,一 8-9 ,,"考试日期：其他,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",\r\n\
	ENVI130003.01,生态学,2.0,王寿兵,副教授,50,H4101,一 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	ENVI130005.01,环境生物学,3.0,樊正球,副教授,50,H4104,四 3-5 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 环境科学与工程系\r\n\
	ENVI130007.01,环境监测实验,1.5,"邓丛蕊\r\n\
	郑志坚","副教授\r\n\
	高级工程师",35,H环境楼,"四 2-9\r\n\
	(单周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	ENVI130008.01,环境工程学A,3.0,万春黎,讲师,20,H4208,五 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 环境科学\r\n\
	ENVI130008.02,环境工程学A,3.0,张轶,讲师,20,H4408,五 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 环境科学(环境工程方向)\r\n\
	ENVI130010.01,环境工程基础,3.0,刘燕,教授,50,HGX201,一 6-8 ,校级精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 环境科学\r\n\
	ENVI130011.01,环境化学A,3.0,"陈建民\r\n\
	叶兴南","教授\r\n\
	副教授",55,HGX202,二 6-8 ,复旦大学教学名师 校级精品课程,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 环境科学与工程系\r\n\
	ENVI130020.01,有机化学,4.0,张仁熙,副教授,25,H3205,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 环境科学与工程系\r\n\
	ENVI130020.01,有机化学,4.0,张仁熙,副教授,25,H3205,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 环境科学与工程系\r\n\
	ENVI130020.02,有机化学,4.0,陈宏,讲师,25,H3204,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 环境科学与工程系\r\n\
	ENVI130020.02,有机化学,4.0,陈宏,讲师,25,H3204,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 环境科学与工程系\r\n\
	ENVI130022.01,环境物理学导论,3.0,"周斌\r\n\
	张艳","教授\r\n\
	副教授",20,H2106A,一 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130024.01,环境统计学,2.0,张浩,副教授,30,H3205,五 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 环境科学与工程系\r\n\
	ENVI130025.01,大气污染与控制,3.0,"张仁熙\r\n\
	马臻","副教授\r\n\
	教授",30,H4208,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","13 环境科学与工程系\r\n\
	12 环境科学与工程系"\r\n\
	ENVI130026.01,水污染与控制,3.0,"何坚\r\n\
	郑正","讲师\r\n\
	教授",20,H3105,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",13 环境科学与工程系\r\n\
	ENVI130027.01,固体废物处理与资源化,2.0,"张士成\r\n\
	罗兴章","教授\r\n\
	副教授",40,H4208,二 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 环境科学与工程系\r\n\
	12 环境科学与工程系"\r\n\
	ENVI130028.01,专业英语,2.0,马臻,教授,20,H6302,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 环境科学(环境工程方向)\r\n\
	ENVI130028.02,专业英语,2.0,"杨晓英\r\n\
	Marie Harder","副教授\r\n\
	教授",20,H4306,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:55",13 环境科学(环境管理方向)\r\n\
	ENVI130029.01,环境微生物学,2.0,"刘思秀\r\n\
	代瑞华","副教授\r\n\
	副教授",65,H4104,五 6-7 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30","12 环境科学与工程系\r\n\
	14 环境科学与工程系"\r\n\
	ENVI130030.01,环境地学基础,2.0,高效江,副教授,25,H4208,三 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 环境科学与工程系\r\n\
	ENVI130032.01,产业生态学,2.0,王寿兵,副教授,30,H4408,二 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","12 环境科学与工程系\r\n\
	13 环境科学与工程系"\r\n\
	ENVI130033.01,环境材料导论,2.0,"张士成\r\n\
	董维阳","教授\r\n\
	高级工程师",30,H4208,三 1-2 ,研讨型课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	ENVI130040.01,环境与贸易,2.0,马涛,副教授,20,HGX202,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	ENVI130044.01,全球环境变化,2.0,"陈莹\r\n\
	张艳","教授\r\n\
	副教授",30,HGX202,四 3-4 ,全英文授课,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130047.01,城市规划原理,2.0,"袁樵\r\n\
	王新军\r\n\
	苏海龙","副教授\r\n\
	研究员\r\n\
	工程师",25,H3105,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 环境科学\r\n\
	ENVI130049.01,城市生态学,2.0,张浩,副教授,20,H2107,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130051.01,自然资源经济学,2.0,刘平养,讲师,20,H3204,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:55",13 环境科学与工程系\r\n\
	ENVI130052.01,田野调查方法,2.0,张真,副教授,20,HGX202,一 3-4 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	ENVI130054.01,全球气候变化与低碳经济,2.0,"马涛\r\n\
	陈红敏","副教授\r\n\
	副教授",20,H2104A,四 3-4 ,研讨型课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 环境科学与工程系\r\n\
	ENVI130056.01,环境法,3.0,黄文芳,副教授,20,HGX202,一 6-8 ,研讨型课程,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",13 环境科学与工程系\r\n\
	ENVI130057.01,环境核算与审计,2.0,"雷一东\r\n\
	陈红敏","副教授\r\n\
	副教授",25,H2106A,四 1-2 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：08:00-09:40",12 环境科学与工程系\r\n\
	ENVI130059.01,能源材料与储能技术,2.0,李溪,教授,20,H2103,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130060.01,生态工程,2.0,张继彪,讲师,25,H3205,三 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130063.01,环境水文学基础,2.0,杨晓英,副教授,25,H3204,三 6-7 ,全英文授课,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130065.01,环境分析化学,3.0,"李想\r\n\
	陈宏","副教授\r\n\
	讲师",50,H3304,二 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 环境科学与工程系\r\n\
	ENVI130067.01,环境管理,3.0,戴星翼,教授,50,HGX210,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 环境科学与工程系\r\n\
	ENVI130071.01,仪器分析,2.0,隋国栋,教授,20,H2105A,一 6-7 ,全英文授课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130073.01,环境规划原理,3.0,包存宽,教授,20,H3205,五 3-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130075.01,环境评价,2.0,"余琦\r\n\
	张艳","副教授\r\n\
	副教授",55,H4106,三 3-4 ,研讨型课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 环境科学与工程系\r\n\
	ENVI130076.01,环境毒理学原理,3.0,李丹,青年副研究员,20,H3205,三 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	ENVI130082.01,环境纳米技术,2.0,张立武,研究员,20,H2105B,一 3-4 ,全英文授课,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 环境科学与工程系\r\n\
	JWCH110005.01,专题讲座,0.0,外教,,60,Z软院机房303,五 9-9 ,"张江\r\n\
	不向外系开放\r\n\
	爱尔兰班必修","考试日期：\r\n\
	\r\n\
	考试时间：-",\r\n\
	JWCH110005.01,专题讲座,0.0,外教,,60,Z2202,五 6-8 ,张江，不向外系开放，爱尔兰班必修,"考试日期：\r\n\
	\r\n\
	考试时间：-",\r\n\
	SOFT120001.01,程序设计A,5.0,戴开宇,讲师,55,H6402,一 6-7 ,"邯郸\r\n\
	必修\r\n\
	单学号必选","考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT120001.01,程序设计A,5.0,戴开宇,讲师,55,H计算中心A110,二 3-4 ,邯郸，必修，单学号必选,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT120001.01,程序设计A,5.0,戴开宇,讲师,55,H6402,三 6-7 ,邯郸，必修，单学号必选,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT120001.02,程序设计A,5.0,陈荣华,讲师,55,H6502,一 6-7 ,"邯郸\r\n\
	必修\r\n\
	双学号必选","考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT120001.02,程序设计A,5.0,陈荣华,讲师,55,H6502,三 6-7 ,邯郸，必修，双学号必选,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT120001.02,程序设计A,5.0,陈荣华,讲师,55,H计算中心A110,四 8-9 ,邯郸，必修，双学号必选,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",15 软件学院\r\n\
	SOFT130004.01,数据结构与算法设计,5.0,郑骁庆,副教授,55,Z2302,一 6-7 ,"张江\r\n\
	必修\r\n\
	建议卓越班修读","考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130004.01,数据结构与算法设计,5.0,郑骁庆,副教授,55,Z2302,三 3-4 ,张江，必修，建议卓越班修读,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130004.01,数据结构与算法设计,5.0,郑骁庆,副教授,55,Z软院机房303,三 8-9 ,张江，必修，建议卓越班修读,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130004.02,数据结构与算法设计,5.0,韩伟力,副教授,60,Z2202,一 6-7 ,"张江\r\n\
	必修","考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130004.02,数据结构与算法设计,5.0,韩伟力,副教授,60,Z软院机房303,三 11-12 ,张江，必修,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130004.02,数据结构与算法设计,5.0,韩伟力,副教授,60,Z2202,三 3-4 ,张江，必修,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130007.01,概率统计,3.0,金玲飞,青年副研究员,100,Z2204,一 1-2 ,"张江\r\n\
	不向外系开放\r\n\
	必修","考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",13 软件学院\r\n\
	SOFT130007.01,概率统计,3.0,金玲飞,青年副研究员,100,Z2204,一 6-8 ,张江，不向外系开放，必修,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",13 软件学院\r\n\
	SOFT130010.01,项目管理,3.0,高晓桐,,100,Z2104,六 2-4 ,"张江\r\n\
	不向外系开放\r\n\
	必修","考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",12 软件学院\r\n\
	SOFT130011.01,计算机前沿讲座(上),0.0,赵一鸣,副教授,100,Z2104,五 6-7 ,"张江\r\n\
	不向外系开放\r\n\
	必修\r\n\
	论文","考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 软件学院\r\n\
	SOFT130013.01,专业实践与生产实习(上),3.0,赵一鸣,副教授,100,Z院系自主,日 11-12 ,"张江\r\n\
	不向外系开放\r\n\
	必修\r\n\
	论文","考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 软件学院\r\n\
	SOFT130015.01,数据库设计,3.0,吴毅坚,副教授,80,Z2102,二 2-4 ,张江，不向外系开放，A方向必修,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:30",13 软件学院\r\n\
	SOFT130017.01,面向对象分析和设计,3.0,张天戈,工程师,50,Z2203,四 11-13 ,"张江\r\n\
	不向外系开放\r\n\
	A方向必修","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:30-15:30",12 软件学院\r\n\
	SOFT130021.01,数字部件设计,4.0,张睿,高级工程师,50,Z软院机房303,一 3-4 ,"张江\r\n\
	不向外系开放\r\n\
	B方向必修","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",13 软件学院\r\n\
	SOFT130021.01,数字部件设计,4.0,张睿,高级工程师,50,Z2203,三 6-8 ,张江，不向外系开放，B方向必修,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",13 软件学院\r\n\
	SOFT130029.01,人工智能,2.0,外教,,60,Z软院机房303,五 1-1 ,"张江\r\n\
	不向外系开放\r\n\
	爱尔兰班必修","考试日期：\r\n\
	\r\n\
	考试时间：-",12 软件学院\r\n\
	SOFT130029.01,人工智能,2.0,外教,,60,Z2202,五 2-4 ,张江，不向外系开放，爱尔兰班必修,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 软件学院\r\n\
	SOFT130031.01,操作系统II,2.0,外教,,60,Z软院机房303,六 9-9 ,"张江\r\n\
	不向外系开放\r\n\
	爱尔兰班必修","考试日期：\r\n\
	\r\n\
	考试时间：-",12 软件学院\r\n\
	SOFT130031.01,操作系统II,2.0,外教,,60,Z2202,六 6-8 ,张江，不向外系开放，爱尔兰班必修,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 软件学院\r\n\
	SOFT130039.01,离散数学(上),3.0,赵一鸣,副教授,105,Z2307B,一 3-4 ,"张江\r\n\
	必修","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130039.01,离散数学(上),3.0,赵一鸣,副教授,105,Z2307B,三 6-7 ,张江，必修,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130045.01,ERP原理与实施,2.0,李敏波,副教授,65,Z2102,一 11-12 ,"张江\r\n\
	选修\r\n\
	12、13、14级共同开课","考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30","12 软件学院\r\n\
	14 软件学院\r\n\
	13 软件学院"\r\n\
	SOFT130049.01,智能系统原理与开发,4.0,郑骁庆,副教授,50,Z2203,一 11-12 ,"张江\r\n\
	不向外系开放\r\n\
	A方向必修","考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：09:00-11:00",13 软件学院\r\n\
	SOFT130049.01,智能系统原理与开发,4.0,郑骁庆,副教授,50,Z2203,三 11-12 ,张江，不向外系开放，A方向必修,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：09:00-11:00",13 软件学院\r\n\
	SOFT130051.01,多媒体技术基础,3.0,姜秀艳,讲师,60,Z2208A,三 2-4 ,"张江\r\n\
	不向外系开放\r\n\
	C方向必修","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：18:30-20:30",13 软件学院\r\n\
	SOFT130056.01,计算机系统基础（上）,3.0,唐渊,讲师,35,Z2303,二 3-4 ,"张江\r\n\
	必修","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130056.01,计算机系统基础（上）,3.0,唐渊,讲师,35,Z2303,四 6-7 ,张江，必修,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130057.01,计算机系统基础（下）,3.0,"张为华\r\n\
	李涛","副教授\r\n\
	教授",65,Z2208A,四 6-7 ,"张江\r\n\
	必修\r\n\
	建议已修读过计算机系统基础(上)的卓越班修读","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130057.01,计算机系统基础（下）,3.0,"张为华\r\n\
	李涛","副教授\r\n\
	教授",65,Z2208A,五 3-4 ,张江，必修，建议已修读过计算机系统基础(上)的卓越班修读,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130057.01,计算机系统基础（下）,3.0,"张为华\r\n\
	李涛","副教授\r\n\
	教授",65,Z2208A,六 2-4 ,张江，必修，建议已修读过计算机系统基础(上)的卓越班修读,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130057.01,计算机系统基础（下）,3.0,"张为华\r\n\
	李涛","副教授\r\n\
	教授",65,Z2208A,六 6-8 ,张江，必修，建议已修读过计算机系统基础(上)的卓越班修读,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 软件学院\r\n\
	SOFT130060.01,操作系统Ⅰ,3.0,李_,讲师,100,Z2307B,四 2-4 ,"张江\r\n\
	不向外系开放\r\n\
	B方向必修","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 软件学院\r\n\
	SOFT130061.01,编译原理,3.0,杨珉,副教授,70,Z2102,五 11-13 ,"张江\r\n\
	不向外系开放\r\n\
	B方向/爱尔兰班必修","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 软件学院\r\n\
	SOFT130061.01,编译原理,3.0,杨珉,副教授,70,Z2102,六 11-12 ,张江，不向外系开放，B方向/爱尔兰班必修,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 软件学院\r\n\
	SOFT130062.01,计算机图形学,3.0,姜忠鼎,副教授,50,Z2203,四 6-8 ,"张江\r\n\
	不向外系开放\r\n\
	C方向必修","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：09:00-11:00",13 软件学院\r\n\
	SOFT130063.01,人机交互,2.0,姜忠鼎,副教授,50,Z2203,五 6-7 ,"张江\r\n\
	不向外系开放\r\n\
	C方向必修","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",12 软件学院\r\n\
	SOFT130064.01,软件测试,2.0,沈立炜,副教授,45,Z2203,五 11-12 ,"张江\r\n\
	选修\r\n\
	12、13级共同开课","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:30-20:30","12 软件学院\r\n\
	12 软件学院"\r\n\
	SOFT130067.01,智能移动平台应用开发,2.0,陈辰,讲师,65,Z2102,四 11-12 ,"张江\r\n\
	选修\r\n\
	12、13、14级共同开课","考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30","12 软件学院\r\n\
	14 软件学院\r\n\
	13 软件学院"\r\n\
	SOFT130069.01,客户智能,2.0,赵卫东,副教授,45,Z2303,四 11-12 ,"张江\r\n\
	选修\r\n\
	12、13、14级共同开课","考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30","14 软件学院\r\n\
	12 软件学院\r\n\
	13 软件学院"\r\n\
	SOFT130070.01,并行计算与性能优化,2.0,唐渊,讲师,45,Z2209B,三 6-7 ,"张江\r\n\
	选修\r\n\
	12、13级共同开课","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30","13 软件学院\r\n\
	12 软件学院"\r\n\
	COMP120004.06,线性代数,3.0,倪卫明,副教授,65,H4405,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120004.06,线性代数,3.0,倪卫明,副教授,65,H4405,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120004.07,线性代数,3.0,刘鹏,副教授,65,H4406,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120004.07,线性代数,3.0,刘鹏,副教授,65,H4406,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120004.08,线性代数,3.0,张祥朝,副研究员,65,H4401,二 1-2 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120004.08,线性代数,3.0,张祥朝,副研究员,65,H4401,四 3-4 ,上海市精品课程,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	COMP120006.06,程序设计,4.0,张美玉,高级工程师,55,H4106,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.06,程序设计,4.0,张美玉,高级工程师,55,H计算中心3楼3号机房,五 6-7 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.07,程序设计,4.0,吴晓峰,,55,H4205,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.07,程序设计,4.0,吴晓峰,,55,H计算中心3楼2号机房,五 8-9 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.08,程序设计,4.0,陶俊,讲师,45,H4404,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.08,程序设计,4.0,陶俊,讲师,45,H计算中心3楼1号机房,五 8-9 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.09,程序设计,4.0,杨帆,副教授,50,H4406,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.09,程序设计,4.0,杨帆,副教授,50,H计算中心3楼3号机房,五 8-9 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.10,程序设计,4.0,郑达安,讲师,55,H4401,四 6-8 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	COMP120006.10,程序设计,4.0,郑达安,讲师,55,H计算中心3楼2号机房,五 6-7 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",15 技术科学试验班\r\n\
	INFO120003.01,数字逻辑基础,4.0,尹建君,讲师,80,H4406,一 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 生物医学工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO120003.01,数字逻辑基础,4.0,尹建君,讲师,80,H4406,三 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 生物医学工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO120003.02,数字逻辑基础,4.0,范益波,副教授,60,Z2102,一 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 微电子科学与工程\r\n\
	INFO120003.02,数字逻辑基础,4.0,范益波,副教授,60,Z2102,三 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 微电子科学与工程\r\n\
	INFO120003.03,数字逻辑基础,4.0,解玉凤,讲师,60,H3201,一 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 电气工程及其自动化\r\n\
	14 核工程与核技术"\r\n\
	INFO120003.03,数字逻辑基础,4.0,解玉凤,讲师,60,H3201,三 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 电气工程及其自动化\r\n\
	14 核工程与核技术"\r\n\
	INFO120003.04,数字逻辑基础,4.0,徐丰,研究员,60,H4401,一 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 光电信息科学与工程\r\n\
	14 通信工程"\r\n\
	INFO120003.04,数字逻辑基础,4.0,徐丰,研究员,60,H4401,三 3-4 ,校精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 光电信息科学与工程\r\n\
	14 通信工程"\r\n\
	INFO120003.05,数字逻辑基础,4.0,易婷,副教授,22,H2102B,二 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电子信息科学类(卓越工程师班)\r\n\
	INFO120003.05,数字逻辑基础,4.0,易婷,副教授,22,H2102B,四 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电子信息科学类(卓越工程师班)\r\n\
	INFO120010.01,数字逻辑基础实验,0.0,孔庆生,副教授,37,H物理327,二 1-2 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-","14 生物医学工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO120010.02,数字逻辑基础实验,0.0,赵燕,高级实验师,28,H物理327,三 1-2 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 电气工程及其自动化\r\n\
	INFO120010.03,数字逻辑基础实验,0.0,郭翌,工程师,37,H物理537,四 3-4 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 通信工程\r\n\
	INFO120010.04,数字逻辑基础实验,0.0,马煜,讲师,40,H物理537,四 8-9 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 电子信息科学与技术\r\n\
	INFO120010.05,数字逻辑基础实验,0.0,赵燕,高级实验师,44,H物理537,五 6-7 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-","14 光电信息科学与工程\r\n\
	14 核工程与核技术"\r\n\
	INFO120010.06,数字逻辑基础实验,0.0,"陶新萱\r\n\
	秦亚杰","工程师\r\n\
	讲师",60,Z计算机学院机房(2),三 8-9 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 微电子科学与工程\r\n\
	INFO120010.07,数字逻辑基础实验,0.0,孔庆生,副教授,22,H物理五楼,五 3-4 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130001.01,概率、数理统计与随机过程,3.0,王斌,教授,80,H4403,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 电子信息科学与技术\r\n\
	14 生物医学工程"\r\n\
	INFO130001.02,概率、数理统计与随机过程,3.0,荆明娥,副研究员,60,Z2202,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",14 微电子科学与工程\r\n\
	INFO130001.03,概率、数理统计与随机过程,3.0,朱晓松,副教授,38,H3105,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 通信工程\r\n\
	INFO130002.01,工程数学,4.0,王建军,副教授,80,H3408,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00","14 电子信息科学与技术\r\n\
	14 生物医学工程"\r\n\
	INFO130002.01,工程数学,4.0,王建军,副教授,80,H3408,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00","14 电子信息科学与技术\r\n\
	14 生物医学工程"\r\n\
	INFO130002.02,工程数学,4.0,黄大鸣,教授,30,Z2103,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 微电子科学与工程\r\n\
	INFO130002.02,工程数学,4.0,黄大鸣,教授,30,Z2103,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 微电子科学与工程\r\n\
	INFO130002.03,工程数学,4.0,江安全,研究员,30,Z2211,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 微电子科学与工程\r\n\
	INFO130002.03,工程数学,4.0,江安全,研究员,30,Z2211,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 微电子科学与工程\r\n\
	INFO130002.04,工程数学,4.0,蒋耿明,副教授,38,HGX305,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 通信工程\r\n\
	INFO130002.04,工程数学,4.0,蒋耿明,副教授,38,HGX305,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 通信工程\r\n\
	INFO130002.05,工程数学,4.0,郑玉祥,教授,20,H3205,一 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 光电信息科学与工程\r\n\
	INFO130002.05,工程数学,4.0,郑玉祥,教授,20,H3205,四 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 光电信息科学与工程\r\n\
	INFO130002.06,工程数学,4.0,刘鹏,副教授,22,H3404,一 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130002.06,工程数学,4.0,刘鹏,副教授,22,H3404,三 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130006.01,模拟与数字电路实验(下),3.0,"徐峰\r\n\
	周锋","工程师\r\n\
	副教授",46,H物理五楼,一 6-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:00","13 电子信息科学与技术\r\n\
	13 生物医学工程"\r\n\
	INFO130006.02,模拟与数字电路实验(下),3.0,王勇,副教授,48,H物理五楼,三 1-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:00",13 通信工程\r\n\
	INFO130006.03,模拟与数字电路实验(下),3.0,"童立青\r\n\
	孔庆生","讲师\r\n\
	副教授",50,H物理五楼,四 6-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:00",13 电子信息科学与技术\r\n\
	INFO130006.04,模拟与数字电路实验(下),3.0,王勇,副教授,20,H物理五楼,五 1-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:00",13 微电子科学与工程\r\n\
	INFO130006.05,模拟与数字电路实验(下),3.0,"崔旭高\r\n\
	孔庆生","副教授\r\n\
	副教授",47,H物理五楼,五 6-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:00",13 微电子科学与工程\r\n\
	INFO130010.01,数字信号处理A,3.0,吴晓峰,,95,H4103,五 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","13 生物医学工程\r\n\
	13 电子信息科学与技术"\r\n\
	INFO130010.02,数字信号处理A,3.0,程旭,助理研究员,70,Z2102,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130010.03,数字信号处理A,3.0,迟楠,教授,50,HGX305,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 通信工程\r\n\
	INFO130013.01,近代无线电实验(下),3.0,陆起涌,主任技师,85,H物理楼,二 1-4 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 电子信息科学与技术\r\n\
	INFO130014.01,自动控制原理,3.0,陈雄,副教授,85,H4104,一 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 电子信息科学与技术\r\n\
	INFO130015.01,生产实习,1.0,赵燕,高级实验师,95,H物理楼,一 11-11 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","12 电子信息科学与技术\r\n\
	12 生物医学工程"\r\n\
	INFO130015.02,生产实习,1.0,陈_,副教授,73,H物理楼1楼,一 14-14 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130015.03,生产实习,1.0,付海洋,讲师,48,H物理楼,一 14-14 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 通信工程\r\n\
	INFO130015.04,生产实习,1.0,张荣君,研究员,28,H物理121,一 14-14 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 光信息科学与技术\r\n\
	INFO130015.05,生产实习,1.0,葛爱明,副教授,37,H物理楼 414,一 14-14 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 电气工程及其自动化\r\n\
	INFO130019.01,生物医学工程专业实验(下),3.0,周国辉,讲师,20,H物理楼5楼信息学院机房,三 6-9 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物医学工程\r\n\
	INFO130020.01,生物医学工程学基础,3.0,邬小玫,教授,20,H2102A,一 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 生物医学工程\r\n\
	INFO130023.01,半导体器件原理,4.0,蒋玉龙,教授,23,Z2209B,一 6-7 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130023.01,半导体器件原理,4.0,蒋玉龙,教授,23,Z2209B,三 3-4 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130023.02,半导体器件原理,4.0,茹国平,教授,23,Z2310B,一 6-7 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130023.02,半导体器件原理,4.0,茹国平,教授,23,Z2310B,三 3-4 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130023.03,半导体器件原理,4.0,仇志军,副教授,23,Z2103,一 6-7 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130023.03,半导体器件原理,4.0,仇志军,副教授,23,Z2103,三 3-4 ,校精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",13 微电子科学与工程\r\n\
	INFO130025.01,模拟集成电路设计原理,3.0,许俊,副教授,37,Z2209B,四 2-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",12 微电子学\r\n\
	INFO130025.02,模拟集成电路设计原理,3.0,唐长文,教授,37,Z2310B,四 2-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",12 微电子学\r\n\
	INFO130026.01,数字集成电路设计原理,3.0,任俊彦,教授,37,Z2212,二 2-4 ,校精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:30-15:30",12 微电子学\r\n\
	INFO130026.02,数字集成电路设计原理,3.0,叶凡,副研究员,37,Z2209B,二 2-4 ,校精品课程,"考试日期：2015-12-31\r\n\
	考试时间：13:30-15:30",12 微电子学\r\n\
	INFO130027.01,集成电路实验(上),3.0,胡春凤,工程师,24,H物理四楼,三 1-4 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130027.02,集成电路实验(上),3.0,胡春凤,工程师,24,H物理四楼,三 6-9 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130027.03,集成电路实验(上),3.0,胡春凤,工程师,24,H物理四楼,四 6-9 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130031.01,计算机通信与网络,3.0,任久春,讲师,50,HGX306,五 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 通信工程\r\n\
	INFO130033.01,电信网络基础,2.0,钱松荣,教授,48,H3305,一 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 通信工程\r\n\
	INFO130038.01,计算机体系结构,3.0,钱松荣,教授,30,H2217,二 3-5 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:55",12 通信工程\r\n\
	INFO130042.01,固体物理,4.0,张宗芝,教授,20,H3304,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 光电信息科学与工程\r\n\
	INFO130042.01,固体物理,4.0,张宗芝,教授,20,H3304,四 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 光电信息科学与工程\r\n\
	INFO130044.01,激光原理与技术,3.0,朱鹤元,教授,20,H3404,四 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 光电信息科学与工程\r\n\
	INFO130046.01,光子学器件与工艺,2.0,张荣君,研究员,28,HGX402,四 6-7 ,校精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 光信息科学与技术\r\n\
	INFO130047.01,专业实验,3.0,吴嘉达,教授,28,H光学楼地下室,三 6-8 ,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:30",12 光信息科学与技术\r\n\
	INFO130071.01,电工实验,2.0,汪兴轩,副教授,30,H光学楼408室,四 6-9 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 电子信息科学与技术\r\n\
	14 生物医学工程"\r\n\
	INFO130071.02,电工实验,2.0,汪兴轩,副教授,30,H光学楼408室,五 6-9 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 生物医学工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO130077.01,计算机网络,2.0,陆起涌,主任技师,50,H3305,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","12 电子信息科学与技术\r\n\
	12 生物医学工程"\r\n\
	INFO130079.01,科技英语,2.0,徐跃东,青年副研究员,50,H3105,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10","13 生物医学工程\r\n\
	13 电子信息科学与技术"\r\n\
	INFO130079.02,科技英语,2.0,虞惠华,副教授,55,Z2102,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",13 微电子科学与工程\r\n\
	INFO130079.03,科技英语,2.0,缪健,讲师,50,H3204,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",13 通信工程\r\n\
	INFO130080.01,可编程器件与硬件描述语言,2.0,李旦,讲师,80,H4206,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10","13 通信工程\r\n\
	13 电子信息科学与技术\r\n\
	13 生物医学工程"\r\n\
	INFO130084.01,网络工程规划与设计,2.0,朱谦,高级实验师,70,H3106,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 电子信息科学与技术\r\n\
	12 生物医学工程\r\n\
	12 通信工程"\r\n\
	INFO130090.01,医学成象技术,2.0,郭翌,工程师,45,H4306,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35","13 电子信息科学与技术\r\n\
	13 生物医学工程"\r\n\
	INFO130091.01,医学传感器,2.0,陈国平,副研究员,45,H4203,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","13 生物医学工程\r\n\
	13 电子信息科学与技术"\r\n\
	INFO130095.01,专用集成电路设计方法实验,2.0,李文宏,副教授,40,Z行政楼313机房,一 6-8 ,上课地点：张江校区行政楼313机房,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",12 微电子学\r\n\
	INFO130098.01,Perl语言入门和提高,2.0,周晓方,高级工程师,75,HGX210,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35","13 微电子科学与工程\r\n\
	13 电子信息科学与技术\r\n\
	13 生物医学工程\r\n\
	13 通信工程"\r\n\
	INFO130102.01,近代物理基础,2.0,胡光喜,副研究员,60,Z2202,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",14 微电子科学与工程\r\n\
	INFO130103.01,半导体材料,2.0,陈琳,副研究员,35,Z2203,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",13 微电子科学与工程\r\n\
	INFO130104.01,深亚微米工艺技术,2.0,丁士进,研究员,40,Z2211,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130105.01,传感器原理及应用,2.0,陈国平,副研究员,40,Z2103,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",12 微电子学\r\n\
	INFO130106.01,微电子机械系统应用,2.0,纪新明,副教授,40,Z2212,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130108.01,薄膜物理与技术,2.0,周鹏,教授,30,Z2211,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 微电子学\r\n\
	INFO130109.01,电子材料薄膜测试表征方法,2.0,卢红亮,教授,35,Z2103,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 微电子科学与工程\r\n\
	INFO130112.01,半导体光电子器件,2.0,茹国平,教授,40,Z2103,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35",13 微电子科学与工程\r\n\
	INFO130114.01,射频微电子学概论,2.0,闫娜,副教授,30,Z2206,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 微电子科学与工程\r\n\
	INFO130118.01,通信系统实验(下),3.0,朱谦,高级实验师,23,H物理118,四 6-8 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 通信工程\r\n\
	INFO130118.02,通信系统实验(下),3.0,任久春,讲师,23,H物理118,三 6-8 ,实验报告,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 通信工程\r\n\
	INFO130119.01,操作系统B,2.0,周强,讲师,35,H3305,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:30",13 通信工程\r\n\
	INFO130122.01,网络协议与网络安全基础,2.0,凌力,副教授,30,H3404,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 通信工程\r\n\
	INFO130131.01,光通信网络基础,2.0,缪健,讲师,70,H4303,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10","12 通信工程\r\n\
	12 光信息科学与技术\r\n\
	12 生物医学工程\r\n\
	12 电子信息科学与技术"\r\n\
	INFO130137.01,卫星与移动通信B,2.0,陈晓光,副教授,60,H3305,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","12 生物医学工程\r\n\
	12 电子信息科学与技术\r\n\
	12 通信工程"\r\n\
	INFO130140.01,信息论基础,2.0,马煜,讲师,50,H3104,二 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","13 电子信息科学与技术\r\n\
	13 生物医学工程"\r\n\
	INFO130140.02,信息论基础,2.0,尹建君,讲师,50,HGX502,二 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","13 电子信息科学与技术\r\n\
	13 生物医学工程"\r\n\
	INFO130140.03,信息论基础,2.0,周小林,副教授,50,H3105,二 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:00",13 通信工程\r\n\
	INFO130141.01,遥感原理与技术,2.0,付海洋,讲师,35,H2208,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",12 通信工程\r\n\
	INFO130145.01,光生物医学,2.0,糜岚,副教授,18,H3304,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 光电信息科学与工程\r\n\
	INFO130146.01,集成光学,2.0,吴翔,研究员,25,H2205,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 光信息科学与技术\r\n\
	INFO130147.01,微机原理和接口技术B,4.0,李旦,讲师,40,H3305,二 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10","13 光电信息科学与工程\r\n\
	13 电气工程及其自动化"\r\n\
	INFO130147.01,微机原理和接口技术B,4.0,李旦,讲师,40,H3305,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10","13 光电信息科学与工程\r\n\
	13 电气工程及其自动化"\r\n\
	INFO130233.01,微机原理与接口技术,3.0,杨翠微,副教授,40,H3204,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:30","13 通信工程\r\n\
	13 微电子科学与工程\r\n\
	13 生物医学工程\r\n\
	13 电子信息科学与技术"\r\n\
	INFO130234.01,工程图学及应用,2.0,赵燕,高级实验师,40,H3405,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","14 生物医学工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO130235.01,DSP芯片原理与应用,2.0,杨涛,副教授,20,H物理四楼,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 生物医学工程\r\n\
	12 电子信息科学与技术"\r\n\
	INFO130237.01,光学,4.0,费义艳,副研究员,20,H3404,二 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 光电信息科学与工程\r\n\
	INFO130237.01,光学,4.0,费义艳,副研究员,20,H3404,五 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 光电信息科学与工程\r\n\
	INFO130252.01,灯具设计,3.0,徐蔚,讲师,30,H3104,三 6-8 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",12 电气工程及其自动化\r\n\
	INFO130253.01,电力电子学,3.0,刘克富,教授,38,H3304,四 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 电气工程及其自动化\r\n\
	INFO130257.01,射频微波测试基础,2.0,李巍,研究员,30,Z2209B,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35",12 微电子学\r\n\
	INFO130261.01,激光工程,2.0,沈德元,研究员,25,H2107,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 光信息科学与技术\r\n\
	INFO130262.01,电子学方法实验,2.0,徐峰,工程师,20,H物理五楼,四 6-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:30",13 物理学\r\n\
	INFO130267.01,真空与薄膜技术基础,2.0,崔旭高,副教授,30,H3305,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",13 电气工程及其自动化\r\n\
	INFO130269.01,有机微电子技术,2.0,詹义强,副研究员,30,Z2211,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 微电子科学与工程\r\n\
	INFO130273.01,光学和光电子测量,3.0,孙剑,副教授,20,H3304,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 光电信息科学与工程\r\n\
	INFO130276.01,MATLAB编程及其仿真,2.0,何晓颖,副研究员,18,HGX201,二 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 光电信息科学与工程\r\n\
	INFO130280.01,光学薄膜设计导论,2.0,李晶,教授,18,H2102A,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 光电信息科学与工程\r\n\
	INFO130281.01,模拟电子线路,2.0,张建秋,教授,80,H3101,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","14 电子信息科学与技术\r\n\
	14 生物医学工程"\r\n\
	INFO130281.02,模拟电子线路,2.0,尹建君,讲师,20,HGX402,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","14 生物医学工程\r\n\
	14 通信工程\r\n\
	14 电子信息科学与技术"\r\n\
	INFO130281.03,模拟电子线路,2.0,孔庆生,副教授,60,H4305,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","14 通信工程\r\n\
	14 电气工程及其自动化"\r\n\
	INFO130281.04,模拟电子线路,2.0,黄煜梅,副教授,60,Z2102,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 微电子科学与工程\r\n\
	INFO130286.01,工程数学,3.0,刘洋,讲师,28,H3205,四 6-8 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 电气工程及其自动化\r\n\
	INFO130287.01,应用光学,3.0,葛爱明,副教授,28,H3405,二 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 电气工程及其自动化\r\n\
	INFO130293.01,应用电磁学基础,2.0,梁荣庆,教授,38,HGX401,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电气工程及其自动化\r\n\
	INFO130294.01,数字控制理论与应用,3.0,周小丽,副教授,38,H4301,三 6-8 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",13 电气工程及其自动化\r\n\
	INFO130295.01,光源原理,3.0,张善端,研究员,38,HGX306,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电气工程及其自动化\r\n\
	INFO130295.01,光源原理,3.0,张善端,研究员,38,HGX306,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电气工程及其自动化\r\n\
	INFO130299.01,照明设计,3.0,袁樵,副教授,37,H4206,五 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 电气工程及其自动化\r\n\
	INFO130300.01,LED器件及应用技术,2.0,刘木清,教授,37,H3304,三 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:30-15:00",12 电气工程及其自动化\r\n\
	INFO130302.01,概率、数理统计与随机过程,4.0,余锦华,副研究员,22,H2102B,二 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130302.01,概率、数理统计与随机过程,4.0,余锦华,副研究员,22,H2102B,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130303.01,模拟电子线路,5.0,唐长文,教授,22,H3405,一 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130303.01,模拟电子线路,5.0,唐长文,教授,22,H3405,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 电子信息科学类(卓越工程师班)\r\n\
	INFO130309.01,数字信号处理,4.0,杨涛,副教授,17,HGX503,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130309.01,数字信号处理,4.0,杨涛,副教授,17,HGX503,五 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130313.01,通信原理,4.0,朱宇,副教授,10,H4408,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130313.01,通信原理,4.0,朱宇,副教授,10,H4408,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130317.01,生物医学工程学基础,4.0,邬小玫,教授,1,H院系自主,一 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130319.01,集成电路工艺,4.0,"仇志军\r\n\
	胡春凤","副教授\r\n\
	工程师",10,H2102A,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子信息科学类(卓越工程师班)\r\n\
	INFO130319.01,集成电路工艺,4.0,"仇志军\r\n\
	胡春凤","副教授\r\n\
	工程师",10,H2102A,四 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 电子信息科学类(卓越工程师班)\r\n\
	TFSY118006.01,人体信息建模与计算机仿真,2.0,汪源源,教授,8,H物理503,五 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15 技术科学试验班\r\n\
	MATH120016.10,数学分析BI,5.0,谢锡麟,副教授,60,HGX510,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	MATH120016.10,数学分析BI,5.0,谢锡麟,副教授,60,HGX510,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 技术科学试验班\r\n\
	,,,,,,,五 1-2 ,,,\r\n\
	MECH130001.01,工程数学,3.0,祖迎庆,副研究员,35,HGX206,四 6-8 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 理论与应用力学\r\n\
	MECH130005.01,理论力学(上),3.0,杨永明,副教授,65,HGX105,三 1-2,周五12节单周上,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 力学与工程科学系\r\n\
	MECH130005.01,理论力学(上),3.0,杨永明,副教授,65,HGX105,"五 1-2\r\n\
	(单周)",周五12节单周上,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 力学与工程科学系\r\n\
	MECH130008.01,弹性力学,4.0,丁淑蓉,副教授,35,HGX405,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 理论与应用力学\r\n\
	MECH130008.01,弹性力学,4.0,丁淑蓉,副教授,35,HGX405,三 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 理论与应用力学\r\n\
	MECH130009.01,流体力学I,4.0,姚伟,教授,35,HGX305,一 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 理论与应用力学\r\n\
	MECH130009.01,流体力学I,4.0,姚伟,教授,35,HGX305,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 理论与应用力学\r\n\
	MECH130010.01,振动基础,4.0,王皓,副教授,35,HGX406,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 理论与应用力学\r\n\
	MECH130010.01,振动基础,4.0,王皓,副教授,35,HGX406,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 理论与应用力学\r\n\
	MECH130011.01,材料力学实验,1.0,刘琰玲,工程师,35,,五 6-6 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 理论与应用力学\r\n\
	MECH130019.01,生产实习、实践,1.0,张迪,副教授,65,,六 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 力学与工程科学系\r\n\
	MECH130022.01,微分方程,3.0,曹博超,讲师,30,HGX203,一 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 飞行器设计与工程\r\n\
	MECH130025.01,结构振动基础,3.0,唐国安,教授,30,HGX403,三 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 飞行器设计与工程\r\n\
	MECH130030.01,自动控制原理,2.0,艾剑良,教授,30,HGX302,四 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 飞行器设计与工程\r\n\
	MECH130031.01,CAD与工程图学基础A,3.0,沈涛虹,工程师,65,HGX403,五 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 力学与工程科学系\r\n\
	MECH130033.01,工程材料,1.0,马建敏,教授,30,HGX502,"一 3-4\r\n\
	(1-9周)",,"考试日期：2015-11-02\r\n\
	\r\n\
	考试时间：09:55-11:35",13 飞行器设计与工程\r\n\
	MECH130036.01,流体力学实验Ⅱ,2.0,郭明_,讲师,35,HGX206,一 6-7 ,,"考试日期：论文,2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",12 理论与应用力学\r\n\
	MECH130038.01,固体力学实验,2.0,刘琰玲,工程师,35,H院系自主,三 6-7 ,,"考试日期：论文,2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",12 理论与应用力学\r\n\
	MECH130042.01,结构动力学实验,2.0,崔升,副教授,35,HGX205,五 6-7 ,,"考试日期：其他,2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",12 理论与应用力学\r\n\
	MECH130045.01,生物医学工程概论,2.0,王盛章,副教授,40,H3204,五 8-9 ,,"考试日期：2015-12-25\r\n\
	考试时间：15:25-17:05","12 力学与工程科学系\r\n\
	13 力学与工程科学系"\r\n\
	MECH130046.01,优化设计,2.0,陈力奋,副教授,40,HGX502,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:25-17:05","13 力学与工程科学系\r\n\
	12 力学与工程科学系"\r\n\
	MECH130059.01,交通流体力学,2.0,吴正,副教授,30,HGX210,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",13 理论与应用力学\r\n\
	MECH130060.01,数字信号处理,2.0,郭明_,讲师,30,HGX301,四 3-4 ,,"考试日期：论文,2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",13 理论与应用力学\r\n\
	MECH130065.01,飞行器总体设计,3.0,孙刚,教授,30,HGX402,二 3-5 ,考试包括两部分,最后一节课的随堂考试一节课和大作业,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",12 飞行器设计与工程\r\n\
	MECH130066.01,飞行器结构分析与设计,3.0,华诚,副研究员,30,HGX404,五 3-5 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 飞行器设计与工程\r\n\
	MECH130072.01,气动力动态测试技术,2.0,郭明_,讲师,30,H院系自主,四 6-7 ,,"考试日期：论文,2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",13 飞行器设计与工程\r\n\
	MECH130090.01,断裂损伤,2.0,华诚,副研究员,40,HGX501,五 8-9 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：15:25-17:05","12 力学与工程科学系\r\n\
	13 力学与工程科学系"\r\n\
	MECH130092.01,工程热力学,2.0,黄骏,副研究员,40,HGX401,四 8-9 ,全英语课程,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:25-17:05","12 力学与工程科学系\r\n\
	13 力学与工程科学系"\r\n\
	MECH130093.01,张量分析与微分几何基础,2.0,谢锡麟,副教授,40,HGX510,一 8-9 ,校级精品课程,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30","13 力学与工程科学系\r\n\
	12 力学与工程科学系"\r\n\
	MECH130094.01,计算流体力学,2.0,田振夫,教授,40,HGX205,四 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:25-17:05","13 力学与工程科学系\r\n\
	12 力学与工程科学系"\r\n\
	MECH130095.01,基于Matlab的工程分析,2.0,崔升,副教授,40,HGX306,三 8-9 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：15:25-17:05","13 力学与工程科学系\r\n\
	12 力学与工程科学系"\r\n\
	MECH130096.01,计算方法,2.0,杨永明,副教授,30,HGX401,四 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 飞行器设计与工程\r\n\
	MECH130097.01,工程固体力学,3.0,倪玉山,教授,30,HGX405,五 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 飞行器设计与工程\r\n\
	MECH130100.01,金工实习,1.0,"马建敏\r\n\
	徐建明\r\n\
	王和庆","教授\r\n\
	实验员\r\n\
	助理工程师",65,,六 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 力学与工程科学系\r\n\
	MECH130100.02,金工实习,1.0,"马建敏\r\n\
	徐建明\r\n\
	王和庆","教授\r\n\
	实验员\r\n\
	助理工程师",47,,六 1-2 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 核工程与核技术\r\n\
	MECH130107.01,常微分方程,3.0,崔升,副教授,35,HGX406,一 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 理论与应用力学\r\n\
	MECH130110.01,流形上的微积分,2.0,谢锡麟,副教授,40,HGX510,三 8-9 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：13:00-15:00","13 力学与工程科学系\r\n\
	12 力学与工程科学系"\r\n\
	MECH130111.01,空气动力学,3.0,杨爱明,副教授,30,HGX401,二 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 飞行器设计与工程\r\n\
	MECH130113.01,数学分析选讲,2.0,霍永忠,教授,35,HGX302,二 3-4 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",14 理论与应用力学\r\n\
	MECH130114.01,高等代数与解析几何,4.0,陈力奋,副教授,65,HGX203,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 力学与工程科学系\r\n\
	MECH130114.01,高等代数与解析几何,4.0,陈力奋,副教授,65,HGX203,四 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 力学与工程科学系\r\n\
	BIOL120002.01,现代生物科学导论A,3.0,姚纪花,副教授,60,HGX303,一 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.02,现代生物科学导论A,3.0,"明凤\r\n\
	陈红岩","副教授\r\n\
	副教授",60,HGX306,一 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.03,现代生物科学导论A,3.0,"张鹭\r\n\
	倪挺","讲师\r\n\
	研究员",60,HGX204,一 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.04,现代生物科学导论A,3.0,蔡亮,研究员,60,HGX203,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.05,现代生物科学导论A,3.0,"南蓬\r\n\
	朱炎","副教授\r\n\
	副教授",60,HGX303,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.06,现代生物科学导论A,3.0,"明凤\r\n\
	黄青山","副教授\r\n\
	副教授",60,HGX304,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.07,现代生物科学导论A,3.0,"王玉国\r\n\
	黄青山","副教授\r\n\
	副教授",60,HGX305,五 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.08,现代生物科学导论A,3.0,"南蓬\r\n\
	朱炎","副教授\r\n\
	副教授",60,HGX404,五 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120002.09,现代生物科学导论A,3.0,"陈红岩\r\n\
	张鹭","副教授\r\n\
	讲师",60,HGX210,五 6-8 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 自然科学试验班\r\n\
	BIOL120004.01,现代生物科学导论C,2.0,"王久存\r\n\
	阮文婕","教授\r\n\
	讲师",60,HGX309,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 护理学院\r\n\
	15 药学院\r\n\
	15 临床医学(八年制)"\r\n\
	BIOL120004.02,现代生物科学导论C,2.0,"常芳\r\n\
	季朝能","副教授\r\n\
	教授",60,HGX310,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 护理学院\r\n\
	15 临床医学(八年制)\r\n\
	15 药学院"\r\n\
	BIOL120004.03,现代生物科学导论C,2.0,"杨亚军\r\n\
	杨金水","高级工程师\r\n\
	教授",60,HGX409,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 药学院\r\n\
	15 临床医学(八年制)\r\n\
	15 护理学院"\r\n\
	BIOL120004.04,现代生物科学导论C,2.0,姚纪花,副教授,60,HGX410,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 护理学院\r\n\
	15 药学院\r\n\
	15 临床医学(八年制)"\r\n\
	BIOL120004.05,现代生物科学导论C,2.0,"王玉国\r\n\
	卢大儒","副教授\r\n\
	教授",60,HGX509,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 护理学院\r\n\
	15 临床医学(八年制)\r\n\
	15 药学院"\r\n\
	BIOL120004.06,现代生物科学导论C,2.0,杨鲜梅,副教授,60,H3101,三 3-4 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 护理学院\r\n\
	15 药学院\r\n\
	15 临床医学(八年制)"\r\n\
	BIOL120004.07,现代生物科学导论C,2.0,"王久存\r\n\
	阮文婕","教授\r\n\
	讲师",60,HGX306,四 6-7 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 二军大委培生\r\n\
	BIOL120004.08,现代生物科学导论C,2.0,"常芳\r\n\
	季朝能","副教授\r\n\
	教授",60,HGX304,一 6-7 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	BIOL120004.09,现代生物科学导论C,2.0,"杨亚军\r\n\
	杨金水","高级工程师\r\n\
	教授",60,H4106,一 6-7 ,上海市精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 预防医学\r\n\
	15 预防医学(武警班)"\r\n\
	BIOL120004.10,现代生物科学导论C,2.0,杨鲜梅,副教授,40,HGD405,一 6-7 ,"上海市精品课程团队\r\n\
	全英语课程","考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",15 临床医学(六年制)\r\n\
	BIOL120005.01,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"一 6-\r\n\
	9(1-16周单周)",选修本时段学生请同时选普通化学实验I周一6-9（双周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL120005.02,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"一 6-9\r\n\
	(2-16周双周)",选修本时段学生请同时选普通化学实验I周一 6-9（单周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL120005.03,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"四 6-9\r\n\
	(1-16周单周)",选修本时段学生请同时选普通化学实验I周四 6-9（双周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL120005.04,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"四 6-9\r\n\
	(2-16周双周)",选修本时段学生请同时选普通化学实验I周四 6-9（单周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL120005.05,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"五 6-9\r\n\
	(1-16周单周)",选修本时段学生请同时选普通化学实验I周五 6-9（双周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL120005.06,现代生物科学实验,1.0,"王英明\r\n\
	吴纪华\r\n\
	宋志平\r\n\
	傅萃长\r\n\
	郭滨\r\n\
	皮妍\r\n\
	吴燕华\r\n\
	梅其春\r\n\
	尹隽\r\n\
	乔守怡\r\n\
	陆红\r\n\
	曹洋","讲师\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	讲师\r\n\
	讲师\r\n\
	副教授\r\n\
	副教授\r\n\
	讲师\r\n\
	教授\r\n\
	副教授\r\n\
	讲师",84,H立人生物楼,"五 6-9\r\n\
	(2-16周双周)",选修本时段学生请同时选普通化学实验I周五 6-9（单周）,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15 自然科学试验班\r\n\
	BIOL130003.01,动物学,2.0,"马志军\r\n\
	傅萃长\r\n\
	殷明波","教授\r\n\
	教授\r\n\
	副研究员",100,H3406,一 3-4 ,校级精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 生物科学\r\n\
	BIOL130004.01,动物学实验,1.5,吴纪华,教授,55,,一 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 生态学\r\n\
	14 生物科学"\r\n\
	BIOL130004.02,动物学实验,1.5,吴纪华,教授,55,,一 11-13 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 生物科学\r\n\
	14 生态学"\r\n\
	BIOL130005.01,生物化学A(上),3.0,王维荣,讲师,40,H3404,一 6-8 ,上海市精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 生物技术\r\n\
	BIOL130006.01,生物化学A(下),3.0,杨青,教授,30,H2111,二 3-5 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 生物科学\r\n\
	BIOL130006.02,生物化学A(下),3.0,俞瑜,讲师,30,H5308,三 3-5 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 生物科学\r\n\
	BIOL130006.03,生物化学A(下),3.0,王维荣,讲师,30,H2208,四 1-3 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 生物科学\r\n\
	BIOL130010.01,微生物学,3.0,刘明秋,副教授,40,HGX205,二 3-5 ,校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 生命科学学院\r\n\
	BIOL130010.02,微生物学,3.0,丁晓明,副教授,40,H5115,三 3-5 ,校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 生命科学学院\r\n\
	BIOL130010.03,微生物学,3.0,丁晓明,副教授,40,H2110,四 3-5 ,校级精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 生命科学学院\r\n\
	BIOL130011.01,微生物学实验,1.5,王英明,讲师,24,H立人生物楼,五 1-3 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130011.02,微生物学实验,1.5,刘明秋,副教授,24,H立人生物楼,三 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130011.03,微生物学实验,1.5,王英明,讲师,24,H立人生物楼,三 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130011.04,微生物学实验,1.5,王英明,讲师,24,H立人生物楼,四 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130011.05,微生物学实验,1.5,王英明,讲师,24,H立人生物楼,五 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130012.01,遗传学,3.0,"吴燕华\r\n\
	乔守怡","副教授\r\n\
	教授",80,HGX409,一 3-5 ,"国家级教学名师\r\n\
	国家级精品课程团队","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 生命科学学院\r\n\
	BIOL130012.02,遗传学,3.0,"林娟\r\n\
	卢大儒","副教授\r\n\
	教授",60,HGX204,一 3-5 ,"上海市教学名师\r\n\
	国家级精品课程团队","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 生命科学学院\r\n\
	BIOL130013.01,遗传学实验,1.5,皮妍,讲师,24,H立人生物楼,五 1-3 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130013.02,遗传学实验,1.5,皮妍,讲师,24,H立人生物楼,三 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130013.03,遗传学实验,1.5,郭滨,讲师,24,H立人生物楼,三 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130013.04,遗传学实验,1.5,郭滨,讲师,24,H立人生物楼,四 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130013.05,遗传学实验,1.5,皮妍,讲师,24,H立人生物楼,四 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130016.01,高级生化技术,1.5,陆红,副教授,24,H立人生物楼,四 1-8(1-16周单周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130016.02,高级生化技术,1.5,陆红,副教授,24,H立人生物楼,四 1-8(2-16周双周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130016.03,高级生化技术,1.5,陆红,副教授,36,H立人生物楼,五 1-8(2-16周双周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130017.01,基因工程实验,1.5,吴燕华,副教授,24,H立人生物楼,四 1-8(1-16周单周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130017.02,基因工程实验,1.5,吴燕华,副教授,24,H立人生物楼,四 1-8(2-16周双周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130017.03,基因工程实验,1.5,郭滨,讲师,36,H立人生物楼,五 1-8(1-16周单周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物科学\r\n\
	BIOL130017.04,基因工程实验,1.5,郭滨,讲师,24,H立人生物楼,五 1-8(2-16周双周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生物技术\r\n\
	BIOL130019.01,现代生物学基础实验,2.0,梅其春,副教授,24,H立人生物楼,五 6-8 ,不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 生物技术\r\n\
	BIOL130021.01,生物化学实验A(下),1.5,陆红,副教授,24,H立人生物楼,五 1-8(1-16周单周),不接受期中退课,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生物技术\r\n\
	BIOL130024.01,生物统计学,3.0,"陆晨琪\r\n\
	胡跃清\r\n\
	罗泽伟","助理研究员\r\n\
	研究员\r\n\
	教授",20,H2209,一 6-8 ,上海市精品课程团队,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",生命科学学院\r\n\
	BIOL130026.01,免疫学,2.0,"李瑞\r\n\
	朱乃硕","讲师\r\n\
	教授",50,HGX203,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130027.01,发育生物学B,3.0,邓可京,正高级实验师,40,H2110,四 11-13 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",生命科学学院\r\n\
	BIOL130029.01,医学分子遗传学,2.0,陈红岩,副教授,30,H3304,三 8-9 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：15:20-17:00",生命科学学院\r\n\
	BIOL130031.01,病毒学,2.0,钟江,教授,50,H5302,三 3-4 ,校级精品课程团队,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",生命科学学院\r\n\
	BIOL130037.01,基因组学,2.0,"罗小金\r\n\
	杨金水","副研究员\r\n\
	教授",50,H3204,二 8-9 ,"复旦大学教学名师\r\n\
	校级精品课程团队","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",生命科学学院\r\n\
	BIOL130040.01,生物控制论,2.0,"明灯明\r\n\
	曹洋","副研究员\r\n\
	讲师",30,H3405,三 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130049.01,生物技术概论与应用,2.0,"朱焕章\r\n\
	卢大儒\r\n\
	刘建平","教授\r\n\
	教授\r\n\
	副教授",50,HGX501,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130052.01,细胞因子及其应用,2.0,刘建平,副教授,50,H3105,三 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130053.01,转基因动物技术,2.0,朱焕章,教授,50,H3105,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:20-17:00",生命科学学院,考试时间已经改,\r\n\
	BIOL130057.01,遗传分析原理,2.0,吴晓晖,教授,40,H2111,一 11-12 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",生命科学学院\r\n\
	BIOL130058.01,真核生物转录调控和RNA干扰,2.0,曹立环,副教授,30,H2103,二 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130061.01,现代药物与给药系统,3.0,"印春华\r\n\
	唐翠","教授\r\n\
	教授",40,H2209,四 11-13 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130063.01,生物化学B,3.0,俞瑜,讲师,40,H2111,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-16:05",化学系\r\n\
	BIOL130065.01,分子生物学,2.0,朱乃硕,教授,50,H3204,三 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130067.01,生命科学科研伦理和规范,2.0,孙_,教授,50,HGX501,一 6-7 ,全英语课程,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",生命科学学院\r\n\
	BIOL130069.01,生物地理学,2.0,傅萃长,教授,50,H3305,三 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130071.01,药物分析方法与应用,2.0,南蓬,副教授,30,H2103,四 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130072.01,生物芯片的研究与应用,2.0,"黄燕\r\n\
	李瑶","副教授\r\n\
	教授",30,H5306,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",生命科学学院\r\n\
	BIOL130076.01,功能基因组学专题,2.0,谢君,副教授,30,H2103,二 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130078.01,法医人类学,2.0,李士林,副教授,40,H2110,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130079.01,多基因遗传病,2.0,王笑峰,副教授,35,H2111,三 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130085.01,发育神经生物学,2.0,"郑煜芳\r\n\
	俞洪波","副研究员\r\n\
	教授",40,H2208,二 3-4 ,全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130087.01,植物生理学,2.0,"刘建祥\r\n\
	李琳","研究员\r\n\
	青年研究员",30,H2216,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:20-17:00",生命科学学院\r\n\
	BIOL130088.01,病原微生物学基础,2.0,张雪莲,副教授,50,HGX201,二 6-7 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-15:10",生命科学学院\r\n\
	BIOL130095.01,遗传工程原理与应用,2.0,"吕红\r\n\
	余文博\r\n\
	余_","教授\r\n\
	讲师\r\n\
	副研究员",60,HGX303,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35",生命科学学院\r\n\
	BIOL130100.01,系统生物学,2.0,罗若愚,副研究员,30,H2103,二 11-12 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130101.01,基因组医学与进化,2.0,汪海健,副教授,30,H2208,二 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130109.01,生态学模型,2.0,周淑荣,教授,40,H2208,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	BIOL130120.01,动物生物学,3.0,"吴纪华\r\n\
	马志军\r\n\
	傅萃长\r\n\
	殷明波","教授\r\n\
	教授\r\n\
	教授\r\n\
	副研究员",30,H2103,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",14 生态学\r\n\
	BIOL130122.01,生物多样性科学导论,2.0,"宋志平\r\n\
	王玉国\r\n\
	陈家宽\r\n\
	张文驹","教授\r\n\
	副教授\r\n\
	教授\r\n\
	教授",30,H6310,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",14 生态学\r\n\
	BIOL130123.01,种群生态学,2.0,"李博\r\n\
	潘晓云","教授\r\n\
	副教授",30,H6210,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",14 生态学\r\n\
	BIOL130124.01,群落生态学,2.0,"傅萃长\r\n\
	周淑荣","教授\r\n\
	教授",30,H3204,三 1-2 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-09:40",14 生态学\r\n\
	BIOL130143.01,生命科学研究设计与实践I,2.0,"任国栋\r\n\
	闫致强","研究员\r\n\
	研究员",30,JB103,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（生化、神经、植物）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 生命科学学院\r\n\
	BIOL130143.02,生命科学研究设计与实践I,2.0,"吴晓晖\r\n\
	张瑞霖","教授\r\n\
	研究员",30,JB102,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（动物、遗传、细胞）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",14 生命科学学院\r\n\
	BIOL130145.01,生命科学研究设计与实践III,2.0,"郑丙莲\r\n\
	陆平利","研究员\r\n\
	青年研究员",20,JB106,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（植物、遗传、细胞）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130145.02,生命科学研究设计与实践III,2.0,"李琳\r\n\
	李继喜","青年研究员\r\n\
	研究员",20,JB105,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（生化、植物、动物）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 生命科学学院\r\n\
	BIOL130147.01,生命科学研究设计与实践V,2.0,"鲁伯埙\r\n\
	缑金营","研究员\r\n\
	青年研究员",20,JB202,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（神经、植物、遗传）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生命科学学院\r\n\
	BIOL130147.02,生命科学研究设计与实践V,2.0,"麻锦彪\r\n\
	蔡亮","教授\r\n\
	研究员",20,JB303,六 6-7 ,"拔尖人才专项课程\r\n\
	TSI:AIBS（生化、细胞、动物）","考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 生命科学学院\r\n\
	BIOL130148.01,发育与代谢,2.0,"钟涛\r\n\
	闫致强\r\n\
	余巍\r\n\
	张瑞霖","教授\r\n\
	研究员\r\n\
	研究员\r\n\
	研究员",30,HGX305,三 6-7 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",生命科学学院\r\n\
	XDSY118005.01,经典与前沿：细胞生物学,2.0,蔡亮,研究员,20,H2102A,四 11-12 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118006.01,现代人类学,2.0,李辉,教授,15,H2103,六 1-4 ,共9次课，任课教师随堂通知下次上课时间,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118008.01,遗传学经典与前沿,2.0,"倪挺\r\n\
	卢大儒","研究员\r\n\
	教授",15,H2102B,"一 11-13\r\n\
	(1-12周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118009.01,肿瘤发生、预防和治疗,1.0,吴家雪,研究员,15,H2102B,"四 11-12\r\n\
	(1-9周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118010.01,探索大脑,2.0,俞洪波,教授,15,F2302,四 11-12 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118018.01,生命的魅力与生命科学的挑战,2.0,蒯本科,教授,20,H2102A,二 8-9 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118020.01,疾病中的生命科学,2.0,王久存,教授,20,H2102A,"二 11-13\r\n\
	(1-12周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n\
	XDSY118021.01,代谢与生活,2.0,赵世民,教授,20,H2104A,"一 11-13\r\n\
	(1-12周)",,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",15\r\n';

	    COURSE_DATA['理科课程'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,开课系\r\n\
	ENGL110009.01,英美文化概论,2.0,孙文捷,副教授,30,H5113,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110009.02,英美文化概论,2.0,孙文捷,副教授,30,H5113,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110009.03,英美文化概论,2.0,孙文捷,副教授,30,H5113,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110009.04,英美文化概论,2.0,孙文捷,副教授,30,H5113,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110009.05,英美文化概论,2.0,孙文捷,副教授,30,H5113,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110009.06,英美文化概论,2.0,姚燕瑾,副教授,30,H6102,二 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110009.07,英美文化概论,2.0,姚燕瑾,副教授,30,H6102,二 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110012.01,英语视听,2.0,肖英,讲师,30,H5209,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部 \r\n\
	ENGL110012.02,英语视听,2.0,肖英,讲师,30,H5209,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部\r\n\
	ENGL110012.03,英语视听,2.0,肖英,讲师,30,H5209,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部 \r\n\
	ENGL110012.04,英语视听,2.0,徐欣,副教授,30,H5209,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部\r\n\
	ENGL110012.05,英语视听,2.0,李萍,讲师,30,H5214,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部 \r\n\
	ENGL110012.06,英语视听,2.0,杨霞,讲师,30,H5209,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:10",大学英语教学部\r\n\
	ENGL110024.01,影视与英美文化讨论,2.0,吴晓真,副教授,30,H5112,一 1-2 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110024.02,影视与英美文化讨论,2.0,吴晓真,副教授,30,H5112,一 3-4 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110024.03,影视与英美文化讨论,2.0,吴晓真,副教授,30,H5112,一 6-7 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110025.01,英美报刊选读,2.0,姚燕瑾,副教授,30,H6102,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部\r\n\
	ENGL110025.02,英美报刊选读,2.0,姚燕瑾,副教授,30,H6102,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部 \r\n\
	ENGL110025.03,英美报刊选读,2.0,姚燕瑾,副教授,30,H6102,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部\r\n\
	ENGL110033.01,高级英语视听说,2.0,葛宁,讲师,30,H5214,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:25",大学英语教学部 \r\n\
	ENGL110033.02,高级英语视听说,2.0,葛宁,讲师,30,H5214,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:25",大学英语教学部\r\n\
	ENGL110033.03,高级英语视听说,2.0,涂伶俐,讲师,30,H5209,一 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:25",大学英语教学部 \r\n\
	ENGL110035.01,实用交际英语口语,2.0,季佩英,教授,25,H2110,三 1-2 ,"复旦大学教学名师\r\n\
	建议修完大学英语III","考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.02,实用交际英语口语,2.0,季佩英,教授,25,H2110,四 1-2 ,"复旦大学教学名师\r\n\
	建议修完大学英语III","考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110035.03,实用交际英语口语,2.0,陆丽萍,副教授,25,H2113A,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.04,实用交际英语口语,2.0,陆丽萍,副教授,25,H2113A,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110035.05,实用交际英语口语,2.0,陆丽萍,副教授,25,H2113A,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.06,实用交际英语口语,2.0,陆丽萍,副教授,25,H2113A,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110035.07,实用交际英语口语,2.0,陆丽萍,副教授,25,H2113A,五 8-9 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.08,实用交际英语口语,2.0,陈进,副教授,25,H2105A,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110035.09,实用交际英语口语,2.0,宣枫,讲师,25,H2113B,一 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.10,实用交际英语口语,2.0,宣枫,讲师,25,H2113B,一 6-7 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110035.11,实用交际英语口语,2.0,宣枫,讲师,25,H2113B,一 8-9 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110035.12,实用交际英语口语,2.0,向丁丁,讲师,25,H5108,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部\r\n\
	ENGL110036.01,英语公众演说,2.0,万江波,高级讲师,25,H5115,四 6-7 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部\r\n\
	ENGL110036.02,英语公众演说,2.0,万江波,高级讲师,25,H5115,四 8-9 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",大学英语教学部 \r\n\
	ENGL110036.03,英语公众演说,2.0,时丽娜,讲师,25,H2112B,三 1-2 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部\r\n\
	ENGL110036.04,英语公众演说,2.0,时丽娜,讲师,25,H2112B,三 3-4 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部 \r\n\
	ENGL110036.05,英语公众演说,2.0,Jeffrey Stuart KLEIN,,25,H2102A,一 6-7 ,建议修完大学英语III,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部\r\n\
	ENGL110036.06,英语公众演说,2.0,Jeffrey Stuart KLEIN,,25,H2102A,一 8-9 ,建议修完大学英语III,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",大学英语教学部 \r\n\
	ENGL110042.01,英语笔译,2.0,范劲松,副教授,25,HGX403,二 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110042.02,英语笔译,2.0,范劲松,副教授,25,HGX403,四 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110042.03,英语笔译,2.0,范劲松,副教授,25,HGX403,四 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110042.04,英语笔译,2.0,艾斐,讲师,25,HGX403,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110042.05,英语笔译,2.0,艾斐,讲师,25,HGX403,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110042.06,英语笔译,2.0,艾斐,讲师,25,HGX403,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110042.07,英语笔译,2.0,艾斐,讲师,25,HGX403,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110043.01,英语口译,2.0,康志峰,教授,30,H5108,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110043.02,英语口译,2.0,康志峰,教授,30,H5108,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部\r\n\
	ENGL110043.03,英语口译,2.0,康志峰,教授,30,H5108,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110043.04,英语口译,2.0,康志峰,教授,30,H5108,四 6-7 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部\r\n\
	ENGL110043.05,英语口译,2.0,康志峰,教授,30,H5108,四 8-9 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110043.06,英语口译,2.0,向丁丁,讲师,30,H5108,五 6-7 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部\r\n\
	ENGL110043.07,英语口译,2.0,向丁丁,讲师,30,H5108,五 8-9 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110043.08,英语口译,2.0,涂伶俐,讲师,30,H5108,一 1-2 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部\r\n\
	ENGL110043.09,英语口译,2.0,涂伶俐,讲师,30,H5108,一 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110045.01,学术英语（科学技术）,2.0,蔡基刚,教授,25,H2110,一 8-9 ,"复旦大学教学名师\r\n\
	建议修完大学英语III","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部\r\n\
	ENGL110045.02,学术英语（科学技术）,2.0,蔡基刚,教授,25,H2110,五 1-2 ,"复旦大学教学名师\r\n\
	建议修完大学英语III","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部 \r\n\
	ENGL110045.03,学术英语（科学技术）,2.0,贺灿文,讲师,25,HGX401,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部\r\n\
	ENGL110045.04,学术英语（科学技术）,2.0,贺灿文,讲师,25,HGX401,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:10",大学英语教学部 \r\n\
	ENGL110046.01,学术英语（社会科学）,2.0,张颖,高级讲师,25,H5105,三 1-2 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110046.02,学术英语（社会科学）,2.0,张颖,高级讲师,25,H5105,三 3-4 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110046.03,学术英语（社会科学）,2.0,张颖,高级讲师,25,H5105,五 1-2 ,"建议修完大学英语III\r\n\
	校级精品课程I","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110046.04,学术英语（社会科学）,2.0,张颖,高级讲师,25,H5105,五 3-4 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110047.01,学术英语（文史哲）,2.0,王建伟,讲师,25,H2107,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110047.02,学术英语（文史哲）,2.0,王建伟,讲师,25,H2107,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110047.03,学术英语（文史哲）,2.0,黄红霞,讲师,25,H2106B,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110048.01,学术英语（管理科学）,2.0,季佩英,教授,25,H2110,三 3-4 ,"复旦大学教学名师 \r\n\
	建议修完大学英语III","考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110048.02,学术英语（管理科学）,2.0,王薇,讲师,25,HGX402,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110048.03,学术英语（管理科学）,2.0,王薇,讲师,25,HGX402,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110054.01,文化阅读,2.0,徐真,讲师,30,H2112A,二 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110054.02,文化阅读,2.0,徐真,讲师,30,H2112A,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110054.03,文化阅读,2.0,吴宝雷,讲师,30,H2205,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110056.01,英语论辩与思辨,2.0,Thame,,25,H2110,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	ENGL110056.02,英语论辩与思辨,2.0,Thame,,25,H2110,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部 \r\n\
	ENGL110056.03,英语论辩与思辨,2.0,Thame,,25,H2110,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",大学英语教学部\r\n\
	ENGL110057.01,英国文学欣赏指南,2.0,韦春晓,讲师,30,H2105B,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-20:50",大学英语教学部 \r\n\
	ENGL110057.02,英国文学欣赏指南,2.0,韦春晓,讲师,30,H2105B,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-20:50",大学英语教学部\r\n\
	ENGL110057.03,英国文学欣赏指南,2.0,韦春晓,讲师,30,H2105B,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-20:50",大学英语教学部 \r\n\
	ENGL110057.04,英国文学欣赏指南,2.0,王绍梅,高级讲师,30,HGX304,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-20:50",大学英语教学部\r\n\
	ENGL110057.05,英国文学欣赏指南,2.0,Jeffrey Stuart KLEIN,,30,H2102A,四 8-9 ,建议修完大学英语III,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",大学英语教学部 \r\n\
	ENGL110059.01,大学英语IV,2.0,张勤,讲师,30,H2111,三 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",大学英语教学部\r\n\
	ENGL110059.02,大学英语IV,2.0,张勤,讲师,30,H2111,三 6-7 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",大学英语教学部 \r\n\
	ENGL110059.03,大学英语IV,2.0,张勤,讲师,30,H2111,三 8-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",大学英语教学部\r\n\
	ENGL110061.01,英语论说文写作,2.0,董宏乐,副教授,20,H6202,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.02,英语论说文写作,2.0,董宏乐,副教授,20,H6202,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.03,英语论说文写作,2.0,董宏乐,副教授,20,H6202,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.04,英语论说文写作,2.0,董宏乐,副教授,20,H6202,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.05,英语论说文写作,2.0,汪中平,讲师,20,H5214,一 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.06,英语论说文写作,2.0,汪中平,讲师,20,H5214,一 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.07,英语论说文写作,2.0,汪中平,讲师,20,H5214,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.08,英语论说文写作,2.0,汪中平,讲师,20,H5214,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.09,英语论说文写作,2.0,张雪波,讲师,20,HGX404,二 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.10,英语论说文写作,2.0,张雪波,讲师,20,HGX404,二 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.11,英语论说文写作,2.0,张雪波,讲师,20,HGX404,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.12,英语论说文写作,2.0,张雪波,讲师,20,HGX404,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.13,英语论说文写作,2.0,顾乡,讲师,20,H2106A,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.14,英语论说文写作,2.0,韦春晓,讲师,20,H2105B,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.15,英语论说文写作,2.0,韦春晓,讲师,20,H2105B,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.16,英语论说文写作,2.0,杜方圆,讲师,20,H6102,一 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.17,英语论说文写作,2.0,杜方圆,讲师,20,H6102,一 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.18,英语论说文写作,2.0,杜方圆,讲师,20,H6102,四 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.19,英语论说文写作,2.0,杜方圆,讲师,20,H6102,四 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110061.20,英语论说文写作,2.0,Thame,,20,H2110,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部\r\n\
	ENGL110061.21,英语论说文写作,2.0,Thame,,20,H2110,五 8-9 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:30",大学英语教学部 \r\n\
	ENGL110062.01,研究论文写作,2.0,范劲松,副教授,20,HGX403,二 3-4 ,建议修完大学英语III,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",大学英语教学部\r\n\
	ENGL110063.01,创意写作,2.0,Jeffrey Stuart KLEIN,,20,H2102A,五 6-7 ,建议修完大学英语III,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",大学英语教学部 \r\n\
	ENGL110063.02,创意写作,2.0,Jeffrey Stuart KLEIN,,20,H2102A,五 8-9 ,建议修完大学英语III,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",大学英语教学部\r\n\
	ENGL110064.01,英语应用文写作,2.0,曹京渊,正高级讲师,20,H2104B,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部 \r\n\
	ENGL110064.02,英语应用文写作,2.0,刘亦春,高级讲师,20,HGX204,二 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部\r\n\
	ENGL110064.03,英语应用文写作,2.0,刘亦春,高级讲师,20,HGX204,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部 \r\n\
	ENGL110064.04,英语应用文写作,2.0,刘亦春,高级讲师,20,HGX204,四 6-7 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部\r\n\
	ENGL110064.05,英语应用文写作,2.0,陈洁倩,副教授,20,HGX203,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部 \r\n\
	ENGL110064.06,英语应用文写作,2.0,张勤,讲师,20,H2111,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部\r\n\
	ENGL110064.07,英语应用文写作,2.0,张勤,讲师,20,H2111,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：17:00-18:00",大学英语教学部 \r\n\
	ENGL110065.01,西方儒学研究名著导读,2.0,王建伟,讲师,30,H2107,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部\r\n\
	ENGL110066.01,商务英语沟通,2.0,吴晓真,副教授,30,H5112,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部 \r\n\
	ENGL110066.02,商务英语沟通,2.0,吴晓真,副教授,30,H5112,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	ENGL110067.01,学术英语（综合）,2.0,吴晶,高级讲师,25,HGX302,四 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110067.02,学术英语（综合）,2.0,吴晶,高级讲师,25,HGX302,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110067.03,学术英语（综合）,2.0,吴晶,高级讲师,25,HGX302,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110069.01,文学翻译鉴赏,2.0,万江波,高级讲师,30,H5115,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	ENGL110069.02,文学翻译鉴赏,2.0,万江波,高级讲师,30,H5115,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	ENGL110070.01,大学英语III,2.0,刘亦春,高级讲师,30,HGX204,三 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",大学英语教学部\r\n\
	ENGL110070.02,大学英语III,2.0,刘亦春,高级讲师,30,HGX204,三 6-7 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",大学英语教学部 \r\n\
	ENGL110070.03,大学英语III,2.0,管阳阳,讲师,30,HGX303,三 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",大学英语教学部\r\n\
	ENGL110070.04,大学英语III,2.0,管阳阳,讲师,30,HGX303,五 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",大学英语教学部 \r\n\
	ENGL110071.01,美国文学选读,2.0,叶如兰,讲师,30,HGX301,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110071.02,美国文学选读,2.0,叶如兰,讲师,30,HGX301,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110071.03,美国文学选读,2.0,叶如兰,讲师,30,HGX301,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	ENGL110071.04,美国文学选读,2.0,叶如兰,讲师,30,HGX301,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	ENGL110072.01,中外大学文化对比研究,2.0,彭华,讲师,30,H2208,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部 \r\n\
	FORE110044.01,基础日语Ⅰ,2.0,王初文,高级讲师,30,H3104,三 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	FORE110044.02,基础日语Ⅰ,2.0,王初文,高级讲师,30,H3104,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部 \r\n\
	FORE110044.03,基础日语Ⅰ,2.0,王初文,高级讲师,30,H3104,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:10-19:20",大学英语教学部\r\n\
	FORE110045.01,基础日语Ⅱ,2.0,王初文,高级讲师,30,H3104,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部 \r\n\
	FORE110045.02,基础日语Ⅱ,2.0,王初文,高级讲师,30,H3104,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：19:50-21:00",大学英语教学部\r\n\
	FORE110050.01,基础西班牙语Ⅰ,4.0,Julio,,20,HGX105,一 6-7 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部 \r\n\
	,基础西班牙语Ⅰ,4.0,Julio,,20,HGX105,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部 \r\n\
	,基础西班牙语Ⅰ,4.0,Julio,,20,HGX105,五 6-7 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",大学英语教学部 \r\n\
	FORE110051.01,基础西班牙语Ⅱ,4.0,Julio,,20,HGX105,一 3-4 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	FORE110051.01,基础西班牙语Ⅱ,,,,,HGX105,三 3-4 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	FORE110051.01,基础西班牙语Ⅱ,4.0,Julio,,20,HGX105,五 3-4 ,建议修完大学英语III,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	FORE110064.01,基础葡萄牙语I,4.0,Mariana do Nascimento Ramos,,20,HGX106,三 6-7 ,建议修完大学英语III,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部 \r\n\
	,基础葡萄牙语I,4.0,Mariana do Nascimento Ramos,,20,HGX106,五 1-2 ,建议修完大学英语III,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部 \r\n\
	FORE110065.01,基础葡萄牙语II,4.0,Mariana do Nascimento Ramos,,20,HGX106,三 8-9 ,建议修完大学英语III,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：09:55-11:35",大学英语教学部\r\n\
	FORE110065.01,基础葡萄牙语II,4.0,Mariana do Nascimento Ramos,,20,,五 3-4 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：09:55-11:35",\r\n\
	FORE110040.01,基础俄语Ⅰ,2.0,曾婷,讲师,40,H5302,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院 \r\n\
	FORE110041.01,基础俄语Ⅱ,2.0,汪吉,讲师,40,H5306,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院\r\n\
	FORE110042.01,基础法语Ⅰ,2.0,彭俞霞,讲师,40,H6107,五 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院 \r\n\
	FORE110044.04,基础日语Ⅰ,2.0,王菁洁,,40,H5308,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院\r\n\
	FORE110046.01,基础韩语Ⅰ,2.0,黄贤玉,副教授,40,H6108,五 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院 \r\n\
	FORE110046.02,基础韩语Ⅰ,2.0,吴仙花,讲师,40,H5106,五 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院\r\n\
	FORE110047.01,基础韩语Ⅱ,2.0,姜颖,讲师,40,H5110,五 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院 \r\n\
	FORE110048.01,基础德语Ⅰ,2.0,李晶浩,讲师,40,H6209,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院\r\n\
	FORE110054.01,基础瑞典语Ⅰ,4.0,Lin Engdahl,,30,HGX206,一 11-12,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",外国语言文学学院 \r\n\
	FORE110054.01,基础瑞典语Ⅰ,4.0,Lin Engdahl,,30,HGX206,四 11-12,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",外国语言文学学院 \r\n\
	FORE110057.01,梵语 I,2.0,刘震,研究员,150,HGX103,五 11-12,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:10",外国语言文学学院\r\n\
	FORE110059.01,梵语 III,2.0,Eberhard Guhe,副教授,20,HGX205,五 11-12,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:10",外国语言文学学院\r\n\
	ENGL110035.13,实用交际英语口语,2.0,向丁丁,讲师,30,JB106,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：13:00-14:30",大学英语教学部 \r\n\
	ENGL110043.10,英语口译,2.0,向丁丁,讲师,30,JB106,四 1-2 ,"建议修完大学英语III\r\n\
	校级精品课程","考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部\r\n\
	ENGL110033.04,高级英语视听说,2.0,涂伶俐,讲师,35,Z2212,四 3-4 ,建议修完大学英语III,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-16:25",大学英语教学部\r\n\
	ENGL110043.11,英语口译,2.0,涂伶俐,讲师,35,Z2212,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-13\r\n\
	\r\n\
	考试时间：15:00-17:00",大学英语教学部 \r\n\
	ENGL110070.05,大学英语III,2.0,朱彦,,35,Z2103,一 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",大学英语教学部\r\n\
	ENGL110055.01,学术英语（医学）,2.0,蔡和兵,讲师,35,F2202,四 1-2 ,建议修完大学英语III,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：08:00-09:40",大学英语教学部 ';

	    COURSE_DATA['大学外语'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,选修专业,备注,考试安排,开课系\r\n\
	911.001.1.01,现代汉语(上),2.0,陶寰,副教授,15,H6404,一 3-4 ,"14 汉语言文学(二专)\r\n\
	12 汉语言文学(二学位)",,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",中国语言文学系\r\n\
	911.002.1.01,语言学概论,2.0,张新华,副教授,30,H2104B,四 11-12 ,"12 汉语言文学(二学位)\r\n\
	14 汉语言文学(二专)",,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",中国语言文学系 \r\n\
	911.007.1.01,古代汉语,3.0,王文晖,副教授,15,HGX410,五 3-5 ,"12 汉语言文学(二学位)\r\n\
	13 汉语言文学(二专)",,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",中国语言文学系\r\n\
	911.012.1.01,文学概论,2.0,张岩冰,副教授,15,HGX307,三 6-7 ,"13 汉语言文学(二专)\r\n\
	12 汉语言文学(二学位)",,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",中国语言文学系 \r\n\
	911.014.1.01,中国古代文学史(上),2.0,张金耀,讲师,15,H3408,四 8-9 ,"14 汉语言文学(二专)\r\n\
	12 汉语言文学(二学位)",,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",中国语言文学系\r\n\
	911.014.3.01,中国古代文学史(下),2.0,吴兆路,研究员,15,HGX304,二 3-4 ,"13 汉语言文学(二专)\r\n\
	12 汉语言文学(二学位)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",中国语言文学系 \r\n\
	911.015.1.01,中国现当代文学史(上),2.0,栾梅健,教授,15,H3406,三 6-7 ,"12 汉语言文学(二学位)\r\n\
	14 汉语言文学(二专)",,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",中国语言文学系\r\n\
	911.019.1.01,断代文学研究,2.0,张金耀,讲师,30,H2216,四 6-7 ,12 汉语言文学(二学位),,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",中国语言文学系 \r\n\
	911.021.1.01,中外作家研究,2.0,张芙鸣,副教授,30,H2107,四 11-12 ,12 汉语言文学(二学位),,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",中国语言文学系\r\n\
	911.026.1.01,中国现代影视剧研究,2.0,杨新宇,副教授,30,H6310,三 6-7 ,12 汉语言文学(二学位),,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",中国语言文学系 \r\n\
	911.029.1.01,外国文学史,3.0,王宏图,教授,15,HGX509,一 3-5 ,"13 汉语言文学(二学位)\r\n\
	12 汉语言文学(二学位)",,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",中国语言文学系\r\n\
	912.003.1.01,翻译概论,3.0,强晓,讲师,120,H2214,一 11-13 ,英汉双语翻译(二专),14,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院 \r\n\
	912.004.2.01,英语写作(下),3.0,强晓,讲师,100,H6201,二 11-13 ,英汉双语翻译(二专),13,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院\r\n\
	912.005.2.01,英汉互译技巧II,3.0,姜倩,讲师,100,H6101,五 11-13 ,英汉双语翻译(二专),13,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院 \r\n\
	912.006.2.01,英汉视译II,3.0,管玉华,讲师,100,H6101,四 11-13 ,英汉双语翻译(二专),13,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院\r\n\
	912.011.1.01,世界文学导读,2.0,汪洪章,教授,30,H6112,五 6-7 ,英汉双语翻译(二专),13/14,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院 \r\n\
	912.013.1.01,英美报刊,2.0,高永伟,副教授,30,H6112,三 6-7 ,英汉双语翻译(二专),13/14,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",外国语言文学学院\r\n\
	912.018.1.01,非虚构文学赏析,2.0,沈黎,教授,5,H5115,二 1-2 ,英汉双语翻译(二专),13,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",外国语言文学学院 \r\n\
	912.020.1.01,英美短篇小说,2.0,汪洪章,教授,20,H6101,三 1-2 ,英汉双语翻译(二专),13,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",外国语言文学学院\r\n\
	912.021.1.01,英美散文,2.0,丁骏,讲师,30,H5106,四 3-4 ,英汉双语翻译(二专),13,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",外国语言文学学院 \r\n\
	912.026.1.01,基础口译（I）,3.0,冯超,讲师,120,H2214,二 11-13 ,英汉双语翻译(二专),14,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院\r\n\
	912.027.1.01,英语读译,3.0,陶友兰,副教授,120,H2214,三 11-13 ,英汉双语翻译(二专),14,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-21:05",外国语言文学学院 \r\n\
	913.006.1.01,新闻法规与职业道德,2.0,陈建云,教授,50,HQ301,三 11-12 ,12,12级,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",新闻学院\r\n\
	913.014.1.01,广告学概论,2.0,张殿元,教授,90,HQ201,二 11-12 ,"12\r\n\
	14",12级、14级,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",新闻学院 \r\n\
	913.008.1.01,广告策划与创意,2.0,唐乐,讲师,50,HQ203,四 11-12 ,13,13级,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",新闻学院\r\n\
	913.013.1.01,广播电视与当代社会,2.0,赵民,副教授,50,HQ203,二 11-12 ,13,13级,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：18:30-20:30",新闻学院 \r\n\
	913.023.1.01,中国新闻传播史,3.0,林溪声,副教授,50,HQ203,五 11-13 ,13,13级,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:30-20:30",新闻学院\r\n\
	913.001.1.01,新闻学概论,3.0,伍静,讲师,70,HQ201,三 11-13 ,14,14级,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：18:30-20:30",新闻学院 \r\n\
	913.015.1.01,马恩新闻思想,2.0,徐佳,讲师,50,HQ201,一 11-12 ,14,14级,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",新闻学院\r\n\
	913.021.1.01,新闻采访与写作,3.0,许燕,副教授,70,HQ201,四 11-13 ,14,14级,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",新闻学院 \r\n\
	917.002.1.01,国际关系导论,3.0,陈玉聃,讲师,40,H6202,二 11-13 ,外交与公共事务,14,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院\r\n\
	917.004.1.01,当代中国对外关系,3.0,俞沂暄,讲师,40,H6202,四 11-13 ,外交与公共事务,14,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",国际关系与公共事务学院 \r\n\
	917.007.1.01,国际谈判,2.0,沈逸,副教授,40,H2101,一 11-12 ,外交与公共事务,13,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",国际关系与公共事务学院\r\n\
	917.008.1.01,外交与外事管理,2.0,张骥,助理研究员,40,H4304,四 11-12 ,外交与公共事务,13,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院 \r\n\
	917.013.1.01,美国政治与对外关系,2.0,徐以骅,教授,40,H6112,五 9-10 ,外交与公共事务,13,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：16:20-18:00",国际关系与公共事务学院\r\n\
	917.014.1.01,欧盟政治与对外关系,2.0,简军波,副研究员,40,H6102,三 9-10 ,外交与公共事务,14,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院 \r\n\
	917.022.1.01,中国古代政治智慧与治国方略,3.0,陈超群,副教授,40,H6110,三 11-13 ,外交与公共事务,14,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",国际关系与公共事务学院\r\n\
	917.023.1.01,公众领导力,3.0,宋道雷,讲师,40,H6110,一 11-13 ,外交与公共事务,14,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院 \r\n\
	917.037.1.01,行政技能与实践,3.0,陈水生,副教授,40,H6110,二 11-13 ,外交与公共事务,13,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院\r\n\
	924.002.1.01,概率论与数理统计,4.0,张巍,副教授,140,H3409,二 11-13 ,14 数据科学(二专),,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院 \r\n\
	924.002.1.01,概率论与数理统计,4.0,张巍,副教授,140,H3409,四 11-12 ,14 数据科学(二专),,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院 \r\n\
	972.012.1.01,数据结构,4.0,陈彤兵,讲师,140,H计算中心三楼机房,一 11-12 ,14 数据科学(二专),,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院\r\n\
	972.012.1.01,数据结构,4.0,陈彤兵,讲师,140,H3309,三 11-13 ,14 数据科学(二专),,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院\r\n\
	972.014.1.01,数据库引论,3.0,汪卫,教授,140,H计算中心三楼机房,四 13-14 ,14 数据科学(二专),,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院 \r\n\
	972.014.1.01,数据库引论,3.0,汪卫,教授,140,H4101,五 11-13 ,14 数据科学(二专),,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",计算机科学技术学院 \r\n\
	927.005.1.01,民法Ⅱ,4.0,班天可,讲师,100,H4103,三 11-14 ,13 法学,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院\r\n\
	927.007.1.01,民事诉讼法,3.0,杨严炎,副教授,100,H4104,四 11-13 ,13 法学,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院 \r\n\
	927.010.1.01,刑法Ⅱ,2.0,杜宇,教授,100,H4103,一 11-12 ,13 法学,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院\r\n\
	927.012.1.01,刑事诉讼法,3.0,马贵翔,教授,100,H4103,五 11-13 ,13 法学,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院 \r\n\
	927.001.1.01,法学基础理论,3.0,姚军,,115,H3306,一 11-13 ,14 法学,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院\r\n\
	927.009.1.01,宪法,3.0,涂云新,讲师,115,H4401,三 11-13 ,14 法学,9月潘伟杰上,10月以后涂云新上,"考试日期：2015-12-21\r\n\
	考试时间：18:30-20:30",法学院 \r\n\
	927.014.1.01,中国法制史,3.0,韩涛,副教授,115,H3306,四 11-13 ,14 法学,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院\r\n\
	934.018.1.01,公共安全管理,3.0,滕五晓,副教授,15,H院系自主,二 8-10 ,公共事业管理(社会管理方向)(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会发展与公共政策学院 \r\n\
	934.020.1.01,公共政策概论,3.0,胡湛,副教授,12,H6209,四 11-13 ,公共事业管理(社会管理方向)(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会发展与公共政策学院\r\n\
	934.021.1.01,公共经济学,3.0,程远,教授,15,H院系自主,一 11-13 ,公共事业管理(社会管理方向)(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会发展与公共政策学院 \r\n\
	934.023.1.01,社会学概论,3.0,王威海,教授,15,H6312,二 3-5 ,公共事业管理(社会管理方向)(二专),,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：18:30-20:30",社会发展与公共政策学院\r\n\
	934.024.1.01,非政府组织管理,3.0,赵德余,教授,15,H院系自主,二 11-13 ,公共事业管理(社会管理方向)(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会发展与公共政策学院 \r\n\
	934.031.1.01,就业市场管理和政策,2.0,王菊芬,研究员,15,,三 11-13 ,公共事业管理(社会管理方向)(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会发展与公共政策学院\r\n\
	934.036.1.01,GIS在公共管理中的应用,2.0,张伊娜,副教授,10,H5314,一 6-7 ,公共事业管理(社会管理方向)(二专),,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",社会发展与公共政策学院 \r\n\
	945.001.1.01,环境学原理,3.0,余琦,副教授,5,H4208,一 11-13 ,14 环境科学与公共政策(二专),,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",环境科学与工程系\r\n\
	945.002.1.01,环境工程学,3.0,张轶,讲师,5,H4408,五 3-5 ,14 环境科学与公共政策(二专),,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",环境科学与工程系 \r\n\
	945.007.1.01,全球环境变化,2.0,陈莹,教授,5,HGX202,四 3-4 ,14 环境科学与公共政策(二专),,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",环境科学与工程系\r\n\
	945.010.1.01,环境生物学,3.0,樊正球,副教授,5,H4104,四 3-5 ,14 环境科学与公共政策(二专),,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",环境科学与工程系 \r\n\
	945.011.1.01,基础生态学,2.0,王寿兵,副教授,5,H4101,一 1-2 ,14 环境科学与公共政策(二专),,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",环境科学与工程系\r\n\
	945.005.1.01,环境法学,3.0,黄文芳,副教授,5,HGX202,一 6-8 ,环境科学与公共政策(二专),,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",环境科学与工程系 \r\n\
	957.033.1.02,微观经济学,3.0,"应晓华\r\n\
	张璐莹\r\n\
	蒋虹丽","教授\r\n\
	讲师\r\n\
	讲师",20,JA106,一 11-12 ,11 公共事业管理,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院\r\n\
	957.014.1.01,卫生事业管理,4.0,"励晓红\r\n\
	吕军\r\n\
	李程跃","副教授\r\n\
	教授\r\n\
	讲师",20,JA201,五 6-9 ,12 公共事业管理,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院 \r\n\
	957.032.1.01,管理学,3.0,"吕军\r\n\
	孙梅","教授\r\n\
	副教授",20,F院系自主,二 11-12 ,12 公共事业管理,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院\r\n\
	957.030.1.01,医疗保险,2.0,"叶露\r\n\
	应晓华\r\n\
	蒋虹丽","教授\r\n\
	教授\r\n\
	讲师",20,JA206,三 10-13(1-9周),,,,公共卫生学院 \r\n\
	968.023.1.01,货币经济学,3.0,田素华,教授,65,H6104,三 11-13 ,国际经济与贸易(二专),13 国际经济与贸易(二专),"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	968.025.1.01,国际经营,3.0,强永昌,教授,65,H6105,二 11-13 ,国际经济与贸易(二专),13 国际经济与贸易(二专),"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	968.029.1.01,统计学,3.0,高虹,师资博士后,90,H6101,一 11-13 ,经济学(二专),13 级经济学(二专）,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	968.033.1.01,概率论与数理统计,3.0,朱弘鑫,副教授,60,H6208,三 11-13 ,国际经济与贸易(二专),14 国际经济与贸易(二专),"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	968.033.1.02,概率论与数理统计,3.0,汪思海,讲师,160,H6112,五 11-13 ,经济学(二专),14 级经济学(二专）,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	968.034.1.01,国际金融,3.0,张涛,副教授,90,H6106,三 11-13 ,经济学(二专),13 级经济学(二专）,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	968.034.1.02,国际金融,3.0,郑辉,副教授,65,H6104,四 11-13 ,国际经济与贸易(二专),13 国际经济与贸易(二专),"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	968.036.1.01,国际经济学,3.0,蔡晓月,副教授,65,H6105,五 11-13 ,国际经济与贸易(二专),13 国际经济与贸易(二专),"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	968.037.1.01,微观经济学,3.0,冯剑亮,讲师,60,H6209,二 11-13 ,国际经济与贸易(二专),14 国际经济与贸易(二专),"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	968.037.1.02,微观经济学,3.0,冯剑亮,讲师,160,H6112,四 11-13 ,经济学(二专),14 经济学(二专）,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	968.038.1.01,发展经济学,3.0,章奇,副研究员,90,H6101,二 11-13 ,经济学(二专),13 级经济学(二专）,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	969.001.1.01,会计学,3.0,孙琳,副教授,160,H6112,二 11-13 ,经济学(二专),14 级经济学(二专）,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 \r\n\
	969.001.1.02,会计学,3.0,徐筱凤,副教授,60,H6107,四 11-13 ,国际经济与贸易(二专),14 国际经济与贸易(二专),"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院\r\n\
	942.001.2.01,中级财务会计(下),3.0,徐志翰,副教授,80,H4106,二 11-14 ,会计学(二学位),13,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 \r\n\
	942.002.1.01,成本管理会计,3.0,徐浩萍,副教授,80,H4106,一 11-14 ,会计学(二学位),13,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院\r\n\
	942.006.1.01,国际会计,3.0,朱振梅,讲师,70,H6201,一 11-13 ,会计学(二学位),12,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 \r\n\
	942.007.1.01,税务会计,2.0,娄贺统,高级讲师,80,H4106,四 11-12 ,会计学(二学位),13,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院\r\n\
	942.008.1.01,财务报表分析,2.0,曹利,讲师,70,H6201,四 11-12 ,会计学(二学位),12,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 \r\n\
	942.009.1.01,会计职业道德,2.0,金__,讲师,130,H4301,一 11-12 ,会计学(二学位),14,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院\r\n\
	942.015.1.01,毕业论文,4.0,徐志翰,副教授,70,H院系自主,六 1-1 ,会计学(二学位),12,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",管理学院 \r\n\
	942.016.1.01,保险学,3.0,张真,副教授,80,H4106,三 11-13 ,会计学(二学位),13,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院\r\n\
	968.037.1.03,微观经济学,3.0,冯剑亮,讲师,130,H4201,五 11-13 ,会计学(二学位),14,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 \r\n\
	969.001.1.03,会计学,3.0,洪剑峭,教授,130,H4201,四 11-13 ,会计学(二学位),14,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院\r\n\
	969.002.1.01,管理学导论,3.0,唐跃军,副教授,130,H4201,三 11-13 ,会计学(二学位),14,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 \r\n\
	993.001.1.01,语言学概论,2.0,高顺全,教授,20,HGD413,一 11-12 ,对外汉语(二专),14,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院\r\n\
	993.002.1.01,现代汉语,4.0,陶炼,副教授,20,HGD504,三 8-9 ,对外汉语(二专),14,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院 \r\n\
	993.002.1.01,现代汉语,4.0,陶炼,副教授,20,HGD504,四 8-9 ,对外汉语(二专),14,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院 \r\n\
	993.004.1.01,中国古代文学(上),2.0,施国锋,讲师,20,HGD414,五 11-12 ,对外汉语(二专),13,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院\r\n\
	993.007.1.01,教育心理学,2.0,杨蓉蓉,副教授,20,HGD413,五 11-12 ,对外汉语(二专),14,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院 \r\n\
	993.008.1.01,跨文化交际理论,2.0,杨蓉蓉,副教授,20,HGD504,五 8-9 ,对外汉语(二专),13,"考试日期：论文,2015-12-25\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	993.009.1.01,第二语言习得理论,2.0,陈钰,讲师,20,HGD506,四 8-9 ,对外汉语(二专),13,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院 \r\n\
	993.014.1.01,语音与语音教学,2.0,盛青,讲师,20,HGD410,四 11-12 ,对外汉语(二专),13,"考试日期：论文,2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院\r\n\
	993.015.1.01,词汇与词汇教学,2.0,盛若菁,副教授,20,HGD412,一 11-12 ,对外汉语(二专),13,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院 \r\n\
	993.016.1.01,语法与语法教学,2.0,耿直,讲师,20,HGD504,一 8-9 ,对外汉语(二专),13,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	993.017.1.01,汉字与汉字教学,2.0,胡文华,副教授,20,HGD413,三 11-12 ,对外汉语(二专),13,"考试日期：论文,2015-12-23\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院 \r\n\
	916.016.1.01,现代科学技术与社会发展,2.0,徐志宏,讲师,10,HGX203,四 3-4,"哲学(二专)\r\n\
	宗教学(二专)",,"考试日期：论文\r\n\
	考试时间：-",哲学学院\r\n\
	916.051.1.01,西方哲学史(上),2.0,佘碧平,教授,10,HGX409,二 3-4,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",哲学学院\r\n\
	916.056.1.01,马克思主义哲学导论,2.0,王德峰,教授,10,HGX510,四 6-7,"哲学(二专)\r\n\
	宗教学(二专)",上海市教学名师,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",哲学学院\r\n\
	916.057.1.01,中国哲学史（上）,2.0,刘康德,教授,10,HGX105,二 1-2,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：08:00-09:40",哲学学院 \r\n\
	916.060.1.01,马克思主义哲学史,2.0,吴晓明,教授,10,HGX207,三 8-9,"宗教学(二专)\r\n\
	哲学(二专)",上海市教学名师,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",哲学学院\r\n\
	916.062.1.01,哲学阅读和写作,1.0,"郝兆宽\r\n\
	徐英瑾","教授\r\n\
	教授",10,H3109,二 6-7(1-8周),"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：论文\r\n\
	考试时间：-",哲学学院 \r\n\
	916.063.1.01,古希腊哲学,2.0,丁耘,教授,10,HGX203,二 8-10,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：论文\r\n\
	考试时间：-",哲学学院\r\n\
	916.064.1.01,先秦诸子,2.0,杨泽波,教授,10,HGX103,四 8-9,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：论文,2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",哲学学院 \r\n\
	916.065.1.01,佛教哲学,2.0,刘宇光,副教授,4,H5307,三 6-7,"哲学(二专)\r\n\
	宗教学(二专)",,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院\r\n\
	916.075.1.01,价值哲学,2.0,冯平,教授,10,HGX401,一 11-12,"宗教学(二专)\r\n\
	哲学(二专)",复旦大学教学名师,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院 \r\n\
	916.076.1.01,伦理学原著选读,2.0,邓安庆,教授,10,HGX204,四 8-9,"哲学(二专)\r\n\
	宗教学(二专)",,"考试日期：论文\r\n\
	考试时间：-",哲学学院\r\n\
	916.077.1.01,宗教学导论,2.0,朱晓红,副教授,10,H5102,一 6-7,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院 \r\n\
	916.078.1.01,伦理学导论,2.0,罗亚玲,副教授,7,HGX406,三 6-7,"哲学(二专)\r\n\
	宗教学(二专)",,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院\r\n\
	916.081.1.01,基督教史,2.0,刘平,副教授,10,HGX501,一 8-9,"宗教学(二专)\r\n\
	哲学(二专)",,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",哲学学院 \r\n\
	916.083.1.01,儒教的理论与历史,2.0,李天纲,教授,10,HGX301,二 8-9,"哲学(二专)\r\n\
	宗教学(二专)",,"考试日期：论文\r\n\
	考试时间：-",哲学学院\r\n\
	916.033.1.01,数理逻辑I,2.0,郝兆宽,教授,10,HGX204,四 1-2,数理逻辑与科学哲学(二专),,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",哲学学院 \r\n\
	916.036.1.01,集合论,2.0,杨睿之,讲师,10,HGX302,四 11-12,数理逻辑与科学哲学(二专),,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院\r\n\
	916.046.1.01,可计算性理论,2.0,杨睿之,讲师,10,HGX202,五 11-12,数理逻辑与科学哲学(二专),,"考试日期：论文\r\n\
	考试时间：-",哲学学院 \r\n\
	916.055.1.01,现代西方哲学原著选读,2.0,王金林,教授,10,HGX507,三 3-4,数理逻辑与科学哲学(二专),海德格尔《形而上学导论》,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学学院 \r\n\
	916.089.1.01,《圣经》与西方宗教传统,2.0,王新生,教授,10,H3108,二 3-4,数理逻辑与科学哲学(二专),,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学学院 ';

	    COURSE_DATA['二专课程'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,开课系,选课限制条件\r\n\
	COMP110001.01,计算机高级办公自动化,1.0,陈海洪,工程师,89,H4501,一 6-7 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110001.02,计算机高级办公自动化,1.0,肖川,工程师,71,H4503,一 8-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110001.03,计算机高级办公自动化,1.0,王欢,高级工程师,71,H4506,四 8-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110003.01,计算机网络与网页制作,1.0,肖川,工程师,71,H4503,一 3-4 ,混合式教学,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110003.02,计算机网络与网页制作,1.0,肖川,工程师,71,H4503,一 6-7 ,混合式教学,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110003.03,计算机网络与网页制作,1.0,肖川,工程师,71,H4503,三 3-4 ,混合式教学,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110003.04,计算机网络与网页制作,1.0,陈学青,副教授,71,H4504,三 6-7 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110003.05,计算机网络与网页制作,1.0,陈彤兵,讲师,89,H4501,五 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110004.01,计算机基础与数据库,1.0,王放,副教授,71,H4505,一 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110004.02,计算机基础与数据库,1.0,王放,副教授,71,H4505,一 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110004.03,计算机基础与数据库,1.0,王智慧,讲师,71,H4504,二 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110004.04,计算机基础与数据库,1.0,肖川,工程师,71,H4503,三 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110004.05,计算机基础与数据库,1.0,马颖琦,高级讲师,71,H4505,三 8-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110004.06,计算机基础与数据库,1.0,王欢,高级工程师,71,H4506,四 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110004.07,计算机基础与数据库,1.0,王欢,高级工程师,71,H4506,四 6-7 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110032.01,计算机多媒体应用（初级）,1.0,陈海洪,工程师,89,H4501,一 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110032.02,计算机多媒体应用（初级）,1.0,张向东,讲师,89,H4501,三 6-7 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110032.03,计算机多媒体应用（初级）,1.0,张向东,讲师,89,H4501,三 8-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110032.04,计算机多媒体应用（初级）,1.0,张向东,讲师,89,H4501,三 11-12 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,留学生\r\n\
	COMP110033.01,计算机多媒体应用（高级）,1.0,孙晓光,副教授,89,H4501,一 8-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110033.02,计算机多媒体应用（高级）,1.0,张向东,讲师,89,H4501,四 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110033.03,计算机多媒体应用（高级）,1.0,张向东,讲师,89,H4501,四 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110034.01,计算机初级办公自动化,1.0,肖川,工程师,71,H4503,一 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110034.02,计算机初级办公自动化,1.0,陈海洪,工程师,89,H4501,一 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110034.03,计算机初级办公自动化,1.0,马颖琦,高级讲师,71,H4505,三 6-7 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,\r\n\
	COMP110034.04,计算机初级办公自动化,1.0,王欢,高级工程师,71,H4506,四 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,\r\n\
	COMP110034.05,计算机初级办公自动化,1.0,张向东,讲师,89,H4501,四 11-12 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,留学生\r\n\
	COMP110036.01,C程序设计,2.0,陈学青,副教授,71,H4504,一 6-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,"15 管理学院\r\n\
	15 自然科学试验班\r\n\
	15 旅游管理\r\n\
	15 经济学院\r\n\
	15 临床医学(八年制)"\r\n\
	COMP110036.02,C程序设计,2.0,张守志,副教授,79,H3106,二 1-2 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,"15 自然科学试验班\r\n\
	15 旅游管理\r\n\
	15 临床医学(八年制)\r\n\
	15 经济学院\r\n\
	15 管理学院"\r\n\
	COMP110036.02,C程序设计,2.0,张守志,副教授,79,H计算中心三楼3号机房,二 3-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,"15 自然科学试验班\r\n\
	15 旅游管理\r\n\
	15 临床医学(八年制)\r\n\
	15 经济学院\r\n\
	15 管理学院\r\n\
	15 核科学与技术系"\r\n\
	COMP110036.03,C程序设计,2.0,陈学青,副教授,71,H4504,三 1-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,"15 临床医学(八年制)\r\n\
	15 旅游管理\r\n\
	15 经济学院\r\n\
	15 管理学院\r\n\
	15 自然科学试验班"\r\n\
	COMP110036.04,C程序设计,2.0,肖川,工程师,71,H4503,三 6-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,"15 自然科学试验班\r\n\
	15 管理学院\r\n\
	15 旅游管理\r\n\
	15 经济学院\r\n\
	15 临床医学(八年制)"\r\n\
	COMP110036.05,C程序设计,2.0,王智慧,讲师,71,H4504,四 1-4 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,"15 管理学院\r\n\
	15 临床医学(八年制)\r\n\
	15 自然科学试验班\r\n\
	15 经济学院\r\n\
	15 旅游管理"\r\n\
	COMP110036.06,C程序设计,2.0,陈彤兵,讲师,89,H4501,五 6-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,"15 旅游管理\r\n\
	15 自然科学试验班\r\n\
	15 临床医学(八年制)\r\n\
	15 管理学院\r\n\
	15 经济学院"\r\n\
	COMP110037.01,VB程序设计,2.0,陈学青,副教授,71,H4504,一 1-4 ,"非自然科学试验班\r\n\
	临床医学(八年制)、核工程与核技术学生选修","考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,15\r\n\
	COMP110037.02,VB程序设计,2.0,肖川,工程师,71,H4503,二 1-4 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,15\r\n\
	COMP110037.03,VB程序设计,2.0,张向东,讲师,89,H4501,三 1-4 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,15\r\n\
	COMP110037.04,VB程序设计,2.0,王欢,高级工程师,71,H4506,三 6-9 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,15\r\n\
	COMP110037.05,VB程序设计,2.0,马颖琦,高级讲师,71,H4505,四 1-4 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,15\r\n\
	COMP110037.06,VB程序设计,2.0,卢暾,副教授,71,H4503,四 6-9 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,15\r\n\
	COMP110037.07,VB程序设计,2.0,马颖琦,高级讲师,71,H4505,四 6-9 ,非自然科学试验班、临床医学(八年制)学生选修,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院 ,15\r\n\
	COMP110042.01,Python程序设计,2.0,张向东,讲师,89,H4501,四 6-9 ,,"考试日期：2015-12-19\r\n\
	\r\n\
	考试时间：08:00-22:00",计算机科学技术学院,';

	    COURSE_DATA['计算机'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,开课系,备注,考试安排\r\n\
	NDEC110002.01,军事理论,1.0,黄荣国,副教授,100,H3401,一 8-9 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.02,军事理论,1.0,范科琪,助理研究员,100,H3401,一 11-12 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.03,军事理论,1.0,范科琪,助理研究员,100,H3401,二 1-2 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.04,军事理论,1.0,范科琪,助理研究员,100,H3401,二 3-4 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.05,军事理论,1.0,陈莹莹,助理研究员,100,H3401,三 1-2 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.06,军事理论,1.0,陈莹莹,助理研究员,100,H3401,三 3-4 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.07,军事理论,1.0,陈莹莹,助理研究员,100,H3401,三 6-7 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.08,军事理论,1.0,黄荣国,副教授,100,H3401,三 8-9 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.09,军事理论,1.0,赵亮,助理研究员,100,H3401,三 11-12 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.10,军事理论,1.0,赵亮,助理研究员,100,H3401,四 1-2 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.11,军事理论,1.0,范科琪,助理研究员,100,H3401,四 3-4 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.12,军事理论,1.0,赵亮,助理研究员,100,H3401,四 6-7 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.13,军事理论,1.0,赵亮,助理研究员,100,H3401,五 6-7 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.14,军事理论,1.0,赵亮,助理研究员,100,H3401,五 8-9 ,军事理论教研室,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30"\r\n\
	NDEC110002.15,军事理论,1.0,,,500,H院系自主,二 11-12 ,军事理论教研室,慕课,"考试日期：\r\n\
	\r\n\
	考试时间：-"';

	    COURSE_DATA['军事理论'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,开课系,选课限制条件\r\n\
	ICES110001.01,留学生高级汉语I,4.0,赵国军,助理研究员,60,HGX209,三 1-2 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：8:00-9:40",中国语言文学系,15 法学\r\n\
	ICES110001.01,留学生高级汉语I,4.0,赵国军,助理研究员,60,HGX209,五 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：8:00-9:40",中国语言文学系,15 法学\r\n\
	ICES110003.01,留学生专业汉语I,4.0,卢英顺,教授,50,HGX502,三 1-2 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-09:40",中国语言文学系 ,留学生\r\n\
	ICES110003.01,留学生专业汉语I,4.0,卢英顺,教授,50,HGX502,五 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-09:40",中国语言文学系 ,留学生\r\n\
	ICES110001.02,留学生高级汉语I,4.0,顾昕,副教授,20,HQ302,二 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",新闻学院,\r\n\
	ICES110001.02,留学生高级汉语I,4.0,顾昕,副教授,20,HQ302,四 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",新闻学院,\r\n\
	ICES110001.04,留学生高级汉语I,4.0,林涓,助理研究员,30,H6110,三 3-4 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:10",国际关系与公共事务学院,15 留学生 国际关系与公共事务学院\r\n\
	ICES110001.04,留学生高级汉语I,4.0,林涓,助理研究员,30,H6110,五 6-7 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:10",国际关系与公共事务学院,15 留学生 国际关系与公共事务学院\r\n\
	ICES110003.02,留学生专业汉语I,4.0,黄以天,讲师,30,H6209,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院 ,14 国际关系与公共事务学院\r\n\
	ICES110003.02,留学生专业汉语I,4.0,黄以天,讲师,30,H6209,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",国际关系与公共事务学院 ,14 国际关系与公共事务学院\r\n\
	ICES110001.05,留学生高级汉语I,4.0,赵立行,教授,60,H5312,三 1-2 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",法学院,15 法学\r\n\
	ICES110001.05,留学生高级汉语I,4.0,赵立行,教授,60,H3204,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",法学院,15 法学\r\n\
	ICES110003.03,留学生专业汉语I,4.0,韩涛,副教授,30,JB307,三 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",法学院 ,14 留学生 法学\r\n\
	ICES110003.03,留学生专业汉语I,4.0,韩涛,副教授,30,JB307,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",法学院 ,14 留学生 法学\r\n\
	ICES110003.04,留学生专业汉语I,4.0,袁斌,讲师,5,H院系自主,二 11-12 ,管理学院李达三楼105室,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院,13 管理学院\r\n\
	ICES110003.04,留学生专业汉语I,4.0,袁斌,讲师,5,H院系自主,四 11-12 ,管理学院李达三楼105室,,管理学院,13 管理学院\r\n\
	ICES110003.05,留学生专业汉语I,4.0,许静,讲师,5,H院系自主,二 11-12 ,"管理学院\r\n\
	史带楼\r\n\
	503室","考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",管理学院 ,13 管理学院\r\n\
	ICES110003.05,留学生专业汉语I,4.0,许静,讲师,5,H院系自主,四 11-12 ,管理学院史带楼503室,,管理学院 ,13 管理学院\r\n\
	ICES110001.03,留学生高级汉语I,4.0,姚萱,副教授,30,HGD411,二 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院,外国交流学生\r\n\
	ICES110001.03,留学生高级汉语I,4.0,姚萱,副教授,30,HGD411,四 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院,外国交流学生\r\n\
	ICES110012.01,中国概况（上）,2.0,许静,讲师,30,HGD405,四 8-9 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:25-16:55",国际文化交流学院,15 临床医学(六年制)\r\n\
	ICES110012.02,中国概况（上）,2.0,赵雪倩,高级讲师,40,HGD414,一 11-12 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院 ,15 留学生\r\n\
	ICES110012.03,中国概况（上）,2.0,许金生,副教授,40,HGD414,二 11-12 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院,15 留学生\r\n\
	ICES110012.04,中国概况（上）,2.0,赵雪倩,高级讲师,40,HGD414,三 11-12 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院 ,15 留学生\r\n\
	ICES110012.05,中国概况（上）,2.0,许金生,副教授,40,HGD414,四 11-12 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：18:30-20:00",国际文化交流学院,15 留学生';

	    COURSE_DATA['留学生'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,开课系,选课限制条件\r\n\
	FINE110001.01,影视剧艺术,2.0,龚金平,副教授,50,H6204,一 8-9 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110001.03,影视剧艺术,2.0,周涛,讲师,50,H4306,四 8-9 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110006.01,校园歌曲赏析和创作,2.0,钱武杰,讲师,20,H6210,三 11-12 ,研讨型课程,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110006.02,校园歌曲赏析和创作,2.0,钱武杰,讲师,20,H6210,四 8-9 ,研讨型课程,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110014.01,中外音乐审美,2.0,陈莉萍,高级讲师,50,H2101,三 8-9 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心 ,\r\n\
	FINE110014.02,中外音乐审美,2.0,陈莉萍,高级讲师,50,H2101,三 11-12 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110014.03,中外音乐审美,2.0,钱武杰,讲师,50,H6209,三 8-9 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心 ,\r\n\
	FINE110014.04,中外音乐审美,2.0,乔靖,讲师,50,H6105,一 11-12 ,上海市精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110015.01,中西美术,2.0,张勇,高级讲师,50,H4206,四 11-12 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心 ,\r\n\
	FINE110017.01,书法审美,2.0,晏海林,副教授,15,H艺术设计系207,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110018.01,艺术设计原理,2.0,周进,高级讲师,30,H4408,一 11-12 ,研讨型课程,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心 ,\r\n\
	FINE110029.01,爵士乐赏析,2.0,乔靖,讲师,50,H6105,一 8-9 ,校级精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110031.01,数码钢琴演奏（初级）,2.0,花白,讲师,24,H艺术教育馆2F钢琴教室,四 11-12 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110032.01,数码钢琴演奏（中级）,2.0,"陈瑜\r\n\
	花白","讲师\r\n\
	讲师",24,H艺术教育馆2F钢琴教室,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110032.02,数码钢琴演奏（中级）,2.0,花白,讲师,24,H艺术教育馆2F钢琴教室,四 8-9 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110033.01,中外电影比较研究,2.0,龚金平,副教授,30,H6202,一 11-12 ,研讨型课程,"考试日期：论文,2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110033.02,中外电影比较研究,2.0,龚金平,副教授,30,H6202,三 11-12 ,研讨型课程,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110034.01,合唱作品赏析与实践（初级）,2.0,"陈瑜\r\n\
	张鹿","讲师\r\n\
	助理研究员",50,H艺术教育馆2F排练厅二,三 11-12 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110036.01,世界民族音乐文化,2.0,陈莉萍,高级讲师,50,H2101,四 8-9 ,校级精品课程团队,"考试日期：论文,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110036.02,世界民族音乐文化,2.0,花白,讲师,50,H4206,三 11-12 ,校级精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",艺术教育中心,\r\n\
	FINE110038.01,中外建筑与环境艺术,2.0,张榉文,讲师,50,H6301,三 8-9 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110039.01,中世纪艺术,2.0,宋可即,助理研究员,20,H2110,一 11-12 ,全英语课程,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110040.01,现代设计思维,2.0,赵阳,讲师,15,H艺术设计系207,一 8-9 ,,"考试日期：论文,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110040.02,现代设计思维,2.0,赵阳,讲师,15,H艺术设计系207,四 8-9 ,,"考试日期：论文,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110042.01,构成艺术与设计思维,2.0,丁玉红,讲师,30,H6207,四 8-9 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110042.02,构成艺术与设计思维,2.0,丁玉红,讲师,30,H6207,四 11-12 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110043.01,数码艺术设计基础,2.0,白建松,讲师,15,H6202,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110045.01,新媒体艺术,2.0,白建松,讲师,50,H4303,三 11-12 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110046.01,数字动画艺术与设计,2.0,白建松,讲师,15,H6202,四 8-9 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110048.01,室内设计基础,2.0,宋颖,讲师,50,H6206,三 11-12 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110053.01,外国代表性舞蹈表演与赏析,2.0,张鹿,助理研究员,15,H艺术教育馆2F排练厅二,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110054.01,建筑空间艺术之旅,2.0,丁玉红,讲师,50,H6207,三 8-9 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110056.01,视觉艺术流派解析,2.0,赵阳,讲师,50,H4303,三 8-9 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110057.01,影视编剧新视野,2.0,周涛,讲师,15,H2210,一 8-9 ,研讨型课程,"考试日期：其他,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110058.01,建筑艺术创意解读,2.0,张榉文,讲师,35,H6102,三 11-12 ,研讨型课程,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110058.02,建筑艺术创意解读,2.0,张榉文,讲师,35,H6102,四 11-12 ,研讨型课程,"考试日期：论文,2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	FINE110059.01,中国音乐史（上）,2.0,,,30,HGX305,一 8-9 ,,,艺术教育中心 ,15 艺术管理\r\n\
	FINE110061.01,西方音乐史（上）,2.0,王丹丹,教授,30,HGX206,二 8-9 ,,,艺术教育中心,15 艺术管理\r\n\
	FINE110063.01,城市公共艺术,2.0,汤筠冰,副教授,50,H4303,一 11-12 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110071.01,素描.,2.0,王天德,教授,15,H3301,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110071.02,素描.,2.0,王天德,教授,15,H3301,三 11-12 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110071.03,素描.,2.0,汤筠冰,副教授,15,H3301,一 8-9 ,,"考试日期：其他,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110071.04,素描.,2.0,汤筠冰,副教授,15,H3301,四 8-9 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110072.01,色彩.,2.0,周进,高级讲师,20,H艺术设计系206,五 8-9 ,,"考试日期：其他,2015-12-18\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110073.01,写生,2.0,张勇,高级讲师,20,H艺术设计系201,三 8-9 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110073.02,写生,2.0,张勇,高级讲师,20,H艺术设计系201,四 8-9 ,,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110075.01,室内设计理论与实践,2.0,宋颖,讲师,18,H6210,一 11-12 ,研讨型课程,"考试日期：论文,2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	FINE110076.01,微电影与微时代,2.0,许肖潇,讲师,35,H6202,一 8-9 ,研讨型课程,"考试日期：其他,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	FINE110077.01,微影人的自我修养,2.0,许肖潇,讲师,15,H6210,三 8-9 ,研讨型课程,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	FINE110001.02,影视剧艺术,2.0,许肖潇,讲师,50,JB303,一 11-12 ,上海市精品课程团队,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,';
	    COURSE_DATA['美育'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '选课序号,课程名称,学分,教师,职称,人数,教室,时间,备注,考试时间,选课限制条件\r\n\
	CHIN120002.01,中国文学传统,2.0,汪涌豪,教授,100,HGX207,一 3-4 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：9:55-11:35","15 中国语言文学类\r\n\
	15 新闻传播学类"\r\n\
	CHIN120002.02,中国文学传统,2.0,朱刚,教授,100,HGX307,一 3-4 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：9:55-11:35","15 中国语言文学类\r\n\
	15 新闻传播学类"\r\n\
	CHIN120003.01,美学,2.0,张宝贵,教授,80,HGX105,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:25-17:05",15 中国语言文学类\r\n\
	CHIN120006.01,现代文艺赏析,2.0,金理,副教授,60,H6301,三 6-7 ,,"考试日期：论文,2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",15 中国语言文学类\r\n\
	CHIN120007.01,现代语言学,2.0,盛益民,讲师,60,HGX310,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",15 中国语言文学类\r\n\
	CHIN120008.01,语言学名著选读,2.0,霍四通,副教授,60,H6201,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",15 中国语言文学类\r\n\
	CHIN120009.01,中西文艺学名著导读,2.0,张旭曙,副教授,60,HGX404,四 8-9 ,,"考试日期：论文,2015-12-24\r\n\
	\r\n\
	考试时间：15:25-17:05",15 中国语言文学类\r\n\
	CHIN120011.01,汉语概论,2.0,"董建交\r\n\
	盛益民\r\n\
	陶寰","讲师\r\n\
	讲师\r\n\
	副教授",100,HGX507,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",15 中国语言文学类\r\n\
	CHIN120012.01,中国文学经典,3.0,周兴陆,教授,80,HGX509,二 1-4 ,单周上课，双周上课加讨论,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：18:30-20:30",15 中国语言文学类\r\n\
	CHIN120012.02,中国文学经典,3.0,张金耀,讲师,80,HGX510,二 1-4 ,单周上课，双周上课加讨论,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：18:30-20:30",15 中国语言文学类\r\n\
	CHIN120012.03,中国文学经典,3.0,王文晖,副教授,80,H3209,二 1-4 ,单周上课，双周上课加讨论,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：18:30-20:30",15 中国语言文学类\r\n\
	CHIN130001.01,古代汉语,3.0,梁银峰,副教授,50,H5114,五 3-5 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130001.02,古代汉语,3.0,王文晖,副教授,50,HGX410,五 3-5 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130001.03,古代汉语,3.0,董建交,讲师,50,HGX509,五 3-5 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130002.01,现代汉语(上),2.0,陶寰,副教授,60,H6404,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","14 新闻学院\r\n\
	14 中国语言文学系"\r\n\
	CHIN130002.02,现代汉语(上),2.0,陈忠敏,教授,60,HGX510,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","14 中国语言文学系\r\n\
	14 新闻学院"\r\n\
	CHIN130002.03,现代汉语(上),2.0,平悦铃,副教授,60,H6209,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","14 新闻学院\r\n\
	14 中国语言文学系"\r\n\
	CHIN130004.01,中国现当代文学史(上),2.0,栾梅健,教授,65,H3406,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 中国语言文学系\r\n\
	14 新闻学院"\r\n\
	CHIN130004.02,中国现当代文学史(上),2.0,陈思和,教授,65,H3109,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 新闻学院\r\n\
	14 中国语言文学系"\r\n\
	CHIN130006.01,中国古代文学史(上),2.0,张金耀,讲师,121,H3408,四 8-9 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","14 新闻学院\r\n\
	14 中国语言文学系"\r\n\
	CHIN130008.01,中国古代文学史(下),2.0,吴兆路,研究员,60,HGX304,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130008.02,中国古代文学史(下),2.0,罗书华,教授,60,HGX303,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130009.01,外国文学史,3.0,王宏图,教授,50,HGX509,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130009.02,外国文学史,3.0,戴从容,教授,50,H6206,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 中国语言文学系\r\n\
	CHIN130010.01,文学概论,2.0,张岩冰,副教授,115,HGX307,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 中国语言文学系\r\n\
	CHIN130013.01,中国文学批评史,3.0,邬国平,教授,50,H6509,三 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：8:30-10:30",12 汉语言文学\r\n\
	CHIN130013.02,中国文学批评史,3.0,羊列荣,副教授,50,H6401,三 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：8:30-10:30",12 汉语言文学\r\n\
	CHIN130015.01,鲁迅精读,2.0,郜元宝,教授,50,HGX301,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 汉语言文学\r\n\
	CHIN130017.01,《文心雕龙》精读,2.0,周兴陆,教授,50,HGX406,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 汉语言文学\r\n\
	CHIN130017.02,《文心雕龙》精读,2.0,邬国平,教授,50,HGX403,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 汉语言文学\r\n\
	CHIN130020.01,专业英语(汉语言文学),3.0,王柏华,副教授,80,,四 3-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 汉语言文学\r\n\
	CHIN130020.01,专业英语(汉语言文学),3.0,王柏华,副教授,80,HGX106,四 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 汉语言文学\r\n\
	CHIN130024.01,《普通语言学教程》精读,2.0,申小龙,教授,30,HGX302,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 汉语言\r\n\
	CHIN130025.01,《中国话的文法》精读,2.0,杨宁,副教授,30,HGX509,一 6-7 ,,"考试日期：论文,2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 汉语言\r\n\
	CHIN130026.01,《说文解字》精读,2.0,殷寄明,教授,30,HGX404,一 3-4 ,,"考试日期：2015-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 汉语言\r\n\
	CHIN130030.01,西方语言学,2.0,蒋勇,副教授,35,H6504,三 3-4 ,全英文课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",12 汉语言\r\n\
	CHIN130031.01,专业英语(汉语言),3.0,龚群虎,教授,35,HGX306,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 汉语言\r\n\
	CHIN130037.01,中国古典美学,2.0,谢金良,教授,50,HGX304,四 3-4 ,,"考试日期：论文,2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",13 汉语言文学\r\n\
	CHIN130228.01,报刊阅读（留学生）,4.0,戴从容,教授,3,H6507,一 6-7,,"考试日期：2015-12-30\r\n\
	考试时间：08:30-10:30",留学生\r\n\
	CHIN130228.01,报刊阅读（留学生）,4.0,戴从容,教授,3,H4208,三 3-4,,,留学生\r\n\
	CHIN130056.01,《世说新语》精读,2.0,骆玉明,教授,80,H2115,一 6-7 ,,"考试日期：论文,2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:10",14 汉语言文学\r\n\
	CHIN130058.01,《胡适文存》精读,2.0,段怀清,副教授,50,HGX510,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",14 汉语言文学\r\n\
	CHIN130093.01,西方古典美学,2.0,王才勇,研究员,50,H6101,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",13 汉语言文学\r\n\
	CHIN130111.01,沈从文精读,2.0,张新颖,教授,50,HGX103,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 汉语言文学\r\n\
	CHIN130112.01,中国当代文学专题,2.0,李振声,教授,50,H6407,三 3-4 ,,"考试日期：论文,2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",12 汉语言文学\r\n\
	CHIN130118.01,《管锥编》精读,2.0,傅杰,教授,40,HGX203,二 11-12 ,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:10",13 汉语言文学\r\n\
	CHIN130126.01,现当代话剧专题研究,2.0,梁燕丽,副教授,50,HGX401,三 11-12 ,,"考试日期：论文,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",12 汉语言文学\r\n\
	CHIN130133.01,音韵学,2.0,董建交,讲师,35,HGX309,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 汉语言\r\n\
	CHIN130137.01,社会语言学,2.0,霍四通,副教授,30,H2217,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",13 汉语言\r\n\
	CHIN130139.01,汉语修辞学史,2.0,吴礼权,教授,30,HGX407,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",14 汉语言\r\n\
	CHIN130152.01,语法学,2.0,卢英顺,教授,30,H2220,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",14 汉语言\r\n\
	CHIN130153.01,古文字学,2.0,郭永秉,副教授,30,H2107,四 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",12 汉语言\r\n\
	CHIN130154.01,《马氏文通》精读,2.0,赵国军,助理研究员,30,HGX508,三 3-4 ,,"考试日期：论文,2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 汉语言\r\n\
	CHIN130155.01,计算语言学,2.0,陈振宇,副教授,30,HGX404,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",12 汉语言\r\n\
	CHIN130168.01,语言统计学,2.0,马良,讲师,30,HGX409,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",13 汉语言\r\n\
	CHIN130177.01,汉语语法词汇史,2.0,梁银峰,副教授,30,H2217,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",13 汉语言\r\n\
	CHIN130182.01,近现代通俗文学专题,2.0,袁进,教授,50,H5114,三 3-4 ,,"考试日期：论文,2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",13 汉语言文学\r\n\
	CHIN130184.01,中国电影史研究,2.0,杨新宇,副教授,50,HGX406,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",14 汉语言文学\r\n\
	CHIN130187.01,语音学,2.0,平悦铃,副教授,35,H3201,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 汉语言\r\n\
	CHIN130197.01,比较史诗研究,2.0,白钢,副研究员,50,HGX508,一 6-7 ,,"考试日期：论文,2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",12 汉语言文学\r\n\
	CHIN130213.01,语言类型学,2.0,盛益民,讲师,30,HGX406,四 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:25-15:05",13 汉语言\r\n\
	CHIN130215.01,新媒体语言研究,2.0,赵国军,助理研究员,30,HGX302,三 11-12 ,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",14 汉语言\r\n\
	CHIN130216.01,唐代社会与文学,2.0,唐雯,副研究员,50,H3306,一 6-7 ,,"考试日期：论文,2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",13 汉语言文学\r\n\
	CHIN130217.01,神经语言学,2.0,马良,讲师,30,H6210,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",12 汉语言\r\n\
	CHIN130218.01,民间文学与民俗文化专题,2.0,张勤,副教授,50,H3408,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",12 汉语言文学\r\n\
	ICES110001.01,留学生高级汉语I,4.0,赵国军,助理研究员,60,HGX209,三 1-2 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：8:00-9:40",15 法学\r\n\
	ICES110001.01,留学生高级汉语I,4.0,赵国军,助理研究员,60,HGX209,五 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：8:00-9:40",15 法学\r\n\
	ICES110003.01,留学生专业汉语I,4.0,卢英顺,教授,50,HGX502,三 1-2 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-09:40",留学生\r\n\
	ICES110003.01,留学生专业汉语I,4.0,卢英顺,教授,50,HGX502,五 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-09:40",留学生\r\n\
	RZSY118001.01,语言科学,2.0,陈忠敏,教授,20,HGX502,一 11-12 ,,"考试日期：其他,2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",\r\n\
	RZSY118005.01,文化语言学,2.0,申小龙,教授,20,H5318,三 3-4 ,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",\r\n\
	FORE120001.01,语言学导论,2.0,熊学亮,教授,150,HGX104,一 6-7 ,"复旦大学教学名师\r\n\
	上海市精品课程团队","考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	FORE120001.02,语言学导论,2.0,冯予力,讲师,100,H6201,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	FORE120002.01,世界文学导读,2.0,汪洪章,教授,100,H6112,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	FORE120003.01,美国文学史选读,2.0,王爱萍,副教授,50,H5116,三 6-7 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	FORE120006.01,英美报刊,2.0,高永伟,副教授,80,H6112,三 6-7 ,全英文课程,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	FORE120007.01,美国历史与文化,2.0,朱建新,副教授,80,H6101,三 6-7 ,全英文课程,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	FORE120011.01,希腊文化，神话和哲学,2.0,吴勇立,副教授,50,H6105,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	FORE120012.01,非虚构文学赏析,2.0,沈黎,教授,35,H5115,二 1-2 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	FORE120013.01,英语短篇小说导读,2.0,张琼,副教授,50,H5110,一 6-7 ,全英文课程,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	FORE130003.01,中级英语(上),4.0,王爱萍,副教授,20,H5310,三 3-4 ,A班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.01,中级英语(上),4.0,王爱萍,副教授,20,H5310,五 3-4 ,A班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.02,中级英语(上),4.0,沈园,教授,20,H5304,三 3-4 ,B班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.02,中级英语(上),4.0,沈园,教授,20,H5304,五 3-4 ,B班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.03,中级英语(上),4.0,朱绩崧,讲师,20,H5408,三 3-4 ,C班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.03,中级英语(上),4.0,朱绩崧,讲师,20,H5408,五 3-4 ,C班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.04,中级英语(上),4.0,朱建新,副教授,13,H5415,三 1-2 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.04,中级英语(上),4.0,朱建新,副教授,13,H5415,五 3-4 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130003.05,中级英语(上),4.0,姜倩,讲师,16,H5220,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 翻译\r\n\
	FORE130003.05,中级英语(上),4.0,姜倩,讲师,16,H5220,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 翻译\r\n\
	FORE130005.01,高级英语(上),4.0,张楠,讲师,24,H5412,三 3-4 ,A班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130005.01,高级英语(上),4.0,张楠,讲师,24,H5412,五 3-4 ,A班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130005.02,高级英语(上),4.0,金雯,副教授,24,H5414,三 3-4 ,B班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130005.02,高级英语(上),4.0,金雯,副教授,24,H5414,五 3-4 ,B班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130005.03,高级英语(上),4.0,包慧怡,,13,H5220,三 3-4 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130005.03,高级英语(上),4.0,包慧怡,,13,H5220,五 3-4 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130007.01,英语写作I(上),2.0,Miles Link,,30,H5314,二 1-2 ,AB班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130007.02,英语写作I(上),2.0,Miles Link,,30,H5314,二 3-4 ,BC班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130007.03,英语写作I(上),2.0,Miles Link,,13,H5216,一 3-4 ,留学生班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",14 英语\r\n\
	FORE130007.04,英语写作I(上),2.0,刘敬国,副教授,16,H5415,四 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",14 翻译\r\n\
	FORE130009.01,英语写作II(上),2.0,曲卫国,教授,24,H5208,二 1-2 ,"A班\r\n\
	上海市教学名师","考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 英语\r\n\
	FORE130009.02,英语写作II(上),2.0,宋_,讲师,24,H5213,二 1-2 ,B班,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 英语\r\n\
	FORE130009.03,英语写作II(上),2.0,包慧怡,,13,H5220,四 1-2 ,留学生班,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130018.01,英语听说II(上),2.0,外教,,30,H5205,三 1-2 ,AB班,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",14 英语\r\n\
	FORE130018.02,英语听说II(上),2.0,外教,,30,H5205,五 1-2 ,BC班,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",14 英语\r\n\
	FORE130018.03,英语听说II(上),2.0,外教,,13,H5205,一 6-7 ,留学生班,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",14 英语\r\n\
	FORE130020.01,英语写作III,2.0,郑咏滟,副教授,50,H5108,二 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 英语\r\n\
	FORE130021.01,英国文学史(上),2.0,孙建,教授,70,H5108,二 3-4 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130023.01,美国文学史,2.0,金雯,副教授,50,H5108,三 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 英语\r\n\
	FORE130024.01,翻译理论与技巧(一),2.0,张冲,教授,24,H5201,一 3-4 ,"A班\r\n\
	上海市教学名师\r\n\
	 研讨型课程","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130024.02,翻译理论与技巧(一),2.0,孙靖,副教授,24,H5308,一 1-2 ,B班,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130024.03,翻译理论与技巧(一),2.0,谈峥,教授,13,H5308,一 3-4 ,留学生班,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 英语\r\n\
	FORE130027.01,英汉口译,2.0,孙靖,副教授,50,H5202,一 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",12 英语\r\n\
	FORE130034.01,高级德语(上),6.0,DAAD,,15,H5416,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 德语\r\n\
	FORE130034.01,高级德语(上),6.0,DAAD,,15,H5416,四 1-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 德语\r\n\
	FORE130046.01,德语写作II,2.0,Guenther,,23,H5105,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 德语\r\n\
	FORE130048.01,翻译理论与技巧(德语)(上),2.0,吴勇立,副教授,23,H5417,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 德语\r\n\
	FORE130051.01,德语文学史及作品选读(下),2.0,吴勇立,副教授,23,H5417,五 3-4 ,研讨型课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 德语\r\n\
	FORE130059.01,法语写作I(上),2.0,Laetitia,,17,H5220,二 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 法语\r\n\
	FORE130061.01,法语写作II(上),2.0,Cyril,,17,H5305,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 法语\r\n\
	FORE130063.01,法语写作III,2.0,Cyril,,29,H6302,四 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 法语\r\n\
	FORE130064.01,翻译理论与技巧(法语)(上),2.0,袁莉,副教授,17,H5419,二 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 法语\r\n\
	FORE130066.01,法语报刊,2.0,Cyril,,17,H5418,五 1-2 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 法语\r\n\
	FORE130067.01,法国概况,2.0,褚孝泉,教授,17,H5419,二 3-4 ,复旦大学教学名师,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 法语\r\n\
	FORE130068.01,法国文学史(上),2.0,陈杰,,17,H5418,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 法语\r\n\
	FORE130072.01,日语II(上),8.0,"赵彦志\r\n\
	艾菁","副教授\r\n\
	讲师",16,H5211,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 日语\r\n\
	FORE130072.01,日语II(上),8.0,"赵彦志\r\n\
	艾菁","副教授\r\n\
	讲师",16,H5211,一 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 日语\r\n\
	FORE130072.01,日语II(上),8.0,"赵彦志\r\n\
	艾菁","副教授\r\n\
	讲师",16,H5211,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 日语\r\n\
	FORE130072.01,日语II(上),8.0,"赵彦志\r\n\
	艾菁","副教授\r\n\
	讲师",16,H5211,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 日语\r\n\
	FORE130074.01,日语III(上),6.0,岛田由利子,,16,H5107,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 日语\r\n\
	FORE130074.01,日语III(上),6.0,岛田由利子,,16,H5107,二 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 日语\r\n\
	FORE130074.01,日语III(上),6.0,岛田由利子,,16,H5107,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 日语\r\n\
	FORE130081.01,日语写作II,2.0,岛田由利子,,13,H5408,一 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 日语\r\n\
	FORE130082.01,翻译理论与技巧(上),2.0,庞志春,副教授,16,H5308,二 3-4 ,研讨型课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 日语\r\n\
	FORE130085.01,日本文学史(下),2.0,岛田由利子,,13,H5314,四 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",12 日语\r\n\
	FORE130088.01,日本文学选读(下),2.0,邹波,高级讲师,13,H5319,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 日语\r\n\
	FORE130089.01,日语文法,2.0,赵彦志,副教授,16,H5109,五 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 日语\r\n\
	FORE130095.01,高级俄语(上),6.0,李新梅,副教授,13,H5218,二 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 俄语\r\n\
	FORE130095.01,高级俄语(上),6.0,李新梅,副教授,13,H5218,四 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 俄语\r\n\
	FORE130095.01,高级俄语(上),6.0,李新梅,副教授,13,H5218,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 俄语\r\n\
	FORE130097.01,高级俄语(下),4.0,谢尔盖,,13,H5404,一 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 俄语\r\n\
	FORE130097.01,高级俄语(下),4.0,谢尔盖,,13,H5404,三 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 俄语\r\n\
	FORE130099.01,俄语视听说II(上),2.0,娜塔莉娅,,15,H5203,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130099.01,俄语视听说II(上),2.0,娜塔莉娅,,15,H5203,四 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130109.01,俄语报刊,2.0,谢尔盖,,13,H5419,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：15:30-17:30",13 俄语\r\n\
	FORE130112.01,中级韩国语(上),8.0,"郭一诚\r\n\
	姜颖","讲师\r\n\
	讲师",15,H5218,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130112.01,中级韩国语(上),8.0,"郭一诚\r\n\
	姜颖","讲师\r\n\
	讲师",15,H5218,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130112.01,中级韩国语(上),8.0,"郭一诚\r\n\
	姜颖","讲师\r\n\
	讲师",15,H5218,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130112.01,中级韩国语(上),8.0,"郭一诚\r\n\
	姜颖","讲师\r\n\
	讲师",15,H5218,五 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130117.01,韩国语视听说I(下),2.0,外教,,15,H5203,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130117.01,韩国语视听说I(下),2.0,外教,,15,H5203,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130119.01,韩国语视听说II(下),2.0,外教,,15,H5203,二 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 朝鲜语\r\n\
	FORE130119.01,韩国语视听说II(下),2.0,外教,,15,H5203,四 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 朝鲜语\r\n\
	FORE130125.01,翻译理论与技巧韩国语(上),2.0,郭一诚,讲师,17,H5110,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 朝鲜语\r\n\
	FORE130127.01,韩国语写作(上),2.0,姜颖,讲师,15,H5309,二 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130129.01,韩语报刊选读,2.0,姜宝有,教授,17,H5110,五 3-4 ,复旦大学教学名师,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 朝鲜语\r\n\
	FORE130131.01,英语多文体阅读(上),2.0,强晓,讲师,20,H6210,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 翻译\r\n\
	FORE130136.01,口译初步与视译(下),2.0,管玉华,讲师,18,H5207,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",12 翻译\r\n\
	FORE130141.01,交替传译I,2.0,管玉华,讲师,20,H5207,五 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 翻译\r\n\
	FORE130144.01,英汉互译技巧I,2.0,王建开,教授,20,H5418,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 翻译\r\n\
	FORE130151.01,翻译理论与策略,2.0,陶友兰,副教授,18,H5218,四 3-4 ,上海市精品课程团队,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 翻译\r\n\
	FORE130180.01,第二外语(日语)(上),4.0,王菁洁,,35,H5109,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 翻译\r\n\
	13 英语"\r\n\
	FORE130180.01,第二外语(日语)(上),4.0,王菁洁,,35,H5109,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 翻译\r\n\
	13 英语"\r\n\
	FORE130182.01,第二外语(日语)(下),4.0,杨晓敏,讲师,35,H6406,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130182.01,第二外语(日语)(下),4.0,杨晓敏,讲师,35,H6406,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130183.01,第二外语(法语)(上),4.0,陈杰,,35,H6504,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 英语\r\n\
	13 翻译"\r\n\
	FORE130183.01,第二外语(法语)(上),4.0,陈杰,,35,H6504,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 英语\r\n\
	13 翻译"\r\n\
	FORE130185.01,第二外语(法语)(下),4.0,杨振,讲师,35,H6401,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130185.01,第二外语(法语)(下),4.0,杨振,讲师,35,H6401,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130186.01,第二外语(德语)(上),4.0,李晶浩,讲师,35,H6409,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 翻译\r\n\
	13 英语"\r\n\
	FORE130186.01,第二外语(德语)(上),4.0,李晶浩,讲师,35,H6409,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","13 翻译\r\n\
	13 英语"\r\n\
	FORE130188.01,第二外语(德语)(下),4.0,"刘炜\r\n\
	Luger","副教授\r\n\
	",35,H6408,一 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130188.01,第二外语(德语)(下),4.0,"刘炜\r\n\
	Luger","副教授\r\n\
	",35,H6408,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10","12 英语\r\n\
	12 翻译"\r\n\
	FORE130195.01,英美戏剧(上),2.0,谈峥,教授,70,H5108,四 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-03:00",13 英语\r\n\
	FORE130199.01,英美散文(上),2.0,丁骏,讲师,50,H5106,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",12 英语\r\n\
	FORE130205.01,英美短篇小说,2.0,汪洪章,教授,80,H6101,三 1-2 ,研讨型课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 翻译\r\n\
	13 英语"\r\n\
	FORE130206.01,商务英语,2.0,高永伟,副教授,50,H6104,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",12 英语\r\n\
	FORE130222.01,法国现代短篇小说,2.0,Laetitia,,29,H6302,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 法语\r\n\
	FORE130223.01,法国戏剧,2.0,郭斯嘉,讲师,29,H6302,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",12 法语\r\n\
	FORE130227.01,中法文化比较,2.0,张华,讲师,29,H5302,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 法语\r\n\
	FORE130231.01,日本文语文法,2.0,岛田由利子,,13,H5314,四 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",12 日语\r\n\
	FORE130237.01,俄语词汇学,2.0,谢尔盖,,13,H5404,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",12 俄语\r\n\
	FORE130237.01,俄语词汇学,2.0,谢尔盖,,13,H5404,三 3-4(1-16周),,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",12 俄语\r\n\
	FORE130239.01,外贸俄语,2.0,汪海霞,讲师,13,H5310,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 俄语\r\n\
	FORE130240.01,俄罗斯诗歌,2.0,娜塔莉娅,,13,H5404,二 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 俄语\r\n\
	FORE130252.01,韩国文化,2.0,黄贤玉,副教授,17,HGD605,三 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",12 朝鲜语\r\n\
	FORE130255.01,韩语语法学,2.0,吴仙花,讲师,15,H5309,五 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130269.01,俄语泛读(中),2.0,汪海霞,讲师,15,H5309,二 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130275.01,德语国家国情,2.0,Luger,,12,H5105,二 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","13 德语\r\n\
	12 德语"\r\n\
	FORE130276.01,奥地利文化,2.0,Luger,,12,H5105,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","12 德语\r\n\
	13 德语"\r\n\
	FORE130283.01,英语阅读Ⅱ,2.0,宋_,讲师,30,H5302,二 3-4 ,AB班,"考试日期：论文,2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130283.02,英语阅读Ⅱ,2.0,冯予力,讲师,30,H5417,三 1-2 ,BC班,"考试日期：论文,2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130283.03,英语阅读Ⅱ,2.0,宋_,讲师,13,H5402,三 3-4 ,留学生班,"考试日期：论文,2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130286.01,英语听说与译述（上）,2.0,冯超,讲师,16,H5207,一 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 翻译\r\n\
	FORE130287.01,古汉语选读（上）,2.0,刘敬国,副教授,16,H5415,五 1-2 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 翻译\r\n\
	FORE130292.01,日语听音（下）,2.0,黄小丽,讲师,16,H5207,四 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 日语\r\n\
	FORE130294.01,日语会话（下）,2.0,杨晓敏,讲师,16,H5410,三 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 日语\r\n\
	FORE130296.01,基础德语（上）,10.0,"魏育青\r\n\
	刘炜\r\n\
	姜林静","教授\r\n\
	副教授\r\n\
	讲师",18,H5409,一 1-2 ,复旦大学教学名师,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130296.01,基础德语（上）,10.0,"魏育青\r\n\
	刘炜\r\n\
	姜林静","教授\r\n\
	副教授\r\n\
	讲师",18,H5409,二 3-4 ,复旦大学教学名师,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130296.01,基础德语（上）,10.0,"魏育青\r\n\
	刘炜\r\n\
	姜林静","教授\r\n\
	副教授\r\n\
	讲师",18,H5409,三 3-4 ,复旦大学教学名师,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130296.01,基础德语（上）,10.0,"魏育青\r\n\
	刘炜\r\n\
	姜林静","教授\r\n\
	副教授\r\n\
	讲师",18,H5409,四 3-4 ,复旦大学教学名师,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130296.01,基础德语（上）,10.0,"魏育青\r\n\
	刘炜\r\n\
	姜林静","教授\r\n\
	副教授\r\n\
	讲师",18,H5409,五 3-4 ,复旦大学教学名师,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130300.01,中级德语（上）,10.0,"王滨滨\r\n\
	孔婧倩","教授\r\n\
	讲师",16,H5208,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130300.01,中级德语（上）,10.0,"王滨滨\r\n\
	孔婧倩","教授\r\n\
	讲师",16,H5208,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130300.01,中级德语（上）,10.0,"王滨滨\r\n\
	孔婧倩","教授\r\n\
	讲师",16,H5208,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130300.01,中级德语（上）,10.0,"王滨滨\r\n\
	孔婧倩","教授\r\n\
	讲师",16,H5208,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130300.01,中级德语（上）,10.0,"王滨滨\r\n\
	孔婧倩","教授\r\n\
	讲师",16,H5208,五 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130301.01,德语视听Ⅱ（上）,2.0,Guenther,,16,H5203,一 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 德语\r\n\
	FORE130307.01,中级法语（上）,10.0,"郭斯嘉\r\n\
	蔡槐鑫","讲师\r\n\
	副教授",17,H5109,一 1-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 法语\r\n\
	FORE130307.01,中级法语（上）,10.0,"郭斯嘉\r\n\
	蔡槐鑫","讲师\r\n\
	副教授",17,H5109,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 法语\r\n\
	FORE130307.01,中级法语（上）,10.0,"郭斯嘉\r\n\
	蔡槐鑫","讲师\r\n\
	副教授",17,H5109,四 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 法语\r\n\
	FORE130312.01,中级俄语（上）,10.0,"姜宏\r\n\
	赵艳秋","教授\r\n\
	讲师",15,H5215,一 3-4 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130312.01,中级俄语（上）,10.0,"姜宏\r\n\
	赵艳秋","教授\r\n\
	讲师",15,H5215,二 1-2 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130312.01,中级俄语（上）,10.0,"姜宏\r\n\
	赵艳秋","教授\r\n\
	讲师",15,H5215,三 3-4 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130312.01,中级俄语（上）,10.0,"姜宏\r\n\
	赵艳秋","教授\r\n\
	讲师",15,H5215,四 3-4 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130312.01,中级俄语（上）,10.0,"姜宏\r\n\
	赵艳秋","教授\r\n\
	讲师",15,H5215,五 3-4 ,"复旦大学教学名师\r\n\
	研讨型课程","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 俄语\r\n\
	FORE130313.01,俄语视听说Ⅲ,1.0,谢尔盖,,13,H5203,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 俄语\r\n\
	FORE130315.01,基础韩国语（上）,10.0,黄贤玉,副教授,16,H5216,二 3-4 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 朝鲜语\r\n\
	FORE130315.01,基础韩国语（上）,10.0,黄贤玉,副教授,16,H5216,三 3-4 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 朝鲜语\r\n\
	FORE130315.01,基础韩国语（上）,10.0,黄贤玉,副教授,16,H5216,四 3-4 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 朝鲜语\r\n\
	FORE130315.01,基础韩国语（上）,10.0,黄贤玉,副教授,16,H5216,五 1-4 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 朝鲜语\r\n\
	FORE130318.01,韩国语泛读Ⅱ,2.0,崔惠玲,讲师,15,H5208,五 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 朝鲜语\r\n\
	FORE130320.01,高级韩国语（上）,8.0,"吴仙花\r\n\
	崔惠玲","讲师\r\n\
	讲师",15,H5309,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130320.01,高级韩国语（上）,8.0,"吴仙花\r\n\
	崔惠玲","讲师\r\n\
	讲师",15,H5309,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130320.01,高级韩国语（上）,8.0,"吴仙花\r\n\
	崔惠玲","讲师\r\n\
	讲师",15,H5309,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130320.01,高级韩国语（上）,8.0,"吴仙花\r\n\
	崔惠玲","讲师\r\n\
	讲师",15,H5309,五 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 朝鲜语\r\n\
	FORE130322.01,学术前沿专题,2.0,李征,教授,30,H6205,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 日语\r\n\
	12 日语"\r\n\
	FORE130323.01,商务口译,2.0,冯超,讲师,18,H5207,一 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 翻译\r\n\
	FORE130327.01,高级法语(上),4.0,张华,讲师,17,H5208,一 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 法语\r\n\
	FORE130327.01,高级法语(上),4.0,张华,讲师,17,H5208,四 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 法语\r\n\
	FORE130345.01,英语演讲,2.0,单理杨,,24,H5205,二 3-4 ,,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",15 英语类\r\n\
	FORE130345.02,英语演讲,2.0,单理杨,,24,H5205,四 1-2 ,,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",15 英语类\r\n\
	FORE130345.03,英语演讲,2.0,单理杨,,24,H5205,四 3-4 ,,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",15 英语类\r\n\
	FORE130345.04,英语演讲,2.0,冯予力,讲师,20,H5207,四 3-4 ,留学生班,"考试日期：口试\r\n\
	\r\n\
	考试时间：-",15 英语\r\n\
	FORE130346.01,英语精读（上）,4.0,张琼,副教授,19,H5415,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.01,英语精读（上）,4.0,张琼,副教授,19,H5415,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.02,英语精读（上）,4.0,郑咏滟,副教授,18,H5417,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.02,英语精读（上）,4.0,郑咏滟,副教授,18,H5417,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.03,英语精读（上）,4.0,丁骏,讲师,18,H5419,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.03,英语精读（上）,4.0,丁骏,讲师,18,H5419,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.04,英语精读（上）,4.0,段枫,副教授,18,H5418,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.04,英语精读（上）,4.0,段枫,副教授,18,H5418,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130346.05,英语精读（上）,4.0,徐蔚,讲师,20,H5107,二 3-4 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语\r\n\
	FORE130346.05,英语精读（上）,4.0,徐蔚,讲师,20,H5107,三 3-4 ,留学生班,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语\r\n\
	FORE130347.01,写作入门（上）,2.0,外教,,24,H5417,四 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130347.02,写作入门（上）,2.0,外教,,24,H5417,二 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130347.03,写作入门（上）,2.0,外教,,24,H5415,二 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语类\r\n\
	FORE130347.04,写作入门（上）,2.0,徐蔚,讲师,20,H5107,五 3-4 ,留学生班,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",15 英语\r\n\
	FORE130348.01,英语文学导读（上）,2.0,陈靓,副教授,24,H5306,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 英语类\r\n\
	FORE130348.02,英语文学导读（上）,2.0,陈靓,副教授,24,H5306,二 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 英语类\r\n\
	FORE130348.03,英语文学导读（上）,2.0,陈靓,副教授,24,H5306,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 英语类\r\n\
	FORE130348.04,英语文学导读（上）,2.0,张楠,讲师,20,H5107,三 1-2 ,留学生班,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 英语\r\n\
	FORE130398.01,第二外语(西班牙语)上,6.0,鹿秀川,,10,H5105,一 3-4 ,,"考试日期：2015-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130398.01,第二外语(西班牙语)上,6.0,鹿秀川,,10,H5105,四 3-4 ,,"考试日期：2015-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130398.01,第二外语(西班牙语)上,6.0,鹿秀川,,10,H5105,五 6-7 ,,"考试日期：2015-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",14 英语\r\n\
	FORE130401.01,基础俄语（上）,10.0,"曾婷\r\n\
	纪春萍","讲师\r\n\
	讲师",16,H5211,一 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 俄语\r\n\
	FORE130401.01,基础俄语（上）,10.0,"曾婷\r\n\
	纪春萍","讲师\r\n\
	讲师",16,H5211,二 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 俄语\r\n\
	FORE130401.01,基础俄语（上）,10.0,"曾婷\r\n\
	纪春萍","讲师\r\n\
	讲师",16,H5211,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 俄语\r\n\
	FORE130401.01,基础俄语（上）,10.0,"曾婷\r\n\
	纪春萍","讲师\r\n\
	讲师",16,H5211,四 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 俄语\r\n\
	FORE130401.01,基础俄语（上）,10.0,"曾婷\r\n\
	纪春萍","讲师\r\n\
	讲师",16,H5211,五 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 俄语\r\n\
	FORE130405.01,俄语会话（上）,2.0,娜塔莉娅,,16,H5415,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 俄语\r\n\
	FORE130413.01,德语媒介与交际I,2.0,Guenther,,18,H5203,一 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 德语\r\n\
	FORE130421.01,基础法语（上）,8.0,"彭俞霞\r\n\
	杨振","讲师\r\n\
	讲师",16,H5314,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 法语\r\n\
	FORE130421.01,基础法语（上）,8.0,"彭俞霞\r\n\
	杨振","讲师\r\n\
	讲师",16,H5314,三 1-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 法语\r\n\
	FORE130421.01,基础法语（上）,8.0,"彭俞霞\r\n\
	杨振","讲师\r\n\
	讲师",16,H5314,五 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 法语\r\n\
	FORE130431.01,法国初级视听,2.0,Laetitia,,16,H5205,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 法语\r\n\
	FORE130432.01,综合日语Ⅰ（上）,10.0,"刘佳琦\r\n\
	黄小丽","讲师\r\n\
	讲师",16,H5213,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 日语\r\n\
	FORE130432.01,综合日语Ⅰ（上）,10.0,"刘佳琦\r\n\
	黄小丽","讲师\r\n\
	讲师",16,H5213,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 日语\r\n\
	FORE130432.01,综合日语Ⅰ（上）,10.0,"刘佳琦\r\n\
	黄小丽","讲师\r\n\
	讲师",16,H5213,三 1-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 日语\r\n\
	FORE130432.01,综合日语Ⅰ（上）,10.0,"刘佳琦\r\n\
	黄小丽","讲师\r\n\
	讲师",16,H5213,四 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",15 日语\r\n\
	PHIL120006.01,佛教哲学,2.0,刘宇光,副教授,20,H5307,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	PHIL120012.01,哲学导论,3.0,郑召利,教授,120,H5302,"三 8-9\r\n\
	(双周)",双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.01,哲学导论,3.0,郑召利,教授,120,H5306,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.01,哲学导论,3.0,郑召利,教授,120,H5308,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.01,哲学导论,3.0,郑召利,教授,120,HGX103,三 6-7 ,双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.02,哲学导论,3.0,张志林,教授,120,H5113,"三 8-9\r\n\
	(双周)",双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.02,哲学导论,3.0,张志林,教授,120,H6402,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.02,哲学导论,3.0,张志林,教授,120,H6502,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120012.02,哲学导论,3.0,张志林,教授,120,HGX104,三 6-7 ,双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120013.01,逻辑学,3.0,陈伟,副教授,100,HGX508,一 3-4 ,双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120013.01,逻辑学,3.0,陈伟,副教授,100,H5114,"三 8-9\r\n\
	(双周)",双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120013.01,逻辑学,3.0,陈伟,副教授,100,H5116,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120013.01,逻辑学,3.0,陈伟,副教授,100,H6104,三 8-9(双周),双周周三8-9讨论课,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	PHIL120014.01,先秦哲学,2.0,杨泽波,教授,55,HGX103,四 8-9 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",\r\n\
	PHIL120015.01,宗教学导论,2.0,朱晓红,副教授,60,HGX5102,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	PHIL130001.01,马克思主义哲学导论,2.0,王德峰,教授,59,HGX510,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 哲学学院\r\n\
	PHIL130005.01,西方哲学史(上),2.0,佘碧平,教授,74,HGX409,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 宗教学\r\n\
	14 哲学\r\n\
	13 哲学(国学方向)"\r\n\
	PHIL130007.01,现代西方哲学,3.0,张庆熊,教授,91,HGX103,三 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 哲学\r\n\
	PHIL130008.01,中国哲学史(上),2.0,刘康德,教授,68,HGX105,二 1-2 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：08:00-09:40",14 哲学学院\r\n\
	PHIL130010.01,现代中国哲学,2.0,徐洪兴,教授,91,H3406,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 哲学\r\n\
	PHIL130011.01,逻辑学导论,2.0,邵强进,教授,59,HGX309,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35","14 宗教学\r\n\
	14 哲学"\r\n\
	PHIL130012.01,伦理学导论,2.0,罗亚玲,副教授,59,HGX406,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:10","14 哲学\r\n\
	14 宗教学"\r\n\
	PHIL130013.01,宗教学导论,2.0,朱晓红,副教授,58,HGX5102,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10","14 宗教学\r\n\
	14 哲学"\r\n\
	PHIL130014.01,社会实践,2.0,郭晓东,教授,8,H院系自主,六 1-1 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 哲学(国学方向)\r\n\
	PHIL130014.02,社会实践,2.0,李天纲,教授,5,H院系自主,六 1-1 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 宗教学\r\n\
	PHIL130014.03,社会实践,2.0,郑召利,教授,43,H院系自主,六 1-1 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",12 哲学\r\n\
	PHIL130015.01,学年论文,1.0,郑召利,教授,4,H院系自主,六 2-2 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",\r\n\
	PHIL130017.01,基督教史,2.0,刘平,副教授,30,HGX501,一 8-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",宗教学\r\n\
	PHIL130021.01,宗教哲学,2.0,刘宇光,副教授,20,H5305,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",宗教学\r\n\
	PHIL130025.01,社会哲学,2.0,邹诗鹏,教授,40,HGX205,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学\r\n\
	PHIL130043.01,中外逻辑史,2.0,邵强进,教授,40,HGX301,三 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院\r\n\
	PHIL130061.01,价值哲学,2.0,冯平,教授,30,HGX401,一 11-12 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院\r\n\
	PHIL130062.01,现代科学技术与社会发展,2.0,徐志宏,讲师,60,HGX203,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 哲学\r\n\
	14 哲学"\r\n\
	PHIL130073.01,国学通论,2.0,郭晓东,教授,9,HGX202,四 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 哲学(国学方向)\r\n\
	PHIL130074.01,小学基础,2.0,李若晖,教授,9,HGX306,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：15:30-17:30",14 哲学(国学方向)\r\n\
	PHIL130078.01,儒教的理论与历史,2.0,李天纲,教授,40,HGX301,二 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 宗教学\r\n\
	13 宗教学\r\n\
	13 哲学\r\n\
	14 哲学\r\n\
	12 宗教学\r\n\
	12 哲学"\r\n\
	PHIL130088.01,西方哲学原著选读I,2.0,,,60,HGX303,四 3-4 ,威廉.詹姆士《心理学原理》,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 哲学\r\n\
	PHIL130092.01,伦理学原著选读I,2.0,邓安庆,教授,40,HGX204,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 哲学学院\r\n\
	12 哲学学院"\r\n\
	PHIL130093.01,伦理学原著选读II,2.0,孙小玲,副教授,60,HGX503,四 6-7 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 哲学\r\n\
	13 哲学"\r\n\
	PHIL130097.01,现代西方哲学原著选读,2.0,王金林,教授,40,HGX507,三 3-4 ,海德格尔《形而上学导论》,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学学院\r\n\
	PHIL130102.01,专业外语,2.0,徐英瑾,教授,60,HGX205,二 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 哲学学院\r\n\
	PHIL130112.01,教育哲学,2.0,林晖,副教授,60,HGX510,三 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 哲学\r\n\
	12 哲学"\r\n\
	PHIL130118.01,汉传佛教哲学,2.0,刘宇光,副教授,20,HGX305,四 3-4 ,全英文课程,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：09:55-11:35",宗教学\r\n\
	PHIL130121.01,马克思主义哲学史,2.0,吴晓明,教授,91,HGX207,三 8-9 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 哲学\r\n\
	PHIL130129.01,《周易》,2.0,刘康德,教授,30,HGX201,二 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学(国学方向)\r\n\
	PHIL130133.01,《论语》,2.0,张汝伦,教授,9,HGX301,四 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 哲学(国学方向)\r\n\
	PHIL130156.01,哲学阅读和写作,1.0,"郝兆宽\r\n\
	徐英瑾\r\n\
	孙向晨\r\n\
	郁_隽\r\n\
	黄翔\r\n\
	才清华\r\n\
	张双利","教授\r\n\
	教授\r\n\
	教授\r\n\
	副教授\r\n\
	教授\r\n\
	副教授\r\n\
	教授",157,H3109,"二 6-7\r\n\
	(1-8周)",上前8周,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 哲学学院\r\n\
	12 哲学学院"\r\n\
	PHIL130161.01,可计算性与随机性,2.0,杨睿之,讲师,40,HGX202,五 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院\r\n\
	PHIL130165.01,藏语Ⅰ,2.0,刘震,研究员,30,HGX502,五 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院\r\n\
	PHIL130167.01,巴利语Ⅰ,2.0,刘震,研究员,30,HGX201,五 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院\r\n\
	PHIL130171.01,古希腊哲学,3.0,丁耘,教授,60,HGX203,二 8-10 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15 哲学学院\r\n\
	PHIL130175.01,数理逻辑,2.0,郝兆宽,教授,60,HGX204,四 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",15 哲学学院\r\n\
	PHIL130176.01,先秦哲学,2.0,杨泽波,教授,60,HGX103,四 8-9 ,,"考试日期：论文,2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",15 哲学学院\r\n\
	PHIL130188.01,马克思恩格斯著作选读,2.0,张双利,教授,40,HGX406,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 哲学\r\n\
	13 哲学"\r\n\
	PHIL130191.01,社会批判理论,2.0,王凤才,研究员,40,HGX201,四 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 哲学\r\n\
	13 哲学"\r\n\
	PHIL130213.01,《资本论》及其手稿,2.0,鲁绍臣,助理研究员,30,H2207,"一 3-4\r\n\
	(第1周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院\r\n\
	PHIL130226.01,佛教经典选读,2.0,王雷泉,教授,160,H5301,四 11-12 ,《金刚经》,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院\r\n\
	PHIL130237.01,东亚儒学探究,2.0,吴震,教授,55,H光华西主楼2404,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 哲学学院\r\n\
	13 哲学学院"\r\n\
	PHIL130257.01,拉丁语与罗马宗教,2.0,魏明德,教授,60,HGX205,一 8-9 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",15 哲学学院\r\n\
	RZSY118002.01,分配正义论,2.0,汪行福,教授,30,H光华西主楼2603,二 11-12 ,新生研讨课,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15 哲学学院\r\n\
	ECON120003.01,宏观经济学A,3.0,黄亚钧,教授,60,H6304,三 6-8 ,国家级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 新闻学院\r\n\
	14 经济学院"\r\n\
	ECON120003.02,宏观经济学A,3.0,程向前,高级讲师,60,H6105,三 6-8 ,国家级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 经济学院\r\n\
	14 新闻学院"\r\n\
	ECON120003.03,宏观经济学A,3.0,樊潇彦,讲师,60,H6305,三 6-8 ,国家级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 经济学院\r\n\
	14 新闻学院"\r\n\
	ECON120003.04,宏观经济学A,3.0,冯剑亮,讲师,60,H6307,三 6-8 ,国家级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 经济学院\r\n\
	14 新闻学院"\r\n\
	ECON120003.05,宏观经济学A,3.0,王弟海,教授,60,H6107,三 6-8 ,国家级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 新闻学院\r\n\
	14 经济学院"\r\n\
	ECON120003.06,宏观经济学A,3.0,李丹,副研究员,60,H6204,三 6-8 ,"校级精品课程团队\r\n\
	全英语课程","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 新闻学院\r\n\
	14 经济学院"\r\n\
	ECON120004.01,当代西方经济学流派,2.0,方钦,讲师,60,H4206,一 11-12 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	ECON120007.01,国际金融与贸易,2.0,干杏娣,研究员,60,H4204,四 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	ECON120008.01,货币与金融市场,2.0,李天栋,副教授,60,H2201,三 11-12 ,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	ECON120012.01,国际经济学,2.0,唐东波,讲师,60,H6107,一 11-12 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	ECON120012.02,国际经济学,2.0,罗长远,副教授,60,H4105,二 11-12 ,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	ECON120015.01,会计学,3.0,孙琳,副教授,70,H6305,二 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.01,会计学,3.0,孙琳,副教授,70,H6305,四 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.02,会计学,3.0,徐筱凤,副教授,70,H6304,二 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.02,会计学,3.0,徐筱凤,副教授,70,H6304,四 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.03,会计学,3.0,徐晔,高级讲师,70,H6307,二 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.03,会计学,3.0,徐晔,高级讲师,70,H6307,四 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.04,会计学,3.0,余显财,副教授,70,H6106,二 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON120015.04,会计学,3.0,余显财,副教授,70,H6106,四 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	ECON130001.01,概率论与数理统计,3.0,汪思海,讲师,30,H6201,一 8-9 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 经济学(数理经济方向)\r\n\
	ECON130001.01,概率论与数理统计,3.0,汪思海,讲师,30,H6201,四 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",14 经济学(数理经济方向)\r\n\
	ECON130003.01,国际金融,3.0,丁纯,教授,65,H6107,一 6-8 ,"第三阶段仍不开放限制\r\n\
	复旦-港中大-早稻田项目","考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",13 保险学\r\n\
	ECON130003.02,国际金融,3.0,殷醒民,教授,65,H6106,一 6-8 ,"第三阶段仍不开放限制\r\n\
	复旦-港中大-早稻田项目","考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",13 财政学\r\n\
	ECON130003.03,国际金融,3.0,樊潇彦,讲师,65,H6107,二 3-5 ,第三阶段仍不开放限制,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学\r\n\
	ECON130003.04,国际金融,3.0,葛劲峰,讲师,65,H6104,二 3-5 ,第三阶段仍不开放限制,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学\r\n\
	ECON130003.05,国际金融,3.0,郑辉,副教授,65,H6304,二 1-3 ,第三阶段仍不开放限制,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 国际经济与贸易\r\n\
	ECON130004.01,国际贸易,3.0,罗长远,副教授,30,H6202,二 1-3 ,第三阶段仍不开放限制,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学(数理经济方向)\r\n\
	ECON130004.02,国际贸易,3.0,唐东波,讲师,71,H6304,一 1-3 ,第三阶段仍不开放限制,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 金融学\r\n\
	ECON130005.01,财政学,3.0,唐朱昌,教授,100,H6501,四 1-3 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","13 金融学\r\n\
	13 国际经济与贸易"\r\n\
	ECON130005.02,财政学,3.0,杭行,副教授,85,H6104,一 6-8 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","13 经济学\r\n\
	13 保险"\r\n\
	ECON130006.01,计量经济学,3.0,陈诗一,教授,65,H6106,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 经济学\r\n\
	ECON130006.02,计量经济学,3.0,李怀露,讲师,65,H6108,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 经济学\r\n\
	ECON130006.03,计量经济学,3.0,王之,讲师,35,H6306,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 保险学\r\n\
	ECON130006.04,计量经济学,3.0,谢识予,教授,65,H6308,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 国际经济与贸易\r\n\
	ECON130006.05,计量经济学,3.0,谢为安,副教授,35,H6205,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 财政学\r\n\
	ECON130006.06,计量经济学,3.0,张卫平,副教授,70,H6404,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130006.07,计量经济学,3.0,朱宏飞,讲师,70,H6309,三 6-8 ,"上海市精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130007.01,货币银行学,3.0,李天栋,副教授,80,H6304,四 1-3 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","12 国际经济与贸易\r\n\
	13 保险学"\r\n\
	ECON130007.02,货币银行学,3.0,何光辉,教授,65,HGX309,四 6-8 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 金融学\r\n\
	ECON130007.03,货币银行学,3.0,徐明东,副教授,65,HGX310,四 6-8 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 金融学\r\n\
	ECON130007.04,货币银行学,3.0,张涛,副教授,65,HGX409,四 6-8 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 经济学\r\n\
	ECON130007.05,货币银行学,3.0,孙立坚,教授,30,HGX301,一 3-5 ,"校级精品课程团队\r\n\
	第三阶段仍不开放限制","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学(数理经济方向)\r\n\
	ECON130008.01,中国经济史学,3.0,孙大权,副教授,95,H6101,四 8-10 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","14 经济学\r\n\
	14 经济学(数理经济方向)"\r\n\
	ECON130011.01,产业经济学,3.0,寇宗来,教授,30,H6302,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",12 经济学(数理经济方向)\r\n\
	ECON130012.01,发展经济学,3.0,尹翔硕,教授,40,H6307,三 1-3 ,"复旦大学教学名师 \r\n\
	上海市精品课程团队 \r\n\
	全英语课程 \r\n\
	复旦-UC课程","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：08:00-10:00",复旦加州项目\r\n\
	ECON130012.02,发展经济学,3.0,"吴力波\r\n\
	袁堂军","教授\r\n\
	副研究员",80,H6306,二 3-5 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",12 国际经济与贸易\r\n\
	ECON130012.03,发展经济学,3.0,尹晨,副教授,130,H6312,五 3-5 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00","14 新闻学院\r\n\
	13 经济学(数理经济方向)\r\n\
	12 经济学"\r\n\
	ECON130018.01,外国经济史,3.0,陆寒寅,副教授,65,H6107,四 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 国际经济与贸易\r\n\
	ECON130021.01,比较经济学,3.0,李维森,教授,65,H6107,一 1-3 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 国际经济与贸易\r\n\
	ECON130029.01,商业银行业务与管理,3.0,聂叶,副教授,70,H6305,四 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 金融学\r\n\
	ECON130029.02,商业银行业务与管理,3.0,徐明东,副教授,70,H6307,四 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 金融学\r\n\
	ECON130030.01,金融市场学,3.0,卢华,讲师,65,H6305,一 1-3 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 金融学\r\n\
	ECON130030.02,金融市场学,3.0,攀登,副教授,65,H6307,一 1-3 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 金融学\r\n\
	ECON130031.01,投资学原理,3.0,郑辉,副教授,80,H6306,四 6-8 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","12 国际经济与贸易\r\n\
	12 保险"\r\n\
	ECON130035.01,保险学原理,3.0,陈冬梅,副教授,30,H6205,四 6-8 ,,,14 保险学\r\n\
	ECON130042.01,税收学,3.0,余显财,副教授,30,H6206,四 6-8 ,,,14 财政学\r\n\
	ECON130056.01,区域经济学,2.0,吴建峰,讲师,30,H5109,二 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",12 经济学(数理经济方向)\r\n\
	ECON130056.02,区域经济学,2.0,范剑勇,教授,65,H6407,四 6-8 ,,"考试日期：2015-12-031\r\n\
	考试时间：08:30-10:30",12 经济学\r\n\
	ECON130057.01,农村和农业经济学,2.0,高帆,副教授,65,H6306,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 经济学\r\n\
	ECON130059.01,城市经济学,3.0,周伟林,副教授,70,H6305,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",12 经济学\r\n\
	ECON130060.01,国际政治经济学,3.0,王健,副教授,80,H6304,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",12 国际经济与贸易\r\n\
	ECON130061.01,国别和地区经济,3.0,袁堂军,副研究员,65,H6307,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 国际经济与贸易\r\n\
	ECON130062.01,国际贸易实务,3.0,蔡晓月,副教授,95,H6301,五 3-5 ,复旦-港中大-早稻田项目,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：13:30-15:30",13 国际经济与贸易\r\n\
	ECON130063.01,国际营销学,3.0,何喜有,副教授,65,H6309,三 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 国际经济与贸易\r\n\
	ECON130063.02,国际营销学,3.0,孟俭,讲师,80,H6305,三 3-5 ,全英语课程,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 国际经济与贸易\r\n\
	ECON130064.01,博弈论,3.0,朱弘鑫,副教授,80,H6104,五 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 国际经济与贸易\r\n\
	ECON130074.01,欧美金融史,2.0,何光辉,教授,70,H6304,五 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130080.01,投资银行理论与实务,3.0,罗忠洲,副研究员,70,H6305,二 1-3 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 金融学\r\n\
	ECON130083.01,时间序列分析的方法,3.0,姚京,副教授,30,H6204,四 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学(数理经济方向)\r\n\
	ECON130091.01,海上保险,2.0,沈婷,讲师,30,H6205,四 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 保险学\r\n\
	ECON130092.01,再保险,2.0,林琳,讲师,30,H6205,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 保险\r\n\
	ECON130098.01,责任保险,2.0,林琳,讲师,35,H6205,二 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 保险学\r\n\
	ECON130103.01,保险企业经营管理,2.0,冯智坚,讲师,30,H6204,五 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",14 保险学\r\n\
	ECON130117.01,税收筹划,2.0,余显财,副教授,40,H6207,五 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",12 财政学\r\n\
	ECON130119.01,比较财政学,2.0,张晏,副教授,70,H6309,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","12 财政学\r\n\
	13 财政学"\r\n\
	ECON130123.01,随机过程,3.0,陆立强,副教授,30,HGX305,三 1-3 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学(数理经济方向)\r\n\
	ECON130128.01,制度经济学,3.0,汪立鑫,教授,35,H6204,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 财政学\r\n\
	ECON130132.01,环境经济学,3.0,李志青,讲师,70,H6307,二 1-3 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",12 经济学\r\n\
	ECON130138.01,随机过程与随机分析初步,3.0,刘庆富,副研究员,70,H6404,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130140.01,中国金融史,2.0,张徐乐,副研究员,65,H6108,五 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",14 金融学\r\n\
	ECON130141.01,信息经济学,2.0,陈钊,教授,95,H6312,三 4-5 ,复旦大学教学名师,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","13 经济学\r\n\
	13 经济学(数理经济方向)"\r\n\
	ECON130143.01,公司治理,2.0,常中阳,讲师,70,H6304,三 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 金融学\r\n\
	ECON130146.01,中国货币政策,2.0,陆前进,副教授,70,H6101,五 1-2 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130148.01,当代中国金融前沿专题研究,2.0,刘红忠,教授,70,H6108,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 金融学\r\n\
	ECON130149.01,公共管理学,3.0,孙琳,副教授,30,H6209,四 1-3 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 财政学\r\n\
	ECON130155.01,宏观财政政策分析,2.0,王殿志,讲师,40,H经济学院机房102,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",12 财政学\r\n\
	ECON130157.01,人力资源管理,2.0,王晓灵,副教授,40,H6202,"五 6-8\r\n\
	(1-11周)",,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 财政学\r\n\
	ECON130159.01,金融经济学原理,3.0,姚京,副教授,30,H6202,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 经济学(数理经济方向)\r\n\
	ECON130160.01,中国经济思想史,2.0,孙大权,副教授,70,H6307,五 7-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 经济学\r\n\
	ECON130166.01,社会保障,3.0,丁纯,教授,35,H6204,二 3-5 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：8:30-10:30",13 财政学\r\n\
	ECON130167.01,保险公司财务管理,2.0,冯智坚,讲师,35,H6204,四 4-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",13 保险学\r\n\
	ECON130168.01,国际商务谈判,2.0,潘宁,副教授,50,H经济学院机房102,二 6-7 ,全英语课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:00-15:00",12 国际经济与贸易\r\n\
	ECON130170.01,动态优化,3.0,康明怡,讲师,30,H6204,五 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",13 经济学(数理经济方向)\r\n\
	ECON130171.01,经济学论文写作,2.0,罗汉,副教授,65,H6308,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 国际经济与贸易\r\n\
	ECON130175.01,金融时间序列分析及软件应用,3.0,刘庆富,副研究员,70,H6305,五 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",12 金融学\r\n\
	ECON130176.01,国际金融管理,2.0,朱叶,教授,70,H6501,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：8:30-10:30",12 金融学\r\n\
	ECON130177.01,供应链金融,2.0,牛晓健,教授,70,H5104,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 金融学\r\n\
	ECON130180.01,精算学原理,3.0,张仕英,讲师,35,H6209,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 保险学\r\n\
	ECON130184.01,兼并与收购,3.0,杨青,教授,70,H6404,三 1-3 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 金融学\r\n\
	ECON130186.01,能源与气候变化经济学,3.0,李志青,讲师,65,H6107,三 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 经济学\r\n\
	MATH120044.01,线性代数,3.0,蔡志杰,教授,30,HGX405,一 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学(数理经济方向)\r\n\
	MATH120044.01,线性代数,3.0,蔡志杰,教授,30,HGX405,三 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学(数理经济方向)\r\n\
	MATH120044.02,线性代数,3.0,罗杰,师资博士后,85,H6105,三 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	MATH120044.02,线性代数,3.0,罗杰,,85,H6105,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	MATH120044.03,线性代数,3.0,汪思海,讲师,85,H6201,三 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	MATH120044.03,线性代数,3.0,汪思海,讲师,85,H6201,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	MATH120044.04,线性代数,3.0,朱弘鑫,副教授,85,H6108,三 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	MATH120044.04,线性代数,3.0,朱弘鑫,副教授,85,H6108,五 1-2 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",14 经济学院\r\n\
	SOSC120007.01,经济学原理,3.0,"陈钊\r\n\
	袁志刚","教授\r\n\
	教授",150,H6312,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 经济学院\r\n\
	15 社会科学试验班\r\n\
	15 法学院"\r\n\
	SOSC120007.02,经济学原理,3.0,冯剑亮,讲师,150,H6412,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 法学院\r\n\
	15 社会科学试验班\r\n\
	15 经济学院"\r\n\
	SOSC120008.01,政治经济学,3.0,"汪立鑫\r\n\
	李慧中","教授\r\n\
	教授",70,H6305,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 经济学院\r\n\
	15 新闻学院\r\n\
	15 旅游管理\r\n\
	15 艺术管理\r\n\
	15 历史学类"\r\n\
	SOSC120008.02,政治经济学,3.0,高帆,副教授,70,H6507,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 新闻学院\r\n\
	15 艺术管理\r\n\
	15 旅游管理\r\n\
	15 经济学院\r\n\
	15 历史学类"\r\n\
	SOSC120008.03,政治经济学,3.0,严法善,教授,70,H6304,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 旅游管理\r\n\
	15 艺术管理\r\n\
	15 新闻学院\r\n\
	15 经济学院\r\n\
	15 历史学类"\r\n\
	SOSC120008.04,政治经济学,3.0,张晖明,教授,70,H6307,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 旅游管理\r\n\
	15 艺术管理\r\n\
	15 新闻学院\r\n\
	15 经济学院\r\n\
	15 历史学类"\r\n\
	SOSC120008.05,政治经济学,3.0,周伟林,副教授,70,H6508,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 历史学类\r\n\
	15 艺术管理\r\n\
	15 经济学院\r\n\
	15 新闻学院\r\n\
	15 旅游管理"\r\n\
	SOSC120008.06,政治经济学,3.0,周翼,副教授,70,H6404,四 6-8 ,上海市精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","15 旅游管理\r\n\
	15 经济学院\r\n\
	15 新闻学院\r\n\
	15 艺术管理\r\n\
	15 历史学类"\r\n\
	ECON120003.07,宏观经济学A,3.0,曹雯,讲师,40,H6106,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","14 管理学院\r\n\
	14 公共事业管理\r\n\
	12 环境科学(环境管理方向)"\r\n\
	ECON120003.08,宏观经济学A,3.0,张洁,副教授,40,H5106,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","12 环境科学(环境管理方向)\r\n\
	14 公共事业管理\r\n\
	14 管理学院"\r\n\
	ECON120003.09,宏观经济学A,3.0,罗云辉,副教授,40,H5110,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","12 环境科学(环境管理方向)\r\n\
	14 公共事业管理\r\n\
	14 管理学院"\r\n\
	ECON120003.10,宏观经济学A,3.0,白让让,副教授,40,H5114,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","12 环境科学(环境管理方向)\r\n\
	14 公共事业管理\r\n\
	14 管理学院"\r\n\
	ECON120003.11,宏观经济学A,3.0,李玲芳,副教授,40,H5116,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","14 管理学院\r\n\
	14 公共事业管理\r\n\
	12 环境科学(环境管理方向)"\r\n\
	ICES110003.04,留学生专业汉语I,4.0,袁斌,讲师,5,H院系自主,二 11-12 ,管理学院李达三楼105室,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",13 管理学院\r\n\
	ICES110003.04,留学生专业汉语I,4.0,袁斌,讲师,5,H院系自主,四 11-12 ,管理学院李达三楼105室,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",13 管理学院\r\n\
	ICES110003.05,留学生专业汉语I,4.0,许静,讲师,5,H院系自主,二 11-12 ,管理学院史带楼503室,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",13 管理学院\r\n\
	ICES110003.05,留学生专业汉语I,4.0,许静,讲师,5,H院系自主,四 11-12 ,管理学院史带楼503室,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：18:30-20:30",13 管理学院\r\n\
	MANA116005.01,项目评估,3.0,Adriana Ramirez Roch,,80,H3406,三 1-3 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：08:00-10:40",\r\n\
	MANA116015.01,外国商务投资,3.0,Cristancho Ramirez Andrea Karin,,100,HGX308,三 3-5 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-12:30",\r\n\
	MANA116018.01,企业发展,3.0,Michel Trejo Marcos Alejandro,,100,HGX207,二 3-5 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-12:30",\r\n\
	MANA116019.01,国际市场研究,3.0,Jacquelyn Wu,,65,HGX409,一 11-13 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-21:05",\r\n\
	MANA116021.01,商务研究方法,3.0,Cristobal Collignon De Alba,,100,HGX207,五 6-8 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-16:10",\r\n\
	MANA116022.01,公司物流,3.0,,,60,HGX310,一 3-5 ,"全英语课程\r\n\
	复旦—蒙特雷课程\r\n\
	每次课增加15分钟","考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：09:55-12:30",\r\n\
	MANA116027.01,个人与商业财务,3.0,Francisco Lopez Medina,,100,H4105,五 3-5 ,全英语课程，复旦—蒙特雷课程，每次课增加15分钟,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：09:55-12:30",\r\n\
	MANA120008.01,市场营销导论,2.0,刘刚,副教授,70,H6101,五 6-7 ,经管III类,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:30",15 艺术管理\r\n\
	MANA120008.02,市场营销导论,2.0,张_,副教授,40,H6301,四 6-8(1-12周),经管III类,"考试日期：2015-11-26\r\n\
	\r\n\
	考试时间：13:30-15:30",\r\n\
	MANA120008.03,市场营销导论,2.0,伍华佳,副教授,80,H6306,五 6-7 ,经管III类,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	MANA120009.01,现代投资学,2.0,方曙红,副教授,80,H6112,四 6-7 ,经管III类,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	MANA120010.01,现代物流管理,2.0,李旭,教授,90,H6112,一 11-12 ,经管III类,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	MANA120011.01,信息技术管理,2.0,傅烨,副教授,30,H6204,一 11-12 ,经管III类,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	MANA120019.01,国际财务,2.0,徐剑刚,教授,80,H6101,一 6-7 ,经管III类,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	MANA120022.01,产业经济学概论,2.0,白让让,副教授,50,H5114,三 6-7 ,经管III类,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:30",\r\n\
	MANA120022.02,产业经济学概论,2.0,伍华佳,副教授,130,JB201,五 3-4 ,经管III类,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	MANA130001.01,概率论与数理统计,4.0,朱仲义,教授,60,H5104,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130001.01,概率论与数理统计,4.0,朱仲义,教授,60,H5104,三 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130001.02,概率论与数理统计,4.0,徐勤丰,副教授,60,H5106,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130001.02,概率论与数理统计,4.0,徐勤丰,副教授,60,H5106,三 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130001.03,概率论与数理统计,4.0,金曙松,讲师,60,H5110,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130001.03,概率论与数理统计,4.0,金曙松,讲师,60,H5110,三 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130005.01,运筹学,4.0,戴锡,副教授,50,H6208,三 1-2 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130005.01,运筹学,4.0,戴锡,副教授,50,H6208,五 3-5 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130005.02,运筹学,4.0,翟丽,副教授,50,H6205,三 1-2 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130005.02,运筹学,4.0,翟丽,副教授,50,H6205,五 3-5 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130005.03,运筹学,4.0,周蓉,副教授,50,H6206,三 1-2 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130005.03,运筹学,4.0,周蓉,副教授,50,H6206,五 3-5 ,校级精品课程团队,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130007.01,管理信息系统,3.0,黄丽华,教授,40,H6105,二 3-5 ,国家级精品课程团队 上海市教学名师,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","13 保密管理\r\n\
	13 管理学院"\r\n\
	MANA130007.02,管理信息系统,3.0,卫学启,副教授,40,H6108,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","13 保密管理\r\n\
	13 管理学院"\r\n\
	MANA130007.03,管理信息系统,3.0,傅烨,副教授,40,H6206,二 3-5 ,国家级精品课程团队,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","13 管理学院\r\n\
	13 保密管理"\r\n\
	MANA130007.04,管理信息系统,3.0,屈锗,副教授,40,H6209,二 3-5 ,全英文课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","13 保密管理\r\n\
	13 管理学院"\r\n\
	MANA130008.01,运营管理,3.0,李旭,教授,50,H6105,一 3-5 ,复旦-港中大-早稻田项目,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:55","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130013.01,物流管理,3.0,陈祥锋,教授,30,H6205,三 3-5 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 管理科学\r\n\
	MANA130021.01,回归分析,3.0,沈家,副教授,40,H6207,一 3-5 ,学术兴趣班,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130024.01,随机过程,3.0,肖悦文,讲师,40,H6305,五 3-5 ,学术兴趣班,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",12 管理学院\r\n\
	MANA130036.01,成本管理会计,3.0,徐浩萍,副教授,50,HGX208,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",12 会计学\r\n\
	MANA130036.01,成本管理会计,3.0,徐浩萍,副教授,50,HGX208,"五 6-7\r\n\
	(1-16周单周)",,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",12 会计学\r\n\
	MANA130037.01,税法,3.0,娄贺统,高级讲师,50,H5104,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130038.01,审计学,3.0,朱振梅,讲师,50,HGX208,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 会计学\r\n\
	MANA130038.01,审计学,3.0,朱振梅,讲师,50,HGX208,"三 9-10\r\n\
	(2-16周双周)",,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 会计学\r\n\
	MANA130039.01,高级财务会计,3.0,曹利,讲师,50,H6405,"三 3-5\r\n\
	(2-16周双周)",,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 会计学\r\n\
	MANA130039.01,高级财务会计,3.0,曹利,讲师,50,H6405,"三 3-5\r\n\
	(1-16周单周)",,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 会计学\r\n\
	MANA130039.01,高级财务会计,3.0,曹利,讲师,50,H6405,"五 6-7\r\n\
	(2-16周双周)",,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 会计学\r\n\
	MANA130041.01,国际会计,3.0,朱振梅,讲师,50,H5106,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",12 管理学院\r\n\
	MANA130042.01,国际商务管理,2.0,李元旭,教授,40,H6104,三 1-2 ,复旦-港中大-早稻田项目,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130042.02,国际商务管理,2.0,吴哲颖,讲师,40,H6106,三 1-2 ,"全英文课程\r\n\
	复旦-港中大-早稻田项目","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130042.03,国际商务管理,2.0,薛求知,教授,40,H6105,三 3-4 ,复旦-港中大-早稻田项目,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130057.01,营销战略,2.0,褚荣伟,讲师,30,H6207,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130058.01,新产品开发管理,2.0,张_,副教授,42,H5104,"四 3-5\r\n\
	(1-12周)",新国大项目选修,"考试日期：2015-11-26\r\n\
	\r\n\
	考试时间：09:55-11:55","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130059.01,营销渠道管理,2.0,褚荣伟,讲师,25,H6207,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 市场营销\r\n\
	MANA130062.01,服务营销,2.0,"裘理瑾\r\n\
	范秀成","讲师\r\n\
	教授",20,H院系自主,"一 3-5\r\n\
	(1-12周)","上海市精品课程团队\r\n\
	全英文课程\r\n\
	管理学院思源楼624","考试日期：2015-11-23\r\n\
	\r\n\
	考试时间：09:55-11:55",12 市场营销\r\n\
	MANA130073.01,供应链管理,3.0,陈祥锋,教授,50,H6206,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130076.01,统计软件,3.0,金曙松,讲师,30,H院系自主,"一 1-2\r\n\
	(2-16周双周)",周一上机在管院机房,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 统计学\r\n\
	MANA130076.01,统计软件,3.0,金曙松,讲师,30,H6208,三 3-5 ,周一上机在管院机房,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",12 统计学\r\n\
	MANA130097.01,属性数据分析,3.0,黎德元,教授,30,H6208,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 统计学\r\n\
	MANA130114.01,中国金融市场,3.0,徐莉,副教授,80,H5106,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130114.02,中国金融市场,3.0,朱祁,讲师,50,H6505,四 6-8 ,"全英文课程\r\n\
	复旦-港中大-早稻田项目","考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:30",\r\n\
	MANA130121.01,计量经济学,3.0,肖志国,副教授,20,H6106,五 6-8 ,学术兴趣班(与硕博合上）,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：13:00-15:00","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130129.01,会计专题研究,2.0,周易,讲师,50,H6207,三 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130152.01,国别经营环境,3.0,薛求知,教授,20,H5115,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 工商管理\r\n\
	MANA130181.01,Internet营销,2.0,肖莉,讲师,25,H6207,三 3-4 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 市场营销\r\n\
	15 管理学院"\r\n\
	MANA130272.01,中国市场营销,3.0,卢晓,讲师,50,H6208,三 6-8 ,"全英文课程\r\n\
	复旦-港中大-早稻田项目","考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:30",\r\n\
	MANA130283.01,战略管理,2.0,唐跃军,副教授,40,H6304,五 3-4 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130283.02,战略管理,2.0,卫田,副教授,40,H6107,五 3-4 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130283.03,战略管理,2.0,张青,教授,40,H6105,五 3-4 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130306.01,东方管理,2.0,彭贺,副教授,20,H5115,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 工商管理\r\n\
	MANA130310.01,抽样调查,3.0,徐勤丰,副教授,30,H6208,一 6-8 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",12 统计学\r\n\
	MANA130311.01,最优化方法及应用,3.0,郁培文,讲师,30,H6205,五 6-8 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：13:00-15:00",12 管理科学\r\n\
	MANA130312.01,金融工程导论,3.0,戴锡,副教授,30,H5105,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",12 管理科学\r\n\
	MANA130313.01,衍生证券,3.0,田澍,副教授,90,H6312,四 6-8 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 财务管理\r\n\
	MANA130314.01,公司财务理论与实务,3.0,王克敏,教授,90,H6312,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",12 财务管理\r\n\
	MANA130315.01,公司治理,3.0,唐跃军,副教授,20,H5113,五 8-10 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：15:30-17:30",12 工商管理\r\n\
	MANA130316.01,IT运营与服务管理,3.0,张成洪,教授,10,H6310,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 信息管理与信息系统\r\n\
	MANA130317.01,商业智能,3.0,王有为,副教授,10,H6310,五 6-8 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：13:00-15:00",12 信息管理与信息系统\r\n\
	MANA130318.01,现代信息技术与应用,3.0,许博,副教授,10,H6310,四 6-8 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:00-15:00",12 信息管理与信息系统\r\n\
	MANA130320.01,商业伦理学,2.0,吴泳臻,讲师,75,H6101,二 3-4 ,全英文课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130320.02,商业伦理学,2.0,吴哲颖,讲师,75,H6201,二 3-4 ,全英文课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 管理学院\r\n\
	MANA130323.01,法律、商业与社会,2.0,马忠法,教授,150,H6112,四 3-4 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：08:30-10:30",13 管理学院\r\n\
	MANA130327.01,金融市场与金融机构,3.0,胡畏,副教授,90,H6312,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",12 财务管理\r\n\
	MANA130328.01,高级微观经济学,3.0,李玲芳,副教授,20,H6106,三 3-5 ,学术兴趣班(与硕博合上）,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130330.01,程序设计基础,3.0,窦一凡,讲师,55,H6108,一 8-10 ,"第3、6、9、12、15周在史代楼809上课\r\n\
	学术兴趣班","考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130334.01,商业银行管理,3.0,田澍,副教授,70,H6201,三 6-8 ,全英文课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130340.01,知识管理系统,2.0,徐云杰,教授,30,H6204,一 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130344.01,产业经济学,3.0,"龚冰琳\r\n\
	曹雯","讲师\r\n\
	讲师",50,H5108,一 6-8 ,全英文课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130347.01,会计学,3.0,洪剑峭,教授,45,H6108,一 6-7 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130347.01,会计学,3.0,洪剑峭,教授,45,H6108,四 3-4 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130347.02,会计学,3.0,李远鹏,副教授,45,H6306,一 6-7 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130347.02,会计学,3.0,李远鹏,副教授,45,H6306,四 3-4 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 管理学院\r\n\
	14 公共事业管理"\r\n\
	MANA130347.03,会计学,3.0,方军雄,教授,45,H6308,一 6-7 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130347.03,会计学,3.0,方军雄,教授,45,H6308,四 3-4 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130347.04,会计学,3.0,施海娜,副教授,45,H6309,一 6-7 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 艺术管理\r\n\
	14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130347.04,会计学,3.0,施海娜,副教授,45,H6309,四 1-2 ,校级精品课程团队,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","14 艺术管理\r\n\
	14 公共事业管理\r\n\
	14 管理学院"\r\n\
	MANA130349.01,基金管理,3.0,战功,讲师,80,H6307,五 3-5 ,全英文课程,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130351.01,研究方法I,3.0,张新,讲师,15,H院系自主,三 6-8 ,"学术兴趣班(与硕博合上）\r\n\
	管理学院史带楼809","考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	12 管理学院"\r\n\
	MANA130351.02,研究方法I,3.0,卫田,副教授,15,H院系自主,一 2-4 ,"学术兴趣班(与硕博合上）\r\n\
	管理学院史带楼501","考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130353.01,统计推断,3.0,沈娟,讲师,30,H6208,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 统计学\r\n\
	MANA130359.01,社会调查,1.0,凌鸿,教授,20,H院系自主,六 3-3 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130359.02,社会调查,1.0,徐云杰,教授,20,H院系自主,六 4-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.03,社会调查,1.0,张成洪,教授,20,H院系自主,六 5-5 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.04,社会调查,1.0,吕长江,教授,20,H院系自主,六 6-6 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.05,社会调查,1.0,洪剑峭,教授,20,H院系自主,六 7-7 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.06,社会调查,1.0,娄贺统,高级讲师,20,H院系自主,六 8-8 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130359.07,社会调查,1.0,李远鹏,副教授,20,H院系自主,六 9-9 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130359.08,社会调查,1.0,张新生,教授,20,H院系自主,六 10-10 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.09,社会调查,1.0,朱仲义,教授,20,H院系自主,六 11-11 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.10,社会调查,1.0,骆品亮,教授,20,H院系自主,六 12-12 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130359.11,社会调查,1.0,陈祥锋,教授,20,H院系自主,六 13-13 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 管理学院\r\n\
	14 管理学院"\r\n\
	MANA130359.12,社会调查,1.0,戴锡,副教授,20,H院系自主,六 14-14 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MANA130359.13,社会调查,1.0,李元旭,教授,20,H院系自主,六 2-2 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","14 管理学院\r\n\
	13 管理学院"\r\n\
	MATH120016.06,数学分析BI,5.0,张永跃,讲师,110,H6412,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 管理学院\r\n\
	15 公共事业管理"\r\n\
	MATH120016.06,数学分析BI,5.0,张永跃,讲师,110,H6412,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 管理学院\r\n\
	15 公共事业管理"\r\n\
	MATH120016.06,数学分析BI,5.0,张永跃,讲师,110,H6412,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 管理学院\r\n\
	15 公共事业管理"\r\n\
	MATH120016.07,数学分析BI,5.0,严金海,副教授,110,H6401,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 管理学院"\r\n\
	MATH120016.07,数学分析BI,5.0,严金海,副教授,110,H6401,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 管理学院"\r\n\
	MATH120016.07,数学分析BI,5.0,严金海,副教授,110,H6401,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","15 公共事业管理\r\n\
	15 管理学院"\r\n\
	SOSC120014.01,管理学导论,3.0,李元旭,教授,69,H6401,三 6-8 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","15 艺术管理\r\n\
	15 公共事业管理\r\n\
	13 信息安全(保密方向)\r\n\
	13 保密管理\r\n\
	15 管理学院\r\n\
	12 保密管理\r\n\
	15 经济学院\r\n\
	15 历史学类\r\n\
	15 旅游管理\r\n\
	15 法学院\r\n\
	12 信息安全(保密方向)"\r\n\
	SOSC120014.02,管理学导论,3.0,唐跃军,副教授,69,H6409,三 6-8 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 保密管理\r\n\
	15 法学院\r\n\
	15 管理学院\r\n\
	15 经济学院\r\n\
	15 艺术管理\r\n\
	13 信息安全(保密方向)\r\n\
	15 历史学类\r\n\
	15 公共事业管理\r\n\
	15 旅游管理\r\n\
	12 保密管理\r\n\
	12 信息安全(保密方向)"\r\n\
	SOSC120014.03,管理学导论,3.0,余光胜,副教授,69,H6405,三 6-8 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 信息安全(保密方向)\r\n\
	12 信息安全(保密方向)\r\n\
	13 保密管理\r\n\
	15 艺术管理\r\n\
	15 法学院\r\n\
	15 旅游管理\r\n\
	15 经济学院\r\n\
	15 公共事业管理\r\n\
	15 管理学院\r\n\
	12 保密管理\r\n\
	15 历史学类"\r\n\
	SOSC120014.04,管理学导论,3.0,徐笑君,副教授,69,H6408,三 6-8 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 保密管理\r\n\
	15 历史学类\r\n\
	13 信息安全(保密方向)\r\n\
	15 公共事业管理\r\n\
	15 经济学院\r\n\
	15 艺术管理\r\n\
	15 法学院\r\n\
	12 信息安全(保密方向)\r\n\
	15 管理学院\r\n\
	12 保密管理\r\n\
	15 旅游管理"\r\n\
	SOSC120014.05,管理学导论,3.0,姚凯,教授,69,H6406,三 6-8 ,上海市精品课程团队,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","12 信息安全(保密方向)\r\n\
	15 公共事业管理\r\n\
	13 保密管理\r\n\
	15 旅游管理\r\n\
	15 艺术管理\r\n\
	12 保密管理\r\n\
	13 信息安全(保密方向)\r\n\
	15 管理学院\r\n\
	15 经济学院\r\n\
	15 法学院\r\n\
	15 历史学类"\r\n\
	ICES110001.05,留学生高级汉语I,4.0,赵立行,教授,60,H5312,三 1-2 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",15 法学\r\n\
	ICES110001.05,留学生高级汉语I,4.0,赵立行,教授,60,H3204,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",15 法学\r\n\
	ICES110003.03,留学生专业汉语I,4.0,韩涛,副教授,30,JB307,三 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",14 留学生 法学\r\n\
	ICES110003.03,留学生专业汉语I,4.0,韩涛,副教授,30,JB307,四 3-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",14 留学生 法学\r\n\
	LAWS120002.01,国际法,3.0,朱丹,讲师,70,JB307,三 2-4 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：09:00-11:00",14 法学\r\n\
	LAWS120002.02,国际法,3.0,陆志安,副教授,70,JB105,三 2-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:00-11:00",14 法学\r\n\
	LAWS120002.03,国际法,3.0,马忠法,教授,40,JB103,三 2-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：09:00-11:00",14 法学\r\n\
	LAWS130004.01,中国法制史,3.0,郭建,教授,75,JB102,一 2-4 ,上海市精品课程复旦大学教学名师,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 法学\r\n\
	LAWS130004.02,中国法制史,3.0,王志强,教授,75,JB202,一 2-4 ,上海市精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:30",14 法学\r\n\
	LAWS130005.01,行政诉讼法,2.0,杜仪方,副教授,150,JB101,一 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：09:00-11:00",14 法学\r\n\
	LAWS130008.01,民法II,4.0,李世刚,副教授,150,JB101,五 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 法学\r\n\
	LAWS130008.01,民法II,4.0,李世刚,副教授,150,JB101,五 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:30",14 法学\r\n\
	LAWS130012.01,商法,3.0,白江,副教授,150,JB101,二 2-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：09:00-11:00",13 法学\r\n\
	LAWS130013.01,专业英语I(法律),2.0,高凌云,副教授,130,JB101,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:00-11:00",13 法学\r\n\
	LAWS130014.01,国际经济法导论,3.0,张乃根,教授,75,JB303,三 6-8 ,"上海市精品课程\r\n\
	上海市教学名师","考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:30-15:30",13 法学\r\n\
	LAWS130014.02,国际经济法导论,3.0,梁咏,副教授,75,JB202,三 6-8 ,上海市精品课程,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:30-15:30",13 法学\r\n\
	LAWS130017.01,专业英语III(法律),3.0,朱丹,讲师,110,JB305,四 2-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",\r\n\
	LAWS130018.01,法理学,2.0,杨晓畅,讲师,30,JB303,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",\r\n\
	LAWS130018.02,法理学,2.0,孙笑侠,教授,90,JB102,三 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：09:00-11:00",12 法学\r\n\
	LAWS130019.01,法律实务,3.0,"章武生\r\n\
	段厚省","教授\r\n\
	教授",140,JB101,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：09:00-11:00",12 法学\r\n\
	LAWS130027.01,婚姻家庭法,3.0,孙晓屏,副教授,90,JB202,四 6-8 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:30",13 法学\r\n\
	LAWS130029.01,国际金融法,3.0,王伟,教授,30,JB202,四 2-4 ,全英文,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 法学\r\n\
	LAWS130030.01,国际贸易法,3.0,陈梁,教授,60,JB102,一 6-8 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:30",13 法学\r\n\
	LAWS130031.01,侵权行为法,2.0,段匡,教授,42,JB302,三 3-4 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35","13 法学\r\n\
	12 旅游管理"\r\n\
	LAWS130032.01,证券法,2.0,许凌艳,副教授,30,JB202,"五 4-5\r\n\
	(8-16周)",因老师出国,课程安排在第8周周周五/2-5,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：10:50-12:30",13 法学\r\n\
	LAWS130033.01,票据法,2.0,白国栋,副教授,60,JB303,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:10",13 法学\r\n\
	LAWS130034.01,证据学,2.0,马贵翔,教授,30,JB102,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",13 法学\r\n\
	LAWS130040.01,法律诊所教育,3.0,"章武生\r\n\
	季立刚","教授\r\n\
	教授",20,JB302,四 2-4 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：08:55-10:55",13 法学\r\n\
	LAWS130044.01,中国法律思想史,2.0,韩涛,副教授,30,JB102,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",12 法学\r\n\
	LAWS130045.01,西方法律思想史,2.0,杨晓畅,讲师,30,JB303,一 3-4 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35",12 法学\r\n\
	LAWS130046.01,外国刑事诉讼法,2.0,徐美君,教授,30,JB303,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 法学\r\n\
	LAWS130047.01,外国行政法,2.0,朱淑娣,教授,60,JB303,二 2-3 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:00-11:00",\r\n\
	LAWS130050.01,刑法II,3.0,陈浩然,教授,150,JB201,二 2-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:30",14 法学\r\n\
	LAWS130051.01,外国民事诉讼法,2.0,杨严炎,副教授,30,JB202,"五 2-3\r\n\
	(1-7周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	LAWS160001.01,宪法学,3.0,涂云新,讲师,150,,,因涂云新出国,9月上《民法总论》,"考试日期：\r\n\
	\r\n\
	考试时间：-",15 法学\r\n\
	LAWS160002.01,民法总论,3.0,班天可,讲师,150,,,因涂云新出国,10月上《宪法》,"考试日期：\r\n\
	\r\n\
	考试时间：-",15 法学\r\n\
	LAWS160003.01,刑法,3.0,杜宇,教授,150,,,,"考试日期：\r\n\
	\r\n\
	考试时间：-",15 法学\r\n\
	LAWS160005.01,商法,3.0,李世刚,副教授,110,,,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 法学\r\n\
	LAWS160007.01,知识产权法,3.0,王俊,讲师,110,,,,"考试日期：\r\n\
	\r\n\
	考试时间：-",14 法学\r\n\
	SOSC120003.01,法理学导论,3.0,杨晓畅,讲师,160,H3308,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30","15 法学\r\n\
	15 社会科学试验班\r\n\
	15 管理学院"\r\n\
	SOSC120003.02,法理学导论,3.0,侯健,教授,140,H3406,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",15 法学\r\n\
	SOSC120015.01,宪法,3.0,王蔚,副教授,105,H6401,二 2-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：8:30-10:30","15 新闻学院\r\n\
	15 法学"\r\n\
	SOSC120015.02,宪法,3.0,潘伟杰,教授,105,H3308,二 2-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：8:30-10:30","15 新闻学院\r\n\
	15 法学"\r\n\
	SOCI130008.01,经济社会学,2.0,桂勇,教授,70,H5114,一 6-7 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30",13 社会学\r\n\
	SOCI130014.01,学年论文,1.0,李晓煦,讲师,30,H院系自主,日 1-1 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 心理学\r\n\
	SOCI130014.02,学年论文,1.0,沈奕斐,副教授,85,,日 1-1 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会学\r\n\
	SOCI130017.01,个案工作,3.0,高建秀,副研究馆员,35,H社工实验室,四 2-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 社会工作\r\n\
	SOCI130020.01,社会工作行政,3.0,王川兰,讲师,30,H5109,三 7-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会工作\r\n\
	SOCI130021.01,人类行为与社会环境,3.0,朱晨海,讲师,108,H3306,四 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","13 社会学\r\n\
	14 社会工作"\r\n\
	SOCI130023.01,社会工作伦理,3.0,赵芳,副教授,35,H6110,一 3-5 ,校级精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 社会工作\r\n\
	SOCI130024.01,社会工作实习(一),4.0,刘勇,工程师,30,,日 2-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会工作\r\n\
	SOCI130025.01,社会工作实习(二),4.0,刘勇,工程师,5,H院系自主,日 3-3 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会工作\r\n\
	SOCI130030.01,生理心理学,3.0,张玉秋,教授,30,H5106,五 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 心理学\r\n\
	SOCI130036.01,社会心理学,3.0,陈斌斌,讲师,160,H4301,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","13 社会学\r\n\
	13 保密管理\r\n\
	13 信息安全(保密方向)\r\n\
	14 新闻传播学类\r\n\
	12 信息安全(保密方向)"\r\n\
	SOCI130036.02,社会心理学,3.0,孙时进,教授,42,H5306,一 2-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","13 心理学\r\n\
	14 心理学"\r\n\
	SOCI130039.01,中国的政治经济状况,2.0,张力,教授,15,H5104,三 3-4 ,全英语课程,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：09:55-11:35",12 社会学\r\n\
	SOCI130065.01,发展研究,2.0,胡安宁,副教授,0,H6208,"二 11-13\r\n\
	(1-13周)","全英语课程\r\n\
	手动添加选课","考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	SOCI130068.01,社会性别研究,2.0,沈奕斐,副教授,60,H5110,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 社会学\r\n\
	13 社会学"\r\n\
	SOCI130077.01,法律与社会工作,2.0,韩央迪,副教授,30,H6205,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会工作\r\n\
	SOCI130081.01,家庭治疗,2.0,高建秀,副研究馆员,30,H社工实验室,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会工作\r\n\
	SOCI130083.01,心理测验与应用,2.0,王燕,副教授,56,H5106,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","12 社会工作\r\n\
	12 心理学"\r\n\
	SOCI130085.01,中国文化与商业实践,2.0,"潘天舒\r\n\
	朱剑峰","教授\r\n\
	副教授",10,H5211,"三 6-8\r\n\
	(1-13周)","全英语课程\r\n\
	上海市留学生英语授课示范性课程","考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会学\r\n\
	SOCI130096.01,古典社会学理论,3.0,"刘欣\r\n\
	俞志元","教授\r\n\
	讲师",60,H6110,三 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00",14 社会学\r\n\
	SOCI130098.01,社会调查方法,2.0,沈洁,讲师,90,HGX408,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 新闻学院\r\n\
	12 社会工作"\r\n\
	SOCI130098.02,社会调查方法,2.0,"刘欣\r\n\
	俞志元","教授\r\n\
	讲师",98,H6506,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 社会学\r\n\
	13 心理学"\r\n\
	SOCI130099.01,西方社会思想史,2.0,"于海\r\n\
	徐珂","教授\r\n\
	副教授",70,HGX307,四 8-9 ,上海市精品课程团队,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",14 社会学\r\n\
	SOCI130103.01,文化社会学,2.0,周怡,教授,70,H5114,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",13 社会学\r\n\
	SOCI130108.01,社会福利理论与制度,3.0,韩央迪,副教授,30,H6207,一 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会工作\r\n\
	SOCI130118.01,职业心理学,2.0,高山川,讲师,30,H6207,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 心理学\r\n\
	SOCI130129.01,社会统计学,4.0,陆康强,教授,30,H6206,一 6-8 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 社会工作\r\n\
	SOCI130129.01,社会统计学,4.0,陆康强,教授,30,,二 11-12 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",13 社会工作\r\n\
	SOCI130129.02,社会统计学,4.0,陆康强,教授,60,,一 11-12 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 社会学\r\n\
	SOCI130129.02,社会统计学,4.0,陆康强,教授,60,H5116,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 社会学\r\n\
	SOCI130133.01,组织社会学,3.0,徐建牛,副教授,75,H5104,五 8-10 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会学\r\n\
	SOCI130134.01,全球化争议,2.0,Gail Hershatter,,30,HGX305,二 6-8,,,复旦加州项目\r\n\
	SOCI130135.01,上海：城市研究,2.0,于海,教授,10,HGX405,"三 8-10\r\n\
	(1-13周)",全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会学\r\n\
	SOCI130136.01,中国社会与宗教,2.0,胡安宁,副教授,10,H5307,"三 3-5\r\n\
	(1-13周)",全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",社会学\r\n\
	SOCI130137.01,全球化下的中国文化与社会,2.0,"于海\r\n\
	胡安宁","教授\r\n\
	副教授",45,HGX206,"四 3-5\r\n\
	(1-13周)","上海市教学名师 \r\n\
	全英语课程 \r\n\
	复旦-UC课程 \r\n\
	上海市留学生英语授课示范性课程","考试日期：论文\r\n\
	\r\n\
	考试时间：-","复旦加州项目\r\n\
	13 社会学"\r\n\
	SOCI130140.01,语言心理学,2.0,张学新,教授,40,H5308,一 8-9 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00","14 心理学\r\n\
	13 心理学\r\n\
	12 心理学"\r\n\
	SOCI130144.01,贫穷与社会发展,2.0,陈岩燕,讲师,30,H5107,四 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会工作\r\n\
	SOCI130149.01,社会调查实践（一）,2.0,胡安宁,副教授,75,,六 4-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会学\r\n\
	SOCI130153.01,论文写作,2.0,陈斌斌,讲师,20,H文科楼931,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 社会发展与公共政策学院\r\n\
	SOCI130156.01,社会工作技巧实验,2.0,徐文艳,讲师,30,H社工实验室,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 社会工作\r\n\
	SOCI130159.01,心理统计学（二）,2.0,李晓煦,讲师,25,H文科楼931,二 8-9 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-","12 心理学\r\n\
	13 心理学"\r\n\
	SOCI130160.01,专业实践（一）,2.0,高山川,讲师,26,H院系自主,日 5-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 心理学\r\n\
	SOCI130174.01,灾难社会工作,2.0,付芳,讲师,30,H5112,二 3-4 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-","13 社会工作\r\n\
	12 社会工作"\r\n\
	SOCI130175.01,社会服务项目开发与管理,2.0,王川兰,讲师,20,H6410,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 社会工作\r\n\
	14 社会工作\r\n\
	13 社会工作"\r\n\
	SOCI130176.01,心理统计学（一）,5.0,李晓煦,讲师,20,H文科楼931,三 4-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：15:30-17:30",14 心理学\r\n\
	SOCI130176.01,心理统计学（一）,5.0,李晓煦,讲师,20,,三 8-10 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：15:30-17:30",14 心理学\r\n\
	SOCI130179.01,变态心理学,3.0,李晓茹,副教授,30,H5415,四 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 心理学\r\n\
	SOSC120002.01,社会学导论,3.0,王威海,教授,169,H6312,二 3-5 ,"校级精品课程\r\n\
	同934.023.1课程王威海","考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：18:30-20:30","15 新闻学院\r\n\
	15 管理学院\r\n\
	13 环境科学(环境管理方向)\r\n\
	15 社会科学试验班"\r\n\
	SOSC120002.02,社会学导论,3.0,徐建牛,副教授,178,H3309,五 3-5 ,校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：18:30-20:30","15 管理学院\r\n\
	15 社会科学试验班\r\n\
	15 护理学(四年制)\r\n\
	15 新闻学院\r\n\
	13 环境科学(环境管理方向)"\r\n\
	SOSC120009.01,社会研究方法A,3.0,魏星,讲师,80,H6106,一 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：15:30-17:30",\r\n\
	SOSC120009.02,社会研究方法A,3.0,张伊娜,副教授,80,H5110,四 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：15:30-17:30",15 社会科学试验班\r\n\
	SOSC120012.01,社会工作导论,3.0,陈岩燕,讲师,80,H5116,四 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 社会科学试验班\r\n\
	SOSC120012.02,社会工作导论,3.0,顾东辉,教授,80,H5116,二 3-5 ,校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",15 社会科学试验班\r\n\
	SOSC120013.01,心理学导论,3.0,田芊,讲师,125,H6312,五 6-8 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：18:30-20:30","15 社会科学试验班\r\n\
	15 新闻学院"\r\n\
	SOSC120013.02,心理学导论,3.0,吴国宏,副教授,120,H3406,四 3-5 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：18:30-20:30","15 自然科学试验班\r\n\
	15 法学\r\n\
	15 社会科学试验班"\r\n\
	SOSC120013.03,心理学导论,3.0,高隽,讲师,80,HGX507,四 6-8 ,全英文课程,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：18:30-20:30",15\r\n\
	SOSC120013.04,心理学导论,3.0,高隽,讲师,125,H2220,五 3-5 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：18:30-20:30","15 社会科学试验班\r\n\
	15 新闻学院"\r\n\
	ZDSY118002.01,书信里的中国人,2.0,张乐天,教授,20,H5307,"二 3-4\r\n\
	(2-16周)",,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",15\r\n\
	ICES110001.04,留学生高级汉语I,4.0,林涓,助理研究员,30,H6110,三 3-4 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:10",15 留学生 国际关系与公共事务学院\r\n\
	ICES110001.04,留学生高级汉语I,4.0,林涓,助理研究员,30,H6110,五 6-7 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:10",15 留学生 国际关系与公共事务学院\r\n\
	ICES110003.02,留学生专业汉语I,4.0,黄以天,讲师,30,H6209,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际关系与公共事务学院\r\n\
	ICES110003.02,留学生专业汉语I,4.0,黄以天,讲师,30,H6209,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际关系与公共事务学院\r\n\
	POLI130001.01,中国政治思想,3.0,臧志军,教授,61,H5113,一 3-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 新闻学院\r\n\
	14 政治学与行政学"\r\n\
	POLI130003.01,西方政治学说史,3.0,任军锋,教授,119,H6112,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","14 国际关系与公共事务学院\r\n\
	14 新闻学院"\r\n\
	POLI130004.01,西方经济学基础,3.0,周志成,研究员,95,H6101,一 3-5 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",14 国际政治\r\n\
	POLI130004.02,西方经济学基础,3.0,周志成,研究员,100,H6101,一 8-10 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:30-17:30","14 政治学与行政学\r\n\
	14 行政管理"\r\n\
	POLI130005.01,比较政治制度,3.0,陈云,教授,95,H6101,四 3-5 ,校级精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 国际政治\r\n\
	POLI130005.02,比较政治制度,3.0,包刚升,讲师,55,H6204,三 3-5 ,校级精品课程,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 政治学与行政学\r\n\
	POLI130007.01,中国历代政治与行政,3.0,林涓,助理研究员,35,H6102,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 政治学与行政学\r\n\
	POLI130008.01,西方政治史,2.0,任军锋,教授,44,H6102,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","14 政治学与行政学\r\n\
	14 新闻学院"\r\n\
	POLI130013.01,公共政策概论,3.0,朱春奎,教授,148,H3408,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","13 政治学与行政学\r\n\
	14 新闻学院\r\n\
	14 行政管理"\r\n\
	POLI130015.01,中国社会政治分析,3.0,郑长忠,副教授,55,H6110,一 6-8 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 政治学与行政学\r\n\
	POLI130022.01,近现代中国对外关系,3.0,俞沂暄,讲师,107,H4103,三 6-8 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00","12 信息安全(保密方向)\r\n\
	14 国际政治"\r\n\
	POLI130023.01,近现代国际关系,3.0,张建新,教授,113,H6112,三 3-5 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30","14 国际政治\r\n\
	14 新闻学院"\r\n\
	POLI130025.01,外交学,2.0,"张骥\r\n\
	陈志敏","助理研究员\r\n\
	教授",110,H6301,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 新闻学院\r\n\
	13 国际政治"\r\n\
	POLI130029.01,全球事务与全球治理,2.0,陈玉聃,讲师,55,H6110,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 国际关系与公共事务学院\r\n\
	POLI130030.01,美国政治与对外关系,2.0,徐以骅,教授,100,H6112,五 9-10 ,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：16:20-18:00",13 国际政治系\r\n\
	POLI130031.01,俄罗斯政治与对外关系,2.0,马斌,助理研究员,90,H6201,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际政治\r\n\
	POLI130048.01,组织行为学,2.0,李春成,教授,70,H6304,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 行政管理\r\n\
	POLI130049.01,管理学概论,3.0,陈晓原,教授,70,H5110,二 3-5 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 行政管理\r\n\
	POLI130056.01,公务员制度,2.0,扶松茂,副教授,117,H3408,一 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30","14 新闻学院\r\n\
	14 行政管理\r\n\
	13 保密管理"\r\n\
	POLI130063.01,国际组织,2.0,薄燕,教授,100,H6201,一 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",12 国际政治\r\n\
	POLI130065.01,行政文书写作,2.0,姚为群,研究员,70,H6105,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际关系与公共事务学院\r\n\
	POLI130077.01,英语听说(中高级)(上),2.0,陈晓原,教授,35,H5209,二 8-9 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：15:25-17:05",13 国际关系与公共事务学院\r\n\
	POLI130079.01,日语(国政系)(上),2.0,包霞琴,教授,30,H6102,五 6-7 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：13:30-15:10",13 国际关系与公共事务学院\r\n\
	POLI130083.01,当代中国公共政策,2.0,陈云,教授,35,H5308,四 1-2 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：08:00-09:40",13 国际关系与公共事务学院\r\n\
	POLI130083.02,当代中国公共政策,2.0,唐贤兴,教授,35,H5308,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际关系与公共事务学院\r\n\
	POLI130085.01,比较公共行政,2.0,唐亚林,教授,55,H5312,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际关系与公共事务学院\r\n\
	POLI130090.01,宗教与国际关系,2.0,秦倩,讲师,45,H5112,四 8-9 ,校级精品课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际关系与公共事务学院\r\n\
	POLI130096.01,国际谈判,2.0,沈逸,副教授,85,H2101,一 11-12 ,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",13 国际关系与公共事务学院\r\n\
	POLI130107.01,主权理论研究,2.0,肖佳灵,副教授,20,H5215,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际关系与公共事务学院\r\n\
	POLI130121.01,中美关系与亚洲的崛起,2.0,刘永涛,研究员,15,H5213,五 3-5(1-12周),"全英语课程 \r\n\
	复旦-UC课程","考试日期：论文\r\n\
	\r\n\
	考试时间：-",复旦加州项目\r\n\
	POLI130124.01,当代中国公共行政,3.0,唐亚林,教授,93,H3101,三 6-8 ,校级精品课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 行政管理\r\n\
	14 新闻学院"\r\n\
	POLI130129.01,国际政治学研究方法,2.0,朱杰进,副教授,95,H4204,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 国际政治\r\n\
	POLI130134.01,公共财政管理,2.0,苟燕楠,教授,90,H4303,二 11-12 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：18:30-20:30",13 行政管理\r\n\
	POLI130136.01,西方国际评论精选,2.0,袁建华,副教授,50,H6509,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 国际政治\r\n\
	POLI130136.02,西方国际评论精选,2.0,袁建华,副教授,50,H6509,四 8-9 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:30-17:30",13 国际政治\r\n\
	POLI130138.01,跨文化与国际交流,2.0,何佩群,副教授,45,H5112,三 6-7 ,全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际政治\r\n\
	POLI130138.02,跨文化与国际交流,2.0,何佩群,副教授,45,H5112,三 8-9 ,全英语课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际政治\r\n\
	POLI130139.01,英文常用文写作,2.0,郑宇,教授,90,H6306,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 国际政治\r\n\
	POLI130140.01,公共危机管理,2.0,李瑞昌,副教授,130,H6412,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 行政管理\r\n\
	13 行政管理"\r\n\
	POLI130142.01,非政府组织,2.0,扶松茂,副教授,65,H6405,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",12 行政管理\r\n\
	POLI130144.01,贸易与国际关系,2.0,贺平,副研究员,60,H6404,五 3-4 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：09:55-11:35",13 国际关系与公共事务学院\r\n\
	POLI130145.01,跨国公司与国际关系,2.0,黄河,副教授,65,H6104,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际关系与公共事务学院\r\n\
	POLI130148.01,公共管理创新与移动政务,2.0,刘淑华,副教授,75,H5104,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 行政管理\r\n\
	POLI130152.01,外交实务,2.0,张骥,助理研究员,50,H4304,四 11-12 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 国际关系与公共事务学院\r\n\
	POLI130155.01,集体行动（上）,2.0,郦菁,讲师,55,H6501,四 6-7 ,全英语课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",13 政治学与行政学\r\n\
	POLI130156.01,集体行动（下）,2.0,胡鹏,,65,H6108,一 3-4 ,全英语课程,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：8:30-10:30",12 政治学与行政学\r\n\
	POLI130173.01,定量研究方法,2.0,李辉,副教授,95,H4203,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",14 国际政治\r\n\
	POLI130173.02,定量研究方法,2.0,李辉,副教授,100,H4104,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 政治学与行政学\r\n\
	14 行政管理"\r\n\
	POLI130179.01,中国与全球治理,2.0,朱杰进,副教授,65,H6107,三 11-12 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：18:30-20:10",14 国际关系与公共事务学院\r\n\
	SOSC120001.01,政治学原理,3.0,郑长忠,副教授,150,HGX103,一 1-3 ,上海市精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30","15 法学\r\n\
	15 社会科学试验班"\r\n\
	SOSC120001.02,政治学原理,3.0,李辉,副教授,150,H6412,二 3-5 ,上海市精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30","15 新闻学院\r\n\
	15 社会科学试验班\r\n\
	15 管理学院"\r\n\
	SOSC120001.03,政治学原理,3.0,陈周旺,教授,150,HGX104,五 3-5 ,上海市精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30","15 新闻学院\r\n\
	15 社会科学试验班"\r\n\
	SOSC120001.04,政治学原理,3.0,熊易寒,副教授,150,H2101,一 3-5 ,上海市精品课程,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30","15 新闻学院\r\n\
	15 社会科学试验班"\r\n\
	SOSC120011.01,国际关系导论,3.0,蒋昌建,副教授,120,H6112,一 6-8 ,校级精品课程,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","15 新闻学院\r\n\
	15 社会科学试验班"\r\n\
	SOSC120011.02,国际关系导论,3.0,苏长和,教授,120,H3208,二 3-5 ,校级精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30","15 社会科学试验班\r\n\
	15 新闻学院"\r\n\
	SOSC120018.01,公共行政学,3.0,陈水生,副教授,85,H6309,二 3-5 ,上海市精品课程,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",15 社会科学试验班\r\n\
	SOSC120018.02,公共行政学,3.0,李瑞昌,副教授,85,H6201,四 1-3 ,"上海市精品课程\r\n\
	研讨型课程","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻学院\r\n\
	15 社会科学试验班"\r\n\
	SOSC120018.03,公共行政学,3.0,顾丽梅,教授,85,H6406,四 1-3 ,上海市精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30","15 新闻学院\r\n\
	15 社会科学试验班"\r\n\
	SOSC120019.01,当代中国政治制度,3.0,扶松茂,副教授,150,H3309,四 3-5 ,国家级精品课程,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",15 社会科学试验班\r\n\
	ICES110001.02,留学生高级汉语I,4.0,顾昕,副教授,20,HQ302,二 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	ICES110001.02,留学生高级汉语I,4.0,顾昕,副教授,20,HQ302,四 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	ICES110008.01,留学生专业汉语(上),2.0,郭虹,副教授,30,HQ302,五 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:00-15:00",\r\n\
	JOUR120001.01,马克思主义新闻思想,2.0,童兵,教授,70,H3101,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：09:55-11:35",\r\n\
	JOUR120001.02,马克思主义新闻思想,2.0,马凌,副教授,70,H4206,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",\r\n\
	JOUR120001.03,马克思主义新闻思想,2.0,陈建云,教授,70,H4206,三 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",\r\n\
	JOUR120001.04,马克思主义新闻思想,2.0,张涛甫,教授,70,H5104,二 3-4 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：9:55-11:35",\r\n\
	JOUR120008.01,新闻学概论,2.0,周海晏,讲师,80,HQ502,五 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	JOUR120008.02,新闻学概论,2.0,葛星,助教,80,HQ502,三 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	JOUR120009.01,传播学概论,2.0,廖圣清,教授,80,HQ502,一 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：15:30-17:30",\r\n\
	JOUR120009.02,传播学概论,2.0,沈国麟,副教授,80,HQ502,三 8-9 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：15:30-17:30",\r\n\
	JOUR130004.01,新闻编辑与评论,3.0,黄芝晓,教授,50,HQ203,二 1-3 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：8:30-10:30",13 新闻学\r\n\
	JOUR130010.01,媒介经营管理,2.0,黄芝晓,教授,50,HQ203,三 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30",13 新闻学\r\n\
	JOUR130015.01,广播电视新闻,2.0,陆柳,讲师,57,HQ201,五 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130017.01,教学大实习,4.0,陈建云,教授,77,HQ院系自主,六 1-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","12 新闻学(武警班)\r\n\
	12 新闻学"\r\n\
	JOUR130017.02,教学大实习,4.0,章平,副教授,29,HQ院系自主,六 1-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 广播电视新闻学\r\n\
	JOUR130017.03,教学大实习,4.0,廖圣清,教授,35,HQ院系自主,六 1-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 传播学\r\n\
	JOUR130017.04,教学大实习,4.0,顾铮,教授,46,HQ院系自主,六 1-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",12 广告学\r\n\
	JOUR130019.01,新闻采访与写作,3.0,黄小雄,主任记者,20,HQ203,一 3-5 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 新闻学院\r\n\
	JOUR130019.02,新闻采访与写作,3.0,黄小雄,主任记者,20,HQ203,一 11-13 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 新闻学院\r\n\
	JOUR130020.01,广播电视概论,2.0,赵民,副教授,57,HQ201,二 1-2 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130022.01,电视摄像,2.0,杨敏,高级工程师,57,HQ201,五 8-9 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：15:30-17:30","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130030.01,广播电视技术,2.0,杨敏,高级工程师,57,HQ201,五 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:00-15:00","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130031.01,新闻传播前沿讲座,2.0,黄瑚,教授,180,HQ蔡冠深报告厅,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 新闻学院\r\n\
	JOUR130039.01,网络新闻传播原理与应用,3.0,邓建国,副教授,33,HQ303,四 3-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 传播学\r\n\
	JOUR130040.01,传播学研究方法,2.0,刘景芳,讲师,33,HQ303,一 3-4 ,,"考试日期：\r\n\
	\r\n\
	考试时间：-",13 传播学\r\n\
	JOUR130041.01,公共关系学,2.0,王迪,讲师,55,HQ301,五 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 广告学\r\n\
	JOUR130042.01,人际传播学,2.0,胡春阳,副教授,33,HQ303,二 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 传播学\r\n\
	JOUR130043.01,组织传播学,2.0,谢静,教授,33,HQ303,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 传播学\r\n\
	JOUR130046.01,世界传播业概况,2.0,杨鹏,副教授,33,HQ303,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 传播学\r\n\
	JOUR130048.01,媒介形态学,2.0,谢静,教授,55,HQ301,二 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 广告学\r\n\
	JOUR130050.01,广告学概论,3.0,唐乐,讲师,55,HQ301,四 3-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	JOUR130052.01,广告文案写作,2.0,张殿元,教授,55,HQ301,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	JOUR130059.01,广告摄影,2.0,李华强,讲师,55,HQ301,三 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	JOUR130063.01,大众传媒与文化,2.0,张大伟,副教授,50,HQ203,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 新闻学\r\n\
	JOUR130064.01,体育和娱乐报道,2.0,"洪兵\r\n\
	赵民","副教授\r\n\
	副教授",50,HQ203,二 4-5 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 新闻学\r\n\
	JOUR130072.01,精确新闻报道,2.0,廖圣清,教授,30,HQ303,一 6-7 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 新闻学院\r\n\
	12 新闻学院"\r\n\
	JOUR130077.01,视觉传播,2.0,孟建,教授,57,HQ201,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:30","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130088.01,广播电视事业管理,2.0,周笑,副教授,57,HQ201,一 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 广播电视新闻学\r\n\
	13 广播电视学"\r\n\
	JOUR130101.01,媒介融合概论,2.0,"李华强\r\n\
	陆柳\r\n\
	邓建国","讲师\r\n\
	讲师\r\n\
	副教授",40,HQ图书馆机房,三 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","12 新闻学院\r\n\
	13 新闻学院"\r\n\
	JOUR130107.01,视听语言,2.0,杨击,副教授,57,HQ201,三 1-2 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 广播电视新闻学\r\n\
	13 广播电视学"\r\n\
	JOUR130125.01,广告文化,2.0,张殿元,教授,55,HQ301,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	JOUR130140.01,纪实摄影工作室,2.0,顾铮,教授,57,HQ201,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 广播电视新闻学\r\n\
	13 广播电视学"\r\n\
	JOUR130147.01,中外广告事业,2.0,王迪,讲师,55,HQ301,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	JOUR130166.01,深度报道,3.0,周笑,副教授,50,HQ203,一 6-8 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 新闻学\r\n\
	12 新闻学院\r\n\
	13 新闻学院"\r\n\
	JOUR130167.01,电视编辑,3.0,陆晔,教授,57,HQ201,三 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:00-15:00","13 广播电视学\r\n\
	13 广播电视新闻学"\r\n\
	JOUR130176.01,国际传播,2.0,徐佳,讲师,55,HQ201,一 1-2 ,,,13 传播学\r\n\
	JOUR130178.01,说服与传播运动设计,2.0,"王迪\r\n\
	邓建国","讲师\r\n\
	副教授",33,HQ303,三 6-7 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-","13 新闻学院\r\n\
	13 传播学\r\n\
	12 新闻学院"\r\n\
	JOUR130186.01,新闻摄影,2.0,颜志刚,教授,50,HQ203,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",13 新闻学\r\n\
	JOUR130187.01,广告美术设计,2.0,李华强,讲师,51,HQ304,二 3-4 ,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",13 广告学\r\n\
	HIST120001.01,史学原典导读,2.0,邹振环,教授,80,HGX105,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：18:30-20:30",15 历史学类\r\n\
	HIST120003.01,国史概要,2.0,冯贤亮,教授,120,HGX103,二 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：18:30-20:30",\r\n\
	HIST120010.01,近代的世界,2.0,"陆启宏\r\n\
	张智","副教授\r\n\
	讲师",80,HGX105,四 6-7 ,校级精品课程,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：18:30-20:30",15 新闻学院\r\n\
	HIST120012.01,中国古代文明,3.0,余蔚,教授,80,HGX210,一 6-9 ,单周上课，双周上课加讨论,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：18:30-20:30",15 历史学类\r\n\
	HIST120012.02,中国古代文明,3.0,仇鹿鸣,副研究员,80,HGX209,一 6-9 ,单周上课，双周上课加讨论,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：18:30-20:30",15 历史学类\r\n\
	HIST120012.03,中国古代文明,3.0,温海清,副教授,80,HGX310,一 6-9 ,单周上课，双周上课加讨论,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：18:30-20:30",15 历史学类\r\n\
	HIST120012.04,中国古代文明,3.0,邱轶皓,讲师,80,HGX309,一 6-9 ,单周上课，双周上课加讨论,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：18:30-20:30",15 历史学类\r\n\
	HIST130001.01,史学导论,3.0,章清,教授,80,HGX209,三 6-8 ,上海市教学名师,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 历史学\r\n\
	HIST130003.01,社科文献学,2.0,"李春博\r\n\
	于翠艳","馆员\r\n\
	馆员",80,HGX105,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",13 历史学\r\n\
	HIST130009.01,20世纪世界史,2.0,顾云深,教授,80,HGX106,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 历史学\r\n\
	HIST130010.01,专业英语(历史学),2.0,司佳,副教授,80,HGX105,四 8-9 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:30-17:30","13 历史学\r\n\
	13 旅游管理"\r\n\
	HIST130027.01,中国历史地理概论,2.0,张伟然,教授,50,HGX306,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 历史学\r\n\
	12 历史学\r\n\
	14 历史学"\r\n\
	HIST130029.01,中国近代经济史,2.0,皇甫秋实,讲师,40,HGX201,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","12 历史学\r\n\
	14 历史学\r\n\
	13 历史学"\r\n\
	HIST130031.01,中国近代思想史,2.0,曹南屏,讲师,50,HGX301,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 历史学\r\n\
	13 历史学\r\n\
	12 历史学"\r\n\
	HIST130035.01,中英关系史,2.0,王立诚,教授,30,HGX205,五 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","14 历史学\r\n\
	13 历史学"\r\n\
	HIST130036.01,近现代中韩关系史,2.0,孙科志,教授,40,HGX201,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130037.01,中美关系史,2.0,马建标,副教授,20,HGX502,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130041.01,美国史,2.0,谈丽,讲师,30,HGX301,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130048.01,中国古代经济史,2.0,黄敬斌,副教授,50,HGX302,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 历史学\r\n\
	12 历史学"\r\n\
	HIST130049.01,内陆亚洲的历史与文化,2.0,温海清,副教授,40,HGX201,四 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130054.01,中国近现代史文献,2.0,王维江,研究员,40,HGX502,三 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130055.01,中国金融史,2.0,赵兰亮,副教授,40,HGX302,四 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130097.01,海外中国近代史研究,2.0,章可,助理研究员,20,HGX401,一 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 历史学\r\n\
	12 历史学"\r\n\
	HIST130112.01,西方基督教史,2.0,夏洞奇,副教授,40,HGX302,一 6-7 ,第三阶段仍不开放限制,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",历史学\r\n\
	HIST130122.01,中华人民共和国经济史,2.0,朱荫贵,教授,40,HGX401,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",历史学\r\n\
	HIST130129.01,晚清史,2.0,戴鞍钢,教授,40,HGX302,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",历史学\r\n\
	HIST130131.01,留学生与近代中国,2.0,汪乾明,讲师,60,HGX401,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130146.01,欧美汉学,2.0,赵兰亮,副教授,40,HGX501,五 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130149.01,蒙元史,2.0,温海清,副教授,40,HGX106,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130152.01,中国当代史,2.0,金光耀,教授,80,HGX207,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",13 历史学\r\n\
	HIST130156.01,中国现代经济思想史,2.0,何爱国,讲师,50,HGX501,一 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130163.01,科学的历史背景,2.0,郑方磊,讲师,20,HGX502,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",历史学\r\n\
	HIST130169.01,近代中国人物研究,2.0,吴景平,教授,40,HGX406,三 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130174.01,历史社会学,2.0,孙沛东,副教授,80,HGX105,四 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130176.01,简帛文献学概论,2.0,林志鹏,副教授,30,HGX301,四 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130179.01,中国历史文选,3.0,邓志峰,教授,80,HGX106,四 6-8 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",14 历史学\r\n\
	HIST130180.01,中国古代史（上）,4.0,马孟龙,讲师,100,H4205,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 历史学类\r\n\
	HIST130180.01,中国古代史（上）,4.0,马孟龙,讲师,100,H4205,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",15 历史学类\r\n\
	HIST130182.01,中国近现代史（上）,2.0,孙青,副教授,80,HGX209,五 3-4 ,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：08:30-10:30",14 历史学\r\n\
	HIST130186.01,近代的世界,3.0,"陆启宏\r\n\
	张智","副教授\r\n\
	讲师",80,HGX106,四 3-5 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",14 历史学\r\n\
	HIST130190.01,俄罗斯史,2.0,Rostislav Berezkin,副研究员,60,HGX205,一 3-4 ,"全英文课程\r\n\
	2015年12月21日随堂提交论文","考试日期：论文,2015-12-21\r\n\
	\r\n\
	考试时间：09:55-11:35","13 历史学\r\n\
	14 历史学"\r\n\
	HIST130191.01,中国古史传说研究导论,2.0,林志鹏,副教授,30,HGX301,四 1-2 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130196.01,西欧近现代帝国史,2.0,朱联璧,讲师,45,HGX205,三 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-","13 历史学\r\n\
	12 历史学"\r\n\
	HIST130210.01,古希腊史学原著研读,2.0,吴晓群,教授,20,H3405,三 8-9 ,望道,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	HIST130225.01,美国政治史,2.0,李剑鸣,教授,20,HGX305,三 8-9 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 历史学\r\n\
	HIST130231.01,楔形文字入门,2.0,欧阳晓莉,副研究员,50,HGX206,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",历史学\r\n\
	HIST130233.01,上海史,3.0,孙青,副教授,20,H2105B,五 6-8 ,"全英文课程\r\n\
	2015年12月18日随堂提交论文","考试日期：论文,2015-12-18\r\n\
	\r\n\
	考试时间：13:30-16:10","14 旅游管理\r\n\
	14 历史学"\r\n\
	HIST130234.01,中国思想文化专题研究,2.0,何爱国,讲师,80,HGX309,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学\r\n\
	MATH120044.05,线性代数,3.0,杭国明,高级讲师,60,H6407,一 6-7,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 旅游管理\r\n\
	MATH120044.05,线性代数,3.0,杭国明,高级讲师,60,H6407,四 3-4,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 旅游管理\r\n\
	ECON120014.01,宏观经济学B,3.0,郭_,副教授,80,HGX509,三 6-8,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:00-15:00",14 旅游管理\r\n\
	MANA130347.05,会计学,3.0,孙云龙,副教授,80,HGX409,一 9-9,周一9为习题课，助教上,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30",14 旅游管理\r\n\
	MANA130347.05,会计学,3.0,孙云龙,副教授,80,HGX409,五 3-5,周一9为习题课，助教上,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30",14 旅游管理\r\n\
	TOUR110001.01,旅游与经济管理,2.0,王永刚,副教授,80,JB303,三 11-12,江湾校区,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",\r\n\
	TOUR110003.01,中国旅游名胜,2.0,巴兆祥,教授,80,HGX310,一 11-12,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:10",\r\n\
	TOUR130004.01,旅游学原理,3.0,黄洁,副教授,80,HGX209,一 3-5,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",14 旅游管理\r\n\
	TOUR130006.01,经济法,3.0,后智钢,副教授,80,HGX310,二 1-3,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",14 旅游管理\r\n\
	TOUR130007.01,旅游营销管理,3.0,郭英之,教授,80,HGX410,一 6-8,"全英文课程\r\n\
	研讨性课程\r\n\
	第二周开始上课","考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:00-15:00",13 旅游管理\r\n\
	TOUR130008.01,旅游文化学,2.0,沈祖祥,副教授,80,HGX310,二 4-5,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:30-10:30",13 旅游管理\r\n\
	TOUR130014.01,旅游经济学,2.0,翁瑾,副教授,80,HGX106,五 6-7,,"考试日期：2016-01-08\r\n\
	\r\n\
	考试时间：13:00-15:00",13 旅游管理\r\n\
	TOUR130019.01,旅行社经营管理,2.0,张歆梅,讲师,80,HGX209,三 3-4,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",14 旅游管理\r\n\
	TOUR130030.01,旅游管理专题,2.0,沈涵,副教授,80,HGX309,一 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 旅游管理\r\n\
	TOUR130058.01,旅游消费者行为,2.0,沈涵,副教授,80,HGX210,五 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",13 旅游管理\r\n\
	TOUR130066.01,旅游英语（下）,3.0,沈莺,讲师,80,HGX410,二 1-3,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:30-10:30",13 旅游管理\r\n\
	TOUR130075.01,商务旅行管理,2.0,王永刚,副教授,80,HGX209,四 6-7,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00","13 旅游管理\r\n\
	14 旅游管理\r\n\
	12 旅游管理"\r\n\
	ICES110001.03,留学生高级汉语I,4.0,姚萱,副教授,30,HGD411,二 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110001.03,留学生高级汉语I,4.0,姚萱,副教授,30,HGD411,四 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110010.01,初级汉语,4.0,毛金燕,讲师,30,HGD412,二 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110010.01,初级汉语,4.0,毛金燕,讲师,30,HGD412,四 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110010.02,初级汉语,4.0,姚燕瑾,副教授,30,H5107,一 9-10 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",复旦蒙特雷项目\r\n\
	ICES110010.02,初级汉语,4.0,姚燕瑾,副教授,30,H5107,四 6-7 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",复旦蒙特雷项目\r\n\
	ICES110010.03,初级汉语,4.0,李晓映,助理研究员,30,H6210,一 9-10 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",复旦蒙特雷项目\r\n\
	ICES110010.03,初级汉语,4.0,李晓映,助理研究员,30,H6210,四 6-7 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",复旦蒙特雷项目\r\n\
	ICES110011.01,中级汉语,4.0,耿直,讲师,30,HGD413,二 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110011.01,中级汉语,4.0,耿直,讲师,30,HGD413,四 11-12 ,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:00",外国交流学生\r\n\
	ICES110011.02,中级汉语,4.0,姚燕瑾,副教授,30,H5107,三 9-10 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：16:20-18:00",复旦蒙特雷项目\r\n\
	ICES110011.02,中级汉语,4.0,姚燕瑾,副教授,30,H5107,四 9-10 ,只对蒙特雷学生开放,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：16:20-18:00",复旦蒙特雷项目\r\n\
	ICES110012.01,中国概况（上）,2.0,许静,讲师,30,HGD405,四 8-9 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：15:25-16:55",15 临床医学(六年制)\r\n\
	ICES110012.02,中国概况（上）,2.0,赵雪倩,高级讲师,40,HGD414,一 11-12 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：18:30-20:00",15 留学生\r\n\
	ICES110012.03,中国概况（上）,2.0,许金生,副教授,40,HGD414,二 11-12 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：18:30-20:00",15 留学生\r\n\
	ICES110012.04,中国概况（上）,2.0,赵雪倩,高级讲师,40,HGD414,三 11-12 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：18:30-20:00",15 留学生\r\n\
	ICES110012.05,中国概况（上）,2.0,许金生,副教授,40,HGD414,四 11-12 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：18:30-20:00",15 留学生\r\n\
	ICES110014.01,汉语I,4.0,徐婷婷,讲师,30,HGD405,一 8-9 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:30-15:00",15 临床医学(六年制)\r\n\
	ICES110014.01,汉语I,4.0,徐婷婷,讲师,30,HGD405,四 6-7 ,,"考试日期：2016-01-07\r\n\
	\r\n\
	考试时间：13:30-15:00",15 临床医学(六年制)\r\n\
	ICES110018.01,留学生英语Ⅰ,2.0,沈国华,翻译,40,HGD508,二 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES110018.01,留学生英语Ⅰ,2.0,沈国华,翻译,40,HGD508,四 8-9 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES110020.01,留学生英语Ⅲ,2.0,沈国华,翻译,40,HGD508,二 8-9 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:00",国际文化交流学院\r\n\
	ICES110020.01,留学生英语Ⅲ,2.0,沈国华,翻译,40,HGD508,四 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：08:30-10:00",国际文化交流学院\r\n\
	ICES110022.01,中文计算机基础,2.0,张向东,讲师,40,HGD501,五 6-8 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES110023.01,上海话,2.0,盛青,讲师,30,HGD411,一 11-12 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:00",留学生\r\n\
	ICES120001.01,中国哲学,2.0,杨蓉蓉,副教授,30,HGD509,四 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:20-16:50",留学生\r\n\
	ICES120002.01,中国绘画,2.0,洪伟民,,30,HGD510,三 8-9 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：15:20-16:50",留学生\r\n\
	ICES120004.01,文物鉴赏,2.0,沈振辉,副教授,30,HGD510,二 8-9 ,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：15:20-16:50",留学生\r\n\
	ICES120005.01,中国印,2.0,王景丹,副教授,30,HGD507,一 6-7 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:00",留学生\r\n\
	ICES120006.01,中国神话传说,2.0,徐来,高级讲师,30,HGD509,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:00",留学生\r\n\
	ICES120011.01,中国传统建筑文化,2.0,吴金利,讲师,30,HGD509,三 8-9 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：15:20-16:50",留学生\r\n\
	ICES120013.01,中国历史名人,2.0,沈振辉,副教授,30,HGD508,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:00",留学生\r\n\
	ICES120015.01,汉语与中国文化,2.0,王小曼,高级讲师,30,HGD506,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:20-16:50",留学生\r\n\
	ICES130019.01,高级汉语阅读（上）,4.0,沈振辉,副教授,30,HGD510,二 6-7 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130019.01,高级汉语阅读（上）,4.0,沈振辉,副教授,30,HGD510,五 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130021.01,高级汉语阅读（下）,4.0,要英,副教授,30,HGD509,一 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130021.01,高级汉语阅读（下）,4.0,要英,副教授,30,HGD509,三 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130022.01,高级汉语听说（上）,4.0,郑文晖,高级讲师,30,HGD510,一 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130022.01,高级汉语听说（上）,4.0,郑文晖,高级讲师,30,HGD504,五 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130024.01,高级汉语听说（下）,4.0,郑文晖,高级讲师,30,HGD509,一 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130024.01,高级汉语听说（下）,4.0,郑文晖,高级讲师,30,HGD509,五 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130025.01,高级汉语写作（上）,2.0,要英,副教授,30,HGD509,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",国际文化交流学院\r\n\
	ICES130027.01,现代汉语通论,2.0,陶炼,副教授,30,HGD510,三 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130028.01,古代汉语基础（上）,2.0,施国锋,讲师,30,HGD510,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130031.01,当代中国,2.0,许金生,副教授,30,HGD510,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130032.01,中国现当代名作选,2.0,郑文晖,高级讲师,30,HGD509,一 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130033.01,中国近现代历史,2.0,许金生,副教授,30,HGD510,二 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130035.01,中国现当代文学（上）,2.0,杨蓉蓉,副教授,30,HGD510,三 1-2 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130037.01,中国古代文学(上）,2.0,施国锋,讲师,30,HGD509,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130039.01,中国古代历史,2.0,许金生,副教授,30,HGD509,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130042.01,新词语,2.0,张志云,讲师,30,HGD507,四 6-7 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130043.01,《论语》导读,2.0,施国锋,讲师,30,HGD507,五 8-9 ,,"考试日期：2015-12-25\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130047.01,成语与中国文化,2.0,王景丹,副教授,30,HGD507,一 8-9 ,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130049.01,经济文献阅读（上）,4.0,要英,副教授,30,HGD504,一 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130049.01,经济文献阅读（上）,4.0,要英,副教授,30,HGD504,四 1-2 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130051.01,经济文献阅读（下）,4.0,要英,副教授,30,HGD504,一 6-7 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130051.01,经济文献阅读（下）,4.0,要英,副教授,30,HGD505,三 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130052.01,经贸口语（上）,4.0,杨蓉蓉,副教授,30,HGD504,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130052.01,经贸口语（上）,4.0,杨蓉蓉,副教授,30,HGD504,五 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130054.01,经贸口语（下）,4.0,路广,副教授,30,HGD510,一 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130054.01,经贸口语（下）,4.0,路广,副教授,30,HGD510,四 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130055.01,经济应用文写作（上）,2.0,刘永生,讲师,30,HGD504,四 6-7 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130057.01,经济应用文写作（下）,2.0,郑文晖,高级讲师,30,HGD504,三 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130058.01,孙子兵法与商贸战略,2.0,施国锋,讲师,30,HGD504,四 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130059.01,涉外经济法规,2.0,刘永生,讲师,30,HGD504,二 3-4 ,,"考试日期：2016-01-06\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130061.01,中国区域经济（上）,2.0,杨蓉蓉,副教授,30,HGD504,三 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:00-09:30",国际文化交流学院\r\n\
	ICES130065.01,国际贸易理论与实务（上）,2.0,汪达明,,30,HGD504,五 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：10:00-11:30",国际文化交流学院\r\n\
	ICES130069.01,商务案例分析,2.0,汪达明,,30,HGD510,四 8-9 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130071.01,跨国公司与中国市场,2.0,刘永生,讲师,30,HGD507,四 8-9 ,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：15:20-16:50",国际文化交流学院\r\n\
	ICES130083.01,中国人文地理知识文选,2.0,王小曼,高级讲师,40,HGD508,二 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130084.01,历史知识文选,2.0,许金生,副教授,40,HGD508,三 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130085.01,中级汉语视听说（上）,2.0,王小曼,高级讲师,40,HGD508,一 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：14:45-15:45",国际文化交流学院\r\n\
	ICES130091.01,汉语基础语法,2.0,张志云,讲师,30,HGD510,三 6-7 ,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130092.01,初级商务口语（上）,6.0,吴金利,讲师,30,HGD507,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-09:30",国际文化交流学院\r\n\
	ICES130092.01,初级商务口语（上）,6.0,吴金利,讲师,30,HGD507,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-09:30",国际文化交流学院\r\n\
	ICES130092.01,初级商务口语（上）,6.0,吴金利,讲师,30,HGD507,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-09:30",国际文化交流学院\r\n\
	ICES130094.01,初级商务听力（上）,2.0,路广,副教授,30,HGD506,一 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：08:00-09:00",国际文化交流学院\r\n\
	ICES130096.01,中级商务听力,2.0,刘永生,讲师,30,HGD507,三 6-7 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：09:15-10:15",国际文化交流学院\r\n\
	ICES130097.01,经济报刊阅读（上）,2.0,刘永生,讲师,30,HGD507,四 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：13:30-15:00",国际文化交流学院\r\n\
	ICES130099.01,中级商务口语（上）,3.0,陶炼,副教授,30,HGD508,三 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:45-10:45",国际文化交流学院\r\n\
	ICES130099.01,中级商务口语（上）,3.0,陶炼,副教授,30,HGD506,五 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：09:45-10:45",国际文化交流学院\r\n\
	ICES130101.01,中级商务写作（上）,2.0,路广,副教授,30,HGD508,一 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:00",国际文化交流学院\r\n\
	ICES130113.01,汉语精读I,6.0,袁斌,讲师,40,HGD508,一 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130113.01,汉语精读I,6.0,袁斌,讲师,40,HGD507,二 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130113.01,汉语精读I,6.0,袁斌,讲师,40,HGD508,四 1-2 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130114.01,汉语泛读I,2.0,路广,副教授,40,HGD508,四 3-4 ,,"考试日期：2016-01-05\r\n\
	\r\n\
	考试时间：10:30-12:00",国际文化交流学院\r\n\
	ICES130115.01,汉语写作I,2.0,吴金利,讲师,30,HGD506,五 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130115.02,汉语写作I,2.0,吴金利,讲师,30,HGD507,三 3-4 ,,"考试日期：2015-12-29\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130116.01,汉语口语I,6.0,王小曼,高级讲师,30,HGD506,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-14:30",国际文化交流学院\r\n\
	ICES130116.01,汉语口语I,6.0,王小曼,高级讲师,30,HGD504,二 1-2 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-14:30",国际文化交流学院\r\n\
	ICES130116.01,汉语口语I,6.0,王小曼,高级讲师,30,HGD506,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：13:30-14:30",国际文化交流学院\r\n\
	ICES130117.01,汉语听力I,2.0,徐来,高级讲师,30,HGD506,三 1-2 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:00",国际文化交流学院\r\n\
	ICES130123.01,汉语精读III,3.0,陶炼,副教授,40,HGD507,四 1-2 ,,,国际文化交流学院\r\n\
	ICES130123.01,汉语精读III,3.0,陶炼,副教授,40,HGD507,五 3-4 ,,,国际文化交流学院\r\n\
	ICES130124.01,汉语口语III,3.0,顾颖,讲师,30,HGD507,一 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：11:00-12:00",国际文化交流学院\r\n\
	ICES130124.01,汉语口语III,3.0,顾颖,讲师,30,HGD506,三 6-7 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：11:00-12:00",国际文化交流学院\r\n\
	ICES130125.01,汉语听力III,2.0,顾颖,讲师,30,HGD507,五 6-7 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：10:15-11:45",国际文化交流学院\r\n\
	ICES130126.01,汉语泛读III,2.0,张志云,讲师,40,HGD508,二 1-2 ,,,国际文化交流学院\r\n\
	ICES130127.01,汉语写作III,2.0,袁斌,讲师,40,HGD506,四 3-4 ,,"考试日期：2015-12-28\r\n\
	\r\n\
	考试时间：08:30-10:00",国际文化交流学院\r\n\
	MUSE120002.01,中国古代工艺美术,2.0,赵琳,讲师,100,H4403,一 8-9 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：15:30-17:30",\r\n\
	MUSE120004.01,中国文字源流,2.0,朱顺龙,教授,80,H5114,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",\r\n\
	MUSE130003.01,博物馆学概论,2.0,郑奕,副教授,75,H5104,四 8-9 ,"不开放给外系\r\n\
	第三阶段仍不开放限制","考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系\r\n\
	MUSE130016.01,世界博物馆概论,2.0,姚一青,讲师,40,H2111,一 6-7 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系\r\n\
	MUSE130018.01,田野考古学,2.0,潘碧华,讲师,40,H2111,四 3-4 ,"不开放给外系\r\n\
	第三阶段仍不开放限制","考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",文物与博物馆学系\r\n\
	MUSE130027.01,中国陶瓷史,2.0,刘朝晖,教授,40,H6206,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",文物与博物馆学系\r\n\
	MUSE130028.01,中国古代建筑史,2.0,石鼎,讲师,40,H3305,四 3-4 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：08:30-10:30",文物与博物馆学系\r\n\
	MUSE130043.01,文化遗产导论,2.0,杜晓帆,研究员,30,H院系自主,三 11-12 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：18:30-20:30",文物与博物馆学系\r\n\
	MUSE130045.01,展览形式设计,2.0,陈红京,教授,35,H2218,四 6-7 ,"不开放给外系\r\n\
	第三阶段仍不开放限制","考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系\r\n\
	MUSE130047.01,文物分析技术,2.0,陈刚,教授,35,H6209,三 3-4 ,,"考试日期：2015-12-30\r\n\
	\r\n\
	考试时间：08:30-10:30",文物与博物馆学系\r\n\
	MUSE130049.01,中国美术考古,2.0,李星明,研究员,40,H2112A,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系\r\n\
	MUSE130050.01,科技考古导论,2.0,王荣,副教授,35,H2209,一 3-4 ,,"考试日期：2016-01-04\r\n\
	\r\n\
	考试时间：08:30-10:30",文物与博物馆学系\r\n\
	MUSE130056.01,博物馆教育,2.0,郑奕,副教授,35,H2218,二 3-4 ,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系\r\n\
	MUSE130067.01,环境考古学,2.0,潘艳,讲师,25,HGX405,四 6-7 ,,"考试日期：2015-12-31\r\n\
	\r\n\
	考试时间：13:00-15:00",文物与博物馆学系';

	    COURSE_DATA['文科专业课'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    temp_data = '模块名称,选课序号,课程名称,性质,学分,教师,职称,人数,教室,时间,备注,考试时间,开课系,\r\n\
	文史经典与文化传承,CHIN119001.01,古典诗词导读,1,2.0,唐雯,副研究员,100,H6301,一 3-4,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：09:55-11:35",中国语言文学系,\r\n\
	,CHIN119005.01,中国现代文学名著选讲,1,2.0,段怀清,副教授,120,H3409,二 3-4,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-11:35",中国语言文学系 ,\r\n\
	,CHIN119008.01,中国当代小说选读,1,2.0,王东明,副教授,120,HGX104,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",中国语言文学系,\r\n\
	,CHIN119008.02,中国当代小说选读,1,2.0,金理,副教授,120,H2220,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",中国语言文学系 ,\r\n\
	,CHIN119011.01,鲁迅与中国现代文化,1,2.0,倪伟,副教授,100,H3308,三 3-4,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",中国语言文学系,\r\n\
	,CHIN119012.01,《史记》导读,1,2.0,李祥年,副教授,100,HGX308,四 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",中国语言文学系 ,\r\n\
	,CHIN119013.01,宋词导读,1,2.0,聂安福,副教授,100,H6501,一 3-4,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：09:55-11:35",中国语言文学系,\r\n\
	,CHIN119016.01,《红楼梦》与人生,1,2.0,罗书华,教授,60,HGX503,四 3-4,,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：09:55-11:35",中国语言文学系 ,\r\n\
	,CHIN119019.01,中国现代散文导读,1,2.0,周双全,讲师,100,HGX408,四 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",中国语言文学系,\r\n\
	,FORE119001.01,英语文学赏读,1,2.0,卢丽安,教授,100,H6101,二 1-2,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：8:00-9:45",外国语言文学学院 ,\r\n\
	,PHIL119008.01,《荀子》导读,1,2.0,林宏星,教授,60,HGX203,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院 ,\r\n\
	哲学智慧与批判性思维,CHIN119020.01,《艺术即经验》导读,1,2.0,张宝贵,教授,60,HGX503,一 6-7,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",中国语言文学系 ,\r\n\
	,PHIL119011.01,西学经典·论美国的民主,1,2.0,任军锋,教授,150,H6112,一 3-4,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：09:55-11:35",国际关系与公共事务学院,\r\n\
	,PHIL119023.01,佛学经典·维摩经,1,2.0,程群,副教授,100,HGX207,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院 ,\r\n\
	,PHIL119036.01,《第一哲学沉思集》导读,1,2.0,莫伟民,教授,100,HGX408,四 11-12,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院,\r\n\
	,PHIL119038.01,《新教伦理与资本主义精神》导读,1,2.0,郁_隽,副教授,90,HGX407,三 3-4,慕课+翻转课堂,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学学院 ,\r\n\
	,PHIL119043.01,艺术哲学与审美问题*,1,3.0,"陈佳\r\n\
	袁新","讲师\r\n\
	副教授",60,H2205,二 11-12,周二晚上隔周小班讨论       ,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院,\r\n\
	,,,,,,,60,H2207,二 11-12(1-15周),,,,\r\n\
	,,,,,,,60,HGX205,四 6-7,,,,\r\n\
	,PHIL119044.01,科学哲学与认知问题*,1,2.0,黄翔,教授,100,H4101,四 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",哲学学院 ,\r\n\
	文明对话与世界视野,HIST119003.01,文艺复兴史,1,2.0,赵立行,教授,120,H3106,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",法学院,\r\n\
	,HIST119005.01,古希腊文明研究,1,2.0,黄洋,教授,100,HGX207,四 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系 ,\r\n\
	,HIST119009.01,《荷马史诗》导读,1,2.0,张巍,教授,85,HGX106,一 6-7,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：13:30-15:10",历史学系,\r\n\
	,HIST119016.01,中国地图史,1,2.0,韩昭庆,研究员,60,HGX209,四 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系 ,\r\n\
	,HIST119017.01,基督教文明史,1,2.0,夏洞奇,副教授,60,HGX205,二 11-12,,"考试日期：2015-12-22\r\n\
	\r\n\
	考试时间：18:30-20:10",历史学系,\r\n\
	,HIST119019.01,欧洲文明的现代历程,1,2.0,李宏图,教授,60,HGX405,三 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系 ,\r\n\
	,HIST119025.01,日本文明的历史变迁,1,2.0,冯玮,教授,150,H6212,二 3-4,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系,\r\n\
	,HIST119029.01,中国和欧洲历史视野下的1968年*,1,2.0,"金光耀\r\n\
	Fred E. Schrader","教授\r\n\
	教授",60,HGX403,二 11-12,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系 ,\r\n\
	,PHIL119001.01,《圣经》与西方宗教传统,1,2.0,王新生,教授,120,H3108,二 3-4,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-11:35",哲学学院,\r\n\
	,PHIL119020.01,《古兰经》与伊斯兰文明,1,2.0,王新生,教授,120,HGX103,二 11-12,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:10",哲学学院,\r\n\
	社会研究与当代中国,ECON119001.01,用经济学智慧解读中国,1,2.0,石磊,教授,120,H6212,五 3-4,上海市教学名师,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：9:55-11:55",经济学院,\r\n\
	,ECON119002.01,博弈论与中国智慧,1,2.0,钱勇,讲师,120,H3306,二 11-12,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",经济学院 ,\r\n\
	,LAWS119002.01,人权与法,1,2.0,侯健,教授,90,H6506,四 3-4,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：09:55-11:35",法学院,\r\n\
	,LAWS119003.01,宪政文明史,1,2.0,王蔚,副教授,90,HGX307,四 11-12,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院,\r\n\
	,LAWS119004.01,法治理念与实践,1,2.0,张光杰,副教授,60,HGX305,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院,\r\n\
	,LAWS119007.01,法律与科技文明,1,2.0,马忠法,教授,60,HGX210,四 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",法学院 ,\r\n\
	,LAWS119008.01,全球化时代的法律冲突与对话,1,2.0,梁咏,副教授,60,HGX410,四 6-7,校级精品课程团队,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",法学院,\r\n\
	,LAWS119010.01,法律与社会*,1,2.0,梁咏,副教授,60,HGX410,四 8-9,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",法学院,\r\n\
	,POLI119001.01,比较西方政治制度,1,2.0,陈云,教授,100,H6101,四 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",国际关系与公共事务学院 ,\r\n\
	科学探索与技术创新,PHIL119009.01,科学、技术及其思想发展,1,2.0,袁闯,副教授,80,H2115,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",哲学学院,\r\n\
	,CHEM119003.01,诺贝尔与自然科学,1,2.0,"涂涛\r\n\
	郭浩","教授\r\n\
	副研究员",120,H4401,四 11-12,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",化学系 ,\r\n\
	,CHEM119005.01,纳米科技与生活,1,2.0,陈萌,副教授,60,H3305,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",化学系,\r\n\
	,CHEM119006.01,生命中的化学元素,1,2.0,熊焕明,教授,60,H3204,四 3-4,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：09:55-11:35",化学系 ,\r\n\
	,CHEM119006.02,生命中的化学元素,1,2.0,方彩云,副教授,60,H4105,二 3-4,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-11:35",化学系,\r\n\
	,CHEM119006.03,生命中的化学元素,1,2.0,高明霞,副教授,60,H4203,四 8-9,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",化学系 ,\r\n\
	,CHEM119009.01,化学与中国文明,1,2.0,孙兴文,副教授,60,H4104,四 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",化学系,\r\n\
	,CHEM119010.01,元素发现史,1,2.0,"郭娟\r\n\
	王华冬","讲师\r\n\
	研究员",60,H4103,一 6-7,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",化学系 ,\r\n\
	,COMP119001.01,科学计算之美与鉴赏,1,2.0,沈一帆,教授,40,HGX209,五 8-9,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",计算机科学技术学院 ,\r\n\
	,COMP119004.01,计算思维*,1,2.0,"汪卫\r\n\
	黄萱菁","教授\r\n\
	教授",50,H3104,五 3-4,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：09:55-11:35",计算机科学技术学院,\r\n\
	,INFO119001.01,微电子技术,1,2.0,李宁,高级工程师,70,HGX209,四 8-9,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",信息科学与工程学院,\r\n\
	,INFO119002.01,诺贝尔奖与光学,1,2.0,吴翔,研究员,70,HGX105,三 8-9,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",信息科学与工程学院 ,\r\n\
	科学探索与技术创新,INFO119003.01,光学与现代生活,1,2.0,张荣君,研究员,70,HGX106,一 11-12,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",信息科学与工程学院,\r\n\
	,INFO119004.01,感知社会的信号与图像,1,2.0,"吴晓峰\r\n\
	汪源源","副教授\r\n\
	教授",80,HGX209,一 11-12,,,信息科学与工程学院 ,\r\n\
	,MACR119001.01,高分子世界,1,2.0,"邱枫\r\n\
	唐萍","教授\r\n\
	教授",60,H4406,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",高分子科学系 ,\r\n\
	,MACR119002.01,大分子与生命,1,2.0,陈新,教授,90,H4304,一 6-7,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",高分子科学系,\r\n\
	,MATE119001.01,材料科学与社会,1,2.0,张群,教授,80,H3108,一 6-7,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",材料科学系,\r\n\
	,MATE119001.02,材料科学与社会,1,2.0,"吕银祥\r\n\
	蒋益明","教授\r\n\
	教授",100,H4101,一 6-7,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：13:30-15:10",材料科学系 ,\r\n\
	,MATH119002.01,数学漫谈,1,2.0,"楼红卫\r\n\
	应坚刚\r\n\
	张毅\r\n\
	杨翎","教授\r\n\
	教授\r\n\
	教授\r\n\
	副教授",100,HGX207,二 8-9,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",数学科学学院,\r\n\
	,MATH119003.01,数据的背后,1,2.0,陆立强,副教授,100,H3409,三 11-12,,"考试日期：2015-12-23\r\n\
	\r\n\
	考试时间：18:30-20:10",数学科学学院,\r\n\
	,MATH119004.01,数学的魅力,1,2.0,朱松,副教授,50,HGX403,一 11-12,,"考试日期：其他\r\n\
	\r\n\
	考试时间：-",数学科学学院 ,\r\n\
	,MECH119001.01,力学世界,1,2.0,崔升,副教授,100,HGX207,一 11-12,,"考试日期：论文\r\n\
	\r\n\
	考试时间：",力学与工程科学系,\r\n\
	,MECH119002.01,航空与航天,1,2.0,艾剑良,教授,130,HGX103,五 6-7,,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：13:30-15:10",力学与工程科学系 ,\r\n\
	,MECH119006.01,力学思维与现代工程,1,2.0,王盛章,副教授,130,HGX104,五 11-12,,"考试日期：2015-12-18\r\n\
	考试时间：18:30-20:10",力学与工程科学系,\r\n\
	,MED119005.01,信息素养与科学发现,1,2.0,王宇芳,副研究馆员,50,H计算中心3楼2号机房,一 6-7,,"考试日期：\r\n\
	\r\n\
	考试时间：-",基础医学院,\r\n\
	,PHYS119001.01,物理与文化,1,2.0,孔青,副教授,80,H2201,四 6-7,国家级精品课程团队,"考试日期：2015-12-24\r\n\
	\r\n\
	考试时间：13:30-15:30",物理学系,\r\n\
	,PHYS119004.01,天体物理与宇宙论的演化,1,2.0,徐建军,副教授,120,H4101,三 11-12,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:30",物理学系 ,\r\n\
	,SOFT119001.01,移动互联网与科技进步,1,2.0,李景涛,讲师,60,H3404,四 11-12,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",软件学院 ,\r\n\
	,TCPH119001.01,人类与核科技发展,1,2.0,袁竹书,研究员,110,H3106,五 6-7,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",核科学与技术系,\r\n\
	生态环境与生命关怀,BIOL119002.01,营养与健康,1,2.0,"江松敏\r\n\
	曹立环","副教授\r\n\
	副教授",60,H3404,一 11-12,,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:10",生命科学学院 ,\r\n\
	,BIOL119002.02,营养与健康,1,2.0,"江松敏\r\n\
	曹立环","副教授\r\n\
	副教授",60,H3305,二 11-12,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:10",生命科学学院,\r\n\
	,BIOL119002.03,营养与健康,1,2.0,孙建琴,教授,100,H4104,三 11-12,,"考试日期：\r\n\
	\r\n\
	考试时间：-",临床医学院 ,\r\n\
	生态环境与生命关怀,BIOL119003.01,人类医学遗传学,1,2.0,"窦同海\r\n\
	顾少华","助理研究员\r\n\
	副教授",60,H3101,四 6-7,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",生命科学学院 ,\r\n\
	,BIOL119003.02,人类医学遗传学,1,2.0,"窦同海\r\n\
	顾少华","助理研究员\r\n\
	副教授",60,H3404,二 11-12,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:10",生命科学学院,\r\n\
	,BIOL119004.01,人类进化,1,2.0,"谭婧泽\r\n\
	金力\r\n\
	李士林\r\n\
	李辉","副教授\r\n\
	教授\r\n\
	副教授\r\n\
	教授",60,H3304,四 3-4,校级精品课程团队,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院 ,\r\n\
	,BIOL119004.02,人类进化,1,2.0,"谭婧泽\r\n\
	金力\r\n\
	李士林\r\n\
	李辉","副教授\r\n\
	教授\r\n\
	副教授\r\n\
	教授",60,H3201,四 6-7,校级精品课程团队,,生命科学学院,\r\n\
	,BIOL119008.01,微生物与人类健康,1,2.0,徐颖,副教授,50,H3104,一 8-9,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",生命科学学院 ,\r\n\
	,BIOL119008.02,微生物与人类健康,1,2.0,张雪莲,副教授,50,H3304,三 6-7,,,生命科学学院,\r\n\
	,BIOL119008.03,微生物与人类健康,1,2.0,李瑞,讲师,50,H3304,四 11-12,,,生命科学学院 ,\r\n\
	,BIOL119009.01,身边的基因科学,1,2.0,"皮妍\r\n\
	王磊\r\n\
	卢大儒","讲师\r\n\
	副研究员\r\n\
	教授",60,H3405,二 11-12,上海市教学名师,,生命科学学院,\r\n\
	,BIOL119009.02,身边的基因科学,1,2.0,"胡小华\r\n\
	吴小萍\r\n\
	卢大儒","副教授\r\n\
	助理研究员\r\n\
	教授",60,H3304,三 11-12,上海市教学名师,,生命科学学院 ,\r\n\
	,ENVI119001.01,可持续发展,1,2.0,"雷一东\r\n\
	董骁\r\n\
	张真","副教授\r\n\
	讲师\r\n\
	副教授",100,HGX207,四 10-11,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:30",环境科学与工程系,\r\n\
	,ENVI119002.01,环境与人类,1,2.0,"王祥荣\r\n\
	杨新\r\n\
	郑正\r\n\
	戴星翼\r\n\
	董文博","教授\r\n\
	教授\r\n\
	教授\r\n\
	教授\r\n\
	教授",200,H3309,一 11-12,复旦大学教学名师,"考试日期：2015-12-14\r\n\
	\r\n\
	考试时间：18:30-20:30",环境科学与工程系 ,\r\n\
	,ENVI119004.01,材料与环境,1,2.0,董维阳,高级工程师,100,HGX307,三 11-12,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",环境科学与工程系,\r\n\
	,ENVI119005.01,全球化时代的环境问题,1,2.0,"黄文芳\r\n\
	马涛","副教授\r\n\
	副教授",100,HGX207,四 6-7,,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",环境科学与工程系 ,\r\n\
	,ENVI119006.01,环境灾害与启示,1,2.0,"叶兴南\r\n\
	陈建民","副教授\r\n\
	教授",100,HGX207,一 6-7,复旦大学教学名师,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",环境科学与工程系,\r\n\
	,LAWS119009.01,生态文明的伦理与法理,1,2.0,李传轩,副教授,90,H4103,二 11-12,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：18:30-20:30",法学院 ,\r\n\
	生态环境与生命关怀,MED119008.01,中西医学大师与人文素养,1,2.0,田占庄,副教授,40,H3209,三 3-4,,"考试日期：\r\n\
	\r\n\
	考试时间：-",基础医学院 ,\r\n\
	,MED119010.01,人类与社会多元文化,1,2.0,李为民,教授,100,H4201,三 6-7,限2015级学生选课,"考试日期：\r\n\
	\r\n\
	考试时间：-",基础医学院,\r\n\
	,MED119011.01,生物力学与人类健康,1,2.0,李为民,教授,100,H4204,三 11-12,限2015级学生选课,"考试日期：\r\n\
	\r\n\
	考试时间：-",基础医学院 ,\r\n\
	,PHAR119001.01,医药伦理,1,2.0,"叶桦\r\n\
	贡庆\r\n\
	洪兰","副教授\r\n\
	讲师\r\n\
	讲师",80,H2115,四 6-7,,"考试日期：\r\n\
	\r\n\
	考试时间：-",药学院 ,\r\n\
	,PHAR119002.01,药膳与中国饮食文化,1,2.0,"康云\r\n\
	谢晖","讲师\r\n\
	讲师",80,H3101,五 6-7,,"考试日期：\r\n\
	\r\n\
	考试时间：-",药学院,\r\n\
	,PHAR119003.01,药物·生命·社会,1,2.0,程能能,教授,80,H3109,四 6-7,,"考试日期：\r\n\
	\r\n\
	考试时间：-",药学院 ,\r\n\
	,PHAR119004.01,诺贝尔奖与药物,1,2.0,章蕴毅,副教授,80,H3306,一 8-9,,"考试日期：\r\n\
	\r\n\
	考试时间：-",药学院,\r\n\
	,PHAR119005.01,走进中药：传承与发展,1,2.0,"侯爱君\r\n\
	黄建明\r\n\
	康云\r\n\
	雷春","教授\r\n\
	副教授\r\n\
	讲师\r\n\
	副教授",70,H4306,三 11-12,,"考试日期：\r\n\
	\r\n\
	考试时间：-",药学院 ,\r\n\
	,PHPM119001.01,环境与人群健康,1,2.0,戴俊明,副教授,60,H4205,四 11-12,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院 ,\r\n\
	,PHPM119003.01,社会发展与健康,1,2.0,余金明,教授,30,H2218,一 11-12,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院,\r\n\
	,PHPM119004.01,改变世界的流行病,1,2.0,赵根明,教授,80,H4203,一 11-12,,"考试日期：\r\n\
	\r\n\
	考试时间：-",公共卫生学院 ,\r\n\
	,PTSS119002.01,生命科学史,1,2.0,刘学礼,正高级讲师,90,H5301,三 3-5,含讨论课,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：09:55-12:30",马克思主义学院 ,\r\n\
	艺术创作与审美体验,FINE119003.01,视觉艺术与设计,1,2.0,周进,高级讲师,50,H6205,一 8-9,校级精品课程团队,"考试日期：论文,2015-12-14\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	,FINE119003.02,视觉艺术与设计,1,2.0,宋颖,讲师,50,H6206,四 11-12,,"考试日期：论文,2015-12-17\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	,FINE119005.01,音乐理论与实践,1,2.0,"陈瑜\r\n\
	花白","讲师\r\n\
	讲师",24,H艺术教育馆2F钢琴教室,三 6-7,,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：13:30-15:10",艺术教育中心 ,\r\n\
	,FINE119007.01,音乐剧赏析与表演,1,2.0,王作欣,教授,15,H艺术教育馆2F排练厅二,四 6-7(5-15周),,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",艺术教育中心,\r\n\
	,FINE119007.01,音乐剧赏析与表演,1,2.0,王作欣,教授,15,H2205,四 6-7(1-4周),,"考试日期：其他,2015-12-17\r\n\
	\r\n\
	考试时间：13:30-15:10",艺术教育中心,\r\n\
	,FINE119008.01,中国戏曲·京剧*,1,2.0,章伟国,副教授,90,H6212,四 8-9,,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,\r\n\
	,FINE119010.01,陶艺与雕塑*,1,2.0,包春雷,副教授,20,H艺术设计系陶艺工作室,三 8-9,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	,FINE119010.02,陶艺与雕塑*,1,2.0,包春雷,副教授,20,H艺术设计系陶艺工作室,三 11-12,,"考试日期：其他,2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	艺术创作与审美体验,FINE119011.01,戏剧经典与表达·西方戏剧*,1,2.0,刘明厚,教授,50,HGX210,三 11-12(15周),授课教师工作单位：上海戏剧学院           ,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心,\r\n\
	,,,,,,,,H东区艺术教育馆,三 11-12(13-14周),,,,\r\n\
	,,,,,,,,HGX210,三 11-12(6-12周),,,,\r\n\
	,,,,,,,,H东区艺术教育馆,三 11-12(4-5周),,,,\r\n\
	,,,,,,,,HGX210,三 11-12(1-3周),,,,\r\n\
	,MUSE119001.01,文物赏析与体验,1,2.0,赵琳,讲师,100,H4401,二 3-4,,"考试日期：2015-12-15\r\n\
	\r\n\
	考试时间：09:55-11:35",文物与博物馆学系 ,\r\n\
	,MUSE119003.01,考古与人类,1,2.0,"高蒙河\r\n\
	潘碧华","教授\r\n\
	讲师",100,H3206,四 6-7,校级精品课程团队,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",文物与博物馆学系,\r\n\
	,PTSS119005.01,英美电影思想解读,1,2.0,邵晓莹,副教授,50,H3406,三 11-13,校级精品课程团队,"考试日期：2015-12-16\r\n\
	\r\n\
	考试时间：18:30-20:10",艺术教育中心 ,\r\n\
	III,HIST119025.02,日本文明的历史变迁,1,2.0,冯玮,教授,100,JB301,二 3-4,视频教学,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系 ,\r\n\
	IV,ECON119001.02,用经济学智慧解读中国,1,2.0,石磊,教授,100,JB301,五 3-4,视频教学,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：9:55-11:55",经济学院 ,\r\n\
	V,MATH119002.02,数学漫谈,1,2.0,杭国明,高级讲师,50,JB302,一 11-12,,"考试日期：2015-12-21\r\n\
	\r\n\
	考试时间：18:30-20:30",数学科学学院 ,\r\n\
	VII,FINE119008.02,中国戏曲·京剧,1,2.0,章伟国,副教授,100,JB301,四 8-9,视频教学,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心,\r\n\
	III,HIST119025.03,日本文明的历史变迁,1,2.0,冯玮,教授,100,Z2306,二 3-4,视频教学,"考试日期：论文\r\n\
	\r\n\
	考试时间：-",历史学系,\r\n\
	IV,ECON119001.03,用经济学智慧解读中国,1,2.0,石磊,教授,100,Z2306,五 3-4,视频教学,"考试日期：2015-12-18\r\n\
	\r\n\
	考试时间：9:55-11:55",经济学院,\r\n\
	VII,FINE119008.03,中国戏曲·京剧,1,2.0,章伟国,副教授,100,Z2306,四 8-9,视频教学,"考试日期：2015-12-17\r\n\
	\r\n\
	考试时间：15:25-17:05",艺术教育中心 ,';

	    COURSE_DATA['模块课程'] = new CSV(temp_data, {
	        header: true
	    }).parse();

	    // 去重操作
	    for (category in COURSE_DATA) {
	        var arr = COURSE_DATA[category];
	        var idArr = [];
	        var newArr = [];
	        arr.forEach(function (course) {
	            idArr.push(course['选课序号']);
	        });
	        for (var i = 0; i < arr.length; i++) {
	            var first = idArr.indexOf(arr[i]['选课序号']);
	            if (first != i) {
	                arr[first]['时间'] += '，' + arr[i]['时间'];
	            } else {
	                arr[i].isFirst = true;
	            }
	        }
	        arr.forEach(function (course) {
	            if (course.isFirst) {
	                newArr.push(course);
	            }
	        });
	        COURSE_DATA[category] = newArr;
	    }
	    console.log(COURSE_DATA);
	    return COURSE_DATA;
	})();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(9),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\vue-wkdemo\\app\\index\\components\\myCourse.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] myCourse.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9f15a99a", Component.options)
	  } else {
	    hotAPI.reload("data-v-9f15a99a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 9 */
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
	     require("vue-hot-reload-api").rerender("data-v-9f15a99a", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(11),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\vue-wkdemo\\app\\index\\components\\collect.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] collect.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5d1c45e4", Component.options)
	  } else {
	    hotAPI.reload("data-v-5d1c45e4", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 11 */
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
	     require("vue-hot-reload-api").rerender("data-v-5d1c45e4", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* script */
	  __webpack_require__(13),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\vue-wkdemo\\app\\index\\components\\allLesson.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] allLesson.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76ac8f9d", Component.options)
	  } else {
	    hotAPI.reload("data-v-76ac8f9d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 13 */
/***/ function(module, exports) {

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

	console.log(COURSE_DATA);
	module.exports = {
	    data: function () {
	        return {
	            course: COURSE_DATA
	        };
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "alllesson"
	  }, [_c('div', {
	    staticClass: "lessonInfo"
	  }, [_c('div', {
	    staticClass: "table-name"
	  }, [_vm._v("理科课程")]), _vm._v(" "), _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.course), function(value, key) {
	    return _c('tbody', _vm._l((_vm.course[key]), function(value1, key1) {
	      return _c('tr', [_c('td', [_vm._v(_vm._s(value1['选课序号']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['课程名称']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['学分']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['教师']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['职称']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['人数']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['教室']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['时间']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(value1['备注'] || '无'))])])
	    }))
	  })], 2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('td', [_vm._v("选课序号")]), _vm._v(" "), _c('td', [_vm._v("课程名称")]), _vm._v(" "), _c('td', [_vm._v("学分")]), _vm._v(" "), _c('td', [_vm._v("教师")]), _vm._v(" "), _c('td', [_vm._v("职称")]), _vm._v(" "), _c('td', [_vm._v("人数")]), _vm._v(" "), _c('td', [_vm._v("教室")]), _vm._v(" "), _c('td', [_vm._v("时间")]), _vm._v(" "), _c('td', [_vm._v("备注")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76ac8f9d", module.exports)
	  }
	}

/***/ }
/******/ ]);