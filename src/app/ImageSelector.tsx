import { ChangeEvent, Dispatch, SetStateAction } from "react"
import getBase64 from "../services/getBase64"
import Image from 'next/image'
import "../styles/globals.scss";

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
    <div className="image-selector flex flex-wrap md:block h-full border rounded-xl border-slate-200 p-3 md:p-5 shadow-2xl text-black bg-white md:mb-4 md:h-auto">
      <h3 className="text-lg basis-full border-b pb-1 mx-1 md:mx-4 mb-1 md:mb-3 font-bold">{label}</h3>
      <div className="my-2 md:my-4 basis-1/2">
        <Image 
          priority={true}
          className="rounded-xl max-h-32 md:max-h-64 max-w-64 m-auto h-full w-auto" 
          width="150" 
          height="200"
          src={imageSrc}
          alt="Side image" />
      </div>
      <div className="order-4 w-full md:w-auto text-center mb:py-2 md:mb-5">
        <label className="rounded-xl py-2 px-4 border border-slate-200 shadow-xl" htmlFor={inputId}> Chose a new image </label>
        <input id={inputId} type="file" onChange={(e) => onChangeHandle(e)} className="hidden"/>
      </div>
      <p className="mt-2 md:mt-5 basis-1/2 order-3 px-2 md:px-0">
        {description}
      </p>
    </div>
  );
}