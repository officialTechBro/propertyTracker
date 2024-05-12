import Image from 'next/image'
import Link from "next/link"

const PropertyCard = ({property}) => {
    const getRateDisplay = () => {
        const {rates} = property

        if (rates.monthly) {
            return `${rates.monthly.toLocaleString()}/mo`
        } else if (rates.weekly) {
            return `${rates.weekly.toLocaleString()}/wk`
        } else if (rates.nightly) {
            return `${rates.nightly.toLocaleString()}/night`
        }
    }
  return (
    <div className="rounded-xl shadow-md ">
        <Image 
            src={`/images/properties/${property.images[0]}`}
            alt=''
            width={0}
            height={0}
            quality={100}
            unoptimized
            className='w-full h-auto rounded-t-xl'
        />
        <div className="p-4">
            <div className="text-left md:text-left lg:text-left mb-2">
                <div className="text-gray-600">{property.type}</div>
                <h3 className="text-xl font-bold">{property.name}</h3>
            </div>
            <p className='text-left text-gray-500 mt-2'>
                {property.location.street} {property.location.city} {property.location.state}
            </p>
            <h3 className="text-blue-500 font-bold text-left text-2xl">
                ${getRateDisplay()}
            </h3>
            <div className='mb-2'>
                <Link
                            href={`/properties/${property._id}`}
                            className="text-sm text-left text-rose-800 cursor-pointer"
                        >
                            View more details
                </Link>
            </div>
            
            <div className='border-t border-gray-100 mb-t mb-2'>
                <div className="flex justify-left gap-4 text-gray-500 mt-4">
                    <p>
                        {property.beds} {'  '}
                        <span className="lg:inline">Baths</span>
                    </p>
                    <p>
                        {property.baths} {'  '}
                        <span className="lg:inline">Baths</span>
                    </p>
                    <p>
                        {property.square_feet}{'  '}
                        <span className="lg:inline">sqft</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default PropertyCard