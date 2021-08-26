import React from 'react'

function Contact() {
    return (
        <div className="Section__contact grid grid-cols-12 h-full">
            <div className="col-start-2 col-span-10 pt-32">
                <div className="grid grid-cols-12">
                    <div className="Section__contact__card col-start-3 col-span-8 bg-green-400 rounded-xl py-10">
                        <div className="Section__contact__card__title text-center text-4xl font-extrabold pb-5">We’d love to hear from you</div>
                        <div className="Section__contact__card__subtitle text-center text-sm font-semibold text-gray-300">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.<br /> Sapien tortor lacus arcu.</div>

                        <div className="Section__contact__card__form grid grid-cols-8 gap-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
