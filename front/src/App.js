import { BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">FEED DE TAREFAS</Link>
          <Link to="/importantes">MAIS IMPORTANTES</Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
