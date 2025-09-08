import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex gap-15 p-3 fixed bg-white w-full'>
            <NavLink to={'/'}><div className='logo text-2xl font-bold'>ShopSmart</div></NavLink>
            <nav>
                <ul className='flex gap-10 text-md list-none'>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:font-semibold"
                    }><li>Home</li></NavLink>
                    <NavLink to={'/shop'} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:font-semibold"
                    }><li>Shop</li></NavLink>
                    <NavLink to={'/newarrivals'} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:font-semibold"
                    }><li>New Arrivals</li></NavLink>
                    <NavLink to={'/sale'} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:font-semibold"
                    }> <li>Sale</li></NavLink>
                </ul>
            </nav>
            <div className='search w-100 flex gap-4 fixed top-2 right-0 justify-end mx-10'>
                <button><CiHeart size={28} /></button>
                <NavLink to={'/cart'} className={({ isActive }) =>
                    isActive ? "font-bold text-yellow-600 " : "hover:font-semibold"
                }><button className='' ><FaOpencart size={30} /></button></NavLink>
            </div>
        </div>
    )
}

export default Navbar
