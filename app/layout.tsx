import { Layout } from '@/components/dom/Layout';
import '@/global.css';
import { Providers } from './providers';
import clsx from "clsx";
import { Metadata } from "next";
import  { Navbar} from "@/components/dom/navbar";
import  { Div, MotionDiv} from "@/components/dom/Components";

export const metadata: Metadata = {
  title: 'Bianca Mendoza',
  description: 'A portfolio of projects using Computer Vision, Simulation, and 3D Modeling.', 
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" }, 
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ], 
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon-16x16.png", 
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head />
                <body
                    className = { clsx("min-h-screen font-sans antialiased")}>
                    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
                        <Navbar />
                        <Layout>{children}</Layout>
                    </Providers>
                </body>
        </html>
    )
}
