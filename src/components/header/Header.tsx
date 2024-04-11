import { Link } from "react-router-dom";
// import s from './header.module.css'
import { LINKS } from "../../constants/nav.constants";


export default function Header() {


    return (
        <header className="bg-emerald-500 text-white">
            <marquee className="bg-[#ff6c47]">
                <small>
                    Pedido mínimo para envío $5.000 I ¡Sumá 10% de descuento abonando en efectivo!
                </small>
            </marquee>
            <section className="max-w-6xl mx-auto">
                <div className="flex justify-between p-2">
                    <div className="flex items-center">
                        <h1 className="font-[Hello] mt-2 text-xl">Alma de Colibrí</h1>
                        <img src="/logo.png" alt="" className="w-11" />
                    </div>
                    <div className="flex items-center">
                        <input className="rounded-2xl p-1 lg:w-96" type="search" name="search" id="" placeholder="🔍"/>
                    </div>
                    <div>

                        <Link 
                            to="" 
                            className="bg-emerald-600 hover:bg-emerald-300 hover:text-emerald-900
                            font-bold py-1 px-5 rounded 
                            "
                        >
                            Login
                        </Link>
                        {/* <p>
                            4 🛒
                        </p> */}
                    </div>
                </div>
                <nav className="py-2">
                    <ul className="flex gap-4 uppercase w-fit mx-auto">
                        {LINKS.map(link => (
                            <li key={link.path}>
                                <Link to={link.path} className="hover:text-[#ff6c47] hover:font-bold">
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