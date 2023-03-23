import { User } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom"

import rifasIcon from "../../assets/images/logo.svg"

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="sticky left-0 top-0 py-6 border-b backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-rifas-border-line z-[9998]">
      <div className="relative max-w-[1120px] m-auto flex items-center justify-between">
        <Link to="/">
          <img className="h-11" src={rifasIcon} alt="Rifas Green" />
        </Link>
        <div className="flex items-center justify-center">
          <ul className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-6">
            <Link
              to="#"
              className="text-slate-500 text-sm uppercase font-bold no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Preços
            </Link>
            <Link
              to="/raffles"
              className="text-slate-500 text-sm uppercase font-bold no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Rifas Recentes
            </Link>
            <Link
              to="/help"
              className="text-slate-500 text-sm uppercase font-bold no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Ajuda
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="flex items-center gap-2 uppercase font-bold text-violet-500 text-xs px-6 py-3"
          >
            <User size={16} color="#835afd" />
            Entrar
          </Link>
          <button
            onClick={() => navigate("/signup")}
            className="rounded-[5px] flex items-center hover:text-white hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-violet-500 px-6 py-3 font-bold"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </header>
  )
}
