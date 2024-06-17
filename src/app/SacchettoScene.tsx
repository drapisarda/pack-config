import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { TextureLoader, Vector3 } from 'three'
import { Model as Avana } from '../../public/models/Sacchetto_avana'

type Props = { 
  textureFrontUrl: string, 
  textureBackUrl: string, 
  textureSideUrl: string 
}

const SacchettoScene = (props: Props) => {
  if (typeof document === 'undefined' ) return

  const { textureFrontUrl, textureBackUrl, textureSideUrl} = props
  const textureFront = new TextureLoader().load(textureFrontUrl)
  const textureBack = new TextureLoader().load(textureBackUrl)
  const textureSide = textureSideUrl ? new TextureLoader().load(textureSideUrl) : undefined

  return (
    <div className="sacchetto h-full">
      <Canvas className="sacchetto__canvas h-full">
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

export default SacchettoScene