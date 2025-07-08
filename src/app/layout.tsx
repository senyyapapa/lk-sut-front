import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import BurgerBtn from "@/components/burger_button/BurgerBtn";




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
        <Sidebar />
        <Header />
        <main className="pt-[8vh]">{children}</main>
      </body>
    </html>
  );
}
