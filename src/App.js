import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ItemListContainer/>
      </div>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:id' element={<Item />} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:cat' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
