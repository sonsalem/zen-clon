import type { Metadata } from "next";
import "./globals.css";
import Navebar from "@/components/Navbar/Navebar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "زين التنموية",
  description: "نبني رؤية الغد اليوم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
