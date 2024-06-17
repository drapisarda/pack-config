import { ChangeEvent, Dispatch, SetStateAction } from "react"
import getBase64 from "../services/getBase64"
import styled from "styled-components"
import Image from 'next/image'

const ImageSelectorContainer = styled.div`
  background: rgba(255,255,255);
`

type Props = {
  imageSetter: Dispatch<SetStateAction<string>>,
  imageSrc: string,
  label: string,
  description?: string
}

export default function ImageSelector(props: Props) {
  const { imageSetter, imageSrc, label, description } = props
  const inputId = 'file' + label

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target as HTMLInputElement
    if (files === null) return

    const file: File = files[0]
    getBase64(file).then((base64: any) => imageSetter(base64));
  }

  return (
    <ImageSelectorContainer className="image-selector border rounded-xl border-slate-200 p-5 shadow-2xl mb-4 backdrop-blur-xl text-black">
      <label className="text-lg border-b pb-1 ml-4 mr-4 mb-3 font-bold" htmlFor={inputId}>{label}</label>
      <div className="mt-4 mb-4">
        <Image 
          className="rounded-xl max-h-64 m-auto h-full" 
          width={150} 
          height={0}
          src={imageSrc} 
          alt="Side image" />
      </div>
      <div>
        <input id={inputId} type="file" onChange={(e) => onChangeHandle(e)} />
      </div>
      <p className="mt-4">
        {description}
      </p>
    </ImageSelectorContainer>
  );
}