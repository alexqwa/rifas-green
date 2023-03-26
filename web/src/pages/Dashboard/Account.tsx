import {
  Database,
  MapPin,
  ShoppingCartSimple,
  Gear,
  Bell,
  PencilSimple,
} from "phosphor-react"
import * as Tabs from "@radix-ui/react-tabs"

import { Navbar } from "../../components/Dashboard/Navbar"

export function Account() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Tabs.Root defaultValue="tab1">
          <aside className="fixed top-[85px] z-40 w-64 pt-4 h-screen bg-white border-r border-gray-200">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
              <Tabs.List className="space-y-2 font-medium">
                <Tabs.Trigger
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab1"
                >
                  <Database
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Meus dados
                  </span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab2"
                >
                  <MapPin
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Endereço
                  </span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab3"
                >
                  <ShoppingCartSimple
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Compras
                  </span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab4"
                >
                  <Gear
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Preferências
                  </span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab5"
                >
                  <Bell
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Notificações
                  </span>
                </Tabs.Trigger>
              </Tabs.List>
            </div>
          </aside>
          <main className="w-full h-screen ml-64 mt-10">
            <Tabs.Content value="tab1">
              <div className="ml-10 max-w-[820px]">
                <h1 className="text-black font-bold text-3xl mb-4">
                  Meus dados
                </h1>
                <div className="p-6 bg-white border border-rifas-line rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-slate-500">
                        Nome completo
                      </span>
                      <div className="relative">
                        <input
                          disabled
                          type="text"
                          className="relative rounded-xl text-sm font-medium placeholder:text-black/80 h-[50px] px-4 bg-slate-300/30 max-w-sm w-full"
                          placeholder="Alexandre Ferreira"
                        />
                        <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white text-green-500 rounded-xl border text-sm border-rifas-line px-4 py-2 flex items-center justify-center gap-2 hover:text-green-500/80 transition-all">
                          <PencilSimple size={18} />
                          Editar
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-slate-500">
                        Endereço de e-mail
                      </span>
                      <input
                        disabled
                        type="text"
                        className="cursor-not-allowed rounded-xl text-sm font-medium placeholder:text-black/80 h-[50px] px-4 bg-slate-300/30 max-w-sm w-full"
                        placeholder="breadmodz@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-sm text-slate-500">
                      Nome de usuário
                    </span>
                    <div className="relative">
                      <input
                        disabled
                        type="text"
                        className="relative rounded-xl text-sm font-medium placeholder:text-black/80 h-[50px] px-4 bg-slate-300/30 w-full"
                        placeholder="breadmodzc1309"
                      />
                      <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white text-green-500 rounded-xl border text-sm border-rifas-line px-4 py-2 flex items-center justify-center gap-2 hover:text-green-500/80 transition-all">
                        <PencilSimple size={18} />
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-sm text-slate-500">Telefone</span>
                    <div className="relative">
                      <input
                        disabled
                        type="text"
                        className="relative rounded-xl text-sm font-medium placeholder:text-black/80 h-[50px] px-4 bg-slate-300/30 w-full"
                        placeholder="+55 (61) 98450-0486"
                      />
                      <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white text-green-500 rounded-xl border text-sm border-rifas-line px-4 py-2 flex items-center justify-center gap-2 hover:text-green-500/80 transition-all">
                        <PencilSimple size={18} />
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="text-sm text-slate-500">Senha</span>
                    <div className="relative">
                      <input
                        disabled
                        type="text"
                        className="relative rounded-xl text-sm font-medium placeholder:text-black/80 h-[50px] px-4 bg-slate-300/30 w-full"
                        placeholder="************"
                      />
                      <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-white text-green-500 rounded-xl border text-sm border-rifas-line px-4 py-2 flex items-center justify-center gap-2 hover:text-green-500/80 transition-all">
                        <PencilSimple size={18} />
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-10" />
              <h1 className="text-black font-bold text-3xl mb-4 ml-10">
                Excluir conta
              </h1>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <h1 className="text-black font-bold text-3xl mb-4 ml-10">
                Endereço
              </h1>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <h1 className="text-black font-bold text-3xl mb-4 ml-10">
                Compras
              </h1>
            </Tabs.Content>
            <Tabs.Content value="tab4">
              <h1 className="text-black font-bold text-3xl mb-4 ml-10">
                Preferências
              </h1>
            </Tabs.Content>
            <Tabs.Content value="tab5">
              <h1 className="text-black font-bold text-3xl mb-4 ml-10">
                Notificações
              </h1>
            </Tabs.Content>
          </main>
        </Tabs.Root>
      </div>
    </>
  )
}
