'use client';

import SectionWrapper from './ui/SectionWrapper';
import styles from './ComplianceShield.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ComplianceShield() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    }, []);

    return (
        <SectionWrapper id="compliance" theme="secondary" className={styles.shieldSection}>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Never miss a renewal. Never breach a term.</h2>
                    <p className={styles.description}>
                        Claussal.ai monitors every executed agreement in real time. It alerts you to upcoming renewals,
                        payment obligations, and compliance drifts before they become liabilities.
                    </p>
                    <ul className={styles.features}>
                        <li>
                            <span className={styles.check}>✓</span>
                            <span>Auto extraction of key dates & obligations</span>
                        </li>
                        <li>
                            <span className={styles.check}>✓</span>
                            <span>Real time regulatory updates (GDPR, CCPA)</span>
                        </li>
                        <li>
                            <span className={styles.check}>✓</span>
                            <span>Automated renewal notices 30/60/90 days out</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.visual}>
                    <div className={styles.calendarCard}>
                        <div className={styles.calendarHeader}>
                            <span className={styles.dot}></span>
                            <span className={styles.liveStatus}>Live Monitoring</span>
                        </div>
                        <div className={styles.calendarBody}>
                            <div className={styles.dateDisplay}>
                                <div className={styles.dateInfo}>
                                    <span className={styles.todayLabel}>Today</span>
                                    <span className={styles.todayDate}>{currentDate}</span>
                                </div>
                            </div>
                            <div className={styles.eventList}>
                                <motion.div
                                    className={styles.eventItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className={styles.eventTime}>09:00 AM</div>
                                    <div className={styles.eventDetail}>
                                        <span className={styles.eventTitle}>Vendor Agreement Renewal</span>
                                        <span className={styles.eventTag}>Urgent</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className={styles.eventItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div className={styles.eventTime}>02:00 PM</div>
                                    <div className={styles.eventDetail}>
                                        <span className={styles.eventTitle}>GDPR Audit Check</span>
                                        <span className={styles.eventTag}>Compliance</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
