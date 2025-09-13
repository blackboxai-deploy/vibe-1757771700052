import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "Shobha Beauty Studio & Nails | Premium Beauty Salon in Bur Dubai",
    template: "%s | Shobha Beauty Studio"
  },
  description: "Professional beauty salon in Bur Dubai, Meena Bazaar. Specializing in Hair Straightening, Blow Dry, Mehendi, and Press-on Nails. Open daily 10am-10pm. Book your appointment today!",
  keywords: ["beauty salon", "hair straightening", "blow dry", "mehendi", "press-on nails", "Bur Dubai", "Meena Bazaar", "UAE", "beauty studio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}