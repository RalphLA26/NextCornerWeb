// src/features/about/AboutPage.tsx
import React from 'react';
import styles from './AboutPage.module.css';
import MainLayout from '../../components/Layout/MainLayout';

const AboutPage: React.FC = () => {
    return (
        <MainLayout>
            <div className={styles.container}>
                <h1>About Next Corner</h1>

                <section className={styles.section}>
                    <h2>Our Story</h2>
                    <p>
                        Next Corner was born from the simple idea of connecting people with the incredible street food vendors in their neighborhoods. We noticed that while there's a wealth of delicious food being made right on our streets, it's often hard to discover and order from these vendors. We wanted to change that.
                    </p>
                    <p>
                        Our mission is to empower street vendors by providing them with a platform to reach more customers and streamline their ordering process. At the same time, we aim to make it easier for consumers to enjoy the unique and diverse flavors of street food in their communities.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where every neighborhood's street food culture is celebrated and easily accessible. We want to build a community where consumers and vendors thrive together, creating a vibrant and sustainable ecosystem.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Meet the Team</h2>
                    <div className={styles.team}>
                        <div className={styles.teamMember}>
                            <img src="/assets/team1.jpg" alt="Team Member 1" className={styles.teamImage} />
                            <h3>John Doe</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/assets/team2.jpg" alt="Team Member 2" className={styles.teamImage} />
                            <h3>Jane Smith</h3>
                            <p>Lead Developer</p>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default AboutPage;