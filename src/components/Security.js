import styles from './Security.module.css';
import { MdSecurity } from 'react-icons/md';

export default function Security() {
    return (
        <section className="section" id="security">
            <div className="container">
                <div className={styles.securityBox}>
                    <div className={styles.iconWrapper}>
                        <MdSecurity size={48} />
                    </div>
                    <h2>Enterprise-Grade Confidentiality</h2>
                    <div className={styles.badges}>
                        <span>SOC-2 Compliant</span>
                        <span>End-to-End Encryption</span>
                        <span>ISO 27001</span>
                    </div>
                    <p>Your data never trains our public models. Hosted in secure, jurisdiction-compliant environments.</p>
                </div>
            </div>
        </section>
    );
}
