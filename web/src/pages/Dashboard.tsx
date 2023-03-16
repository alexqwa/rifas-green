import { Navbar } from "../components/Global/Navbar"
import { useAuth } from "../hooks/useAuth"

export function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1152px] m-auto py-16">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <h2 className="font-bold text-4xl text-slate-600">
              Olá, {user?.name.split(" ", 1)}
            </h2>
            <div className="flex flex-col ml-12">
              <p className="text-base text-slate-500">
                É bom ter você de volta!
              </p>
              <p className="text-base text-slate-500 mt-3">
                Continue criando suas rifas, e publique agora mesmo
              </p>
            </div>
          </div>
          <span className="text-base text-slate-500">#NeverStopRaffle</span>
        </div>
        <main className="w-full flex flex-col items-center">
          <div className="p-20 border border-rifas-border-line rounded-lg bg-white">
            <header>
              <h1>Nome do div</h1>
            </header>
          </div>
          <div className="p-20 border border-rifas-border-line rounded-lg bg-white">
            <header>
              <h1>Nome do div</h1>
            </header>
          </div>
        </main>
      </div>
    </>
  )
}
