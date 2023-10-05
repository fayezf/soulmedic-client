import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';


const NavBar = () => {
    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
        }>Home</NavLink></li>
        <li><NavLink to="/doctor" className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
        }>Doctors</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
        }>Gallery</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
        }>About</NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start px-28">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img style={{ width: '30px' }} src={logo} alt="" />
                        <h2 className="font-bold uppercase text-xl">SoulMedic</h2>
                    </div>
                </div>
                <div className="navbar-center hidden px-8 lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end pr-12">
                    <Link to="/signin" className="btn-sm text-blue-400 text-lg font-semibold">Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;