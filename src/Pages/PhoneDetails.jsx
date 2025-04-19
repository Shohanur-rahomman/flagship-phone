import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const phone = data.find(phone => phone.id === parseInt(id));
    const { image, brand, name, description } = phone || {};

    
    return (
        <div className="card bg-base-100  shadow-sm mt-10">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{brand }</h2>
                <h2 className="card-title">{name }</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default PhoneDetails;