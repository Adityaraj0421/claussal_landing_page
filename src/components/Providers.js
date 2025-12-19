'use client';

import { CSPostHogProvider } from './PostHogProvider';
import { WaitlistProvider } from '@/context/WaitlistContext';

export default function Providers({ children }) {
    return (
        <CSPostHogProvider>
            <WaitlistProvider>
                {children}
            </WaitlistProvider>
        </CSPostHogProvider>
    );
}
