'use client';

// import SideBar from "./SideBar";
import SacchettoScene from "./SacchettoScene";
import { useState } from "react";
import getBase64 from "../services/getBase64"
import ImageSelector from "./ImageSelector";

export default function Home() {
  const varA = '/img/med1.jpeg'
  const varB = '/img/med2.jpeg'
  const varC = '/img/confetti.png'

  const [textureFrontUrl, setTextureFrontUrl] = useState(varA);
  const [textureBackUrl, setTextureBackUrl] = useState(varB);
  const [textureSideUrl, setTextureSideUrl] = useState(varC);

  return (
    <div className="page">
      {/* <SideBar /> */}
      <main className="grow overflow-hidden flex container mx-auto">
        <div className="basis-2/4">
          <div className="content p-5">
            <ImageSelector 
              label="Front image file"
              imageSrc={textureFrontUrl}
              imageSetter={setTextureFrontUrl}
              description="This will be the front of this package"
            />
            <ImageSelector 
              label="Back image file"
              imageSrc={textureBackUrl}
              imageSetter={setTextureBackUrl}
            />
            <ImageSelector 
              label="Side image file"
              imageSrc={textureSideUrl}
              imageSetter={setTextureSideUrl}
            />
          </div>
        </div>
        <div className="basis-2/4 overflow-hidden">
          <div className="preview">
            <SacchettoScene
              textureFrontUrl={textureFrontUrl}
              textureBackUrl={textureBackUrl}
              textureSideUrl={textureSideUrl}
            />
          </div>
        </div>
      </main>
    </div >
  );
}
