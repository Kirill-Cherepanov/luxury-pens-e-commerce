import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/Store" element={<Store />}>
          Store
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
      </Routes>
    </div>
  );
}

export default App;
