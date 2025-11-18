"use client"
import React from 'react'
import Header from './Header'
import Product from './Product'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Products = () => {
    const [selectedSortOption, setSelectedSortOption] = useState('most_relevant')
    const [isSortPanelOpen, setIsSortPanelOpen] = useState(false)
    const sortPanelOptions = [
        {
            name: 'most_relevant',
            value: 'Od najtrafniejszych'
        },
        {
            name: 'ascending',
            value: 'Rosnąco'
        },
        {
            name: 'descending',
            value: 'Malejąco'
        },
        {
            name: 'best_opinions',
            value: 'Najlepsze opinie'
        }
    ]

    return (
        <div>
            <Header />
            <div className="flex flex-row items-start justify-center w-full max-w-6xl mx-auto mt-5 gap-5">
                <div className="w-1/4 h-150 flex items-start justify-center bg-blue-500">
                    <h1>Left Side</h1>
                </div>

                <div className="w-3/5 flex flex-col justify-center border-t border-gray-700">
                    <fieldset onClick={() => setIsSortPanelOpen(!isSortPanelOpen)} className=" self-end w-4/13 border border-gray-500 rounded-md pl-3 pr-2 pt-1 pb-2 text-white relative mt-1 mb-3 cursor-pointer">
                        <legend className="px-2 text-sm text-gray-400">Sortowanie</legend>

                        <div className="flex justify-between items-center text-xs">
                            <span>{sortPanelOptions.find(option => option.name === selectedSortOption)?.value}</span>
                            <ChevronDownIcon className="w-4 h-4" />

                            {isSortPanelOpen && (
                                <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 w-full bg-gray-800 rounded-md shadow-md mt-2">
                                    {sortPanelOptions.map((option, idx) => (
                                        <div key={option.name} onClick={()=>setSelectedSortOption(option.name)} 
                                        className={`p-2 hover:bg-gray-700 cursor-pointer
                                        ${idx === sortPanelOptions.length - 1 ? 'rounded-b-md' : ''}
                                        `}>
                                            {option.value}
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                        </div>
                    </fieldset>

                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>

    )
}

export default Products