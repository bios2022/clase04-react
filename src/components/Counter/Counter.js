import { useState } from "react";
import './Counter.css';

const Counter = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)
    {/*console.log(onAdd={contador}, stock)*/}
    const sumar = () => {
        if(contador < stock){
            setContador (contador + 1)
        }
    }
    const restar = () => {
        if(contador > 1){
            setContador (contador - 1)
        }
    }

    return (
        <>
            <div className="pie-card">
                <div className="bar-contador">
                    <div><button className="btn-square" onClick={restar}>-</button></div>
                    <div><h2>{contador}</h2></div>
                    <div><button className="btn-square" onClick={sumar}>+</button></div>
                </div>
                <div>
                    <button className="btn-carrito" onClick={() => onAdd={contador}}>Agregar al chango</button>
                </div>
            </div>
        </>
    )
}



export default Counter;