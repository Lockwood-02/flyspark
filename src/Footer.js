import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    const resources = [
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
        {
            title: "Something 1",
            link: "https://isaaclockwood.net",
            image: require('./images/keebs/halo65-black.webp')
        },
    ];



    return (
        <>
            <div className="py-36">
                {/* Start Carousel */}
                <div className="carousel my-12 mx-auto">
                    <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
                        Our epic carousel
                    </h2>
                    <div className="relative overflow-hidden">
                        <div className="flex justify-between absolute top left w-full h-full">
                            <button
                                onClick={movePrev}
                                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                disabled={isDisabled('prev')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-20 -ml-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                <span className="sr-only">Prev</span>
                            </button>
                            <button
                                onClick={moveNext}
                                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                disabled={isDisabled('next')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-20 -ml-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                        <div
                            ref={carousel}
                            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ml-12 mr-12"
                        >
                            {resources.map((resource, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="carousel-item text-center relative w-64 h-64 snap-start ml-12"
                                    >
                                        <a
                                            href={resource.link}
                                            className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                            style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                        >
                                            <img
                                                src={resource.image || ''}
                                                alt={resource.title}
                                                className="w-full aspect-square hidden rounded-lg"
                                            />
                                        </a>
                                        <a
                                            href={resource.link}
                                            className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10 rounded-lg"
                                        >
                                            <h3 className="text-white py-6 px-3 mx-auto text-xl">
                                                {resource.title}
                                            </h3>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* End Carousel */}
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='ml-24'>
                            <div className="text-left max-w-md">
                                <h3 className="text-2xl font-semibold mb-2 text-left">Sign up for Flyspark's news, launches and special offers – straight to your inbox</h3>
                                <p className="text-gray-500">Get the latest updates and promotions.</p>
                                <div className="relative flex w-full flex-wrap items-stretch mt-3">
                                    <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                        <i className="flex items-center mt-1"><HiOutlineMail /></i>
                                    </span>
                                    <input type="text" placeholder="Enter an email..." className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pl-10" />
                                </div>
                                <div>
                                    <div className="flex space-x-4 py-4">
                                        <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-stone-300">
                                            <img className="h-4 w-4" src={require('./images/icons/Facebook.png')} alt="Facebook" />
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-stone-300">
                                            <img className="h-4 w-4" src={require('./images/icons/Instagram.png')} alt="Twitter" />
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-stone-300">
                                            <img className="h-4 w-4" src={require('./images/icons/Twitter.png')} alt="Instagram" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-24'>
                            <ul className="space-y-2">
                                <li>
                                    <h2 className='text-3xl'>Help</h2>
                                </li>
                                <li>
                                    <h2 className='text-3xl'>Careers</h2>
                                </li>
                                <li>
                                    <h2 className='text-3xl'>Shipping</h2>
                                </li>
                                <li>
                                    <h2 className='text-3xl'>Returns</h2>
                                </li>
                            </ul>

                            <ul className="space-y-2 ml-24">
                                <li>
                                    <h2 className='text-3xl'>Discounts</h2>
                                </li>
                                <li>
                                    <h2 className='text-3xl'>Bundles</h2>
                                </li>
                                <li>
                                    <h2 className='text-3xl'>Extras</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex ml-32 mb-24'>
                <p className="text-gray-500 mr-8">Privacy</p>
                <p className="text-gray-500">Terms</p>
            </div>
        </>
    );
}

export default Footer;