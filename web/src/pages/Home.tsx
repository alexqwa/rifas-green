import { useNavigate, Link } from "react-router-dom"
import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem } from "../components/Accordion/AccordionItem"
import {
  User,
  ArrowRight,
  Percent,
  Users,
  Medal,
  Barcode,
  File,
  Tabs,
} from "phosphor-react"

import phoneImg from "../assets/images/mockup.svg"
import rifasIcon from "../assets/images/logo.svg"

import { Tab } from "../components/Tab"
import { Footer } from "../components/Global/Footer"

export function Home() {
  const navigate = useNavigate()

  function handleCreateAccount() {
    navigate("/signup")
  }

  return (
    <>
      <header className="sticky left-0 top-0 p-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-zinc-900/80 border-rifas-border-line z-[9998]">
        <div className="w-[1120px] m-auto flex items-center justify-between">
          <a href="/">
            <img className="h-11" src={rifasIcon} alt="Rifas Green" />
          </a>
          <div className="flex items-center gap-4">
            <Link
              to="/signin"
              className="flex items-center gap-2 uppercase font-bold text-white text-xs px-6 py-3"
            >
              <User size={16} color="#835afd" />
              Entrar
            </Link>
            <button
              onClick={handleCreateAccount}
              className="rounded-[5px] flex items-center hover:bg-violet-500 transition-colors uppercase  border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] m-auto my-24">
        <section className="flex items-start justify-between mb-10">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-bold text-white text-5xl">
              Crie suas rifas de forma <br /> rápida e prática
            </h1>
            <p className="leading-6 text-[#e1e1e6]">
              Crie e gerencie suas rifas em segundos <br /> com os melhores
              preços do mercado.
            </p>
            <button
              className="hover:bg-violet-600 transition-colors flex items-center justify-between bg-violet-500 uppercase rounded-[5px] w-60 h-14 font-bold text-white py-4 pl-6 
            pr-4"
            >
              Começar a rifar
              <span className="bg-violet-600 w-8 h-8 flex items-center justify-center rounded">
                <ArrowRight />
              </span>
            </button>
          </div>
          <img className="h-96" src={phoneImg} alt="Phone" />
        </section>

        <section className="flex flex-col items-center">
          <div className="w-[1.5px] h-20 bg-gradient-to-b from-violet-500 to-zinc-900" />
          <h1 className="mt-16 font-bold text-white text-5xl text-center leading-tight mb-24">
            Somos uma plataforma completa de <br /> vendas e gerenciamento de
            rifas
          </h1>
          <Tab />
        </section>

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
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
              </footer>
            </div>
            <div className="bg-[#202024] rounded-lift w-full border-2 border-[rgb(41,41,46)]">
              <header className="flex items-center justify-center p-4 w-full">
                <h1 className="text-white font-bold text-2xl">
                  Plano Diamante
                </h1>
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
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
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
                  <p className="text-white ml-[2px]">,90</p>
                  <small className="text-white/80 ml-1">/rifa</small>
                </div>
                <button className="bg-violet-500/80 hover:bg-violet-500 transition-colors text-white text-sm uppercase font-bold w-full rounded-[5px] h-[50px]">
                  Criar rifa
                </button>
              </footer>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-white text-5xl font-bold self-start mb-10">
            Dúvidas frequentes
          </h1>
          <Accordion.Root
            type="single"
            collapsible
            className="grid grid-cols-2 gap-6 w-full"
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
              description="Sim, caso você queira é possível integrar os pagamentos da sua
                rifa com o Mercado Pago, sendo assim, os bilhetes pagos irão ter
                o status alterado automaticamente. Mas caso seja do seu interesse ter formas de pagamento manuais,
                os clientes irão efetuar o pagamento na sua rifa, e você irá
                alterar os pedidos para pago no painel administrativo."
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
