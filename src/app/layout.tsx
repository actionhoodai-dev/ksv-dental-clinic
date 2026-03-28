import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "KSV Dental Clinic | Dr. L. Suresh | 30 Years of Clinical Excellence",
  description: "Experience world-class dental care at KSV Dental Clinic. Specializing in Root Canal, Dental Implants, Orthodontics, and more. Modern technology meets decades of expertise.",
  icons: {
    icon: "/favicon.ico",
  }
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased bg-slate-50 text-slate-900 selection:bg-accent/20 selection:text-accent`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
