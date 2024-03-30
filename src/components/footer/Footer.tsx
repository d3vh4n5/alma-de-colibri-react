import { LINKS } from "../../constants/nav.constants"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <nav>
          <h3>Mapa del sitio</h3>
          <ul>
              {LINKS.map(link => (
                  <li key={link.path}>
                      <Link to={link.path}>
                          {link.label}
                      </Link>
                  </li>
              ))}
          </ul>

        </nav>
        <small>2024 @ Alma de Colibrí</small>
    </footer>
  )
}

export default Footer