import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IMaskInput } from "react-imask"

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

export type RafflesProps = {
  title: string
  price: number
  category: string
  phoneNumber: string
  numbersOfRaffles: number
}

export function ModalCreate() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [newRaffle, setNewRaffle] = useState({
    title: "",
    price: 0,
    category: "",
    phoneNumber: "",
    numbersOfRaffles: 0,
  })

  const handleChange = (e: any) => {
    setNewRaffle((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleCreateRaffle(event: FormEvent) {
    event.preventDefault()

    if (newRaffle.title.trim() === "") {
      return
    }

    const raffleRef = database.ref("raffles")

    const firebaseRaffle = await raffleRef.push({
      title: newRaffle.title,
      author: {
        id: user?.id,
        name: user?.name,
        avatar: user?.avatar,
      },
      content: {
        price: `R$ ${newRaffle.price}.00`,
        category: newRaffle.category,
        phoneNumber: newRaffle.phoneNumber,
        numbersOfRaffles: newRaffle.numbersOfRaffles,
      },
    })

    navigate(`/dashboard/me/raffles/${firebaseRaffle.key}`)
  }

  return (
    <Dialog.Portal>
      <StyledOverlay className="z-[9999] bg-black/60 inset-0 fixed" />
      <StyledContent className="z-[9999] fixed py-8 px-10 bg-white border border-rifas-border-line w-[480px] rounded-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-2xl font-bold text-slate-600">
            Crie sua rifa
          </Dialog.Title>
          <Dialog.Close className="w-9 h-9 flex items-center justify-center hover:bg-rifas-border-line transition-colors rounded-[5px]">
            <X size={20} className="text-slate-600" />
          </Dialog.Close>
        </div>

        <form
          onSubmit={handleCreateRaffle}
          className="mt-8 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-slate-500 text-sm">
              O que está rifando ?
            </label>
            <Input
              name="title"
              placeholder="Título do produto"
              type="text"
              autoFocus
              onChange={handleChange}
            >
              <Article
                size={16}
                weight="bold"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
              />
            </Input>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="text-slate-500 text-sm">
                Selecione a categoria
              </label>
              <Input
                name="category"
                placeholder="Categoria"
                type="text"
                onChange={handleChange}
              >
                <SelectionAll
                  size={16}
                  weight="fill"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                />
              </Input>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="numbers" className="text-slate-500 text-sm">
                Quantidade de bilhetes
              </label>
              <Input
                name="numbersOfRaffles"
                placeholder="Quantidade"
                type="number"
                onChange={handleChange}
              >
                <ListNumbers
                  size={16}
                  weight="fill"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                />
              </Input>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-slate-500 text-sm">
                Número de telefone
              </label>
              {/* <IMaskInput
                className="relative pr-[1em] pl-11 h-[50px] rounded-lift bg-zinc-900 box-content border-2 border-rifas-border-line focus:border-violet-500 transition-colors text-sm text-white placeholder:text-white/70 focus:outline-0"
                placeholder="+55 (00) 00000-0000"
                mask="+55 (00) 00000-0000"
                onAccept={(value, mask) => console.log(value)}
              /> */}
              <Input
                name="phoneNumber"
                placeholder="(00) 00000-0000"
                type="text"
                onChange={handleChange}
              >
                <Phone
                  size={16}
                  weight="fill"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                />
              </Input>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="text-slate-500 text-sm">
                Preço por bilhete
              </label>
              <Input
                name="price"
                placeholder="R$ 0,00"
                type="number"
                onChange={handleChange}
              >
                <Bank
                  size={16}
                  weight="fill"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
                />
              </Input>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[50px] mt-4 rounded-[5px] bg-slate-600/50 hover:bg-violet-500 transition-colors uppercase font-bold text-white text-sm"
          >
            Criar rifa
          </button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
