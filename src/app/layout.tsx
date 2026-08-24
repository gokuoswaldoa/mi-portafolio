import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oswaldo Dávila | Desarrollador Web & Datos",
  description: "Desarrollador Web y Especialista en Ciencia de Datos. Construyo soluciones web escalables y analizo datos para negocios.",
  openGraph: {
    title: "Oswaldo Dávila | Portfolio",
    description: "Desarrollador Web y Especialista en Ciencia de Datos. Construyo soluciones web escalables.",
    url: "https://oswaldodavila.com",
    siteName: "Oswaldo Dávila",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oswaldo Dávila | Portfolio",
    description: "Desarrollador Web y Especialista en Ciencia de Datos.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-inter antialiased min-h-screen selection:bg-cyan-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
