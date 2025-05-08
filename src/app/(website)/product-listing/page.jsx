import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function ProductListing() {


    return (
        <div>
            <div className="flex min-h-screen max-w-[1320px] m-auto bg-white font-sans">
                {/* Sidebar */}
                <aside className="w-75 p-4 border-r border-gray-300">
                    <div className="mb-5 h-[450px] overflow-y-scroll ">
                        <h2 className="font-bold mb-5">Categories</h2>
                        <h3 className="font-bold mb-2">Tables</h3>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Side and End Tables</li>
                            <li><input type="checkbox" /> Nest of Tables</li>
                            <li><input type="checkbox" /> Console Table</li>
                            <li><input type="checkbox" /> Coffee Table Sets</li>
                            <li><input type="checkbox" /> Coffee Tables</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Living Storage</h4>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Prayer Units</li>
                            <li><input type="checkbox" /> Display Unit</li>
                            <li><input type="checkbox" /> Shoe Racks</li>
                            <li><input type="checkbox" /> Chest Of Drawers</li>
                            <li><input type="checkbox" /> Cabinets and Sideboard</li>
                            <li><input type="checkbox" /> Bookshelves</li>
                            <li><input type="checkbox" /> Tv Units</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Mirrors</h4>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Wooden Mirrors</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Sofa Cum Bed</h4>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Wooden Sofa Cum Bed</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Sofa Sets</h4>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> L Shape Sofa</li>
                            <li><input type="checkbox" /> 1 Seater Sofa</li>
                            <li><input type="checkbox" /> 2 Seater Sofa</li>
                            <li><input type="checkbox" /> 3 Seater Sofa</li>
                            <li><input type="checkbox" /> Wooden Sofa Sets</li>
                        </ul>
                        <h4 className="font-semibold mt-4 mb-2">Swing Jhula</h4>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Wooden Jhula</li>
                        </ul>
                    </div>

                    <div className="mb-5 h-[250px] overflow-y-scroll ">
                        <h3 className="font-bold mb-2">Material</h3>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Sheesham Wood</li>
                            <li><input type="checkbox" /> Teak Wood</li>
                            <li><input type="checkbox" /> Rose Wood</li>
                            <li><input type="checkbox" /> Satin Wood</li>
                            <li><input type="checkbox" /> Sal Wood</li>
                            <li><input type="checkbox" /> Mango Wood</li>
                            <li><input type="checkbox" /> Mahogany Wood</li>
                            <li><input type="checkbox" /> Mulberry Wood</li>
                            <li><input type="checkbox" /> Decolor Wood</li>
                            <li><input type="checkbox" /> Jackfruit</li>
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h3 className="font-bold mb-2">Color</h3>
                        <ul className="text-sm space-y-1">
                            <li><input type="checkbox" /> Burnt Amber</li>
                            <li><input type="checkbox" /> Golden Teak</li>
                            <li><input type="checkbox" /> Carbon Black</li>
                            <li><input type="checkbox" /> Faded Oak</li>
                            <li><input type="checkbox" /> Weathered French Grey</li>
                            <li><input type="checkbox" /> Faded Ochre</li>
                            <li><input type="checkbox" /> Weathered Walnut</li>
                            <li><input type="checkbox" /> Mango Cream</li>
                            <li><input type="checkbox" /> Cobalt Blue</li>
                            <li><input type="checkbox" /> Black Finish</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">Filter By Price</h3>
                        <input type="range" min="0" max="200000" className="w-full custom-range" />
                        <div className="text-sm mt-1">Rs. 0 - Rs. 200000</div>
                        <button className="mt-2 px-4 py-1 bg-brown-700 text-white text-sm rounded">Filter</button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-4 text-sm">
                        <div>Sort by:</div>
                        <div>Showing 1–1 of 1 results</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border rounded shadow ">
                            <img src="/images/1617981904164Hrithvik%20Stool__.jpg" alt="Hrithik Stool" className="w-full h-48 object-cover mb-2" />
                            <div className='p-4 text-center'>
                                <p className="text-xs text-gray-600">Side and End Tables</p>
                                <h3 className="font-semibold text-base">Hrithik Stool</h3>
                                <div className="flex items-center space-x-2 mt-1 justify-center">
                                    <span className="line-through text-gray-400 text-sm">Rs. 10,000</span>
                                    <span className="text-[#C09578] font-bold text-base">Rs. 6,000</span>
                                </div>
                                <div className="flex gap-1.5 items-center justify-center mt-4 relative">
                                    <span
                                        className="bg-[#F1F1F1] p-2 rounded cursor-pointer hover:bg-[#C09578] group"
                                    >
                                        <FaHeart />
                                        <button className="px-3 py-2 bg-[#F1F1F1] text-black text-xs rounded hover:bg-[#C09578] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full mt-2">
                                            Add to Wishlist
                                        </button>
                                    </span>
                                    <button className="px-3 py-2 bg-[#F1F1F1] text-black text-xs rounded hover:bg-[#C09578]">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
