import SectionWrapper from '@/components/ui/SectionWrapper';

import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

export default function TermsOfService() {
    return (
        <SectionWrapper id="terms">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '500' }}>
                    <MdArrowBack /> Back to Home
                </Link>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', marginBottom: '40px' }}>Terms of Service</h1>
                <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <p><strong>Last Updated: December 20, 2025</strong></p>
                    <br />
                    <p>Please read these Terms of Service ("Terms") carefully before using the Claussal.ai platform operated by Claussal Inc.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                    <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>2. Use of Service</h2>
                    <p>Claussal.ai provides an autonomous legal agent platform. You are responsible for all activity that occurs under your account and for maintaining the confidentiality of your access credentials.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>3. Intellectual Property</h2>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Claussal Inc. and its licensors.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>4. Limitation of Liability</h2>
                    <p>In no event shall Claussal Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

                    <h2 style={{ fontSize: '24px', color: 'var(--foreground)', marginTop: '32px', marginBottom: '16px' }}>5. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
