import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../store/ReduxeProvider";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Skypro-music",
  description: "Музыкальный плеер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ru">
      <ReduxProvider>
          <body className={montserrat.className}>{children}</body>
      </ReduxProvider>
    </html>
    </>
  );
}
