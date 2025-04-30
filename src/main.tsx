import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from './components/Loading/Loading.tsx'

const lazyLoadWithDelay = (
  importer: () => Promise<{ default: React.ComponentType }>
) => {
  return Promise.all([
    importer(),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([module]) => module)
}

const LazyApp = React.lazy(() => lazyLoadWithDelay(() => import('./App.tsx')))
const LazyPast = React.lazy(() =>
  lazyLoadWithDelay(() => import('./pages/Past/Index.tsx'))
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/2025/"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyApp />
            </React.Suspense>
          }
        />
        <Route
          path="/2025/past"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyPast />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
)
