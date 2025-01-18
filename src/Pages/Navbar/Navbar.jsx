import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';

const Navbar = () => {
    const { user, loading, handleLogout } = useContext(userContext);
    console.log(user)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>

        <div className=" ml-4 flex items-center gap-x-4">
            <li>{user?.displayName}</li>
            <li>{user && <img className="w-20 rounded-full" src={user?.photoURL} alt="" />}</li>
        </div>
    </>
    return (
        <>
            {!loading && <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {links}
                        </ul>
                    </div>
                    <a className="btn glass text-xl text-white">Food <span className='text-red-500'>forever</span></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 items-center ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user ? <Link to='/login' className="btn">login</Link>
                        :
                        <Link onClick={() => handleLogout()} className="btn">logout</Link>}
                </div>
            </div>}
        </>
    );
};

export default Navbar;