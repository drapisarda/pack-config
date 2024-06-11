'use client';

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { TextureLoader, Vector3 } from 'three'
import { Model as Avana } from '../../public/models/Sacchetto_avana'

export default (props: { textureUrl: string }) => {
  const { textureUrl } = props
  let texture = new TextureLoader().load(textureUrl)

  return (
    <div className="sacchetto">
      <h1>{textureUrl}</h1>
      <Canvas className="sacchetto__canvas">
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <PerspectiveCamera makeDefault position={new Vector3(0, 0, -10)} />
          <Avana texture={texture} />
          <Environment preset="park" background />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}