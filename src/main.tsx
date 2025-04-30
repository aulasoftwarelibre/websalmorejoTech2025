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
  const [progress, setProgress] = useState(10)
  const [fadeClass, setFadeClass] = useState('')

  // Efecto para controlar el scroll
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll')
      document.documentElement.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('no-scroll')
    }
  }, [isLoading])

  useEffect(() => {
    const loadResources = async () => {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 15, 100))
      }, 150)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      clearInterval(interval)

      setFadeClass('fade-out')
      setTimeout(() => setIsLoading(false), 1000)
    }

    loadResources()
  }, [])

  return (
    <div className="root-container">
      {isLoading && (
        <div className={`loading-overlay ${fadeClass}`}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <Loading />
        </div>
      )}

      <div className={`background-content ${isLoading ? '' : 'fade-in'}`}>
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
