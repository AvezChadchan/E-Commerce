import React from 'react'
import ItemCard from './ItemCard'

const Home = () => {
    return (
        <div className='flex'>
            <div className='h-full bg-white w-[30%] fixed top-14 left-0 p-4 shadow'>
                <h2 className="text-xl font-bold my-4">Filters</h2>
                <div className="mb-4">
                    <h3 className='block font-medium mb-2'>Category</h3>
                    <select
                        name="category"
                        className="w-full border border-gray-300 rounded-md p-2">
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
                        className="w-full border border-gray-300 rounded-md p-2">
                        <option>All Prices</option>
                        <option>Under $50</option>
                        <option>$50 - $100</option>
                        <option>$100 - $500</option>
                        <option>Above $500</option>
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="block font-medium mb-1">Size</h3>
                    <select
                        name="size"
                        className="w-full border border-gray-300 rounded-md p-2">
                        <option>All Sizes</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="block font-medium mb-1">Color</h3>
                    <select
                        name="color"
                        className="w-full border border-gray-300 rounded-md p-2">
                        <option>All Colors</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Black</option>
                    </select>
                </div>
                <button
                    className="bg-yellow-300 font-medium px-4 py-2 rounded-full">
                    Apply Filters
                </button>
            </div>
            <div className="ml-[30%] w-[70%]">
                <ItemCard />
            </div>
        </div>
    )
}

export default Home
