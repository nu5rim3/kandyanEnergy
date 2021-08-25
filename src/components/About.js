import React from 'react'

function About() {
    return (
        <div className="Section__about bg-black">
            <div className="Section__about__top pt-32">
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                        <div className="flex flex-wrap justify-between">
                            <div className="Section__about__top__topic text-white font-semibold text-3xl w-2/3">We manage our conduct by what is right for people, the environment, and the profession we love. </div>
                            <div className="Section__about__top__topic text-green-400 font-semibold text-xl w-1/3 text-right">About Us</div>
                        </div>
                        <div className="flex flex-wrap pt-5">
                            <div className="w-1/2 text-sm text-gray-400">
                                <div className="pt-5 w-2/3">
                                    Be Ethical: We manage our conduct by what is right for people, the environment, and the profession we love. We are in business primarily to solve the world’s #1 issue of global warming and to grow local, sustainable jobs. Profits follow.
                                </div>
                                <div className="pt-5 w-2/3">
                                    Always Be Learning: We are stewards of a new and rapidly growing industry. As leaders in our field, it is our responsibility to continue our education and remain informed.
                                </div>
                            </div>
                            <div className="w-1/2 text-sm text-gray-400">
                                <div className="pt-5 w-2/3">
                                    Be Ethical: We manage our conduct by what is right for people, the environment, and the profession we love. We are in business primarily to solve the world’s #1 issue of global warming and to grow local, sustainable jobs. Profits follow.
                                </div>
                                <div></div>
                            </div>
                            <div className="pt-8">
                                <button className="Section__services__detail__item__button h-10 w-28 mt-5 rounded-md border-2 border-green-400 flex items-center justify-center hover:bg-green-400">
                                    <div className="font-bold text-green-400 hover:text-white">Read more</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Section__about__bottom">
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                        <div className="flex flex-wrap pt-20">
                            <div className="w-1/4 bg-red-100 flex justify-center">1</div>
                            <div className="w-1/4 bg-red-200 flex justify-center">2</div>
                            <div className="w-1/4 bg-red-300 flex justify-center">3</div>
                            <div className="w-1/4 bg-red-400 flex justify-center">4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;