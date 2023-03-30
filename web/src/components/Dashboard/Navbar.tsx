import { Bell } from "phosphor-react"
import { Link } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"

import { PopoverNotification } from "../Popovers/PopoverNotification"
import { PopoverAccount } from "../Popovers/PopoverAccount"
import { useAuth } from "../../hooks/useAuth"

import rifasIcon from "../../assets/images/logo.svg"

export function Navbar() {
  const { user } = useAuth()

  return (
    <header className="relative z-40 h-[85px]">
      <div className="fixed flex items-center justify-center top-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] border-b border-[rgb(233,233,233)] backdrop-blur-[20px] backdrop-saturate-100">
        <div className="h-[85px] items-center w-[1120px] flex justify-between">
          <Link to="/raffles">
            <img className="h-9" src={rifasIcon} alt="Rifas Green" />
          </Link>

          <div className="flex gap-2 items-center justify-end">
            <Popover.Root>
              <Popover.Trigger className="w-[46px] h-[46px] text-slate-600 hover:text-violet-500 flex items-center justify-center transition-colors">
                <Bell size={24} />
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
              <PopoverAccount />
            </Popover.Root>
          </div>
        </div>
      </div>
    </header>
  )
}
