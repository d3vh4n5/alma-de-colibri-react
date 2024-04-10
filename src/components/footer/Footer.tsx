import { LINKS } from "../../constants/nav.constants"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white p-2">
      <section className="max-w-6xl mx-auto">
        
        <div className="flex items-center py-5">
            <h1 className="font-[Hello] mt-2 text-xl">Alma de Colibrí</h1>
            <img src="/logo.png" alt="" className="w-11" />
        </div>

        <div className="flex justify-between">

          <nav className="w-1/3">
            <h3 className="font-bold text-xl mb-4">Mapa del sitio</h3>
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
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-4">Información de contacto</h3>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-4">Mapa del sitio</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, consectetur cupiditate praesentium obcaecati tenetur sit?
            </p>
          </div>

        </div>

        <hr className="my-6"/>

        <div>
          <ul className="flex gap-4 w-fit mx-auto my-3">
            <li>Social</li>
            <li>Social</li>
            <li>Social</li>
            <li>Social</li>
          </ul>
          <div className="flex justify-between py-5">
            <small>2024 ©️ <span translate="no">Alma de Colibrí</span>. Todos los derechos reservados</small>
            <small>Desarrollado por 
              <span translate="no">
                <a href="https://www.linkedin.com/in/andres-jaimovich/" rel="noopner noreferer" target="_blank" className="text-blue-400"> Andrés Jaimovich</a> &
                <a href="https://www.linkedin.com/in/juanangelbasgall/" rel="noopner noreferer" target="_blank" className="text-blue-400"> Juan Basgall</a>
              </span>
            </small>
          </div>
        </div>

      </section>
    </footer>
  )
}

export default Footer