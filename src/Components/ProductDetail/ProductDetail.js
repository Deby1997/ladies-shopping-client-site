import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2 className='m-5'>Product Detail</h2>
            <h3>Welcome to service detail:{productId}</h3>
            <Link to='/checkout'>
                <button className='btn btn-primary'>CheckOrder</button>
            </Link>
        </div>
    );
};

export default ProductDetail;