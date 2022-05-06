import React from 'react';
import image1 from '../../Images/combine.jpg';
import background from '../../Images/shopping.jpg';
import './Discount.css';


const Discount = () => {
    return (
        <div className='d-flex justify-content-center mt-2'>
            <div >
                <img src={image1} alt="" />
            </div>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                width: '220px'
            }}>

                <h3 className='text-white'>30% OFF</h3>
                <button type="button" class="btn   px-5 switch">Check</button>
            </div>
        </div>
    );
};

export default Discount;