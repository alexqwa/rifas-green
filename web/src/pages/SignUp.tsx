import { Link } from "react-router-dom"
import { PaperPlaneTilt, User, Password, ArrowLeft } from "phosphor-react"

import rifasIcon from "../assets/images/logo.svg"

import { Input } from "../components/Global/Input"
import { Button } from "../components/Global/Button"

export function SignUp() {
  return (
    <div className="max-w-[1120px] h-screen items-center m-auto flex gap-32">
      <form className="w-1/2 p-16 bg-white border border-rifas-border-line rounded-[5px]">
        <h1 className="font-bold text-white text-2xl mb-9">Crie sua conta</h1>
        <section className="grid grid-flow-row gap-2">
          <Input placeholder="Seu E-mail" type="text" autoFocus>
            <PaperPlaneTilt
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
          <Input placeholder="Seu Nome" type="text">
            <User
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
          <Input placeholder="Sua Senha" type="password">
            <Password
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
          <Input placeholder="Confirme sua senha" type="password">
            <Password
              weight="fill"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-500"
            />
          </Input>
          <div className="text-center text-slate-500 text-sm leading-6 mt-3 mb-5">
            Ao se registrar, você aceita nossos&nbsp;
            <a
              href="/terms"
              className="text-sm font-bold hover:opacity-100 transition-opacity text-violet-500 opacity-80"
            >
              termos de uso&nbsp;
            </a>
            e a nossa&nbsp;
            <a
              href="/privacy"
              className="text-sm font-bold hover:opacity-100 transition-opacity text-violet-500 opacity-80"
            >
              política de privacidade
            </a>
            .
          </div>
          <Button title="Cadastrar" w="full" h="[50px]" />
        </section>
      </form>
      <aside className="w-1/2 h-[90px] flex flex-col justify-center items-start gap-5">
        <Link to="/">
          <img className="h-[90px] mb-8" src={rifasIcon} alt="Rifas Green" />
        </Link>
        <h1 className="text-4xl font-bold text-slate-500">
          Centanas de rifas
          <br /> todos os dias.
        </h1>
        <p className="text-base text-slate-500/70">
          Junte-se aos milhares de rifeiros, e comece já <br />a compartilhar
          suas rifas
        </p>
        <Link
          to="/signin"
          className="flex w-full items-center font-bold text-violet-500 text-sm mt-4 mb-6 mx-0 opacity-80 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft
            size={18}
            weight="bold"
            className="inline-block mr-4 align-middle"
          />
          Voltar para login
        </Link>
      </aside>
    </div>
  )
}
