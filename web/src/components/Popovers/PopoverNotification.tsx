import * as Popover from "@radix-ui/react-popover"
import { Notification } from "../Notification"
import { StyledContent } from "../../stitches/stitchesPopover"
import { useRaffle } from "../../hooks/useRaffle"

export function PopoverNotification() {
  const { raffles } = useRaffle()

  return (
    <Popover.Portal>
      <StyledContent className="block absolute w-[448px] right-[calc(100%-23px)] top-[calc(100%+25px)] shadow-lg">
        <Popover.Arrow className="fill-slate-600 absolute right-[calc(224px-31px)] w-4 h-2" />
        <header className="flex items-center justify-between bg-slate-600 h-[50px] px-5 rounded-tl-[5px] rounded-tr-[5px]">
          <span className="text-base text-white font-bold">Notificações</span>
          <button
            className="uppercase text-xs font-bold text-white transition-colors hover:text-white/50"
            type="button"
          >
            Marcar todas como lidas
          </button>
        </header>
        <div className="bg-white">
          <h4 className="text-sm font-normal text-slate-500 py-2 px-5">
            Antigas
          </h4>

          <div className="space-y-[2px]">
            {raffles.map((raffle) => {
              return (
                <Notification
                  key={raffle.id}
                  title={raffle.title}
                  description={raffle.content.category}
                />
              )
            })}
          </div>
        </div>
        <a
          className="flex items-center justify-center w-full h-10 text-center text-xs font-bold uppercase text-white rounded-bl-[5px] rounded-br-[5px] bg-slate-600 hover:text-white/80 transition-colors"
          href="#"
        >
          Ver todas
        </a>
      </StyledContent>
    </Popover.Portal>
  )
}
