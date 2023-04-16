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
    <section className="styles_section__CkntzeUPq">
      <h1 className="styles_title__TjynkzPbpt">
        Por que escolher a plataforma Rifas Green?
      </h1>
      <div className="styles_container__CnkizPcwnzybp">
        <div className="styles_box1__BqW">
          <div className="styles_gap__GfU">
            <Globe size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Domínio próprio</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Adicione o seu próprio domínio e deixe o seu site ainda mais
            profissional.
          </p>
        </div>
        <div className="styles_box2__BqW">
          <div className="styles_gap__GfU">
            <ShoppingCartSimple size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Pagamentos automáticos</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Receba pagamentos automáticos via PIX ou cartão de crédito.
          </p>
        </div>
        <div className="styles_box3__BqW">
          <div className="styles_gap__GfU">
            <BookmarkSimple size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Rifinhas e promoções</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Crie promoções, cupons de desconto e rifinhas para alavancar ainda
            mais as suas vendas.
          </p>
        </div>
        <div className="styles_box4__BqW">
          <div className="styles_gap__GfU">
            <User size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Afiliados</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Distribua suas demandas com afiliados, eles irão lhe ajudar a vender
            as suas rifas.
          </p>
        </div>
        <div className="styles_box5__BqW">
          <div className="styles_gap__GfU">
            <PaintBrushBroad size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Aparência</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Coloque sua logo, edite as cores e o slide para ficar a sua cara.
          </p>
        </div>
        <div className="styles_box6__BqW">
          <div className="styles_gap__GfU">
            <ChartLineUp size={28} color="#fff" />
          </div>
          <h1 className="styles_title__TnkzqGfU">Maiores compradores</h1>
          <p className="sytyles_subtitle__TnkzqGfU">
            Veja a qualquer momento quem são os usuários que mais compram
            bilhetes em sua rifa.
          </p>
        </div>
      </div>
    </section>
  )
}
