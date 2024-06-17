'use client';

// import SideBar from "./SideBar";
import SacchettoScene from "./SacchettoScene";
import { useEffect, useState } from "react";
import ImageSelector from "./ImageSelector";

export default function Home() {
  const varA = '/img/pattern-1.jpeg'
  const varB = '/img/pattern-2.jpeg'
  const varC = '/img/pattern-3.jpeg'

  const [textureFrontUrl, setTextureFrontUrl] = useState(varA)
  const [textureBackUrl, setTextureBackUrl] = useState(varB)
  const [textureSideUrl, setTextureSideUrl] = useState(varC)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  })

  return (
    <div className="page">
      <main className="grow overflow-hidden flex flex-wrap flex-col md:flex-row container mx-auto w-full max-w-full md:max-w-screen-lg h-svh">
        <div className="image-selectors basis-1/3 w-full order-3 md:order-1 md:basis-3/6 lg:basis-2/6 max-h-screen overflow-scroll">
          <div className="content p-3 md:p-5 flex md:block items-stretch max-w-screen-sm gap-5 h-full">
            <div className="basis-1/3 md:basis-full">
              <ImageSelector
                label="Front image file"
                imageSrc={textureFrontUrl}
                imageSetter={setTextureFrontUrl}
                description="This will be the front of this package"
              />
            </div>
            <div className="basis-1/3 md:basis-full">
              <ImageSelector
                label="Back image file"
                imageSrc={textureBackUrl}
                imageSetter={setTextureBackUrl}
                description="This will be the back of this package"
              />
            </div>
            <div className="basis-1/3 md:basis-full">
              <ImageSelector
                label="Side image file"
                imageSrc={textureSideUrl}
                imageSetter={setTextureSideUrl}
                description="This will be the side of this package"
              />
            </div>
          </div>
        </div>
        <div className="basis-2/3 order-2 md:basis-3/6 lg:basis-4/6 overflow-hidden max-w-full max-h-full">
          <div className="preview h-full">
            {isClient &&
              <SacchettoScene
                textureFrontUrl={textureFrontUrl}
                textureBackUrl={textureBackUrl}
                textureSideUrl={textureSideUrl}
              />
            }
          </div>
        </div>
      </main>
    </div >
  );
}
