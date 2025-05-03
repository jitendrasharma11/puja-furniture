"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function ReviewSlide() {
    let Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };
    return (
        <section className='pt-7'>
            <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say ?</h2>
            <Slider {...Settings}>
                <div>
                <div className="max-w-[1320px] mx-auto px-4 py-10 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>

                    <div className="flex flex-col items-center">
                        <img
                            src="/images/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                            alt="Kathy Young"
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h4 className="font-semibold">KATHY YOUNG</h4>
                        <p className="text-gray-500 text-sm my-3">CEO of SunPark</p>

                        <div className="flex space-x-1 text-[#C09578] text-[25px]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="max-w-[1320px] mx-auto px-4 py-10 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>

                    <div className="flex flex-col items-center">
                        <img
                            src="/images/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg"
                            alt="Kathy Young"
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h4 className="font-semibold">KATHY YOUNG</h4>
                        <p className="text-gray-500 text-sm my-3">CEO of SunPark</p>

                        <div className="flex space-x-1 text-[#C09578] text-[25px]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="max-w-[1320px] mx-auto px-4 py-10 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>

                    <div className="flex flex-col items-center">
                        <img
                            src="/images/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png"
                            alt="Kathy Young"
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h4 className="font-semibold">KATHY YOUNG</h4>
                        <p className="text-gray-500 text-sm my-3">CEO of SunPark</p>

                        <div className="flex space-x-1 text-[#C09578] text-[25px]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                </div>
                </div>
            </Slider>
        </section>
    )
}
