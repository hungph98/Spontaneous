import connect from "../../../utils/db";
import NewArrivals from "../../models/New Arrivals";

export const GET = async () => {
    try {
        await connect()

        const data = await NewArrivals.find();

        return new Response(JSON.stringify({ data: data}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })

    } catch (err) {
        throw new Error(err.message)
    }
}