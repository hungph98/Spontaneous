import connect from "../../../../utils/db";
import User from "../../../models/User";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    const {username, email, password, role} = await request.json();

    await connect()

    if (!username || !email || !password) {
        return new NextResponse("Please fill all fields" );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new NextResponse("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role: role || "user",
    });

    try {
        await newUser.save();

        return new NextResponse("User has been created", { status: 201 });
    } catch (e) {
        return new NextResponse(e.message, {status: 500})
    }
}