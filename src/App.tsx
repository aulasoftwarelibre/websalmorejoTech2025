import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Map from './components/Map/Map'
import Timetable from './components/Timetable/Timetable'

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Header />
      <Info/>
    </div>
  )
}

export default App
