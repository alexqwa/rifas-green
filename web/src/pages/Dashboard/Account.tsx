import {
  Bell,
  Gear,
  Bank,
  MapPin,
  Database,
  PencilSimple,
  ShoppingCartSimple,
} from "phosphor-react"
import * as Tabs from "@radix-ui/react-tabs"

import { Navbar } from "../../components/Dashboard/Navbar"
import { MaskedInput } from "../../components/MaskedInput"

export function Account() {
  function handleUp() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbar />
      <div className="relative flex justify-center">
        <div className="relative w-full">
          <Tabs.Root
            defaultValue="tab1"
            className="relative w-full flex justify-start items-start"
          >
            <div className="sticky top-[85px] h-[calc(100vh-85px)] w-64 p-4 overflow-hidden flex flex-col bg-white border-r border-rifas-line gap-2 z-10">
              <Tabs.List className="flex flex-col gap-2">
                <Tabs.Trigger
                  onClick={handleUp}
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
                  onClick={handleUp}
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
                  onClick={handleUp}
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
                  onClick={handleUp}
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
                  onClick={handleUp}
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
                <Tabs.Trigger
                  onClick={handleUp}
                  className="flex gap-2 pl-3 w-full items-center px-2 py-4 rounded-lg hover:bg-gray-100 data-[state=active]:bg-gray-100 group transition-all"
                  value="tab6"
                >
                  <Bank
                    className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all"
                    size={24}
                  />
                  <span className="text-slate-500 group-data-[state=active]:text-violet-500 transition-all">
                    Contas bancárias
                  </span>
                </Tabs.Trigger>
              </Tabs.List>
            </div>
            <Tabs.Content
              value="tab1"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black ">
                  Meus dados
                </h1>
                <div className="relative w-full bg-white border-rifas-line rounded-xl">
                  <div className="relative p-[25px]">
                    <div className="relative grid grid-cols-2 gap-4 mb-8">
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">
                            Nome completo
                          </span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <div className="flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal">
                            <span>Alexandre Ferreira</span>
                          </div>
                          <button className="absolute flex gap-[6px] items-center justify-center right-2 top-2 rounded-xl px-3 bg-white rounded-green-500 text-green-500 font-medium h-[34px] transition-all hover:text-green-400">
                            <PencilSimple size={14} />
                            <span className="text-xs">Editar</span>
                          </button>
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">
                            Endereço de e-mail
                          </span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <div className="flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal hover:cursor-not-allowed">
                            <span>breadmodz@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full mb-8">
                      <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                        <span className="text-sm font-light">
                          Nome de usuário
                        </span>
                      </div>
                      <div className="relative w-full flex items-center">
                        <div className="flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal">
                          <span>breadmodzc3a0a</span>
                        </div>
                        <button className="absolute flex gap-[6px] items-center justify-center right-2 top-2 rounded-xl px-3 bg-white rounded-green-500 text-green-500 font-medium h-[34px] transition-all hover:text-green-400">
                          <PencilSimple size={14} />
                          <span className="text-xs">Editar</span>
                        </button>
                      </div>
                    </div>
                    <div className="relative w-full mb-8">
                      <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                        <span className="text-sm font-light">Telefone</span>
                      </div>
                      <div className="relative w-full flex items-center">
                        <div className="flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal">
                          <span>Não inserido</span>
                        </div>
                        <button className="absolute flex gap-[6px] items-center justify-center right-2 top-2 rounded-xl px-3 bg-white rounded-green-500 text-green-500 font-medium h-[34px] transition-all hover:text-green-400">
                          <PencilSimple size={14} />
                          <span className="text-xs">Editar</span>
                        </button>
                      </div>
                    </div>
                    <div className="relative w-full">
                      <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                        <span className="text-sm font-light">Senha</span>
                      </div>
                      <div className="relative w-full flex items-center">
                        <div className="flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal">
                          <span>********</span>
                        </div>
                        <button className="absolute flex gap-[6px] items-center justify-center right-2 top-2 rounded-xl px-3 bg-white rounded-green-500 text-green-500 font-medium h-[34px] transition-all hover:text-green-400">
                          <PencilSimple size={14} />
                          <span className="text-xs">Editar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black">
                  Excluir conta
                </h1>
                <small className="block font-bold uppercase mb-3">
                  O que você tem que saber:
                </small>
                <div className="relative bg-white border-rifas-line p-5 rounded-xl mb-8">
                  <small>
                    Caso você tenha feito alguma compra, a sua conta será
                    removida somente 7 dias após ter solicitado a exclusão da
                    conta por questões de segurança, sendo possível recuperá-la
                    entrando em contato conosco.
                  </small>
                  <hr className="relative border-dashed w-full my-[15px] border-slate-500" />
                  <small>
                    A sua conta será removida permanentemente, junto com todos
                    os dados relacionados a ela, como campanhas, rifinhas,
                    pedidos e afiliados associados.
                  </small>
                </div>
                <div className="relative flex items-center mt-12">
                  <button className="relative flex items-center justify-center font-medium text-sm bg-red-500 text-white rounded-xl py-3 px-6 hover:bg-red-500/80 transition-all">
                    Excluir
                  </button>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab2"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black">
                  Endereço
                </h1>
                <div className="relative w-full bg-white border-rifas-line rounded-xl">
                  <div className="relative p-[25px]">
                    <div className="relative grid grid-cols-2 gap-4 mb-8">
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">CEP</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <MaskedInput
                            mask="99999-999"
                            placeholder="00000-000"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">Endereço</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative grid grid-cols-3 gap-4 mb-8">
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">Número</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">Bairro</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">
                            Complemento
                            <small> • Opcional</small>
                          </span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative grid grid-cols-2 gap-4 mb-8">
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">Estado</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="relative flex items-center flex-wrap gap-2 mb-[10px] text-slate-500">
                          <span className="text-sm font-light">Cidade</span>
                        </div>
                        <div className="relative w-full flex items-center">
                          <input
                            type="text"
                            className="hover:border-violet-500 flex items-center justify-between w-full min-h-[50px] bg-slate-300/50 border border-rifas-line rounded-xl py-[10px] px-4 text-slate-500 text-sm font-normal outline-none focus:border-violet-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="relative flex items-center font-medium text-sm rounded-xl py-[14px] px-[18px] bg-green-500 text-white hover:bg-green-500/80 transition-all">
                      Adicionar endereço
                    </button>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab3"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black ">
                  Compras
                </h1>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab4"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black ">
                  Preferências
                </h1>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab5"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black ">
                  Notificações
                </h1>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="tab6"
              className="relative flex-1 w-full max-w-[820px] min-w-0 min-h-screen pb-[52px]"
            >
              <div className="relative p-8">
                <h1 className="relative block text-[26px] font-bold mb-8 text-black ">
                  Contas bancárias
                </h1>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </>
  )
}
