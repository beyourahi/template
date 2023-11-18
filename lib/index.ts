import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
};
