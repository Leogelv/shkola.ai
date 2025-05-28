'use client'

import { CourseHeader } from '@/components/course/CourseHeader'
import CourseHero from '@/components/course/CourseHero'
import AboutCourse from '@/components/course/AboutCourse'
import Program from '@/components/course/Program'
import Advantages from '@/components/course/Advantages'
import AITutor from '@/components/course/AITutor'
import CareerProspects from '@/components/course/CareerProspects'
import Mentors from '@/components/course/Mentors'
import Testimonials from '@/components/course/Testimonials'
import CTASection from '@/components/course/CTASection'
import { CourseFooter } from '@/components/course/CourseFooter'

export default function Home() {
  return (
    <>
      <CourseHeader />
      <main>
        <CourseHero />
        <AboutCourse />
        <Program />
        <Advantages />
        <AITutor />
        <CareerProspects />
        <Mentors />
        <Testimonials />
        <CTASection />
        <CourseFooter />
      </main>
    </>
  )
}
