'use client';
import styles from './Footer.module.css';
import Link from 'next/link';
import posthog from 'posthog-js';

export default function Footer() {
    const handlePrivacyPolicyClick = () => {
        posthog.capture('privacy_policy_clicked', {
            location: 'footer',
        });
    };

    const handleTermsOfServiceClick = () => {
        posthog.capture('terms_of_service_clicked', {
            location: 'footer',
        });
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>Claussal.ai © 2025</p>
                    <div className={styles.footerLinks}>
                        <Link href="/privacy" onClick={handlePrivacyPolicyClick}>Privacy Policy</Link>
                        <Link href="/terms" onClick={handleTermsOfServiceClick}>Terms of Service</Link>
                        <Link href="https://www.linkedin.com/company/claussal-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
