import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/HeaderPhone/Header'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'
import Timetable from './components/Timetable/Timetable'
import Info from './components/InfoTest/Info'
import { SponsorProps } from './components/Sponsors'
import sponsors from './data/sponsors.json'
import { SponsorsGrid } from './components/Sponsors/grid'

function App() {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <Header />
      </div>
      <Info />
      <SponsorsGrid sponsors={sponsors as SponsorProps[]} />
      <Footer />
    </>
  )
}

export default App
