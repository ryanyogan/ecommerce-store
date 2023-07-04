import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "The Store",
  description: "The Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
