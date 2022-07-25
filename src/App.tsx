import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Basket from './pages/Basket';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="preview-scroll bg-primary-100 text-secondary-800">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
          <Route path="/Basket" element={<Basket />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
