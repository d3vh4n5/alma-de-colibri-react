import { Link } from "react-router-dom";
import s from './header.module.css'
import { LINKS } from "../../constants/nav.constants";


export default function Header() {


    return (
        <header className={s.header}>
            <marquee className={s.news}>
                <small>
                    Pedido mínimo para envío $5.000 I ¡Sumá 10% de descuento abonando en efectivo!
                </small>
            </marquee>
            <section className={s.section}>
                <div className={s.top}>
                    <div className={s.logoContainer}>
                        <h1>Alma de Colibrí</h1>
                        <img src="/logo.png" alt="" className="logo" />
                    </div>
                    <div>
                        <input className={s.searchInput} type="search" name="search" id="" placeholder="🔍"/>
                    </div>
                    <div>

                        <button>Login</button>
                        <button>register</button>
                        <p>
                            4 🛒
                        </p>
                    </div>
                </div>
                <nav
                    className={s.nav}>
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
            </section>
        </header>
    )
}