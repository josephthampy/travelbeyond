import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingParticles({ count = 220, radius = 6, color = '#C9A24B' }) {
  const points = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = radius * (0.4 + Math.random() * 0.6)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.035
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
