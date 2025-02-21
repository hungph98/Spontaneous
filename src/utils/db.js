import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://hungph2098:admin1234@relax.panv9cs.mongodb.net/spontaneous?retryWrites=true&w=majority&appName=Relax`)
    } catch (e) {
        throw new Error('Connection Failed')
    }
}

export default connect