import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../DiscountItem/Discount';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Discount></Discount>
            <Footer></Footer>
        </div>
    );
};

export default Home;