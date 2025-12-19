'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: 'Is my data secure?', answer: 'Yes. We are SOC-2 compliant and use end-to-end encryption. Your data is isolated and never used to train public models.' },
        { question: 'Which jurisdictions do you support?', answer: 'We currently support US, UK, EU, and Indian legal frameworks with jurisdiction-specific compliance agents.' },
        { question: 'Can I integrate with my existing CLM?', answer: 'Yes, Claussal integrates seamlessly with major CLMs like Ironclad, Docusign, and others via API.' },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button className={styles.question} onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
