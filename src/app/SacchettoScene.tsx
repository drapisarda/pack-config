'use client';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { TextureLoader, Vector3 } from 'three'
import { Model as Avana } from '../../public/models/Sacchetto_avana'

export default (props: { textureFrontUrl: string, textureBackUrl: string, textureSideUrl: string }) => {
  const { textureFrontUrl, textureBackUrl, textureSideUrl} = props
  const textureFront = new TextureLoader().load(textureFrontUrl)
  const textureBack = new TextureLoader().load(textureBackUrl)
  const textureSide = textureSideUrl ? new TextureLoader().load(textureSideUrl) : undefined

  return (
    <div className="sacchetto">
      <Canvas className="sacchetto__canvas">
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <PerspectiveCamera makeDefault position={new Vector3(0, 0, -10)} />
          <Avana 
            textureFront={textureFront} 
            textureBack={textureBack} 
            textureSide={textureSide} 
          />
          {/* <Environment preset="park" background /> */}
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}