import React, { useEffect, useState } from 'react'
import { API_URL } from "../api/auth.api"

const Search = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        if (query.trim() === "") {
            setResults([])
            return
        }

        const controller = new AbortController() // kontroler do przerywania fetchów
        const delay = setTimeout(async () => {
            try {
                const response = await fetch(`${API_URL}/products/?name=${query}`, {
                    signal: controller.signal, // połącz z kontrolerem
                })
                if (!response.ok) throw new Error("Błąd zapytania")
                const data = await response.json()
                console.log(data)
                setResults(data)
            } catch (error: any) {
                if (error.name !== "AbortError") console.error(error)
            }
        }, 400)

        return () => clearTimeout(delay)
    }, [query])

    return (
        <div className="flex flex-row items-start justify-center w-full py-4 gap-4">
            <div className="relative w-[50%]">
                <input
                    onChange={handleSearch}
                    value={query}
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 text-white rounded-lg ring-1 ring-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
                />
                {query && (
                    <button
                        onClick={() => setQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-300 cursor-pointer text-xl"
                    >
                        ×
                    </button>
                )}
                {results.length > 0 && (
                    <ul className="absolute left-0 w-full bg-neutral-900 border border-gray-700 rounded-lg mt-2 max-h-60 overflow-y-auto z-50">
                        {results.map((item: any) => (
                            <li
                                key={item.id}
                                className="p-2 hover:bg-[#282C30] cursor-pointer"
                            >
                                {item.name} - {item.price} zł
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-medium px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                Search
            </button>
        </div>

    )
}

export default Search
