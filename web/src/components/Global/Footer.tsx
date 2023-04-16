import { Link } from "react-router-dom"

import rifasIcon from "../../assets/images/logo.svg"

export function Footer() {
  return (
    <footer className="styles_footer__ktjjw">
      <div className="styles_container__htajwjsy">
        <div className="styles_content__ktjjwdtsyxk">
          <img
            className="styles_image__ktjjwbnl"
            src={rifasIcon}
            alt="Rifas Green"
          />
          <p className="styles_subtitle__htwtrwjgtu mb-1">
            &copy; Rifas Green 2022
          </p>
          <p className="styles_subtitle__htwtrwjgtu">
            Todos os direitos reservados
          </p>
        </div>
        <div className="styles_content__htsjwzluajkwwj">
          <ul className="styles_list__ypqajkqujwlyj">
            <span className="styles_span__xufs">Assessoria de imprensa</span>
            <a href="#" className="styles_anchor__fshtwf">
              alexandre@rifasgreen.com.br
            </a>
            <a href="#" className="styles_anchor__fshtwf">
              gabriel@rifasgreen.com.br
            </a>
          </ul>
          <ul className="styles_list__ypqajkqujwlyj">
            <span className="styles_span__xufs">Plataforma</span>
            <Link to="/" className="styles_anchor__fshtwf">
              Ínicio
            </Link>
            <Link to="/raffles" className="styles_anchor__fshtwf">
              Criar rifa
            </Link>
            <Link to="#" className="styles_anchor__fshtwf">
              Página de perfil
            </Link>
            <a href="#" className="styles_anchor__fshtwf">
              Sorteios
            </a>
          </ul>
          <ul className="styles_list__ypqajkqujwlyj">
            <span className="styles_span__xufs">Sobre</span>
            <a href="#" className="styles_anchor__fshtwf">
              A Rifa Green
            </a>
            <a href="#" className="styles_anchor__fshtwf">
              Direitos autorais
            </a>
            <a href="#" className="styles_anchor__fshtwf">
              Termos de uso
            </a>
            <a href="#" className="styles_anchor__fshtwf">
              Políticas de privacidade
            </a>
          </ul>
          <ul className="styles_list__ypqajkqujwlyj">
            <span className="styles_span__xufs">Dúvidas</span>
            <a href="#" className="styles_anchor__fshtwf">
              Comunidade
            </a>
            <a href="#" className="styles_anchor__fshtwf">
              Central de ajuda
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
