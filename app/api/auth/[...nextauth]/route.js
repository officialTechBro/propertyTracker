import { authOpations } from "@/utilities/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOpations)

export {handler as GET, handler as POST}