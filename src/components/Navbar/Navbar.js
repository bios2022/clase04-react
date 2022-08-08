import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return (
        <nav className="Navbar">
            <Link to= '/'>
                <h1>Electro Online</h1>
            </Link>
            <div className='Categories'>
                <Link to= '/category/celular' className='btn-navbar'>Celulares</Link>
                <Link to= '/category/hogar' className='btn-navbar'>Hogar</Link>
                <Link to= '/category/laptops' className='btn-navbar'>Laptops</Link>  
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar