import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhoneContainer from '../components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);
    
    
    const handleSearch = (e,text) => {
        e.preventDefault();
        if (text === '') return setPhones(searchPhones);
        const searchPhones = phones.filter(phone => 
            (phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) || 
             phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase()))
        );
        setPhones(searchPhones);
    }

    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            
            <PhoneContainer phones={phones}></PhoneContainer>
        </div>
    );
};

export default Home;