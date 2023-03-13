import { Link } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"
import { BellSimple, MagnifyingGlass, UserCirclePlus } from "phosphor-react"
import { PopoverFriendRequest } from "../Popovers/PopoverFriendRequest"
import { PopoverNotification } from "../Popovers/PopoverNotification"
import { PopoverProfile } from "../Popovers/PopoverProfile"
import { useAuth } from "../../hooks/useAuth"

import rifasIcon from "../../assets/images/logo.svg"

export function Navbar() {
  const { user } = useAuth()

  return (
    <div className="sticky top-0 flex items-center z-[9998] justify-between px-8 h-[76px] backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-b border-rifas-border-line">
      <div className="flex items-center">
        <Link className="flex" to="/dashboard">
          <img className="h-9" src={rifasIcon} alt="Rifas Green" />
        </Link>
      </div>

      <div className="flex flex-1 gap-2 items-center justify-end">
        <button className="w-[46px] h-[46px] text-slate-600 hover:text-violet-500 flex items-center justify-center transition-colors">
          <MagnifyingGlass size={24} />
        </button>
        <Popover.Root>
          <Popover.Trigger className="w-[46px] h-[46px] text-slate-600 hover:text-violet-500 flex items-center justify-center hover:first:stroke-blue-500 transition-colors">
            <UserCirclePlus size={24} weight="fill" />
          </Popover.Trigger>
          <PopoverFriendRequest />
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger className="w-[46px] h-[46px] text-slate-600 hover:text-violet-500 flex items-center justify-center hover:first:text-white transition-colors">
            <BellSimple size={24} weight="fill" />
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
  )
}
