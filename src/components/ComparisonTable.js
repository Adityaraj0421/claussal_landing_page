'use client';

import SectionWrapper from './ui/SectionWrapper';
import styles from './ComparisonTable.module.css';
import { MdCheck, MdClose } from 'react-icons/md';

export default function ComparisonTable() {
    return (
        <SectionWrapper id="comparison" className={styles.comparisonSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>The Specialist Advantage.</h2>
                <p className={styles.subtitle}>General models optimize for conversation. Claussal is engineered for legal fact.</p>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Critical Requirement</th>
                            <th className={styles.otherCol}>Standard LLMs (ChatGPT/Claude)</th>
                            <th className={styles.claussalCol}>Claussal.ai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Factuality</td>
                            <td className={styles.otherCell}>Probabilistic. Prone to inventing case law.</td>
                            <td className={styles.claussalCell}>Grounded. Every claim cited to source documents.</td>
                        </tr>
                        <tr>
                            <td>Workflow</td>
                            <td className={styles.otherCell}>Chat interface. Requires copy-paste.</td>
                            <td className={styles.claussalCell}>Native Redlining. Edits directly in Track Changes.</td>
                        </tr>
                        <tr>
                            <td>Context</td>
                            <td className={styles.otherCell}>Session-limited memory.</td>
                            <td className={styles.claussalCell}>Institutional Graph. Recalls entire firm history.</td>
                        </tr>
                        <tr>
                            <td>Data Privacy</td>
                            <td className={styles.otherCell}>Risk of public model training.</td>
                            <td className={styles.claussalCell}>Zero-Training Guarantee (SOC-2 Type II).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SectionWrapper>
    );
}
