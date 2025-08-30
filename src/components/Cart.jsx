import useItemStore from '../store/itemStore'
import { IoMdRemoveCircleOutline } from "react-icons/io";

const Cart = () => {
  const { cart, removeFromCart } = useItemStore();
  return (
    <>

      <div className='px-8 py-6'>
       
        {cart.length === 0 && <p className='font-bold text-2xl text-yellow-500 fixed top-70 left-150'>Cart is Empty</p>}
        <div className='flex flex-col gap-5 w-full my-6'>
           <h2 className='text-2xl font-bold text-black mt-10'>
          Shopping Cart</h2>
          {cart.map((i) => (
            <div className='flex gap-5 w-[50%] shadow-md shadow-black rounded-2xl hover:shadow-2xl transition justify-around bg-gray-50 p-2'>
              <img src={i.image} alt="" className='w-30 rounded-2xl p-1 ' />
              <div className='flex flex-col'>
                <h2 className='font-semibold mt-5'>{i.name}</h2>
                <p className='text-gray-500'>${i.price}</p>
              </div>
              <button onClick={() => {
                removeFromCart(i);
                alert(`${i.name} is removed from Cart`)
              }} className='flex gap-2 h-15 p-3 my-5 bg-yellow-400 rounded-2xl hover:bg-yellow-500 text-white text-xl font-bold'>Remove<IoMdRemoveCircleOutline size={25} className='my-1' /></button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cart
