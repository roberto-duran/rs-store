import "../globals.css";
import React from "react";
// @ts-ignore
import type { Metadata } from 'next';
import {Poppins} from "next/font/google";
import Footer from "../../components/layout/Footer";

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

export default async function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={poppins.className}>
        <body>
            {children}
            <Footer />
        </body>
        </html>
    );
}
