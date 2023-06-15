import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProductPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.reduce((acc, category) => {
        const foundProduct = category.items.find((item) => item.id === parseInt(productId));
        if (foundProduct) {
            return foundProduct;
        }
        return acc;
    }, null);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <Link to="/products" className="flex items-center text-gray-500">
                    <FaArrowLeft className="mr-2" />
                    Back to Products
                </Link>
                <div className="text-gray-500 uppercase tracking-widest">{product.name}</div>
            </div>
            <div className="flex items-center mb-8">
                <img src={product.image} alt={product.name} className="w-96 h-96 rounded-lg" />
                <div className="ml-8">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-500">Product ID: {productId}</p>
                    <p className="mt-4 text-gray-800">
                        {product.description}
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-3 text-lg font-semibold bg-gray-800 text-white rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="py-8 border-t border-gray-300">
                <h2 className="text-3xl font-bold mb-4">Product Details</h2>
                <ul className="list-disc list-inside text-gray-800">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Ut dictum lectus vel libero volutpat</li>
                    <li>Sed dictum tortor volutpat</li>
                    <li>Quisque non turpis id metus finibus elementum</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;
