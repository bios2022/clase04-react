
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer bienvenida='Aca estan las mejores ofertas'/>
    </div>
  );
}

export default App;

