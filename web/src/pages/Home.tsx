import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem } from "../components/Accordion/AccordionItem"

import { Tab } from "../components/Tab"
import { Footer } from "../components/Global/Footer"
import { Header } from "../components/Global/Header"

import moneyFaceImg from "../assets/images/money-face.png"
import homeDesktopImg from "../assets/images/home-desktop.png"

import { ChooseUs } from "../components/ChooseUs"
import { useFaqsQuery } from "../generated/graphql"

export function Home() {
  const [{ data }] = useFaqsQuery()

  return (
    <>
      <Header />
      <main className="mb-24">
        <section className="bg-white py-20">
          <div className="relative max-w-[1120px] m-auto flex flex-row">
            <aside className="flex flex-col items-start justify-center">
              <h1 className="text-6xl font-bold mb-4">
                Crie a sua rifa online em
                <br />
                questão de minutos!
              </h1>
              <p className="text-lg opacity-80">
                Alcance um público maior e aumente suas
                <br />
                chances de sucesso através do Rifei.
              </p>
              <button className="bg-green-500 rounded-lift px-8 py-4 text-white hover:bg-green-500/80 transition-all mt-9">
                Criar minha rifa
              </button>
            </aside>
            <img
              className="absolute h-96 right-0 top-0"
              src={homeDesktopImg}
              alt="Home Desktop"
            />
          </div>
        </section>
        <section className="py-14">
          <div className="max-w-[1120px] m-auto flex flex-col items-start">
            <h1 className="font-bold text-black text-5xl leading-tight mb-16">
              Somos uma plataforma completa de <br /> vendas e gerenciamento de
              rifas
            </h1>
            <Tab />
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="max-w-[1120px] m-auto flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-slate-300/30 rounded-2xl border border-rifas-border-line mb-10 flex items-center justify-center">
              <img className="h-20" src={moneyFaceImg} alt="Money Face" />
            </div>
            <h1 className="text-3xl font-bold">Receba você mesmo o dinheiro</h1>
            <p className="text-slate-500 text-base mt-2">
              Todo o dinheiro que você arrecadar vai diretamente para a sua
              conta bancária!
            </p>
            <button className="bg-green-500 rounded-lift px-8 py-4 text-white hover:bg-green-500/80 transition-all mt-6">
              Criar minha rifa
            </button>
          </div>
        </section>
        <ChooseUs />
        <hr />
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center my-14">
          <h1 className="text-black text-5xl font-bold self-start mb-10 relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-transparent">
            Dúvidas frequentes
          </h1>
          <Accordion.Root
            type="single"
            collapsible
            className="grid grid-cols-2 gap-6 w-full"
          >
            {data?.faqs.map((faq) => {
              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  title={faq.title!}
                  description={faq.description!}
                />
              )
            })}
          </Accordion.Root>
        </section>
      </main>

      <Footer />
    </>
  )
}
