import { Link } from "react-router-dom"

function Producto({nombre,precio,id}) {
    return (
        <Link to={`/productos/${id}`}>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </Link>
    )
}

export default Producto