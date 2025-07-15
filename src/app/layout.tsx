import type { Metadata } from "next";
import "./styles/globals.scss";
import ConditionalLayout from "./conditionalLayout";
import ThemeScript from "@/hooks/useTheme";


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
    <html lang="ru" suppressHydrationWarning={true}>
      <head>
        <ThemeScript />
      </head>
      <body>
          <ConditionalLayout> {children} </ConditionalLayout>
      </body>
    </html>
  );
}
