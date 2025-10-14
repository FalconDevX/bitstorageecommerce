import React from 'react'

const Search = () => {
    return (
        <div className="flex flex-row items-center justify-center w-full py-4 gap-4">
            <input type="text" placeholder="Search..." className="w-[30%] px-4 py-2 text-white rounded-lg ring-1 ring-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            </input>
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-medium px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">Search</button>

        </div>
    )
}

export default Search