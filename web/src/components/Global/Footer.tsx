import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import rifasIcon from "../../assets/images/logo.svg"

export function Footer() {
  const { user } = useAuth()

  return (
    <footer className="bg-white border-t border-rifas-border-line">
      <div className="md:max-w-[640px] lg:max-w-[1120px] m-auto py-14 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <img className="h-16 mb-6" src={rifasIcon} alt="Rifas Green" />
          <p className="text-slate-500 md:text-xs lg:text-sm mb-1">
            &copy; Rifas Green 2022
          </p>
          <p className="text-slate-500 md:text-xs lg:text-sm">
            Todos os direitos reservados
          </p>
        </div>
        <div className="lg:flex lg:gap-14 md:grid md:grid-cols-3 md:ml-10 md:gap-x-10 md:gap-y-4">
          <ul className="flex flex-col gap-2 md:mr-4">
            <span className="font-bold text-slate-600 text-base">
              Assessoria de imprensa
            </span>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              alexandre@rifasgreen.com.br
            </a>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              gabriel@rifasgreen.com.br
            </a>
          </ul>
          <ul className="flex flex-col gap-2">
            <span className="font-bold text-slate-600 text-base">
              Plataforma
            </span>
            <Link
              to="/"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Ínicio
            </Link>
            <Link
              to="/dashboard/me/raffles"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Criar rifa
            </Link>
            <Link
              to={`/dashboard/me/${user?.name}`}
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Página de perfil
            </Link>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Sorteios
            </a>
          </ul>
          <ul className="flex flex-col gap-2">
            <span className="font-bold text-slate-600 text-base">Sobre</span>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              A Rifa Green
            </a>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Direitos autorais
            </a>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Termos de uso
            </a>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Políticas de privacidade
            </a>
          </ul>
          <ul className="flex flex-col gap-2">
            <span className="font-bold text-slate-600 text-base">Dúvidas</span>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Comunidade
            </a>
            <a
              href="#"
              className="text-slate-500 md:text-xs lg:text-sm no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Central de ajuda
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
