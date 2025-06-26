import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Личный кабинет",
  description: "Личный кабинет для студентов и преподавателей университета СПбГУТ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
