import React from 'react';
import Hero from '../components/Hero';
import PhoneContainer from '../components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            
            <PhoneContainer phones={data}></PhoneContainer>
        </div>
    );
};

export default Home;