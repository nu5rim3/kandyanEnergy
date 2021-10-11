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
                                <div className="flex flex-wrap pt-5">
                                    <div className="pr-5">
                                        <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="ceo kandyan energy" className="w-20 h-20 rounded-full" />
                                    </div>
                                    <div className="text-white font-semibold">Sajith Rangajeewa<br />
                                        <span className="text-gray-400">CEO</span>
                                    </div>
                                </div>
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
                            <div className="w-1/4 flex flex-col">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div className="text-white font-semibold text-4xl flex justify-center pt-5">1000+</div>
                                <div className="text-green-400 text-sm flex justify-center">customers</div>
                            </div>
                            <div className="w-1/4 flex flex-col">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <div className="text-white font-semibold text-4xl flex justify-center pt-5">100+</div>
                                <div className="text-green-400 text-sm flex justify-center">premium customers</div>
                            </div>
                            <div className="w-1/4 flex flex-col">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-white font-semibold text-4xl flex justify-center pt-5">90,000 kW</div>
                                <div className="text-green-400 text-sm flex justify-center">saved per year</div>
                            </div>
                            <div className="w-1/4 flex flex-col">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="text-white font-semibold text-4xl flex justify-center pt-5">20 + years</div>
                                <div className="text-green-400 text-sm flex justify-center">of quality service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;