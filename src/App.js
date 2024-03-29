import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/item/detail/:id/:nombre/:precio/:categoria/:marca' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
