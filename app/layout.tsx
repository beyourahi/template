import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { PropsWithChildren } from "react";
import { cn } from "lib";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Web Template",
    description: "A template to build cool shit"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth light">
        <body className={cn("antialiased", font.className)}>
            <Providers>
                <main>{children}</main>
            </Providers>
        </body>
    </html>
);

export default RootLayout;
