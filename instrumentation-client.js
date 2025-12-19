import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  // Check if we are in a browser environment
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  // Only initialize if NOT localhost, or if specifically forced (optional)
  // This prevents "Failed to fetch" errors in local dev due to adblockers/network
  if (!isLocalhost) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      // Include the defaults option as recommended by PostHog
      defaults: '2025-05-24',
      // Enables capturing unhandled exceptions via Error Tracking
      capture_exceptions: true,
      // Only create person profiles for identified users
      person_profiles: 'identified_only',
      // Turn on debug in development mode
      debug: process.env.NODE_ENV === 'development',
    });
  }
}
