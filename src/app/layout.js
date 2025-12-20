import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import './globals.css';
import Providers from '@/components/Providers';
import Intercom from '@/components/Intercom';
import { SpeedInsights } from '@vercel/speed-insights/next';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata = {
    title: 'Claussal - Autonomous Legal AI',
    description: 'The agentic AI partner for modern legal teams using precision, autonomous redlining, and risk scoring.',
    openGraph: {
        title: 'Claussal - Autonomous Legal AI',
        description: 'The agentic AI partner for modern legal teams using precision, autonomous redlining, and risk scoring.',
        url: 'https://claussal.ai',
        siteName: 'Claussal',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Claussal - Autonomous Legal AI',
        description: 'The agentic AI partner for modern legal teams using precision, autonomous redlining, and risk scoring.',
        creator: '@claussalai',
    },
    metadataBase: new URL('https://claussal.ai'),
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    {children}
                    <Intercom />
                </Providers>
                <SpeedInsights />
            </body>
        </html>
    );
}
