import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();

    const navToServeDetail = (name) => {
        navigate(`/product/${name}`);
    }
    return (
        <div>
            <div className="card shadow p-3 mb-5 bg-body rounded back-card" >
                <img src={img} alt="" height="400" />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h5 className="card-title">Price:{price}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <button className="btn btn-dark" onClick={() => navToServeDetail(name)}>Check out</button>
                </div>
            </div>
        </div>
    );
};

export default Product;