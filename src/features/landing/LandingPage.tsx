// src/pages/Landing/LandingPage.tsx
import React from 'react';
import styles from './LandingPage.module.css';
import Footer from '../../components/Footer/Footer';
import WaitlistSignup from '../../components/WaitlistSignup/WaitlistSignup'; // Import the component

const LandingPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src="/assets/nextcornerlogo.png" alt="Next Corner Logo" className={styles.logo} />
            <div className={styles.tagline}>Discover Vendors you'll freakin' love</div>
            <div className={styles.mouthContainer}>
                <img src="/assets/openmouth.svg" alt="Open Mouth Graphic" className={styles.mouthGraphic} />
            </div>
            <div className={styles.qrCode}>
                <img src="/assets/qr.png" alt="QR Code" />
            </div>
            <WaitlistSignup /> {/* Add the WaitlistSignup component */}
            <Footer />
        </div>
    );
};

export default LandingPage;