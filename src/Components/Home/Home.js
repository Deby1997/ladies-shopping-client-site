import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../DiscountItem/Discount';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Items></Items>
            <Discount></Discount>
            <Footer></Footer>
        </div>
    );
};

export default Home;