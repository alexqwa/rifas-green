import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog"
import { StyledContent, StyledOverlay } from "../../stitches/stitchesModal"
import {
  Article,
  Bank,
  ListNumbers,
  Phone,
  SelectionAll,
  X,
} from "phosphor-react"
import { database } from "../../services/firebase"
import { useAuth } from "../../hooks/useAuth"
import { Input } from "../Global/Input"

export function ModalCreateRaffle() {
  const navigate = useNavigate()
  const [newRaffle, setNewRaffle] = useState("")
  const { user } = useAuth()

  async function handleCreateRaffle(event: FormEvent) {
    event.preventDefault()

    if (newRaffle.trim() === "") {
      return
    }

    const raffleRef = database.ref("raffles")

    const firebaseRaffle = await raffleRef.push({
      title: newRaffle,
      authorId: user?.id,
    })

    navigate(`/dashboard/me/raffles/${firebaseRaffle.key}`)
  }

  return (
    <Dialog.Portal>
      <StyledOverlay className="z-[9999] bg-black/60 inset-0 fixed" />
      <StyledContent className="z-[9999] fixed py-8 px-10 bg-[#202024] w-[480px] rounded-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-2xl font-bold text-white">
            Crie sua rifa
          </Dialog.Title>
          <Dialog.Close className="w-9 h-9 flex items-center justify-center hover:bg-rifas-border-line transition-colors rounded-[5px]">
            <X size={20} className="text-white" />
          </Dialog.Close>
        </div>

        <form
          onSubmit={handleCreateRaffle}
          className="mt-8 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-white/80 text-sm">
              O que está rifando ?
            </label>
            <Input
              placeholder="Título do produto"
              type="text"
              autoFocus
              onChange={(event) => setNewRaffle(event.target.value)}
              value={newRaffle}
            >
              <Article
                size={16}
                weight="bold"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
            </Input>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="text-white/80 text-sm">
                Selecione a categoria
              </label>
              <Input placeholder="Categoria" type="category">
                <SelectionAll
                  size={16}
                  weight="fill"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
              </Input>
            </div>

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

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-white/80 text-sm">
                Número de telefone
              </label>
              <Input placeholder="(00) 00000-0000" type="text">
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

          <button
            type="submit"
            className="w-full h-[50px] mt-4 rounded-[5px] bg-rifas-border-line hover:bg-violet-500 transition-colors uppercase font-bold text-white text-sm"
          >
            Criar rifa
          </button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
