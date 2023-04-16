import { useNavigate } from "react-router-dom"

import { Tab } from "../components/Tab"
import { ChooseUs } from "../components/ChooseUs"
import { Footer } from "../components/Global/Footer"
import { Navbar } from "../components/Global/Navbar"
import { AccordionQuestions } from "../components/Accordion/AccordionQuestions"

import moneyFaceImg from "../assets/images/money-face.png"
import homeDesktopImg from "../assets/images/home-desktop.png"

export function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main className="styles_main__rfns">
        <section className="styles_section__LnAjrJsD">
          <div className="styles_container__Nsxnts">
            <aside className="styles_aside__Fxnij">
              <h1 className="styles_title__Yqynqmtsj">
                Crie a sua rifa online em
                <br />
                questão de minutos!
              </h1>
              <p className="styles_subtitle__Fqhjsij">
                Alcance um público maior e aumente suas chances <br /> de
                sucesso através do Rifas Green.
              </p>
              <button
                onClick={() => navigate("/raffles")}
                className="styles_button__Wnmf"
              >
                Criar minha rifa
              </button>
            </aside>
            <img
              className="styles_image__Nlqjtxxzwjynt"
              src={homeDesktopImg}
              alt="Home Desktop"
            />
          </div>
        </section>
        <section className="styles_section__Yfg">
          <div className="styles_container__HTqjwYjSl">
            <h1 className="styles_title__Htrzygynsj">
              Somos uma plataforma completa de <br /> vendas e gerenciamento de
              rifas
            </h1>
            <Tab />
          </div>
        </section>
        <section className="styles_section__LnAjrJsD">
          <div className="styles_container__GrUbRjKp">
            <div className="styles_image__MoNkjS">
              <img className="h-20" src={moneyFaceImg} alt="Money Face" />
            </div>
            <h1 className="styles_title__YjHjp">
              Receba você mesmo o dinheiro
            </h1>
            <p className="styles_subtitle__Itnslwj">
              Todo o dinheiro que você arrecadar vai diretamente para a sua
              conta bancária!
            </p>
            <button
              onClick={() => navigate("/raffles")}
              className="styles_button__Wnmf"
            >
              Criar minha rifa
            </button>
          </div>
        </section>
        <ChooseUs />
        <hr />
        <section className="styles_section__SfJ">
          <h1 className="styles_title__Ynqaj">Dúvidas frequentes</h1>
          <div className="styles_container__htsrgjwj">
            <AccordionQuestions from={0} to={3} />
            <AccordionQuestions from={3} to={6} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
