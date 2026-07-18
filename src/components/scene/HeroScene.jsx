import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingParticles from './FloatingParticles.jsx'
import LuxuryGlobe from './LuxuryGlobe.jsx'

export default function HeroScene({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <FloatingParticles />
          <group position={[3.4, 0.4, -2]}>
            <LuxuryGlobe scale={1.3} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
