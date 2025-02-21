import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connect from "../../../../utils/db";
import User from "../../../models/User";


const handler =  NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({
                            email: credentials.email,
                        }
                    )

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            return new Error("Wrong credentials")
                        }
                    } else {
                        return new Error("User Not Found")
                    }

                } catch (err) {
                    throw new Error(err)
                }
            }
        })
    ],
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.id = user.id;
    //             token.email = user.email;
    //             token.role = user.role;
    //         }
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         session.user.id = token.id;
    //         session.user.email = token.email;
    //         session.user.role = token.role;
    //         return session;
    //     },
    // },
    pages: {
        error: "/login"
    }
})

export { handler as GET, handler as POST}