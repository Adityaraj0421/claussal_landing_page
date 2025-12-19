'use client';

import { useWaitlist } from '../context/WaitlistContext';
import styles from './Hero.module.css';
import Image from 'next/image';
import posthog from 'posthog-js';
import { motion, AnimatePresence } from 'framer-motion';


export default function Hero() {
    const { openModal } = useWaitlist();

    const handleJoinWaitlistClick = () => {
        posthog.capture('join_waitlist_clicked', {
            location: 'hero',
            cta_text: 'Join Waitlist',
            cta_type: 'primary',
        });
        openModal();
    };

    return (
        <section className={styles.heroSection}>

            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.headline}>Precision in Every Clause.</h1>
                    <p className={styles.subheadline}>
                        The agentic AI partner for modern legal teams. <br />
                        Review, redline, and negotiate contracts autonomously.
                    </p>
                    <div className={styles.ctaGroup}>
                        <button className="btn btn-primary" onClick={handleJoinWaitlistClick}>Join Waitlist</button>
                    </div>
                </div>

                <div className={styles.visualContainer}>

                    <div className={styles.interfaceMockup}>
                        {/* Abstract representation of the UI for now, replaced by generated image later if needed */}
                        <div className={styles.mockupHeader}>
                            <div className={styles.windowControls}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                            <motion.div
                                className={styles.scanStatus}
                                initial={{ backgroundColor: '#e5e5e5', color: '#666' }}
                                animate={{ backgroundColor: '#fee2e2', color: '#C1440E' }}
                                transition={{ delay: 2.5, duration: 0.5 }}
                            >
                                <motion.span
                                    initial={{ opacity: 1, display: 'inline' }}
                                    animate={{ opacity: 0, display: 'none' }}
                                    transition={{ delay: 2.5, duration: 0.1 }}
                                >
                                    Scanning Contract...
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, display: 'none' }}
                                    animate={{ opacity: 1, display: 'inline' }}
                                    transition={{ delay: 2.5, duration: 0.1 }}
                                >
                                    ⚠ 2 Risks Detected
                                </motion.span>
                            </motion.div>
                        </div>
                        <div className={styles.mockupBody}>
                            <div className={styles.contractText}>
                                <p className={styles.clauseNumber}>12.1. Confidentiality Obligations.</p>
                                <p>
                                    The Receiving Party shall hold the Confidential Information in strict confidence
                                    <span className={styles.riskyContainer}>
                                        <span className={styles.riskyText}> for an indefinite period</span>
                                        <motion.span
                                            className={styles.redline}
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                                        />
                                    </span>
                                </p>
                                <AnimatePresence>
                                    <motion.div
                                        className={styles.suggestionBlock}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.5, delay: 2.8 }}
                                    >
                                        <div className={styles.aiLabel}>CLAUSSAL.AI SUGGESTION</div>
                                        <p className={styles.suggestionText}>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.05, staggerChildren: 0.03, delayChildren: 3.3 }}
                                            >
                                                {"for a period of five (5) years from the date of disclosure".split("").map((char, index) => (
                                                    <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                                                ))}
                                            </motion.span>
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                                <p>...and shall not disclose such information to any third party without prior written consent.</p>

                                <div className={styles.separator}></div>

                                <p className={styles.clauseNumber}>14.3. Limitation of Liability.</p>
                                <p>
                                    Except for fraud or willful misconduct, the Provider's total liability shall be
                                    <span className={styles.riskyContainer}>
                                        <span className={styles.riskyText}> unlimited for all claims </span>
                                        <motion.span
                                            className={styles.redline}
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.8, delay: 3.5, ease: "easeInOut" }}
                                        />
                                        <motion.span
                                            className={styles.warningBadge}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 3.8 }}
                                        >
                                            CRITICAL RISK
                                        </motion.span>
                                    </span>
                                    arising under this Agreement.
                                </p>
                                <AnimatePresence>
                                    <motion.div
                                        className={styles.suggestionBlock}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.5, delay: 4.5 }}
                                    >
                                        <div className={styles.aiLabel}>CLAUSSAL.AI SUGGESTION</div>
                                        <p className={styles.suggestionText}>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.05, staggerChildren: 0.03, delayChildren: 5.0 }}
                                            >
                                                {"capped at twelve (12) months of Fees paid".split("").map((char, index) => (
                                                    <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                                                ))}
                                            </motion.span>
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
