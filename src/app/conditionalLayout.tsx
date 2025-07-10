'use client'
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { usePathname } from "next/navigation";


export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  return (
    <>
    {!isLoginPage && <Sidebar />}
    {!isLoginPage && <Header />}
    <main className={isLoginPage ? "" : "pt-[8vh]"}>
        {children}
    </main>
    </>
  );
}