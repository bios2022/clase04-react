import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => { 
    return (
        <nav className="Navbar">
            <div>
                <h1>Electro Online</h1>
            </div>
            <div>
                <button>Inicio</button>
                <button>Ofertas Web</button>
                <button>Tienda</button>  
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar