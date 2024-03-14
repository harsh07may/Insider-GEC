import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./context/client-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const session = getServerSession(authOptions);

  return (
    <Provider session={session}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Provider>
  );
}
