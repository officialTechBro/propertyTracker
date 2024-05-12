'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import {FaArrowLeft, FaMapMarker,FaBed, FaTimes, FaBath, FaRulerCombined, FaCheck, FaBookmark, FaShare, FaPaperPlane} from 'react-icons/fa'
import { fetchProperty } from "@/utilities/request"
import PropertyHeaderImage from "@/components/PropertyHeaderImage"
import Spinner from "@/components/LoadingSpinner"


const PropertyPage = () => {
    const {id} = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!id) return
            try {
                const {property} = await fetchProperty(id)
                setProperty(property)
            } catch (error) {
                console.error('Error fetching property', error)
            } finally {
                setLoading(false)
            }
        }

        if (property === null) {
            fetchPropertyData()
        }
    }, [id, property])

    if (!property && !loading) {
        return (
            <h1 className="text-center text-2xl font-bold mt-10">Property not found</h1>
        )
    }

  return <>
  {loading && <Spinner loading={loading} />}
    {!loading && property && (
        <>
            <PropertyHeaderImage image={property.images[0]} />
        <section>
            <div className="container m-auto py-6 px-6">
                <Link
                href="/properties"
                className="text-rose-800 hover:text-rose-800 flex items-center"
                >
                <FaArrowLeft className="mr-2"/> Back to Properties
                </Link>
            </div>
        </section>
        <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                    <div
                    className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                    >
                    <div className="text-gray-500 mb-4">{property.type}</div>
                    <h1 className="text-blue-800 text-3xl font-bold mb-4">{property.name}</h1>
                    <div
                        className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                    >
                        <FaMapMarker className="text-lg text-rose-800 mr-2" />
                        <p className="text-rose-700">
                        {property.location.street}, {property.location.city} {property.location.state}
                        </p>
                    </div>

                    <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                        Rates & Options
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around">
                        <div
                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                        >
                        <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                        <div className="text-2xl font-bold">
                            {property.rates.nightly ? (
                                <div className="text-2xl font-bold text-blue-800">
                                    ${property.rates.nightly.toLocaleString()}
                                </div>
                            ) : (
                                <FaTimes className="text-rose-700" />
                            )}
                        </div>
                        </div>
                        <div
                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                        >
                        <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                        {property.rates.weekly ? (
                                <div className="text-2xl font-bold text-blue-800">
                                    ${property.rates.weekly.toLocaleString()}
                                </div>
                            ) : (
                                <FaTimes className="text-rose-700" />
                            )}
                        </div>
                        <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                        <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                        {property.rates.monthly ? (
                                <div className="text-2xl font-bold text-blue-800">
                                    ${property.rates.monthly.toLocaleString()}
                                </div>
                            ) : (
                                <FaTimes className="text-rose-700" />
                            )}
                        </div>
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-lg font-bold mb-6">Description & Details</h3>
                    <div
                        className="flex justify-center gap-4 text-blue-800 mb-4 text-xl space-x-9"
                    >
                        <p>
                        <FaBed className="inline-block mr-2"/> {property.beds} {'  '}
                        <span className="hidden sm:inline">Beds</span>
                        </p>
                        <p>
                        <FaBath className="inline-block mr-2" /> {property.baths} {'  '}
                        <span className="hidden sm:inline">Baths</span>
                        </p>
                        <p>
                        <FaRulerCombined className="inline-block mr-2" /> {property.square_feet} {'  '}
                        <span className="hidden sm:inline">sqft</span>
                        </p>
                    </div>
                    <p className="text-gray-500 text-center mb-4">
                    {property.description}
                    </p>
                    {/* <p className="text-gray-500 mb-4">
                        We have a beautiful apartment located near the commons. It is a
                        2 bedroom apartment with a full kitchen and bathroom. It is
                        available for weekly or monthly rentals.
                    </p> */}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-lg font-bold mb-6">Amenities</h3>

                    <ul
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2"
                    >
                        {property.amenities.map((amenity, index) => (
                            <li key={index}>
                            <FaCheck className="inline-block text-green-600 mr-2" /> {amenity}
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <div id="map"></div>
                    </div>
                </main>

                {/* SideBar */}
                <aside className="space-y-4">       
                    <button
                    className="bg-blue-800 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                    >
                    <FaBookmark className="mr-2" /> Bookmark Property
                    </button>
                    <button
                    className="bg-rose-800 hover:bg-rose-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                    >
                    <FaShare className="mr-2" /> Share Property
                    </button>

                    {/* Contact form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
                    <form>
                    <div className='mb-4'>
                        <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='name'
                        >
                        Name:
                        </label>
                        <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        type='text'
                        placeholder='Enter your name'             
                        required
                        />
                    </div>
                        <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        </div>
                        <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='phone'
                        >
                            Phone:
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='phone'
                            type='text'
                            placeholder='Enter your phone number'
                        />
                        </div>
                        <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="message"
                        >
                            Message:
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Enter your message"
                        ></textarea>
                        </div>
                        <div>
                        <button
                            className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                            type="submit"
                        >
                            <FaPaperPlane className="mr-2" /> Send Message
                        </button>
                        </div>
                    </form>
                    </div>
                </aside>
                </div>
            </div>
        </section>
        </>
    )}
  </>
}
export default PropertyPage