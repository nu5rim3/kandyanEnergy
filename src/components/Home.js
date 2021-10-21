import React, { useReducer, useState } from 'react'
import image_1 from '../assets/images/2.png'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function Home() {

    const [formData, setFormData] = useReducer(formReducer, {});
    // button
    const [submitting, setSubmitting] = useState(false);
    // visibility of form
    const [loaded, setLoaded] = useState(true);
    // visibility of the plans
    const [showDetails, setShowDetails] = useState(false);
    // visibility of the plans
    const [showContact, setShowContact] = useState(false);
    // solar details
    const [solarDetail, setSolarDetail] = useState([])

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        fetch('https://kanyanenergyapi.herokuapp.com/api/solar/find?cbe_bill=' + formData.cbe_bill)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setSolarDetail(result.data)
                setTimeout(() => {
                    setLoaded(false)
                    setSubmitting(false);
                    if (result.data.length === 0) {
                        setShowContact(true)
                    } else if (result.data.length > 0) {
                        setShowDetails(true)
                    }
                }, 3000)

            })
            .catch(err => {
                console.log(err)
            })


    }

    const goBack = () => {
        setShowDetails(false)
        setShowContact(false)
        setLoaded(true)
    }

    const CardListItem = (data) => {
        return (
            <div className="w-1/2 text-center bg-white mr-4 px-3 rounded shadow-md py-6">
                <div className="text-l py-2 font-semibold">{data.value.solar_type}</div>
                <div className="">Bill type : {data.value.bill_type}</div>
                <div className="">Capacity : {data.value.capacity}</div>
                <div className="">Inverter Solar : {data.value.inverter_solar}</div>
                <div className="">Panel Quantity 450 : {data.value.panel_quantity_450}</div>
                <div className="">Required Space 450 : {data.value.required_space_450}</div>
                <div className="">Total Panel 450 : {data.value.total_panel_wattage_450}Kw</div>
                <div className="">Unit Generation : {data.value.unit_generation}</div>
                <div className="">Warranty 10 : {data.value.warranty_10.price_1}</div>
                <div className="">Warranty 20 : {data.value.warranty_20.price_1}</div>

                <input type="button" className="w-full mt-4 rounded-md bg-gray-900 flex items-center py-2 justify-center text-white font-bold hover:shadow-xl hover:bg-gray-600" value="select" />
            </div>
        )
    }

    return (
        <div className="Section__home h-screen">
            <div className="Section__home__header grid grid-cols-12 gap-4">
                <div className="col-start-2 col-span-10 flex">
                    <div className="w-1/2 flex flex-wrap content-center justify-start pt-32">
                        <img src={image_1} alt="play" className="Section__home__header__image w-100 h-100 pb-16" />
                        <div className="Section__home__header__title w-full text-5xl font-extrabold text-white pb-10">Ready to Go Green?<br />We can help</div>

                        <div className="Section__home__header__subtitle w-full text-sm font-normal text-white">Kandyan Energy offers a variety of Renewable<br />Energy products and services throughout<br />Sri lanka.</div>
                    </div>
                    <div className={loaded ? "h-full w-1/2 flex flex-wrap content-center justify-end pt-32" : "invisible"}>
                        <form onSubmit={handleSubmit} className="Section__contact__card__form grid grid-cols-8 gap-4 bg-green-400 py-10 px-14 rounded-xl shadow-xl">
                            <div className="col-span-8 text-center font-semibold text-3xl pb-8">Calculate your bill</div>
                            <div className="Section__contact__card__form__fname col-span-4 h-10 flex justify-end">
                                <input type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />

                            </div>
                            <div className="Section__contact__card__form__lname col-span-4 h-10 flex justify-start">
                                <input type="text"
                                    placeholder="Last Name"
                                    name="last_name"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>

                            <div className="Section__contact__card__form__email col-span-8 h-10 flex justify-end">
                                <input type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />

                            </div>
                            <div className="Section__contact__card__form__lname col-span-8 h-10 flex justify-start">
                                <input type="tel"
                                    placeholder="Tel"
                                    name="tel"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div className="Section__contact__card__form__lname col-span-8 h-10 flex justify-start">
                                <div className="relative inline-block w-full text-gray-700">
                                    <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" name="district" onChange={setFormData}>
                                        <option>select the district</option>
                                        <option>central</option>
                                        <option>westen</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="Section__contact__card__form__lname col-span-8 h-10 flex justify-start">
                                <input type="number"
                                    placeholder="Bill amount"
                                    name="cbe_bill"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            <div className="Section__contact__card__form__lname col-span-8 h-10 flex justify-start">
                                <input type="number"
                                    placeholder="Units"
                                    name="cbe_unit"
                                    onChange={setFormData}
                                    className="w-full rounded-lg px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>
                            {/* 
                            <div className="Section__contact__card__form__lname col-span-8 h-10 flex justify-start">
                                <div className="relative inline-block w-full text-gray-700">
                                    <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                        <option>select the type</option>
                                        <option>SolarX</option>
                                        <option>Solar china</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div> */}
                            <div className="Section__contact__card__form__checkbox col-span-8  flex justify-center">
                                <input type="checkbox" className="rounded text-pink-500 mr-2 m-1 " /> send me an email about the budget.
                            </div>
                            <div className="col-span-8">
                                {!submitting &&
                                    <input type="submit" className="w-full rounded-md bg-gray-900 flex items-center py-2 justify-center text-white font-bold hover:shadow-xl hover:bg-gray-600" value="Calculate" />
                                }
                                {submitting &&
                                    <input type="submit" className="w-full rounded-md bg-gray-900 flex items-center py-2 justify-center text-white font-bold hover:shadow-xl hover:bg-gray-600" value="Calculating..." disabled />
                                }
                            </div>
                        </form>

                    </div>

                    {/* show the details of the solar */}
                    {showDetails ?
                        <div className="h-full w-1/2 flex flex-wrap content-center justify-end">
                            <div className="w-6 font-bold text-center rounded-full bg-white" onClick={goBack}>X</div>
                            <div className="Section__contact__card__form w-full grid grid-cols-12 gap-4 bg-green-400 py-10 px-14 rounded-xl shadow-xl">
                                <div className="col-span-12 text-center font-semibold text-3xl pb-8">Solar plans</div>

                                <div className="gird col-span-12 flex flex-row">
                                    {solarDetail.map((x, i) =>
                                        <CardListItem value={x} key={i} />
                                    )}
                                </div>
                            </div>
                        </div>
                        : null}
                    {/* end of the solar detail */}

                    {/* show the contact more */}
                    {showContact ?
                        <div className="h-full w-1/2 flex flex-wrap content-center justify-end">
                            <div className="w-6 font-bold text-center rounded-full bg-white" onClick={goBack}>X</div>
                            <div className="Section__contact__card__form w-full grid grid-cols-12 gap-4 bg-green-400 py-10 px-14 rounded-xl shadow-xl">
                                <div className="col-span-12 text-center font-semibold text-3xl pb-8">Please contact <a href="tel:+1123-456-7890">123-456-7890</a></div>
                            </div>
                        </div>
                        : null}
                    {/* end of the contact more */}
                </div>
            </div>
            <div className="Section__home__bottom h-full  flex flex-wrap content-center justify-center ">
                <button className="Section__home__bottom__button hover:border-green-400 w-7 h-12 border-2 rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate-bounce hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Home
