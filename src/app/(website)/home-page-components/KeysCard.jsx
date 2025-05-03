import React from 'react'

export default function KeysCard() {
    return (
        <div className="bg-gray-50 py-10 my-7">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center text-2xl">
                        🌍
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Free Shipping</h3>
                    <p className="text-gray-500">Free shipping on all order</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center text-2xl">
                        ✔️
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Money Return</h3>
                    <p className="text-gray-500">Back guarantee under 7 days</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center text-2xl">
                        ⏰
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Online Support</h3>
                    <p className="text-gray-500">Support online 24 hours a day</p>
                </div>
            </div>
        </div>
    )
}
