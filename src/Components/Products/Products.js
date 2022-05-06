import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h3>Our Products</h3>
            <div className='services-container container'>
                {
                    services.map(service => <Product
                        key={service._id}
                        service={service}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;