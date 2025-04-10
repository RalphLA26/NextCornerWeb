import React, { useState, useEffect } from 'react';
import styles from './VendorPage.module.css';
import MainLayout from '../../components/Layout/MainLayout';
import { fetchVendors } from '../../services/vendorService';
import { Helmet } from 'react-helmet-async'; // Import Helmet

interface Vendor {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

const VendorPage: React.FC = () => {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadVendors = async () => {
            try {
                const data = await fetchVendors();
                setVendors(data);
            } catch (err) {
                setError('Failed to load vendors.');
                console.error('Error loading vendors:', err);
            } finally {
                setLoading(false);
            }
        };

        loadVendors();
    }, []);

    if (loading) {
        return (
            <MainLayout>
                <div className={styles.loading}>Loading vendors...</div>
            </MainLayout>
        );
    }

    if (error) {
        return (
            <MainLayout>
                <div className={styles.error}>{error}</div>
            </MainLayout>
        );
    }

    return (
        <>
            <Helmet>
                <title>Local Street Food Vendors - Next Corner</title>
                <meta
                    name="description"
                    content="Discover a variety of local street food vendors. Find your favorite food and support local businesses."
                />
                <meta
                    name="keywords"
                    content="street food, local vendors, food, restaurants, mobile food"
                />
            </Helmet>
            <MainLayout>
                <div className={styles.container}>
                    <h1>Our Vendors</h1>
                    <ul className={styles.vendorList}>
                        {vendors.map((vendor) => (
                            <li key={vendor.id} className={styles.vendorItem}>
                                <img src={vendor.imageUrl} alt={vendor.name} className={styles.vendorImage} />
                                <div className={styles.vendorDetails}>
                                    <h2>{vendor.name}</h2>
                                    <p>{vendor.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </MainLayout>
        </>
    );
};

export default VendorPage;