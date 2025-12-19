import styles from './SectionWrapper.module.css';

export default function SectionWrapper({
    children,
    id,
    className = '',
    theme = 'primary' // 'primary' | 'secondary'
}) {
    return (
        <section
            id={id}
            className={`
                ${styles.section} 
                ${theme === 'secondary' ? styles.secondary : ''} 
                ${className}
            `}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
}
