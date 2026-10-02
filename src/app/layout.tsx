import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import PreLoader from "@/components/PreLoader";
import SideSocials from "@/components/SideSocials";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { NavProvider } from "@/components/NavContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "/favicon.png" },
  openGraph: { title: site.title, description: site.description },
  twitter: { card: "summary_large_image" },
};

// Applies the saved/system colour mode before paint to avoid a flash
const themeScript = `(function(){try{var p=localStorage.getItem("color-mode");var d=p?p==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark-mode")}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <NavProvider>
          <PreLoader />
          <div className="min-h-screen overflow-x-clip md:bg-kjColorLight dark:bg-kjColorBlack md:py-16">
            <div className="bg-white dark:bg-kjColorBlack md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8 text-kjColorGray dark:text-kjColorLight md:shadow-2xl">
              <div className="md:flex">
                <SideSocials />
                <div className="md:flex-1 min-w-0">
                  <NavBar />
                  {children}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </NavProvider>
      </body>
    </html>
  );
}
