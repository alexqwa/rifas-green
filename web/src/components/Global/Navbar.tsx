import { User } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom"

import rifasIcon from "../../assets/images/logo.svg"

export function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="sticky left-0 top-0 py-6 border-b backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-rifas-border-line z-[9998]">
      <div className="relative max-w-[1120px] m-auto flex items-center justify-between">
        <Link to="/">
          <img className="h-11" src={rifasIcon} alt="Rifas Green" />
        </Link>

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
