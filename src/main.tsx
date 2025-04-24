import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Past from './pages/Past/Index.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/2025/" element={<App />} />
          <Route path="/2025/past" element={<Past />} />
        </Routes>
    </Router>
  </StrictMode>
);
