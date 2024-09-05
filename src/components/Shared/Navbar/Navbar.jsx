
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import man from '../../../assets/images/account.png'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <li><Link>Home</Link></li>
        <li><Link>Products</Link></li>
        <li><Link>Categories</Link></li>
        <li><Link>Custom</Link></li>
        <li><Link>Blog</Link></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Sign Out Success",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <nav className="mb-24 max-w-[1200px] mx-auto navbar bg-base-100 py-6 border-b-[1px]">
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
                        className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                        <img src={man} />
                    </div>
                </div>
                {
                    user?.email ? <>
                        <button
                            onClick={handleSignOut}
                            className='bg-blue-500 text-white px-4 py-3 rounded-md font-semibold'>Sign Out</button>
                    </> :
                        <Link to='/signin'>
                            <button className='bg-blue-500 text-white px-4 py-3 rounded-md font-semibold'>Sign In</button>
                        </Link>
                }

            </div>
        </nav>
    );
};

export default Navbar;