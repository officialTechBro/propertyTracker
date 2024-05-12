import {FaArrowRight} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            {/* Hero */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">
                    Home is where your story begins
                </h1>
                <p className="my-4 text-lg text-gray-400">
                    Building a next-generation collaborative platform to connect renters, homeowners, and agents.
                    live the way you want. Beautiful homes, incredible locations and pricing that makes sense.
                </p>
            </div>
            {/* Search bar */}
            <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
                {/* location search */}
                <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
                    <label htmlFor="location" className="sr-only">Location</label>
                    <input 
                        type="text" 
                        id="location"
                        placeholder="Where are you moving? (city, State, Zip, etc"
                        className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
                <div className="w-full md:w-2/5 md:pl-2">
                <label htmlFor="property-type" className="sr-only">Property Type</label>
                <select 
                    id="property-type" 
                    className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 "
                >
                    <option value="All">What type of home?</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Studio">Studio</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Cabin Or Cottage">Cabin Or Cottage</option>
                    <option value="Loft">Loft</option>
                    <option value="Room">Room</option> 
                    <option value="Other">Other</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-800 hover:border focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
               Search
            </button>
            </form>
            
        </div>
    </section>
  )
}
export default Hero