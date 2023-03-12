import { useNavigate, Link } from "react-router-dom"
import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem } from "../components/Accordion/AccordionItem"
import {
  Barcode,
  Medal,
  Percent,
  Tabs,
  User,
  Users,
  File,
} from "phosphor-react"

import rifasIcon from "../assets/images/logo.svg"

import { Tab } from "../components/Tab"
import { Footer } from "../components/Global/Footer"
import { Button } from "../components/Global/Button"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <header className="sticky left-0 top-0 py-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-b-rifas-border-line z-[9998]">
        <div className="max-w-[1120px] m-auto flex items-center justify-between">
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
      <main className="my-24">
        <section className="max-w-[1120px] m-auto flex flex-col items-start">
          <h1 className="font-bold text-slate-600 text-5xl leading-tight mb-16">
            Somos uma plataforma completa de <br /> vendas e gerenciamento de
            rifas
          </h1>
          <Tab />
        </section>
        <section className="max-w-[1120px] m-auto mt-20">
          <h1 className="text-slate-600 text-5xl font-bold text-center leading-tight mb-10">
            Escolha o melhor plano que se adapte <br />
            mais aos seus objetivos
          </h1>
          <div className="flex items-center justify-evenly gap-10 mb-10">
            <div className="bg-white rounded-lift w-full border border-rifas-border-line">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-slate-600 font-bold text-2xl">
                  Plano Prata
                </h1>
              </header>
              <div className="w-full border-rifas-border-line border-t flex p-6 flex-col items-start justify-center border-b">
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 5.000 bilhetes
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  100 Rifinhas gratís
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />5 Promoções por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  10 Cupons de desconto por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  50 Afiliados por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Concorra a prêmios todos os dias
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center items-center">
                  <div className="flex items-baseline">
                    <span className="text-slate-500/80 text-sm mr-1">R$</span>
                    <h3 className="font-bold text-slate-500 text-2xl">39</h3>
                    <sup className="text-slate-500 text-base ml-[2px]">
                      ,90
                      <sup className="text-slate-500/80 text-sm ml-1">
                        <small>/rifa</small>
                      </sup>
                    </sup>
                  </div>
                </div>
                <Button title="Criar rifa" w="full" h="[50px]" />
              </footer>
            </div>
            <div className="bg-white rounded-lift w-full border border-rifas-border-line">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-slate-600 font-bold text-2xl">
                  Plano Diamante
                </h1>
              </header>
              <div className="w-full border-rifas-border-line border-t flex p-6 flex-col items-start justify-center border-b">
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 100.000 bilhetes
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  Rifinhas ilimitadas
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />
                  Promoções ilimitadas
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  Cupons de desconto ilimitados
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  Afiliados ilimitados
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Prêmios ilimitados
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center items-center">
                  <div className="flex items-baseline">
                    <span className="text-slate-500/80 text-sm mr-1">R$</span>
                    <h3 className="font-bold text-slate-500 text-2xl">199</h3>
                    <sup className="text-slate-500 text-base ml-[2px]">
                      ,90
                      <sup className="text-slate-500/80 text-sm ml-1">
                        <small>/rifa</small>
                      </sup>
                    </sup>
                  </div>
                </div>
                <Button title="Criar rifa" w="full" h="[50px]" />
              </footer>
            </div>
            <div className="bg-white rounded-lift w-full border border-rifas-border-line">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-slate-600 font-bold text-2xl">
                  Plano Ouro
                </h1>
              </header>
              <div className="w-full border-rifas-border-line border-t flex p-6 flex-col items-start justify-center border-b">
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <File size={18} />
                  Até 20.000 bilhetes
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Tabs size={18} />
                  500 Rifinhas gratís
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Percent size={18} />
                  30 Promoções por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Barcode size={18} />
                  20 Cupons de desconto por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Users size={18} />
                  200 Afiliados por mês
                </p>
                <p className="text-slate-500 text-sm w-full py-2 flex items-center gap-2">
                  <Medal size={18} />
                  Concorra a 5 prêmios todos os dias
                </p>
              </div>
              <footer className="p-4 w-full flex flex-col items-center justify-center gap-4">
                <div className="flex justify-center items-center">
                  <div className="flex items-baseline">
                    <span className="text-slate-500/80 text-sm mr-1">R$</span>
                    <h3 className="font-bold text-slate-500 text-2xl">95</h3>
                    <sup className="text-slate-500 text-base ml-[2px]">
                      ,90
                      <sup className="text-slate-500/80 text-sm ml-1">
                        <small>/rifa</small>
                      </sup>
                    </sup>
                  </div>
                </div>
                <Button title="Criar rifa" w="full" h="[50px]" />
              </footer>
            </div>
          </div>
        </section>
        <hr className="my-14" />
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center">
          <h1 className="text-slate-600 text-5xl font-bold self-start mb-10 relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-transparent">
            Dúvidas frequentes
          </h1>
          <Accordion.Root
            type="single"
            collapsible
            className="grid lg:grid-cols-2 gap-6 w-full"
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
              description="Sim, nosso sistema é integrado com o sistema de pagamentos do Mercado Pago, sendo assim, os bilhetes pagos irão ter
                o status alterado automaticamente."
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
