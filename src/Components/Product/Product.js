import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card shadow p-3 mb-5 bg-body rounded back-card" >
                <img src={img} alt="" height="400" />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    {/* <h5 className="card-title">Name:{_id}</h5> */}
                    <h5 className="card-title">Price:{price}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <button className="btn btn-dark" onClick={() => navigateToProductDetail(_id)}>Details</button>
                </div>
            </div>

        </div>
    );
};

export default Product;