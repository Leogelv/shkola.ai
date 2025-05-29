'use client'

import { CourseHeader } from '@/components/course/CourseHeader'
import { CourseFooter } from '@/components/course/CourseFooter'

export default function PrivacyPage() {
  return (
    <main>
      <CourseHeader />
      
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Общие положения</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о пользователях сайта shkola.ai (далее — «Сайт»), принадлежащего TOO "AI Land".
              </p>
              <p className="text-gray-600 leading-relaxed">
                Используя Сайт, вы соглашаетесь с условиями данной Политики конфиденциальности.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Сбор персональных данных</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Мы собираем следующие персональные данные:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Данные об использовании сайта (cookies, IP-адрес, информация о браузере)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Цели обработки данных</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Персональные данные используются для:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Предоставления образовательных услуг</li>
                <li>Связи с пользователями для консультаций</li>
                <li>Отправки информационных материалов о курсах</li>
                <li>Улучшения качества сайта и услуг</li>
                <li>Выполнения юридических обязательств</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Защита данных</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Мы применяем технические и организационные меры для защиты ваших персональных данных:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Шифрование данных при передаче</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярное обновление систем безопасности</li>
                <li>Обучение персонала принципам защиты данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-gray-600 leading-relaxed">
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан, или с вашего письменного согласия.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Ваши права</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Получать информацию об обработке ваших персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления персональных данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Контактная информация</h2>
              <p className="text-gray-600 leading-relaxed">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@shkola.ai<br/>
                  <strong>Телефон:</strong> +7 (771) 899-99-99<br/>
                  <strong>Организация:</strong> TOO "AI Land"
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Изменения в политике</h2>
              <p className="text-gray-600 leading-relaxed">
                Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. Актуальная версия всегда доступна на данной странице.
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