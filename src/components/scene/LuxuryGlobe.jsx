import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function LuxuryGlobe({ scale = 1.6 }) {
  const group = useRef(null)
  const inner = useRef(null)

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
    if (inner.current) inner.current.rotation.y -= delta * 0.06
  })

  return (
    <group ref={group} scale={scale}>
      <mesh>
        <sphereGeometry args={[1, 28, 28]} />
        <meshBasicMaterial color="#C9A24B" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={inner} scale={0.94}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial color="#8C6A3F" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh scale={1.18}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#E4CE94" transparent opacity={0.04} />
      </mesh>
    </group>
  )
}
