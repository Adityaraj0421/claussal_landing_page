import styles from './Button.module.css';

export default function Button({
    children,
    onClick,
    variant = 'primary', // 'primary' | 'outline'
    className = '',
    type = 'button',
    ...props
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
