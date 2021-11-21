import React from 'react'
import image_10 from '../assets/images/10_1.png'

function EV() {
    return (
        <div className="Section__ev bg-black" id="ev_section">
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10 pb-10">
                    <div className="Section__ev__topic pt-32">
                        <div className="text-green-400 pb-5 text-center font-semibold text-xl">Kandyan EV proudly present</div>
                        <div className="text-white text-2xl md:text-4xl text-center font-extrabold">The first ever eBike on the Sri Lankan market.<br /> Dedicated to all EV fans!</div>
                    </div>
                </div>
                <div className="Section__ev__card col-start-2 col-span-10 bg-white rounded-2xl py-12">
                    <div className="Section__ev__card__name text-gray-900 text-2xl md:text-5xl text-center">Coming Soon</div>
                    <div className="Section__ev__card__image flex justify-center">
                        <img src={image_10} alt="ola bike" className="w-2/3 md:w-1/2" />
                    </div>
                    <div className="flex justify-center">
                        <button className="Section__ev__card__button h-10 w-40 mt-5 rounded-md bg-gray-900 flex items-center justify-center hover:shadow-xl hover:bg-green-400">
                            <div className="font-bold text-white">Pre Order Now!</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EV
