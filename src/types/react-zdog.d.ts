declare module 'react-zdog' {
  import { ReactNode } from 'react'
  
  interface IllustrationProps {
    zoom?: number
    className?: string
    style?: React.CSSProperties
    dragRotate?: boolean
    children?: ReactNode
  }

  interface ShapeProps {
    stroke?: number
    color?: string
    path?: Array<{ x: number; y: number; z?: number } | { arc: Array<{ x: number; y: number; z?: number }> }>
    closed?: boolean
    rotate?: { x?: number; y?: number; z?: number }
    translate?: { x?: number; y?: number; z?: number }
    fill?: boolean
    children?: ReactNode
  }

  interface GroupProps {
    children?: ReactNode
  }

  interface AnchorProps {
    rotate?: { x?: number; y?: number; z?: number }
    translate?: { x?: number; y?: number; z?: number }
    scale?: number
    children?: ReactNode
  }

  export const Illustration: React.FC<IllustrationProps>
  export const Shape: React.FC<ShapeProps>
  export const Group: React.FC<GroupProps>
  export const Anchor: React.FC<AnchorProps>
  export function useRender(callback: () => void): void
} 