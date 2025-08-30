import { useEffect } from 'react';
import useItemStore from '../store/itemStore'
import { FaOpencart } from "react-icons/fa";

const ItemCard = () => {
    const { fetchItems, items, addToCart } = useItemStore();
    useEffect(() => {
        fetchItems()
        console.log('items fetched');
    }, [fetchItems])

    return (
        <>
            <div className='main mt-20 px-6'>
                <h2 className='text-2xl font-bold mb-4'>Shop All Products</h2>
                <input type="text" placeholder='Search for Products' className='searchP w-[90%] mx-10 bg-yellow-100 text-black bg-ur rounded-lg my-4 p-2 shadow' />
                <div className='grid gap-6 lg:grid-cols-3 md:grid-col-2 sm:grid-cols-2 my-5 text-center'>
                    {items.map((i) => (
                        <div key={i.id} className='flex flex-col shadow-lg shadow-black w-60 p-3 rounded-md  justify-around  hover:shadow-2xl transition'>
                            <img src={i.image} alt="" width={150} className='w-full h-60 object-cover rounded-sm' />
                            <h2 className="mt-2 font-semibold">{i.name}</h2>
                            <p className="text-gray-700">${i.price}</p>
                            <button onClick={()=>{
                                addToCart(i),
                                alert(`${i.name} is added to cart`)
                            }} className='flex justify-around bg-yellow-400 rounded-md mx-5 my-3 hover:bg-yellow-500 text-white'>Add to Cart<FaOpencart size={25} /></button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ItemCard
