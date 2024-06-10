'use client';

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Vector3, Vector2, TextureLoader } from 'three'
import { Model as Avana } from '../../public/models/Sacchetto_avana'

const Scene = () => {
  const spongeTexture = new TextureLoader().load('/img/sb.png')

  return (
    <div className="sacchetto">
      <Canvas className="sacchetto__canvas">
        <Suspense fallback={null}>
          <ambientLight />
          <PerspectiveCamera makeDefault position={new Vector3(0, 0, -20)} />
          <Avana texture={spongeTexture}/>
          <axesHelper />
          <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene