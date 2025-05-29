'use client'

import { CourseHeader } from '@/components/course/CourseHeader'
import { CourseFooter } from '@/components/course/CourseFooter'

export default function TermsPage() {
  return (
    <main>
      <CourseHeader />
      
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Условия обучения
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Общие условия</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Настоящие Условия обучения регулируют отношения между TOO "AI Land" (далее — «Организатор») и студентами курса GenAI Engineer (далее — «Студент») на образовательной платформе shkola.ai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Записываясь на курс, Студент автоматически соглашается с данными условиями.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Программа обучения</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Курс GenAI Engineer — Начальный уровень</h3>
                <ul className="list-disc pl-6 text-blue-800 space-y-1">
                  <li><strong>Продолжительность:</strong> 27 недель (включая Starter Bootcamp)</li>
                  <li><strong>Формат:</strong> 31 академический час лайв-сессий + 104-130 часов практики</li>
                  <li><strong>Стоимость:</strong> 400,000 тенге</li>
                  <li><strong>Соотношение:</strong> 70% практики, 30% теории</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Обязательства Организатора</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Предоставление доступа к образовательным материалам курса</li>
                <li>Проведение лайв-сессий согласно расписанию</li>
                <li>Обеспечение персонального AI-наставника 24/7</li>
                <li>Еженедельные Office Hours с Teaching Assistant</li>
                <li>Проверка и обратная связь по практическим заданиям</li>
                <li>Выдача сертификата о прохождении курса (при успешном завершении)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Обязательства Студента</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Активное участие в лайв-сессиях и выполнение практических заданий</li>
                <li>Соблюдение дедлайнов и академической честности</li>
                <li>Уважительное отношение к преподавателям и другим студентам</li>
                <li>Своевременная оплата обучения согласно выбранному тарифу</li>
                <li>Предоставление достоверной информации при регистрации</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Оплата и возврат средств</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Варианты оплаты:</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Полная оплата: 400,000 тенге</li>
                    <li>Рассрочка: по согласованию с администрацией</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Возврат средств:</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>100% возврат в течение первых 7 дней обучения</li>
                    <li>50% возврат в течение первых 14 дней обучения</li>
                    <li>После 14 дней — возврат не предусмотрен</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Доступ к материалам</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Доступ к образовательной платформе предоставляется на весь период обучения</li>
                <li>Материалы курса остаются доступными в течение 6 месяцев после завершения</li>
                <li>Запись лайв-сессий доступна в течение всего курса</li>
                <li>AI-наставник доступен только во время активного обучения</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Сертификация</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Для получения сертификата о прохождении курса необходимо:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Посещение не менее 80% лайв-сессий</li>
                <li>Выполнение всех практических заданий</li>
                <li>Успешная защита финального Capstone MVP проекта</li>
                <li>Положительная оценка от преподавателей</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Форс-мажор</h2>
              <p className="text-gray-600 leading-relaxed">
                В случае форс-мажорных обстоятельств (технические сбои, чрезвычайные ситуации), Организатор обеспечивает перенос занятий на более поздние даты или предоставление альтернативных форматов обучения.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Контакты</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                По всем вопросам обучения обращайтесь:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@shkola.ai<br/>
                  <strong>Телефон:</strong> +7 (771) 899-99-99<br/>
                  <strong>Instagram:</strong> @shkola.ai<br/>
                  <strong>Организация:</strong> TOO "AI Land"
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Изменения в условиях</h2>
              <p className="text-gray-600 leading-relaxed">
                Организатор оставляет за собой право вносить изменения в условия обучения с уведомлением студентов не менее чем за 7 дней до вступления изменений в силу.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </section>
          </div>
        </div>
      </div>

      <CourseFooter />
    </main>
  )
} 