import "../globals.css";
import React from "react";
// @ts-ignore
import type { Metadata } from 'next';
import {Poppins} from "next/font/google";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/Footer";
import {UserLocation} from "../../types/UserLocation";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin-ext"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: {
        default: 'RS-Store',
        template: '%s | RS-Store',
    },
    description: 'Envíos gratis en millones de productos. Consigue lo mejor en compras. Disfruta de precios bajos y grandes ofertas en la mayor selección de artículos básicos para el día a día y otros productos, incluyendo moda, hogar, belleza, electrónica, dispositivos, artículos deportivos, juguetes, mascotas, bebé, videojuegos, material de oficina y mucho más.',
    openGraph: {
        title: 'RS-Store',
        description: 'Envíos gratis en millones de productos. Consigue lo mejor en compras. Disfruta de precios bajos y grandes ofertas en la mayor selección de artículos básicos para el día a día y otros productos, incluyendo moda, hogar, belleza, electrónica, dispositivos, artículos deportivos, juguetes, mascotas, bebé, videojuegos, material de oficina y mucho más.',
        url: 'https://www.rssolutions.com.co/',
        siteName: 'RS-Store',
        locale: 'es-CO',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'RS-Store',
        card: 'summary_large_image',
    },
    icons: {
        shortcut: '/favicon.ico',
    },
    verification: {
        google: 'TODO',
        yandex: 'TODO',
    },
};

const getApiRegistry = async () => {
    const url = `https://api.ipregistry.co/?key=${process.env.API_REGISTRY_KEY}`
    const apiRegistry = await fetch(url);
    if(!apiRegistry.ok) throw new Error('GlobalError Getting Data');
    const result = await apiRegistry.json();
    const resultObject: UserLocation = {
        country: result.location.country.name,
        city: result.location.city.name,
        timezone: result.time_zone.name,
        callingCode: result.location.country.calling_code,
        language: result.location.country.languages[0].name,
        currency: result.currency.name,
        currencySymbol: result.currency.symbol_native,
        currencyCode: result.currency.code,
        currencyName: result.currency.name,
        flag: result.location.country.flag.emojitwo,
    }
    return resultObject;
};
export default async function RootLayout({children}: { children: React.ReactNode; }) {
    const userLocation = await getApiRegistry();
    return (
        <html lang="en" className={poppins.className}>
            <body>
                {/* TODO after the react/typescript team resolve this issue remove the line below */}
                {/* @ts-expect-error Server Component */}
                <Header />
                {children}
                <Footer userLocation={userLocation} />
            </body>
        </html>
    );
}
