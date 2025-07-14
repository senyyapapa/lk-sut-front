import type { Metadata } from "next";
import "./styles/globals.scss";
import ConditionalLayout from "./conditionalLayout";
import ThemeScript from "@/components/main/hooks/useTheme";

export const metadata: Metadata = {
  title: "Личный кабинет",
  description:
    "Личный кабинет для студентов и преподавателей университета СПбГУТ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <ThemeScript />
      </head>
      <body>
        <ConditionalLayout> {children} </ConditionalLayout>
      </body>
    </html>
  );
}
