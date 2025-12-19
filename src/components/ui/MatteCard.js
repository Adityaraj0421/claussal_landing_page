import styles from './MatteCard.module.css';

export default function MatteCard({ children, className = '' }) {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
}
