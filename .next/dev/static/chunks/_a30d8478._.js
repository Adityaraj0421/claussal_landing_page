(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PostHogProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPostHogProvider",
    ()=>CSPostHogProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/react/dist/esm/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function CSPostHogProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostHogProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/PostHogProvider.js",
        lineNumber: 8,
        columnNumber: 12
    }, this);
}
_c = CSPostHogProvider;
var _c;
__turbopack_context__.k.register(_c, "CSPostHogProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/WaitlistContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaitlistProvider",
    ()=>WaitlistProvider,
    "useWaitlist",
    ()=>useWaitlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const WaitlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function WaitlistProvider({ children }) {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = ()=>setIsModalOpen(true);
    const closeModal = ()=>setIsModalOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaitlistContext.Provider, {
        value: {
            isModalOpen,
            openModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/WaitlistContext.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(WaitlistProvider, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c = WaitlistProvider;
function useWaitlist() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WaitlistContext);
}
_s1(useWaitlist, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "WaitlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostHogProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PostHogProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WaitlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WaitlistContext.js [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostHogProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSPostHogProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WaitlistContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaitlistProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Providers.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Intercom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Intercom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function Intercom() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Intercom.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.intercomSettings = {
                    app_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_INTERCOM_APP_ID || 'placeholder_app_id'
                };
                ({
                    "Intercom.useEffect": function() {
                        var w = window;
                        var ic = w.Intercom;
                        if (typeof ic === "function") {
                            ic('reattach_activator');
                            ic('update', w.intercomSettings);
                        } else {
                            var d = document;
                            var i = {
                                "Intercom.useEffect.i": function() {
                                    i.c(arguments);
                                }
                            }["Intercom.useEffect.i"];
                            i.q = [];
                            i.c = ({
                                "Intercom.useEffect": function(args) {
                                    i.q.push(args);
                                }
                            })["Intercom.useEffect"];
                            w.Intercom = i;
                            var l = {
                                "Intercom.useEffect.l": function() {
                                    var s = d.createElement('script');
                                    s.type = 'text/javascript';
                                    s.async = true;
                                    s.src = 'https://widget.intercom.io/widget/' + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_INTERCOM_APP_ID || 'placeholder_app_id');
                                    var x = d.getElementsByTagName('script')[0];
                                    x.parentNode.insertBefore(s, x);
                                }
                            }["Intercom.useEffect.l"];
                            if (w.attachEvent) {
                                w.attachEvent('onload', l);
                            } else {
                                w.addEventListener('load', l, false);
                            }
                        }
                    }
                })["Intercom.useEffect"]();
            }
        }
    }["Intercom.useEffect"], []);
    return null;
}
_s(Intercom, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Intercom;
var _c;
__turbopack_context__.k.register(_c, "Intercom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/posthog-js/react/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostHogCaptureOnViewed",
    ()=>PostHogCaptureOnViewed,
    "PostHogContext",
    ()=>PostHogContext,
    "PostHogErrorBoundary",
    ()=>PostHogErrorBoundary,
    "PostHogFeature",
    ()=>PostHogFeature,
    "PostHogProvider",
    ()=>PostHogProvider,
    "captureFeatureInteraction",
    ()=>captureFeatureInteraction,
    "captureFeatureView",
    ()=>captureFeatureView,
    "setupReactErrorHandler",
    ()=>setupReactErrorHandler,
    "useActiveFeatureFlags",
    ()=>useActiveFeatureFlags,
    "useFeatureFlagEnabled",
    ()=>useFeatureFlagEnabled,
    "useFeatureFlagPayload",
    ()=>useFeatureFlagPayload,
    "useFeatureFlagVariantKey",
    ()=>useFeatureFlagVariantKey,
    "usePostHog",
    ()=>usePostHog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var PostHogContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    bootstrap: undefined
});
function isDeepEqual(obj1, obj2, visited) {
    if (visited === void 0) {
        visited = new WeakMap();
    }
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    if (visited.has(obj1) && visited.get(obj1) === obj2) {
        return true;
    }
    visited.set(obj1, obj2);
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for(var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++){
        var key = keys1_1[_i];
        if (!keys2.includes(key)) {
            return false;
        }
        if (!isDeepEqual(obj1[key], obj2[key], visited)) {
            return false;
        }
    }
    return true;
}
function PostHogProvider(_a) {
    var _b, _c;
    var children = _a.children, client = _a.client, apiKey = _a.apiKey, options = _a.options;
    var previousInitializationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var posthog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PostHogProvider.useMemo[posthog]": function() {
            if (client) {
                if (apiKey) {
                    console.warn('[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.');
                }
                if (options) {
                    console.warn('[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.');
                }
                return client;
            }
            if (apiKey) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            }
            console.warn('[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        }
    }["PostHogProvider.useMemo[posthog]"], [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostHogProvider.useEffect": function() {
            if (client) {
                return;
            }
            var previousInitialization = previousInitializationRef.current;
            if (!previousInitialization) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].__loaded) {
                    console.warn('[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.');
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(apiKey, options);
                previousInitializationRef.current = {
                    apiKey: apiKey,
                    options: options !== null && options !== void 0 ? options : {}
                };
            } else {
                if (apiKey !== previousInitialization.apiKey) {
                    console.warn("[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.");
                }
                if (options && !isDeepEqual(options, previousInitialization.options)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set_config(options);
                }
                previousInitializationRef.current = {
                    apiKey: apiKey,
                    options: options !== null && options !== void 0 ? options : {}
                };
            }
        }
    }["PostHogProvider.useEffect"], [
        client,
        apiKey,
        JSON.stringify(options)
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PostHogContext.Provider, {
        value: {
            client: posthog,
            bootstrap: (_b = options === null || options === void 0 ? void 0 : options.bootstrap) !== null && _b !== void 0 ? _b : (_c = client === null || client === void 0 ? void 0 : client.config) === null || _c === void 0 ? void 0 : _c.bootstrap
        }
    }, children);
}
var isFunction = function(f) {
    return typeof f === 'function';
};
var isUndefined = function(x) {
    return x === void 0;
};
var isNull = function(x) {
    return x === null;
};
function useFeatureFlagEnabled(flag) {
    var _a, _b;
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _c.client, bootstrap = _c.bootstrap;
    var _d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagEnabled.useState[_d]": function() {
            return client.isFeatureEnabled(flag);
        }
    }["useFeatureFlagEnabled.useState[_d]"]), featureEnabled = _d[0], setFeatureEnabled = _d[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagEnabled.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagEnabled.useEffect": function() {
                    setFeatureEnabled(client.isFeatureEnabled(flag));
                }
            }["useFeatureFlagEnabled.useEffect"]);
        }
    }["useFeatureFlagEnabled.useEffect"], [
        client,
        flag
    ]);
    var bootstrapped = (_a = bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags) === null || _a === void 0 ? void 0 : _a[flag];
    if (!((_b = client === null || client === void 0 ? void 0 : client.featureFlags) === null || _b === void 0 ? void 0 : _b.hasLoadedFlags) && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return isUndefined(bootstrapped) ? undefined : !!bootstrapped;
    }
    return featureEnabled;
}
function useFeatureFlagPayload(flag) {
    var _a;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _b.client, bootstrap = _b.bootstrap;
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagPayload.useState[_c]": function() {
            return client.getFeatureFlagPayload(flag);
        }
    }["useFeatureFlagPayload.useState[_c]"]), featureFlagPayload = _c[0], setFeatureFlagPayload = _c[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagPayload.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagPayload.useEffect": function() {
                    setFeatureFlagPayload(client.getFeatureFlagPayload(flag));
                }
            }["useFeatureFlagPayload.useEffect"]);
        }
    }["useFeatureFlagPayload.useEffect"], [
        client,
        flag
    ]);
    if (!((_a = client === null || client === void 0 ? void 0 : client.featureFlags) === null || _a === void 0 ? void 0 : _a.hasLoadedFlags) && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlagPayloads)) {
        return bootstrap.featureFlagPayloads[flag];
    }
    return featureFlagPayload;
}
function useActiveFeatureFlags() {
    var _a;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _b.client, bootstrap = _b.bootstrap;
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useActiveFeatureFlags.useState[_c]": function() {
            return client.featureFlags.getFlags();
        }
    }["useActiveFeatureFlags.useState[_c]"]), featureFlags = _c[0], setFeatureFlags = _c[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveFeatureFlags.useEffect": function() {
            return client.onFeatureFlags({
                "useActiveFeatureFlags.useEffect": function(flags) {
                    setFeatureFlags(flags);
                }
            }["useActiveFeatureFlags.useEffect"]);
        }
    }["useActiveFeatureFlags.useEffect"], [
        client
    ]);
    if (!((_a = client === null || client === void 0 ? void 0 : client.featureFlags) === null || _a === void 0 ? void 0 : _a.hasLoadedFlags) && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return Object.keys(bootstrap.featureFlags);
    }
    return featureFlags;
}
function useFeatureFlagVariantKey(flag) {
    var _a;
    var _b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext), client = _b.client, bootstrap = _b.bootstrap;
    var _c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useFeatureFlagVariantKey.useState[_c]": function() {
            return client.getFeatureFlag(flag);
        }
    }["useFeatureFlagVariantKey.useState[_c]"]), featureFlagVariantKey = _c[0], setFeatureFlagVariantKey = _c[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatureFlagVariantKey.useEffect": function() {
            return client.onFeatureFlags({
                "useFeatureFlagVariantKey.useEffect": function() {
                    setFeatureFlagVariantKey(client.getFeatureFlag(flag));
                }
            }["useFeatureFlagVariantKey.useEffect"]);
        }
    }["useFeatureFlagVariantKey.useEffect"], [
        client,
        flag
    ]);
    if (!((_a = client === null || client === void 0 ? void 0 : client.featureFlags) === null || _a === void 0 ? void 0 : _a.hasLoadedFlags) && (bootstrap === null || bootstrap === void 0 ? void 0 : bootstrap.featureFlags)) {
        return bootstrap.featureFlags[flag];
    }
    return featureFlagVariantKey;
}
var usePostHog = function() {
    var client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostHogContext).client;
    return client;
};
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function VisibilityAndClickTracker(_a) {
    var children = _a.children, onIntersect = _a.onIntersect, onClick = _a.onClick, trackView = _a.trackView, options = _a.options, props = __rest(_a, [
        "children",
        "onIntersect",
        "onClick",
        "trackView",
        "options"
    ]);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var observerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VisibilityAndClickTracker.useMemo[observerOptions]": function() {
            return __assign({
                threshold: 0.1
            }, options);
        }
    }["VisibilityAndClickTracker.useMemo[observerOptions]"], [
        options === null || options === void 0 ? void 0 : options.threshold,
        options === null || options === void 0 ? void 0 : options.root,
        options === null || options === void 0 ? void 0 : options.rootMargin
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisibilityAndClickTracker.useEffect": function() {
            if (isNull(ref.current) || !trackView) return;
            var observer = new IntersectionObserver({
                "VisibilityAndClickTracker.useEffect": function(_a) {
                    var entry = _a[0];
                    return onIntersect(entry);
                }
            }["VisibilityAndClickTracker.useEffect"], observerOptions);
            observer.observe(ref.current);
            return ({
                "VisibilityAndClickTracker.useEffect": function() {
                    return observer.disconnect();
                }
            })["VisibilityAndClickTracker.useEffect"];
        }
    }["VisibilityAndClickTracker.useEffect"], [
        observerOptions,
        trackView,
        onIntersect
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({
        ref: ref
    }, props, {
        onClick: onClick
    }), children);
}
function VisibilityAndClickTrackers(_a) {
    var children = _a.children, trackInteraction = _a.trackInteraction, trackView = _a.trackView, options = _a.options, onInteract = _a.onInteract, onView = _a.onView, props = __rest(_a, [
        "children",
        "trackInteraction",
        "trackView",
        "options",
        "onInteract",
        "onView"
    ]);
    var clickTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var visibilityTrackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var cachedOnClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VisibilityAndClickTrackers.useCallback[cachedOnClick]": function() {
            if (!clickTrackedRef.current && trackInteraction && onInteract) {
                onInteract();
                clickTrackedRef.current = true;
            }
        }
    }["VisibilityAndClickTrackers.useCallback[cachedOnClick]"], [
        trackInteraction,
        onInteract
    ]);
    var onIntersect = function(entry) {
        if (!visibilityTrackedRef.current && entry.isIntersecting && onView) {
            onView();
            visibilityTrackedRef.current = true;
        }
    };
    var trackedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(child) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, __assign({
            onClick: cachedOnClick,
            onIntersect: onIntersect,
            trackView: trackView,
            options: options
        }, props), child);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, trackedChildren);
}
function PostHogFeature(_a) {
    var flag = _a.flag, match = _a.match, children = _a.children, fallback = _a.fallback, visibilityObserverOptions = _a.visibilityObserverOptions, trackInteraction = _a.trackInteraction, trackView = _a.trackView, props = __rest(_a, [
        "flag",
        "match",
        "children",
        "fallback",
        "visibilityObserverOptions",
        "trackInteraction",
        "trackView"
    ]);
    var payload = useFeatureFlagPayload(flag);
    var variant = useFeatureFlagVariantKey(flag);
    var posthog = usePostHog();
    var shouldTrackInteraction = trackInteraction !== null && trackInteraction !== void 0 ? trackInteraction : true;
    var shouldTrackView = trackView !== null && trackView !== void 0 ? trackView : true;
    if (isUndefined(match) || variant === match) {
        var childNode = isFunction(children) ? children(payload) : children;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTrackers, __assign({
            flag: flag,
            options: visibilityObserverOptions,
            trackInteraction: shouldTrackInteraction,
            trackView: shouldTrackView,
            onInteract: function() {
                return captureFeatureInteraction({
                    flag: flag,
                    posthog: posthog,
                    flagVariant: variant
                });
            },
            onView: function() {
                return captureFeatureView({
                    flag: flag,
                    posthog: posthog,
                    flagVariant: variant
                });
            }
        }, props), childNode);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, fallback);
}
function captureFeatureInteraction(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_interaction/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_interaction', properties);
}
function captureFeatureView(_a) {
    var _b;
    var flag = _a.flag, posthog = _a.posthog, flagVariant = _a.flagVariant;
    var properties = {
        feature_flag: flag,
        $set: (_b = {}, _b["$feature_view/".concat(flag)] = flagVariant !== null && flagVariant !== void 0 ? flagVariant : true, _b)
    };
    if (typeof flagVariant === 'string') {
        properties.feature_flag_variant = flagVariant;
    }
    posthog.capture('$feature_view', properties);
}
function TrackedChild(_a) {
    var child = _a.child, index = _a.index, name = _a.name, properties = _a.properties, observerOptions = _a.observerOptions;
    var trackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var posthog = usePostHog();
    var onIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TrackedChild.useCallback[onIntersect]": function(entry) {
            if (entry.isIntersecting && !trackedRef.current) {
                posthog.capture('$element_viewed', __assign({
                    element_name: name,
                    child_index: index
                }, properties));
                trackedRef.current = true;
            }
        }
    }["TrackedChild.useCallback[onIntersect]"], [
        posthog,
        name,
        index,
        properties
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, {
        onIntersect: onIntersect,
        trackView: true,
        options: observerOptions
    }, child);
}
function PostHogCaptureOnViewed(_a) {
    var name = _a.name, properties = _a.properties, observerOptions = _a.observerOptions, trackAllChildren = _a.trackAllChildren, children = _a.children, props = __rest(_a, [
        "name",
        "properties",
        "observerOptions",
        "trackAllChildren",
        "children"
    ]);
    var trackedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var posthog = usePostHog();
    var onIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PostHogCaptureOnViewed.useCallback[onIntersect]": function(entry) {
            if (entry.isIntersecting && !trackedRef.current) {
                posthog.capture('$element_viewed', __assign({
                    element_name: name
                }, properties));
                trackedRef.current = true;
            }
        }
    }["PostHogCaptureOnViewed.useCallback[onIntersect]"], [
        posthog,
        name,
        properties
    ]);
    if (trackAllChildren) {
        var trackedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, function(child, index) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TrackedChild, {
                key: index,
                child: child,
                index: index,
                name: name,
                properties: properties,
                observerOptions: observerOptions
            });
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({}, props), trackedChildren);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(VisibilityAndClickTracker, __assign({
        onIntersect: onIntersect,
        trackView: true,
        options: observerOptions
    }, props), children);
}
var INITIAL_STATE = {
    componentStack: null,
    exceptionEvent: null,
    error: null
};
var __POSTHOG_ERROR_MESSAGES = {
    INVALID_FALLBACK: '[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.'
};
var PostHogErrorBoundary = function(_super) {
    __extends(PostHogErrorBoundary, _super);
    function PostHogErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = INITIAL_STATE;
        return _this;
    }
    PostHogErrorBoundary.prototype.componentDidCatch = function(error, errorInfo) {
        var additionalProperties = this.props.additionalProperties;
        var currentProperties;
        if (isFunction(additionalProperties)) {
            currentProperties = additionalProperties(error);
        } else if (typeof additionalProperties === 'object') {
            currentProperties = additionalProperties;
        }
        var client = this.context.client;
        var exceptionEvent = client.captureException(error, currentProperties);
        var componentStack = errorInfo.componentStack;
        this.setState({
            error: error,
            componentStack: componentStack !== null && componentStack !== void 0 ? componentStack : null,
            exceptionEvent: exceptionEvent
        });
    };
    PostHogErrorBoundary.prototype.render = function() {
        var _a = this.props, children = _a.children, fallback = _a.fallback;
        var state = this.state;
        if (state.componentStack == null) {
            return isFunction(children) ? children() : children;
        }
        var element = isFunction(fallback) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(fallback, {
            error: state.error,
            componentStack: state.componentStack,
            exceptionEvent: state.exceptionEvent
        }) : fallback;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
            return element;
        }
        console.warn(__POSTHOG_ERROR_MESSAGES.INVALID_FALLBACK);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null);
    };
    PostHogErrorBoundary.contextType = PostHogContext;
    return PostHogErrorBoundary;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
var setupReactErrorHandler = function(client, callback) {
    return function(error, errorInfo) {
        var event = client.captureException(error);
        if (callback) {
            callback(event, error, errorInfo);
        }
    };
};
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=_a30d8478._.js.map