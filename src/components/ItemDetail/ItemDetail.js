import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useState } from 'react'

const ItemDetail = ({nombre, img_detalle, precio, descrip, color, peso, envio, cuotas}) => {
    
    
    const [cantidad, setCantidad] = useState(0)
    //console.log(cantidad)



    const handleOnAdd = (cantidad) => {
        console.log(cantidad )
        setCantidad(cantidad)
      }
      

    return(
        <>
            <li className='detalle_producto'>
                <div>
                    <img src={img_detalle} alt={nombre} />
                </div>
                <div>
                    <li className='caracteristicas'>
                        <h3>{nombre}</h3>
                        <h2>{precio}</h2>
                        <h3>{cuotas}</h3>
                        <p>{descrip}</p>
                        <h3>{color}</h3>
                        <h3>{peso}</h3>
                        <h3>{envio}</h3>                        
                        {/*<button className='btn_carrito'>Agregar al Carro</button>*/}
                        <Counter  onConfirm ={handleOnAdd} stock={'stock'} />
                    </li>
                </div>
            </li>
        </>
    )
}
export default ItemDetail