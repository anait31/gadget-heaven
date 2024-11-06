import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Aboutus.css'

const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <title>About Us - Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] py-8 text-white px-4 md:px8 rounded-lg'>
                <div className='space-y-3'>
                    <h2 className='text-xl md:text-3xl font-bold text-center'>Welcome to GH Store</h2>
                    <p className='text-center'>Your one-stop destination for premium quality products at affordable prices! We are passionate about bringing you the best in [insert product category, e.g., fashion, home goods, electronics, etc.], carefully curated to meet your needs and exceed your expectations.</p>
                </div>
            </div>
            <div className='text-center mt-8'>
                <h2 className='text-xl md:text-3xl font-bold'>Customer Reviews</h2>
                <p className='md:text-xl mt-2'>Here’s what our customers are saying:</p>
            </div>
            <div className='mt-4'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=""
                >
                    <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>Sarah J</h3>
                                <p>"I absolutely love shopping at GH Store! The quality of the products is outstanding, and their customer service is top-notch. I bought a set of home decor items, Highly recommend!"</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>Michael T.</h3>
                                <p>"GH Store is my go-to place for electronics! Their prices are unbeatable, and everything arrives on time. I’ve never had any issues with my orders. I’ll definitely continue shopping here."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>Emily L.</h3>
                                <p>"Amazing experience! I found the perfect gift for my mom here, and she loved it. The checkout process was smooth, and my order arrived earlier than expected. I will be back for more!"</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>David R.</h3>
                                <p>"This store is a hidden gem! I was looking for some trendy fashion pieces, and GH Store didn’t disappoint. The quality is amazing, and everything fit perfectly. I’ll definitely be shopping here again."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>Jennifer K.</h3>
                                <p>"I’ve ordered from GH Store multiple times, and every time, I’m impressed with their service and the quality of the products. I had a small issue with my order, but their customer service handled it quickly."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>Laura H.</h3>
                                <p>"I’ve been shopping at GH Store for a few months now, and I’m constantly impressed by the quality and variety of products they offer. I recently purchased some gadgets, cooking so much easier."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 p-4 rounded-lg'>
                                <h3 className='text-xl font-semibold'>James P.</h3>
                                <p>"GH Store has exceeded my expectations! I bought a pair of wireless headphones, and they’re fantastic—great sound quality and a perfect fit. The ordering process was smooth, and my package arrived safely."</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUs;