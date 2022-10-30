export function RaffleCard() {
  return (
    <div className="bg-[#202024] rounded-[5px] w-full h-full overflow-hidden p-4 border-2 border-rifas-border-line">
      <img
        className="rounded-[5px] w-full"
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg"
        alt="Tdadad"
      />
      <footer className="flex flex-col items-start gap-1 my-3">
        <h1 className="font-bold text-white">
          RIFA: Sorteio de iphone 13 pro max
        </h1>
        <span className="text-white/60 text-sm">R$ 120</span>
      </footer>
      <button className="text-sm uppercase text-white font-bold rounded-[5px] bg-rifas-border-line hover:bg-violet-500 transition-colors w-full h-[50px]">
        Comprar
      </button>
    </div>
  )
}
