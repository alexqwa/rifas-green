import { useNavigate } from "react-router-dom"
import { ListBullets, SquaresFour, Plus, MagnifyingGlass } from "phosphor-react"

import { Navbar } from "../../components/Dashboard/Navbar"

export function Raffles() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1120px] m-auto py-16">
        <header className="w-full mb-14">
          <h1 className="text-black font-bold text-5xl mb-4">Campanhas</h1>
          <div className="flex flex-row items-center gap-2 max-h-12">
            <div className="relative flex-1 w-full h-12">
              <input
                className="relative pl-12 pr-4 w-full outline-none rounded-xl h-12 border border-rifas-line flex-1 text-slate-500 text-sm placeholder:text-sm peer focus-within:border-violet-500 transition-all"
                type="text"
                placeholder="Pesquisar..."
              />
              <MagnifyingGlass
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 peer-focus-within:text-violet-500 peer-focus-within:transition-all"
                size={24}
              />
            </div>
            <div className="flex flex-row overflow-hidden rounded-xl border border-rifas-line divide-x-[1px] max-h-12">
              <button className="disabled:bg-slate-300/50 disabled:cursor-not-allowed cursor-pointer p-3 bg-white hover:bg-slate-300/50 transition-all">
                <SquaresFour size={24} />
              </button>
              <button className="disabled:bg-slate-300/50 disabled:cursor-not-allowed cursor-pointer p-3 bg-white hover:bg-slate-300/50 transition-all">
                <ListBullets size={24} />
              </button>
            </div>
            <button
              onClick={() => navigate("/raffles/create")}
              className="bg-green-500 h-12 px-5 text-sm text-white rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all"
            >
              <Plus size={20} />
              Nova campanha
            </button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center p-14 pb-80">
          <h1 className="text-6xl font-bold text-violet-500 mb-8">:(</h1>
          <span className="text-slate-500 text-lg">
            Você ainda não possui nenhuma rifa!
          </span>
        </div>
      </div>
    </>
  )
}
