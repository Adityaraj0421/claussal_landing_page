(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/instrumentation-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/posthog-js/dist/module.js [app-client] (ecmascript)");
;
if ("TURBOPACK compile-time truthy", 1) {
    // Check if we are in a browser environment
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    // Only initialize if NOT localhost, or if specifically forced (optional)
    // This prevents "Failed to fetch" errors in local dev due to adblockers/network
    if (!isLocalhost) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$posthog$2d$js$2f$dist$2f$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init(("TURBOPACK compile-time value", "phc_7dNoreK74cYmPEOk7gQTTmwwe0ga7SQQKx5t71sIQFH"), {
            api_host: ("TURBOPACK compile-time value", "https://us.i.posthog.com"),
            // Include the defaults option as recommended by PostHog
            defaults: '2025-05-24',
            // Enables capturing unhandled exceptions via Error Tracking
            capture_exceptions: true,
            // Only create person profiles for identified users
            person_profiles: 'identified_only',
            // Turn on debug in development mode
            debug: ("TURBOPACK compile-time value", "development") === 'development'
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=instrumentation-client_8e3fd46f.js.map