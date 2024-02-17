import type { Metadata } from "next";
import { Inter, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import NavbarHome from "@/Components/NavbarHome";
import Footer from "@/Views/Footer";

const inter =  Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Mart ",
  description: "PIAIC Project UI Created by Resheph Inayat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarHome />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
