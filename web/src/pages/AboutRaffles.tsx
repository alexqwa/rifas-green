import { Article, Bank, ListNumbers, Phone } from "phosphor-react"
import { Input } from "../components/Global/Input"
import { Navbar } from "../components/Global/Navbar"
import { Selector } from "../components/Global/Selector"

export function AboutRaffles() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1152px] m-auto pt-[52px]">
        <main className="w-full flex items-start justify-between gap-20">
          <div className="flex flex-col bg-[rgb(32,32,36)] rounded-lift py-2 w-[352px] sticky top-32">
            <a className="w-full text-left text-white hover:bg-rifas-border-line text-base transition-colors py-3 px-6 border-l-2 border-solid border-violet-500 cursor-pointer">
              Informações
            </a>
            <a className="w-full text-left text-white hover:bg-rifas-border-line text-base transition-colors py-3 px-6 cursor-pointer">
              Meios de pagamento
            </a>
            <a className="w-full text-left text-white hover:bg-rifas-border-line text-base transition-colors py-3 px-6 cursor-pointer">
              Aparência da rifa
            </a>
          </div>
          <div className="flex-1 min-w-0 h-screen top-32">
            <section className="bg-[rgb(32,32,36)] p-8 rounded-lift">
              <h2 className="font-bold text-white text-2xl mb-8">
                Informações
              </h2>
              <form className="flex flex-col">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="category" className="text-white/80 text-sm">
                      O que está rifando ?
                    </label>
                    <Input placeholder="Título do produto" type="text">
                      <Article
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                    </Input>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="numbers" className="text-white/80 text-sm">
                      Selecione a categoria
                    </label>
                    <Selector />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-white/80 text-sm">
                      Número de telefone
                    </label>
                    <Input placeholder="(00) 4002-8922" type="text">
                      <Phone
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                    </Input>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="price" className="text-white/80 text-sm">
                      Preço por cota
                    </label>
                    <Input placeholder="R$ 0,00" type="text">
                      <Bank
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                    </Input>
                  </div>
                </div>

                <div className="grid grid-cols-2 mt-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="numbers" className="text-white/80 text-sm">
                      Quantidade de números
                    </label>
                    <Input placeholder="Quantidade" type="number">
                      <ListNumbers
                        size={16}
                        weight="fill"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                    </Input>
                  </div>
                </div>

                <button className="py-4 px-8 mt-6 w-[180px] uppercase text-white font-bold text-sm rounded-lift self-end bg-violet-500/80 hover:bg-violet-500 transition-colors">
                  salvar
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}