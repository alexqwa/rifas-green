import { Footer } from "../components/Global/Footer"
import { Navbar } from "../components/Global/Navbar"
import { useAuth } from "../hooks/useAuth"

import { Faders } from "phosphor-react"

export function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1152px] m-auto py-16">
        <main className="w-full flex flex-col items-center">
          <div className="max-w-[70rem] w-full">
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center">
                <h2 className="font-bold text-4xl text-white">
                  Olá, {user?.name.split(" ", 1)}
                </h2>
                <div className="flex flex-col ml-12">
                  <p className="text-base text-gray-200">
                    É bom ter você de volta!
                  </p>
                  <p className="text-base text-gray-200 mt-3">
                    Continue aprendendo, retorne para aula que parou.
                  </p>
                </div>
              </div>
              <span className="text-base text-gray-300">#NeverStopRaffle</span>
            </div>
            <div className="flex justify-between items-center py-4 px-6 bg-gradient-to-l from-red-300 to-violet-500 rounded-[5px] transition-shadow">
              <div className="flex flex-col">
                <h2 className="text-white font-bold text-base">Rifas</h2>
                <span className="text-gray-200 text-sm">
                  Rifas disponíveis no momento!
                </span>
              </div>
              <button className="h-10 w-10 rounded-[5px] flex items-center justify-center hover:bg-white/20 transition-colors">
                <Faders size={24} color="#fff" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-[5px] bg-[#202024]">
                <header className="flex items-stretch justify-between p-8">
                  <span className="w-[118px] h-[118px] p-1 inline-flex shrink-0 box-border rounded-full border-2 border-gray-400/70">
                    <img
                      className="w-full rounded-full"
                      src={`https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${user?.name}`}
                      alt={user?.name}
                    />
                  </span>
                  <div className="w-[70%] ml-8 flex flex-col justify-between items-start">
                    <div className="w-full flex flex-col">
                      <h3 className="text-2xl text-gray-100 font-bold">
                        Meu perfil
                      </h3>
                      <span className="text-base text-gray-300 mt-2">
                        0 visualizações nos últimos 7 dias
                      </span>
                    </div>
                    <button className="uppercase flex transition-colors hover:bg-violet-400 items-center px-6 py-3 justify-center font-bold  text-sm bg-violet-500 text-white rounded-[5px] h-10">
                      Visualizar perfil
                    </button>
                  </div>
                </header>
                <footer className="flex flex-col border-t-[1.5px] border-solid border-[#121214] p-8">
                  <span className=" text-base text-gray-200">
                    Nível do perfil:&nbsp;
                    <strong>Básico</strong>
                  </span>
                </footer>
              </div>
              <div></div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
