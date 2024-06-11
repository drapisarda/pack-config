/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 sacchetto_avana.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Texture, Vector2 } from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/sacchetto_avana.glb')
  const defaultMaterial = materials.Plastica5.clone()
  const texturedMaterialSide = defaultMaterial.clone()
  const texturedMaterialFront = defaultMaterial.clone()
  const texturedMaterialBack = defaultMaterial.clone()

  const { texture } = props
  
  if (texture) {
    texture.center = new Vector2(0.5, 0.5)

    const cloneTexture = texture.clone()
    cloneTexture.needsUpdate = true
    const cloneTextureFlat = texture.clone()
    cloneTextureFlat.needsUpdate = true
    
    texturedMaterialSide.map = texture
    texturedMaterialSide.map.rotation = - Math.PI / 2

    texturedMaterialFront.map = cloneTexture
    texturedMaterialFront.map.rotation = Math.PI / 2

    texturedMaterialBack.map = cloneTextureFlat
    texturedMaterialBack.map.rotation = Math.PI / 1

    console.log(texturedMaterialSide.opacity)
  }

  return (
    <group {...props} dispose={null}>
      <group position={[17, -4, -8]} rotation={[Math.PI / 2, 0, 0]} scale={0.187}>
        <mesh geometry={nodes.sacchetto_diviso_interno_1.geometry} material={defaultMaterial} />

        {/* left */}
        <mesh geometry={nodes.sacchetto_diviso_interno_2.geometry} material={texturedMaterialSide} />

        {/* front */}
        <mesh geometry={nodes.sacchetto_diviso_interno_3.geometry} material={texturedMaterialFront} />

        {/* right */}
        <mesh geometry={nodes.sacchetto_diviso_interno_4.geometry} material={texturedMaterialSide} />

        {/* back */}
        <mesh geometry={nodes.sacchetto_diviso_interno_5.geometry} material={texturedMaterialBack} />
      </group>
    </group>
  )
}

useGLTF.preload('models/sacchetto_avana.glb')
