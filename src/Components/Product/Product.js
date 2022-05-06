import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();

    const navToServeDetail = (name) => {
        navigate(`/product/${name}`);
    }
    return (
        <div>
            <div class="card" >
                <img src={img} alt="" width="300" height="400" />
                <div class="card-body">
                    <h5 class="card-title">Name:{name}</h5>
                    <h5 class="card-title">Price:{price}</h5>
                    <p class="card-text"><small>{description}</small></p>
                    <button class="btn btn-primary" onClick={() => navToServeDetail(name)}>Check out</button>
                </div>
            </div>
        </div>
    );
};

export default Product;