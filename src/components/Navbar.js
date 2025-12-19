'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
import posthog from 'posthog-js';

import { useWaitlist } from '@/context/WaitlistContext';

export default function Navbar() {
    const { openModal } = useWaitlist();

    const handleLogoClick = () => {
        posthog.capture('logo_clicked', {
            location: 'navbar',
        });
    };

    const handleNavLinkClick = (linkName) => {
        posthog.capture(`nav_${linkName}_clicked`, {
            location: 'navbar',
            link_name: linkName,
        });
    };

    const handleJoinWaitlistClick = () => {
        posthog.capture('join_waitlist_clicked', {
            location: 'navbar',
            cta_type: 'primary',
        });
        openModal();
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link href="/" onClick={handleLogoClick}>Claussal.ai</Link>
                </div>
                <div className={styles.links}>
                    <Link href="#product" onClick={() => handleNavLinkClick('product')}>Product</Link>
                    <Link href="#compliance" onClick={() => handleNavLinkClick('compliance')}>Compliance</Link>
                    <Link href="#security" onClick={() => handleNavLinkClick('security')}>Security</Link>
                </div>
                <div className={styles.cta}>
                    <button className="btn btn-primary" onClick={handleJoinWaitlistClick}>Join Waitlist</button>
                </div>
            </div>
        </nav>
    );
}
