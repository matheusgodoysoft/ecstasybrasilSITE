import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ecstasy",
  description: "Domímio o PvP de uma forma incomparável",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} dark antialiased dark:bg-black bg-white font-poppins`}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
