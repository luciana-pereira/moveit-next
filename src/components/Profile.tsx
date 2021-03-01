import styles from '../styles/pages/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/luciana-pereira.png' alt='Luciana Pereira' />
            <div>
                <strong>Luciana Pereira</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />   
                    Level 1
                </p>
            </div>
        </div>
    );
}