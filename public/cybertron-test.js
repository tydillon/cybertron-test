(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */













    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var fulfil;
    var done = new Promise(function (f) {
        fulfil = f;
    });
    function start() {
        if (!running) {
            running = true;
            console.log('TAP version 13');
            Promise.resolve().then(function () {
                var hasOnly = tests.some(function (test) { return test.only; });
                tests.forEach(function (test) {
                    test.shouldRun = test.skip
                        ? false
                        : hasOnly ? test.only : true;
                });
                dequeue();
            });
        }
    }
    var test = Object.assign(function test(name, fn) {
        tests.push({ name: name, fn: fn, skip: false, only: false, shouldRun: false });
        start();
    }, {
        skip: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: true, only: false, shouldRun: null });
            start();
        },
        only: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: false, only: true, shouldRun: null });
            start();
        }
    });
    var testIndex = 0;
    var assertIndex = 0;
    var running = false;
    var tests = [];
    var passed = 0;
    var failed = 0;
    var skipped = 0;
    var isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
    function logResult(ok, operator, msg, info) {
        if (info === void 0) { info = {}; }
        assertIndex += 1;
        if (ok) {
            console.log("ok " + assertIndex + " \u2014 " + msg);
            passed += 1;
        }
        else {
            console.log("not ok " + assertIndex + " \u2014 " + msg);
            failed += 1;
            console.log('  ---');
            console.log("  operator: " + operator);
            if (isNode) {
                var util = require('util');
                if ('expected' in info)
                    console.log("  expected:\n    " + util.format(info.expected).replace(/\n/gm, "\n    "));
                if ('actual' in info)
                    console.log("  actual:\n    " + util.format(info.actual).replace(/\n/gm, "\n    "));
            }
            else {
                if ('expected' in info)
                    console.log("  expected:", info.expected);
                if ('actual' in info)
                    console.log("  actual:", info.actual);
            }
            // find where the error occurred, and try to clean it up
            var lines = new Error().stack.split('\n').slice(3);
            var cwd_1 = '';
            if (isNode) {
                cwd_1 = process.cwd();
                if (/[\/\\]/.test(cwd_1[0]))
                    cwd_1 += cwd_1[0];
                var dirname = typeof __dirname === 'string' && __dirname.replace(/dist$/, '');
                for (var i = 0; i < lines.length; i += 1) {
                    if (~lines[i].indexOf(dirname)) {
                        lines = lines.slice(0, i);
                        break;
                    }
                }
            }
            var stack = lines
                .map(function (line) { return "    " + line.replace(cwd_1, '').trim(); })
                .join('\n');
            console.log("  stack:   \n" + stack);
            console.log("  ...");
        }
    }
    var assert = {
        fail: function (msg) { return logResult(false, 'fail', msg); },
        pass: function (msg) { return logResult(true, 'pass', msg); },
        ok: function (value, msg) {
            if (msg === void 0) { msg = 'should be truthy'; }
            return logResult(Boolean(value), 'ok', msg, {
                actual: value,
                expected: true
            });
        },
        equal: function (a, b, msg) {
            if (msg === void 0) { msg = 'should be equal'; }
            return logResult(a === b, 'equal', msg, {
                actual: a,
                expected: b
            });
        },
        throws: function (fn, expected, msg) {
            if (msg === void 0) { msg = 'should throw'; }
            try {
                fn();
                logResult(false, 'throws', msg, {
                    expected: expected
                });
            }
            catch (err) {
                if (expected instanceof Error) {
                    logResult(err.name === expected.name, 'throws', msg, {
                        actual: err.name,
                        expected: expected.name
                    });
                }
                else if (expected instanceof RegExp) {
                    logResult(expected.test(err.toString()), 'throws', msg, {
                        actual: err.toString(),
                        expected: expected
                    });
                }
                else if (typeof expected === 'function') {
                    logResult(expected(err), 'throws', msg, {
                        actual: err
                    });
                }
                else {
                    throw new Error("Second argument to t.throws must be an Error constructor, regex, or function");
                }
            }
        }
    };
    function dequeue() {
        return __awaiter(this, void 0, void 0, function () {
            var test, err_1, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = tests[testIndex++];
                        if (!test) return [3 /*break*/, 5];
                        if (!test.shouldRun) {
                            if (test.skip) {
                                console.log("# skip " + test.name);
                            }
                            skipped += 1;
                            dequeue();
                            return [2 /*return*/];
                        }
                        console.log("# " + test.name);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, test.fn(assert)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        failed += 1;
                        console.log("not ok " + assertIndex + " \u2014 " + err_1.message);
                        console.error("  " + err_1.stack.replace(/^\s+/gm, '    '));
                        return [3 /*break*/, 4];
                    case 4:
                        dequeue();
                        return [3 /*break*/, 6];
                    case 5:
                        total = passed + failed + skipped;
                        console.log("\n1.." + total);
                        console.log("# tests " + total);
                        if (passed)
                            console.log("# pass " + passed);
                        if (failed)
                            console.log("# fail " + failed);
                        if (skipped)
                            console.log("# skip " + skipped);
                        fulfil();
                        if (isNode)
                            process.exit(failed ? 1 : 0);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    //# sourceMappingURL=tape-modern.esm.js.map

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var tapBrowserColor = createCommonjsModule(function (module) {
    /**
     *  * Activate the runner by overriding `console.log` to intercept tap output.
     *   * Call the return value to undo the override.
     *    */

    module.exports = function() {
      var olog = console.log;
      var pre = document.body.appendChild(document.createElement("pre"));
      style(); // Apply initial pending style.
      console.log = function(...line) {
        line = parse(line.join(' '));
        style();
        olog.apply(console, arguments);
        pre.innerHTML += line + "\n";
      };

      return function undo() {
        console.log = olog;
      };
    };

    /**
     *  * These control what colors are used for the pending/failing/passing states.
     *   * Ensure that these are assigned by individual value, and that the entire
     *    * object is not assigned at once to ensure that references are intact.
     *     */

    var colors = (module.exports.colors = {
      PENDING: "#FCD62A",
      FAILING: "#F28E82",
      PASSING: "#8ECA6C"
    });

    var failed = 0;
    var passed = 0;

    function parse(line) {
      if (typeof line !== "string") line = line + "";
      if (line.indexOf("ok") === 0) {
        passed += 1;
        return line;
      }

      if (line.indexOf("not ok") === 0) {
        failed += 1;
        return line;
      }
      return line;
    }

    function style() {
      var s = document.body.style;
      if (failed > 0) {
        s.backgroundColor = colors.FAILING;
      } else if (passed > 0 && failed === 0) {
        s.backgroundColor = colors.PASSING;
      } else {
        s.backgroundColor = colors.PENDING;
      }
    }
    });
    var tapBrowserColor_1 = tapBrowserColor.colors;

    function _isPlaceholder(a) {
           return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
    }

    /**
     * Optimized internal one-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry1(fn) {
      return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
          return f1;
        } else {
          return fn.apply(this, arguments);
        }
      };
    }

    /**
     * Optimized internal two-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry2(fn) {
      return function f2(a, b) {
        switch (arguments.length) {
          case 0:
            return f2;
          case 1:
            return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
              return fn(a, _b);
            });
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b);
            }) : fn(a, b);
        }
      };
    }

    function _arity(n, fn) {
      /* eslint-disable no-unused-vars */
      switch (n) {
        case 0:
          return function () {
            return fn.apply(this, arguments);
          };
        case 1:
          return function (a0) {
            return fn.apply(this, arguments);
          };
        case 2:
          return function (a0, a1) {
            return fn.apply(this, arguments);
          };
        case 3:
          return function (a0, a1, a2) {
            return fn.apply(this, arguments);
          };
        case 4:
          return function (a0, a1, a2, a3) {
            return fn.apply(this, arguments);
          };
        case 5:
          return function (a0, a1, a2, a3, a4) {
            return fn.apply(this, arguments);
          };
        case 6:
          return function (a0, a1, a2, a3, a4, a5) {
            return fn.apply(this, arguments);
          };
        case 7:
          return function (a0, a1, a2, a3, a4, a5, a6) {
            return fn.apply(this, arguments);
          };
        case 8:
          return function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return fn.apply(this, arguments);
          };
        case 9:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return fn.apply(this, arguments);
          };
        case 10:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return fn.apply(this, arguments);
          };
        default:
          throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
      }
    }

    /**
     * Internal curryN function.
     *
     * @private
     * @category Function
     * @param {Number} length The arity of the curried function.
     * @param {Array} received An array of arguments received thus far.
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curryN(length, received, fn) {
      return function () {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while (combinedIdx < received.length || argsIdx < arguments.length) {
          var result;
          if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
            result = received[combinedIdx];
          } else {
            result = arguments[argsIdx];
            argsIdx += 1;
          }
          combined[combinedIdx] = result;
          if (!_isPlaceholder(result)) {
            left -= 1;
          }
          combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
      };
    }

    /**
     * Returns a curried equivalent of the provided function, with the specified
     * arity. The curried function has two unusual capabilities. First, its
     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.5.0
     * @category Function
     * @sig Number -> (* -> a) -> (* -> a)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curry
     * @example
     *
     *      const sumArgs = (...args) => R.sum(args);
     *
     *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
     *      const f = curriedAddFourNumbers(1, 2);
     *      const g = f(3);
     *      g(4); //=> 10
     */
    var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
      if (length === 1) {
        return _curry1(fn);
      }
      return _arity(length, _curryN(length, [], fn));
    });

    /**
     * Optimized internal three-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry3(fn) {
      return function f3(a, b, c) {
        switch (arguments.length) {
          case 0:
            return f3;
          case 1:
            return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            });
          case 2:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _curry1(function (_c) {
              return fn(a, b, _c);
            });
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
              return fn(_a, _b, c);
            }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b, c);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b, c);
            }) : _isPlaceholder(c) ? _curry1(function (_c) {
              return fn(a, b, _c);
            }) : fn(a, b, c);
        }
      };
    }

    /**
     * Tests whether or not an object is an array.
     *
     * @private
     * @param {*} val The object to test.
     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
     * @example
     *
     *      _isArray([]); //=> true
     *      _isArray(null); //=> false
     *      _isArray({}); //=> false
     */
    var _isArray = Array.isArray || function _isArray(val) {
      return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
    };

    function _isTransformer(obj) {
      return obj != null && typeof obj['@@transducer/step'] === 'function';
    }

    /**
     * Returns a function that dispatches with different strategies based on the
     * object in list position (last argument). If it is an array, executes [fn].
     * Otherwise, if it has a function with one of the given method names, it will
     * execute that function (functor case). Otherwise, if it is a transformer,
     * uses transducer [xf] to return a new transformer (transducer case).
     * Otherwise, it will default to executing [fn].
     *
     * @private
     * @param {Array} methodNames properties to check for a custom implementation
     * @param {Function} xf transducer to initialize if object is transformer
     * @param {Function} fn default ramda implementation
     * @return {Function} A function that dispatches on object in list position
     */
    function _dispatchable(methodNames, xf, fn) {
      return function () {
        if (arguments.length === 0) {
          return fn();
        }
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!_isArray(obj)) {
          var idx = 0;
          while (idx < methodNames.length) {
            if (typeof obj[methodNames[idx]] === 'function') {
              return obj[methodNames[idx]].apply(obj, args);
            }
            idx += 1;
          }
          if (_isTransformer(obj)) {
            var transducer = xf.apply(null, args);
            return transducer(obj);
          }
        }
        return fn.apply(this, arguments);
      };
    }

    var _xfBase = {
      init: function () {
        return this.xf['@@transducer/init']();
      },
      result: function (result) {
        return this.xf['@@transducer/result'](result);
      }
    };

    function _map(fn, functor) {
      var idx = 0;
      var len = functor.length;
      var result = Array(len);
      while (idx < len) {
        result[idx] = fn(functor[idx]);
        idx += 1;
      }
      return result;
    }

    function _isString(x) {
      return Object.prototype.toString.call(x) === '[object String]';
    }

    /**
     * Tests whether or not an object is similar to an array.
     *
     * @private
     * @category Type
     * @category List
     * @sig * -> Boolean
     * @param {*} x The object to test.
     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
     * @example
     *
     *      _isArrayLike([]); //=> true
     *      _isArrayLike(true); //=> false
     *      _isArrayLike({}); //=> false
     *      _isArrayLike({length: 10}); //=> false
     *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
     */
    var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
      if (_isArray(x)) {
        return true;
      }
      if (!x) {
        return false;
      }
      if (typeof x !== 'object') {
        return false;
      }
      if (_isString(x)) {
        return false;
      }
      if (x.nodeType === 1) {
        return !!x.length;
      }
      if (x.length === 0) {
        return true;
      }
      if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
      }
      return false;
    });

    var XWrap = /*#__PURE__*/function () {
      function XWrap(fn) {
        this.f = fn;
      }
      XWrap.prototype['@@transducer/init'] = function () {
        throw new Error('init not implemented on XWrap');
      };
      XWrap.prototype['@@transducer/result'] = function (acc) {
        return acc;
      };
      XWrap.prototype['@@transducer/step'] = function (acc, x) {
        return this.f(acc, x);
      };

      return XWrap;
    }();

    function _xwrap(fn) {
      return new XWrap(fn);
    }

    /**
     * Creates a function that is bound to a context.
     * Note: `R.bind` does not provide the additional argument-binding capabilities of
     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Function
     * @category Object
     * @sig (* -> *) -> {*} -> (* -> *)
     * @param {Function} fn The function to bind to context
     * @param {Object} thisObj The context to bind `fn` to
     * @return {Function} A function that will execute in the context of `thisObj`.
     * @see R.partial
     * @example
     *
     *      const log = R.bind(console.log, console);
     *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
     *      // logs {a: 2}
     * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
     */
    var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
      return _arity(fn.length, function () {
        return fn.apply(thisObj, arguments);
      });
    });

    function _arrayReduce(xf, acc, list) {
      var idx = 0;
      var len = list.length;
      while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        idx += 1;
      }
      return xf['@@transducer/result'](acc);
    }

    function _iterableReduce(xf, acc, iter) {
      var step = iter.next();
      while (!step.done) {
        acc = xf['@@transducer/step'](acc, step.value);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        step = iter.next();
      }
      return xf['@@transducer/result'](acc);
    }

    function _methodReduce(xf, acc, obj, methodName) {
      return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
    }

    var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

    function _reduce(fn, acc, list) {
      if (typeof fn === 'function') {
        fn = _xwrap(fn);
      }
      if (_isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
      }
      if (typeof list['fantasy-land/reduce'] === 'function') {
        return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
      }
      if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
      }
      if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
      }
      if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list, 'reduce');
      }

      throw new TypeError('reduce: list must be array or iterable');
    }

    var XMap = /*#__PURE__*/function () {
      function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
      }
      XMap.prototype['@@transducer/init'] = _xfBase.init;
      XMap.prototype['@@transducer/result'] = _xfBase.result;
      XMap.prototype['@@transducer/step'] = function (result, input) {
        return this.xf['@@transducer/step'](result, this.f(input));
      };

      return XMap;
    }();

    var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
      return new XMap(f, xf);
    });

    function _has(prop, obj) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var toString = Object.prototype.toString;
    var _isArguments = /*#__PURE__*/function () {
      return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
        return toString.call(x) === '[object Arguments]';
      } : function _isArguments(x) {
        return _has('callee', x);
      };
    }();

    // cover IE < 9 keys issues
    var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    // Safari bug
    var hasArgsEnumBug = /*#__PURE__*/function () {

      return arguments.propertyIsEnumerable('length');
    }();

    var contains = function contains(list, item) {
      var idx = 0;
      while (idx < list.length) {
        if (list[idx] === item) {
          return true;
        }
        idx += 1;
      }
      return false;
    };

    /**
     * Returns a list containing the names of all the enumerable own properties of
     * the supplied object.
     * Note that the order of the output array is not guaranteed to be consistent
     * across different JS platforms.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {k: v} -> [k]
     * @param {Object} obj The object to extract properties from
     * @return {Array} An array of the object's own properties.
     * @see R.keysIn, R.values
     * @example
     *
     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
     */
    var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) : /*#__PURE__*/_curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });

    /**
     * Takes a function and
     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
     * applies the function to each of the functor's values, and returns
     * a functor of the same shape.
     *
     * Ramda provides suitable `map` implementations for `Array` and `Object`,
     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
     *
     * Dispatches to the `map` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * Also treats functions as functors and will compose them together.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => (a -> b) -> f a -> f b
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {Array} list The list to be iterated over.
     * @return {Array} The new list.
     * @see R.transduce, R.addIndex
     * @example
     *
     *      const double = x => x * 2;
     *
     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
     *
     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
     * @symb R.map(f, [a, b]) = [f(a), f(b)]
     * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
     * @symb R.map(f, functor_o) = functor_o.map(f)
     */
    var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
      switch (Object.prototype.toString.call(functor)) {
        case '[object Function]':
          return curryN(functor.length, function () {
            return fn.call(this, functor.apply(this, arguments));
          });
        case '[object Object]':
          return _reduce(function (acc, key) {
            acc[key] = fn(functor[key]);
            return acc;
          }, {}, keys(functor));
        default:
          return _map(fn, functor);
      }
    }));

    /**
     * Retrieve the value at a given path.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> {a} -> a | Undefined
     * @param {Array} path The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @see R.prop
     * @example
     *
     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
     */
    var path = /*#__PURE__*/_curry2(function path(paths, obj) {
      var val = obj;
      var idx = 0;
      while (idx < paths.length) {
        if (val == null) {
          return;
        }
        val = val[paths[idx]];
        idx += 1;
      }
      return val;
    });

    /**
     * Returns a function that when supplied an object returns the indicated
     * property of that object, if it exists.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig s -> {s: a} -> a | Undefined
     * @param {String} p The property name
     * @param {Object} obj The object to query
     * @return {*} The value at `obj.p`.
     * @see R.path
     * @example
     *
     *      R.prop('x', {x: 100}); //=> 100
     *      R.prop('x', {}); //=> undefined
     *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
     */

    var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
      return path([p], obj);
    });

    /**
     * Returns a single item by iterating through the list, successively calling
     * the iterator function and passing it an accumulator value and the current
     * value from the array, and then passing the result to the next call.
     *
     * The iterator function receives two values: *(acc, value)*. It may use
     * [`R.reduced`](#reduced) to shortcut the iteration.
     *
     * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
     * is *(value, acc)*.
     *
     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
     * arrays), unlike the native `Array.prototype.reduce` method. For more details
     * on this behavior, see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
     *
     * Dispatches to the `reduce` method of the third argument, if present. When
     * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
     * shortcuting, as this is not implemented by `reduce`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
     *        current element from the array.
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduced, R.addIndex, R.reduceRight
     * @example
     *
     *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
     *      //          -               -10
     *      //         / \              / \
     *      //        -   4           -6   4
     *      //       / \              / \
     *      //      -   3   ==>     -3   3
     *      //     / \              / \
     *      //    -   2           -1   2
     *      //   / \              / \
     *      //  0   1            0   1
     *
     * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
     */
    var reduce = /*#__PURE__*/_curry3(_reduce);

    /**
     * Gives a single-word string description of the (native) type of a value,
     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
     * attempt to distinguish user Object types any further, reporting them all as
     * 'Object'.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Type
     * @sig (* -> {*}) -> String
     * @param {*} val The value to test
     * @return {String}
     * @example
     *
     *      R.type({}); //=> "Object"
     *      R.type(1); //=> "Number"
     *      R.type(false); //=> "Boolean"
     *      R.type('s'); //=> "String"
     *      R.type(null); //=> "Null"
     *      R.type([]); //=> "Array"
     *      R.type(/[A-z]/); //=> "RegExp"
     *      R.type(() => {}); //=> "Function"
     *      R.type(undefined); //=> "Undefined"
     */
    var type = /*#__PURE__*/_curry1(function type(val) {
      return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
    });

    function _pipe(f, g) {
      return function () {
        return g.call(this, f.apply(this, arguments));
      };
    }

    /**
     * This checks whether a function has a [methodname] function. If it isn't an
     * array it will execute that function otherwise it will default to the ramda
     * implementation.
     *
     * @private
     * @param {Function} fn ramda implemtation
     * @param {String} methodname property to check for a custom implementation
     * @return {Object} Whatever the return value of the method is.
     */
    function _checkForMethod(methodname, fn) {
      return function () {
        var length = arguments.length;
        if (length === 0) {
          return fn();
        }
        var obj = arguments[length - 1];
        return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
      };
    }

    /**
     * Returns the elements of the given list or string (or object with a `slice`
     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
     *
     * Dispatches to the `slice` method of the third argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.4
     * @category List
     * @sig Number -> Number -> [a] -> [a]
     * @sig Number -> Number -> String -> String
     * @param {Number} fromIndex The start index (inclusive).
     * @param {Number} toIndex The end index (exclusive).
     * @param {*} list
     * @return {*}
     * @example
     *
     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
     */
    var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
      return Array.prototype.slice.call(list, fromIndex, toIndex);
    }));

    /**
     * Returns all but the first element of the given list or string (or object
     * with a `tail` method).
     *
     * Dispatches to the `slice` method of the first argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {*} list
     * @return {*}
     * @see R.head, R.init, R.last
     * @example
     *
     *      R.tail([1, 2, 3]);  //=> [2, 3]
     *      R.tail([1, 2]);     //=> [2]
     *      R.tail([1]);        //=> []
     *      R.tail([]);         //=> []
     *
     *      R.tail('abc');  //=> 'bc'
     *      R.tail('ab');   //=> 'b'
     *      R.tail('a');    //=> ''
     *      R.tail('');     //=> ''
     */
    var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));

    /**
     * Performs left-to-right function composition. The leftmost function may have
     * any arity; the remaining functions must be unary.
     *
     * In some libraries this function is named `sequence`.
     *
     * **Note:** The result of pipe is not automatically curried.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
     * @param {...Function} functions
     * @return {Function}
     * @see R.compose
     * @example
     *
     *      const f = R.pipe(Math.pow, R.negate, R.inc);
     *
     *      f(3, 4); // -(3^4) + 1
     * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
     */
    function pipe() {
      if (arguments.length === 0) {
        throw new Error('pipe requires at least one argument');
      }
      return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
    }

    /**
     * Returns a new list or string with the elements or characters in reverse
     * order.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {Array|String} list
     * @return {Array|String}
     * @example
     *
     *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
     *      R.reverse([1, 2]);     //=> [2, 1]
     *      R.reverse([1]);        //=> [1]
     *      R.reverse([]);         //=> []
     *
     *      R.reverse('abc');      //=> 'cba'
     *      R.reverse('ab');       //=> 'ba'
     *      R.reverse('a');        //=> 'a'
     *      R.reverse('');         //=> ''
     */
    var reverse = /*#__PURE__*/_curry1(function reverse(list) {
      return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
    });

    /**
     * Performs right-to-left function composition. The rightmost function may have
     * any arity; the remaining functions must be unary.
     *
     * **Note:** The result of compose is not automatically curried.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
     * @param {...Function} ...functions The functions to compose
     * @return {Function}
     * @see R.pipe
     * @example
     *
     *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
     *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
     *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
     *
     *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
     *
     * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
     */
    function compose() {
      if (arguments.length === 0) {
        throw new Error('compose requires at least one argument');
      }
      return pipe.apply(this, reverse(arguments));
    }

    function _arrayFromIterator(iter) {
      var list = [];
      var next;
      while (!(next = iter.next()).done) {
        list.push(next.value);
      }
      return list;
    }

    function _includesWith(pred, x, list) {
      var idx = 0;
      var len = list.length;

      while (idx < len) {
        if (pred(x, list[idx])) {
          return true;
        }
        idx += 1;
      }
      return false;
    }

    function _functionName(f) {
      // String(x => x) evaluates to "x => x", so the pattern may not match.
      var match = String(f).match(/^function (\w*)/);
      return match == null ? '' : match[1];
    }

    // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    function _objectIs(a, b) {
      // SameValue algorithm
      if (a === b) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return a !== 0 || 1 / a === 1 / b;
      } else {
        // Step 6.a: NaN == NaN
        return a !== a && b !== b;
      }
    }

    var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

    /**
     * private _uniqContentEquals function.
     * That function is checking equality of 2 iterator contents with 2 assumptions
     * - iterators lengths are the same
     * - iterators values are unique
     *
     * false-positive result will be returned for comparision of, e.g.
     * - [1,2,3] and [1,2,3,4]
     * - [1,1,1] and [1,2,3]
     * */

    function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
      var a = _arrayFromIterator(aIterator);
      var b = _arrayFromIterator(bIterator);

      function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
      }

      // if *a* array contains any element that is not included in *b*
      return !_includesWith(function (b, aItem) {
        return !_includesWith(eq, aItem, b);
      }, b, a);
    }

    function _equals(a, b, stackA, stackB) {
      if (_objectIs$1(a, b)) {
        return true;
      }

      var typeA = type(a);

      if (typeA !== type(b)) {
        return false;
      }

      if (a == null || b == null) {
        return false;
      }

      if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
        return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
      }

      if (typeof a.equals === 'function' || typeof b.equals === 'function') {
        return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
      }

      switch (typeA) {
        case 'Arguments':
        case 'Array':
        case 'Object':
          if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
            return a === b;
          }
          break;
        case 'Boolean':
        case 'Number':
        case 'String':
          if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
            return false;
          }
          break;
        case 'Date':
          if (!_objectIs$1(a.valueOf(), b.valueOf())) {
            return false;
          }
          break;
        case 'Error':
          return a.name === b.name && a.message === b.message;
        case 'RegExp':
          if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
            return false;
          }
          break;
      }

      var idx = stackA.length - 1;
      while (idx >= 0) {
        if (stackA[idx] === a) {
          return stackB[idx] === b;
        }
        idx -= 1;
      }

      switch (typeA) {
        case 'Map':
          if (a.size !== b.size) {
            return false;
          }

          return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
        case 'Set':
          if (a.size !== b.size) {
            return false;
          }

          return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
        case 'Arguments':
        case 'Array':
        case 'Object':
        case 'Boolean':
        case 'Number':
        case 'String':
        case 'Date':
        case 'Error':
        case 'RegExp':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'ArrayBuffer':
          break;
        default:
          // Values of other types are only equal if identical.
          return false;
      }

      var keysA = keys(a);
      if (keysA.length !== keys(b).length) {
        return false;
      }

      var extendedStackA = stackA.concat([a]);
      var extendedStackB = stackB.concat([b]);

      idx = keysA.length - 1;
      while (idx >= 0) {
        var key = keysA[idx];
        if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
          return false;
        }
        idx -= 1;
      }
      return true;
    }

    /**
     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
     * cyclical data structures.
     *
     * Dispatches symmetrically to the `equals` methods of both arguments, if
     * present.
     *
     * @func
     * @memberOf R
     * @since v0.15.0
     * @category Relation
     * @sig a -> b -> Boolean
     * @param {*} a
     * @param {*} b
     * @return {Boolean}
     * @example
     *
     *      R.equals(1, 1); //=> true
     *      R.equals(1, '1'); //=> false
     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
     *
     *      const a = {}; a.v = a;
     *      const b = {}; b.v = b;
     *      R.equals(a, b); //=> true
     */
    var equals = /*#__PURE__*/_curry2(function equals(a, b) {
      return _equals(a, b, [], []);
    });

    function _filter(fn, list) {
      var idx = 0;
      var len = list.length;
      var result = [];

      while (idx < len) {
        if (fn(list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    }

    function _isObject(x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    }

    var XFilter = /*#__PURE__*/function () {
      function XFilter(f, xf) {
        this.xf = xf;
        this.f = f;
      }
      XFilter.prototype['@@transducer/init'] = _xfBase.init;
      XFilter.prototype['@@transducer/result'] = _xfBase.result;
      XFilter.prototype['@@transducer/step'] = function (result, input) {
        return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
      };

      return XFilter;
    }();

    var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
      return new XFilter(f, xf);
    });

    /**
     * Takes a predicate and a `Filterable`, and returns a new filterable of the
     * same type containing the members of the given filterable which satisfy the
     * given predicate. Filterable objects include plain objects or any object
     * that has a filter method such as `Array`.
     *
     * Dispatches to the `filter` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Filterable f => (a -> Boolean) -> f a -> f a
     * @param {Function} pred
     * @param {Array} filterable
     * @return {Array} Filterable
     * @see R.reject, R.transduce, R.addIndex
     * @example
     *
     *      const isEven = n => n % 2 === 0;
     *
     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
     *
     *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
     */
    var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
      return _isObject(filterable) ? _reduce(function (acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
      // else
      _filter(pred, filterable);
    }));

    function checkPrimes(num) {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
      }
      return true
    }

    function level1() {
      /* Level 1 */
      const ex1 = 'use map to cube (n³) each value and return';
      const exercise1 = _ => {
        const numbers = [3, 6, 9, 12, 15, 18];
        return map(num => num ** 3, numbers)
      };

      const ex2 = 'use filter to only return numbers divisible by 6';
      const exercise2 = _ => {
        const numbers = [28, 42, 55, 66, 72, 84, 93];
        return filter(num => num % 6 === 0, numbers)
      };

      const ex3 = 'use reduce to sum the numbers';
      const exercise3 = _ => {
        const numbers = [10, 20, 30, 40, 50, 60];
        return reduce((acc, num) => acc + num, 0, numbers)
      };

      const ex4 = `use compose to run the following three commands

1. map over the numbers and triple each number
2. use filter and keep the even numbers
3. use reduce to add the resulting numbers
`;
      const exercise4 = _ => {
        const numbers = [1, 3, 6, 10, 13, 16];
        const tripler = map(num => num * 3);
        const evens = filter(num => num % 2 === 0);
        const adder = reduce((acc, num) => acc + num, 0);
        const result = compose(
          adder,
          evens,
          tripler
        );
        return result(numbers)
      };

      const ex5 = 'Use map to find the square root of each number';
      const exercise5 = _ => {
        const numbers = [9, 16, 25, 36, 49, 64, 81];
        return map(num => Math.sqrt(num), numbers)
      };

      const ex6 = 'use filter to return numbers between 10 and 20';
      const exercise6 = _ => {
        const numbers = [1, 5, 6, 3, 10, 12, 18, 21, 28, 34, 39, 45];
        return filter(num => num > 10 && num < 20, numbers)
      };

      const ex7 = `use compose and the checkPrimes function to run the following three commands:

  1. Use map to subtract 1 from each numbers
  2. Use filter to return all prime numbers.
  3. Use reduce to count the number of prime numbers in the array.

  ** If you have time at the end, try and figure out how to take the
     checkPrimes formula and write it functionally into your compose **
  `;
      const exercise7 = _ => {
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const minusOne = map(num => num - 1);
        const primer = filter(checkPrimes);
        const counter = reduce((acc, num) => (acc = acc + 1), 0);
        const result = compose(
          counter,
          primer,
          minusOne
        );
        return result(numbers)
      };

      /* tests to validate exercises go here */
      test('Level 1', assert => {
        assert.same(exercise1(), [27, 216, 729, 1728, 3375, 5832], ex1);
        assert.same(exercise2(), [42, 66, 72, 84], ex2);
        assert.same(exercise3(), 210, ex3);
        assert.same(exercise4(), 96, ex4);
        assert.same(exercise5(), [3, 4, 5, 6, 7, 8, 9], ex5);
        assert.same(exercise6(), [12, 18], ex6);
        assert.same(exercise7(), 5, ex7);
      });
    }

    const clients = [
      {
        age: 22,
        eyeColor: 'green',
        name: {
          firstName: 'Horne',
          lastName: 'Hahn'
        },
        gender: 'male',
        email: 'hornehahn@vidto.com',
        phone: '+1 (803) 528-3269',
        address: {
          street: '494 Bayview Place',
          city: 'Chesterfield',
          state: 'Nebraska',
          zip: 84643
        },
        registered: '2014-04-13T12:10:25 +04:00'
      },
      {
        age: 25,
        eyeColor: 'green',
        name: {
          firstName: 'Rhodes',
          lastName: 'Harvey'
        },
        gender: 'male',
        email: 'rhodesharvey@vidto.com',
        phone: '+1 (975) 583-2319',
        address: {
          street: '705 Legion Street',
          city: 'Herald',
          state: 'Idaho',
          zip: 63136
        },
        registered: '2015-03-24T11:02:46 +04:00'
      },
      {
        age: 40,
        eyeColor: 'green',
        name: {
          firstName: 'Concetta',
          lastName: 'Talley'
        },
        gender: 'female',
        email: 'concettatalley@vidto.com',
        phone: '+1 (807) 538-2667',
        address: {
          street: '7245 3rd Ave',
          city: 'Pickens',
          state: 'South Carolina',
          zip: 28745
        },
        registered: '2015-09-19T12:40:05 +04:00'
      },
      {
        age: 26,
        eyeColor: 'green',
        name: {
          firstName: 'Sandra',
          lastName: 'Hogan'
        },
        gender: 'female',
        email: 'sandrahogan@vidto.com',
        phone: '+1 (987) 568-2357',
        address: {
          street: '332 Junius Street',
          city: 'Cheyenne',
          state: 'Wyoming',
          zip: 37564
        },
        registered: '2015-03-18T11:57:49 +04:00'
      },
      {
        age: 27,
        eyeColor: 'blue',
        name: {
          firstName: 'Butler',
          lastName: 'Flynn'
        },
        gender: 'male',
        email: 'butlerflynn@vidto.com',
        phone: '+1 (993) 588-3113',
        address: {
          street: '342 Gelston Avenue',
          city: 'Asheville',
          state: 'North Carolina',
          zip: 28801
        },
        registered: '2017-10-02T06:08:32 +04:00'
      },
      {
        age: 27,
        eyeColor: 'blue',
        name: {
          firstName: 'Hurst',
          lastName: 'Adkins'
        },
        gender: 'male',
        email: 'hurstadkins@vidto.com',
        phone: '+1 (955) 490-2739',
        address: {
          street: '874 Delvana Street',
          city: 'Nanafilda',
          state: 'Wyoming',
          zip: 98647
        },
        registered: '2015-02-01T11:16:26 +05:00'
      }
    ];

    function level2() {
      /* Level 2 - colors */

      const ex1 =
        'Use map to return a concatenated first and last name of each client.';
      const exercise1 = _ => {
        return map(client => {
          return `${path(['name', 'firstName'], client)} ${path(
        ['name', 'lastName'],
        client
      )}`
        }, clients)
      };

      const ex2 = 'Use filter to return clients from Wyoming';
      const exercise2 = _ => {
        return filter(
          client => path(['address', 'state'], client) === 'Wyoming',
          clients
        )
      };

      const ex3 = 'Use reduce to count the number of people with green eyes ';
      const exercise3 = _ => {
        return reduce(
          (acc, client) => {
            if (prop('eyeColor', client) === 'green') {
              acc = acc + 1;
            }
            return acc
          },
          0,
          clients
        )
      };

      const ex4 = `Use map, filter and reduce with compose to return the full name (as a string) of the female from Wyoming. `;
      const exercise4 = _ => {
        const displayName = reduce((acc, client) => acc + client, '');
        const getName = map(client => {
          return `${path(['name', 'firstName'], client)} ${path(
        ['name', 'lastName'],
        client
      )}`
        });
        const isFemaleWyoming = filter(
          client =>
            prop('gender', client) === 'female' &&
            path(['address', 'state'], client) === 'Wyoming'
        );
        const result = compose(
          displayName,
          getName,
          isFemaleWyoming
        );
        return result(clients)
      };

      const ex5 =
        'Use map and filter to return the full address of the clients living in North Carolina';
      const exercise5 = _ => {
        const getAddress = map(
          client =>
            `${client.address.street} ${client.address.city}, ${client.address.state} ${client.address.zip}`
        );
        const isFromNC = filter(
          client => path(['address', 'state'], client) === 'North Carolina'
        );
        const result = compose(
          getAddress,
          isFromNC
        );
        return result(clients)
      };

      const ex6 = 'use filter to remove anyone over the age of 25';
      const exercise6 = _ => {
        return filter(client => prop('age', client) <= 25, clients)
      };

      const ex7 =
        'use reduce to count the number of males, age 22 - 27, who have green eyes';
      const exercise7 = _ => {
        return reduce(
          (acc, client) => {
            if (
              client.gender === 'male' &&
              client.eyeColor === 'green' &&
              client.age >= 22 &&
              client.age <= 27
            ) {
              acc = acc + 1;
            }
            return acc
          },
          0,
          clients
        )
      };

      /* tests to validate exercises go here */
      test('test', assert => {
        assert.same(
          exercise1(),
          [
            'Horne Hahn',
            'Rhodes Harvey',
            'Concetta Talley',
            'Sandra Hogan',
            'Butler Flynn',
            'Hurst Adkins'
          ],
          ex1
        );
        assert.same(
          exercise2(),
          [
            {
              age: 26,
              eyeColor: 'green',
              name: {
                firstName: 'Sandra',
                lastName: 'Hogan'
              },
              gender: 'female',
              email: 'sandrahogan@vidto.com',
              phone: '+1 (987) 568-2357',
              address: {
                street: '332 Junius Street',
                city: 'Cheyenne',
                state: 'Wyoming',
                zip: 37564
              },
              registered: '2015-03-18T11:57:49 +04:00'
            },
            {
              age: 27,
              eyeColor: 'blue',
              name: {
                firstName: 'Hurst',
                lastName: 'Adkins'
              },
              gender: 'male',
              email: 'hurstadkins@vidto.com',
              phone: '+1 (955) 490-2739',
              address: {
                street: '874 Delvana Street',
                city: 'Nanafilda',
                state: 'Wyoming',
                zip: 98647
              },
              registered: '2015-02-01T11:16:26 +05:00'
            }
          ],
          ex2
        );
        assert.same(exercise3(), 4, ex3);
        assert.same(exercise4(), 'Sandra Hogan', ex4);
        assert.same(
          exercise5(),
          ['342 Gelston Avenue Asheville, North Carolina 28801'],
          ex5
        );
        assert.same(
          exercise6(),
          [
            {
              age: 22,
              eyeColor: 'green',
              name: {
                firstName: 'Horne',
                lastName: 'Hahn'
              },
              gender: 'male',
              email: 'hornehahn@vidto.com',
              phone: '+1 (803) 528-3269',
              address: {
                street: '494 Bayview Place',
                city: 'Chesterfield',
                state: 'Nebraska',
                zip: 84643
              },
              registered: '2014-04-13T12:10:25 +04:00'
            },
            {
              age: 25,
              eyeColor: 'green',
              name: {
                firstName: 'Rhodes',
                lastName: 'Harvey'
              },
              gender: 'male',
              email: 'rhodesharvey@vidto.com',
              phone: '+1 (975) 583-2319',
              address: {
                street: '705 Legion Street',
                city: 'Herald',
                state: 'Idaho',
                zip: 63136
              },
              registered: '2015-03-24T11:02:46 +04:00'
            }
          ],
          ex6
        ),
          assert.same(exercise7(), 2, ex7);
      });
    }

    function capitalizeWords(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }

    const cars = [
      {
        model: 'silverado',
        make: 'chevy',
        engine: 'V8',
        color: 'black',
        year: 1999,
        salesPrice: 29000
      },
      {
        model: 'grand prix',
        make: 'pontiac',
        engine: 'V6',
        color: 'red',
        year: 2001,
        salesPrice: 32000
      },
      {
        model: 'deville',
        make: 'cadillac',
        engine: 'V8',
        color: 'brown',
        year: 2002,
        salesPrice: 36000
      },
      {
        model: 'land cruiser',
        make: 'toyota',
        engine: 'V8',
        color: 'black',
        year: 2001,
        salesPrice: 40000
      },
      {
        model: 'civic',
        make: 'honda',
        engine: 'V4',
        color: 'silver',
        year: 2004,
        salesPrice: 29000
      },
      {
        model: 'sierra',
        make: 'GMC',
        engine: 'V8',
        color: 'navy',
        year: 2006,
        salesPrice: 30000
      }
    ];

    /* Level 3 - Paintings */
    function level3() {
      const ex1 =
        'Use map to transform the list of auto models to uppercase the first letter of each word';
      const exercise1 = _ => {
        return map(car => capitalizeWords(prop('model', car)), cars)
      };

      const ex2 = 'Use filter to return a list of cars made between 2001-2004';
      const exercise2 = _ => {
        return filter(
          car => prop('year', car) >= 2001 && prop('year', car) <= 2004,
          cars
        )
      };

      const ex3 =
        'Use reduce to count the number of cars that were made in the 2000s';
      const exercise3 = _ => {
        return reduce(
          (acc, car) => {
            if (prop('year', car) >= 2000) {
              acc = acc + 1;
            }
            return acc
          },
          0,
          cars
        )
      };

      const ex4 =
        'Use map, filter and reduce with compose to return the price of the the most expensive car from the 2000s ';
      const exercise4 = _ => {
        const getBiggestPrice = reduce((acc, car) => {
          if (car > acc) {
            acc = car;
          }
          return acc
        }, 0);
        const getAllPrices = map(car => prop('salesPrice', car));
        const from2000 = filter(car => prop('year', car) >= 2000);
        const result = compose(
          getBiggestPrice,
          getAllPrices,
          from2000
        );
        return result(cars)
      };
      const exercise5 = _ => {
        return map(
          car =>
            prop('salesPrice', car).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
          cars
        )
      };

      const ex6 = `Use compose and filter to return cars with V8s, map over them and return the names of the cars with the first letter capitalized.`;

      const exercise6 = _ => {
        const v8Finder = filter(car => prop('engine', car) === 'V8');
        const nameTransformer = map(car => capitalizeWords(car.model));
        const result = compose(
          nameTransformer,
          v8Finder
        );
        return result(cars)
      };

      /* tests to validate exercises go here */
      test('test', assert => {
        assert.same(
          exercise1(),
          ['Silverado', 'Grand Prix', 'Deville', 'Land Cruiser', 'Civic', 'Sierra'],
          ex1
        );

        assert.same(
          exercise2(),
          [
            {
              model: 'grand prix',
              make: 'pontiac',
              engine: 'V6',
              color: 'red',
              year: 2001,
              salesPrice: 32000
            },
            {
              model: 'deville',
              make: 'cadillac',
              engine: 'V8',
              color: 'brown',
              year: 2002,
              salesPrice: 36000
            },
            {
              model: 'land cruiser',
              make: 'toyota',
              engine: 'V8',
              color: 'black',
              year: 2001,
              salesPrice: 40000
            },
            {
              model: 'civic',
              make: 'honda',
              engine: 'V4',
              color: 'silver',
              year: 2004,
              salesPrice: 29000
            }
          ],
          ex2
        );
        assert.same(exercise3(), 5, ex3);
        assert.same(exercise4(), 40000, ex4);
        assert.same(exercise5(), [
          '$29,000.00',
          '$32,000.00',
          '$36,000.00',
          '$40,000.00',
          '$29,000.00',
          '$30,000.00'
        ]);
        assert.same(
          exercise6(),
          ['Silverado', 'Deville', 'Land Cruiser', 'Sierra'],
          ex6
        );
      });
    }

    assert.same = (a, b, msg) => {
      const result = equals(a, b);
      if (!result) {
        console.log('<<<<<<<test>>>>>>>');
        console.log('test - ', msg);
        console.log(`expected: ${JSON.stringify(b)}`);
        console.log('actual: ', JSON.stringify(a));
      }
      assert.ok(equals(a, b), msg);
    };

    level3();
    level2();
    level1();

    window.test = test;
    tapBrowserColor();

    console.log('Welcome to Cybertron\n');

}());
