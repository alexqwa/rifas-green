import * as Tabs from "@radix-ui/react-tabs"
import { StyledTabs } from "../stitches/stitchesTab"
import { HardDrives, ArrowUpRight, DiceThree, Medal } from "phosphor-react"

export function Tab() {
  return (
    <Tabs.Root className="w-full" defaultValue="tab1">
      <Tabs.List className="w-full flex gap-4 border-b-[1px] border-rifas-border-line mb-10">
        <StyledTabs
          value="tab1"
          className="flex items-center gap-2 justify-center font-bold text-lg p-4"
        >
          <HardDrives size={24} />
          plataforma
        </StyledTabs>
        <StyledTabs
          value="tab2"
          className="flex items-center gap-2 justify-center font-bold text-lg p-4"
        >
          <DiceThree size={24} />
          sorteios
        </StyledTabs>
        <StyledTabs
          value="tab3"
          className="flex items-center gap-2 justify-center font-bold text-lg p-4"
        >
          <Medal size={24} />
          prêmios
        </StyledTabs>
      </Tabs.List>

      <Tabs.Content value="tab1" className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-3xl">
          Comece a utilizar nossa plataforma <br />
          para gerenciar suas rifas
        </h1>
        <p className="text-white/90">
          Você vai encontrar as opções de adicionar afiliados, criar promoções,
          <br />
          mudar a aparência de sua rifa e receber seus pagamentos
          <br /> por Pix, Mercado Pago, PicPay ou TED.
        </p>
        <button className="flex items-center justify-between px-10 rounded bg-green-500 hover:opacity-80 transition-opacity w-60 h-14 uppercase text-white text-sm font-bold">
          Quero conhecer
          <span>
            <ArrowUpRight size={24} />
          </span>
        </button>
      </Tabs.Content>
      <Tabs.Content value="tab2" className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-3xl">
          Acesse todos os sorteios que estão <br /> rolando atualmente
        </h1>
        <p className="text-white/90">
          Tenha acesso aos mais variados sorteios que estão
          <br /> rolando em nossa plataforma, entre agora e teste sua sorte{" "}
          <br />
          com algum de nossos sorteios.
        </p>
        <button className="flex items-center justify-between px-10 rounded bg-rifas-blue hover:opacity-80 transition-opacity w-60 h-14 uppercase text-white text-sm font-bold">
          Quero conhecer
          <span>
            <ArrowUpRight size={24} />
          </span>
        </button>
      </Tabs.Content>
      <Tabs.Content value="tab3" className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-3xl">
          As melhores rifas com os melhores <br />
          prêmios você só encontra aqui
        </h1>
        <p className="text-white/90">
          Faça parte da nossa comunidade, fique avontade
          <br />
          em usufruir das melhores rifas que nossos
          <br /> usuários estão rifando!
        </p>
        <button className="flex items-center justify-between px-10 rounded bg-red-500 hover:opacity-80 transition-opacity w-60 h-14 uppercase text-white text-sm font-bold">
          Quero conhecer
          <span>
            <ArrowUpRight size={24} />
          </span>
        </button>
      </Tabs.Content>
    </Tabs.Root>
  )
}
