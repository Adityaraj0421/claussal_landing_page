'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdCheckCircle } from 'react-icons/md';
import { useState } from 'react';
import styles from './WaitlistModal.module.css';
import { useWaitlist } from '@/context/WaitlistContext';

export default function WaitlistModal() {
    const { isModalOpen, closeModal } = useWaitlist();
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const payload = {
                body: JSON.stringify({
                    full_name: formData.fullName,
                    work_email: formData.workEmail,
                    company: formData.company
                })
            };

            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setStatus('success');
            setTimeout(() => {
                closeModal();
                setStatus('idle');
                setFormData({ fullName: '', workEmail: '', company: '' });
            }, 3000);
        } catch (error) {
            console.error('Waitlist error:', error);
            // Optional: Set an error status state here if desired, currently sticking to requested flow
            setStatus('idle'); // Just reset for now or handle error UI
            alert("Something went wrong. Please try again.");
        }
    };

    // ... inside the return statement, updating inputs to use state ...

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className={styles.overlay}>
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    />
                    <motion.div
                        className={styles.modalCard}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    >
                        <button className={styles.closeBtn} onClick={closeModal}>
                            <MdClose size={24} />
                        </button>

                        {status === 'success' ? (
                            <div className={styles.successState}>
                                <MdCheckCircle size={48} className={styles.successIcon} />
                                <h3>You're on the list!</h3>
                                <p>We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.header}>
                                    <h2>Join the Waitlist</h2>
                                    <p>Experience autonomous legal precision.</p>
                                </div>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.field}>
                                        <label>Full Name</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Aditya Raj"
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Work Email</label>
                                        <input
                                            name="workEmail"
                                            value={formData.workEmail}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="aditya@company.com"
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Company</label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="LegalFlow Inc."
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
