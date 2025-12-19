import SectionWrapper from '@/components/ui/SectionWrapper';

import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

export default function PrivacyPolicy() {
    return (
        <SectionWrapper id="privacy">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '500' }}>
                    <MdArrowBack /> Back to Home
                </Link>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', marginBottom: '40px' }}>Privacy Policy</h1>
                <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <p><strong>Last Updated: December 20, 2025</strong></p>
                    <br />
                    <p>At Claussal.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or request a demo. This may include your name, email address, company name, and usage data.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
                    <p>We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to comply with legal obligations. We do not sell your personal data to third parties.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>3. Data Security (SOC-2)</h2>
                    <p>We implement industry-standard security measures, including SOC-2 Type II compliance, to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>4. Your Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Contact us to exercise these rights.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at legal@claussal.ai.</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
