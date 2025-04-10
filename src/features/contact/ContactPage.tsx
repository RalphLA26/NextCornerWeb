// src/features/contact/ContactPage.tsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import MainLayout from '../../components/Layout/MainLayout';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
        submit?: string;
    }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const validateForm = () => {
        // ... (validation logic as before)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        // ... (handleSubmit logic as before)
    };

    return (
        <MainLayout>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <p>Please fill out the form below to get in touch with us.</p>

                {submissionSuccess && <div className={styles.successMessage}>Message sent successfully!</div>}
                {errors.submit && <div className={styles.errorMessage}>{errors.submit}</div>}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <div className={styles.error}>{errors.name}</div>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className={styles.error}>{errors.email}</div>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        {errors.message && <div className={styles.error}>{errors.message}</div>}
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                <div className={styles.contactInfo}>
                    <h2>Our Contact Information</h2>
                    <p>Email: contact@nextcorner.com</p>
                    <p>Phone: +1 123 456 7890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;