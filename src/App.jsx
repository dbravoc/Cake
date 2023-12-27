import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Asegúrate de importar el componente Navbar
import Home from './components/Home'; // Tu componente para la vista Home
import Contacto from './components/Contacto'; // Tu componente para la vista Contacto
import './App.css'; // Asegúrate de importar el archivo CSS

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;