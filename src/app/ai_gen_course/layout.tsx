import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курс AI Engineer - shkola.ai",
  description: "Стань Junior AI-инженером за 27 недель. Изучай LangChain, CrewAI, создавай AI-агентов. Зарплата $80-120K. Персональный AI-наставник 24/7.",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}