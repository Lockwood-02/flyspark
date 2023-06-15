import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
    // const categories = [
    //     {
    //         name: 'Wireless Keyboards',
    //         items: [
    //             { id: 1, name: 'Halo 65', image: require('../images/keebs/halo65-black.webp') },
    //             { id: 2, name: 'Halo 65', image: require('../images/keebs/halo65-white.webp') },
    //             // Add more items
    //         ],
    //     },
    //     // Add more categories

    //     {
    //         name: 'Keycaps',
    //         items: [
    //             { id: 3, name: 'Cherry Profile Shine-through Keycaps', image: require('../images/keycaps/Keycap-Black.webp') },
    //             { id: 4, name: 'Shiokaze nSA PBT Keycaps', image: require('../images/keycaps/Keycap-Blue.webp') },
    //             // Add more items
    //         ],
    //     },

    //     {
    //         name: 'Switches',
    //         items: [
    //             { id: 5, name: 'NuPhy Polaris Switches', image: require('../images/switches/NuPhy Polaris Switches.webp') },
    //             { id: 6, name: 'NuPhy Fleeting Gold Switches', image: require('../images/switches/NuPhy Fleeting Gold Switches.webp') },
    //             // Add more items
    //         ],
    //     },
    // ];

    // return (
    //     <div className="mt-48 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    //         <h1 className="text-5xl font-bold text-left pr-24 w-full border-b-4 border-gray-300">Available Products</h1>
    //         <div className="mt-24 flex flex-col justify-center">
    //             {categories.map((category) => (
    //                 <div key={category.name} className="mb-8 flex-col items-center w-full border-b-8 border-gray-300 py-6">
    //                     <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
    //                     <div className="flex">
    //                         {category.items.map((item) => (
    //                             <Link key={item.name} to={`/products/${item.id}`} className="flex flex-col items-center mr-4">
    //                                 <img src={item.image} alt={item.name} className="w-2/3 rounded-md" />
    //                                 <span className='text-xl'>{item.name}</span>
    //                             </Link>
    //                         ))}
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );




    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold mb-8 border-b-4 border-gray-300">Available Products</h1>
            {products.map((category) => (
                <div key={category.name} className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {category.items.map((item) => (
                            <Link key={item.name} to={`/products/${item.id}`} className="flex flex-col items-center">
                                <div className="relative mb-2">
                                    <img src={item.image} alt={item.name} className="w-full rounded-lg" />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 hover:opacity-75 transition duration-300 rounded-lg"></div>
                                </div>
                                <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );





};

export default Products;
