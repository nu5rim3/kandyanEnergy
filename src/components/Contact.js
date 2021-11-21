import React from 'react'

function Contact() {
    return (
        <div className="Section__contact grid grid-cols-12 h-full" id="contact">
            <div className="col-start-2 col-span-10">
                <div className="grid grid-cols-12 pt-56">
                    <div className="Section__contact__card col-span-12 bg-green-400 rounded-xl py-10">
                        <div className="Section__contact__card__title text-center text-2xl md:text-4xl font-extrabold pb-5">We’d love to hear from you</div>
                        <div className="Section__contact__card__subtitle text-center text-sm font-semibold text-gray-300 pb-5 px-5">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.<br /> Sapien tortor lacus arcu.</div>
                        <div className="col-start-2">
                            <div className="Section__contact__card__form grid grid-cols-8 gap-4">
                                <div className="Section__contact__card__form__fname col-span-4 h-10 flex justify-end">
                                    <input type="text"
                                        placeholder="First Name"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />

                                </div>
                                <div className="Section__contact__card__form__lname col-span-4 h-10 flex justify-start">
                                    <input type="text"
                                        placeholder="Last Name"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                                </div>
                                <div className="Section__contact__card__form__email col-span-4 h-10 flex justify-end">
                                    <input type="email"
                                        placeholder="Email"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                                </div>

                                <div className="Section__contact__card__form__phone col-span-4 h-10 flex justify-start">
                                    <input type="tel"
                                        placeholder="Phone"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                                </div>
                                <div className="Section__contact__card__form__subject col-span-8 h-10 flex justify-center">
                                    <input type="text"
                                        placeholder="Subject"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                                </div>
                                <div className="Section__contact__card__form__label col-span-8  h-20 flex justify-center">
                                    <input type="text"
                                        placeholder="Label"
                                        className="w-2/3 rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                                </div>
                                <div className="Section__contact__card__form__checkbox col-span-8  flex justify-center px-5">
                                    <input type="checkbox" className="rounded text-pink-500 mr-2 m-1" /><span className="text-sm"> By selecting this , you agree to the<span className="text-white"> Privacy Policy</span> and <span className="text-white">Cookie Policy</span></span>
                                </div>
                                <div className="Section__contact__card__form__button col-span-8 h-10 flex justify-center">
                                    <button className="w-2/3 rounded-md bg-gray-900 flex items-center justify-center hover:shadow-xl hover:bg-gray-600">
                                        <div className="font-bold text-white">Let's talk!</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
