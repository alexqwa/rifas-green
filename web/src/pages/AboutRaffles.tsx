import { Article, Bank, ListNumbers, Phone, Plus } from "phosphor-react"
import { Input } from "../components/Global/Input"
import { Navbar } from "../components/Global/Navbar"
import { Selector } from "../components/Global/Selector"
import { Tab } from "../components/Tab"

export function AboutRaffles() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1152px] m-auto pt-[52px]">
        <main className="w-full flex items-start justify-between gap-20">
          <div className="flex flex-col bg-white border border-rifas-border-line rounded-lift py-2 w-[352px] sticky top-32">
            <a
              className={`w-full text-left text-slate-500 hover:bg-rifas-border-line text-base transition-colors py-3 px-6 cursor-pointer border-l-2 border-solid border-violet-500`}
            >
              Informações
            </a>
            <a
              className={`w-full text-left text-slate-500 hover:bg-rifas-border-line text-base transition-colors py-3 px-6 cursor-pointer border-l-2 border-solid border-transparent`}
            >
              Meios de pagamento
            </a>
            <a
              className={`w-full text-left text-slate-500 hover:bg-rifas-border-line text-base transition-colors py-3 px-6 cursor-pointer border-l-2 border-solid border-transparent`}
            >
              Aparência da rifa
            </a>
          </div>
          <div className="flex-1 min-w-0 top-32 space-y-10 mb-10">
            <section className="bg-white border border-rifas-border-line p-8 rounded-lift">
              <h2 className="font-bold text-slate-600 text-2xl mb-8">
                Informações
              </h2>
              <form className="flex flex-col">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="category"
                      className="text-slate-500 text-sm"
                    >
                      O que está rifando ?
                    </label>
                    <Input placeholder="Título do produto" type="text">
                      <Article
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                      />
                    </Input>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="numbers" className="text-slate-500 text-sm">
                      Selecione a categoria
                    </label>
                    <Selector />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-slate-500 text-sm">
                      Número de telefone
                    </label>
                    <Input placeholder="+55 (00) 00000-0000" type="text">
                      <Phone
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                      />
                    </Input>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="price" className="text-slate-500 text-sm">
                      Quantidade de bilhetes
                    </label>
                    <Input placeholder="Quantidade" type="number">
                      <ListNumbers
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                      />
                    </Input>
                  </div>
                </div>

                <div className="grid grid-cols-2 mt-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="numbers" className="text-slate-500 text-sm">
                      Preço por bilhete
                    </label>

                    <Input placeholder="R$ 0,00" type="text">
                      <Bank
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                      />
                    </Input>
                  </div>
                </div>

                <button className="py-4 px-8 mt-6 w-[180px] uppercase text-white font-bold text-sm rounded-lift self-end bg-violet-500/80 hover:bg-violet-500 transition-colors">
                  Salvar
                </button>
              </form>
            </section>

            <section className="bg-white border border-rifas-border-line p-8 rounded-lift">
              <h2 className="font-bold text-slate-600 text-2xl mb-8">
                Meios de pagamento
              </h2>
              <form className="flex flex-col">
                <Tab />
                <button className="py-4 px-8 mt-6 w-[180px] uppercase text-white font-bold text-sm rounded-lift self-end bg-violet-500/80 hover:bg-violet-500 transition-colors">
                  Salvar
                </button>
              </form>
            </section>

            <section className="bg-white border border-rifas-border-line p-8 rounded-lift">
              <h2 className="font-bold text-slate-600 text-2xl mb-8">
                Aparência da rifa
              </h2>
              <form className="flex flex-col">
                <div className="rounded-lift border-2 border-slate-300/80 border-dashed p-8 hover:border-slate-500/80 transition-colors duration-150 cursor-pointer group">
                  <span className="flex items-center justify-center gap-2 text-slate-500/80 group-focus-within:text-violet-500 text-sm group-hover:text-slate-500 transition-colors duration-150">
                    <Plus className="text-violet-500" size={20} /> Fazer upload
                    de imagem
                  </span>
                </div>

                <button className="py-4 px-8 mt-6 w-[180px] uppercase text-white font-bold text-sm rounded-lift self-end bg-violet-500/80 hover:bg-violet-500 transition-colors">
                  Salvar
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
