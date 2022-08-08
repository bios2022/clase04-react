import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    return (
        <li className='tarjeta_producto'>
            <h3>{product.nombre}</h3>
            <img className='img_producto' src={product.img} alt={product.nombre} />
            <h2>{product.precio}</h2>
            <h3>{product.cant_cuotas}</h3>
            <h3>{product.cuotas}</h3>
            <Link to={`/detail/${product.id}`} className='btn_detalle'>Ver Detalle</Link>
        </li>
    )
}

export default Item