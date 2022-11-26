import { Link } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"
import * as Dialog from "@radix-ui/react-dialog"
import { useAuth } from "../../hooks/useAuth"

import { ModalExit } from "../Modals/ModalExit"
import { StyledContent } from "../../stitches/stitchesPopover"
import { User, Cookie, Question, XSquare } from "phosphor-react"

export function PopoverProfile() {
  const { user } = useAuth()

  return (
    <Popover.Portal>
      <StyledContent className="absolute right-[calc(100%-26px)] w-64 bg-[rgb(32,32,36)] rounded-[5px] top-[calc(100%+22px)] shadow-lg">
        <Popover.Arrow className="fill-[rgb(32,32,36)] absolute right-[calc(128px-31px)] w-4 h-2" />
        <Link
          to={`/dashboard/me/${user?.name}`}
          className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-zinc-900/30"
        >
          <span className="text-base ml-6">Meu perfil</span>
          <User weight="fill" className="min-w-[1.25rem] text-violet-500" />
        </Link>
        <Link
          to="/dashboard/me/raffles"
          className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-zinc-900/30"
        >
          <span className="text-base ml-6">Minhas rifas</span>
          <Cookie weight="fill" className="min-w-[1.25rem] text-violet-500" />
        </Link>
        <a
          href=""
          className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-zinc-900/30"
        >
          <span className="text-base ml-6">Central de ajuda</span>
          <Question weight="fill" className="min-w-[1.25rem] text-violet-500" />
        </a>
        <Dialog.Root>
          <Dialog.Trigger className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-zinc-900/30">
            <span className="text-base ml-6">Sair da plataforma</span>
            <XSquare
              weight="fill"
              className="min-w-[1.25rem] text-violet-500"
            />
          </Dialog.Trigger>
          <ModalExit />
        </Dialog.Root>
        <button className="block w-[calc(100%-48px)] mx-6 mt-4 mb-6 h-10 bg-violet-500 rounded-[5px] uppercase font-bold text-sm transition-colors text-white tracking-wider hover:bg-violet-400">
          DAR FEEDBACK
        </button>
      </StyledContent>
    </Popover.Portal>
  )
}
