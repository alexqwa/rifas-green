import { FormEvent } from "react"
import { useAuth } from "../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { PaperPlaneTilt, Password } from "phosphor-react"
import { FaGoogle } from "react-icons/fa"

import rifasIcon from "../assets/images/logo.svg"
import { Input } from "../components/Global/Input"

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

    navigate("/dashboard")
  }

  return (
    <div className="flex max-w-[936px] h-screen items-center m-auto">
      <aside className="w-1/2 flex flex-col justify-center items-start">
        <img className="h-[90px] mb-10" src={rifasIcon} alt="Rifas Green" />
        <h1 className="text-6xl text-white font-bold">
          Faça seu login na plataforma
        </h1>
      </aside>
      <form className="bg-[#202024] w-1/2 rounded-lg p-16 flex flex-col">
        <section className="grid grid-flow-row gap-2">
          <Input placeholder="Seu E-mail" type="text" autoFocus>
            <PaperPlaneTilt
              size={16}
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />
          </Input>
          <Input placeholder="Sua Senha" type="password">
            <Password
              size={16}
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />
          </Input>
        </section>
        <a
          href=""
          className="self-start font-bold text-sm text-violet-500 opacity-80 hover:opacity-100 transition-opacity mt-2 mb-6"
        >
          Esqueci minha senha
        </a>
        <button
          onClick={handleSignIn}
          className="font-bold disabled:cursor-not-allowed disabled:bg-violet-600 text-violet-300 hover:bg-violet-500 transition-colors rounded-[5px] h-[50px] bg-violet-500/80 w-full"
        >
          ENTRAR
        </button>
        <div className="text-sm mt-6 text-white/70 text-center">
          Não tem uma conta?&nbsp;
          <Link
            to="/signup"
            className="font-bold text-violet-500 opacity-80 text-sm hover:opacity-100 transition-opacity"
          >
            Registre-se
          </Link>
        </div>
        <div className="relative text-xs text-[rgb(135, 134, 139)] my-6 mx-0 text-center before:left-0 before:content-[''] before:absolute before:top-1/2 before:w-[calc(50%-25px)] before:h-[1px] before:bg-rifas-border-line after:right-0 after:content-[''] after:absolute after:top-1/2 after:w-[calc(50%-25px)] after:h-[1px] after:bg-rifas-border-line" />
        <div className="flex">
          <div className="whitespace-nowrap text-white/70 text-sm mr-6 self-center">
            ou entre com
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full justify-center flex items-center hover:bg-red-500 hover:firstfocus-visible:text-white bg-rifas-border-line rounded-[5px] border-0 text-white h-[50px] transition-colors text-base font-bold text-center"
          >
            <FaGoogle size={20} className="mr-2" />
            Google
          </button>
        </div>
      </form>
    </div>
  )
}