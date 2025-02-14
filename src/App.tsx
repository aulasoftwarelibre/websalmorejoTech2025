import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'
import Timetable from './components/Timetable/Timetable'
import Info from './components/InfoTest/Info'

function App() {
  return (
    <>
    <div className="appContainer">
      <Navbar />
      <Header />
    </div>
      <Info/>
    </>
  )
}

export default App
