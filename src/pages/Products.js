import React from 'react';

const Products = () => {
    const categories = [
        {
            name: 'Wireless Keyboards',
            items: [
                { name: 'Keyboard 1', image: require('../images/keebs/halo65-black.webp') },
                { name: 'Keyboard 2', image: require('../images/keebs/halo65-white.webp') },
                // Add more items
            ],
        },
        // Add more categories

        {
            name: 'Keycaps',
            items: [
                { name: 'Set 1', image: require('../images/keycaps/Keycap-Black.webp') },
                { name: 'Set 2', image: require('../images/keycaps/Keycap-Blue.webp') },
                // Add more items
            ],
        },
    ];

    return (
        <div className="mt-48 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-left pr-24">Available Products</h1>
            <div className="mt-24 flex flex-col justify-center">
                {categories.map((category) => (
                    <div key={category.name} className="mb-8 flex-col items-center">
                        <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                        <div className="flex">
                            {category.items.map((item) => (
                                <div key={item.name} className="flex flex-col items-center mr-4">
                                    <img src={item.image} alt={item.name} className="h-40 w-40 rounded-md" />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
