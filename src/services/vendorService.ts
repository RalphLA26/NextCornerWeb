// src/services/vendorService.ts

interface Vendor {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

export const fetchVendors = async (): Promise<Vendor[]> => {
    // Replace this with your actual API call or data fetching logic
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Tacos El Rey',
                    description: 'Delicious tacos and Mexican food.',
                    imageUrl: '/assets/vendor1.jpg',
                },
                {
                    id: 2,
                    name: 'Burger Bliss',
                    description: 'Gourmet burgers and fries.',
                    imageUrl: '/assets/vendor2.jpg',
                },
                {
                    id: 3,
                    name: 'Pasta Paradise',
                    description: 'Authentic Italian pasta dishes.',
                    imageUrl: '/assets/vendor3.jpg',
                },
                {
                    id: 4,
                    name: 'Smoothie Spot',
                    description: 'Fresh and healthy smoothies.',
                    imageUrl: '/assets/vendor4.jpg',
                },
                // Add more vendors as needed
            ]);
        }, 1000); // Simulate API delay (1 second)
    });
};