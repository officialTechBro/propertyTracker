import dbConnect from "@/config/database"
import Property from "@/models/Property"

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