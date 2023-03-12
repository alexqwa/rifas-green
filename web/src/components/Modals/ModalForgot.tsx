import { FormEvent, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { StyledContent, StyledOverlay } from "../../stitches/stitchesModal"
import { PaperPlaneTilt, X } from "phosphor-react"

import { Input } from "../Global/Input"
import { Button } from "../Global/Button"

export function ModalForgot() {
  const [address, setAddress] = useState("")

  function handleForgotPassword(event: FormEvent) {
    event.preventDefault()

    setAddress("")
  }

  return (
    <Dialog.Portal>
      <StyledOverlay className="bg-black/60 inset-0 fixed z-[9999]" />
      <StyledContent className="z-[9999] fixed py-8 px-10 bg-white border border-rifas-border-line w-[480px] rounded-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-2xl font-bold text-slate-600">
            Esqueci minha senha
          </Dialog.Title>
          <Dialog.Close className="w-9 h-9 flex items-center justify-center hover:bg-rifas-border-line transition-colors rounded-[5px]">
            <X size={20} className="text-slate-600" />
          </Dialog.Close>
        </div>

        <form onSubmit={handleForgotPassword} className="mt-10 space-y-4">
          <Input
            placeholder="Digite seu e-mail"
            type="email"
            required
            autoFocus
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          >
            <PaperPlaneTilt
              size={16}
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </Input>
          <Button type="submit" title="Recuperar" w="full" h="[50px]" />
          <Dialog.Close className="w-full text-sm text-[#87868B] hover:underline self-center">
            Voltar
          </Dialog.Close>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
