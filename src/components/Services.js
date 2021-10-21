import React from 'react'
import image_3 from '../assets/images/3.png'
import image_4 from '../assets/images/4.png'
import image_5 from '../assets/images/5.png'
import image_6 from '../assets/images/6.png'

function Services() {
    return (
        <div className="Section__services h-full" id="services">
            <div className="Section__services__header bg-black">
                <div className="grid grid-cols-12  h-full flex-wrap content-end">
                    <div className="col-start-2 col-span-10 text-green-400 pb-5">
                        <div className="font-semibold text-xl">Services</div>
                    </div>
                </div>
            </div>
            <div className="Section__services__detail grid grid-cols-12 bg-black h-full">
                <div className="col-start-2 col-span-10 h-full">
                    <div className="grid grid-flow-row sm:grid-flow-col gap-2 h-full">
                        <div className="Section__services__detail__item">
                            <div className="Section__services__detail__item__header text-white text-3xl font-bold w-full mb-5">Residential Solar</div>
                            <img src={image_4} alt="play" className="Section__services__detail__item__image rounded-xl w-100 h-140 mb-10" />
                            <div className="Section__services__detail__item__dis text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                            <div className="Section__services__detail__item__point mt-5 flex items-end">
                                <div className="Section__services__detail__item__point__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1 mr-3 text-white bg-green-400 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="Section__services__detail__item__point__text text-white font-extrabold text-base">Customizable for your use</div>
                            </div>
                            <button className="Section__services__detail__item__button h-10 w-28 mt-5 rounded-md border-2 border-green-400 flex items-center justify-center hover:bg-green-400">
                                <div className="font-bold text-green-400 hover:text-white">View more</div>
                            </button>
                        </div>
                        <div className="Section__services__detail__item">
                            <div className="Section__services__detail__item__header text-white text-3xl font-bold w-full mb-5">Corparete Solar</div>
                            <img src={image_5} alt="play" className="Section__services__detail__item__image rounded-xl w-100 h-140 mb-10" />
                            <div className="Section__services__detail__item__dis text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                            <div className="Section__services__detail__item__point mt-5 flex items-end">
                                <div className="Section__services__detail__item__point__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1 mr-3 text-white bg-green-400 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="Section__services__detail__item__point__text text-white font-extrabold text-base">Customizable for your use</div>
                            </div>
                            <button className="Section__services__detail__item__button h-10 w-28 mt-5 rounded-md border-2 border-green-400 flex items-center justify-center hover:bg-green-400">
                                <div className="font-bold text-green-400 hover:text-white">View more</div>
                            </button>
                        </div>
                        <div className="Section__services__detail__item">
                            <div className="Section__services__detail__item__header text-white text-3xl font-bold w-full mb-5">Ground-mount Solar</div>
                            <img src={image_6} alt="play" className="Section__services__detail__item__image rounded-xl w-100 h-140 mb-10" />
                            <div className="Section__services__detail__item__dis text-white text-sm font-medium">Our innovative community solar & project<br />development solutions make solar possible for<br />households, businesses, property owners, and<br />more.Our innovative community.</div>
                            <div className="Section__services__detail__item__point mt-5 flex items-end">
                                <div className="Section__services__detail__item__point__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1 mr-3 text-white bg-green-400 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="Section__services__detail__item__point__text text-white font-extrabold text-base">Customizable for your use</div>
                            </div>
                            <button className="Section__services__detail__item__button h-10 w-28 mt-5 rounded-md border-2 border-green-400 flex items-center justify-center hover:bg-green-400">
                                <div className="font-bold text-green-400 hover:text-white">View more</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Section__services__bottom bg-green-400 w-full px-32">
                <div className="col-start-2 col-span-10 flex flex-wrap items-center justify-between h-full">
                <div className="Section__services__bottom__image">
                <img src={image_3} alt="play" className="h-full w-32" />
                </div>
                <div className="Section__services__bottom__text font-extrabold text-3xl text-center">Get a recommendation according to your <br />electricity bill!</div>
                <div className="Section__services__bottom__corner">
                    <button className="Section__services__bottom__button h-10 w-28 mt-5 rounded-md bg-black flex items-center justify-center hover:shadow-md">
                        <div className="font-bold text-white">Get Quote!</div>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services
