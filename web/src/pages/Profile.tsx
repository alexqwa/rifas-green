import { useAuth } from "../hooks/useAuth"
import * as HoverCard from "@radix-ui/react-hover-card"
import { StyledContent } from "../stitches/stitchesHoverCard"
import { PencilSimple, Plus, Question } from "phosphor-react"
import { Navbar } from "../components/Global/Navbar"

export function Profile() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <div className="max-w-[1152px] m-auto py-16">
        <div className="flex gap-x-20">
          <div className="max-w-[312px] w-full space-y-6">
            <div className="bg-white border border-rifas-border-line rounded-lift">
              <header className="p-8 relative text-center">
                <button className="right-[10px] top-[10px] absolute self-end h-10 w-10 rounded-lift flex items-center justify-center text-white/50 hover:text-white hover:bg-rifas-border-line transition-colors">
                  <PencilSimple size={16} weight="fill" />
                </button>
                <span className="w-[180px] h-[180px] p-2 inline-flex shrink-0 box-border rounded-full border-4 border-white mb-6">
                  <img
                    className="w-full rounded-full"
                    src={`https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${user?.name}`}
                    alt={user?.name}
                  />
                </span>
                <h1 className="text-slate-600 text-2xl font-bold text-center">
                  {user?.name}
                </h1>
              </header>
              <footer className="border-t border-rifas-border-line w-full p-4 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold uppercase">
                  Membro desde: março, 2022
                </span>
              </footer>
            </div>
            <div className="bg-white border border-rifas-border-line rounded-lift p-8 relative">
              <HoverCard.Root openDelay={0} closeDelay={100}>
                <HoverCard.Trigger className="absolute self-end right-[15px] top-[15px] text-slate-500 hover:text-slate-500/80 transition-all">
                  <Question size={24} weight="fill" />
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <StyledContent className="w-[264px] py-2 px-[21px] text-center bg-white border border-rifas-border-line rounded-lift">
                    <h5 className="text-sm font-bold mb-2 text-slate-600">
                      Nível do perfil
                    </h5>
                    <p className="text-sm m-0 text-[rgb(168,168,179)]">
                      Quanto maior o nível do perfil, maior a sua chance de ser
                      notado por outros rifeiros e que realmente fazem sentido
                      pra você.
                    </p>
                    <HoverCard.Arrow fill="rgb(233 235 240)" />
                  </StyledContent>
                </HoverCard.Portal>
              </HoverCard.Root>
              <h1 className="text-slate-600 font-bold text-2xl">
                Nível do perfil
              </h1>
            </div>
            <div className="bg-white border border-rifas-border-line rounded-lift p-8">
              <h1 className="text-slate-600 font-bold text-2xl">Minha rede</h1>
            </div>
          </div>
          <main className="w-full space-y-6">
            <div className="rounded-lift bg-white border border-rifas-border-line p-8">
              <div className="flex items-center justify-between mb-10">
                <h1 className="text-slate-600 font-bold text-2xl">Sobre mim</h1>
                <button className="h-10 w-10 rounded-lift flex items-center justify-center text-white/50 hover:text-white hover:bg-rifas-border-line transition-colors">
                  <PencilSimple size={16} weight="fill" />
                </button>
              </div>
              <div className="rounded-lift border-2 border-rifas-border-line border-dashed p-8 hover:border-slate-300 transition-colors duration-150 cursor-pointer group">
                <span className="flex items-center justify-center gap-2 text-slate-500 text-sm transition-colors duration-150 group-hover:text-slate-500/80">
                  <Plus
                    className="text-violet-500 group-hover:text-violet-500/80"
                    size={20}
                  />
                  Quem é você e o que faz?
                </span>
              </div>
            </div>
            <div className="rounded-lift bg-white border border-rifas-border-line p-8">
              <h1 className="text-slate-600 font-bold text-2xl">
                Quantidade de rifas{" "}
              </h1>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
