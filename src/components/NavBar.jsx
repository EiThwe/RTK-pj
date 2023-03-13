import React from 'react'
import {FaOpencart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const {quantity} = useSelector(state => state.cart)
  return (
 <nav className='p-4 container border-b-2 border-slate-600 shadow-md flex justify-between rounded-md  mx-auto w-full'>
  <h1 className='text-2xl text-slate-500'>MMS</h1>
 <Link to="/addtocart">
 <div className='w-12'>
  <FaOpencart className=' text-slate-500 text-2xl absolute '/>
  <span className='relative -top-4 left-7 text-xl text-slate-600'>{quantity}</span>
  </div>
 </Link>
 </nav>
  )
}

export default NavBar