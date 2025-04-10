// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Next Corner, Inc. All Rights Reserved.</p>
            <p>
                <a href="#" className={styles.footerLink}>Terms and Conditions</a> | <a href="#" className={styles.footerLink}>Privacy Policy</a>
            </p>
        </footer>
    );
};

export default Footer;