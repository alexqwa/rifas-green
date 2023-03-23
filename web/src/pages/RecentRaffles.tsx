import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Global/Footer"

import { Header } from "../components/Global/Header"
import { RaffleCard } from "../components/RaffleCard"

import { useRaffle } from "../hooks/useRaffle"

export function RecentRaffles() {
  const { raffles } = useRaffle()
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <main className="my-20">
        <section className="max-w-[1120px] m-auto">
          <h1 className="text-black text-5xl font-bold mb-4 self-start relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-transparent">
            Rifas recentes
          </h1>
          <p className="text-slate-500 text-base">
            Participe das rifas mais recentes e aumente suas chances de ganhar!
          </p>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {raffles.map((raffle) => {
              function handleEditRaffles() {
                navigate(raffle.id)
              }

              return (
                <RaffleCard
                  key={raffle.id}
                  urlTo={raffle.id}
                  title={raffle.title}
                  content={raffle.content}
                  editRaffles={handleEditRaffles}
                />
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
