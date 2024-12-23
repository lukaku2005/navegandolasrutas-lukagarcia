import sobresPokemon from "../productos";
import { useParams } from "react-router-dom";

function DetalleProductos(){
    const {id} = useParams();
    console.log(id)
    const producto=sobresPokemon.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>El producto no se ha encontrado</h2>
    }

    return (
        <div>
            <h2>Detalle del producto</h2>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <h3>{producto.precio}</h3>
        </div>
    )
}

export default DetalleProductos