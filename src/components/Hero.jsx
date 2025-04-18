import React from 'react';
import img from '../../public/images/banner.png';

const Hero = () => {
    return (
        <div className='mt-10'>
            <img src={img} alt="banner image" className='w-ful mx-auto md:max-w-md' />
            <div className='text-center space-y-4'>
                <h2 className='md:font-thin font-semibold text-3xl  md:text-7xl text-gray-700'>Brows,Search,Views,Buy</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, ipsa providentbr
                    <br />nulla ullam consectetur illum blanditiis ab hic perferendis.</p>
                <form className='flex flex-col md:flex-row justify-center items-center'>
                    <input className='py-3 px-4 rounded mb-4 md:mb-0  mr-4 shadow-md w-2/4' type="text" placeholder='search your favorite phone' />
                    <button href="#_" className="relative cursor-pointer inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Search</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;