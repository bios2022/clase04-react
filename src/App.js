import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  const handleOnAdd = (cantidad) => {
    console.log(cantidad )
  }
  
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = '/' element = {<ItemListContainer bienvenida='Aca estan las mejores ofertas'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer bienvenida={'Resultados de la busqueda'}/>}/>
            <Route path = '/detail/:productId' element = {<ItemDetailContainer />} />
            <Route path = '*' element={<h1>404 No se encuentra</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

