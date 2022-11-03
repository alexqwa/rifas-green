import { useNavigate } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog"
import { PlusCircle } from "phosphor-react"

import { useRaffle } from "../hooks/useRaffle"

import { Navbar } from "../components/Global/Navbar"
import { Footer } from "../components/Global/Footer"
import { RaffleCard } from "../components/RaffleCard"
import { ModalCreateRaffle } from "../components/Modals/ModalCreateRaffle"

export function Raffles() {
  const { raffles } = useRaffle()
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1152px] m-auto py-16">
        <h1 className="text-white font-bold text-4xl mb-2">Minhas rifas</h1>
        <p className="text-white/70 text-base mb-6">
          Cadastre novas rifas ou edite
          <br />
          as que você possuí!
        </p>
        <div className="flex items-center justify-between bg-[#202024] w-full px-6 py-4 rounded-[5px]">
          <div className="flex items-center gap-2">
            <h1 className=" font-bold text-white text-base">Minhas rifas</h1>
            <div className="bg-white h-1 w-1 rounded-[50%]" />
            <p className="text-white/80 text-xs font-bold">
              {raffles.length} rifa(s) cadastradas
            </p>
          </div>
          <Dialog.Root>
            <Dialog.Trigger className="text-white/70 hover:text-white flex items-center justify-center hover:bg-zinc-900 h-10 w-10 rounded-[5px] transition-colors">
              <PlusCircle size={24} weight="fill" />
            </Dialog.Trigger>
            <ModalCreateRaffle />
          </Dialog.Root>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {raffles.map((raffle, author) => {
            function handleEditRaffles() {
              navigate(raffle.id)
            }

            return (
              <RaffleCard
                key={raffle.id}
                urlTo={raffle.id}
                title={raffle.title}
                content={raffle.content}
                editRaffles={handleEditRaffles}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
