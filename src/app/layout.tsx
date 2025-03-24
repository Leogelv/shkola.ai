import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "AlmaTech - AI стратегии для бизнеса",
  description: "Получите AI-стратегию за 5 минут. Наш сервис анализирует данные вашей компании и подсказывает, какие задачи можно автоматизировать с помощью AI уже сейчас.",
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
