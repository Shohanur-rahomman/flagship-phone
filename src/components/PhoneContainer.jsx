import React, { useEffect, useState } from 'react';
import PhoneCart from './PhoneCart';

const PhoneContainer = ({ phones }) => {
    const [displayPhone, setDisplayPhone] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (showAll) {
            setDisplayPhone(phones);
        }
        else {
            setDisplayPhone(phones.slice(0, 6));
        }
    }, [phones, showAll])

    return (
        <>
            <p className='text-4xl font-bold text-center mt-10 mb-10'>New Phone : {phones.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6'>
                {
                    displayPhone.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
                }
            </div>
            <button onClick={() => {
                setShowAll(pre => !pre)
                if (showAll) window.scrollTo({
                    top: 490,
                    behavior: 'smooth'
                })
            }}
                href="#_" className="relative mb-10 mt-10 cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{showAll ? 'Show Less' : 'Show All'}</span>
            </button>
        </>
    );
};

export default PhoneContainer;


// top: 490,
//     behavior: 'smooth'