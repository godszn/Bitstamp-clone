'use client'
import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface Notification{
    buttonClick: ()=>void;
}
const SwiperComponent: React.FC<Notification> = ({ buttonClick }) => {
    return (
        <div className='pb-[2rem] bg-white swiper-wrapps'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{delay: 40000}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="offering-component justify-around flex" style={{ backgroundColor: 'white', paddingTop: '4rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem' }}>
                        <div className="offering">
                            <div className='div flex'>
                                <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                    New Offering:
                                </span>
                                <h1 style={{ color: '#003b2f', marginLeft: '10px' }}>
                                    Set up
                                </h1>
                            </div>
                            <div>
                                <h1 style={{ color: '#003b2f' }}>
                                    Recurring buy or sell!
                                </h1>
                            </div>
                            <p style={{ color: '#003b2f', marginTop: '1rem' }}>
                                Effortlessly schedule your transaction and build your crypto routine.
                            </p>
                            <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                                Start now
                            </button>
                        </div>
                        <div className="offering-widget1 w-[35%]">
                            <img src="https://assets.bitstamp.net/msc/_ipx/_/bitstamp.net/recurring_payments_d103b6b8fb.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offering-component justify-around flex" style={{ backgroundColor: 'white', paddingTop: '4rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem' }}>
                        <div className="offering">
                            <div className='div flex'>
                                <h1 style={{ color: '#003b2f' }}>
                                    Bitstamp crypto lending -
                                </h1>
                            </div>
                            <div>
                                <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                    Earn with confidence
                                </span>
                            </div>
                            <p style={{ color: '#003b2f', marginTop: '1rem' }}>
                                The transparent way to put your crypto to work
                            </p>
                            <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                                Explore more
                            </button>
                        </div>
                        <div className="offering-widget w-[42%]">
                            <img src="https://assets.bitstamp.net/msc/_ipx/_/bitstamp.net/crypto_lending_47d7cc4d0f.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offering-component justify-around flex" style={{ backgroundColor: 'white', paddingTop: '4rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem' }}>
                        <div className="offering">
                            <div className='div flex'>
                                <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                    Bitstamp app:
                                </span>
                                <h1 style={{ color: '#003b2f', marginLeft: '10px' }}>
                                    navigating
                                </h1>
                            </div>
                            <div>
                                <h1 style={{ color: '#003b2f' }}>
                                    Crypto made simple
                                </h1>
                            </div>
                            <p style={{ color: '#003b2f', marginTop: '1rem' }}>
                                Feel good about crypto
                            </p>
                            <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                                Download now
                            </button>
                        </div>
                        <div className="offering-widget w-[35%]">
                            <img src="https://assets.bitstamp.net/msc/_ipx/_/bitstamp.net/simple_app_2caaf87c6e.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offering-component justify-around flex" style={{ backgroundColor: 'white', paddingTop: '4rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem' }}>
                        <div className="offering">
                            <div className='div flex'>
                                <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                    Bitstamp Pro
                                </span>
                            </div>
                            <p style={{ color: '#003b2f', marginTop: '1rem' }}>
                               Built for pro traders and crypto experts
                            </p>
                            <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                                Explore more
                            </button>
                        </div>
                        <div className="offering-widget w-[42%]">
                            <img src="https://assets.bitstamp.net/msc/_ipx/_/bitstamp.net/pro_dashboard_7a67cb106e.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="offering-component justify-around flex gap5 gap-[120px]" style={{ backgroundColor: 'white', paddingTop: '4rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '4rem' }}>
                        <div className="offering5">
                            <div className='div flex'>
                                <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                    Rated Number 1:
                                </span>
                                <h1 style={{ color: '#003b2f', marginLeft: '10px' }}>
                                    centralized
                                </h1>
                            </div>
                            <div>
                                <h1 style={{ color: '#003b2f' }}>
                                    crypto exchange
                                </h1>
                            </div>
                            <p style={{ color: '#003b2f', marginTop: '1rem' }}>
                                Top-rated centralized crypto exchange
                            </p>
                            <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                                Start now
                            </button>
                        </div>
                        <div className="offering-widget5 w-[18%]">
                            <img src="https://assets.bitstamp.net/msc/_ipx/_/bitstamp.net/top_exchange_trophy_828a46376d.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperComponent
