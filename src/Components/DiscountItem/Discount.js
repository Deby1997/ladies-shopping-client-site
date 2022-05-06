import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../Images/combine.jpg';
import background from '../../Images/shopping.jpg';
import './Discount.css';


const Discount = () => {
    const navigate = useNavigate();
    const handledis = () => {
        navigate('/product');
    }
    return (
        <div>
            <h3 className='fw-bold m-5 text-danger'>Have A Look,about 20% discount!</h3>
            <div className='d-flex justify-content-center mt-2'>
                <div >
                    <img src={image1} alt="" />
                </div>
                <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    width: '220px'
                }}>

                    <h3 className='text-white'>20% OFF</h3>
                    <button onClick={handledis} type="button" class="btn   px-5 switch">Check</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;