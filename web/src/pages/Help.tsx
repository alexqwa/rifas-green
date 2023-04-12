import React from "react"
import { Link } from "react-router-dom"
import { MagnifyingGlass } from "phosphor-react"

import rifasIcon from "../assets/images/logo.svg"

export function Help() {
  return (
    <>
      <header className="sticky left-0 top-0 py-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-rifas-border-line z-[9998]">
        <div className="max-w-[1120px] m-auto flex items-center justify-between">
          <Link to="/">
            <img className="h-11" src={rifasIcon} alt="Rifas Green" />
          </Link>
          <div className="flex items-center gap-4">
            <button className="rounded-[5px] flex items-center bg-violet-500/80 transition-colors uppercase hover:bg-violet-500 text-xs text-white px-6 py-3 font-bold">
              Enviar solicitação
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-[1122px] m-auto my-24 px-6">
        <section className="flex flex-col items-center justify-center mb-20">
          <h1 className="text-[54px] text-black font-bold">Central de Ajuda</h1>
          <form className="flex items-center justify-center mt-10">
            <input
              className="bg-[#09090A] h-[65px] rounded-tl-lift rounded-bl-lift outline-none text-white text-lg w-[700px] px-5"
              type="text"
              placeholder="O que você procura?"
            />
            <button
              type="submit"
              className="bg-violet-500/80 rounded-tr-lift rounded-br-lift w-16 h-16 hover:bg-violet-500 transition-colors flex items-center justify-center"
            >
              <MagnifyingGlass size={24} weight="bold" color="#fff" />
            </button>
          </form>
        </section>
        <section className="mb-40">
          <h2 className="hidden">Categorias</h2>
          <ul className="grid grid-cols-3 gap-6">
            <li className="bg-[#202024] rounded-lift box-border flex text-center text-[rgba(130,87,230,1)]">
              <a
                href="rifas-green"
                className="text-[rgba(130,87,230,1)] flex flex-col flex-1 justify-center"
              >
                <span className="h-[96px] p-4 flex justify-start items-center transition-all group hover:bg-[#29292E] hover:rounded-lift">
                  <div className="first-letter">R</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Rifas Green
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="bg-[#202024] rounded-lift box-border flex text-center text-[rgba(130,87,230,1)]">
              <a
                href="platform"
                className="text-[rgba(130,87,230,1)] flex flex-col flex-1 justify-center"
              >
                <span className="h-[96px] p-4 flex justify-start items-center transition-all hover:bg-[#29292E] hover:rounded-lift group">
                  <div className="first-letter">P</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Plataforma
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="bg-[#202024] rounded-lift box-border flex text-center text-[rgba(130,87,230,1)]">
              <a
                href="signatures"
                className="text-[rgba(130,87,230,1)] flex flex-col flex-1 justify-center"
              >
                <span className="h-[96px] p-4 flex justify-start items-center transition-all hover:bg-[#29292E] hover:rounded-lift group">
                  <div className="first-letter">A</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Assinaturas
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="bg-[#202024] rounded-lift box-border flex text-center text-[rgba(130,87,230,1)]">
              <a
                href="cacellation"
                className="text-[rgba(130,87,230,1)] flex flex-col flex-1 justify-center"
              >
                <span className="h-[96px] p-4 flex justify-start items-center transition-all hover:bg-[#29292E] hover:rounded-lift group">
                  <div className="first-letter">C</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Cancelamento
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="bg-[#202024] rounded-lift box-border flex text-center text-[rgba(130,87,230,1)]">
              <a
                href="discord"
                className="text-[rgba(130,87,230,1)] flex flex-col flex-1 justify-center"
              >
                <span className="h-[96px] p-4 flex justify-start items-center transition-all hover:bg-[#29292E] hover:rounded-lift group">
                  <div className="first-letter">D</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Discord
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li className="bg-[#202024] rounded-lift box-border flex text-center">
              <a href="raffles" className="flex flex-col flex-1 justify-center">
                <span className="h-[96px] p-4 flex justify-start items-center transition-all hover:bg-[#29292E] hover:rounded-lift group">
                  <div className="first-letter">S</div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-white">
                      Sorteios
                    </span>
                  </div>
                </span>
              </a>
            </li>
          </ul>
        </section>
        <section className="">
          <h2 className="font-bold text-white text-4xl">Atividade recente</h2>
        </section>
      </main>
      <footer className="flex flex-1 justify-center bg-white">
        <div className="max-w-[1122px] m-auto px-6 h-20 flex flex-1 justify-between items-center">
          <div>
            <img className="h-11" src={rifasIcon} alt="Rifas Green" />
          </div>
          <div className="space-x-[30px]">
            <a
              href="#"
              className="text-slate-500 no-underline hover:underline text-[15px]"
            >
              Direitos autorais
            </a>
            <a
              href="#"
              className="text-slate-500 no-underline hover:underline text-[15px]"
            >
              Termos de uso
            </a>
            <a
              href="#"
              className="text-slate-500 no-underline hover:underline text-[15px]"
            >
              Políticas de privacidade
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
