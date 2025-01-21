
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire55a1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire55a1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("8HQfp", function(module, exports) {

$parcel$export(module.exports, "_", () => (parcelRequire("39J5i")).__decorate);

var $39J5i = parcelRequire("39J5i");

});
parcelRegister("39J5i", function(module, exports) {

$parcel$export(module.exports, "__decorate", () => $24c52f343453d62d$export$29e00dfd3077644b);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92
};

});


parcelRegister("j0ZcV", function(module, exports) {
$parcel$export(module.exports, "css", () => (parcelRequire("j8KxL")).css);
$parcel$export(module.exports, "html", () => (parcelRequire("l56HR")).html);
$parcel$export(module.exports, "LitElement", () => (parcelRequire("eGUNk")).LitElement);
$parcel$export(module.exports, "nothing", () => (parcelRequire("l56HR")).nothing);
parcelRequire("2emM7");
parcelRequire("l56HR");
parcelRequire("eGUNk");
parcelRequire("dJV7N");

});
parcelRegister("2emM7", function(module, exports) {

$parcel$export(module.exports, "defaultConverter", () => $19fe8e3abedf4df0$export$7312b35fbf521afb);
$parcel$export(module.exports, "notEqual", () => $19fe8e3abedf4df0$export$53a6892c50694894);
$parcel$export(module.exports, "ReactiveElement", () => $19fe8e3abedf4df0$export$c7c07a37856565d);
$parcel$export(module.exports, "css", () => (parcelRequire("j8KxL")).css);

var $j8KxL = parcelRequire("j8KxL");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $j8KxL.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, $j8KxL.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $j8KxL.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");

});
parcelRegister("j8KxL", function(module, exports) {

$parcel$export(module.exports, "css", () => $def2de46b9306e8a$export$dbf350e5966cf602);
$parcel$export(module.exports, "adoptStyles", () => $def2de46b9306e8a$export$2ca4a66ec4cecb90);
$parcel$export(module.exports, "getCompatibleStyle", () => $def2de46b9306e8a$export$ee69dfd951e24778);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;

});


parcelRegister("l56HR", function(module, exports) {

$parcel$export(module.exports, "html", () => $f58f44579a4747ac$export$c0bb0b647f701bb5);
$parcel$export(module.exports, "noChange", () => $f58f44579a4747ac$export$9c068ae9cc5db4e8);
$parcel$export(module.exports, "nothing", () => $f58f44579a4747ac$export$45b790e32b2810ee);
$parcel$export(module.exports, "render", () => $f58f44579a4747ac$export$b3890eb0ae9dca99);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$E = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$P(t, s);
        if (this.el = $f58f44579a4747ac$var$V.createElement(f, n), $f58f44579a4747ac$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$k : "?" === e[1] ? $f58f44579a4747ac$var$H : "@" === e[1] ? $f58f44579a4747ac$var$I : $f58f44579a4747ac$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$N(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$E.currentNode = e;
        let h = $f58f44579a4747ac$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$E.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$E.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$V.createElement($f58f44579a4747ac$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.S($f58f44579a4747ac$var$l()), this.S($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$N(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$N(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$N(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$N(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    P: $f58f44579a4747ac$var$e,
    A: $f58f44579a4747ac$var$h,
    C: $f58f44579a4747ac$var$o,
    M: 1,
    L: $f58f44579a4747ac$var$P,
    R: $f58f44579a4747ac$var$S,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$N,
    I: $f58f44579a4747ac$var$M,
    H: $f58f44579a4747ac$var$R,
    N: $f58f44579a4747ac$var$H,
    U: $f58f44579a4747ac$var$I,
    B: $f58f44579a4747ac$var$k,
    F: $f58f44579a4747ac$var$L
}, $f58f44579a4747ac$var$Z = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$Z?.($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.1.2");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

});

parcelRegister("eGUNk", function(module, exports) {
$parcel$export(module.exports, "css", () => (parcelRequire("j8KxL")).css);
$parcel$export(module.exports, "ReactiveElement", () => (parcelRequire("2emM7")).ReactiveElement);
$parcel$export(module.exports, "html", () => (parcelRequire("l56HR")).html);
$parcel$export(module.exports, "noChange", () => (parcelRequire("l56HR")).noChange);
$parcel$export(module.exports, "nothing", () => (parcelRequire("l56HR")).nothing);
$parcel$export(module.exports, "render", () => (parcelRequire("l56HR")).render);

$parcel$export(module.exports, "LitElement", () => $ab210b2da7b39b9d$export$3f2f9f5909897157);

var $2emM7 = parcelRequire("2emM7");

var $l56HR = parcelRequire("l56HR");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $2emM7.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $l56HR.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $l56HR.noChange;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$r = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$r?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.0.4");

});

parcelRegister("dJV7N", function(module, exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;

});


parcelRegister("1ZxoT", function(module, exports) {
$parcel$export(module.exports, "customElement", () => (parcelRequire("1KSgR")).customElement);
$parcel$export(module.exports, "property", () => (parcelRequire("dsTCw")).property);
$parcel$export(module.exports, "state", () => (parcelRequire("pklEb")).state);
parcelRequire("1KSgR");
parcelRequire("dsTCw");
parcelRequire("pklEb");
parcelRequire("fsW8U");
parcelRequire("e0PuK");
parcelRequire("kmDQA");
parcelRequire("k7g5J");
parcelRequire("7p6n6");
parcelRequire("9PNfg");

});
parcelRegister("1KSgR", function(module, exports) {

$parcel$export(module.exports, "customElement", () => $14742f68afc766d6$export$da64fc29f17f9d0e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };

});

parcelRegister("dsTCw", function(module, exports) {

$parcel$export(module.exports, "property", () => $9cd908ed2625c047$export$d541bacb2bda4494);

var $2emM7 = parcelRequire("2emM7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $2emM7.defaultConverter),
    reflect: !1,
    hasChanged: (0, $2emM7.notEqual)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}

});

parcelRegister("pklEb", function(module, exports) {

$parcel$export(module.exports, "state", () => $04c21ea1ce1f6057$export$ca000e230c0caa3e);

var $dsTCw = parcelRequire("dsTCw");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $dsTCw.property)({
        ...r,
        state: !0,
        attribute: !1
    });
}

});

parcelRegister("fsW8U", function(module, exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}

});

parcelRegister("e0PuK", function(module, exports) {

var $3fOhc = parcelRequire("3fOhc");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $3fOhc.desc)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $3fOhc.desc)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}

});
parcelRegister("3fOhc", function(module, exports) {

$parcel$export(module.exports, "desc", () => $25e9c5a8f7ecfc69$export$51987bb50e1f6752);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);

});


parcelRegister("kmDQA", function(module, exports) {

var $3fOhc = parcelRequire("3fOhc");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $3fOhc.desc)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}

});

parcelRegister("k7g5J", function(module, exports) {

var $3fOhc = parcelRequire("3fOhc");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $3fOhc.desc)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}

});

parcelRegister("7p6n6", function(module, exports) {

var $3fOhc = parcelRequire("3fOhc");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $3fOhc.desc)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}

});

parcelRegister("9PNfg", function(module, exports) {

var $3fOhc = parcelRequire("3fOhc");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $3fOhc.desc)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}

});


parcelRegister("gjUL4", function(module, exports) {

$parcel$export(module.exports, "getLanguage", () => $8ae640dd6c4226ad$export$64783e31db14f0ba);
$parcel$export(module.exports, "translateTo", () => $8ae640dd6c4226ad$export$df5de7d5c552d075);
const $8ae640dd6c4226ad$var$defaultLang = `en-US`;
const $8ae640dd6c4226ad$var$defaultTranslation = {
    entity_missing: "Entity data missing",
    line: "Line",
    destination: "Destination",
    departure: "Departure",
    min: "min",
    last_updated: "Last updated",
    now: "Now",
    // configuration translations
    editor_show_name: "Show card name",
    editor_entities: "Entities",
    editor_departures: "Departures",
    editor_title: "Card name",
    editor_show_entity_name: "Show entity name",
    editor_show_departures: "Show departures",
    editor_show_header: "Show departure header",
    editor_show_transport_icon: "Show transport icon",
    editor_max_departures: "Maximum departures to show",
    editor_hide_departed: "Hide already departed",
    editor_show_departed_offeset: "... but show departed number of minutes ago",
    editor_show_time_always: "Always show departure time in HH:MM form",
    editor_show_updated: `Show 'Last Updated'`,
    editor_direction: `Direction filter`,
    editor_direction_all: `All`,
    editor_direction_left: `Left`,
    editor_direction_right: `Right`,
    language: "Language"
};
const $8ae640dd6c4226ad$export$150b732325d14d04 = {
    [$8ae640dd6c4226ad$var$defaultLang]: $8ae640dd6c4226ad$var$defaultTranslation,
    "sv-SE": {
        entity_missing: "Ingen data hittades",
        line: "Linje",
        destination: "Till",
        departure: "Avresa",
        min: "min",
        last_updated: "Senast uppdaterad",
        now: "Nu",
        editor_show_name: "Visa kortnamn",
        editor_entities: "Enheter",
        editor_departures: "Avg\xe5ngar",
        editor_title: "Kortnamn",
        editor_show_entity_name: "Visa enhetsnamn",
        editor_show_departures: "Visa avg\xe5ngar",
        editor_show_header: "Visa avg\xe5ngshuvud",
        editor_show_transport_icon: "Visa transportikon",
        editor_max_departures: "Max antal avg\xe5ngar",
        editor_hide_departed: "D\xf6lj redan avg\xe5ngna",
        editor_show_departed_offeset: "... men visa avg\xe5ngna f\xf6r antal minuter sedan",
        editor_show_time_always: "Visa alltid avg\xe5ngstid i HH:MM-form",
        editor_show_updated: `Visa 'Senast uppdaterad'`,
        editor_direction: `Riktning filter`,
        editor_direction_all: `Alla`,
        editor_direction_left: `V\xe4nster`,
        editor_direction_right: `H\xf6ger`,
        language: "Spr\xe5k"
    },
    "fr-FR": {
        entity_missing: "Aucune info trouv&eacute;e",
        line: "Ligne",
        destination: "Terminus",
        departure: "D&eacute;part",
        min: "min",
        last_updated: "Mis \xe0 jour",
        now: "Maintenant",
        editor_show_name: "Afficher le nom de la carte",
        editor_entities: "Entit\xe9s",
        editor_departures: "D\xe9parts",
        editor_title: "Nom de la carte",
        editor_show_entity_name: "Afficher le nom de l'entit\xe9",
        editor_show_departures: "Afficher les d\xe9parts",
        editor_show_header: "Afficher l'ent\xeate des d\xe9parts",
        editor_show_transport_icon: "Afficher l'ic\xf4ne de transport",
        editor_max_departures: "Nombre maximum de d\xe9parts",
        editor_hide_departed: "Masquer les d\xe9parts pass\xe9s",
        editor_show_departed_offeset: "... mais montrer les d\xe9parts depuis le nombre de minutes",
        editor_show_time_always: "Toujours afficher l'heure de d\xe9part en HH:MM",
        editor_show_updated: `Afficher 'Mis \xe0 jour'`,
        editor_direction: `Filtre de direction`,
        editor_direction_all: `Tous`,
        editor_direction_left: `Gauche`,
        editor_direction_right: `Droite`,
        language: "Langue"
    }
};
const $8ae640dd6c4226ad$export$d0d68bb9ed2c643d = Object.keys($8ae640dd6c4226ad$export$150b732325d14d04);
const $8ae640dd6c4226ad$export$625550452a3fa3ec = (key, lang)=>$8ae640dd6c4226ad$export$150b732325d14d04[lang]?.[key] ?? $8ae640dd6c4226ad$var$defaultTranslation[key];
const $8ae640dd6c4226ad$export$64783e31db14f0ba = (configLang)=>configLang ?? navigator.language ?? $8ae640dd6c4226ad$var$defaultLang;
const $8ae640dd6c4226ad$export$df5de7d5c552d075 = (lang)=>(key)=>$8ae640dd6c4226ad$export$625550452a3fa3ec(key, lang);

});

parcelRegister("am1R5", function(module, exports) {
module.exports = import("./editor.47aa0d62.js?" + Date.now()).then(()=>parcelRequire("jlj1D"));

});

parcelRequire("8HQfp");
var $39J5i = parcelRequire("39J5i");
parcelRequire("j0ZcV");
var $l56HR = parcelRequire("l56HR");
var $eGUNk = parcelRequire("eGUNk");
parcelRequire("1ZxoT");
var $pklEb = parcelRequire("pklEb");
var $dsTCw = parcelRequire("dsTCw");
var $829f1babd4ccc0b8$export$6d07abd9f0bba447;
(function(TransportType) {
    TransportType["METRO"] = "METRO";
    TransportType["BUS"] = "BUS";
    TransportType["TRAM"] = "TRAM";
    TransportType["TRAIN"] = "TRAIN";
    TransportType["SHIP"] = "SHIP";
    TransportType["FERRY"] = "FETTRY";
    TransportType["TAXI"] = "TAXI";
})($829f1babd4ccc0b8$export$6d07abd9f0bba447 || ($829f1babd4ccc0b8$export$6d07abd9f0bba447 = {}));



var $gjUL4 = parcelRequire("gjUL4");
const $b0717bc2acc03fc5$export$c2f8e0cc249a8d8f = {
    entity: "",
    title: "",
    entities: undefined,
    show_entity_name: true,
    show_header: true,
    show_icon: true,
    show_departures: true,
    direction: 0,
    max_departures: 5,
    hide_departed: true,
    show_departed_offeset: 5,
    show_updated: true,
    tap_action: "info"
};


parcelRequire("j0ZcV");
var $j8KxL = parcelRequire("j8KxL");
const $57faf62096e30446$var$lineColorsStyles = (0, $j8KxL.css)`
    .line-icon {
        border-radius: 3px;
        padding: 3px 3px 0 3px;
        color: #fff;
        min-width: 22px;
        height: 22px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }

    .red {
        background-color: #d71d24;
    }
    .blue {
        background-color: #0089ca;
    }
    .green {
        background-color: #179d4d;
    }

    .train {
        background-color: #ec619f;
    }

    .tram {
        background-color: #985141;
    }

    .tram_7 {
        background-color: #878a83;
    }

    .tram_12 {
        background-color: #778da7;
    }

    .tram_21 {
        background-color: #b76020;
    }

    .tram_22 {
        background-color: #d77d00;
    }
    `;
const $57faf62096e30446$var$departureEntityStyles = (0, $j8KxL.css)`
    .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .departures > :first-child {
        margin-top: 0;
    }

    .departure.departed {
        color: var(--secondary-text-color);
    }

    .departure.departed > .main {
        text-decoration: line-through;
    }

    .row {
        margin-top: 8px;

        display: flex;
        justify-content: space-between;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .col.icon {
        flex-basis: 40px;
    }

    .row.name {
        height: 40px;
        padding-left: 8px;
        font-weight: 400;
        font-size: large;
        align-items: center;
        justify-content: center;
    }
    .row.header {
        height: 40px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }

    .main {
        flex: 2;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .warning {
        color: var(--warning-color);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .warning-message {
        color: var(--warning-color);
        font-size: smaller;
        text-decoration: unset;
    }

    .mr1 {
        margin-right: 8px;
    }

    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`;
var $57faf62096e30446$export$2e2bcd8739ae039 = [
    $57faf62096e30446$var$departureEntityStyles,
    $57faf62096e30446$var$lineColorsStyles
];


const $66d5822390d71e6e$var$diffMinutes = (from, to)=>{
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60);
    return diffMinutes;
};

class $66d5822390d71e6e$export$7ded24e6705f9c64 extends (0, $eGUNk.LitElement) {
    static{
        this.styles = (0, $57faf62096e30446$export$2e2bcd8739ae039);
    }
    setConfig(config) {
        this.config = {
            ...(0, $b0717bc2acc03fc5$export$c2f8e0cc249a8d8f),
            ...config
        };
    }
    getCardSize() {
        const deps = this.getDepartures();
        const entity = this.config?.entity;
        const data = this.hass?.states[entity];
        const attrs = data.attributes;
        const size = [
            !!this.config.title ? 1 : 0,
            this.config.show_entity_name && attrs.friendly_name ? 1 : 0,
            !!this.config.show_header ? 1 : 0,
            deps?.length || 0
        ].reduce((sum, entity)=>sum += entity ? entity : 0, 0);
        return Math.max(size, 1);
    }
    getLayoutOptions() {
        return {
            grid_min_columns: 3,
            grid_min_rows: 2
        };
    }
    // configuration card is loaded in async manner
    static async getConfigElement() {
        return await (parcelRequire("am1R5")).then(()=>document.createElement("hasl4-departure-card-editor"));
    }
    static{
        this.getStubConfig = ()=>({
                ...(0, $b0717bc2acc03fc5$export$c2f8e0cc249a8d8f)
            });
    }
    render() {
        if (!this.config || !this.hass) return 0, $l56HR.nothing;
        const lang = (0, $gjUL4.getLanguage)(this.config?.language);
        const _ = (0, $gjUL4.translateTo)(lang);
        const departures = this.config?.show_departures ? ()=>{
            const data = this.renderDepartures();
            return data === (0, $l56HR.nothing) ? (0, $l56HR.html)`<span>${_(`entity_missing`)}</span>` : data;
        } : ()=>(0, $l56HR.nothing);
        const renderLastUpdated = this.isManyEntitiesSet() ? ()=>(0, $l56HR.nothing) : ()=>{
            const entity = this.config?.entity;
            if (!entity) return 0, $l56HR.nothing;
            const data = this.hass?.states[entity];
            return this.config?.show_updated && data.last_updated ? (0, $l56HR.html)`
                            <div class="updated right">
                                ${_("last_updated")}
                                ${new Date(data.last_updated).toLocaleTimeString(lang)}
                            </div>` : (0, $l56HR.nothing);
        };
        return (0, $l56HR.html)`
            <ha-card @click="${this.clickHandler()}">
                ${this.config?.title ? (0, $l56HR.html)`<h1 class="card-header"><div class="name">${this.config.title}</div></h1>` : (0, $l56HR.nothing)}
                <div class="card-content">
                    ${departures()}
                    ${renderLastUpdated()}
                </div>
            </ha-card>
        `;
    }
    isManyEntitiesSet() {
        return this.config?.entities?.length > 0;
    }
    getDeparturesFor(entity) {
        if (entity === undefined) return undefined;
        const data = this.hass?.states[entity];
        if (data === undefined) return undefined;
        if (!$66d5822390d71e6e$var$isDepartureAttrs(data.attributes)) return undefined;
        const now = new Date();
        return (data.attributes.departures?.filter((d)=>{
            if (this.config?.direction === 0) return true;
            return d.direction_code === this.config?.direction;
        }).filter((d)=>{
            if (!this.config?.hide_departed) return true;
            const diff = $66d5822390d71e6e$var$diffMinutes(new Date(d.expected), now);
            return diff + this.config?.show_departed_offeset >= 0;
        }) || []).slice(0, this.config?.max_departures);
    }
    getDeparturesCombined(entities) {
        const now = new Date();
        return entities// filter invalid entities
        .filter((entity)=>{
            if (!!entity === false) return false;
            const data = this.hass?.states[entity];
            if (data === undefined) return false;
            if (!$66d5822390d71e6e$var$isDepartureAttrs(data.attributes)) return false;
            return true;
        })// map entity name to departures and gather all together
        .map((entity)=>{
            const state = this.hass?.states[entity];
            if ($66d5822390d71e6e$var$isDepartureAttrs(state.attributes)) return state.attributes;
        }).flatMap((attrs)=>attrs.departures)// filter by departure time
        .filter((d)=>{
            if (!this.config?.hide_departed) return true;
            const diff = $66d5822390d71e6e$var$diffMinutes(new Date(d.expected), now);
            return diff + this.config?.show_departed_offeset >= 0;
        })// filter direction
        .filter((d)=>{
            if (this.config?.direction === 0) return true;
            return d.direction_code === this.config?.direction;
        })// sort by expected departure time
        .sort((a, b)=>new Date(a.expected).getTime() - new Date(b.expected).getTime())// limit to max departures
        .slice(0, this.config?.max_departures);
    }
    getDepartures() {
        if (this.isManyEntitiesSet()) return this.getDeparturesCombined(this.config?.entities);
        else return this.getDeparturesFor(this.config?.entity);
    }
    lineIconClass(type, line, group) {
        let cls = "";
        switch(type){
            case (0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).BUS:
                cls = `bus bus_${line}`;
                cls = group === "bl\xe5buss" ? `${cls} blue` : cls;
                break;
            case (0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).METRO:
                cls = `metro metro_${line}`;
                switch(line){
                    case "10":
                    case "11":
                        cls = `${cls} blue`;
                        break;
                    case "13":
                    case "14":
                        cls = `${cls} red`;
                        break;
                    default:
                        cls = `${cls} green`;
                }
                break;
            case (0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).TRAM:
                cls = `tram tram_${line}`;
                break;
            case (0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).TRAIN:
                cls = `train train_${line}`;
                break;
        }
        return cls;
    }
    _serviceCall(domain, service, data) {
        this.hass.callService(domain, service, data);
    }
    _showAttributes(el, type, detail, options) {
        const event = new Event(type, {
            bubbles: Boolean(options?.bubbles),
            cancelable: Boolean(options?.cancelable),
            composed: Boolean(options?.composed) || true
        });
        event.detail = detail || {};
        el.dispatchEvent(event);
        return event;
    }
    constructor(...args){
        super(...args);
        this.renderDepartures = ()=>{
            const renderEntityName = ()=>{
                const entity = this.config?.entity;
                if (entity === undefined) return 0, $l56HR.nothing;
                const data = this.hass?.states[this.config?.entity];
                if (data === undefined) return 0, $l56HR.nothing;
                const attrs = data.attributes;
                if (!$66d5822390d71e6e$var$isDepartureAttrs(attrs)) return 0, $l56HR.nothing;
                return this.config.show_entity_name && attrs.friendly_name ? (0, $l56HR.html)`<div class="row name">${attrs.friendly_name}</div` : (0, $l56HR.nothing);
            };
            const now = new Date();
            const lang = (0, $gjUL4.getLanguage)(this.config?.language);
            const _ = (0, $gjUL4.translateTo)(lang);
            const departures = this.getDepartures();
            if (!departures) return 0, $l56HR.nothing;
            const isMany = this.isManyEntitiesSet();
            return (0, $l56HR.html)`
            <div class="departures">
                ${isMany ? "" : renderEntityName()}
                ${this.config.show_header ? (0, $l56HR.html)`
                    <div class="row header">
                        ${this.config?.show_icon ? (0, $l56HR.html)`<div class="col icon"></div>` : (0, $l56HR.nothing)}
                        <div class="col main left">${_("line")}</div>
                        <div class="col right">${_("departure")}</div>
                    </div>` : (0, $l56HR.nothing)}

                ${departures.map((dep)=>{
                const expectedAt = new Date(dep.expected);
                const diff = $66d5822390d71e6e$var$diffMinutes(expectedAt, now);
                const isAtThePlatform = diff === 0;
                const isDeparted = diff < 0;
                const hasDeviations = (dep.deviations?.length || 0) > 0;
                const mostImportantDeviation = dep.deviations?.sort((a, b)=>b.importance_level - a.importance_level)?.[0];
                const departureTime = this.config?.show_time_always ? expectedAt.toLocaleTimeString(lang, {
                    hour: "numeric",
                    minute: "numeric"
                }) : (()=>{
                    return isAtThePlatform ? _("now") : (0, $l56HR.html)`<ha-relative-time .hass=${this.hass} .datetime=${expectedAt}></ha-relative-time>`;
                })();
                const icon = {
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).METRO]: "mdi:subway",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).BUS]: "mdi:bus",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).TRAM]: "mdi:tram",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).TRAIN]: "mdi:train",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).SHIP]: "mdi:ship",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).FERRY]: "mdi:ferry",
                    [(0, $829f1babd4ccc0b8$export$6d07abd9f0bba447).TAXI]: "mdi:taxi"
                }[dep.line.transport_mode] || "mdi:train";
                const lineIconClass = this.lineIconClass(dep.line.transport_mode, dep.line.designation, dep.line.group_of_lines);
                return (0, $l56HR.html)`
                    <div class="row departure fade-in ${isDeparted ? "departed" : ""}">
                        ${this.config?.show_icon ? (0, $l56HR.html)`
                            <div class="col icon">
                                <ha-icon class="transport-icon" icon="${icon}"/>
                            </div>
                        ` : (0, $l56HR.nothing)}
                        <div class="col icon">
                            <span class="line-icon mr1 ${lineIconClass}">${dep.line.designation}</span>
                            ${hasDeviations ? (0, $l56HR.html)`<ha-icon class="warning" icon="mdi:alert"/>` : (0, $l56HR.nothing)}
                        </div>
                        <div class="col main left">
                            ${dep.destination}
                            ${hasDeviations ? (0, $l56HR.html)`<span class="warning-message">${mostImportantDeviation.message}</span>` : (0, $l56HR.nothing)}
                        </div>
                        <div class="col right">
                            <span class="leaves-in">${departureTime}</span>
                        </div>
                    </div>`;
            })}
            </div>
        `;
        };
        this.clickHandler = (entity)=>(e)=>{
                const action = this.config?.click_action;
                if (action === undefined) return;
                if (action == "info" && entity) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: entity
                    });
                    return;
                } else if ($66d5822390d71e6e$var$isEntityInfoAction(action)) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: action.entityId
                    });
                    return;
                } else if ($66d5822390d71e6e$var$isServiceCallAction(action)) {
                    e.preventDefault();
                    this._serviceCall(action.domain, action.service, action.data);
                    return;
                }
            };
    }
}
(0, $39J5i.__decorate)([
    (0, $pklEb.state)()
], $66d5822390d71e6e$export$7ded24e6705f9c64.prototype, "config", void 0);
(0, $39J5i.__decorate)([
    (0, $dsTCw.property)({
        attribute: false
    })
], $66d5822390d71e6e$export$7ded24e6705f9c64.prototype, "hass", void 0);
const $66d5822390d71e6e$var$isEntityInfoAction = (a)=>a.entityId !== undefined;
const $66d5822390d71e6e$var$isServiceCallAction = (a)=>a.service !== undefined;
function $66d5822390d71e6e$var$isDepartureAttrs(item) {
    return item.departures !== undefined;
}


customElements.define("hasl4-departure-card", (0, $66d5822390d71e6e$export$7ded24e6705f9c64));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HASL4 Departure card",
    description: "Show departure times for SL Trafik"
});


//# sourceMappingURL=hasl4-departure-card.js.map
