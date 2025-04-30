import React, { useState, useEffect } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadResources = async () => {
      // Simular carga de recursos en segundo plano
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 15, 100))
      }, 150)

      // Esperar el tiempo mínimo de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000))
      clearInterval(interval)
      setIsLoading(false)
    }

    loadResources()
  }, [])

  return (
    <div className="root-container">
      {isLoading && (
        <div className="loading-overlay">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <Loading />
        </div>
      )}

      {/* Contenido principal que se carga en segundo plano */}
      <div className={`background-content ${isLoading ? 'loading' : 'loaded'}`}>
        <Router>
          <Routes>
            <Route path="/2025/" element={<LazyApp />} />
            <Route path="/2025/past" element={<LazyPast />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
)
