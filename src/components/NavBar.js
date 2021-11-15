import React from 'react'
import logo from '../logo.png'
// import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex w-full items-center fixed justify-between flex-wrap bg-white p-6 opacity-75">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} alt="Kandyan" className="w-56" />
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
                <div className="text-sm lg:flex-grow flex justify-between mx-44">

                    <a href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-black  hover:text-green-400 mr-4 font-extrabold">
                        Services
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-black hover:text-green-400 mr-4 font-extrabold">
                        Solutions
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-black hover:text-green-400 font-extrabold">
                        Kandyan EV <div className="text-xs bg-red-400 h-5 w-12 px-3 rounded-xl text-white">new</div>
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-black hover:text-green-400 font-extrabold">
                        Contact
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-black hover:text-green-400 font-extrabold">
                        About Us
                    </a>
                </div>
                {/* <div>
                    <Link to="/calculator" >
                        <button className="inline-block text-sm font-extrabold px-4 py-2 leading-none border border-green-400 rounded-lg text-black  hover:border-transparent hover:text-teal-500 bg-green-400 h-10 w-28 hover:shadow hover:text-white mt-4 lg:mt-0">Get Quote!</button>
                    </Link>
                </div> */}
            </div>
        </nav>
    )
}

export default NavBar
