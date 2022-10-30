import * as Popover from "@radix-ui/react-popover"
import { Notification } from "../Notification"
import { StyledContent } from "../../stitches/stitchesPopover"

export function PopoverNotification() {
  return (
    <Popover.Portal>
      <StyledContent className="block absolute w-[448px] right-[calc(100%-23px)] top-[calc(100%+25px)] shadow-lg">
        <Popover.Arrow className="fill-[rgb(41,41,46)] absolute right-[calc(224px-31px)] w-4 h-2" />
        <header className="flex items-center justify-between bg-[rgb(41,41,46)] h-[50px] px-5 rounded-tl-[5px] rounded-tr-[5px]">
          <span className="text-base text-white font-bold">Notificações</span>
          <button
            className="uppercase text-xs font-bold text-violet-500/80 transition-colors hover:text-violet-500"
            type="button"
          >
            Marcar todas como lidas
          </button>
        </header>
        <div className="bg-[rgb(18,18,20)]">
          <h4 className="text-sm font-normal text-white/70 py-2 px-5">
            Antigas
          </h4>

          <div className="space-y-[2px]">
            <Notification
              title="Bem vindos ao Rifas Green"
              description="Comece a rifar hoje mesmo!"
            />
            <Notification
              title="Bem vindos ao Rifas Green"
              description="Comece a rifar hoje mesmo!"
            />
            <Notification
              title="Bem vindos ao Rifas Green"
              description="Comece a rifar hoje mesmo!"
            />
            <Notification
              title="Bem vindos ao Rifas Green"
              description="Comece a rifar hoje mesmo!"
            />
            <Notification
              title="Bem vindos ao Rifas Green"
              description="Comece a rifar hoje mesmo!"
            />
          </div>
        </div>
        <a
          className="flex items-center justify-center w-full h-10 text-center text-xs font-bold uppercase text-violet-500/80 rounded-bl-[5px] rounded-br-[5px] bg-[rgb(41,41,46)] hover:text-violet-500 transition-colors"
          href="#"
        >
          Ver todas
        </a>
      </StyledContent>
    </Popover.Portal>
  )
}
