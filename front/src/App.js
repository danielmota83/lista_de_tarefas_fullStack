import { BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">Feed de tarefas</Link>
          <Link to="/importantes">Mais importantes</Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
