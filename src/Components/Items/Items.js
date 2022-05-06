import React from 'react';
import image1 from '../../Images/bodycon.webp';
import image2 from '../../Images/offshoulder.webp';
import image3 from '../../Images/shift.jpg';
import image4 from '../../Images/midi.jpg';
import image5 from '../../Images/half.jpg';
import image6 from '../../Images/elegent.jpg';
import './Items.css';

const Items = () => {
    return (
        <div>
            <h1 className='fw-bold my-2'>CATEGORIES</h1>
            <div className='d-lg-flex justify-content-evenly'>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image1} alt="" />
                    <p>Bodycon</p>
                </div>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image2} alt="" />
                    <p>Off Shoulder</p>
                </div>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image3} alt="" />
                    <p>Shift Dress</p>
                </div>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image4} alt="" />
                    <p>Midi Dress</p>
                </div>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image5} alt="" />
                    <p>Half Sleve Dress</p>
                </div>
                <div>
                    <img style={{ width: 200, height: 200, borderRadius: 400 / 2 }} src={image6} alt="" />
                    <p>Elegent Dress</p>
                </div>
            </div>

        </div>
    );
};

export default Items;