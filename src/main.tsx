import React from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading/Loading.tsx'; // Correctly import the Loading component
//import App from './App.tsx';
//import Past from './pages/Past/Index.tsx';
const LazyApp =React.lazy(()=> import('./App.tsx'));
const LazyPast =React.lazy(()=> import('./pages/Past/Index.tsx'));


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/2025/" element={
            <React.Suspense fallback={<Loading />}>
              <LazyApp />
            </React.Suspense>
            }/>
          <Route path="/2025/past" element={
            <React.Suspense fallback={<Loading />}>
              <LazyPast />
            </React.Suspense>
          }/>
        </Routes>
    </Router>
  </StrictMode>
);
