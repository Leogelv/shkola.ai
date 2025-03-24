'use client'

import { useRef, useEffect } from 'react'
import { Illustration, Anchor, Shape } from 'react-zdog'

export default function AIBrain() {
  const rotation = useRef({ y: 0 })
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const spin = () => {
      rotation.current.y += 0.03
      animationFrameId.current = requestAnimationFrame(spin)
    }
    
    animationFrameId.current = requestAnimationFrame(spin)
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Illustration zoom={4} dragRotate={true}>
        <Anchor rotate={rotation.current}>
          {/* Основной куб */}
          <Shape 
            path={[
              { x: -20, y: -20, z: 20 },  // передняя грань
              { x: 20, y: -20, z: 20 },
              { x: 20, y: 20, z: 20 },
              { x: -20, y: 20, z: 20 },
              { x: -20, y: -20, z: 20 },  // обратно к началу
            ]}
            stroke={3}
            color="#996200"
            closed={false}
          />
          <Shape 
            path={[
              { x: -20, y: -20, z: -20 },  // задняя грань
              { x: 20, y: -20, z: -20 },
              { x: 20, y: 20, z: -20 },
              { x: -20, y: 20, z: -20 },
              { x: -20, y: -20, z: -20 },
            ]}
            stroke={3}
            color="#996200"
            closed={false}
          />
          {/* Соединяющие линии */}
          <Shape 
            path={[
              { x: -20, y: -20, z: 20 },
              { x: -20, y: -20, z: -20 },
            ]}
            stroke={3}
            color="#996200"
          />
          <Shape 
            path={[
              { x: 20, y: -20, z: 20 },
              { x: 20, y: -20, z: -20 },
            ]}
            stroke={3}
            color="#996200"
          />
          <Shape 
            path={[
              { x: 20, y: 20, z: 20 },
              { x: 20, y: 20, z: -20 },
            ]}
            stroke={3}
            color="#996200"
          />
          <Shape 
            path={[
              { x: -20, y: 20, z: 20 },
              { x: -20, y: 20, z: -20 },
            ]}
            stroke={3}
            color="#996200"
          />

          {/* Центральная сфера */}
          <Shape 
            stroke={16}
            color="#b17500"
          />
        </Anchor>
      </Illustration>
    </div>
  )
} 