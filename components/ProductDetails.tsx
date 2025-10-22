import React from "react";
import Header from "./Header";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#111318] text-white">
      <Header />

      <div className="flex flex-col md:flex-row justify-center items-center flex-grow gap-10 px-10 py-10">
        {/* LEFT: Product Image */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
          <div className="bg-[#1A1C22] rounded-lg p-4">
            <Image
              src="/ps5.png"
              alt="PlayStation 5"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/ps5.png"
              alt="PlayStation 5 Thumbnail"
              width={80}
              height={80}
              className="rounded-lg opacity-70 hover:opacity-100 cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col w-full md:w-1/3 gap-4">
          <h1 className="text-3xl font-semibold">PlayStation 5</h1>
          <div className="flex items-center gap-2">
            <p className="text-orange-500 text-lg">★★★★☆</p>
            <span className="text-gray-400">(4.5)</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The PlayStation 5 takes gaming to the next level with ultra-HD
            graphics, a powerful 825GB SSD, and ray tracing technology for
            realistic visuals. Whether you're into high-action games or immersive
            storytelling, the PS5 delivers fast loading times, seamless gameplay,
            and stunning visuals.
          </p>

          <div className="flex items-baseline gap-3 mt-2">
            <span className="text-3xl font-bold">$499.99</span>
            <span className="text-gray-500 line-through">$599.99</span>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm">
            <p><span className="text-gray-400">Brand:</span> Generic</p>
            <p><span className="text-gray-400">Color:</span> Multi</p>
            <p><span className="text-gray-400">Category:</span> Accessories</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="w-1/2 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">
              Add to Cart
            </button>
            <button className="w-1/2 py-3 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90 transition-opacity">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
