import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Importantes from './pages/Importantes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Importantes" element={<Importantes />} />
    </Routes>
  );
}
