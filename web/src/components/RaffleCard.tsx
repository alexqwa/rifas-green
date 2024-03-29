import { Link } from "react-router-dom"

type RaffleCardProps = {
  title: string

  content: {
    price: string
    category: string
    phoneNumber: string
    numbersOfRaffles: string
  }

  urlTo: string
  editRaffles: () => void
}

export function RaffleCard({
  title,
  content,
  urlTo,
  editRaffles,
}: RaffleCardProps) {
  return (
    <div className="bg-white relative rounded-[5px] w-full overflow-hidden p-4 border-2 border-rifas-border-line">
      <img
        className="rounded-[5px] w-full"
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg"
        alt="Tdadad"
      />
      <footer className="flex flex-col items-start gap-1 my-3">
        <Link to={urlTo} className="font-bold text-slate-600">
          {title}
        </Link>
        <span className="text-slate-500 text-sm">{content.price}</span>
      </footer>
      <button
        onClick={() => editRaffles()}
        className="text-sm uppercase text-white font-bold rounded-[5px] bg-slate-600/50 hover:bg-violet-500 transition-colors w-full h-[50px]"
      >
        Editar rifa
      </button>
    </div>
  )
}
