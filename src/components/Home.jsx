import React, { useState } from 'react'
import ItemCard from './ItemCard'

const Home = () => {

    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("all");

    const [appliedFilter, setAppliedFilter] = useState({
        category: "All Categories",
        priceRange: "All Prices"
    });

    const handleAppliedFilter = () => {
        setAppliedFilter({ category, priceRange });
    }
    
    return (
        <div className='flex'>
            <div className='h-full bg-white w-[30%] fixed top-14 left-0 p-4 shadow'>
                <h2 className="text-xl font-bold my-4">Filters</h2>
                <div className="mb-4">
                    <h3 className='block font-medium mb-2'>Category</h3>
                    <select
                        name="category"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>All Categories</option>
                        <option>Clothing</option>
                        <option>Footwear</option>
                        <option>Furniture</option>
                        <option>Others</option>
                        <option>Accessories</option>
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="block font-medium mb-2">Price Range</h3>
                    <select
                        name="price"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                        <option>All Prices</option>
                        <option>Under $50</option>
                        <option>$50 - $100</option>
                        <option>$100 - $500</option>
                        <option>Above $500</option>
                    </select>
                </div>
                <button
                    className="bg-yellow-300 font-medium px-4 py-2 rounded-full" onClick={handleAppliedFilter}>
                    Apply Filters
                </button>
            </div>
            <div className="ml-[30%] w-[70%]">
                <ItemCard category={appliedFilter.category} priceRange={appliedFilter.priceRange} />
            </div>
        </div>
    )
}

export default Home
