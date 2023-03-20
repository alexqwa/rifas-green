import {
  User,
  Globe,
  ChartLineUp,
  BookmarkSimple,
  PaintBrushBroad,
  ShoppingCartSimple,
} from "phosphor-react"

export function ChooseUs() {
  return (
    <section className="max-w-[85%] m-auto my-14 flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-5xl text-center">
        Por que escolher a plataforma Rifas Green?
      </h1>
      <div className="grid grid-cols-3 mt-14">
        <div className="border-b border-r border-rifas-border-line pb-[52px] pr-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <Globe size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">
            Domínio próprio
          </h1>
          <p className="text-black/80 font-light leading-6">
            Adicione o seu próprio domínio e deixe o seu site ainda mais
            profissional.
          </p>
        </div>
        <div className="border-b border-r border-rifas-border-line pb-[52px] pl-[52px] pr-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <ShoppingCartSimple size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">
            Pagamentos automáticos
          </h1>
          <p className="text-black/80 font-light leading-6">
            Receba pagamentos automáticos via PIX ou cartão de crédito.
          </p>
        </div>
        <div className="border-b border-rifas-border-line pb-[52px] pl-[52px] pr-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <BookmarkSimple size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">
            Rifinhas e promoções
          </h1>
          <p className="text-black/80 font-light leading-6">
            Crie promoções, cupons de desconto e rifinhas para alavancar ainda
            mais as suas vendas.
          </p>
        </div>
        <div className="border-r border-rifas-border-line pt-[52px] pr-[52px] pb-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <User size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">Afiliados</h1>
          <p className="text-black/80 font-light leading-6">
            Adicione afiliados para ajudar a vender a sua rifa.
          </p>
        </div>
        <div className="border-r border-rifas-border-line p-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <PaintBrushBroad size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">Aparência</h1>
          <p className="text-black/80 font-light leading-6">
            Coloque sua logo, edite as cores e o slide para ficar a sua cara.
          </p>
        </div>
        <div className="p-[52px] gap-[6px] block justify-center">
          <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
            <ChartLineUp size={28} color="#fff" />
          </div>
          <h1 className="text-black font-bold text-2xl mb-2">
            Maiores compradores
          </h1>
          <p className="text-black/80 font-light leading-6">
            Veja a qualquer momento quem são os usuários que mais compram
            bilhetes em sua rifa.
          </p>
        </div>
      </div>
    </section>
  )
}
