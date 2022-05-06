import React from 'react';
import image1 from '../../Images/img1.jpg';
import image2 from '../../Images/img2.jpg';
import image3 from '../../Images/img3.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image3} class=" w-100 img-fluid" alt="Banner Imag" />
                        <div class="carousel-caption  d-md-block text-dark fw-bold ">
                            <h4>Rate Us</h4>
                            <p>Customer rating is most valuable.</p>
                            <button type="button" class="btn btn-dark px-5">Rate</button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src={image2} class=" w-100 h-50" alt="..." />
                        <div class="carousel-caption  d-md-block text-dark fw-bold">
                            <h4>Shop Now</h4>
                            <p>Buy any ladies products from here.</p>
                            <button type="button" class="btn btn-dark px-5">Shop</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image1} class=" w-100 h-50" alt="..." />
                        <div class="carousel-caption  d-md-block text-dark fw-bold">
                            <h4>Flat Discount</h4>
                            <p>If you buy any 4 clothes,you will get flat 20% discount.</p>
                            <button type="button" class="btn btn-dark px-5">Discount</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;