
import { Link, Outlet } from "react-router-dom"
import './Layout.css'


function Layout() {
    return (
        <>
        <nav>
            <ul className="listacontainer">
                <li className="lista">
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li className="lista">
                    <Link to={"productos"}>Productos</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout