import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './features/landing/LandingPage';
import AboutPage from './features/about/AboutPage';
import ContactPage from './features/contact/ContactPage';
import VendorPage from './features/vendors/VendorPage';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<VendorPage />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/vendors" element={<VendorPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;