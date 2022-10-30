import { useNavigate } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog"
import { CircleWavyWarning, SignOut } from "phosphor-react"
import { StyledContent, StyledOverlay } from "../../stitches/stitchesModal"

export function ModalExitPlatform() {
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
  }

  return (
    <Dialog.Portal>
      <StyledOverlay className="bg-black/60 inset-0 fixed z-[9999]" />
      <StyledContent className="z-[9999] fixed top-[calc(50%-270px)] left-[calc(50%-240px)] bg-[#202024] w-[480px] h-[340px] flex flex-col items-center justify-center rounded-lg shadow-black/25 translate-y-[100px]">
        <h1 className="text-white font-bold text-2xl mb-[30px]">
          Quer mesmo sair? :/
        </h1>
        <div className="flex items-center gap-2">
          <Dialog.Close className="w-[140px] h-[160px] font-bold text-white text-base bg-violet-500/80 rounded-[5px] hover:bg-violet-500 transition-colors flex flex-col items-center justify-center gap-2">
            <CircleWavyWarning size={32} />
            Noooo!
          </Dialog.Close>
          <button
            onClick={handleSignOut}
            className="w-[140px] h-[160px] font-bold text-white text-base bg-zinc-900 hover:bg-rifas-border-line rounded-[5px] transition-colors flex flex-col items-center justify-center gap-2"
          >
            <SignOut size={32} />
            Sair
          </button>
        </div>
      </StyledContent>
    </Dialog.Portal>
  )
}
