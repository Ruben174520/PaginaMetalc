"use client";
import { Navbar } from "@/components/Navbar";
import logo from '../../public/images/logo.png'
import "./globals.css";
import Video from "@/components/Video";
import styles from "../components/Video.module.css";
import Mapa from "@/components/Mapa";
import Foot from "@/components/Footer";
import { MaterialProvider } from "@/context/MaterialContext";
import Head from "next/head";
import { Metadata } from "next";



/** @type {import("next").Metadata} */
export const metadata = {
  title: 'Next.js',
};

//Contiene todas las paginas, lo que se agregue aqui aparecera en todas las paginas sss
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link 
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />

        <link 
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Oswald:wght@400;700&display=swap" 
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head> 
      <body className="bg-white font-bmw">
        <MaterialProvider>
          <Navbar />
          {children}
        </MaterialProvider>
        
        <Foot />
      </body>
    </html>
  );
}
