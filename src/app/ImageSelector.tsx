import { Dispatch, SetStateAction } from "react"
import getBase64 from "../services/getBase64"
import styled from "styled-components"

type Props = {
  imageSetter: Dispatch<SetStateAction<string>>,
  imageSrc: string,
  label: string,
  description?: string
}

export default function ImageSelector(props: Props) {
  const { imageSetter, imageSrc, label, description } = props
  const inputId = 'file' + Math.floor(Math.random() * 3000)

  const onChangeHandle = (e: Event) => {
    const file = e.target?.files[0]
    getBase64(file).then((base64) => {
      imageSetter(base64);
    });
  }

  return (
    <div className="image-selector border rounded-xl border-slate-500 p-5 shadow-2xl mb-4 backdrop-blur backdrop-opacity-100">
      <h3 className="text-lg border-b pb-1 ml-4 mr-4 mb-3" htmlFor={inputId}>{label}</h3>
      <div className="mt-4 mb-4">
        <img className="rounded-xl max-h-64 m-auto" src={imageSrc} alt="Side image" />
      </div>
      <div>
        <input id={inputId} type="file" onChange={onChangeHandle} />
      </div>
      <p className="mt-4">
        {description}
      </p>
    </div>
  );
}