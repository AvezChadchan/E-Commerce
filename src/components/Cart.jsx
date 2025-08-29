import React from 'react'
import useItemStore from '../store/itemStore'

const Cart = () => {
  const { cart, removeFromCart } = useItemStore();
  return (
    <div className='px-8 py-6'>
      {cart.length === 0 && <p className='font-bold text-2xl text-yellow-500 fixed top-70 left-150'>Cart is Empty</p>}
      <div className="grid grid-cols-4 px-5 py-10 gap-5">
        {cart.map((i) => (
          <div key={i.id} className='flex flex-col text-center shadow-lg shadow-black w-60 p-3 rounded-md  justify-around  hover:shadow-2xl transition'>
            <img src={i.image} alt="" width={150} className='w-full h-60 object-cover rounded-sm' />
            <h2 className="mt-2 font-semibold">{i.name}</h2>
            <p className="text-gray-700">${i.price}</p>
            <div className='btns flex h-10'>
              <button onClick={() => {
                removeFromCart(i),
                  alert(`${i.name} is removed from cart`)
              }} className='flex justify-around h-8 bg-yellow-400 rounded-md my-2 w-full hover:bg-yellow-500 text-white '>Remove</button>
              <button onClick={() => {
                // addToCart(i)
              }} className='flex justify-around h-8 bg-yellow-400 rounded-md mx-2 my-2 hover:bg-yellow-500 text-white w-full'>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
