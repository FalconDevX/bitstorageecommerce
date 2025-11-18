import React from 'react'
import Stars from './Stars'

const Product = () => {
    return (
        <div className="flex flex-row w-full h-[170px] px-4 gap-5 items-center border-t border-gray-700">

            <img
                className="w-[150px] h-[150px] object-contain bg-gray-800 rounded-md"
                src="/graphic-card.png"
                alt="Product"
            />

            <div className="flex flex-row justify-between flex-1 w-full self-start">
                <div>
                    <h1 className="text-white text-lg self-start mt-1">Product</h1>
                    <Stars rating={4.5} size={16} />
                    <div className="flex flex-col gap-2 mt-4 text-sm">
                        <p><span className="text-gray-400">Brand:</span> Generic</p>
                        <p><span className="text-gray-400">Color:</span> Multi</p>
                        <p><span className="text-gray-400">Category:</span> Accessories</p>
                    </div>
                </div>
                <div className="text-white text-lg self-start mt-1">
                    <h1>2000zł</h1>
                </div>
            </div>
        </div>
    );
};

export default Product