import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three-stdlib'

export default function App() {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }}>
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model position-y={-0.5} scale={0.3} url="/cloth.fbx" />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}

function Model({ url, ...props }) {
  const scene = useLoader(FBXLoader, url)
  console.log({scene})
  return <primitive object={scene} {...props} />
}
