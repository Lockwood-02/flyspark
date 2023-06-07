import React from 'react';
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {

    return (
        <>
            <div className="py-36">
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