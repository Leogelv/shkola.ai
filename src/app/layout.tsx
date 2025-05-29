import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Курс GenAI Engineer - shkola.ai",
  description: "Стань Junior GenAI-инженером за 27 недель. Изучай LangChain, CrewAI, создавай AI-агентов. Зарплата $80-120K. Персональный AI-наставник 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
