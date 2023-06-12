import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-stone-100 transition-all ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
            <div className="">
                <div className="grid grid-cols-3 gap-4 items-center h-16">
                    <div className="col-span-1 hidden md:block">
                        <div className="flex ml-24">
                            <div className="flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className={`${activeLink === 'home' ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-900'
                                        } px-3 py-2 rounded-md text-xl`}
                                    onClick={() => handleLinkClick('home')}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/products"
                                    className={`${activeLink === 'products' ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-900'
                                        } px-3 py-2 rounded-md text-xl`}
                                    onClick={() => handleLinkClick('products')}
                                >
                                    Products
                                </Link>
                                {/* Add more navigation links as needed */}
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <div className="flex items-center justify-center">
                            {/* Replace the logo image URL with your own */}
                            {/* <img className="h-12 w-12 rounded-xl" src={require('./images/Logo.png')} alt="Logo" /> */}
                            <h1 className="font-bold text-2xl text-stone-900 ml-8 md:ml-0">
                                <span>
                                    FLYSPARK
                                </span>
                            </h1>
                        </div>
                    </div>

                    <div className="md:hidden col-span-2 flex justify-end mr-8">
                        <button
                            onClick={handleMenuToggle}
                            className="md:hidden text-stone-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {menuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 15H5V13H19V15ZM19 10H5V8H19V10ZM19 5H5V3H19V5Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 7H21V9H3V7ZM3 12H21V14H3V12ZM3 17H21V19H3V17Z"
                                    />
                                )}
                            </svg>
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                                <Link
                                    to="/"
                                    className={`${activeLink === 'home'
                                        ? 'text-stone-900 font-bold'
                                        : 'text-stone-500 hover:text-stone-900'
                                        } block px-4 py-2 text-sm`}
                                    onClick={() => {
                                        handleLinkClick('home');
                                        handleMenuToggle();
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/products"
                                    className={`${activeLink === 'products'
                                        ? 'text-stone-900 font-bold'
                                        : 'text-stone-500 hover:text-stone-900'
                                        } block px-4 py-2 text-sm`}
                                    onClick={() => {
                                        handleLinkClick('products');
                                        handleMenuToggle();
                                    }}
                                >
                                    Products
                                </Link>
                                {/* Add more navigation links as needed */}
                                <Link
                                    to="/cart"
                                    className={`${activeLink === 'cart'
                                        ? 'text-stone-900 font-bold'
                                        : 'text-stone-500 hover:text-stone-900'
                                        } block px-4 py-2 text-sm`}
                                    onClick={() => {
                                        handleLinkClick('cart');
                                        handleMenuToggle();
                                    }}
                                >
                                    Cart
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Cart symbol for medium screens or larger */}
                    <div className="hidden md:flex col-span-1 items-center justify-end mr-24">
                        <Link to="/cart" className={`${activeLink === 'cart' ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-900'
                            } px-3 py-2 rounded-md text-xl`}
                            onClick={() => handleLinkClick('cart')}>
                            {/* Add your cart icon here */}
                            <HiShoppingCart className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
