'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// PostHog is initialized in instrumentation-client.js for Next.js 15.3+
// This provider makes the PostHog client available throughout the app via usePostHog hook
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
