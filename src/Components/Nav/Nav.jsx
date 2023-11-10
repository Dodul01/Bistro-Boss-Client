import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const links = <div className='flex items-center'>
   <NavLink className='px-2 text-md' to='/'>Home</NavLink>
   <NavLink className='px-2 text-md' to='/ourMenu'>OurMenu</NavLink>
   <NavLink className='px-2 text-md' to='/ourShop'>Our Shop</NavLink>
   <NavLink className='px-2 text-md' to='/dashbord'>Dashbord</NavLink>
   <button className='btn btn-warning text-white'>Sign In</button>
  </div>

  return (
    <nav>
      <div className="navbar bg-black text-white bg-opacity-40 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
