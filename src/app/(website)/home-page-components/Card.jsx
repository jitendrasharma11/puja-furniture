import React from 'react'

export default function Card() {
    return (
        <section className="max-w-[1320px] mx-auto py-16 px-4">
            <div className="grid md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden group">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                        <img
                            src="/images/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
                            alt="Chair Collection 1"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute top-6 left-6 text-black">
                        <p className="text-sm">Design Creative</p>
                        <h3 className="text-xl font-bold">Chair Collection</h3>
                    </div>
                </div>
                <div className="relative overflow-hidden group">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                        <img
                            src="/images/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp"
                            alt="Chair Collection 2"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute top-6 left-6 text-black">
                        <p className="text-sm">Bestselling Products</p>
                        <h3 className="text-xl font-bold">Chair Collection</h3>
                    </div>
                </div>
                <div className="relative overflow-hidden group">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                        <img
                            src="/images/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp"
                            alt="Chair Collection 3"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute top-6 left-6 text-black">
                        <p className="text-sm">Onsale Products</p>
                        <h3 className="text-xl font-bold">Chair Collection</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
