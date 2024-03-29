import { Link } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"
import { Question, XSquare, Gear } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

import { useAuth } from "../../hooks/useAuth"
import { ModalExit } from "../Modals/ModalExit"
import { StyledContent } from "../../stitches/stitchesPopover"

export function PopoverAccount() {
  const { user } = useAuth()

  return (
    <Popover.Portal>
      <StyledContent className="absolute right-[calc(100%-26px)] w-64 bg-white rounded-[5px] top-[calc(100%+30px)] shadow-lg">
        <Popover.Arrow className="fill-white absolute right-[calc(128px-31px)] w-4 h-2" />
        <div className="overflow-hidden flex-1 rounded-lift">
          <Link
            to="/account"
            className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-slate-300/30"
          >
            <span className="text-base ml-6 text-slate-500">Configurações</span>
            <Gear weight="fill" className="min-w-[1.25rem] text-violet-500" />
          </Link>
          <Link
            to="/help"
            className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-slate-300/30"
          >
            <span className="text-base ml-6 text-slate-500">
              Suporte técnico
            </span>
            <Question
              weight="fill"
              className="min-w-[1.25rem] text-violet-500"
            />
          </Link>
        </div>
        <Dialog.Root>
          <Dialog.Trigger className="flex flex-row-reverse justify-end items-center text-base text-white/80 py-3 px-6 transition-colors w-full hover:bg-slate-300/30">
            <span className="text-base ml-6 text-slate-500">
              Sair da plataforma
            </span>
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
