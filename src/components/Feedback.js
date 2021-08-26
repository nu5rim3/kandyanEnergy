import React from 'react'
import image_8 from '../assets/images/8.png'
import solar_1 from '../assets/images/solar_1.jpg'
import solar_2 from '../assets/images/solar_2.jpg'
import solar_3 from '../assets/images/solar_3.jpg'
import solar_4 from '../assets/images/solar_4.jpg'


function Feedback() {
    return (
        <div className="Section__feedback h-full bg-black">
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                    <div className="Section__feedback__top pt-32">
                        <div className="Section__feedback__top__topic text-green-400 font-semibold text-xl">Feedback around Sri Lanka</div>
                        <div className="flex flex-wrap">
                            <div className="w-2/3">
                                <div className="text-white font-extrabold text-3xl pt-10">Solutions to fit all your energy requirements.<br />From home use to industrial scale</div>
                                <div className="text-gray-400 text-sm pt-5 w-1/2">Be Ethical: We manage our conduct by what is right for people, the environment, and the profession we love. We are in business primarily to solve the world’s #1 issue of global warming and to grow local, sustainable jobs. Profits follow.</div>
                            </div>
                            <div className="w-1/3">
                                <img src={image_8} alt="kandyan energy map" className="w-full h-full mb-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                    <div className="Section__feedback__bottom">
                        <div className="Section__feedback__bottom__topic text-white font-semibold text-1xl pb-5">See our work</div>
                        <div className="grid grid-cols-4">
                            <div className="Section__feedback__bottom__card pr-12">
                                <img src={solar_1} alt="kandyan energy" className="Section__feedback__bottom__card__image h-52 rounded-xl" />
                                <div className="flex flex-wrap justify-between pt-3">
                                    <div className="Section__feedback__bottom__card__type text-xs text-white font-semibold">solarX panel</div>
                                    <div className="Section__feedback__bottom__card__volt text-sm text-green-400 font-extrabold">⚡ 8400kW</div>
                                </div>
                                <div className="Section__feedback__bottom__card__location text-1xl font-extrabold text-green-400">Kelaniya</div>
                            </div>
                            <div className="Section__feedback__bottom__card pr-12">
                                <img src={solar_2} alt="kandyan energy" className="Section__feedback__bottom__card__image h-52 rounded-xl" />
                                <div className="flex flex-wrap justify-between pt-3">
                                    <div className="Section__feedback__bottom__card__type text-xs text-white font-semibold">solarX panel</div>
                                    <div className="Section__feedback__bottom__card__volt text-sm text-green-400 font-extrabold">⚡ 32000kW</div>
                                </div>
                                <div className="Section__feedback__bottom__card__location text-1xl font-extrabold text-green-400">Mawilmada</div>
                            </div>
                            <div className="Section__feedback__bottom__card pr-12">
                                <img src={solar_3} alt="kandyan energy" className="Section__feedback__bottom__card__image h-52 rounded-xl" />
                                <div className="flex flex-wrap justify-between pt-3">
                                    <div className="Section__feedback__bottom__card__type text-xs text-white font-semibold">solarX panel</div>
                                    <div className="Section__feedback__bottom__card__volt text-sm text-green-400 font-extrabold">⚡ 120000kW</div>
                                </div>
                                <div className="Section__feedback__bottom__card__location text-1xl font-extrabold text-green-400">Ambilipitiya</div>
                            </div>
                            <div className="Section__feedback__bottom__card pr-12">
                                <img src={solar_4} alt="kandyan energy" className="Section__feedback__bottom__card__image h-52 rounded-xl" />
                                <div className="flex flex-wrap justify-between pt-3">
                                    <div className="Section__feedback__bottom__card__type text-xs text-white font-semibold">solarX panel</div>
                                    <div className="Section__feedback__bottom__card__volt text-sm text-green-400 font-extrabold">⚡ 53000kW</div>
                                </div>
                                <div className="Section__feedback__bottom__card__location text-1xl font-extrabold text-green-400">Aladeniya</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
