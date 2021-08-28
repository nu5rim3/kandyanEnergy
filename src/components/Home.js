import React from 'react'
import image_1 from '../assets/images/2.png'

function Home() {
    return (
        <div className="Section__home h-screen">
            <div className="Section__home__header grid grid-cols-12 gap-4">
                <div className="col-start-2 col-span-10 flex">
                    <div className="h-full w-full sm:w-full md:w-full lg:w-full flex flex-wrap content-center justify-start">
                        <div className="Section__home__header__title w-full text-5xl font-extrabold text-white pb-10">Ready to Go Green?<br />We can help</div>

                        <div className="Section__home__header__subtitle w-full text-sm font-normal text-white">Kandyan Energy offers a variety of Renewable<br />Energy products and services throughout<br />Sri lanka.</div>
                    </div>
                    <div className="h-full w-1/2 flex flex-wrap content-center justify-center">
                        <img src={image_1} alt="play" className="Section__home__header__image w-100 h-100" />
                    </div>
                </div>
            </div>
            <div className="Section__home__bottom h-full  flex flex-wrap content-center justify-center ">
                <button className="Section__home__bottom__button hover:border-green-400 w-7 h-12 border-2 rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white animate-bounce hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
                </button>
            </div>
        </div>
    )
}

export default Home
