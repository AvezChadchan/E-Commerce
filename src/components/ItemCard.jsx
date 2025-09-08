import { useEffect, useState } from 'react';
import useItemStore from '../store/itemStore'
import { FaOpencart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const ItemCard = ({ category, priceRange }) => {
    const { fetchItems, items, addToCart } = useItemStore();
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false)

    const filteredItems = items.filter(item => {
        const searchFilter = item.name.toLowerCase().includes(search.toLowerCase());
        const categoryFilter = category === "all" || category === "All Categories" || item.category.toLowerCase() === category.toLowerCase();
        let priceFilter = true;
        if (priceRange === "Under $50") priceFilter = item.price < 50;
        if (priceRange === "$50 - $100") priceFilter = item.price > 50 && item.price <= 100;
        if (priceRange === "$100 - $500") priceFilter = item.price > 100 && item.price <= 500;
        if (priceRange === "Above $500") priceFilter = item.price > 500;
        return searchFilter && categoryFilter && priceFilter;
    });

    useEffect(() => {
        fetchItems()
    }, [fetchItems])
    return (
        <>
            <div className='main mt-20 px-6'>
                <h2 className='text-2xl font-bold mb-4'>Shop All Products</h2>
                <div className='flex bg-yellow-200 rounded-xl'><input type="text" value={search} placeholder='Search for Products' className='searchP w-[95%] mx-1  text-black bg-ur rounded-lg my-2 p-1 shadow-black' onFocus={() => setIsSearching(true)} onChange={(e) => setSearch(e.target.value)} />
                    {isSearching ? <button onClick={() => setIsSearching(false)}><MdCancel size={20} /></button> : ""}
                </div>
                <div className='grid gap-6 lg:grid-cols-3 md:grid-col-2 sm:grid-cols-2 my-5 text-center'>
                    {filteredItems.length > 0 ? filteredItems.map((i) => (
                        <NavLink key={i.id} to={`/product/${i.id}`}>
                            <div className='flex flex-col shadow-lg shadow-black w-70 p-3 rounded-md  justify-around  hover:shadow-2xl transition'>
                                <img src={i.image} alt={i.name} width={150} className='w-full h-60 object-cover rounded-sm' />
                                <h2 className="mt-2 font-semibold">{i.name}</h2>
                                <p className="text-gray-700">${i.price}</p>

                                <button onClick={() => {
                                    addToCart(i),
                                        alert(`${i.name} is added to cart`)
                                }} className='flex justify-around bg-yellow-400 rounded-md mx-5 my-3 hover:bg-yellow-500 text-white'>Add to Cart<FaOpencart size={25} /></button>
                            </div>
                        </NavLink>
                    )) : (
                        <p className="text-yellow-500 col-span-full mt-40">No products found.</p>
                    )}
                </div>
            </div >

        </>
    )
}

export default ItemCard
