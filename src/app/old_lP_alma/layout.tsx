import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlmaTech - AI стратегии для бизнеса",
  description: "Получите AI-стратегию за 5 минут. Наш сервис анализирует данные вашей компании и подсказывает, какие задачи можно автоматизировать с помощью AI уже сейчас.",
};

export default function OldLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}