import NextAuth from "next-auth"
import { authOptions } from "../../../lib/session"
// import { authOptions } from "@palanikannan1437/rc4community-auth"

export default NextAuth(authOptions)