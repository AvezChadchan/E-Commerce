import React from 'react'
import { useParams } from 'react-router-dom'
import useItemStore from '../store/itemStore';

const ProductDetail = () => {
    const { id } = useParams();
    const { items, addToCart } = useItemStore();
    const product = items.find((p) => p.id.toString() === id);
    if (!product) {
        return <h2 className="text-center text-2xl mt-20">Product Not Found</h2>;
    }
    return (
        <>
            <div className='flex gap-10 p-10 '>
                <img src={product.image} alt={product.name} className='w-95 h-95 rounded-xl object-cover shadow-lg shadow-black mt-10' />
                <div className='mt-14 flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <p className='text-lg font-semibold'>Price: ${product.price}</p>
                    <p>{product.desc} || "No Description Available"</p>
                    <button onClick={() => {
                        addToCart(product);
                        alert(`${product.name} is Added to Cart`)
                    }} className='mt-4 px-6 py-3 bg-yellow-400 text-white font-bold rounded-xl hover:bg-yellow-500'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
