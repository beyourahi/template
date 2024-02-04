import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { PropsWithChildren } from "react";
import { cn } from "lib";

export const metadata: Metadata = {
    title: "Web Template",
    description: "A template to build cool shit"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className={cn("light scroll-smooth", GeistSans.className)}>
        <body className="antialiased">{children}</body>
    </html>
);

export default RootLayout;
