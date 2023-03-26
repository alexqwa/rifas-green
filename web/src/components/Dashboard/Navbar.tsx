import { Link } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"
import { BellSimple } from "phosphor-react"
import { PopoverNotification } from "../Popovers/PopoverNotification"
import { PopoverProfile } from "../Popovers/PopoverProfile"
import { useAuth } from "../../hooks/useAuth"

import rifasIcon from "../../assets/images/logo.svg"

export function Navbar() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-[9998] py-4 backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-b border-rifas-border-line">
      <div className="max-w-[1120px] m-auto flex items-center justify-between">
        <Link to="/raffles">
          <img className="h-9" src={rifasIcon} alt="Rifas Green" />
        </Link>

        <div className="flex flex-1 gap-2 items-center justify-end">
          <Popover.Root>
            <Popover.Trigger className="w-[46px] h-[46px] text-slate-600 hover:text-violet-500 flex items-center justify-center transition-colors">
              <BellSimple size={24} />
            </Popover.Trigger>
            <PopoverNotification />
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger className="flex items-center ml-2">
              <div className="max-w-[3.25rem] max-h-[3.25rem] relative shrink-0">
                <img
                  className="border-2 border-slate-500/80 w-full h-full max-w-full max-h-full p-[2px] rounded-[100%] bg-clip-content bg-cover"
                  src={`https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${user?.name}`}
                  alt={user?.name}
                />
              </div>
            </Popover.Trigger>
            <PopoverProfile />
          </Popover.Root>
        </div>
      </div>
    </header>
  )
}
