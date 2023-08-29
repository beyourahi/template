import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Web Template",
    description: "A template to build cool shit"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth">
        <body>
            <Providers>{children}</Providers>
        </body>
    </html>
);

export default RootLayout;
