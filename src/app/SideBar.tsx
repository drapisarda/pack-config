import { FaUpload, FaDownload } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="sidebar top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<FaUpload size="28" />} text="tooltip!" />
        <SideBarIcon icon={<FaDownload size="28" />} text="tooltip!"/>
      </div>
    </>
  )
}

type Props = {
  icon: React.JSX.Element
  text: String
};

const SideBarIcon = ({ icon, text }: Props) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
}


export default SideBar