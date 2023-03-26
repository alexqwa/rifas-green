import { FormEvent } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Link, useNavigate } from "react-router-dom"
import { PaperPlaneTilt, Password } from "phosphor-react"
import { FaGoogle } from "react-icons/fa"

import rifasIcon from "../assets/images/logo.svg"

import { Input } from "../components/Global/Input"
import { Button } from "../components/Global/Button"
import { ModalForgot } from "../components/Modals/ModalForgot"

import { useAuth } from "../hooks/useAuth"

export function SignIn() {
  const navigate = useNavigate()
  const { signInWithGoogle, user } = useAuth()

  function handleSignIn(event: FormEvent) {
    event.preventDefault()
  }

  async function handleGoogleSignIn(event: FormEvent) {
    event.preventDefault()

    if (!user) {
      await signInWithGoogle()
    }

    navigate("/raffles")
  }

  return (
    <div className="flex max-w-[936px] h-screen items-center m-auto">
      <aside className="w-1/2 flex flex-col justify-center items-start">
        <Link to="/">
          <img className="h-[90px] mb-10" src={rifasIcon} alt="Rifas Green" />
        </Link>
        <h1 className="text-6xl text-slate-500 font-bold">
          Faça seu login na plataforma
        </h1>
      </aside>
      <form className="bg-white border border-rifas-border-line w-1/2 rounded-lg p-16 flex flex-col">
        <section className="grid grid-flow-row gap-2">
          <Input placeholder="Seu E-mail" type="text" autoFocus>
            <PaperPlaneTilt
              size={16}
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
          <Input placeholder="Sua Senha" type="password">
            <Password
              size={16}
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
        </section>
        <Dialog.Root>
          <Dialog.Trigger className="self-start font-bold text-sm text-violet-500 opacity-80 hover:opacity-100 transition-opacity mt-2 mb-6">
            Esqueci minha senha
          </Dialog.Trigger>
          <ModalForgot />
        </Dialog.Root>
        <Button title="Entrar" w="full" h="[50px]" />
        <div className="text-sm mt-6 text-slate-500 text-center">
          Não tem uma conta?&nbsp;
          <Link
            to="/signup"
            className="font-bold text-violet-500 opacity-80 text-sm hover:opacity-100 transition-opacity"
          >
            Registre-se
          </Link>
        </div>
        <div className="relative my-6 mx-0 before:left-0 before:content-[''] before:absolute before:top-1/2 before:w-[calc(50%-25px)] before:h-[1px] before:bg-rifas-border-line after:right-0 after:content-[''] after:absolute after:top-1/2 after:w-[calc(50%-25px)] after:h-[1px] after:bg-rifas-border-line" />
        <div className="flex">
          <div className="whitespace-nowrap text-slate-500 text-sm mr-6 self-center">
            ou entre com
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center hover:bg-violet-500 hover:text-white bg-[rgb(249,250,251)] border border-rifas-border-line rounded-lift text-violet-500 h-[50px] transition-colors font-bold"
          >
            <FaGoogle size={20} className="mr-2" />
            Google
          </button>
        </div>
      </form>
    </div>
  )
}
