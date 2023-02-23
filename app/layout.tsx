import "./globals.css";
import React from "react";
import {Poppins} from "@next/font/google";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin-ext"],
    display: "swap",
    preload: true,
});

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={poppins.className}>
            <head>
                <title>Rs-Store</title>
                <meta name="description" content="The store that you need"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
