import { Dispatch, SetStateAction } from "react"
import getBase64 from "../services/getBase64"

export default function ImageSelector(props: {imageSetter: Dispatch<SetStateAction<string>> , imageSrc: string, label: string }) {
  const {imageSetter, imageSrc, label } = props
  const inputId = 'file' +  Math.floor(Math.random() * 3000)

  const onChangeHandle = (e: Event) => {
    const file = e.target?.files[0]
    getBase64(file).then((base64) => {
      imageSetter(base64);
    });
  }

  return (
    <div className="image-selector">
      <p>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} type="file" onChange={onChangeHandle} />
        <img src={imageSrc} alt="Side image" />
      </p>
    </div>
  );
}