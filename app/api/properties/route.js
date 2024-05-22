import dbConnect from "@/config/database"
import Property from "@/models/Property"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utilities/authOptions"

// GET /api/properties
export const GET = async (request) => {
    try {
        await dbConnect()

        const properties = await Property.find({})

        return new Response(
            JSON.stringify({
                properties
        }), {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', {
            status: 500
        })
    }
}

export const POST = async(request) => {
    try {

        await dbConnect()

        const session = await getServerSession(authOptions)

        if (!session) {
            return new Response('Unauthorized', {status: 401})
        }

        const userId = session.user.id

        const formData = await request.formData()

        //Acess all values from amentities and images
        const amenities = formData.getAll('amenities')
        const images = formData.getAll('images').filter((image) => image.name !== '')

        //create propetyData object for database
        const  propertyData = {
            type: formData.get('type'),
            name: formData.get('name'),
            description: formData.get('description'),
            location: {
                street: formData.get('location.street'),
                city: formData.get('location.city'),
                state: formData.get('location.state'),
                zipcode: formData.get('location.zipcode'),
            },
            beds: formData.get('beds'),
            baths: formData.get('baths'),
            square_feet: formData.get('square_feet'),
            amenities,
            rates: {
                weekly: formData.get('rates.weekly'),
                monthly: formData.get('rates.monthly'),
                nightly: formData.get('rates.nightly'),
            }, 
            seller_info: {
                name: formData.get('seller_info.name'),
                email: formData.get('seller_info.email'),
                phone: formData.get('seller_info.phone'),
            },
            //userId
            owner: userId,
            images
        }

        console.log(propertyData)

        return new Response(
            JSON.stringify({message: propertyData}),
            {status: 200}
        )
    } catch (error) {
        return new Response('Failed to add property', {status: 500})
    }
}