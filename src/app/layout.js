import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import './globals.css';
import Providers from '@/components/Providers';
import Intercom from '@/components/Intercom';

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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    {children}
                    <Intercom />
                </Providers>
            </body>
        </html>
    );
}
