// src/components/Shared/Layout/MainLayout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li><Link to="/">Landing</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;