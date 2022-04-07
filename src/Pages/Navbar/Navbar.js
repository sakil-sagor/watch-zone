import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ProfileShortcut from "../Login/ProfileShortcut/ProfileShortcut";
import pro1 from '../../images/pro1.png'
import './Navbar.css'

// navbar area for all 

const Navbar = ({ fixed }) => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const barsIcon = <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    const [profileState, setProfileState] = useState('Off');

    // function for user img 
    let loginPhoto = () => {
        if (user.photoURL === null) {
            return pro1;
        } else {
            return user.photoURL;
        }
    }
    // toggle login logout function 
    const toggleText = () => {
        setProfileState((state) => (state === "On" ? "Off" : "On"));
    };

    return (
        <>
            <div className="  bg-gradient-to-b from-indigo-900  to-indigo-900 navbar-main">
                <div className='flex flex-wrap py-2 transition-all delay-1000 full-width-all m-auto container'>
                    <div className='w-full'>
                        <nav className='relative flex flex-wrap items-center justify-between rounded'>
                            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                                <div className='w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'>
                                    <Link
                                        className='leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-600 text-3xl md:text-5xl font-extrabold'
                                        to='/'
                                    >
                                        <span className='text-white'>  Fashion-Zone.</span>
                                    </Link>
                                    <button
                                        className='primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                        type='button'
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {barsIcon}
                                    </button>
                                </div>
                                <div
                                    className={
                                        "lg:flex flex-grow items-center justify-center" +
                                        (menuOpen ? " flex" : " hidden")
                                    }
                                    id='example-navbar-info'
                                >
                                    <div className='flex flex-col lg:flex-row list-none lg:ml-auto items-center	'>
                                        <div className='nav-item'>
                                            <NavLink className="manu-item p-2  font-semibold text-white " to="/home">Home</NavLink >
                                        </div>

                                        <div className='nav-item'>
                                            <NavLink className="manu-item p-2  font-semibold text-white" to="/shop">Shop</NavLink >
                                        </div>
                                        <div className='nav-item'>
                                            <NavLink className="manu-item p-2  font-semibold text-white" to="/addToCart">  <i class="fas fa-cart-plus text-white  text-2xl font-bold"></i></NavLink >
                                        </div>
                                        <div className="profile-holder py-3 ml-4">
                                            {
                                                user.email || user.displayName ?
                                                    <img style={{ cursor: 'pointer' }} onClick={toggleText} className="w-12 rounded-full" src={loginPhoto()} alt="" />
                                                    :
                                                    < NavLink className="manu-item p-2 text-lg font-bold text-indigo-900 bg-white hover:text-pink-800 text-white rounded-md" to="/login"> LogIn </NavLink >
                                            }
                                            <div className='nav-item my-4 lg:my-0 proflie-item'>

                                                {user.email || user.displayName ?
                                                    <div className={profileState === 'Off' ? "active-profile-icon-area" : 'profile-icon-area'}>
                                                        <ProfileShortcut ></ProfileShortcut>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Navbar;
