"use client"
import { useState } from "react"
import Counter from "./Counter"
import Boton from "./Boton"

const QtySelector = () => {
    const [quantity, setQuantity] = useState(1);


    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={10} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-blue-600" >Agregar al carrito</Boton>
        </div>
    )
}

export default QtySelector;