import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {

    return (
        <>
            <Carousel showThumbs={false} showArrows={true}>
                <div>
                    <img src={require('../images/bg-1_r.jpg')} alt="bg 1" />
                </div>
                <div>
                    <img src={require('../images/bg-2-transformed.jpeg')} alt="bg 2" />
                </div>
                {/* <div>
                    <img src={require('../images/bg-3.jpg')} alt="bg 2" />
                </div> */}
            </Carousel>

            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

                <div className="flex items-center justify-center">
                    <div className="w-1/4 flex justify-items-start">
                        <div>
                            <h1 className="text-3xl font-bold pr-24">Wireless Keyboards</h1>
                            <h3 className="text-lg font-semibold">For a more free typing experience</h3>
                            <button className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/4 pl-24">
                        <img className="w-1/2 mx-2 rounded-3xl" src={require('../images/keebs/halo65-black.webp')} alt="halo65-black" />
                        <img className="w-1/2 mx-2 rounded-3xl" src={require('../images/keebs/halo65-white.webp')} alt="halo65-white" />
                    </div>
                </div>

                <div className="flex items-center justify-center mt-8">
                    <div className="w-1/4 flex justify-items-start">
                        <div>
                            <h1 className="text-3xl font-bold pr-24">Keycap Sets</h1>
                            <h3 className="text-lg font-semibold">Customize your experience</h3>
                            <button className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/4 pl-24">
                        <img className="w-1/2 mx-2 rounded-3xl" src={require('../images/keycaps/Keycap-Black.webp')} alt="Keycap-Black" />
                        <img className="w-1/2 mx-2 rounded-3xl" src={require('../images/keycaps/Keycap-Blue.webp')} alt="Keycap-Blue" />
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-2 gap-12 mt-24 justify-center">
                    <div className="relative">
                        <img className="w-[800px] h-[950px] rounded-xl object-cover" src={require('../images/keebs/top left.jpg')} alt="tl" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h3 className="text-white text-3xl font-semibold">The Story of Flyspark</h3>
                                <button class="mt-8 text-black bg-white font-medium rounded-full text-md px-7 py-4 text-center mr-2 mb-2 transition-all hover:-translate-y-1">FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="w-[800px] h-[950px] rounded-xl object-cover" src={require('../images/keebs/top right.jpg')} alt="tl" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h3 className="text-white text-3xl font-semibold">Design Your Board</h3>
                                <button class="mt-8 text-black bg-white font-medium rounded-full text-md px-7 py-4 text-center mr-2 mb-2 transition-all hover:-translate-y-1">FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="w-[800px] h-[950px] rounded-xl object-cover" src={require('../images/keebs/bottom left.png')} alt="tl" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h3 className="text-white text-3xl font-semibold">Wireless vs Wired</h3>
                                <button class="mt-8 text-black bg-white font-medium rounded-full text-md px-7 py-4 text-center mr-2 mb-2 transition-all hover:-translate-y-1">FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="w-[800px] h-[950px] rounded-xl object-cover" src={require('../images/keebs/bottom right.jpg')} alt="tl" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h3 className="text-white text-3xl font-semibold">The Journey</h3>
                                <button class="mt-8 text-black bg-white font-medium rounded-full text-md px-7 py-4 text-center mr-2 mb-2 transition-all hover:-translate-y-1">FIND OUT MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;
