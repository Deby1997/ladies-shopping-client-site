import React from 'react';
import './Footer.css';
import social1 from '../../Images/google.jpg';
import social2 from '../../Images/facebook.jpg';
import social3 from '../../Images/instagram.jpg';
import social5 from '../../Images/youtube.jpg';
import social6 from '../../Images/skype.jpg';
import social7 from '../../Images/pinster.jpg';
import social8 from '../../Images/email.jpg';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-3 mt-5 '>
            <div className='notice'>
                <div >
                    <h5>INFORMATION</h5>
                    <div className='text-secondary text-start'>
                        <p>Plans & Pricing</p>
                        <p>Sell Your Content</p>
                        <p>About Us</p>
                        <p>Jobs</p>
                    </div>
                </div>
                <div>
                    <h5 className='text-start'>LEGAL POLICY</h5>
                    <div className='text-secondary text-start'>
                        <p>Copyright Information</p>
                        <p>Tearms & Condition</p>
                        <p>License Agreement</p>
                        <p>Cookies Setting</p>
                        <p>Privacy Policy</p>
                        <p>Cookies Policy</p>

                    </div>
                </div>
                <div>
                    <h5>HELP</h5>
                    <div className='text-secondary text-start'>
                        <p>Support</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className='m-3 '>
                <img src={social1} alt="" width="30" height="34" />
                <img src={social2} alt="" width="30" height="34" />
                <img src={social3} alt="" width="30" height="34" />
                <img src={social5} alt="" width="30" height="34" />
                <img src={social6} alt="" width="30" height="34" />
                <img src={social7} alt="" width="30" height="34" />
                <img src={social8} alt="" width="30" height="34" />
            </div>
            <p><small>Copyright by &copy; {(new Date().getFullYear())}</small></p>
        </div>
    );
};

export default Footer;