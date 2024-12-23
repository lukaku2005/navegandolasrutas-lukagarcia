import sobresPokemon from "../productos";
import Producto from "./Producto";
import { useState } from "react";


const expansiones = {
    SOLLUNA: "Sol y Luna",
    XY: "XY",
    ESPADAESCUDO: "Espada y Escudo",

};
function Productos() {

    const [selectedCategory, setSelectedcategory] = useState ("");

    const filteredItems = selectedCategory ? sobresPokemon.filter(item=>item.expansion === selectedCategory) :sobresPokemon;

    return (
        <div>
            <div>
                <button onClick={()=> setSelectedcategory(expansiones.SOLLUNA)}>Sol y Luna</button>
                <button onClick={()=> setSelectedcategory(expansiones.XY)}>XY</button>
                <button onClick={()=> setSelectedcategory(expansiones.ESPADAESCUDO)}>Espada y Escudo</button>
            </div>
            {filteredItems.map(prod=>(
                <Producto key={prod.id} {...prod} />
            ))}
        </div>
    )
}

export default Productos