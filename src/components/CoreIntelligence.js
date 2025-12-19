'use client';

import { motion } from 'framer-motion';
import { MdDescription, MdArrowForward, MdSmartToy } from 'react-icons/md';
import SectionWrapper from './ui/SectionWrapper';
import styles from './CoreIntelligence.module.css';

export default function CoreIntelligence() {
    return (
        <SectionWrapper id="core-intelligence" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Core Intelligence</h2>
            </div>
            <div className={styles.bentoGrid}>
                {/* Card 1: Traffic Light Risk Scoring */}
                <div className={styles.card}>
                    <h3>Traffic Light Risk Scoring</h3>
                    <p>Instant Green/Amber/Red grading at both clause and contract levels.</p>
                    <div className={styles.visualPlaceholder}>
                        <div className={styles.trafficRow}>
                            <div className={styles.trafficDots}>
                                <div className={styles.dot} style={{ backgroundColor: '#1F4E3D', opacity: 0.2 }} />
                                <div className={styles.dot} style={{ backgroundColor: '#D97706', opacity: 0.2 }} />
                                <motion.div
                                    className={styles.dot}
                                    style={{ backgroundColor: '#C1440E' }}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                            <motion.span
                                className={styles.trafficLabel}
                                style={{ color: '#C1440E' }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                RISK DETECTED
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* Card 2: Autonomous Redlining */}
                <div className={styles.card}>
                    <h3>Autonomous Redlining</h3>
                    <p>Accept or reject changes with one click. Includes plain English explanations.</p>
                    <div className={styles.visualPlaceholder} style={{ alignItems: 'flex-start', padding: '24px' }}>
                        <div className={styles.redlineBlock}>
                            <span className={styles.strikeLine}>
                                "The Provider shall indemnify Client for all claims."
                            </span>
                            <motion.span
                                className={styles.greenLine}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                "The Provider shall indemnify Client for direct claims only."
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* Card 3: Basic Versioning */}
                <div className={styles.card}>
                    <h3>Basic Versioning</h3>
                    <p>Upload v1 and v2. Instantly see the 'Risk Delta'—what changed and why it matters.</p>
                    <div className={styles.visualPlaceholder}>
                        <div className={styles.versionRow}>
                            <div className={`${styles.pill} ${styles.pillDraft}`}>
                                <MdDescription size={12} /> v1_draft.pdf
                            </div>
                            <MdArrowForward size={14} className={styles.arrowIcon} />
                            <div className={`${styles.pill} ${styles.pillFinal}`}>
                                <MdDescription size={12} /> v2_final.pdf
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Policy Q&A Bot */}
                <div className={styles.card}>
                    <h3>Policy Q&A Bot</h3>
                    <p>Internal Knowledge Only. Ask "What is our leave policy?" or "What does clause 7.3 say?"</p>
                    <div className={styles.visualPlaceholder} style={{ padding: '0' }}>
                        <div className={styles.chatLayout} style={{ padding: '16px' }}>
                            <div className={styles.chatMessages}>
                                <div className={styles.chatMessageUser}>
                                    Liability cap?
                                </div>
                                <motion.div
                                    className={styles.chatMessageBot}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <MdSmartToy size={12} /> 12 months' fees.
                                </motion.div>
                            </div>
                            <div className={styles.inputBar}>
                                Ask a question...<span className={styles.cursor}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
