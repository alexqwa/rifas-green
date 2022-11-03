import { useNavigate, Link } from "react-router-dom"
import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem } from "../components/Accordion/AccordionItem"
import {
  User,
  ArrowRight,
  Percent,
  Users,
  Medal,
  Barcode,
  File,
  Tabs,
} from "phosphor-react"

import rifasIcon from "../assets/images/logo.svg"

import { Tab } from "../components/Tab"
import { Footer } from "../components/Global/Footer"

export function Home() {
  const navigate = useNavigate()

  function handleCreateAccount() {
    navigate("/signup")
  }

  return (
    <>
      <header className="sticky left-0 top-0 p-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-zinc-900/80 border-rifas-border-line z-[9998]">
        <div className="w-[1120px] m-auto flex items-center justify-between">
          <a href="/">
            <img className="h-11" src={rifasIcon} alt="Rifas Green" />
          </a>
          <div className="flex items-center gap-4">
            <Link
              to="/signin"
              className="flex items-center gap-2 uppercase font-bold text-white text-xs px-6 py-3"
            >
              <User size={16} color="#835afd" />
              Entrar
            </Link>
            <button
              onClick={handleCreateAccount}
              className="rounded-[5px] flex items-center hover:bg-violet-500 transition-colors uppercase  border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] m-auto my-24">
        <section className="flex items-start justify-between mb-10">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-bold text-white text-5xl">
              Crie suas rifas de forma <br /> rápida e prática
            </h1>
            <p className="leading-6 text-[#e1e1e6]">
              Crie e gerencie suas rifas em segundos <br /> com os melhores
              preços do mercado.
            </p>
            <button
              className="hover:bg-violet-600 transition-colors flex items-center justify-between bg-violet-500 uppercase rounded-[5px] w-60 h-14 font-bold text-white py-4 pl-6 
            pr-4"
            >
              Começar a rifar
              <span className="bg-violet-600 w-8 h-8 flex items-center justify-center rounded">
                <ArrowRight />
              </span>
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={380}
            viewBox="0 0 735 1244"
          >
            <path
              d="M789,192S803.9,87.8,882,77s296-43,296-43,136.6-32.2,94,117c-35.1,153.7-51,225-51,225l-185,815s-16.4,87.2-119,84c-102.2-.2-297-9-297-9s-91.4,7.2-70-99S789,192,789,192Z"
              transform="translate(-545.2 -31.1)"
              fill="#e5e5e5"
              fill-rule="evenodd"
            />
            <path
              d="M805,180s15.2-76.4,65-83c52.6-8.3,34-6,34-6s15.4-4.3,11,11c-.9,8.8,0,12,0,12s-4.8,15.5,21,11,172-23,172-23,21.9-2.8,28-27c4.8-20.8,20-19,20-19l39-5s47.7-5.8,34,53c-12.1,51.8-247,1078-247,1078s-6.4,54.5-89,49c-81.6-.2-143-2-143-2l-142-3s-59.3,3.5-46-59c14-66.8,174-710,174-710Z"
              transform="translate(-545.2 -31.1)"
              fill="#29292e"
              fill-rule="evenodd"
            />
            <path
              d="M1192,425l28-125s1.3-10.3,9-9,4,11,4,11l-33,146s-2.7,8-8,6-5.3-8.3-4-12S1192,425,1192,425Z"
              transform="translate(-545.2 -31.1)"
              fill="#d3d4d5"
              fill-rule="evenodd"
            />
            <path
              d="M1198,32s69.8-4,46,81c-18.8,86-241,1058-241,1058s-18.8,88-106,82c-87.7-2-301-6-301-6s-59.8,0-49-66"
              transform="translate(-545.2 -31.1)"
              fill="none"
              stroke="#c3c3c3"
            />
            <path
              d="M1000.9,85.4l36.9-4.8c-.7.4,9.8-2.9,9.1,3.8s-4.5,5.8-11.8,7.3-32.9,4.7-32.9,4.7-6.1,1.6-6.1-3.9A7.5,7.5,0,0,1,1000.9,85.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#d3d4d5"
              fill-rule="evenodd"
            />
            <path
              d="M854.7,211.9l104.6-10.3-1.9,6.5a4.7,4.7,0,0,0-4.5,3.3c-1.2,4.2,2.2,4.6,2.2,4.6l-1.9,6.7s-3.1-.3-4.4,3.5,2.1,4.4,2.1,4.4l-1.8,6.1-103.8,8.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#8257e6"
              fill-rule="evenodd"
            />
            <path
              d="M763.4,600.4l68.7-3.6c4.6-.2,7.6,3.5,6.6,8.3l-4,20.6c-1,4.9-5.5,9.1-10.2,9.2l-69.5,2c-4.2.1-6.8-3.6-5.7-8.3l4.5-19.6C755,604.5,759.3,600.6,763.4,600.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M779.3,615.1l29.8-1.3a2,2,0,0,1,2.1,1.9,1.7,1.7,0,0,1-.1.7,3.6,3.6,0,0,1-3.1,2.8l-29.9,1.2c-1.3.1-2.2-1.1-1.9-2.6A3.5,3.5,0,0,1,779.3,615.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M870.7,594.2l70.6-3.7c4.7-.2,7.8,3.5,6.8,8.4l-4,20.9c-1,5-5.6,9.2-10.4,9.3l-71.5,2.1c-4.3.1-7-3.6-5.9-8.4L861,603C862.1,598.4,866.4,594.5,870.7,594.2Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M887.1,609.1l30.7-1.3a1.9,1.9,0,0,1,2.1,1.9,1.5,1.5,0,0,1-.1.7,3.7,3.7,0,0,1-3.2,2.9l-30.7,1.2a1.9,1.9,0,0,1-2-1.9,1.5,1.5,0,0,1,.1-.7A3.7,3.7,0,0,1,887.1,609.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M982.1,587.9l72.7-3.8c4.8-.3,8,3.5,7.1,8.5l-4,21.2c-1,5.1-5.8,9.3-10.7,9.5l-73.6,2.2c-4.5.1-7.2-3.7-6.1-8.5l4.6-20.1C973.3,592.1,977.7,588.1,982.1,587.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M999.1,602.9l31.6-1.3a2.1,2.1,0,0,1,2.2,1.9,2.2,2.2,0,0,1-.1.8,3.7,3.7,0,0,1-3.3,2.9l-31.6,1.2a2,2,0,0,1-2.1-1.9,2.2,2.2,0,0,1,.1-.8A3.9,3.9,0,0,1,999.1,602.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M749.2,661.1l68.6-3c4.6-.2,7.5,3.5,6.6,8.4l-4,20.7c-1,4.9-5.5,9-10.2,9.1l-69.4,1.4c-4.2.1-6.7-3.7-5.7-8.3l4.6-19.6C740.8,665.1,745,661.2,749.2,661.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M765,675.9l29.8-1a2.1,2.1,0,0,1,2.1,1.9,1.7,1.7,0,0,1-.1.7,3.6,3.6,0,0,1-3.1,2.8l-29.9.9a2,2,0,0,1-2-1.9,1.7,1.7,0,0,1,.1-.7A3.8,3.8,0,0,1,765,675.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M856.4,655.7l70.6-3.1c4.7-.2,7.8,3.6,6.8,8.5l-4,20.9c-1,5-5.6,9.2-10.4,9.3L848,692.8c-4.3.1-7-3.7-5.9-8.5l4.6-19.9C847.7,659.8,852.1,655.9,856.4,655.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M872.7,670.8l30.7-1.1a1.9,1.9,0,0,1,2.1,1.9,1.7,1.7,0,0,1-.1.7,3.5,3.5,0,0,1-3.2,2.8l-30.7,1a1.9,1.9,0,0,1-2-1.9,1.7,1.7,0,0,1,.1-.7A3.8,3.8,0,0,1,872.7,670.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M967.7,650.3l72.6-3.2c4.8-.2,8,3.6,7.1,8.6l-4.1,21.2c-1,5.1-5.8,9.3-10.7,9.4l-73.5,1.6c-4.5.1-7.2-3.8-6.1-8.6l4.6-20.2C958.8,654.5,963.2,650.5,967.7,650.3Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M984.6,665.5l31.6-1.1a2.1,2.1,0,0,1,2.2,2,1.7,1.7,0,0,1-.1.7,3.7,3.7,0,0,1-3.3,2.9l-31.6,1a2.1,2.1,0,0,1-2.1-1.9,1.5,1.5,0,0,1,.1-.7A3.7,3.7,0,0,1,984.6,665.5Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M733,722.8l68.5-2.5c4.6-.2,7.5,3.6,6.6,8.5l-4,20.7c-1,5-5.5,9-10.1,9.1l-69.3.9c-4.2.1-6.7-3.7-5.6-8.4l4.6-19.6C724.6,726.8,728.8,723,733,722.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M748.8,737.8l29.8-.8a2.2,2.2,0,0,1,2.1,2,1.7,1.7,0,0,1-.1.7,3.6,3.6,0,0,1-3.1,2.8l-29.8.7a2,2,0,0,1-2-1.9,1.7,1.7,0,0,1,.1-.7A3.5,3.5,0,0,1,748.8,737.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M840,718.4l70.5-2.5c4.7-.2,7.8,3.7,6.8,8.6l-4,21c-1,5-5.6,9.2-10.4,9.2l-71.3.9c-4.3.1-6.9-3.8-5.8-8.5l4.6-19.9C831.4,722.4,835.7,718.5,840,718.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M856.3,733.6l30.6-.8a2,2,0,0,1,2.1,2,1.7,1.7,0,0,1-.1.7,3.5,3.5,0,0,1-3.2,2.8L855,739a1.9,1.9,0,0,1-2-1.9,1.7,1.7,0,0,1,.1-.7A4,4,0,0,1,856.3,733.6Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M951.1,713.8l72.5-2.6c4.8-.2,8,3.7,7.1,8.7l-4.1,21.3c-1,5.1-5.8,9.3-10.7,9.4l-73.4,1c-4.5.1-7.2-3.8-6.1-8.7l4.6-20.2C942.3,717.9,946.7,714,951.1,713.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M968,729.3l31.5-.8a2.1,2.1,0,0,1,2.2,2,1.5,1.5,0,0,1-.1.7,3.7,3.7,0,0,1-3.2,2.9l-31.6.7a2,2,0,0,1-2.1-2,1.7,1.7,0,0,1,.1-.7A3.7,3.7,0,0,1,968,729.3Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M718.7,782.6l68.4-1.9c4.6-.1,7.5,3.7,6.6,8.5l-4,20.7c-1,5-5.5,9-10.1,9l-69.2.3c-4.2,0-6.7-3.8-5.6-8.5l4.6-19.7C710.3,786.6,714.5,782.8,718.7,782.6Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M734.5,797.9l29.7-.5a2.1,2.1,0,0,1,2.1,2,1.7,1.7,0,0,1-.1.7,3.6,3.6,0,0,1-3.1,2.8l-29.8.4a2,2,0,0,1-2-2,1.7,1.7,0,0,1,.1-.7A3.4,3.4,0,0,1,734.5,797.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M825.6,779.1l70.4-2c4.7-.1,7.8,3.7,6.8,8.7l-4.1,21c-1,5-5.6,9.1-10.4,9.2l-71.2.3c-4.3,0-6.9-3.8-5.8-8.6l4.6-19.9C816.9,783,821.3,779.2,825.6,779.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M841.9,794.5l30.6-.6a2,2,0,0,1,2.1,2,1.7,1.7,0,0,1-.1.7,3.5,3.5,0,0,1-3.2,2.8l-30.6.5a2,2,0,0,1-2-2,1.7,1.7,0,0,1,.1-.7A3.4,3.4,0,0,1,841.9,794.5Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M936.6,775.4l72.4-2c4.8-.1,8,3.8,7.1,8.8l-4.1,21.3c-1,5.1-5.8,9.3-10.7,9.3l-73.3.4c-4.5,0-7.2-3.9-6-8.7l4.6-20.2C927.7,779.4,932.2,775.5,936.6,775.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M953.4,791l31.5-.6a2.1,2.1,0,0,1,2.2,2.1,1.7,1.7,0,0,1-.1.7,3.7,3.7,0,0,1-3.3,2.9l-31.5.5a2.1,2.1,0,0,1-2.1-2,1.7,1.7,0,0,1,.1-.7A3.8,3.8,0,0,1,953.4,791Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M704.3,843.6l68.3-1.4c4.6-.1,7.5,3.8,6.6,8.6l-4,20.8c-1,5-5.5,9-10.1,9l-69.1-.3c-4.2,0-6.7-3.9-5.6-8.6L695,852C696,847.5,700.2,843.7,704.3,843.6Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M720.1,859l29.7-.3a2.1,2.1,0,0,1,2.1,2.1,1.3,1.3,0,0,1-.1.6,3.6,3.6,0,0,1-3.1,2.8l-29.7.2a2,2,0,0,1-2-2,2,2,0,0,1,.1-.7A3.3,3.3,0,0,1,720.1,859Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M811.1,840.9l70.3-1.4c4.7-.1,7.7,3.8,6.8,8.7l-4.1,21.1c-1,5-5.6,9.1-10.4,9.1l-71.1-.2c-4.3,0-6.9-3.9-5.8-8.7l4.6-20C802.5,844.8,806.8,840.9,811.1,840.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M827.4,856.5l30.5-.3a2.1,2.1,0,0,1,2.1,2.1,2,2,0,0,1-.1.7,3.5,3.5,0,0,1-3.2,2.8l-30.6.2a2,2,0,0,1-2-2,1.7,1.7,0,0,1,.1-.7A3.6,3.6,0,0,1,827.4,856.5Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M922,838.1l72.4-1.5c4.8-.1,8,3.9,7,8.9l-4.1,21.4c-1,5.1-5.8,9.3-10.6,9.3l-73.2-.2c-4.5,0-7.1-4-6-8.8l4.6-20.3C913.2,842.1,917.6,838.2,922,838.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M938.9,853.9l31.5-.3a2.1,2.1,0,0,1,2.2,2.1,1.7,1.7,0,0,1-.1.7,3.5,3.5,0,0,1-3.3,2.8l-31.5.2a2.1,2.1,0,0,1-2.1-2.1,1.7,1.7,0,0,1,.1-.7A3.5,3.5,0,0,1,938.9,853.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M688.1,905.6l68.2-.8c4.6-.1,7.5,3.8,6.5,8.7l-4.1,20.8c-1,5-5.5,9-10.1,8.9l-69-.8c-4.2,0-6.7-3.9-5.6-8.7l4.6-19.7C679.7,909.4,683.9,905.6,688.1,905.6Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M703.8,921.2h29.6a2.1,2.1,0,0,1,2.1,2.1,1.3,1.3,0,0,1-.1.6,3.4,3.4,0,0,1-3.1,2.7H702.6a2,2,0,0,1-2-2,1.3,1.3,0,0,1,.1-.6A3.5,3.5,0,0,1,703.8,921.2Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M794.7,903.7l70.2-.8c4.7-.1,7.7,3.9,6.8,8.8l-4.1,21.1c-1,5.1-5.6,9.1-10.4,9.1l-71-.8c-4.3-.1-6.9-4-5.8-8.8l4.6-20C786.1,907.6,790.4,903.8,794.7,903.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M810.9,919.5h30.5a2.1,2.1,0,0,1,2.1,2.1,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8H809.6a2,2,0,0,1-2-2.1,1.3,1.3,0,0,1,.1-.6A4,4,0,0,1,810.9,919.5Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M905.4,901.9l72.3-.9c4.8-.1,8,3.9,7,9l-4.1,21.4c-1,5.1-5.8,9.3-10.6,9.2l-73.1-.8c-4.4-.1-7.1-4-6-8.9l4.7-20.3C896.6,905.8,901,901.9,905.4,901.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M922.2,917.9h31.4a2.2,2.2,0,0,1,2.2,2.2,2,2,0,0,1-.1.7,3.5,3.5,0,0,1-3.2,2.8H921a2.1,2.1,0,0,1-2.1-2.1,2,2,0,0,1,.1-.7A3.6,3.6,0,0,1,922.2,917.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M673.7,965.7l68.2-.2c4.5,0,7.5,3.9,6.5,8.8l-4.1,20.8c-1,5-5.5,9-10.1,8.9l-68.9-1.4c-4.2-.1-6.7-4-5.6-8.7l4.6-19.8C665.3,969.5,669.6,965.7,673.7,965.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M689.4,981.5l29.6.2a2.1,2.1,0,0,1,2.1,2.2,1.3,1.3,0,0,1-.1.6,3.4,3.4,0,0,1-3.1,2.7l-29.7-.3a1.9,1.9,0,0,1-1.9-2.1,1.3,1.3,0,0,1,.1-.6A3.3,3.3,0,0,1,689.4,981.5Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M780.2,964.7l70.1-.3c4.7,0,7.7,4,6.8,8.9L853,994.4c-1,5.1-5.6,9.1-10.4,9l-70.9-1.4c-4.3-.1-6.9-4.1-5.8-8.9l4.6-20C771.6,968.5,775.9,964.7,780.2,964.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M796.4,980.7l30.5.2a2.1,2.1,0,0,1,2.1,2.2,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8l-30.5-.3a2.1,2.1,0,0,1-2-2.1,1.3,1.3,0,0,1,.1-.6A3.4,3.4,0,0,1,796.4,980.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M890.8,963.7l72.2-.3c4.8,0,8,4,7,9l-4.1,21.5c-1,5.1-5.8,9.2-10.6,9.1l-73-1.4c-4.4-.1-7.1-4.1-6-9l4.7-20.3C882,967.6,886.4,963.7,890.8,963.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M907.6,979.9l31.4.2a2.2,2.2,0,0,1,2.2,2.2,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8l-31.4-.3a2.1,2.1,0,0,1-2.1-2.2,1.3,1.3,0,0,1,.1-.6A3.3,3.3,0,0,1,907.6,979.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M659.3,1026.9l68.1.3c4.5,0,7.5,4,6.5,8.9l-4.1,20.9c-1,5-5.5,9-10.1,8.8l-68.9-2c-4.2-.1-6.7-4.1-5.6-8.8l4.6-19.8C651,1030.6,655.2,1026.9,659.3,1026.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M675,1042.9l29.6.4a2.1,2.1,0,0,1,2.1,2.2,1.3,1.3,0,0,1-.1.6,3.4,3.4,0,0,1-3.1,2.7l-29.6-.5a2,2,0,0,1-1.9-2.2,1.3,1.3,0,0,1,.1-.6A3.1,3.1,0,0,1,675,1042.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M765.7,1026.8l70,.3c4.7,0,7.7,4,6.8,9l-4.1,21.2c-1,5.1-5.6,9.1-10.4,9l-70.9-2c-4.3-.1-6.9-4.1-5.8-8.9l4.6-20.1C757.1,1030.6,761.4,1026.8,765.7,1026.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M781.9,1043l30.4.4a2.1,2.1,0,0,1,2.1,2.2,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8l-30.5-.5a2,2,0,0,1-2-2.2,1.3,1.3,0,0,1,.1-.6A3.6,3.6,0,0,1,781.9,1043Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M876.2,1026.7l72.1.3c4.8,0,8,4.1,7,9.1l-4.1,21.5c-1,5.1-5.8,9.2-10.6,9.1l-73-2c-4.4-.1-7.1-4.2-6-9.1l4.7-20.4C867.4,1030.5,871.8,1026.7,876.2,1026.7Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M892.9,1043.1l31.3.4a2.2,2.2,0,0,1,2.2,2.3,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8l-31.4-.6a2.1,2.1,0,0,1-2.1-2.2,1.3,1.3,0,0,1,.1-.6A3.6,3.6,0,0,1,892.9,1043.1Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M643,1089.2l68,.9c4.5.1,7.5,4.1,6.5,8.9l-4.1,20.9c-1,5-5.5,8.9-10.1,8.8l-68.8-2.5c-4.2-.2-6.7-4.1-5.6-8.9l4.6-19.8C634.6,1092.8,638.9,1089.1,643,1089.2Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M658.6,1105.3l29.5.7a2.1,2.1,0,0,1,2,2.3,1.3,1.3,0,0,1-.1.6,3.4,3.4,0,0,1-3.1,2.7l-29.6-.8a2.1,2.1,0,0,1-1.9-2.2c0-.2.1-.4.1-.6A3.5,3.5,0,0,1,658.6,1105.3Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M749.2,1089.9l69.9.9c4.7.1,7.7,4.1,6.7,9.1l-4.1,21.2c-1,5.1-5.6,9.1-10.4,8.9l-70.7-2.6c-4.3-.2-6.9-4.2-5.8-9l4.6-20.1C740.6,1093.7,744.9,1089.9,749.2,1089.9Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M765.4,1106.3l30.4.7a2.2,2.2,0,0,1,2.1,2.3,1.3,1.3,0,0,1-.1.6,3.3,3.3,0,0,1-3.2,2.7l-30.4-.8a2.1,2.1,0,0,1-2-2.2,1.3,1.3,0,0,1,.1-.6A3.3,3.3,0,0,1,765.4,1106.3Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M859.5,1090.8l72,.9c4.8.1,7.9,4.2,7,9.2l-4.1,21.5c-1,5.2-5.8,9.2-10.6,9l-72.8-2.6c-4.4-.2-7.1-4.3-6-9.1l4.7-20.4C850.7,1094.5,855.1,1090.7,859.5,1090.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
            <path
              d="M876.2,1107.4l31.3.7a2.3,2.3,0,0,1,2.2,2.3,1.3,1.3,0,0,1-.1.6,3.5,3.5,0,0,1-3.2,2.8l-31.3-.8a2.3,2.3,0,0,1-2.1-2.3,1.3,1.3,0,0,1,.1-.6A3.4,3.4,0,0,1,876.2,1107.4Z"
              transform="translate(-545.2 -31.1)"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M841.9,321.8l272.2-23.6c8.4-.7,13.8,4.4,12.2,11.5L1098,429.5c-1.7,7.2-9.9,13.5-18.4,14L806,460.1c-7.6.5-12.3-4.7-10.5-11.6L825,335C826.8,328.4,834.4,322.4,841.9,321.8Z"
              transform="translate(-545.2 -31.1)"
              fill="#99999e"
              fill-rule="evenodd"
            />
          </svg>
        </section>
        <section className="flex flex-col items-center">
          <div className="w-[1.5px] h-20 bg-gradient-to-b from-violet-500 to-zinc-900" />
          <h1 className="mt-16 font-bold text-white text-5xl text-center leading-tight mb-24">
            Somos uma plataforma completa de <br /> vendas e gerenciamento de
            rifas
          </h1>
          <Tab />
        </section>
        <section className="border-b-[1px] border-[rgb(41,41,46)] mt-16">
          <h1 className="text-white text-5xl font-bold text-center leading-tight mb-10">
            Escolha o melhor plano que se adapte <br />
            mais aos seus objetivos
          </h1>
          <div className="flex items-center justify-evenly gap-10 mb-10">
            <div className="bg-[#202024] rounded-lift w-full border-2 border-[rgb(41,41,46)]">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-white font-bold text-2xl">Plano Prata</h1>
              </header>
              <div className="w-full border-[rgb(18,18,20)] border-t-[1px] flex p-6 flex-col items-start justify-center border-b-[1px]">
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 5.000 bilhetes
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  100 Rifinhas gratís
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />5 Promoções por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  10 Cupons de desconto por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  50 Afiliados por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Concorra a prêmios todos os dias
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center flex-start">
                  <span className="text-white/80 text-sm mt-2 mr-1">R$</span>
                  <h3 className="text-white font-bold text-2xl">39</h3>
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
              </footer>
            </div>
            <div className="bg-[#202024] rounded-lift w-full border-2 border-[rgb(41,41,46)]">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-white font-bold text-2xl">
                  Plano Diamante
                </h1>
              </header>
              <div className="w-full border-[rgb(18,18,20)] border-t-[1px] flex p-6 flex-col items-start justify-center border-b-[1px]">
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 100.000 bilhetes
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  Rifinhas ilimitadas
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />
                  Promoções ilimitadas
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  Cupons de desconto ilimitados
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  Afiliados ilimitados
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Prêmios ilimitados
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center flex-start">
                  <span className="text-white/80 text-sm mt-2 mr-1">R$</span>
                  <h3 className="text-white font-bold text-2xl">199</h3>
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
              </footer>
            </div>
            <div className="bg-[#202024] rounded-lift w-full border-2 border-[rgb(41,41,46)]">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-white font-bold text-2xl">Plano Ouro</h1>
              </header>
              <div className="w-full border-[rgb(18,18,20)] border-t-[1px] flex p-6 flex-col items-start justify-center border-b-[1px]">
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 20.000 bilhetes
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  500 Rifinhas gratís
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />
                  30 Promoções por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  20 Cupons de desconto por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  200 Afiliados por mês
                </p>
                <p className="text-white/80 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Concorra a 5 prêmios todos os dias
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center flex-start">
                  <span className="text-white/80 text-sm mt-2 mr-1">R$</span>
                  <h3 className="text-white font-bold text-2xl">95</h3>
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
              </footer>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-white text-5xl font-bold self-start mb-10">
            Dúvidas frequentes
          </h1>
          <Accordion.Root
            type="single"
            collapsible
            className="grid grid-cols-2 gap-6 w-full"
          >
            <AccordionItem
              value="item-1"
              title="Quem recebe o valor dos bilhetes vendidos?"
              description="O valor dos bilhetes vão diretamente para a sua conta bancária.
                No painel administrativo você adíciona as formas de pagamentos
                que deseja na sua rifa, como pix, cartão de crédito, etc."
            />
            <AccordionItem
              value="item-2"
              title="Qual o valor para criar uma rifa?"
              description="Cobramos um valor único por rifa independente do valor que você
                arrecadar. Nosso valor inicial é de R$ 39,90 por rifa."
            />
            <AccordionItem
              value="item-3"
              title="Quantas rifas eu posso fazer?"
              description="Você não tem limite de rifas, mas lembre-se que cada rifa criada
                é necessário pagar a taxa da plataforma."
            />
            <AccordionItem
              value="item-4"
              title="O sistema possui baixa automática dos bilhetes?"
              description="Sim, caso você queira é possível integrar os pagamentos da sua
                rifa com o Mercado Pago, sendo assim, os bilhetes pagos irão ter
                o status alterado automaticamente. Mas caso seja do seu interesse ter formas de pagamento manuais,
                os clientes irão efetuar o pagamento na sua rifa, e você irá
                alterar os pedidos para pago no painel administrativo."
            />
            <AccordionItem
              value="item-5"
              title="O que acontece com os bilhetes não pagos?"
              description="No sistema você irá definir um período em dias para a reserva
                dos bilhetes expirarem, após esta quantidade de dias
                estabelecida, os bilhetes não pagos irão ficar disponíveis para
                compra novamente."
            />
            <AccordionItem
              value="item-6"
              title="O Rifas Green faz sorteios?"
              description="Sim, O Rifas Green disponibiliza toda a plataforma para os
                administradores das rifas realizarem seus sorteios. A plataforma
                não requer eventuais autorizações que o organizador entender
                necessárias para a realização do seu sorteio."
            />
          </Accordion.Root>
        </section>
      </main>

      <Footer />
    </>
  )
}
