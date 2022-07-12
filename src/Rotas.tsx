import { Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Dashboard from './pages/Dashboard';
import Fotos from './pages/Fotos';
import Historia from './pages/Historia';

const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/Contato' element={<Contato />} />
      <Route path='/Historia' element={<Historia />} />
      <Route path='/Fotos' element={<Fotos />} />
    </Routes>
  );
}
export default Rotas;