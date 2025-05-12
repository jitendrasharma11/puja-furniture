'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function Tab() {
    const tabs = [
        { id: 'tab1', label: 'Featured' },
        { id: 'tab2', label: 'New Arrivals' },
        { id: 'tab3', label: 'Onsale' },
    ];

    const data = {
        tab1: [
            {
                title: 'Featured Product 1',
                image: 'images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
                price: '₹1000',
                description: 'Top featured item',
            },
            {
                title: 'Featured Product 2',
                image: 'images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
                price: '₹1500',
                description: 'Stylish & premium quality',
            },
        ],
        tab2: [
            {
                title: 'New Arrival 1',
                image: 'images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
                price: '₹1200',
                description: 'Brand new product just arrived',
            },
        ],
        tab3: [
            {
                title: 'Onsale Product',
                image: 'images/1621171973378Isaac%20Chest%20of%20Drawer_.jpg',
                price: '₹800',
                description: 'Special discounted price',
            },
        ],
    };

    const [activeTab, setActiveTab] = useState('tab1');

    // ✅ Reusable Product Card
    const ProductCard = ({ item }) => {
        const { title, image, price, description, escription } = item;

        return (
            <div className='shadow-lg rounded p-4 flex flex-col bg-white'>
                <img src={image} alt={title} className='w-full h-48 object-cover rounded' />
                <div className='text-center mt-4'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <p className='text-gray-600 my-2'>{description || escription}</p>
                    <div className='border-t border-gray-200 my-2'></div>
                    <p className='text-xl text-[#C09578] font-bold'>{price}</p>
                    <div className='flex justify-center gap-2 mt-3'>
                        <Link href='/wishlist' className='border px-3 py-2 rounded hover:bg-gray-100'>
                            <FaHeart className='text-2xl text-red-500' />
                        </Link>
                        <Link href=''>
                            <button className='border px-4 py-2 rounded hover:bg-gray-100'>
                                Add To Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='p-6 max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold mb-6'>Our Products</h2>

            {/* Tabs */}
            <div className='flex space-x-4 border-b pb-2 mb-6'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 font-medium transition duration-200 ${
                            activeTab === tab.id
                                ? 'border-b-2 border-black text-black'
                                : 'text-gray-500 hover:text-black'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Product Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {data[activeTab]?.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}