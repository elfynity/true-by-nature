import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import {Footer} from "@/components/Footer";
import { SITE_NAME } from "@/lib/config";
import lowerBgEdge from "@/public/lower-bg-edge.svg";
import Image from "next/image";
import { BgEdge } from "@/components/BgEdge";





const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight:["300", "600"]
});



export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Natural Handmade Soap from Durban, KZN",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
      className={`${nunito.variable}`}>

      <body>

       <BgEdge />


        <div className="site">

          <TopBar />
          <Header />
          {children}

        </div>{/* site */}  


        <Image
          id="lowerBgEdge"
          src={lowerBgEdge}
          alt="lower edge bg"
        />

        <Footer />
        
      </body>


    </html>
  );
}
