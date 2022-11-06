import { Users, Tabs, Percent, File, Barcode, Medal } from "phosphor-react"
import { Button } from "./Global/Button"

export function Prices() {
  return (
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
              <p className="text-white text-base ml-[2px]">,90</p>
              <small className="text-white/80 text-xs ml-1">/rifa</small>
            </div>
            <Button title="Criar rifa" w="full" h="[50px]" />
          </footer>
        </div>
        <div className="bg-[#202024] rounded-lift w-full border-2 border-[rgb(41,41,46)]">
          <header className="flex items-center justify-center p-4 w-full">
            <h1 className="text-white font-bold text-2xl">Plano Diamante</h1>
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
              <p className="text-white text-base ml-[2px]">,90</p>
              <small className="text-white/80 text-xs ml-1">/rifa</small>
            </div>
            <Button title="Criar rifa" w="full" h="[50px]" />
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
              <p className="text-white text-xs ml-[2px]">,90</p>
              <small className="text-white/80 text-xs ml-1">/rifa</small>
            </div>
            <Button title="Criar rifa" w="full" h="[50px]" />
          </footer>
        </div>
      </div>
    </section>
  )
}
