import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingProvider from "@/components/LoadingProvider";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Miocode | Solutions Web & Mobile et Formations",
    description:
        "Miocode propose des services de développement web et mobile sur mesure ainsi que des formations en programmation pour tous niveaux.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist-font/dist/geist-sans/style.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist-font/dist/geist-mono/style.css" />
        </head>
        <body className="antialiased font-geist">
        <Script id="remove-cz-attribute" strategy="afterInteractive">
            {`
            if (typeof document !== 'undefined') {
                document.body.removeAttribute('cz-shortcut-listen');
            }
            `}
        </Script>
        <LoadingProvider>
            <Navbar/>
            <div className="pt-20">{children}</div>
            <Footer/>
        </LoadingProvider>
        </body>
        </html>
    );
}
