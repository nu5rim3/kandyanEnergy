import React from 'react'
import image_4 from '../assets/images/4.png'
import image_5 from '../assets/images/5.png'
import image_6 from '../assets/images/6.png'

function Services() {
    return (
        <div className="Section__services h-full">
            <div className="Section__services__header grid grid-cols-12 gap-4 bg-black">
                <div className="col-start-2 col-span-10 flex pt-28">
                    <p className="text-green-400">Services</p>
                    <div className="h-full w-1/3 flex flex-wrap content-center justify-start">
                        <div className="text-white text-3xl font-bold w-full mb-5">Residential Solar</div>
                        <img src={image_4} alt="play" className="Section__services__header__image rounded-xl w-100 h-100 pb-10" />
                        <div className="text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                    </div>
                    <div className="h-full w-1/3 flex flex-wrap content-center justify-start">
                    <div className="text-white text-3xl font-bold w-full mb-5">Corporate Solar</div>
                        <img src={image_5} alt="play" className="Section__services__header__image rounded-xl w-100 h-100 pb-10" />
                        <div className="text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                    </div>

                    <div className="h-full w-1/3 flex flex-wrap content-center justify-start">
                    <div className="text-white text-3xl font-bold w-full mb-5">Ground-mount Solar</div>
                        <img src={image_6} alt="play" className="Section__services__header__image rounded-xl w-100 h-100 pb-10" />
                        <div className="text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                    </div>

                </div>
            </div>
            <div className="Section__services__bottom bg-green-400">hi</div>
        </div>
    )
}

export default Services
