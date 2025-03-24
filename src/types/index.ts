// Hero Types
export interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
}

// Advantages Types
export interface Advantage {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export interface AdvantagesProps {
  advantages?: Advantage[]
}

// Solutions Types
export interface Solution {
  id: number
  title: string
  description: string[]
  icon: React.ReactNode
  gradient: string
}

export interface SolutionsProps {
  solutions?: Solution[]
}

// Market Data Types
export interface MarketDataItem {
  id: number
  value: string
  label: string
  gradient: string
  icon: string
}

export interface MarketDataProps {
  data?: MarketDataItem[]
}

// FAQ Types
export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface FAQProps {
  items?: FAQItem[]
}

// Contact Types
export interface ContactProps {
  email?: string
  phone?: string
  address?: string
}

// Process Types
export interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export interface ProcessProps {
  steps?: ProcessStep[]
}

// Challenges Types
export interface Challenge {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  gradient?: string
  pattern?: string
}

export interface ChallengesProps {
  challenges?: Challenge[]
} 