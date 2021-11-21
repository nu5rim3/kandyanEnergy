import React from 'react'
import logo from '../logo_1.png'
import twitter from '../assets/images/twitter_1.png'
import facebook from '../assets/images/facebook_1.png'
import insta from '../assets/images/instagram_1.png'

function Details() {
    return (
        <div className="Section__details grid-cols-12 hidden md:grid">

            <div className="Section__details__top pt-44 col-start-2 col-span-10">
                <div className="grid grid-cols-12 pb-14 border-b-2 border-gray-500">
                    <div className="col-span-4 text-white">
                        <div className="text-3xl font-bold">Get in touch</div>
                    </div>
                    <div className="col-span-4 text-white">
                        <div className="font-semibold py-4">Sales</div>
                        <div className="text-gray-400">sales@kandyanenergy.com</div>
                        <div className="text-gray-400">+94 81 220 8108</div>
                    </div>
                    <div className="col-span-4 text-white">
                        <div className="font-semibold py-4">Support</div>
                        <div className="text-gray-400">support@kandyanenergy.com</div>
                        <div className="text-gray-400">+94 81 220 8108</div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-14">
                    <div className="col-span-4 text-white">
                        <div className="text-3xl font-bold">Locations</div>
                    </div>
                    <div className="col-span-4 text-white">
                        <div className="font-semibold py-4">Head Office</div>
                        <div className="text-gray-400">No 419/1/1 William Gopallawa Mawatha,</div>
                        <div className="text-gray-400">Mulgampola. Kandy.</div>
                    </div>
                    <div className="col-span-4 text-white">
                        <div className="font-semibold py-4">Warehouse</div>
                        <div className="text-gray-400">No 419/1/1 William Gopallawa Mawatha,</div>
                        <div className="text-gray-400">Mulgampola. Kandy.</div>
                    </div>
                </div>


            </div>
            <div className="Section__details__bottom col-span-12 flex flex-col pt-10">
                <div className="flex justify-center">
                    <img src={logo} alt="kandyan energy" className="w-44" />
                </div>
                <div className="flex justify-center text-white pt-5">Services<span className="pl-10" />Solutions<span className="pl-10" />Kandyan EV<span className="pl-10" />Contact<span className="pl-10" />About Us</div>
                <div className="flex justify-center text-gray-400 pt-5"><img src={facebook} alt="" className="h-4 w-4" /><span className="pl-5" /><img src={insta} alt="" className="h-4 w-4" /><span className="pl-5" /><img src={twitter} alt="" className="h-4 w-4" /></div>
                <div className="flex justify-center text-gray-400 pt-5">© 2021 Kandyan Energy, Pvt Ltd. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Details
