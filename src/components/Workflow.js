'use client';

import SectionWrapper from './ui/SectionWrapper';
import styles from './Workflow.module.css';
import { MdCloudUpload, MdDocumentScanner, MdFactCheck } from 'react-icons/md';

export default function Workflow() {
    const steps = [
        {
            id: '01',
            title: 'Upload',
            description: 'Drag & drop any contract (PDF, Word). Claussal.ai instantly parses definitions and clauses.',
            icon: <MdCloudUpload className={styles.icon} aria-hidden="true" />
        },
        {
            id: '02',
            title: 'Diagnose',
            description: 'AI flags risks against your playbooks (GDPR, SOC2) with state-of-the-art precision.',
            icon: <MdDocumentScanner className={styles.icon} aria-hidden="true" />
        },
        {
            id: '03',
            title: 'Resolve',
            description: 'Auto redline low risk clauses or escalate complex anomalies to counsel.',
            icon: <MdFactCheck className={styles.icon} aria-hidden="true" />
        }
    ];

    return (
        <SectionWrapper id="workflow" className={styles.workflowSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>The Autonomous Workflow</h2>
                <p className={styles.subtitle}>From intake to execution in seconds, not days.</p>
            </div>

            <div className={styles.timeline}>
                <div className={styles.track} aria-hidden="true"></div>
                {steps.map((step) => (
                    <div key={step.id} className={styles.step}>
                        <div className={styles.iconWrapper} aria-label={`Step ${step.id}: ${step.title}`}>
                            {step.icon}
                        </div>
                        <div className={styles.content}>
                            <span className={styles.stepId} aria-hidden="true">{step.id}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
