// src/components/ui/WaitlistSignup.tsx
import React, { useState } from 'react';
import styles from './WaitlistSignup.module.css';

interface WaitlistSignupProps {
    onSignupSuccess?: () => void;
}

const WaitlistSignup: React.FC<WaitlistSignupProps> = ({ onSignupSuccess }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        // Basic email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Replace with your actual API call to submit the email
            // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

            setSignupSuccess(true);
            setIsSubmitting(false);
            if (onSignupSuccess) {
                onSignupSuccess();
            }
        } catch (err) {
            setError('Failed to sign up. Please try again.');
            setIsSubmitting(false);
        }
    };

    if (signupSuccess) {
        return <div className={styles.success}>You're on the waitlist! We'll notify you when the app is ready.</div>;
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Join Waitlist'}
            </button>
        </form>
    );
};

export default WaitlistSignup;