import { useNavigate, Link } from "react-router-dom"
import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem } from "../components/Accordion/AccordionItem"
import { User, ArrowRight } from "phosphor-react"

import rifasIcon from "../assets/images/logo.svg"
import mockupImg from "../assets/images/mockup.svg"

import { Tab } from "../components/Tab"
import { Footer } from "../components/Global/Footer"
import { Prices } from "../components/Prices"

import { usePageQuery } from "../generated/graphql"

export function Home() {
  const [{ data }] = usePageQuery({ variables: { slug: "about" } })
  const navigate = useNavigate()

  function handleCreateAccount() {
    navigate("https://help.qwastore.com.br/signup")
  }

  return (
    <>
      <header className="sticky left-0 top-0 py-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-zinc-900/80 border-rifas-border-line z-[9998]">
        <div className="max-w-[1120px] m-auto flex items-center justify-between">
          <Link to="/">
            <img className="h-11" src={rifasIcon} alt="Rifas Green" />
          </Link>
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
              className="rounded-[5px] flex items-center hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1120px] m-auto my-24">
        <section className="flex items-start justify-between mb-10">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-start font-bold text-white text-5xl">
              {data?.page?.title}
            </h1>
            <p className="leading-6 text-[#e1e1e6]">
              Crie e gerencie suas rifas em segundos <br /> com os melhores
              pre??os do mercado.
            </p>
            <button
              className="hover:bg-violet-600 transition-colors flex items-center justify-between bg-violet-500 uppercase rounded-[5px] w-60 h-14 font-bold text-white py-4 pl-6 
            pr-4"
            >
              Come??ar a rifar
              <span className="bg-violet-600 w-8 h-8 flex items-center justify-center rounded">
                <ArrowRight />
              </span>
            </button>
          </div>
          <img
            className="h-[380px] self-end flex"
            src={mockupImg}
            alt="Phone"
          />
        </section>
        <section className="flex flex-col items-center">
          <div className="w-[1.5px] h-20 bg-gradient-to-b from-violet-500 to-zinc-900" />
          <h1 className="mt-16 font-bold text-white text-5xl text-center leading-tight mb-24">
            Somos uma plataforma completa de <br /> vendas e gerenciamento de
            rifas
          </h1>
          <Tab />
        </section>

        <Prices />

        <section className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-white text-5xl font-bold self-start mb-10">
            D??vidas frequentes
          </h1>
          <Accordion.Root
            type="single"
            collapsible
            className="grid lg:grid-cols-2 gap-6 w-full"
          >
            <AccordionItem
              value="item-1"
              title="Quem recebe o valor dos bilhetes vendidos?"
              description="O valor dos bilhetes v??o diretamente para a sua conta banc??ria.
                No painel administrativo voc?? ad??ciona as formas de pagamentos
                que deseja na sua rifa, como pix, cart??o de cr??dito, etc."
            />
            <AccordionItem
              value="item-2"
              title="Qual o valor para criar uma rifa?"
              description="Cobramos um valor ??nico por rifa independente do valor que voc??
                arrecadar. Nosso valor inicial ?? de R$ 39,90 por rifa."
            />
            <AccordionItem
              value="item-3"
              title="Quantas rifas eu posso fazer?"
              description="Voc?? n??o tem limite de rifas, mas lembre-se que cada rifa criada
                ?? necess??rio pagar a taxa da plataforma."
            />
            <AccordionItem
              value="item-4"
              title="O sistema possui baixa autom??tica dos bilhetes?"
              description="Sim, caso voc?? queira ?? poss??vel integrar os pagamentos da sua
                rifa com o Mercado Pago, sendo assim, os bilhetes pagos ir??o ter
                o status alterado automaticamente. Mas caso seja do seu interesse ter formas de pagamento manuais,
                os clientes ir??o efetuar o pagamento na sua rifa, e voc?? ir??
                alterar os pedidos para pago no painel administrativo."
            />
            <AccordionItem
              value="item-5"
              title="O que acontece com os bilhetes n??o pagos?"
              description="No sistema voc?? ir?? definir um per??odo em dias para a reserva
                dos bilhetes expirarem, ap??s esta quantidade de dias
                estabelecida, os bilhetes n??o pagos ir??o ficar dispon??veis para
                compra novamente."
            />
            <AccordionItem
              value="item-6"
              title="O Rifas Green faz sorteios?"
              description="Sim, O Rifas Green disponibiliza toda a plataforma para os
                administradores das rifas realizarem seus sorteios. A plataforma
                n??o requer eventuais autoriza????es que o organizador entender
                necess??rias para a realiza????o do seu sorteio."
            />
          </Accordion.Root>
        </section>
      </main>

      <Footer />
    </>
  )
}
